import { Link, useOutletContext } from 'react-router-dom'
import PageHero from '../components/PageHero'
import AnimateIn from '../components/AnimateIn'
import Stagger from '../components/Stagger'
import {
  story,
  aboutStats,
  vision,
  coreValues,
  whyChoose,
  leadership,
  faqs,
  company,
} from '../data/siteData'
import { aboutPageHero, leadershipImage } from '../data/images/about'
import LazyImage from '../components/LazyImage'
import { scrollElementToCenter } from '../utils/scroll'

export default function AboutPage() {
  const { openCallback } = useOutletContext() || {}

  function handleClick(e) {
    scrollElementToCenter(e.currentTarget)
  }

  return (
    <>
      <PageHero
        image={aboutPageHero}
        label="About Us"
        title={company.name}
        description={`${company.tagline} — ${company.motto}. Serving Uganda since ${company.since}.`}
      />

      <AnimateIn as="section" className="section section--alt">
        <div className="container about-intro">
          <AnimateIn>
            <h2 className="section__title">{story.title}</h2>
            {story.paragraphs.map((p) => (
              <p key={p.slice(0, 50)}>{p}</p>
            ))}
          </AnimateIn>
          <Stagger className="about-stats" step={80}>
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </Stagger>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section">
        <div className="container">
          <AnimateIn>
            <span className="section__label">Vision & Mission</span>
          </AnimateIn>
          <Stagger className="vision-mission">
            <div className="vision-mission__card scroll-target" onClick={handleClick}>
              <h3>Our Vision</h3>
              <p>{vision.vision}</p>
            </div>
            <div className="vision-mission__card scroll-target" onClick={handleClick}>
              <h3>Our Mission</h3>
              <p>{vision.mission}</p>
            </div>
          </Stagger>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section section--alt" id="values">
        <div className="container">
          <AnimateIn>
            <span className="section__label">Core Values</span>
            <h2 className="section__title">Quality That Cares</h2>
            <p className="section__subtitle">Our values are the heartbeat of our daily operations.</p>
          </AnimateIn>
          <Stagger className="values-grid" step={70}>
            {coreValues.map((v) => (
              <div key={v.title} className="value-card scroll-target" onClick={handleClick}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
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
              <div key={item.title} className="why-card scroll-target" onClick={handleClick}>
                <span className="why-card__num">{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section">
        <div className="container leadership-grid">
          <AnimateIn className="leadership-grid__image" variant="scale">
            <LazyImage src={leadershipImage} alt="Frontyard Services leadership" />
          </AnimateIn>
          <AnimateIn delay={120}>
            <span className="section__label">Leadership</span>
            <h2 className="section__title">Directed by Excellence</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 24 }}>{leadership.intro}</p>
            <Stagger step={100}>
              {leadership.points.map((point) => (
                <div key={point.title} className="leadership-point scroll-target" onClick={handleClick}>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              ))}
            </Stagger>
            <p className="leadership-closing">{leadership.closing}</p>
          </AnimateIn>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section section--alt" id="faq">
        <div className="container">
          <AnimateIn>
            <span className="section__label">FAQs</span>
            <h2 className="section__title">Frequently Asked Questions</h2>
          </AnimateIn>
          <Stagger className="faq-list" step={70}>
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item scroll-target" onClick={handleClick}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </Stagger>
        </div>
      </AnimateIn>

      <AnimateIn as="section" className="section section--lime-band" variant="scale">
        <div className="container section-cta">
          <h2>Partner with {company.shortName}</h2>
          <p>Request a free quotation or call back today.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn--primary" to="/contact#quote-form">
              Get a Free Quote
            </Link>
            <button
              type="button"
              className="btn btn--outline"
              onClick={openCallback}
              style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
            >
              Request a Call Back
            </button>
          </div>
        </div>
      </AnimateIn>
    </>
  )
}
