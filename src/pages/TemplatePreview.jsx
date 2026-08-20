import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import SeoPageTemplate from '@/components/seo-template/SeoPageTemplate';
import { services, servicePath } from '@/data/services';
import { areasByCounty, cityPath } from '@/data/serviceAreas';
import { IMAGES } from '@/data/media';

/**
 * `/template-preview` — a harness for reviewing the SEO page template with
 * sample copy. Noindexed, deliberately excluded from the sitemap and the
 * prerender route list, and not linked from anywhere in the site.
 *
 * Two samples, switched by `?variant=`:
 *   service  (default) — a City page: the service hub sits ABOVE the FAQ
 *   location           — a County page: the location hub sits BELOW the hero
 *
 * The copy is filler, but it exercises every section and both link types —
 * one internal and one external, plus a link inside an FAQ answer.
 */

/** Stand-in thumbnails for the location hub until real area photos arrive. */
const STANDIN_AREA_IMAGES = [
  IMAGES.truck,
  IMAGES.porchWashing,
  IMAGES.windowCleaningCrew,
  IMAGES.roofWashing,
  IMAGES.doubleCleaning,
  IMAGES.pressureWashingCrew,
  IMAGES.waterFedPole,
  IMAGES.teamWalking,
  IMAGES.softWashingHero,
];

/* ── Sample A: City page, service hub (renders above the FAQ) ────────────── */
const SERVICE_SAMPLE = {
  hero: {
    headline: 'Professional Window Cleaning in Mount Pleasant, SC',
    subtext:
      'Soakd Window Cleaning delivers streak-free interior and exterior window cleaning for homes across Mount Pleasant and the surrounding Lowcountry. Every job is handled by a fully insured local crew, and [Soakd Window Cleaning](/) backs the results with our Clean Window Guarantee.',
    image: IMAGES.windowCleaningHero,
    imageAlt: 'Professional window cleaning on a Mount Pleasant SC home',
    imageCredit: 'Soakd Window Cleaning',
    formTitle: 'Get a Free Quote in Mount Pleasant',
    formPreselectService: 'window-cleaning',
  },

  hub: {
    variant: 'service',
    eyebrow: 'Our Services',
    heading: 'Exterior Cleaning Services in Mount Pleasant',
    subtext:
      'A service hub renders directly ABOVE the FAQ, and only when the page has real location-service children of its own.',
    items: services.map((s) => ({
      name: s.name,
      href: servicePath(s.slug),
      image: s.cardImage,
      description: s.tagline,
    })),
  },

  benefits: {
    eyebrow: 'The Soakd Difference',
    heading: 'Why Choose Soakd for Window Cleaning in Mount Pleasant, SC?',
    subheading: 'Thorough. Insured. Guaranteed.',
    image: IMAGES.windowBeforeAfter,
    imageAlt: 'Before and after professional window cleaning in Charleston SC',
    items: [
      {
        title: 'Every Pane, Track and Screen',
        text: 'Window cleaning in Mount Pleasant covers interior and exterior glass, screens, sills and tracks at no extra cost. Salt film and pollen are removed from the full assembly rather than just the visible glass, so the results hold longer between visits.',
      },
      {
        title: 'Safe Access on Multi-Story Homes',
        text: 'Water-fed pole systems reach second and third-story glass from the ground using purified water, avoiding ladder damage to landscaping and siding while leaving no mineral spotting behind as the glass dries.',
      },
      {
        title: 'Scheduling That Fits Your Week',
        text: 'Most quote requests in [Charleston County](https://www.charlestoncounty.org/) are answered within one hour, and most jobs are booked within 48 hours — including weekend appointments during the spring and fall peak seasons.',
      },
    ],
  },

  why: {
    eyebrow: 'Why It Matters',
    heading: 'Why Regular Window Cleaning Matters on the Coast',
    subheading: 'Salt. Pollen. Humidity.',
    image: IMAGES.waterFedPole,
    imageAlt: 'Water-fed pole window cleaning system in use',
    items: [
      {
        title: 'Salt Air Permanently Etches Glass',
        text: 'Airborne salt from the Atlantic settles on coastal windows and, left in place, bonds into the glass surface. Once etched, the damage cannot be cleaned out — it requires glass restoration or replacement.',
      },
      {
        title: 'Pollen Seasons Are Intense Here',
        text: 'Lowcountry pollen coats exterior glass within days of a cleaning during peak season. Scheduled cleaning in spring and fall keeps buildup from hardening into a film that needs aggressive treatment to remove.',
      },
      {
        title: 'Clean Glass Protects Resale Value',
        text: 'Clear windows are one of the first things buyers and guests notice. Regular maintenance keeps frames, seals and glass in good condition and avoids the far larger cost of premature window replacement.',
      },
    ],
  },

  faq: {
    title: 'Window Cleaning FAQs',
    subtitle: 'The questions Mount Pleasant homeowners ask us most often.',
    items: [
      {
        question: 'How often should I clean my windows in Mount Pleasant?',
        answer:
          'Twice a year is the minimum for most homes — once in spring after pollen season and once in fall to clear summer salt and humidity residue. Properties closer to the water should move to every three to four months.',
      },
      {
        question: 'Do you clean screens and tracks too?',
        answer:
          'Yes. Screens, sills and tracks are included in every window cleaning at no extra charge. See our full [service list](/services) for what each job covers.',
      },
      {
        question: 'What if I am not happy with the results?',
        answer:
          'Every job is backed by our Clean Window Guarantee. If you are not completely satisfied, we return and redo the work at no charge.',
      },
    ],
  },

  map: {
    variant: 'gbp',
    subtext:
      'Soakd is locally owned and based in Charleston, South Carolina. Find us on Google to read all 170+ verified five-star reviews from Lowcountry homeowners.',
  },

  ctaHeadline: 'Ready for Crystal Clear Windows?',
};

