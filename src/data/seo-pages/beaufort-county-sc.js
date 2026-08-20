import { WINDOW_CLEANING } from '../media.js';

/**
 * Beaufort County, SC — county page (Nested Broad Stroke). July '26 batch.
 *
 * Copy is Karan's, verbatim. External Beaufort County link sits in the second
 * Benefits bullet; the internal home link opens the map description.
 */
export default {
  type: 'county',
  path: '/service-areas/beaufort-county-sc',
  parentPath: '/service-areas',
  name: 'Beaufort County',
  geoPlacename: 'Beaufort County',
  // Image path mirrors the page URL.
  cardImage: '/images/service-areas/beaufort-county-sc.jpg',

  metaTitle: 'Reliable Window Cleaning in Beaufort County, SC | Soakd',
  metaDescription:
    'Soakd offers reliable window cleaning in Beaufort County, SC with detailed care for clearer glass and maintained homes. Schedule service. Call Now!',

  copy: {
    hero: {
      headline: 'Reliable Window Cleaning in Beaufort County, SC',
      subtext:
        'Soakd provides reliable window cleaning in Beaufort County, SC for homeowners looking to remove visible buildup and restore clearer views throughout their property. From exterior panes exposed to Lowcountry conditions to interior glass and surrounding window components, detailed service makes routine upkeep easier while helping homes maintain a clean, cared-for appearance.',
      image: '/images/service-areas/beaufort-county-sc.jpg',
      imageAlt: 'Historic architecture in Beaufort County, SC',
      formTitle: 'Get a Free Quote in Beaufort County',
    },

    benefits: {
      heading: 'Why Choose Soakd for Reliable Window Cleaning in Beaufort County, SC?',
      subheading: 'Efficient. Thorough. Dependable.',
      image: WINDOW_CLEANING.waterFedPoleExterior,
      imageAlt: 'Water-fed pole reaching upper windows on a Beaufort County SC home',
      items: [
        {
          title: 'Convenient Window Care for Busy Households',
          text: 'Keeping windows clean can become another time-consuming project for homeowners balancing work, family, and property maintenance. Soakd simplifies the process with professional service that addresses window-care needs in an organized visit, making it easier to maintain clear glass without dedicating personal time to extensive cleaning.',
        },
        {
          title: 'A Complete Approach to Window Cleaning',
          text: 'Soakd addresses interior and exterior glass along with screens, tracks, and sills, creating a more thorough result than simply spot-cleaning visible panes. For homes throughout <a href="https://www.beaufortcountysc.gov/" target="_blank" style="text-decoration: underline; display: inline">Beaufort County, SC</a>, this process helps tackle dirt and environmental buildup that can settle across multiple parts of a window.',
        },
        {
          title: 'Reliable Attention Across the Property',
          text: 'Different windows can accumulate grime at different rates depending on their position, exposure, and accessibility. Soakd takes a consistent approach across the property, helping homeowners avoid a patchwork appearance where easily reached panes look clean while elevated or less convenient windows remain visibly affected by buildup.',
        },
      ],
    },

    why: {
      heading: 'Why Reliable Window Cleaning in Beaufort County, SC Matters',
      subheading: 'Coastal Care. Clearer Views.',
      image: WINDOW_CLEANING.highRiseExterior,
      imageAlt: 'Cleaning elevated exterior glass that is hard to reach from inside',
      items: [
        {
          title: 'Lowcountry Conditions Affect Exterior Windows',
          text: 'Beaufort County’s coastal environment can leave exterior glass exposed to humidity, airborne residue, pollen, and changing weather. Over time, these conditions can reduce clarity and make windows appear dull. Routine cleaning removes accumulated surface grime and supports a cleaner appearance as part of regular residential property maintenance.',
        },
        {
          title: 'Clean Windows Help Homes Feel Ready',
          text: 'Whether residents are preparing for guests, completing seasonal upkeep, settling into a property, or getting a home ready for an important occasion, windows can noticeably influence presentation. Reliable window cleaning in Beaufort County, SC helps address fingerprints, spots, and outdoor buildup so the property feels brighter and better maintained.',
        },
        {
          title: 'Property Layout Can Complicate Routine Cleaning',
          text: 'Larger residences and multi-story homes may include windows that are awkward to access during normal household cleaning. Professional window service makes these property conditions easier to manage, providing a practical option for maintaining upper-level and exterior glass alongside the more accessible windows homeowners encounter during everyday cleaning.',
        },
      ],
    },

    faq: {
      items: [
        {
          question: 'Do coastal homes need professional window cleaning in Beaufort County, SC?',
          answer:
            'Professional service can be useful when coastal conditions leave noticeable residue on exterior glass or when homeowners want more thorough window maintenance. Humidity, pollen, airborne debris, and location can affect individual properties differently. Soakd provides detailed window care that helps Beaufort County homeowners address buildup across accessible and harder-to-manage windows.',
        },
        {
          question:
            'How can window cleaning help before hosting guests at a Beaufort County, SC home?',
          answer:
            'Clean windows can make living spaces appear brighter and improve the overall presentation of a home before visitors arrive. Removing fingerprints, spots, and exterior grime also complements other household cleaning. Soakd can address interior and exterior glass plus surrounding window components, helping homeowners prepare the property without adding another extensive cleaning project.',
        },
        {
          question: 'What should homeowners expect from window cleaning in Beaufort County, SC?',
          answer:
            'Homeowners can expect service focused on removing visible buildup while addressing multiple window components rather than only the main panes. Soakd’s window cleaning includes interior and exterior windows, screens, tracks, and sills, providing a detailed approach for properties affected by ordinary household grime, pollen, and Lowcountry environmental exposure.',
        },
      ],
    },

    map: {
      variant: 'location',
      query: 'Beaufort County, SC',
      heading: 'Beaufort County, SC Window Washing Service Coverage',
      subtext:
        '<a href="https://soakdcharleston.com/" style="text-decoration: underline; display: inline">Soakd</a> provides residential window washing for properties within its Lowcountry service area, helping homeowners maintain clearer glass and cleaner window components. Beaufort County, SC window washing can address interior and exterior panes, screens, tracks, and sills while supporting homes affected by everyday dirt, seasonal pollen, humidity, and environmental residue common to coastal surroundings.',
    },
  },
};
