import { createClientFromRequest } from 'npm:@base44/sdk@0.8.54';

const GMAIL = 'https://gmail.googleapis.com/gmail/v1/users/me';
const MAX_MESSAGES = 12;
const MAX_IMPORTS = 24;
const MEDIA_RE = /^(image|video)\//;

function headerValue(headers, name) {
  const found = (headers || []).find((h) => h.name && h.name.toLowerCase() === name);
  return found ? found.value : '';
}

function collectAttachments(part, out) {
  if (!part) return out;
  if (part.filename && part.body && part.body.attachmentId) {
    out.push({
      attachmentId: part.body.attachmentId,
      filename: part.filename,
      mimeType: part.mimeType || '',
      size: part.body.size || 0,
    });
  }
  if (Array.isArray(part.parts)) part.parts.forEach((p) => collectAttachments(p, out));
  return out;
}

function base64UrlToBytes(data) {
  const normalized = data.replace(/-/g, '+').replace(/_/g, '/');
  const binary = atob(normalized);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function gmailGet(url, accessToken) {
  return fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
    signal: AbortSignal.timeout(20000),
  });
}

export default async function (req) {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me().catch((e) => (e.status === 401 ? null : Promise.reject(e)));
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });
    if (user.role !== 'admin') return Response.json({ error: 'Admins only' }, { status: 403 });

    const body = await req.json().catch(() => ({}));
    const action = body.action;

    const { accessToken } = await base44.asServiceRole.connectors.getConnection('gmail');
    if (!accessToken) return Response.json({ error: 'Gmail is not connected' }, { status: 400 });

    if (action === 'search') {
      const query = typeof body.query === 'string' && body.query.trim() ? body.query.trim() : 'Reynolds';
      const listRes = await gmailGet(
        `${GMAIL}/messages?q=${encodeURIComponent(query)}&maxResults=${MAX_MESSAGES}`,
        accessToken
      );
      if (!listRes.ok) {
        return Response.json({ error: `Gmail search failed (${listRes.status})` }, { status: 502 });
      }
      const list = await listRes.json();
      const ids = (list.messages || []).map((m) => m.id);
      const messages = [];

      for (let i = 0; i < ids.length; i += 6) {
        const batch = ids.slice(i, i + 6);
        const results = await Promise.allSettled(
          batch.map(async (id) => {
            const res = await gmailGet(`${GMAIL}/messages/${id}?format=full`, accessToken);
            if (!res.ok) return null;
            return res.json();
          })
        );
        for (const result of results) {
          if (result.status !== 'fulfilled' || !result.value) continue;
          const msg = result.value;
          const payload = msg.payload || {};
          const attachments = collectAttachments(payload, []).filter((a) => MEDIA_RE.test(a.mimeType));
          if (!attachments.length) continue;
          messages.push({
            messageId: msg.id,
            subject: headerValue(payload.headers, 'subject') || '(no subject)',
            from: headerValue(payload.headers, 'from'),
            date: headerValue(payload.headers, 'date'),
            attachments,
          });
        }
      }

      return Response.json({ messages });
    }

    if (action === 'import') {
      const items = Array.isArray(body.items) ? body.items.slice(0, MAX_IMPORTS) : [];
      if (!items.length) return Response.json({ error: 'No attachments selected' }, { status: 400 });

      const added = [];
      const failed = [];

      for (let i = 0; i < items.length; i += 4) {
        const batch = items.slice(i, i + 4);
        const results = await Promise.allSettled(
          batch.map(async (item, offset) => {
            const messageId = String(item.messageId || '');
            const attachmentId = String(item.attachmentId || '');
            const filename = String(item.filename || 'media').replace(/[^\w.\-]/g, '_');
            const mimeType = String(item.mimeType || '');
            if (!messageId || !attachmentId || !MEDIA_RE.test(mimeType)) {
              throw new Error('Invalid attachment');
            }

            const res = await gmailGet(`${GMAIL}/messages/${messageId}/attachments/${attachmentId}`, accessToken);
            if (!res.ok) throw new Error(`Download failed (${res.status})`);
            const data = await res.json();
            if (!data.data) throw new Error('Empty attachment');

            const bytes = base64UrlToBytes(data.data);
            const upload = await base44.asServiceRole.integrations.Core.UploadPublicFile({
              file: new File([bytes], filename, { type: mimeType }),
            });

            return base44.asServiceRole.entities.AboutMedia.create({
              url: upload.file_url,
              type: mimeType.startsWith('video/') ? 'video' : 'image',
              filename,
              caption: filename.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' '),
              sort_order: Date.now() + (i + offset),
              is_published: true,
            });
          })
        );
        results.forEach((result, idx) => {
          if (result.status === 'fulfilled') {
            added.push(result.value);
          } else {
            failed.push({
              filename: batch[idx]?.filename || 'media',
              error: result.reason?.message || 'failed',
            });
          }
        });
      }

      return Response.json({ added, failed });
    }

    return Response.json({ error: 'Unknown action' }, { status: 400 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}