/* ── Sample B: County page, location hub (renders below the hero) ────────── */
const LOCATION_SAMPLE = {
  hero: {
    headline: 'Exterior Cleaning Services in Charleston County, SC',
    subtext:
      'Soakd Window Cleaning serves homeowners across Charleston County — from the peninsula out to the barrier islands. [Soakd Window Cleaning](/) is locally owned, fully insured, and backs every job with our Clean Window Guarantee.',
    image: IMAGES.truck,
    imageAlt: 'The Soakd truck on a job in Charleston County SC',
    formTitle: 'Get a Free Quote in Charleston County',
  },

  hub: {
    variant: 'location',
    eyebrow: 'Service Areas',
    heading: 'Communities We Serve in Charleston County',
    subtext:
      'A location hub renders directly BELOW the hero, and only when the county has real city pages of its own.',
    // Thumbnails here are STAND-INS from the existing photo library, purely so the
    // card layout is reviewable. Real per-area photos go in the data layer at
    // public/images/areas/{county}/{city}.jpg — see src/data/serviceAreas.js.
    items: areasByCounty('charleston-county-sc').map((a, i) => ({
      name: a.name,
      href: cityPath(a.countySlug, a.slug),
      image: a.image ?? STANDIN_AREA_IMAGES[i % STANDIN_AREA_IMAGES.length],
    })),
  },

  benefits: {
    eyebrow: 'The Soakd Difference',
    heading: 'Why Charleston County Homeowners Choose Soakd',
    subheading: 'Local. Insured. Fast to respond.',
    image: IMAGES.teamWalking,
    imageAlt: 'The Soakd crew arriving at a Charleston County property',
    items: [
      {
        title: 'One Standard Across Every ZIP Code',
        text: 'Whether the job is on the peninsula, in West Ashley, or out on Isle of Palms, the same fully insured crew and the same equipment show up. Coverage does not thin out at the edges of the county.',
      },
      {
        title: 'Coastal Experience That Matters',
        text: 'Salt exposure, black algae and heavy pollen behave differently here than they do inland, and each surface needs a different method. Our crews work these conditions every day across [Charleston County](https://www.charlestoncounty.org/).',
      },
      {
        title: 'Answers Within the Hour',
        text: 'Most quote requests are answered within one hour and most jobs are on the calendar within 48 hours, including weekends during the spring and fall peak.',
      },
    ],
  },

  why: {
    eyebrow: 'Why It Matters',
    heading: 'Why Exterior Cleaning Matters in Charleston County',
    subheading: 'Salt. Algae. Debris.',
    image: IMAGES.roofWashing,
    imageAlt: 'Soft washing a roof in the Charleston SC area',
    items: [
      {
        title: 'Salt Air Reaches Further Than You Think',
        text: 'Properties well inland of the waterfront still collect airborne salt, which corrodes fixtures and etches glass over time. Regular cleaning removes it before the damage becomes permanent.',
      },
      {
        title: 'Algae Spreads Year-Round',
        text: 'Warm, humid conditions let Gloeocapsa Magma grow on roofs and siding through every season, not just summer. Left alone, those black streaks feed on the building material itself.',
      },
      {
        title: 'Gutters Fill Faster Here',
        text: 'Spanish moss, pine needles and live oak debris clog gutters far more aggressively than in most regions, and overflow damages fascia boards, foundations and landscaping.',
      },
    ],
  },

  faq: {
    title: 'Charleston County FAQs',
    subtitle: 'What homeowners across the county ask us most.',
    items: [
      {
        question: 'Do you cover the whole of Charleston County?',
        answer:
          'Yes — from downtown Charleston out to Johns Island, Folly Beach and Isle of Palms. See the full list on our [service areas page](/service-areas).',
      },
      {
        question: 'Do coastal homes need cleaning more often?',
        answer:
          'Generally yes. Homes nearer the water collect salt film faster and benefit from a three to four month cycle rather than the twice-yearly schedule that suits most inland properties.',
      },
      {
        question: 'Are you insured?',
        answer:
          'Every job carries full general liability insurance. We would advise against hiring any exterior cleaning company that cannot show you proof of coverage.',
      },
    ],
  },

  map: {
    variant: 'location',
    query: 'Charleston County, SC',
    subtext:
      'Soakd serves homeowners and businesses throughout Charleston County and the wider Lowcountry. Not sure whether you are in range? Call or text and we will confirm.',
  },

  ctaHeadline: 'Ready for a Cleaner Home?',
};

