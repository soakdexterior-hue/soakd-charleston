import { IMAGES } from '../../media.js';

/**
 * Charleston, SC — city page (Broad Stroke), nested under Charleston County.
 * September '26 batch: "Window Cleaning - Charleston, SC".
 *
 * Copy is Karan's, verbatim. The external Charleston link opens the first Why
 * bullet; the internal home link opens the map description.
 */
export default {
  type: 'city',
  path: '/service-areas/charleston-county-sc/charleston',
  parentPath: '/service-areas/charleston-county-sc',
  name: 'Charleston, SC',
  geoPlacename: 'Charleston',
  // Image path mirrors the page URL.
  cardImage: '/images/service-areas/charleston-county-sc/charleston.jpg',

  metaTitle: 'Exceptional Window Cleaning in Charleston, SC | Soakd',
  metaDescription:
    'Soakd offers exceptional window cleaning in Charleston, SC with detailed care for clearer glass and well-kept homes. Schedule service. Call Now!',

  copy: {
    hero: {
      headline: 'Exceptional Window Cleaning in Charleston, SC',
      subtext:
        'Soakd provides exceptional window cleaning in Charleston, SC for homeowners who want clearer views and a cleaner appearance throughout their property. Detailed service addresses interior and exterior glass along with screens, tracks, and sills, helping simplify window upkeep when coastal conditions, pollen, fingerprints, and everyday debris leave visible buildup behind.',
      image: '/images/service-areas/charleston-county-sc/charleston.jpg',
      imageAlt: 'Charleston, SC skyline over the Ashley River',
      formTitle: 'Get a Free Quote in Charleston',
    },

    benefits: {
      heading: 'Why Choose Soakd for Exceptional Window Cleaning in Charleston, SC?',
      subheading: 'Detailed. Reliable. Property-Focused.',
      image: IMAGES.windowCleaningCrew,
      imageAlt: 'Soakd technician cleaning windows on a Charleston SC home',
      items: [
        {
          title: 'Careful Attention to Often-Missed Areas',
          text: 'Window cleaning is more complete when the surrounding components receive attention alongside the main panes. Soakd addresses screens, tracks, and sills in addition to interior and exterior glass, helping remove accumulated debris from areas homeowners may overlook during quick cleaning and creating a more thorough result throughout the property.',
        },
        {
          title: 'Consistent Care Across the Property',
          text: 'Windows can accumulate different levels of grime depending on their orientation, accessibility, landscaping, and exposure to outdoor conditions. Soakd uses an organized approach to window care, helping homeowners maintain consistent results across frequently viewed panes as well as windows that may be less convenient to address during everyday household cleaning.',
        },
        {
          title: 'Service Suited to Charleston Homes',
          text: 'From frequently used living spaces to upper-level windows, Charleston homes can present a range of cleaning needs. Soakd provides window care suited to different residential layouts, helping homeowners address visible buildup throughout the property without turning a detailed window-cleaning project into another demanding DIY responsibility.',
        },
      ],
    },

    why: {
      heading: 'Why Exceptional Window Cleaning in Charleston, SC Matters',
      subheading: 'Coastal Care. Brighter Views.',
      image: IMAGES.windowCleaningHero,
      imageAlt: 'Squeegee cleaning an arched window on a historic Charleston SC home',
      items: [
        {
          title: 'Coastal Exposure Can Affect Window Clarity',
          text: 'The coastal environment around <a href="https://www.charleston-sc.gov/" target="_blank" style="text-decoration: underline; display: inline">Charleston, SC</a> can expose windows to humidity, airborne residue, pollen, and changing weather conditions. These factors can leave visible buildup on exterior glass, making periodic cleaning useful for maintaining clearer views and keeping windows aligned with broader home-maintenance efforts.',
        },
        {
          title: 'Clean Windows Complement Historic and Modern Homes',
          text: "Charleston includes homes with varied architectural styles, ages, and window arrangements, each presenting different maintenance considerations. Exceptional window cleaning in Charleston, SC helps remove visible dirt and smudges that can distract from a property's appearance while supporting routine care for both established residences and newer homes.",
        },
        {
          title: 'Window Care Helps With Home Readiness',
          text: 'Preparing for guests, seasonal gatherings, move-in activities, or a broader property refresh often brings overlooked surfaces into focus. Clean glass can make rooms feel brighter and exterior areas more polished, while attention to screens, tracks, and sills helps complete the window portion of a homeowner’s preparation checklist.',
        },
      ],
    },

    faq: {
      items: [
        {
          question: 'How can coastal conditions affect window cleaning needs in Charleston, SC?',
          answer:
            'Humidity, pollen, airborne debris, and other coastal environmental conditions can contribute to visible residue on exterior windows. How quickly buildup appears depends on the individual property and its surroundings. Soakd provides detailed window care to help Charleston homeowners remove accumulated grime when it begins affecting glass clarity and overall presentation.',
        },
        {
          question: 'Is window cleaning useful before hosting guests at a Charleston, SC home?',
          answer:
            'Yes. Fingerprints, spots, and exterior residue can become particularly noticeable when homeowners are preparing living spaces for visitors or gatherings. Window cleaning helps refresh these surfaces and complements other household cleaning. Soakd addresses glass and surrounding window components, helping homeowners complete a more detailed property refresh before guests arrive.',
        },
        {
          question: 'What does residential window cleaning in Charleston, SC include?',
          answer:
            'Residential window care can involve more than cleaning the central glass surface. Soakd’s service includes interior and exterior windows along with screens, tracks, and sills. This broader scope helps address areas where household dust and outdoor debris collect, providing a more complete approach to maintaining windows throughout a Charleston residence.',
        },
      ],
    },

    map: {
      variant: 'location',
      query: 'Charleston, SC',
      heading: 'Charleston, SC Residential Window Washing Coverage',
      subtext:
        '<a href="https://soakdcharleston.com/" style="text-decoration: underline; display: inline">Soakd</a> provides residential window washing for homeowners throughout its Charleston-area service coverage. Window washing in Charleston, SC can address interior and exterior panes, screens, tracks, and sills while helping manage pollen, coastal residue, fingerprints, and everyday debris. Detailed local service supports cleaner-looking windows across homes with varying layouts, surroundings, and ongoing maintenance needs.',
    },
  },
};
