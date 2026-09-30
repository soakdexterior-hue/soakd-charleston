import { WINDOW_CLEANING } from '../../media.js';

/**
 * Folly Beach, SC — city page (Broad Stroke), nested under Charleston County.
 * October '26 batch: "Window Cleaning - Folly Beach, SC".
 *
 * Copy is Karan's, verbatim. The external Folly Beach link opens the first Why
 * bullet; the internal home link opens the map description.
 */
export default {
  type: 'city',
  path: '/service-areas/charleston-county-sc/folly-beach',
  parentPath: '/service-areas/charleston-county-sc',
  name: 'Folly Beach, SC',
  geoPlacename: 'Folly Beach',
  // Image path mirrors the page URL.
  cardImage: '/images/service-areas/charleston-county-sc/folly-beach.jpg',

  metaTitle: 'Professional Window Cleaning in Folly Beach, SC | Soakd',
  metaDescription:
    'Soakd offers professional window cleaning in Folly Beach, SC with detailed care for clearer glass and coastal home upkeep. Schedule service. Call Now!',

  copy: {
    hero: {
      headline: 'Professional Window Cleaning in Folly Beach, SC',
      subtext:
        'Soakd provides professional window cleaning in Folly Beach, SC for homeowners who want clearer views and cleaner window areas in a coastal setting. Detailed service addresses interior and exterior panes along with screens, tracks, and sills, helping remove visible buildup while making routine window maintenance more manageable for primary residences, vacation properties, and other local homes.',
      image: '/images/service-areas/charleston-county-sc/folly-beach.jpg',
      imageAlt: 'Aerial view of Folly Beach, SC shoreline and beachfront homes',
      formTitle: 'Get a Free Quote in Folly Beach',
    },

    benefits: {
      heading: 'Why Choose Soakd for Professional Window Cleaning in Folly Beach, SC?',
      subheading: 'Thorough. Convenient. Property-Focused.',
      image: WINDOW_CLEANING.patioSlidingDoor,
      imageAlt: 'Cleaning exterior patio glass on a Folly Beach SC home',
      items: [
        {
          title: 'Detailed Cleaning Around Each Window',
          text: 'Window care is more complete when the surrounding components receive attention alongside the glass. Soakd addresses interior and exterior panes, screens, tracks, and sills, helping remove accumulated debris from areas that quick surface cleaning can miss and providing a more thorough refresh throughout the property.',
        },
        {
          title: 'Convenient Care for Busy Property Schedules',
          text: 'Keeping windows maintained can compete with work, household responsibilities, guest preparation, and other property tasks. Soakd simplifies the process by handling multiple window components during professional service, reducing the time homeowners need to spend cleaning individual panes, tracks, screens, and sills themselves.',
        },
        {
          title: 'Service for Different Coastal Property Types',
          text: 'Primary homes, vacation properties, and multi-story residences can present different window-care challenges. Soakd provides an adaptable approach based on the areas being serviced, helping homeowners address everyday interior marks as well as exterior panes that experience greater environmental exposure or are inconvenient to maintain independently.',
        },
      ],
    },

    why: {
      heading: 'Why Professional Window Cleaning in Folly Beach, SC Matters',
      subheading: 'Coastal Care. Clear Views.',
      image: WINDOW_CLEANING.livingRoomInterior,
      imageAlt: 'Squeegeeing a living room window in a Folly Beach SC home',
      items: [
        {
          title: 'Coastal Exposure Can Leave Visible Residue',
          text: 'Homes in <a href="https://www.cityoffollybeach.com/" target="_blank" style="text-decoration: underline; display: inline">Folly Beach, SC</a> occupy a coastal environment where humidity, wind-driven debris, salt-related residue, and changing weather can affect exterior surfaces. Regular window cleaning helps remove visible accumulation from glass, supporting clearer views and a cleaner appearance as part of ongoing coastal property maintenance.',
        },
        {
          title: 'Guest-Ready Properties Benefit From Clean Windows',
          text: 'When a home is being prepared for visitors or an upcoming stay, fingerprints and exterior buildup can stand out against freshly cleaned living spaces. Professional window cleaning in Folly Beach, SC helps complete that preparation by refreshing glass and surrounding window areas that might otherwise be overlooked during general household cleaning.',
        },
        {
          title: 'Routine Cleaning Supports Easier Property Upkeep',
          text: 'Allowing outdoor residue and household grime to remain visible can make a later property refresh feel more involved. Incorporating windows into routine maintenance helps homeowners manage buildup as conditions warrant, whether the property is occupied year-round, used seasonally, or being prepared for family and guests.',
        },
      ],
    },

    faq: {
      items: [
        {
          question: 'How do coastal conditions affect window cleaning in Folly Beach, SC?',
          answer:
            'Coastal homes can experience humidity, wind-driven debris, pollen, and salt-related residue on exterior glass and surrounding areas. The amount of buildup depends on the property’s exposure and conditions. Soakd provides detailed window cleaning to help Folly Beach homeowners address visible residue when it begins affecting clarity or overall property presentation.',
        },
        {
          question: 'Is window cleaning useful before guests arrive at a Folly Beach, SC vacation home?',
          answer:
            'Yes. Clean windows can complement interior cleaning when a vacation property is being prepared for family or guests. Fingerprints, outdoor residue, and debris around screens or sills may otherwise remain noticeable. Soakd addresses multiple window components, helping property owners complete a more thorough refresh before an upcoming stay.',
        },
        {
          question: 'What areas are addressed during window cleaning for a Folly Beach, SC home?',
          answer:
            'Residential window care can extend beyond the central pane. Soakd’s service includes interior and exterior windows along with screens, tracks, and sills, helping remove visible debris from multiple components. This detailed scope can be particularly useful for coastal properties where both indoor activity and outdoor exposure contribute to window-cleaning needs.',
        },
      ],
    },

    map: {
      variant: 'location',
      query: 'Folly Beach, SC',
      heading: 'Folly Beach, SC Residential Window Washing Coverage',
      subtext:
        '<a href="https://soakdcharleston.com/" style="text-decoration: underline; display: inline">Soakd</a> provides residential window washing within its Charleston-area service coverage for coastal properties needing detailed upkeep. Window washing in Folly Beach, SC can address interior and exterior panes, screens, tracks, and sills while helping remove fingerprints, pollen, weather residue, and coastal buildup that can affect window clarity and appearance around local homes.',
    },
  },
};
