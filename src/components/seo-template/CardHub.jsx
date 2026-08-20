import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Sparkles, ArrowUpRight } from 'lucide-react';

/**
 * Card grid linking down the page hierarchy:
 * county → cities (variant "location") or city → services (variant "service").
 *
 * Only rendered when the page has real children of its own type.
 */
/**
 * One card. Renders as a link when the target page exists; an item with no
 * `href` renders as a plain card instead, so a hub can list children whose
 * pages have not been built yet without producing dead links.
 */
function HubCard({ item, Icon, ctaLabel }) {
  const base =
    'bg-white border rounded-2xl block h-full overflow-hidden shadow-sm transition-all duration-300';

  const inner = (
    <>
      {item.image && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5 text-center">
        <Icon className="w-4 h-4 text-secondary mx-auto mb-2" />
        <span className="block font-bold text-foreground text-sm group-hover:text-secondary transition-colors">
          {item.name}
        </span>
        {item.description && (
          <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.description}</p>
        )}
        {item.href && (
          <span className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-secondary group-hover:gap-2.5 transition-all">
            {ctaLabel} <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        )}
      </div>
    </>
  );

  if (!item.href) return <div className={base}>{inner}</div>;

  return (
    <Link to={item.href} className={`group ${base} hover:shadow-lg hover:-translate-y-1`}>
      {inner}
    </Link>
  );
}

/**
 * @param {object}  hub
 * @param {boolean} [background]    Muted section background.
 * @param {1|2}     [headingLevel]  2 by default — the hero owns the H1 on a
 *                                  template page. Hub-only pages (/services,
 *                                  /service-areas) have no hero, so they pass 1
 *                                  to keep exactly one H1 per page.
 */
export default function CardHub({ hub, background = false, headingLevel = 2 }) {
  const Icon = hub.variant === 'location' ? MapPin : Sparkles;
  const ctaLabel = hub.variant === 'location' ? 'Explore Service Area' : 'Explore Service';
  const Heading = headingLevel === 1 ? 'h1' : 'h2';

  return (
    <section className={`py-16 md:py-24 ${background ? 'bg-muted/40' : 'bg-background'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            {hub.eyebrow ?? (hub.variant === 'location' ? 'Service Areas' : 'Our Services')}
          </p>
          <Heading className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {hub.heading}
          </Heading>
          {hub.subtext && (
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              {hub.subtext}
            </p>
          )}
        </div>

        {hub.items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hub.items.map((item) => (
              <HubCard key={item.href ?? item.name} item={item} Icon={Icon} ctaLabel={ctaLabel} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
