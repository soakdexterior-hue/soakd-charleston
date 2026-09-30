import { WINDOW_CLEANING } from '../../media.js';

/**
 * Daniel Island, SC — city page (Broad Stroke), nested under Berkeley County
 * (Daniel Island lies in Berkeley County, though it is part of the City of
 * Charleston). October '26 batch: "Window Cleaning - Daniel Island, SC".
 *
 * Copy is Karan's, verbatim. The internal home link sits in the hero
 * description; the external Daniel Island link sits in the third Benefits
 * bullet.
 */
export default {
  type: 'city',
  path: '/service-areas/berkeley-county-sc/daniel-island',
  parentPath: '/service-areas/berkeley-county-sc',
  name: 'Daniel Island, SC',
  geoPlacename: 'Daniel Island',
  // Image path mirrors the page URL.
  cardImage: '/images/service-areas/berkeley-county-sc/daniel-island.jpg',

  metaTitle: 'Meticulous Window Cleaning in Daniel Island, SC | Soakd',
  metaDescription:
    'Soakd offers meticulous window cleaning in Daniel Island, SC with detailed care for clearer glass and polished properties. Schedule service. Call Now!',

  copy: {
    hero: {
      headline: 'Meticulous Window Cleaning in Daniel Island, SC',
      subtext:
        'Soakd provides meticulous window cleaning in Daniel Island, SC for homeowners seeking clearer glass and detailed care throughout their property. From interior and exterior panes to screens, tracks, and sills, <a href="https://soakdcharleston.com/" style="text-decoration: underline; display: inline">Soakd</a> helps address fingerprints, pollen, dust, and outdoor residue while making comprehensive window upkeep easier to manage.',
      image: '/images/service-areas/berkeley-county-sc/daniel-island.jpg',
      imageAlt: 'Aerial view of Daniel Island, SC waterfront park and homes',
      formTitle: 'Get a Free Quote in Daniel Island',
    },

    benefits: {
      heading: 'Why Choose Soakd for Meticulous Window Cleaning in Daniel Island, SC?',
      subheading: 'Precise. Consistent. Property-Focused.',
      image: WINDOW_CLEANING.conservatorySqueegee,
      imageAlt: 'Squeegeeing glass-room windows in a Daniel Island SC home',
      items: [
        {
          title: 'Detailed Care for Overlooked Window Areas',
          text: 'Visible glass is only one part of a thoroughly maintained window. Soakd also addresses screens, tracks, and sills alongside interior and exterior panes, helping remove dust and debris from areas that can be missed during everyday cleaning and providing a more complete refresh throughout the home.',
        },
        {
          title: 'Consistent Attention Across the Property',
          text: 'Window conditions can vary depending on orientation, accessibility, landscaping, and exposure to outdoor elements. Soakd follows an organized approach across the areas being serviced, helping homeowners maintain a consistent appearance instead of concentrating only on easily accessible panes while less convenient windows continue accumulating visible residue.',
        },
        {
          title: 'Window Care Adapted to Residential Layouts',
          text: 'Homes throughout <a href="https://en.wikipedia.org/wiki/Daniel_Island" target="_blank" style="text-decoration: underline; display: inline">Daniel Island, SC</a> can have different window arrangements and access considerations. Soakd provides residential window care suited to the property being serviced, helping address everyday glass maintenance as well as panes that may be inconvenient for homeowners to clean independently.',
        },
      ],
    },

    why: {
      heading: 'Why Meticulous Window Cleaning in Daniel Island, SC Matters',
      subheading: 'Clarity. Upkeep. Home Presentation.',
      image: WINDOW_CLEANING.squeegeeCloseUp,
      imageAlt: 'Close-up of a squeegee clearing wet window glass on a Daniel Island SC home',
      items: [
        {
          title: 'Lowcountry Conditions Contribute to Buildup',
          text: 'Humidity, pollen, rain residue, dust, and other airborne debris can gradually affect exterior window surfaces. Meticulous window cleaning in Daniel Island, SC helps remove visible accumulation as conditions warrant, supporting clearer views while keeping window care incorporated into the broader maintenance needs of a Lowcountry home.',
        },
        {
          title: 'Well-Kept Windows Complement Property Maintenance',
          text: 'Even when landscaping and other exterior areas are maintained, cloudy panes or visible spots can detract from the overall presentation of a residence. Cleaning window glass and surrounding components helps create a more finished appearance, particularly when homeowners are completing seasonal maintenance or preparing their property for visitors.',
        },
        {
          title: 'Professional Cleaning Simplifies Difficult Areas',
          text: 'Elevated or awkwardly positioned windows can make whole-home cleaning more challenging, especially when multiple panes and surrounding components require attention. Professional service provides a practical way to include these areas in routine upkeep rather than limiting maintenance to windows that are easiest for homeowners to reach.',
        },
      ],
    },

    faq: {
      items: [
        {
          question: 'How often should homeowners consider window cleaning in Daniel Island, SC?',
          answer:
            'There is no single schedule that fits every property. Pollen exposure, weather, landscaping, household activity, and the amount of visible buildup can all affect cleaning needs. Soakd can provide residential window care when Daniel Island homeowners notice spots, residue, or reduced clarity rather than relying on a universal cleaning interval.',
        },
        {
          question: 'Can window cleaning help prepare a Daniel Island, SC home for seasonal gatherings?',
          answer:
            'Yes. Window cleaning can complement other preparation by addressing fingerprints, exterior residue, dusty sills, and debris around window components before visitors arrive. Soakd provides detailed care for interior and exterior glass, screens, tracks, and sills, helping homeowners complete a more thorough property refresh without adding extensive window cleaning to their own checklist.',
        },
        {
          question: 'What can I expect from residential window cleaning in Daniel Island, SC?',
          answer:
            'Residential service can address both visible glass and surrounding window components that collect debris over time. Soakd’s window cleaning includes interior and exterior panes along with screens, tracks, and sills, providing a detailed approach for homeowners dealing with everyday fingerprints, household dust, pollen, and environmental buildup around their property.',
        },
      ],
    },

    map: {
      variant: 'location',
      query: 'Daniel Island, SC',
      heading: 'Daniel Island, SC Residential Window Washing Coverage',
      subtext:
        'Soakd provides residential window washing within its Charleston-area service coverage for homeowners seeking detailed property care and clearer views. Window washing in Daniel Island, SC can address interior and exterior panes, screens, tracks, and sills while helping remove fingerprints, pollen, dust, weather residue, and everyday buildup from window areas across different residential layouts and property settings.',
    },
  },
};
