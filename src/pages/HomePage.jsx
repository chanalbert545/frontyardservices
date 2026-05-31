import { Link, useOutletContext } from 'react-router-dom'
import {
  company,
  heroServices,
  faqs,
  whyChoose,
  story,
  experienceBlurb,
  satisfactionHighlight,
} from '../data/siteData'
import { heroImage, aboutImage, homeServicePreview, homePartners } from '../data/images/home'
import LazyImage from '../components/LazyImage'
import AnimateIn from '../components/AnimateIn'
import Stagger from '../components/Stagger'
import './HomePage.css'

export default function HomePage() {
  const { openCallback } = useOutletContext() || {}

  return (
    <>
      <section className="hero">
        <div className="hero__bg">
          <LazyImage
            src={heroImage}
            alt="Frontyard Services team providing commercial cleaning"
            priority
          />
          <div className="hero__overlay" aria-hidden="true" />
        </div>
        <div className="container hero__inner hero__inner--centered">
          <div className="hero__content hero-sequential">
            <span className="hero__badge">SINCE 2010 — QUALITY THAT CARES</span>
            <h1>Professional Cleaning Services Across Uganda</h1>
            <p>
              {company.shortName} — {company.tagline}. From homes and offices to schools, hospitals,
              warehouses, and industrial facilities, we deliver excellent cleaning care to every space we touch.
            </p>
            <ul className="hero__services">
              {heroServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="hero__actions">
              <Link className="btn btn--accent" to="/contact#quote-form">
                Get a Free Quote
              </Link>
              <button type="button" className="btn btn--outline" onClick={openCallback}>
                Request a Call Back
              </button>
              <a className="btn hero__download" href={company.profilePdf} download>
                Download Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <AnimateIn as="div" className="trust-bar" variant="fade">
        <div className="container">
          <Stagger className="trust-bar__inner" step={70}>
            <div className="trust-bar__item">
              <strong>16+</strong>
              <span>Years established</span>
            </div>
            <div className="trust-bar__item">
              <strong>6+</strong>
              <span>Facility types</span>
            </div>
            <div className="trust-bar__item">
              <strong>100%</strong>
              <span>Satisfaction guarantee</span>
            </div>
          </Stagger>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section">
        <div className="container split-section">
          <AnimateIn className="split-section__image" delay={0} variant="scale">
            <LazyImage src={aboutImage} alt="Frontyard Services team" />
          </AnimateIn>
          <AnimateIn delay={120}>
            <h2 className="section__title">{story.title}</h2>
            {story.paragraphs.slice(0, 2).map((p) => (
              <p key={p.slice(0, 40)} style={{ color: 'var(--color-text-muted)', marginBottom: 16 }}>
                {p}
              </p>
            ))}
            <Link className="btn btn--primary" to="/about">
              Learn About Us
            </Link>
          </AnimateIn>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section section--alt">
        <div className="container">
          <AnimateIn>
            <span className="section__label">Our Services</span>
            <h2 className="section__title">Cleaning for Every Environment</h2>
            <p className="section__subtitle">{experienceBlurb}</p>
          </AnimateIn>
          <Stagger className="grid-3">
            {homeServicePreview.map((item) => (
              <article key={item.title} className="service-card">
                <div className="service-card__image">
                  <LazyImage src={item.image} alt={item.title} />
                </div>
                <div className="service-card__body">
                  <h3>{item.title}</h3>
                  <p>Professional care tailored to your facility and schedule.</p>
                  <Link className="service-card__link" to={item.href}>
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </Stagger>
          <AnimateIn delay={200} style={{ textAlign: 'center', marginTop: 40 }}>
            <Link className="btn btn--primary" to="/services">
              View All Services
            </Link>
          </AnimateIn>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section section--alt">
        <div className="container">
          <AnimateIn>
            <span className="section__label">Our Partners</span>
            <h2 className="section__title">Trusted by Leading Businesses</h2>
            <p className="section__subtitle">We're proud to serve businesses and institutions that share our commitment to excellence.</p>
          </AnimateIn>
          <Stagger className="grid-4" step={55}>
            {homePartners.map((partner) => (
              <div key={partner.id} className="partner-card">
                <div className="partner-card__image">
                  <LazyImage src={partner.image} alt={partner.name} />
                </div>
                <div className="partner-card__body">
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                </div>
              </div>
            ))}
          </Stagger>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section section--navy">
        <div className="container">
          <AnimateIn>
            <span className="section__label">Why Choose Us</span>
            <h2 className="section__title">The Frontyard Difference</h2>
          </AnimateIn>
          <Stagger className="grid-2">
            {whyChoose.map((item, i) => (
              <div key={item.title} className="why-card scroll-target">
                <span className="why-card__num">{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section">
        <div className="container">
          <AnimateIn>
            <span className="section__label">FAQs</span>
            <h2 className="section__title">Frequently Asked Questions</h2>
          </AnimateIn>
          <Stagger className="faq-list" step={70}>
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item scroll-target">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </Stagger>
          <AnimateIn delay={150}>
            <p style={{ marginTop: 32, color: 'var(--color-text-muted)', maxWidth: 640 }}>
              {satisfactionHighlight}
            </p>
          </AnimateIn>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section section--lime-band" variant="scale">
        <div className="container section-cta">
          <h2>Ready for a cleaner facility?</h2>
          <p>Request a free quotation — we&apos;ll design a plan around your premises.</p>
          <Link className="btn btn--primary" to="/contact#quote-form">
            Get a Free Quote
          </Link>
        </div>
      </AnimateIn>
    </>
  )
}
