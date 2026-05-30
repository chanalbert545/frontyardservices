import brandLogo from '../assets/logo.png'
import heroTeam from '../assets/IMG/IMG_2036.webp'
import aboutTeam from '../assets/IMG/IMG_5597.webp'
import leadership from '../assets/IMG/IMG_5552.webp'
import commercialCleaning from '../assets/IMG/IMG_2054.webp'
import pestControl from '../assets/IMG/IMG_5573.webp'
import groundsMaintenance from '../assets/IMG/IMG_5578.webp'
import contactHero from '../assets/IMG/IMG_2028.webp'
import teamKitchen from '../assets/IMG/IMG_1984.webp'
import residential from '../assets/IMG/IMG_1825.webp'
import officeClean from '../assets/IMG/IMG_2045.webp'
import industrial from '../assets/IMG/IMG_5630.webp'
import gallery1 from '../assets/IMG/IMG_2028.webp'
import gallery2 from '../assets/IMG/IMG_2045.webp'
import gallery3 from '../assets/IMG/IMG_1817.webp'
import gallery4 from '../assets/IMG/IMG_5597.webp'
import gallery5 from '../assets/IMG/IMG_5630.webp'
import gallery6 from '../assets/IMG/IMG_7224.webp'
import gallery7 from '../assets/IMG/IMG_1962.webp'
import gallery8 from '../assets/IMG/IMG_1825.webp'
import gallery9 from '../assets/IMG/IMG_5693.webp'

// -----------------------------------------------------------------------------
// PARTNER CARD IMAGES
// Edit the import path on each line. The `id` must match siteData.js → partners[].
// -----------------------------------------------------------------------------
import partnerCafeDamour from '../assets/IMG/IMG_2028.webp'
import partnerKiraMotors from '../assets/IMG/IMG_5552.webp'
import partnerCorporateOffices from '../assets/IMG/IMG_2045.webp'
import partnerPride from '../assets/pride.png'
import partnerStoneridgeSchool from '../assets/stone.png'
import partnerHealthcare from '../assets/IMG/IMG_5573.webp'

/** @type {Record<string, string>} partner id → image URL */
export const partnerImages = {
  'cafe-damour': partnerCafeDamour,
  'kira-motors': partnerKiraMotors,
  'corporate-offices': partnerCorporateOffices,
  pride: partnerPride,
  'stoneridge-school': partnerStoneridgeSchool,
  healthcare: partnerHealthcare,
}

export function getPartnerImage(partnerId) {
  return partnerImages[partnerId] ?? partnerCorporateOffices
}

export const brandLogoImg = brandLogo
export const heroImage = heroTeam
export const aboutImage = aboutTeam
export const leadershipImage = leadership

export const serviceImages = {
  'commercial-cleaning': commercialCleaning,
  'pest-control': pestControl,
  'grounds-maintenance': groundsMaintenance,
}

export const pageHeroImages = {
  services: commercialCleaning,
  gallery: gallery4,
  testimonials: industrial,
  about: teamKitchen,
  contact: contactHero,
}

export const homeServicePreview = [
  { title: 'Residential Cleaning', image: residential, href: '/services' },
  { title: 'Office & Commercial', image: officeClean, href: '/services#commercial-cleaning' },
  { title: 'Industrial & Warehouse', image: industrial, href: '/services' },
]

export const galleryImages = [
  { src: gallery1, caption: 'Commercial facility cleaning' },
  { src: gallery2, caption: 'Office and workspace care' },
  { src: gallery3, caption: 'Deep cleaning in progress' },
  { src: gallery4, caption: 'Industrial site team' },
  { src: gallery5, caption: 'Large-scale facility support' },
  { src: gallery6, caption: 'Schools and Institutions' },
  { src: gallery7, caption: 'Upholstery and specialist cleaning' },
  { src: gallery8, caption: 'Residential deep clean' },
  { src: heroTeam, caption: 'Restaurants and Cafes' },
  { src: teamKitchen, caption: 'Kitchen and food-service areas' },
  { src: gallery9, caption: 'Residential Exterior Cleaning' },
  { src: leadership, caption: 'Leadership and standards' },
]
