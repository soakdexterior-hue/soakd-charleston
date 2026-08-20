import { WINDOW_CLEANING } from '../media.js';

/**
 * Charleston County, SC — county page (Nested Broad Stroke). July '26 batch.
 *
 * Copy is Karan's, verbatim. Links stay exactly where he placed them: the
 * external Charleston County link in the second Benefits bullet, and the
 * internal home link in the third FAQ answer. RichText renders both; the FAQ
 * link is flattened to plain text for the JSON-LD only.
 */
export default {
  type: 'county',
  path: '/service-areas/charleston-county-sc',
  parentPath: '/service-areas',
  name: 'Charleston County',
  geoPlacename: 'Charleston County',
  // Image path mirrors the page URL.
  cardImage: '/images/service-areas/charleston-county-sc.jpg',

  metaTitle: 'Premier Window Cleaning in Charleston County, SC | Soakd',
  metaDescription:
    'Soakd offers premier window cleaning in Charleston County, SC for cleaner glass and detailed property care. Refresh your home’s windows. Call Now!',

  copy: {
    hero: {
      headline: 'Premier Window Cleaning in Charleston County, SC',
      subtext:
        'Soakd provides premier window cleaning in Charleston County, SC for homeowners who want clearer views and well-maintained windows without adding another demanding task to their schedules. Detailed window care helps remove accumulated grime from glass and surrounding areas, giving Lowcountry properties a cleaner appearance while supporting routine exterior and interior home maintenance.',
      image: '/images/service-areas/charleston-county-sc.jpg',
      imageAlt: 'Historic Charleston County, SC',
      formTitle: 'Get a Free Quote in Charleston County',
    },

    benefits: {
      heading: 'Why Choose Soakd for Premier Window Cleaning in Charleston County, SC?',
      subheading: 'Careful. Consistent. Property-Focused.',
      image: WINDOW_CLEANING.twoTechsExterior,
      imageAlt: 'Soakd technicians cleaning exterior windows on a Charleston County SC home',
      items: [
        {
          title: 'Detailed Attention to Window Components',
          text: 'Effective window care involves more than addressing obvious marks on the glass. Soakd provides a detailed approach that accounts for interior and exterior windows, screens, tracks, and sills, helping remove buildup from commonly overlooked areas and creating a more complete clean around each window.',
        },
        {
          title: 'A Process Designed for Different Properties',
          text: 'Homes throughout <a href="https://www.charlestoncounty.org/" target="_blank" style="text-decoration: underline; display: inline">Charleston County, SC</a> range from compact residences to larger and multi-story properties. Soakd approaches window cleaning according to the property and its access needs, allowing difficult-to-reach glass and surrounding window components to receive appropriate attention without relying on a one-size-fits-all routine.',
        },
        {
          title: 'Consistent Care for a Polished Appearance',
          text: 'Professional service helps homeowners avoid uneven results caused by hurried spot cleaning or neglected exterior panes. Soakd focuses on systematic window care, addressing visible residue and surrounding components so the finished property presents cleaner glass and a more maintained appearance from both inside and outside the home.',
        },
      ],
    },

    why: {
      heading: 'Why Premier Window Cleaning in Charleston County, SC Matters',
      subheading: 'Visibility. Maintenance. Local Comfort.',
      image: WINDOW_CLEANING.ladderSecondStorey,
      imageAlt: 'Cleaning an upper-storey window on a multi-story Charleston County SC home',
      items: [
        {
          title: 'Coastal Conditions Can Leave Visible Residue',
          text: 'Charleston County’s coastal setting can expose residential windows to humidity and airborne environmental buildup, while pollen and everyday dirt can further affect their appearance. Routine window cleaning helps remove accumulated residue before it becomes an ongoing distraction, supporting clearer views and a cleaner-looking exterior throughout changing Lowcountry conditions.',
        },
        {
          title: 'Clean Glass Complements Local Property Upkeep',
          text: 'Window appearance can influence the overall presentation of homes, whether owners are completing seasonal maintenance, preparing for visitors, or simply keeping exterior surfaces looking cared for. Premier window cleaning in Charleston County, SC addresses visible smudges and buildup that can otherwise make an maintained property appear less polished.',
        },
        {
          title: 'Professional Service Simplifies Hard-to-Reach Cleaning',
          text: 'Elevated and awkwardly positioned windows can turn routine maintenance into a challenging household project, particularly on multi-story properties. Professional window care provides a practical alternative for addressing these areas, helping homeowners maintain exterior glass without making difficult access another recurring responsibility on an already busy home-maintenance list.',
        },
      ],
    },

    faq: {
      items: [
        {
          question:
            'When should coastal homeowners schedule window cleaning in Charleston County, SC?',
          answer:
            'There is no single schedule that suits every coastal home. Visible salt-related residue, pollen, weather exposure, surrounding vegetation, and personal preferences can all influence timing. Soakd can provide window cleaning based on current property conditions, helping Charleston County homeowners address buildup when their windows begin looking cloudy, spotted, or noticeably dirty.',
        },
        {
          question:
            'What areas are addressed during window cleaning for homes in Charleston County, SC?',
          answer:
            'Window care can address more than the main glass surface. Service from Soakd includes interior and exterior windows as well as screens, tracks, and sills, allowing multiple window components to receive attention. This is useful for Charleston County homes where environmental debris and routine household dust can collect in less noticeable areas.',
        },
        {
          question:
            'Is professional window cleaning useful for multi-story homes in Charleston County, SC?',
          answer:
            'Yes. Upper-level exterior windows can be inconvenient and difficult for homeowners to maintain on their own. Professional equipment makes these areas more manageable as part of a structured service. Homeowners can rely on <a href="https://soakdcharleston.com/" style="text-decoration: underline; display: inline">Soakd</a> for window cleaning suited to multi-story properties and other residential window-care needs.',
        },
      ],
    },

    map: {
      variant: 'location',
      query: 'Charleston County, SC',
      heading: 'Window Cleaning Coverage Across Charleston County, SC',
      subtext:
        'Soakd serves homeowners seeking dependable window washing throughout Charleston County communities and surrounding Lowcountry areas. Residential window care can address interior and exterior glass along with screens, tracks, and sills, helping properties maintain cleaner views and a polished appearance. Local service is especially useful for homes affected by coastal exposure, seasonal pollen, humidity, and everyday environmental buildup.',
    },
  },
};
