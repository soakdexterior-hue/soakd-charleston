/**
 * Removes Base44's platform-injected SEO tags wherever the page supplies its own.
 *
 * Base44 hosting injects a generic description, canonical, Open Graph and
 * Twitter set ("{first URL segment} on Soakd Charleston…") into every served
 * page, ahead of the tags react-helmet-async renders. Crawlers read the first
 * tag of each kind, so every /service-areas/* page reported "Service Areas"
 * and pages carried two canonicals.
 *
 * Helmet marks its tags with `data-rh`. Whenever one appears, any unmarked tag
 * with the same key is dropped. A page without its own tag of that kind keeps
 * Base44's, so nothing is left without a description or canonical.
 *
 * The lasting fix is turning off "Automatic titles and descriptions" in the
 * Base44 dashboard (SEO & GEO → Advanced Settings); this covers JS-rendering
 * crawlers and Base44's prerender snapshots in the meantime.
 */

const keyOf = (el) => {
  if (el.tagName === 'LINK') return el.rel === 'canonical' ? 'canonical' : null;
  if (el.tagName !== 'META') return null;
  const name = el.getAttribute('name');
  if (name) return `name:${name}`;
  const property = el.getAttribute('property');
  return property ? `property:${property}` : null;
};

const dedupe = () => {
  const head = document.head;
  const owned = new Set(
    [...head.querySelectorAll('[data-rh]')].map(keyOf).filter(Boolean)
  );
  if (!owned.size) return;

  for (const el of head.querySelectorAll('meta:not([data-rh]), link[rel="canonical"]:not([data-rh])')) {
    if (owned.has(keyOf(el))) el.remove();
  }
};

export default function dedupeHeadTags() {
  dedupe();
  // Helmet writes tags after render and rewrites them on every route change.
  new MutationObserver(dedupe).observe(document.head, { childList: true });
}
