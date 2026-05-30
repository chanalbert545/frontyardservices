export const company = {
  name: 'Frontyard Services (U) Limited',
  shortName: 'Frontyard Services',
  tagline: 'Give it a new look',
  motto: 'Quality that cares',
  since: 2010,
  email: 'frontyardservices2012@gmail.com',
  phones: ['+256 701 855 099', '+256 762 989 854'],
  address: 'Martyrs Mall, Kyaliwajjala, Uganda',
  hours: 'Monday – Saturday, business hours',
  profilePdf: `${import.meta.env.BASE_URL}Frontyard%20Services%20Profile%202026%20(3).pdf`,
}

export const navLinks = [
  { label: 'Services', href: '/services', children: true },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const serviceDropdown = [
  { label: 'Commercial & Industrial Cleaning', href: '/services#commercial-cleaning' },
  { label: 'Pest Control & Fumigation', href: '/services#pest-control' },
  { label: 'Grounds & Facility Maintenance', href: '/services#grounds-maintenance' },
]

export const heroServices = [
  'Residential Cleaning',
  'Office & Commercial',
  'Schools & Institutions',
  'Hospitals & Healthcare',
  'Warehouses & Industrial',
  'Deep Cleaning',
]

export const story = {
  title: 'A Legacy of Care Since 2010',
  paragraphs: [
    'Since 2010, Frontyard Services (U) Limited has been more than a cleaning company. We have grown from serving homes and residential spaces to becoming a trusted cleaning partner for schools, offices, warehouses, hospitals, factories, and large industrial facilities across Uganda.',
    'That evolution happened because our clients trusted us with their spaces, and we delivered. Over the years, we recognised something simple but profound: people spend the majority of their lives at work. Where you work deserves the same care and attention as where you live — if not more.',
    'A clean, well-maintained workspace isn\'t just about appearances. It speaks to professionalism, health, and the value an organisation places on its people. From small offices to large industrial complexes, Frontyard Services brings the same standard of excellent cleaning care to every space we touch — because every space matters, and so do the people in it.',
  ],
}

export const aboutStats = [
  { value: '16+', label: 'Years established' },
  { value: '6+', label: 'Facility types' },
  { value: '100%', label: 'Satisfaction guarantee' },
]

export const vision = {
  vision:
    'To be Uganda\'s most trusted partner in facility care — setting the standard for quality, consistency, and genuine care in every environment we serve.',
  mission:
    'To deliver professional cleaning and facility services that protect health, elevate workplaces, and give every client confidence that their space is in expert hands.',
}

export const coreValues = [
  { title: 'Caring', text: 'We listen to your experiences to provide support that goes beyond cleaning.' },
  { title: 'Passion', text: 'Your well-being drives our purpose to create memorable experiences.' },
  { title: 'Commitment', text: 'We strive to exceed expectations in every interaction.' },
  { title: 'Consistency', text: 'We deliver unwavering high standards across all locations.' },
  { title: 'Quality', text: 'Tailoring authentic products and services to your individual needs.' },
]

export const whyChoose = [
  {
    title: 'Tailored to Your Facility',
    text: 'No two facilities are identical. We design every service plan around your site\'s specific layout, operations, and compliance requirements.',
  },
  {
    title: 'Eco-Responsible Methods',
    text: 'We use environmentally responsible products and techniques — protecting your staff, your tenants, and the environments around your facilities.',
  },
  {
    title: 'Skilled, Vetted Teams',
    text: 'Our workforce is trained, uniformed, and professionally supervised. You get the same high standard whether it\'s a first visit or the hundredth.',
  },
  {
    title: 'Full Satisfaction Guarantee',
    text: 'We complete the job — then we ask you to inspect. You pay only when you are fully satisfied. If you\'re not, we re-do it at no extra charge.',
  },
]

export const leadership = {
  intro:
    'Our growth is steered by leadership that balances clinical precision with robust business strategy.',
  points: [
    {
      title: 'Pharmaceutical Care & Governance',
      text: 'Our Managing Director is a qualified Clinical Pharmacist with broad knowledge of pharmacy management. Her expertise ensures that every branch adheres to the highest global standards of practice, staff management, and safety.',
    },
    {
      title: 'Strategic Leadership',
      text: 'Our Managing Director holds a BSc in Accounting and Finance, an MSc in International Trade Law and Trade Policy, and a Certificate in Project Planning and Management — bringing financial discipline, contractual integrity, and structured project execution to every client engagement.',
    },
  ],
  closing:
    'When you choose Frontyard Services, you are not just hiring a cleaning company. You are partnering with a business that is led with the same precision and professionalism we bring to every space we clean.',
}

export const faqs = [
  {
    q: 'What types of facilities do you clean?',
    a: 'We serve homes, corporate offices, schools and universities, hospitals and clinics, warehouses, factories, retail and hospitality venues, and property management portfolios across Uganda.',
  },
  {
    q: 'Do you use eco-friendly cleaning products?',
    a: 'Yes. Wherever possible we use environmentally responsible products and methods that are safe for your staff, visitors, and the surrounding environment.',
  },
  {
    q: 'How does your satisfaction guarantee work?',
    a: 'We complete the work, then invite you to inspect. You pay only when you are fully satisfied. If any area does not meet the agreed standard, we return and re-do it at no extra charge.',
  },
  {
    q: 'Can you create a bespoke cleaning plan for my business?',
    a: 'Absolutely. Every facility is different. We assess your premises, operations, and compliance needs, then design a tailored schedule and specification — no one-size-fits-all packages.',
  },
]

export const services = [
  {
    id: 'commercial-cleaning',
    title: 'Commercial & Industrial Cleaning',
    description:
      'Comprehensive cleaning for offices, corporate campuses, warehouses, factories, and large-scale facilities — managed to your schedule and standards.',
    features: [
      'Daily, weekly, or custom contract schedules',
      'Office, restroom, and common-area sanitisation',
      'Industrial floor care and high-traffic zones',
      'Post-construction and move-in/out deep cleans',
      'Supervised teams with quality checklists',
    ],
  },
  {
    id: 'pest-control',
    title: 'Pest Control & Fumigation',
    description:
      'Protecting the integrity and reputation of your facility with safe, effective pest management tailored to your sector.',
    features: [
      'Inspection and risk assessment',
      'Integrated pest management programmes',
      'Fumigation for warehouses and storage',
      'Documentation for audits and compliance',
      'Scheduled preventive treatments',
    ],
  },
  {
    id: 'grounds-maintenance',
    title: 'Grounds & Facility Maintenance',
    description:
      'We design, maintain, and beautify grounds and exterior areas to reflect the professionalism of what\'s inside your building.',
    features: [
      'Landscape and grounds upkeep',
      'Exterior cleaning and facade care',
      'Waste area and perimeter maintenance',
      'Seasonal planting and lawn care',
      'Coordinated with interior cleaning teams',
    ],
  },
]

export const sectors = [
  'Homes & Residences',
  'Corporate Offices',
  'Schools & Universities',
  'Hospitals & Clinics',
  'Warehouses & Logistics',
  'Factories & Manufacturing',
  'Retail & Hospitality',
  'Property Management',
]

export const testimonials = [
  {
    quote:
      'Frontyard\'s attention to detail and flexibility made our office move seamless. The team is always on time and goes above and beyond.',
    name: 'Sarah K.',
    role: 'Office Manager',
  },
  {
    quote:
      'As a property owner, I trust Frontyard for both regular cleaning and special projects. Their professionalism is unmatched.',
    name: 'James M.',
    role: 'Property Owner',
  },
  {
    quote:
      'Our restaurant\'s reputation depends on cleanliness. Frontyard delivers spotless results every time — highly recommended!',
    name: 'Grace L.',
    role: 'Restaurant Owner',
  },
]

export const partners = [
  {
    id: 'cafe-damour',
    name: "Cafe D'Amour",
    sector: 'Hospitality & Retail',
    description: 'Restaurant and hospitality cleaning with attention to front-of-house and kitchen standards.',
  },
  {
    id: 'kira-motors',
    name: 'Kira Motors',
    sector: 'Automotive',
    description:
      'Showroom, service bay, and customer-area cleaning for Kira Motors — keeping vehicles and facilities presentation-ready for every visitor.',
  },
  {
    id: 'corporate-offices',
    name: 'Corporate Offices',
    sector: 'Office',
    description: 'Daily and contract office cleaning for professional workplaces across Kampala.',
  },
  {
    id: 'pride',
    name: 'Pride',
    sector: 'Financial Services',
    description: 'Pride financial institution cleaning and facility support.',
  },
  {
    id: 'stoneridge-school',
    name: 'The Stoneridge School',
    sector: 'Education',
    description:
      'Facility cleaning and maintenance for The Stoneridge School — supporting a clean, safe, and inspiring learning environment.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    sector: 'Healthcare',
    description: 'Sanitisation and cleaning protocols suited to clinical and patient-care areas.',
  },
]

export const locations = [
  'Kyaliwajjala & Namugongo',
  'Kampala Central',
  'Upcountry — on request',
]

export const quoteOptions = [
  'Residential cleaning — regular service',
  'Office cleaning — daily contract',
  'School or institutional facility',
  'Hospital or healthcare facility',
  'Warehouse or industrial site',
  'One-off deep clean',
  'Not sure — I need advice',
]

export const experienceBlurb =
  'Trusted by homes, schools, offices, and industrial clients across Uganda since 2010.';

export const satisfactionHighlight =
  'You\'re not just buying a cleaning service. You\'re gaining a partner who is invested in keeping your space at its best, every single day.'
