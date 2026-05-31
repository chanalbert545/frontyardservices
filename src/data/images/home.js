import heroTeam from '../../assets/IMG/IMG_2036.webp'
import aboutTeam from '../../assets/IMG/IMG_7049.png'
import residential from '../../assets/IMG/IMG_1825.webp'
import officeClean from '../../assets/IMG/IMG_2045.webp'
import industrial from '../../assets/IMG/IMG_5630.webp'
import cafeDamourImg from '../../assets/cafe.png'
import kiraMotorsImg from '../../assets/kira.webp'
import prideImg from '../../assets/pride.png'
import stoneridgeImg from '../../assets/stone.png'

export const heroImage = heroTeam
export const aboutImage = aboutTeam

export const homeServicePreview = [
  { title: 'Residential Cleaning', image: residential, href: '/services' },
  { title: 'Office & Commercial', image: officeClean, href: '/services#commercial-cleaning' },
  { title: 'Industrial & Warehouse', image: industrial, href: '/services' },
]

/**
 * Home page specific partners — edit independently from global partners
 * You can change order, names, descriptions, and images here without affecting other pages
 */
export const homePartners = [
  {
    id: 'home-cafe-damour',
    name: "Cafe D'Amour",
    description: 'Restaurant and hospitality cleaning with attention to front-of-house and kitchen standards.',
    image: cafeDamourImg,
  },
  {
    id: 'home-kira-motors',
    name: 'Kira Motors',
    description: 'Showroom, service bay, and customer-area cleaning for Kira Motors — keeping vehicles and facilities presentation-ready for every visitor.',
    image: kiraMotorsImg,
  },
  {
    id: 'home-pride',
    name: 'Pride',
    description: 'Pride Bank; cleaning and facility support.',
    image: prideImg,
  },
  {
    id: 'home-stoneridge-school',
    name: 'The Stoneridge School',
    description: 'Facility cleaning and maintenance for The Stoneridge School — supporting a clean, safe, and inspiring learning environment.',
    image: stoneridgeImg,
  },
]
