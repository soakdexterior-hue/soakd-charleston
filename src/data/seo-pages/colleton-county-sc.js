import { WINDOW_CLEANING } from '../media.js';

/**
 * Colleton County, SC — county page (Nested Broad Stroke). August '26 batch.
 *
 * Copy is Karan's, verbatim. External Colleton County link sits in the first
 * Why bullet; the internal home link opens the map description.
 */
export default {
  type: 'county',
  path: '/service-areas/colleton-county-sc',
  parentPath: '/service-areas',
  name: 'Colleton County',
  geoPlacename: 'Colleton County',
  // Image path mirrors the page URL.
  cardImage: '/images/service-areas/colleton-county-sc.jpg',

  metaTitle: 'Superior Window Cleaning in Colleton County, SC | Soakd',
  metaDescription:
    'Soakd offers superior window cleaning in Colleton County, SC with detailed care for clearer glass and well-maintained properties. Call Now!',

  copy: {
    hero: {
      headline: 'Superior Window Cleaning in Colleton County, SC',
      subtext:
        'Soakd provides superior window cleaning in Colleton County, SC for homeowners looking to maintain clearer glass and cleaner window components. Detailed service addresses interior and exterior windows along with screens, tracks, and sills, making it easier to manage routine property upkeep when dust, fingerprints, pollen, and outdoor residue begin affecting window appearance.',
      image: '/images/service-areas/colleton-county-sc.jpg',
      imageAlt: 'The Colleton County Courthouse in Walterboro, SC',
      formTitle: 'Get a Free Quote in Colleton County',
    },

    benefits: {
      heading: 'Why Choose Soakd for Superior Window Cleaning in Colleton County, SC?',
      subheading: 'Detailed. Practical. Consistent.',
      image: WINDOW_CLEANING.storefront,
      imageAlt: 'Professional window cleaning on a Colleton County SC storefront',
      items: [
        {
          title: 'A Structured Approach to Window Care',
          text: 'Soakd approaches window cleaning as more than a quick wipe of visible glass. Interior and exterior panes, screens, tracks, and sills receive attention as part of the service, helping address debris around multiple window components and creating a more complete refresh for residential properties.',
        },
        {
          title: 'Consistent Service Across Different Windows',
          text: 'Window conditions can vary considerably around the same property due to sun exposure, surrounding vegetation, accessibility, and everyday household activity. Soakd provides consistent attention across the areas being serviced, helping homeowners manage both commonly used windows and panes that can be inconvenient to maintain during routine cleaning.',
        },
        {
          title: 'Service That Simplifies Property Maintenance',
          text: 'Cleaning windows throughout a home can involve numerous panes and surrounding components, turning a seemingly simple chore into a lengthy project. Professional service helps streamline that work for homeowners, providing an organized option for maintaining clearer windows without requiring them to handle every part of the cleaning process independently.',
        },
      ],
    },

    why: {
      heading: 'Why Superior Window Cleaning in Colleton County, SC Matters',
      subheading: 'Clarity. Upkeep. Home Readiness.',
      image: WINDOW_CLEANING.officeInterior,
      imageAlt: 'Cleaning interior glazing during a scheduled window cleaning visit',
      items: [
        {
          title: 'Local Conditions Contribute to Exterior Buildup',
          text: 'Homes throughout <a href="https://www.colletoncounty.org/" target="_blank" style="text-decoration: underline; display: inline">Colleton County, SC</a> can experience pollen, humidity, rain residue, dust, and debris from surrounding outdoor areas. These conditions can gradually leave windows looking cloudy or marked, making periodic cleaning a practical part of maintaining clearer glass and an orderly exterior appearance.',
        },
        {
          title: 'Property Surroundings Can Change Cleaning Needs',
          text: 'Homes near wooded areas, open landscapes, or roads may experience different types and levels of debris on exterior glass. Superior window cleaning in Colleton County, SC helps address visible accumulation according to actual property conditions, rather than relying on the same maintenance needs or cleaning frequency for every residence.',
        },
        {
          title: 'Clean Windows Make Seasonal Upkeep Easier',
          text: 'Window cleaning can fit naturally into spring cleaning, preparations for visitors, move-in or move-out tasks, and other property refreshes. Addressing glass, screens, tracks, and sills during these periods helps homeowners complete a more thorough maintenance routine while improving the appearance of areas that are easy to overlook.',
        },
      ],
    },

    faq: {
      items: [
        {
          question:
            'Does a home near wooded areas in Colleton County, SC need window cleaning more often?',
          answer:
            'Homes near trees or vegetation may notice pollen, dust, and organic debris collecting on exterior glass and surrounding window areas. Actual cleaning needs depend on exposure and homeowner preferences rather than a fixed schedule. Soakd can address visible buildup when these conditions begin reducing clarity or making windows appear noticeably dirty.',
        },
        {
          question: 'What window areas can be cleaned at a Colleton County, SC home?',
          answer:
            'Window service can extend beyond the primary glass surface. Soakd’s window cleaning includes interior and exterior windows along with screens, tracks, and sills. This broader approach helps address dust and debris around multiple components, which can be especially useful when completing seasonal cleaning or a more detailed property refresh.',
        },
        {
          question:
            'Can window cleaning help prepare a Colleton County, SC property for move-in or move-out?',
          answer:
            'Yes. Windows can collect fingerprints, dust, spots, and outdoor residue that become more noticeable when a property is being prepared for occupancy. Soakd can incorporate detailed window care into this transition, helping homeowners address glass and surrounding components while focusing their time on other moving and property-readiness responsibilities.',
        },
      ],
    },

    map: {
      variant: 'location',
      query: 'Colleton County, SC',
      heading: 'Colleton County, SC Residential Window Washing Coverage',
      subtext:
        '<a href="https://soakdcharleston.com/" style="text-decoration: underline; display: inline">Soakd</a> provides residential window washing within its Lowcountry service area for homeowners seeking cleaner glass and easier property upkeep. Window washing in Colleton County, SC can address interior and exterior panes, screens, tracks, and sills, helping manage pollen, dust, fingerprints, weather residue, and other everyday buildup while supporting clearer views and better-maintained windows.',
    },
  },
};
