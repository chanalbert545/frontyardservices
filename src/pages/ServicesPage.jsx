import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import AnimateIn from '../components/AnimateIn'
import Stagger from '../components/Stagger'
import { services, sectors } from '../data/siteData'
import { servicesPageHero, serviceImages } from '../data/images/services'
import LazyImage from '../components/LazyImage'
import { scrollElementToCenter } from '../utils/scroll'

export default function ServicesPage() {
  function handleCardClick(e) {
    scrollElementToCenter(e.currentTarget)
  }

  return (
    <>
      <PageHero
        image={servicesPageHero}
        label="What We Offer"
        title="Our Cleaning Services"
        description="Comprehensive cleaning for homes, offices, schools, hospitals, warehouses, and industrial facilities — tailored to your space, your people, and your standards."
      />

      <AnimateIn as="section" className="section">
        <div className="container">
          <Stagger className="services-detail" step={120}>
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="service-detail-card scroll-target"
                onClick={handleCardClick}
              >
                <div className="service-detail-card__image">
                  <LazyImage src={serviceImages[service.id]} alt={service.title} />
                </div>
                <div className="service-detail-card__body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Link className="btn btn--primary" to="/contact#quote-form">
                    Request a Quote
                  </Link>
                </div>
              </article>
            ))}
          </Stagger>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section section--alt">
        <div className="container">
          <AnimateIn>
            <span className="section__label">Industries</span>
            <h2 className="section__title">Sectors We Serve</h2>
          </AnimateIn>
          <Stagger className="sectors-grid" step={60}>
            {sectors.map((sector) => (
              <div key={sector} className="sector-item">
                <span className="sector-item__dot" />
                {sector}
              </div>
            ))}
          </Stagger>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section section--lime-band" variant="scale">
        <div className="container section-cta">
          <h2>Need a bespoke cleaning specification?</h2>
          <p>We design every service plan around your facility — no one-size-fits-all.</p>
          <Link className="btn btn--primary" to="/contact#quote-form">
            Get a Free Quote
          </Link>
        </div>
      </AnimateIn>
    </>
  )
}
