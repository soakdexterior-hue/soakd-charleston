/**
 * Named catalog of the site's image assets (hosted on the Base44 CDN).
 *
 * SEO page copy picks Benefits/Why imagery from here. Karan's rule: within a
 * single monthly batch, no image may be reused for a Benefits or Why slot on
 * two different pages — naming them makes that easy to audit.
 *
 * Safe to import from Node build scripts — these are plain URL strings, not
 * bundler asset imports.
 */

const CDN = 'https://media.base44.com/images/public/69bdabf65e992908c9993001';

export const IMAGES = {
  logo: `${CDN}/e8ae08491_Soakdlogo2.jpg`,

  // Service imagery
  windowCleaningHero: `${CDN}/cb3a1e018_generated_67b0b0b3.png`,
  windowCleaningCrew: `${CDN}/29793a4e1_Jackwashingwindow.png`,
  windowBeforeAfter: `${CDN}/3332bdd29_Beforeandafter.jpg`,
  pressureWashingHero: `${CDN}/db442dc11_generated_01ad29cc.png`,
  pressureWashingCrew: `${CDN}/5345576dc_baylorsoakd.jpg`,
  porchWashing: `${CDN}/b6652a928_AJwashingporch2.png`,
  softWashingHero: `${CDN}/ae57edefc_generated_17952509.png`,
  roofWashing: `${CDN}/2fc103a53_roofwash.png`,
  gutterCleaningHero: `${CDN}/f83ec5140_generated_9c30a3c3.png`,
  doubleCleaning: `${CDN}/5650f7cc5_doublecleaning.png`,

  // Brand / team
  truck: `${CDN}/3227f4cb6_Soakdtruck2.png`,
  teamWalking: `${CDN}/0aa3f1106_Soakdteamwalking.jpg`,
  team: `${CDN}/cd46ad0fb_Soakdteam.jpg`,
  waterFedPole: `${CDN}/5c61a750a_waterfedpolepic.jpg`,
  soap: `${CDN}/91ca4afcd_soappic.jpg`,
};

/**
 * Window-cleaning action photography, 1200x900 (4:3) WebP, served from public/.
 * Sized for the Benefits/Why split sections, which render a 4:3 crop.
 *
 * Keyed by what each photo actually SHOWS, not by where it is used — the
 * Benefits/Why rule is that images must be unique across a batch AND relevant
 * to the page's subject, so picking well means matching the photo to the copy.
 * Residential vs commercial is called out because the county page copy is
 * written for homeowners.
 */
export const WINDOW_CLEANING = {
  // Residential
  interiorSqueegee: '/images/window-cleaning/window-cleaning-01.webp', // interior, large picture window
  waterFedPoleExterior: '/images/window-cleaning/window-cleaning-02.webp', // pole reaching upper storey
  ladderSecondStorey: '/images/window-cleaning/window-cleaning-03.webp', // ladder work, upper window
  slidingDoor: '/images/window-cleaning/window-cleaning-05.webp', // exterior sliding glass door
  kitchenInterior: '/images/window-cleaning/window-cleaning-07.webp', // interior kitchen window
  twoTechsExterior: '/images/window-cleaning/window-cleaning-09.webp', // two technicians, exterior
  sunroom: '/images/window-cleaning/window-cleaning-10.webp', // sunroom / conservatory glass

  // Commercial / urban
  storefront: '/images/window-cleaning/window-cleaning-04.webp', // street-level storefront
  officeInterior: '/images/window-cleaning/window-cleaning-06.webp', // office interior glazing
  highRiseExterior: '/images/window-cleaning/window-cleaning-08.webp', // balcony, high-rise
};

export const VIDEOS = {
  heroAd: 'https://media.base44.com/videos/public/69bdabf65e992908c9993001/0d47be3ae_soakdadinstavid.mp4',
};
