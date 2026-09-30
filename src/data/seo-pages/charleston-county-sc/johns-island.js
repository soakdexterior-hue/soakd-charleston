import { WINDOW_CLEANING } from '../../media.js';

/**
 * Johns Island, SC — city page (Broad Stroke), nested under Charleston County.
 * October '26 batch: "Window Cleaning - Johns Island, SC".
 *
 * Copy is Karan's, verbatim. The external Johns Island link sits in the second
 * Benefits bullet; the internal home link sits in the third FAQ answer.
 */
export default {
  type: 'city',
  path: '/service-areas/charleston-county-sc/johns-island',
  parentPath: '/service-areas/charleston-county-sc',
  name: 'Johns Island, SC',
  geoPlacename: 'Johns Island',
  // Image path mirrors the page URL.
  cardImage: '/images/service-areas/charleston-county-sc/johns-island.jpg',

  metaTitle: 'Comprehensive Window Cleaning in Johns Island, SC | Soakd',
  metaDescription:
    'Soakd offers comprehensive window cleaning in Johns Island, SC with detailed care for clearer glass and easier property upkeep. Call Now!',

  copy: {
    hero: {
      headline: 'Comprehensive Window Cleaning in Johns Island, SC',
      subtext:
        'Soakd provides comprehensive window cleaning in Johns Island, SC for homeowners who want clearer glass and cleaner window areas without adding another demanding task to property upkeep. Detailed service addresses interior and exterior windows along with screens, tracks, and sills, helping remove fingerprints, pollen, dust, and outdoor residue from multiple components around the home.',
      image: '/images/service-areas/charleston-county-sc/johns-island.jpg',
      imageAlt: 'Aerial view of Johns Island, SC',
      formTitle: 'Get a Free Quote in Johns Island',
    },

    benefits: {
      heading: 'Why Choose Soakd for Comprehensive Window Cleaning in Johns Island, SC?',
      subheading: 'Detailed. Adaptable. Consistent.',
      image: WINDOW_CLEANING.ladderHomeExterior,
      imageAlt: 'Technician on a ladder cleaning an upper window on a Johns Island SC home',
      items: [
        {
          title: 'Detailed Attention Beyond Window Glass',
          text: 'A thorough window-cleaning process considers more than the most visible part of each pane. Soakd addresses interior and exterior glass along with screens, tracks, and sills, helping remove debris from commonly overlooked areas and giving homeowners a more complete approach to routine window maintenance.',
        },
        {
          title: 'Service Suited to Different Residential Properties',
          text: 'Homes throughout <a href="https://en.wikipedia.org/wiki/Johns_Island,_South_Carolina" target="_blank" style="text-decoration: underline; display: inline">Johns Island, SC</a> can differ in size, layout, surroundings, and window accessibility. Soakd provides residential window care that can address these varying property conditions, helping maintain accessible panes as well as window areas that may be more inconvenient to include in ordinary household cleaning.',
        },
        {
          title: 'A Consistent Approach Across the Home',
          text: 'Windows facing different directions or surrounding environments may accumulate grime at different rates. Soakd uses an organized cleaning approach across the areas being serviced, helping homeowners avoid an uneven appearance where frequently used windows receive regular attention while elevated, exterior, or less convenient panes remain visibly affected by buildup.',
        },
      ],
    },

    why: {
      heading: 'Why Comprehensive Window Cleaning in Johns Island, SC Matters',
      subheading: 'Local Conditions. Cleaner Views.',
      image: WINDOW_CLEANING.clothWipeSunset,
      imageAlt: 'Wiping interior window glass in a Johns Island SC home',
      items: [
        {
          title: 'Outdoor Surroundings Can Affect Windows',
          text: 'Pollen, dust, humidity, rain residue, and debris from surrounding vegetation can gradually collect on residential glass and window components. Comprehensive window cleaning in Johns Island, SC helps remove this visible accumulation, supporting clearer views and keeping window care aligned with other seasonal and ongoing property-maintenance needs.',
        },
        {
          title: 'Different Property Conditions Create Different Needs',
          text: 'Residential surroundings can influence how quickly exterior windows appear dirty. Properties near trees, landscaped areas, or more exposed outdoor spaces may encounter varying levels of pollen and debris, making condition-based window maintenance a practical alternative to assuming that every household requires exactly the same cleaning routine.',
        },
        {
          title: 'Professional Care Simplifies Home Readiness',
          text: 'Window cleaning can become particularly useful before visitors, seasonal gatherings, move-in activities, or a broader property refresh. Addressing glass and surrounding components helps homeowners complete those preparations without dedicating additional personal time to numerous panes, tracks, screens, and sills throughout the residence.',
        },
      ],
    },

    faq: {
      items: [
        {
          question: 'Does a home near trees or landscaped areas in Johns Island, SC need window cleaning?',
          answer:
            'Homes surrounded by trees and landscaping may experience pollen, dust, and organic debris collecting on exterior glass, screens, and sills. The amount varies according to the individual property and conditions. Soakd can address visible buildup when it begins affecting window clarity or making surrounding window areas appear noticeably dirty.',
        },
        {
          question: 'What is included with residential window cleaning in Johns Island, SC?',
          answer:
            'Window care can include more than cleaning the main pane. Soakd’s window cleaning service addresses interior and exterior windows along with screens, tracks, and sills. This broader scope helps homeowners remove debris from multiple window components and provides a more detailed option for seasonal cleaning or ongoing property upkeep.',
        },
        {
          question: 'Can window cleaning help with hard-to-reach windows on a Johns Island, SC home?',
          answer:
            'Professional service can make window maintenance more manageable when a property includes elevated or inconveniently positioned panes. Instead of leaving difficult areas out of routine upkeep, homeowners can turn to <a href="https://soakdcharleston.com/" style="text-decoration: underline; display: inline">Soakd</a> for window care that addresses residential cleaning needs across different home layouts.',
        },
      ],
    },

    map: {
      variant: 'location',
      query: 'Johns Island, SC',
      heading: 'Johns Island, SC Residential Window Washing Coverage',
      subtext:
        'Soakd provides residential window washing within its Charleston-area service coverage for homeowners seeking clearer glass and more manageable property upkeep. Window washing in Johns Island, SC can address interior and exterior panes, screens, tracks, and sills while helping remove pollen, dust, fingerprints, weather residue, and everyday debris from windows across properties with different layouts and outdoor surroundings.',
    },
  },
};
