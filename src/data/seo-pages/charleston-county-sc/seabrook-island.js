import { WINDOW_CLEANING } from '../../media.js';

/**
 * Seabrook Island, SC — city page (Broad Stroke), nested under Charleston County.
 * November '26 batch: "Window Cleaning - Seabrook Island, SC".
 *
 * Copy is Karan's, verbatim. The external Seabrook Island link opens the first
 * Why bullet; the internal home link opens the map description.
 *
 * Area photo: "Seabrook Island, SC - 35650920744" by chucka_nc, Wikimedia
 * Commons, CC BY-SA 2.0 — the hero carries the credit line the licence requires.
 */
export default {
  type: 'city',
  path: '/service-areas/charleston-county-sc/seabrook-island',
  parentPath: '/service-areas/charleston-county-sc',
  name: 'Seabrook Island, SC',
  geoPlacename: 'Seabrook Island',
  // Image path mirrors the page URL.
  cardImage: '/images/service-areas/charleston-county-sc/seabrook-island.jpg',

  metaTitle: 'Dedicated Window Cleaning in Seabrook Island, SC | Soakd',
  metaDescription:
    'Soakd offers dedicated window cleaning in Seabrook Island, SC for clearer glass and detailed coastal home care. Schedule service. Call Now!',

  copy: {
    hero: {
      headline: 'Dedicated Window Cleaning in Seabrook Island, SC',
      subtext:
        'Soakd provides dedicated window cleaning in Seabrook Island, SC for homeowners maintaining properties surrounded by coastal vegetation, wooded landscapes, and humid Lowcountry conditions. Pollen, salt-related residue, and outdoor debris can gradually affect window clarity. Detailed care for interior and exterior glass, screens, tracks, and sills helps keep residential windows looking cleaner and well maintained.',
      image: '/images/service-areas/charleston-county-sc/seabrook-island.jpg',
      imageAlt: 'Egrets on a marsh boardwalk on Seabrook Island, SC',
      imageCredit: 'chucka_nc / Wikimedia Commons, CC BY-SA 2.0',
      formTitle: 'Get a Free Quote in Seabrook Island',
    },

    benefits: {
      heading: 'Why Choose Soakd for Dedicated Window Cleaning in Seabrook Island, SC?',
      subheading: 'Methodical. Attentive. Dependable.',
      image: WINDOW_CLEANING.screenScrub,
      imageAlt: 'Scrubbing a window screen at a Seabrook Island SC home',
      items: [
        {
          title: 'A Methodical Approach to Window Care',
          text: 'Different window surfaces can collect varying amounts of pollen, dust, and environmental residue depending on their position and surroundings. Soakd provides an organized cleaning process that addresses interior and exterior glass, screens, tracks, and sills, helping homeowners manage buildup across multiple window components rather than concentrating solely on visible panes.',
        },
        {
          title: 'Consistent Attention to Residential Windows',
          text: 'Properties with expansive windows, elevated glass, or multiple outdoor-facing rooms can require more involved cleaning. Soakd provides detailed residential window care that considers the areas being serviced, helping homeowners maintain a more consistent appearance across accessible panes and windows that may be inconvenient to clean independently.',
        },
        {
          title: 'Convenient Upkeep for Seasonal Residences',
          text: 'Maintaining a property used throughout the year or during selected seasons can involve numerous preparation and maintenance tasks. Soakd simplifies window upkeep by addressing glass and surrounding components during professional service, helping homeowners refresh their properties without dedicating additional personal time to cleaning every pane, screen, track, and sill.',
        },
      ],
    },

    why: {
      heading: 'Why Dedicated Window Cleaning in Seabrook Island, SC Matters',
      subheading: 'Natural Surroundings. Clearer Views.',
      image: WINDOW_CLEANING.interiorMarshView,
      imageAlt: 'Squeegeeing an interior window overlooking the marsh on Seabrook Island SC',
      items: [
        {
          title: 'Wooded and Coastal Surroundings Affect Windows',
          text: 'Homes throughout <a href="https://www.townofseabrookisland.org/" target="_blank" style="text-decoration: underline; display: inline">Seabrook Island, SC</a> can experience pollen from surrounding vegetation, humidity, windblown debris, and coastal residue. These environmental conditions may leave exterior glass looking cloudy or spotted. Regular cleaning helps remove visible accumulation and maintain clearer views of the island\'s natural surroundings.',
        },
        {
          title: 'Window Buildup Can Affect Indoor Comfort',
          text: 'Dust, pollen, and debris may collect on window screens, tracks, and sills, particularly around frequently opened windows or areas exposed to vegetation. Removing this accumulation supports cleaner window areas and more comfortable everyday upkeep, although window cleaning alone does not eliminate indoor allergens or resolve underlying air-quality concerns.',
        },
        {
          title: 'Seasonal Property Use Creates Maintenance Needs',
          text: 'Residences occupied seasonally or prepared for visiting family may accumulate visible grime between cleaning visits. Dedicated window cleaning in Seabrook Island, SC helps address fingerprints, exterior spots, and surrounding debris before a property is occupied, complementing other household preparation tasks and supporting a cleaner, more welcoming appearance.',
        },
      ],
    },

    faq: {
      items: [
        {
          question: 'Why do windows on wooded properties in Seabrook Island, SC develop visible buildup?',
          answer:
            "Trees, surrounding vegetation, humidity, and airborne debris can contribute to pollen deposits, dust, and spots on exterior glass. Coastal exposure may also leave residue on certain windows. Soakd provides residential window cleaning that helps remove visible accumulation from glass and surrounding components when these conditions begin affecting a property's appearance.",
        },
        {
          question: 'Does residential window cleaning in Seabrook Island, SC include screens and tracks?',
          answer:
            'Yes. Residential window care from Soakd includes interior and exterior glass along with screens, tracks, and sills. This broader cleaning scope is useful for properties surrounded by trees or landscaping, where pollen and debris can settle around window components. Specific access considerations can be discussed before service.',
        },
        {
          question: 'Can window cleaning resolve cloudy glass on a Seabrook Island, SC coastal home?',
          answer:
            'Cleaning can improve clarity when cloudiness comes from removable dirt, salt-related residue, or surface deposits. However, moisture trapped between sealed glass panes or permanent surface damage may require a different solution. Soakd can provide window cleaning for accessible surfaces, while homeowners should seek appropriate repairs for problems that cleaning cannot resolve.',
        },
      ],
    },

    map: {
      variant: 'location',
      query: 'Seabrook Island, SC',
      heading: 'Seabrook Island, SC Residential Window Washing Coverage',
      subtext:
        '<a href="https://soakdcharleston.com/" style="text-decoration: underline; display: inline">Soakd</a> provides residential window washing within its Charleston-area service region, supporting homeowners seeking cleaner glass and easier coastal property maintenance. Window washing in Seabrook Island, SC helps address pollen, dust, salt-related residue, and everyday buildup on interior and exterior panes. Detailed attention to screens, tracks, and sills supports clearer views across wooded and coastal residential settings.',
    },
  },
};
