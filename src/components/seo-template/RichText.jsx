import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_URL } from '@/data/business';

/**
 * Renders a copy string while preserving inline `[label](url)` links, so the one
 * internal link (home) and one external link (.gov / wiki) that each page's copy
 * carries stay clickable and are never dropped.
 *
 * Deliberately NOT a Markdown renderer. Page copy is prose, and running a real
 * Markdown parser over it silently reinterprets stray `*`, `_` or `1.` as
 * formatting — plus it ships ~100KB of parser to render two anchors. Everything
 * that is not a link renders as literal text.
 *
 * Internal links route client-side via <Link>; external links open in a new tab.
 * `inline` renders without a wrapping <p>, for use inside an existing paragraph.
 */

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

const LINK_CLASS =
  'text-secondary font-semibold underline underline-offset-2 hover:no-underline';

const isInternal = (href) => href.startsWith('/') || href.startsWith(SITE_URL);

const toPath = (href) =>
  href.startsWith(SITE_URL) ? href.slice(SITE_URL.length) || '/' : href;

function parse(text) {
  const parts = [];
  let lastIndex = 0;
  let match;

  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(text)) !== null) {
    const [full, label, href] = match;
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      isInternal(href) ? (
        <Link key={match.index} to={toPath(href)} className={LINK_CLASS}>
          {label}
        </Link>
      ) : (
        <a
          key={match.index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          {label}
        </a>
      )
    );
    lastIndex = match.index + full.length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export default function RichText({ children, className, inline }) {
  if (!children) return null;
  const parts = parse(children);
  return inline ? <>{parts}</> : <p className={className}>{parts}</p>;
}

/**
 * Flattens `[label](url)` down to `label`. JSON-LD must stay plain text, so
 * schema output runs through this while the on-page copy keeps the live link.
 */
export const stripLinks = (text = '') =>
  text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
