import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import AnimateIn from '../components/AnimateIn'
import Stagger from '../components/Stagger'
import { testimonials, partners, company } from '../data/siteData'
import { testimonialsPageHero, getPartnerImage } from '../data/images/testimonials'
import LazyImage from '../components/LazyImage'
import { scrollElementToCenter } from '../utils/scroll'

export default function TestimonialsPage() {
  function handleClick(e) {
    scrollElementToCenter(e.currentTarget)
  }

  return (
    <>
      <PageHero
        image={testimonialsPageHero}
        label="Testimonials & Partners"
        title="Trusted by Businesses Across Uganda"
        description={`Organisations that rely on ${company.shortName} for consistent, professional cleaning — and the clients who recommend us.`}
      />

      <AnimateIn as="section" className="section">
        <div className="container">
          <AnimateIn>
            <span className="section__label">Client Voices</span>
            <h2 className="section__title">What Our Clients Say</h2>
            <p className="section__subtitle">
              Real feedback from facilities we serve — quality, consistency, and care on every visit.
            </p>
          </AnimateIn>
          <Stagger className="testimonials-grid">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="testimonial-card scroll-target" onClick={handleClick}>
                <div className="testimonial-card__stars" aria-hidden="true">
                  ★★★★★
                </div>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </Stagger>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section section--alt">
        <div className="container">
          <AnimateIn>
            <span className="section__label">Our Partners</span>
            <h2 className="section__title">Organisations We Work With</h2>
            <p className="section__subtitle">
              From hospitality and retail to schools, hospitals, and industrial sites — we partner with businesses that
              value clean, professional environments.
            </p>
          </AnimateIn>
          <Stagger className="partners-grid" step={80}>
            {partners.map((partner) => (
              <article key={partner.id} className="partner-card scroll-target" onClick={handleClick}>
                <div className="partner-card__image">
                  <LazyImage src={getPartnerImage(partner.id)} alt={partner.name} />
                  <div className="partner-card__overlay" aria-hidden="true" />
                </div>
                <div className="partner-card__body">
                  <span className="partner-card__sector">{partner.sector}</span>
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                </div>
              </article>
            ))}
          </Stagger>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section section--lime-band" variant="scale">
        <div className="container section-cta">
          <h2>Join our growing list of partners</h2>
          <p>Let us design a cleaning solution built around your facility.</p>
          <Link className="btn btn--primary" to="/contact#quote-form">
            Get a Free Quote
          </Link>
        </div>
      </AnimateIn>
    </>
  )
}
