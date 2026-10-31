import { WINDOW_CLEANING } from '../../media.js';

/**
 * Sullivan's Island, SC — city page (Broad Stroke), nested under Charleston County.
 * November '26 batch: "Window Cleaning - Sullivan's Island, SC".
 *
 * Copy is Karan's, verbatim. The internal home link sits in the hero
 * description; the external Sullivan's Island link opens the second Why bullet.
 *
 * Area photo: "Sullivan's Island viewed from Fort Moultrie" by Thomson200,
 * Wikimedia Commons, CC0 (no attribution required).
 */
export default {
  type: 'city',
  path: '/service-areas/charleston-county-sc/sullivans-island',
  parentPath: '/service-areas/charleston-county-sc',
  name: "Sullivan's Island, SC",
  geoPlacename: "Sullivan's Island",
  // Image path mirrors the page URL.
  cardImage: '/images/service-areas/charleston-county-sc/sullivans-island.jpg',

  metaTitle: "Premium Window Cleaning in Sullivan's Island, SC | Soakd",
  metaDescription:
    "Soakd offers premium window cleaning in Sullivan's Island, SC for clearer glass and detailed coastal home care. Schedule service. Call Now!",

  copy: {
    hero: {
      headline: "Premium Window Cleaning in Sullivan's Island, SC",
      subtext:
        'Soakd provides premium window cleaning in Sullivan\'s Island, SC for homeowners seeking clearer coastal views and well-maintained windows. Salt residue, windblown sand, and everyday grime can affect glass throughout the property. <a href="https://soakdcharleston.com/" style="text-decoration: underline; display: inline">Soakd</a> offers detailed interior and exterior window care, including screens, tracks, and sills, helping homeowners maintain a cleaner appearance across their coastal residences.',
      image: '/images/service-areas/charleston-county-sc/sullivans-island.jpg',
      imageAlt: "Sullivan's Island, SC homes and palmettos seen from Fort Moultrie",
      formTitle: "Get a Free Quote in Sullivan's Island",
    },

    benefits: {
      heading: "Why Choose Soakd for Premium Window Cleaning in Sullivan's Island, SC?",
      subheading: 'Detailed. Methodical. Dependable.',
      image: WINDOW_CLEANING.sillTrackDetail,
      imageAlt: "Cleaning window sills and tracks on a Sullivan's Island SC home",
      items: [
        {
          title: 'Attention to Every Window Component',
          text: 'Coastal residue can settle beyond the main glass surface, collecting along window tracks, screens, and sills. Soakd provides detailed cleaning that addresses these commonly overlooked components alongside interior and exterior panes, helping homeowners achieve a more complete refresh instead of leaving surrounding areas visibly affected by accumulated debris.',
        },
        {
          title: 'A Thoughtful Cleaning Process',
          text: 'Different windows require different levels of attention depending on their accessibility, condition, and exposure to outdoor elements. Soakd approaches residential window care systematically, addressing visible buildup across the areas being serviced while considering the needs of each property, from frequently used living spaces to elevated exterior windows.',
        },
        {
          title: 'Consistent Care for Coastal Residences',
          text: 'Maintaining windows across a coastal property can become demanding when salt-related residue and airborne debris accumulate at different rates. Soakd provides organized window cleaning that helps homeowners maintain a consistent appearance throughout the residence, reducing the need to tackle individual panes and surrounding components through repeated DIY cleaning sessions.',
        },
      ],
    },

    why: {
      heading: "Why Premium Window Cleaning in Sullivan's Island, SC Matters",
      subheading: 'Coastal Conditions. Clearer Views.',
      image: WINDOW_CLEANING.elevatedBeachHouseSqueegee,
      imageAlt: "Squeegeeing exterior glass on an elevated Sullivan's Island SC beach house",
      items: [
        {
          title: 'Salt Air and Coastal Weather Exposure',
          text: 'Properties near the Atlantic Ocean can experience salt-related residue, humidity, windblown sand, and changing weather conditions. These environmental factors may leave exterior windows looking cloudy or spotted. Regular window cleaning helps remove visible accumulation and maintain clearer glass, particularly on surfaces facing prevailing coastal winds.',
        },
        {
          title: 'Distinctive Coastal Property Conditions',
          text: 'Homes throughout <a href="https://sullivansisland.sc.gov/" target="_blank" style="text-decoration: underline; display: inline">Sullivan\'s Island, SC</a> may feature elevated living areas, expansive windows, and outdoor-facing glass designed to capture natural light and surrounding views. These architectural features can make routine cleaning more involved, especially when exterior panes are difficult to reach or frequently exposed to coastal debris.',
        },
        {
          title: 'Maintaining the Appearance of Island Homes',
          text: 'Coastal residences often feature windows that connect indoor spaces with porches, landscaped areas, and outdoor surroundings. When glass becomes marked by fingerprints or environmental buildup, these views can appear less inviting. Routine window maintenance helps preserve a polished presentation while complementing other property-care efforts throughout the year.',
        },
      ],
    },

    faq: {
      items: [
        {
          question: "How often should coastal homeowners schedule window cleaning in Sullivan's Island, SC?",
          answer:
            'Cleaning frequency depends on proximity to the shoreline, wind exposure, visible salt residue, and surrounding vegetation. Ocean-facing windows may require attention more frequently than sheltered panes. Soakd provides residential window cleaning that helps homeowners address buildup according to actual property conditions rather than relying on a fixed maintenance schedule.',
        },
        {
          question: "Can professional window cleaning handle elevated coastal homes in Sullivan's Island, SC?",
          answer:
            'Yes. Elevated homes may have upper-level windows that are difficult to reach using ordinary household cleaning methods. Professional equipment can make these areas more manageable, although accessibility varies by property. Soakd offers window cleaning for multi-story residences, helping homeowners address exterior glass and surrounding components without undertaking difficult cleaning tasks themselves.',
        },
        {
          question: "What should homeowners expect from professional window cleaning in Sullivan's Island, SC?",
          answer:
            "Professional window cleaning generally focuses on removing visible dirt, spots, and environmental residue from glass while addressing applicable surrounding components. Soakd's residential service includes interior and exterior windows, screens, tracks, and sills. Homeowners can discuss their property's layout and cleaning needs before scheduling to clarify the intended service scope.",
        },
      ],
    },

    map: {
      variant: 'location',
      query: "Sullivan's Island, SC",
      heading: "Sullivan's Island, SC Residential Window Washing Coverage",
      subtext:
        "Soakd provides residential window washing for homeowners seeking detailed coastal property care within its Charleston-area service region. Window washing in Sullivan's Island, SC helps address salt-related residue, windblown debris, pollen, and everyday grime affecting interior and exterior glass. Service also includes attention to screens, tracks, and sills, supporting clearer views and cleaner window areas across island residences.",
    },
  },
};