const SAMPLES = {
  service: { copy: SERVICE_SAMPLE, label: 'Service hub (City page) — hub above the FAQ' },
  location: { copy: LOCATION_SAMPLE, label: 'Location hub (County page) — hub below the hero' },
};

export default function TemplatePreview() {
  const [params] = useSearchParams();
  const variant = params.get('variant') === 'location' ? 'location' : 'service';
  const active = SAMPLES[variant];

  return (
    <>
      <SEOHead
        title="Template Preview | Soakd"
        description="Internal preview of the SEO page template. Not indexed."
        canonical="/template-preview"
        noindex
      />

      <div className="bg-yellow-400 text-[#0f1e3d] py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-sm font-bold">
            ⚠️ Internal template preview — sample copy, noindexed, not in the sitemap.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold">
            {Object.entries(SAMPLES).map(([key, sample]) => (
              <Link
                key={key}
                to={`/template-preview?variant=${key}`}
                title={sample.label}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  variant === key
                    ? 'bg-[#0f1e3d] text-yellow-400'
                    : 'bg-black/10 hover:bg-black/20'
                }`}
              >
                {key === 'service' ? 'Service hub' : 'Location hub'}
              </Link>
            ))}
          </div>
        </div>
        <p className="max-w-5xl mx-auto text-xs mt-1 opacity-80">{active.label}</p>
      </div>

      <SeoPageTemplate copy={active.copy} />
    </>
  );
}
