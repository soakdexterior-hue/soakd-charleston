import { IMAGES, WINDOW_CLEANING } from '../../media.js';

/**
 * James Island, SC — city page (Broad Stroke), nested under Charleston County.
 * September '26 batch: "Window Cleaning - James Island, SC".
 *
 * Copy is Karan's, verbatim. The external James Island link opens the first
 * Why bullet; the internal home link sits in the third FAQ answer.
 */
export default {
  type: 'city',
  path: '/service-areas/charleston-county-sc/james-island',
  parentPath: '/service-areas/charleston-county-sc',
  name: 'James Island, SC',
  geoPlacename: 'James Island',
  // Image path mirrors the page URL.
  cardImage: '/images/service-areas/charleston-county-sc/james-island.jpg',

  metaTitle: 'Quality Window Cleaning in James Island, SC | Soakd',
  metaDescription:
    'Soakd provides quality window cleaning in James Island, SC with detailed care for clearer glass and cleaner window areas. Schedule service. Call Now!',

  copy: {
    hero: {
      headline: 'Quality Window Cleaning in James Island, SC',
      subtext:
        'Soakd provides quality window cleaning in James Island, SC for homeowners dealing with fingerprints, pollen, outdoor residue, and everyday buildup. Detailed window care addresses interior and exterior glass along with screens, tracks, and sills, helping residents maintain clearer views and cleaner-looking window areas without making extensive DIY cleaning another recurring household responsibility.',
      image: '/images/service-areas/charleston-county-sc/james-island.jpg',
      imageAlt: 'Marsh boardwalk and fishing dock on James Island, SC',
      formTitle: 'Get a Free Quote in James Island',
    },

    benefits: {
      heading: 'Why Choose Soakd for Quality Window Cleaning in James Island, SC?',
      subheading: 'Detailed. Practical. Home-Focused.',
      image: IMAGES.windowBeforeAfter,
      imageAlt: 'Before and after window cleaning on a James Island SC home',
      items: [
        {
          title: 'Detailed Care Beyond the Main Pane',
          text: 'Dust and debris do not collect only on visible glass. Soakd addresses screens, tracks, and sills along with interior and exterior panes, helping homeowners clean commonly overlooked window components and achieve a more complete result than quick spot cleaning typically provides during everyday household upkeep.',
        },
        {
          title: 'Window Care for Different Residential Layouts',
          text: 'Single-story homes, larger residences, and properties with upper-level windows can each create different maintenance challenges. Soakd provides window cleaning suited to the areas being serviced, helping residents address accessible glass as well as panes that may be inconvenient to include in their normal cleaning routines.',
        },
        {
          title: 'An Organized Process for Easier Upkeep',
          text: 'Cleaning windows throughout a home can require working through numerous panes, screens, tracks, and sills. Soakd brings these tasks into a structured service process, giving homeowners a practical way to refresh multiple window areas while keeping their own time available for other household and property priorities.',
        },
      ],
    },

    why: {
      heading: 'Why Quality Window Cleaning in James Island, SC Matters',
      subheading: 'Coastal Upkeep. Clearer Living.',
      image: WINDOW_CLEANING.poleStoneFrontHome,
      imageAlt: 'Water-fed pole cleaning exterior windows on a James Island SC home',
      items: [
        {
          title: 'Island Conditions Can Create Window Buildup',
          text: 'Homes around <a href="https://en.wikipedia.org/wiki/James_Island,_South_Carolina" target="_blank" style="text-decoration: underline; display: inline">James Island, SC</a> can encounter humidity, pollen, airborne debris, rain residue, and coastal environmental exposure. These conditions may gradually reduce glass clarity, making periodic window cleaning useful for removing visible buildup and maintaining a cleaner appearance as part of ongoing residential upkeep.',
        },
        {
          title: 'Everyday Activity Leaves Interior Marks',
          text: 'Fingerprints, smudges, and household dust can become especially noticeable on frequently used windows and glass near active living spaces. Quality window cleaning in James Island, SC helps address interior buildup alongside exterior residue, supporting cleaner-looking window areas rather than focusing only on surfaces affected by outdoor conditions.',
        },
        {
          title: 'Cleaner Windows Support Property Readiness',
          text: 'Preparing a home for visitors, seasonal gatherings, move-in activities, or a broader cleaning project can make neglected windows more noticeable. Addressing glass and surrounding components helps complete the overall refresh, giving homeowners clearer views and cleaner window areas when they want the property to feel ready and well maintained.',
        },
      ],
    },

    faq: {
      items: [
        {
          question: 'Can coastal buildup affect windows on homes in James Island, SC?',
          answer:
            'Yes. Humidity, pollen, weather residue, and airborne environmental debris can contribute to visible buildup on exterior glass and surrounding window areas. The amount varies by property and exposure. Soakd provides detailed window cleaning that helps James Island homeowners address accumulated residue when it begins reducing clarity or affecting the appearance of their windows.',
        },
        {
          question: 'What does window cleaning include for a James Island, SC home?',
          answer:
            'Window care can extend beyond wiping the primary pane. Soakd’s service includes interior and exterior windows along with screens, tracks, and sills, helping address multiple areas where dirt and debris may accumulate. This broader scope is useful for homeowners seeking a more complete window refresh during routine or seasonal property maintenance.',
        },
        {
          question: 'Is window cleaning useful when preparing a James Island, SC home for guests?',
          answer:
            'Yes. Spots, fingerprints, and outdoor residue can stand out when other areas of a home have already been refreshed for visitors. <a href="https://soakdcharleston.com/" style="text-decoration: underline; display: inline">Soakd</a> can address glass and surrounding window components, helping homeowners complete their preparation while avoiding another detailed cleaning project before guests or gatherings.',
        },
      ],
    },

    map: {
      variant: 'location',
      query: 'James Island, SC',
      heading: 'James Island, SC Residential Window Washing Coverage',
      subtext:
        'Soakd provides residential window washing within its Charleston-area service coverage for homeowners seeking clearer views and more manageable window upkeep. Window washing in James Island, SC can address interior and exterior glass, screens, tracks, and sills while helping remove pollen, fingerprints, weather residue, and everyday debris that can accumulate around windows in Lowcountry residential settings.',
    },
  },
};
