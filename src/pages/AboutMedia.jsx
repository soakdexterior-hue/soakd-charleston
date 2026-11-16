import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { base44 } from '@/api/base44Client';
import { useAuth } from '@/lib/AuthContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Image as ImageIcon, Video, Search, Loader2, Trash2, LogIn } from 'lucide-react';

const keyOf = (messageId, attachmentId) => `${messageId}:${attachmentId}`;

const formatSize = (bytes) => {
  if (!bytes) return '';
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export default function AboutMedia() {
  const { user, isLoadingAuth, navigateToLogin } = useAuth();
  const [query, setQuery] = useState('Reynolds');
  const [searching, setSearching] = useState(false);
  const [importing, setImporting] = useState(false);
  const [messages, setMessages] = useState(null);
  const [selected, setSelected] = useState({});
  const [items, setItems] = useState([]);
  const [notice, setNotice] = useState('');

  const loadItems = useCallback(async () => {
    const page = await base44.entities.AboutMedia.list({ sort: 'sort_order', limit: 100 });
    setItems(page.items || []);
  }, []);

  useEffect(() => {
    if (user?.role === 'admin') loadItems();
  }, [user, loadItems]);

  const handleSearch = async () => {
    setSearching(true);
    setNotice('');
    try {
      const res = await base44.functions.invoke('gmailAboutMedia', { action: 'search', query });
      const found = res.data?.messages || [];
      setMessages(found);
      setSelected({});
      if (!found.length) setNotice('No emails with photo or video attachments matched that search.');
    } catch (err) {
      setNotice(err?.response?.data?.error || 'Could not search Gmail.');
    } finally {
      setSearching(false);
    }
  };

  const toggleAttachment = (messageId, attachmentId) => {
    const key = keyOf(messageId, attachmentId);
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const chosenCount = Object.values(selected).filter(Boolean).length;

  const handleImport = async () => {
    const chosen = (messages || []).flatMap((message) =>
      message.attachments
        .filter((a) => selected[keyOf(message.messageId, a.attachmentId)])
        .map((a) => ({ messageId: message.messageId, ...a }))
    );
    if (!chosen.length) return;

    setImporting(true);
    setNotice('');
    try {
      const res = await base44.functions.invoke('gmailAboutMedia', { action: 'import', items: chosen });
      const added = res.data?.added?.length || 0;
      const failed = res.data?.failed?.length || 0;
      await loadItems();
      setSelected({});
      setNotice(
        failed
          ? `Added ${added} item${added === 1 ? '' : 's'}. ${failed} could not be imported.`
          : `Added ${added} item${added === 1 ? '' : 's'} to the About page.`
      );
    } catch (err) {
      setNotice(err?.response?.data?.error || 'Import failed.');
    } finally {
      setImporting(false);
    }
  };

  const togglePublished = async (item) => {
    await base44.entities.AboutMedia.update(item.id, { is_published: !item.is_published });
    await loadItems();
  };

  const handleDelete = async (item) => {
    await base44.entities.AboutMedia.delete(item.id);
    await loadItems();
  };

  if (isLoadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-3">Sign in to manage photos</h1>
          <p className="text-muted-foreground mb-6">This page is for the Soakd team.</p>
          <Button onClick={() => navigateToLogin()} className="bg-primary text-white">
            <LogIn className="w-4 h-4 mr-2" /> Sign in
          </Button>
        </div>
      </div>
    );
  }

  if (user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
        <p className="text-muted-foreground">This page is available to admins only.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>About Page Media | Soakd Charleston</title>
      </Helmet>
      <div className="min-h-screen bg-muted/30 py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">About Page Photos &amp; Videos</h1>
          <p className="text-muted-foreground text-sm mt-1 mb-8">
            Find the email in Gmail, pick its photo and video attachments, and publish them to the About page.
          </p>

          {notice && (
            <div className="mb-6 rounded-lg border border-secondary/30 bg-secondary/10 px-4 py-3 text-sm text-primary">
              {notice}
            </div>
          )}

          {/* Gmail search */}
          <div className="bg-card border rounded-xl p-5 mb-8">
            <h2 className="font-bold text-foreground mb-3">Find an email</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Gmail, e.g. Reynolds"
                onKeyDown={(e) => e.key === 'Enter' && !searching && handleSearch()}
              />
              <Button onClick={handleSearch} disabled={searching} className="bg-primary text-white shrink-0">
                {searching ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Search className="w-4 h-4 mr-2" />}
                {searching ? 'Searching…' : 'Search Gmail'}
              </Button>
            </div>

            {messages && messages.length > 0 && (
              <div className="mt-6 space-y-4">
                {messages.map((message) => (
                  <div key={message.messageId} className="border rounded-lg p-4">
                    <p className="font-semibold text-foreground text-sm">{message.subject}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 mb-3">
                      {message.from} · {message.date}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {message.attachments.map((a) => {
                        const key = keyOf(message.messageId, a.attachmentId);
                        const isVideo = a.mimeType.startsWith('video/');
                        return (
                          <label
                            key={key}
                            className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                              selected[key] ? 'border-secondary bg-secondary/10' : 'hover:bg-muted/50'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={!!selected[key]}
                              onChange={() => toggleAttachment(message.messageId, a.attachmentId)}
                              className="accent-secondary w-4 h-4 shrink-0"
                            />
                            {isVideo ? (
                              <Video className="w-4 h-4 text-secondary shrink-0" />
                            ) : (
                              <ImageIcon className="w-4 h-4 text-secondary shrink-0" />
                            )}
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm text-foreground truncate">{a.filename}</span>
                              <span className="block text-xs text-muted-foreground">
                                {isVideo ? 'Video' : 'Photo'} · {formatSize(a.size)}
                              </span>
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <Button
                  onClick={handleImport}
                  disabled={importing || chosenCount === 0}
                  className="bg-secondary hover:bg-secondary/90 text-white"
                >
                  {importing ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                  {importing ? 'Adding…' : `Add ${chosenCount || ''} selected to About page`}
                </Button>
              </div>
            )}
          </div>

          {/* Current media */}
          <div className="bg-card border rounded-xl p-5">
            <h2 className="font-bold text-foreground mb-4">On the About page</h2>
            {items.length === 0 ? (
              <p className="text-sm text-muted-foreground py-6 text-center">
                Nothing published yet. Search Gmail above to add photos and videos.
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                  <div key={item.id} className="border rounded-lg overflow-hidden">
                    {item.type === 'video' ? (
                      <video src={item.url} controls className="w-full aspect-video object-cover bg-primary/5" />
                    ) : (
                      <img src={item.url} alt={item.caption || item.filename} className="w-full aspect-video object-cover bg-primary/5" />
                    )}
                    <div className="p-3">
                      <div className="flex items-center justify-between gap-2">
                        <Badge variant="secondary" className="capitalize">
                          {item.type === 'video' ? 'Video' : 'Photo'}
                        </Badge>
                        <div className="flex items-center gap-2">
                          <Switch checked={!!item.is_published} onCheckedChange={() => togglePublished(item)} />
                          <button
                            type="button"
                            onClick={() => handleDelete(item)}
                            aria-label="Remove from About page"
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 truncate" title={item.filename}>
                        {item.caption || item.filename}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}