import { WINDOW_CLEANING } from '../media.js';

/**
 * Berkeley County, SC — county page (Nested Broad Stroke). August '26 batch.
 *
 * Copy is Karan's, verbatim. External Berkeley County link sits in the third
 * Benefits bullet; the internal home link is in the third FAQ answer.
 */
export default {
  type: 'county',
  path: '/service-areas/berkeley-county-sc',
  parentPath: '/service-areas',
  name: 'Berkeley County',
  geoPlacename: 'Berkeley County',
  // Image path mirrors the page URL.
  cardImage: '/images/service-areas/berkeley-county-sc.jpg',

  metaTitle: 'Trusted Window Cleaning in Berkeley County, SC | Soakd',
  metaDescription:
    'Soakd provides trusted window cleaning in Berkeley County, SC with detailed care for clearer, cleaner windows and convenient service. Call Now!',

  copy: {
    hero: {
      headline: 'Trusted Window Cleaning in Berkeley County, SC',
      subtext:
        'Soakd provides trusted window cleaning in Berkeley County, SC for homeowners who want to keep glass and surrounding window areas looking clean and well maintained. Detailed service addresses interior and exterior windows, screens, tracks, and sills, helping simplify routine upkeep for properties dealing with fingerprints, dust, pollen, and outdoor residue throughout the year.',
      image: '/images/service-areas/berkeley-county-sc.jpg',
      imageAlt: 'The county courthouse in Berkeley County, SC',
      formTitle: 'Get a Free Quote in Berkeley County',
    },

    benefits: {
      heading: 'Why Choose Soakd for Trusted Window Cleaning in Berkeley County, SC?',
      subheading: 'Thorough. Reliable. Convenient.',
      image: WINDOW_CLEANING.slidingDoor,
      imageAlt: 'Cleaning an exterior sliding glass door at a Berkeley County SC home',
      items: [
        {
          title: 'Careful Cleaning Beyond Visible Glass',
          text: 'Soakd takes a detailed approach by addressing interior and exterior panes along with screens, tracks, and sills. This broader service helps remove grime from areas that may be missed during quick household cleaning, giving homeowners a more complete way to refresh windows throughout their property.',
        },
        {
          title: 'Dependable Attention Throughout the Home',
          text: 'When a property has windows with different sizes, locations, and levels of exposure, consistent cleaning can become difficult to manage independently. Soakd provides an organized service that addresses window-care needs throughout the property, helping avoid situations where frequently seen panes are maintained while less accessible areas remain overlooked.',
        },
        {
          title: 'Convenient Care for Active Households',
          text: 'Homeowners throughout <a href="https://berkeleycountysc.gov/" target="_blank" style="text-decoration: underline; display: inline">Berkeley County, SC</a> may balance property maintenance with commuting, work, family activities, and other responsibilities. Professional window service removes a labor-intensive chore from that list, making it easier to maintain glass, screens, tracks, and sills without dedicating personal time to cleaning each area.',
        },
      ],
    },

    why: {
      heading: 'Why Trusted Window Cleaning in Berkeley County, SC Matters',
      subheading: 'Cleaner Glass. Easier Upkeep.',
      image: WINDOW_CLEANING.interiorSqueegee,
      imageAlt: 'Squeegeeing an interior picture window in a Berkeley County SC home',
      items: [
        {
          title: 'Outdoor Conditions Can Affect Window Clarity',
          text: 'Pollen, dust, humidity, rain residue, and other environmental debris can gradually collect across exterior windows. Trusted window cleaning in Berkeley County, SC helps remove this visible buildup, supporting clearer views and preventing dirty glass from detracting from an otherwise maintained exterior during routine or seasonal property care.',
        },
        {
          title: 'Growing Households Have Ongoing Maintenance Needs',
          text: 'Everyday activity can leave fingerprints and smudges on interior glass while exterior surfaces continue collecting environmental debris. For busy households, professional window cleaning offers a practical way to address both sides of the window as part of broader home upkeep without turning the task into a lengthy DIY project.',
        },
        {
          title: 'Clean Windows Help Prepare a Property',
          text: 'Whether homeowners are expecting visitors, completing spring cleaning, preparing to move, or refreshing a property after other maintenance, windows can influence how finished the space feels. Removing noticeable spots and accumulated grime helps interior rooms and exterior areas present a cleaner, more cared-for appearance.',
        },
      ],
    },

    faq: {
      items: [
        {
          question: 'Is window cleaning useful before moving into a home in Berkeley County, SC?',
          answer:
            'Yes. Window cleaning can be a useful part of move-in preparation when glass, screens, tracks, or sills show dust and residue from previous occupancy or property activity. Soakd can address these window components, helping Berkeley County homeowners begin with cleaner views and one less detailed maintenance task during the moving process.',
        },
        {
          question:
            'Can professional window cleaning address screens and tracks at a Berkeley County, SC home?',
          answer:
            'Yes. Window maintenance does not have to stop at the glass. Soakd’s window cleaning service includes screens, tracks, and sills in addition to interior and exterior windows. This detailed scope is helpful when dust and debris have accumulated around window components that may receive less attention during ordinary household cleaning.',
        },
        {
          question: 'How do I know when my Berkeley County, SC home needs window cleaning?',
          answer:
            'Visible spots, cloudy-looking panes, pollen, fingerprints, or accumulated debris around window components can indicate that cleaning would be useful. The right timing varies with the home and its surroundings. Homeowners can turn to <a href="https://soakdcharleston.com/" style="text-decoration: underline; display: inline">Soakd</a> when window buildup begins affecting clarity or overall property presentation.',
        },
      ],
    },

    map: {
      variant: 'location',
      query: 'Berkeley County, SC',
      heading: 'Berkeley County, SC Residential Window Washing Coverage',
      subtext:
        'Soakd provides residential window washing within its Lowcountry service area for homeowners looking to simplify ongoing property care. Window washing in Berkeley County, SC helps address interior and exterior glass along with screens, tracks, and sills, supporting cleaner views and a polished appearance for homes affected by everyday fingerprints, seasonal pollen, dust, humidity, and outdoor environmental buildup.',
    },
  },
};
