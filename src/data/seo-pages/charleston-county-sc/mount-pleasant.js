import { IMAGES } from '../../media.js';

/**
 * Mount Pleasant, SC — city page (Broad Stroke), nested under Charleston County.
 * September '26 batch: "Window Cleaning - Mount Pleasant, SC".
 *
 * Copy is Karan's, verbatim. The internal home link sits in the hero
 * description; the external Mount Pleasant link sits in the third Benefits
 * bullet.
 */
export default {
  type: 'city',
  path: '/service-areas/charleston-county-sc/mount-pleasant',
  parentPath: '/service-areas/charleston-county-sc',
  name: 'Mount Pleasant, SC',
  geoPlacename: 'Mount Pleasant',
  // Image path mirrors the page URL.
  cardImage: '/images/service-areas/charleston-county-sc/mount-pleasant.jpg',

  metaTitle: 'Dependable Window Cleaning in Mount Pleasant, SC | Soakd',
  metaDescription:
    'Soakd offers dependable window cleaning in Mount Pleasant, SC with detailed care for clearer glass and easier home upkeep. Schedule service. Call Now!',

  copy: {
    hero: {
      headline: 'Dependable Window Cleaning in Mount Pleasant, SC',
      subtext:
        'Soakd provides dependable window cleaning in Mount Pleasant, SC for homeowners seeking clearer glass and easier routine property care. Interior and exterior panes, screens, tracks, and sills can collect different types of buildup over time. <a href="https://soakdcharleston.com/" style="text-decoration: underline; display: inline">Soakd</a> delivers detailed window care designed to refresh these areas while reducing the demands of DIY cleaning.',
      image: '/images/service-areas/charleston-county-sc/mount-pleasant.jpg',
      imageAlt: 'Arthur Ravenel Jr. Bridge at dusk from Mount Pleasant, SC',
      formTitle: 'Get a Free Quote in Mount Pleasant',
    },

    benefits: {
      heading: 'Why Choose Soakd for Dependable Window Cleaning in Mount Pleasant, SC?',
      subheading: 'Convenient. Thorough. Consistent.',
      image: IMAGES.waterFedPole,
      imageAlt: 'Water-fed pole window cleaning on a Mount Pleasant SC home',
      items: [
        {
          title: 'Convenient Care for Active Households',
          text: 'Window cleaning can become time-consuming when numerous panes and surrounding components require attention. Soakd provides an organized service that helps busy homeowners handle this maintenance without spending personal time working through interior glass, exterior surfaces, screens, tracks, and sills individually across the property.',
        },
        {
          title: 'A Detailed Process for Window Components',
          text: 'Effective window care extends beyond obvious fingerprints or spots on the center of a pane. Soakd addresses interior and exterior glass together with screens, tracks, and sills, helping remove debris from areas that can remain dirty when homeowners rely primarily on quick surface cleaning between larger maintenance projects.',
        },
        {
          title: 'Consistent Service for Local Homes',
          text: 'Properties throughout <a href="https://www.tompsc.com/" target="_blank" style="text-decoration: underline; display: inline">Mount Pleasant, SC</a> can have varied window layouts, including upper-level or less accessible panes. Soakd provides consistent attention across the areas being serviced, helping homeowners maintain a more uniform appearance rather than leaving inconvenient windows out of routine cleaning.',
        },
      ],
    },

    why: {
      heading: 'Why Dependable Window Cleaning in Mount Pleasant, SC Matters',
      subheading: 'Clarity. Comfort. Property Care.',
      image: IMAGES.soap,
      imageAlt: 'Scrubbing interior window glass in a Mount Pleasant SC home',
      items: [
        {
          title: 'Lowcountry Conditions Leave Their Mark',
          text: 'Humidity, pollen, rain residue, airborne debris, and coastal influences can contribute to buildup on exterior glass. Dependable window cleaning in Mount Pleasant, SC helps remove visible accumulation as it develops, supporting clearer views while keeping window maintenance aligned with the other exterior-care tasks homeowners manage throughout changing seasons.',
        },
        {
          title: 'Busy Lifestyles Can Push Window Care Aside',
          text: 'Detailed window cleaning may compete with work, family commitments, errands, and other household maintenance. Professional service provides a practical way to address panes and surrounding components without requiring homeowners to dedicate significant personal time to a task that can become increasingly involved on larger or multi-story properties.',
        },
        {
          title: 'Cleaner Windows Support Everyday Presentation',
          text: 'Smudged interior panes and dirty exterior glass can affect how polished a home feels even when surrounding spaces are maintained. Cleaning these surfaces is useful before gatherings, seasonal refreshes, move-in preparation, or simply when homeowners want natural views and window areas to appear cleaner during everyday living.',
        },
      ],
    },

    faq: {
      items: [
        {
          question: 'When should I schedule window cleaning for my Mount Pleasant, SC home?',
          answer:
            'The right timing depends on the home’s surroundings, visible buildup, pollen exposure, weather, and personal maintenance preferences. Service may be useful when spots or residue begin affecting window clarity. Soakd provides residential window care based on the property’s needs rather than assuming every Mount Pleasant household requires the same cleaning schedule.',
        },
        {
          question: 'Can window cleaning help with pollen on a Mount Pleasant, SC property?',
          answer:
            'Yes. Pollen can settle on exterior glass, screens, sills, and other window areas, particularly when seasonal conditions increase airborne debris. Professional cleaning helps remove this visible accumulation as part of routine property maintenance. Soakd addresses multiple window components, making the service useful when pollen leaves windows looking dusty or less clear.',
        },
        {
          question: 'Is professional window cleaning suitable for multi-story homes in Mount Pleasant, SC?',
          answer:
            'Yes. Multi-story properties can include elevated exterior panes that are inconvenient for homeowners to incorporate into ordinary cleaning. Professional window care provides a more practical way to address these areas alongside accessible windows. Soakd can service residential window components as part of a detailed approach to maintaining the property’s overall appearance.',
        },
      ],
    },

    map: {
      variant: 'location',
      query: 'Mount Pleasant, SC',
      heading: 'Mount Pleasant, SC Residential Window Washing Coverage',
      subtext:
        'Soakd provides residential window washing within its Charleston-area service coverage for properties needing clearer glass and detailed window upkeep. Window washing in Mount Pleasant, SC can address interior and exterior panes, screens, tracks, and sills, helping homeowners manage fingerprints, pollen, humidity-related residue, and everyday debris while maintaining cleaner-looking windows across different home layouts and property settings.',
    },
  },
};
