import { WINDOW_CLEANING } from '../media.js';

/**
 * Dorchester County, SC — county page (Nested Broad Stroke). August '26 batch.
 *
 * Copy is Karan's, verbatim. Internal home link sits in the hero description;
 * the external Dorchester County link opens the first Why bullet.
 */
export default {
  type: 'county',
  path: '/service-areas/dorchester-county-sc',
  parentPath: '/service-areas',
  name: 'Dorchester County',
  geoPlacename: 'Dorchester County',
  // Image path mirrors the page URL.
  cardImage: '/images/service-areas/dorchester-county-sc.jpg',

  metaTitle: 'Expert Window Cleaning in Dorchester County, SC | Soakd',
  metaDescription:
    'Soakd offers expert window cleaning in Dorchester County, SC with detailed care for cleaner glass and well-kept homes. Schedule your service. Call Now!',

  copy: {
    hero: {
      headline: 'Expert Window Cleaning in Dorchester County, SC',
      subtext:
        'Soakd provides expert window cleaning in Dorchester County, SC for homeowners who want clearer glass without turning window upkeep into a time-consuming project. From interior panes to exterior surfaces and surrounding components, <a href="https://soakdcharleston.com/" style="text-decoration: underline; display: inline">Soakd</a> delivers attentive window care suited to routine maintenance, seasonal cleaning, and property refreshes throughout the area.',
      image: '/images/service-areas/dorchester-county-sc.jpg',
      imageAlt: 'Colonial Dorchester State Historic Site, Dorchester County, SC',
      formTitle: 'Get a Free Quote in Dorchester County',
    },

    benefits: {
      heading: 'Why Choose Soakd for Expert Window Cleaning in Dorchester County, SC?',
      subheading: 'Practical. Detailed. Home-Focused.',
      image: WINDOW_CLEANING.sunroom,
      imageAlt: 'Cleaning sunroom glass on a Dorchester County SC property',
      items: [
        {
          title: 'Window Care for Different Home Layouts',
          text: 'Single-story residences, larger family homes, and multi-story properties can present very different cleaning needs. Soakd adapts window care to the layout and accessibility of the property, helping address both straightforward panes and windows that are more difficult for homeowners to include in routine household cleaning.',
        },
        {
          title: 'Detailed Cleaning Around Each Window',
          text: 'A cleaner window involves more than removing marks from the center of the glass. Soakd addresses interior and exterior panes along with screens, tracks, and sills, helping remove debris from surrounding areas that can otherwise remain noticeable even after the primary glass surface has been cleaned.',
        },
        {
          title: 'Organized Service Without the DIY Hassle',
          text: 'Cleaning numerous windows can require considerable time, especially when screens, tracks, exterior panes, and elevated areas need attention. A professional service streamlines these tasks into a structured process, allowing Dorchester County homeowners to focus on other priorities while their window maintenance receives detailed attention.',
        },
      ],
    },

    why: {
      heading: 'Why Expert Window Cleaning in Dorchester County, SC Matters',
      subheading: 'Maintenance. Comfort. Clear Views.',
      image: WINDOW_CLEANING.kitchenInterior,
      imageAlt: 'Cleaning an interior kitchen window in a Dorchester County SC family home',
      items: [
        {
          title: 'Seasonal Conditions Create Visible Buildup',
          text: 'Windows around <a href="https://www.dorchestercountysc.gov/" target="_blank" style="text-decoration: underline; display: inline">Dorchester County, SC</a> can encounter pollen, humidity, rain residue, dust, and other outdoor debris as seasons change. Regular window care helps clear away accumulated grime, making exterior glass look better maintained while supporting clearer views from inside the property.',
        },
        {
          title: 'Family Homes Benefit From Easier Upkeep',
          text: 'Fingerprints, smudges, dust, and outdoor residue can accumulate as part of everyday life, particularly around frequently used areas of a home. Expert window cleaning in Dorchester County, SC provides a practical way to refresh glass and surrounding components without adding an extensive cleaning task to a household’s existing routine.',
        },
        {
          title: 'Clean Windows Support Property Readiness',
          text: 'Windows can become especially noticeable when preparing a property for visitors, seasonal gatherings, move-in activities, or broader home maintenance. Addressing cloudy glass and accumulated debris helps create a cleaner overall presentation, complementing other upkeep performed throughout interior spaces and exterior areas of the residence.',
        },
      ],
    },

    faq: {
      items: [
        {
          question: 'When is a good time to schedule window cleaning in Dorchester County, SC?',
          answer:
            'A useful time to schedule service is when pollen, spots, fingerprints, or outdoor residue become noticeable, or when window cleaning fits into seasonal property upkeep. Individual homes can require different schedules based on their surroundings and exposure. Soakd provides window care according to the property’s current cleaning needs rather than a universal timetable.',
        },
        {
          question: 'Can window cleaning help with pollen buildup on a Dorchester County, SC home?',
          answer:
            'Yes. Pollen and other airborne debris can settle on exterior glass, screens, sills, and nearby window areas, affecting clarity and appearance. Professional cleaning helps remove this visible accumulation as part of regular home upkeep. Soakd addresses multiple window components, providing a more complete refresh when seasonal buildup becomes noticeable around a property.',
        },
        {
          question: 'What should I do before window cleaning at my Dorchester County, SC home?',
          answer:
            'Homeowners can make interior windows easier to access by moving fragile or personal items away from nearby sills and window areas when needed. Property layouts and service needs vary, so preparation may differ by home. Soakd can address the relevant window surfaces while homeowners ensure practical access to areas scheduled for cleaning.',
        },
      ],
    },

    map: {
      variant: 'location',
      query: 'Dorchester County, SC',
      heading: 'Dorchester County, SC Residential Window Washing Coverage',
      subtext:
        'Soakd provides residential window washing for homeowners within its Lowcountry service area, supporting properties that need clearer glass and detailed window upkeep. Window washing in Dorchester County, SC can help address interior and exterior panes, screens, tracks, and sills while removing everyday grime and environmental buildup that affects the appearance of windows throughout the home.',
    },
  },
};
