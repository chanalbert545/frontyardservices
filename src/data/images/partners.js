// -----------------------------------------------------------------------------
// PARTNER CARD IMAGES — edit import per partner (id must match siteData.js)
// -----------------------------------------------------------------------------
import partnerCafeDamour from '../../assets/IMG/IMG_2028.webp'
import partnerKiraMotors from '../../assets/IMG/IMG_5552.webp'
import partnerCorporateOffices from '../../assets/IMG/IMG_2045.webp'
import partnerPride from '../../assets/pride.png'
import partnerStoneridgeSchool from '../../assets/stone.png'
import partnerHealthcare from '../../assets/IMG/IMG_5573.webp'

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
