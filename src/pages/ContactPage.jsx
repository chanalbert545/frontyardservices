import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import PageHero from '../components/PageHero'
import QuoteForm from '../components/QuoteForm'
import AnimateIn from '../components/AnimateIn'
import { company } from '../data/siteData'
import { contactPageHero } from '../data/images/contact'
import { PhoneIcon, MailIcon } from '../components/Icons'

export default function ContactPage() {
  const { openCallback } = useOutletContext() || {}
  const [contactSent, setContactSent] = useState(false)

  function handleContactSubmit(e) {
    e.preventDefault()
    setContactSent(true)
  }

  return (
    <>
      <PageHero
        image={contactPageHero}
        label="Get In Touch"
        title="Contact Us"
        description="Discuss your cleaning requirements — we'll create a bespoke plan for your facility."
      />

      <AnimateIn as="section" className="section section--green">
        <div className="container contact-grid">
          <AnimateIn className="contact-info scroll-target" variant="fade">
            <h2>Find Us</h2>
            <p>Visit our main office or send an enquiry using the form.</p>
            <div className="contact-info__item">
              <span className="contact-info__label">Phone</span>
              <div className="contact-info__links">
                {company.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="contact-link contact-info__link"
                  >
                    <PhoneIcon />
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__label">Email</span>
              <a href={`mailto:${company.email}`} className="contact-link contact-info__link">
                <MailIcon />
                <span>{company.email}</span>
              </a>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__label">Main Office</span>
              <p>{company.address}</p>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__label">Hours</span>
              <p>{company.hours}</p>
            </div>
            <button type="button" className="btn btn--outline-dark" onClick={openCallback}>
              Request a Call Back
            </button>
            <a href={company.profilePdf} className="btn btn--primary" download>
              Download Company Profile (PDF)
            </a>
          </AnimateIn>

          <AnimateIn delay={150}>
            <QuoteForm />
            <div className="contact-form-divider" />
            <h2 id="contact-form" className="contact-form-title">
              General Contact Form
            </h2>
            <p className="contact-form-sub">
              For partnerships, questions, or any other enquiry, send us a message directly.
            </p>
            {contactSent ? (
              <div className="contact-form-card contact-form-card--success">
                <h3>Message sent!</h3>
                <p>We&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form-card" onSubmit={handleContactSubmit}>
                <input type="text" name="website" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <div className="quote-form__grid">
                  <div className="form-group">
                    <label htmlFor="cf-name">Full Name *</label>
                    <input id="cf-name" name="name" type="text" required placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-email">Email *</label>
                    <input id="cf-email" name="email" type="email" required placeholder="you@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-phone">Phone Number</label>
                    <input id="cf-phone" name="phone" type="tel" placeholder="+256 700 000 000" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-subject">Subject *</label>
                    <input id="cf-subject" name="subject" type="text" required placeholder="How can we help?" />
                  </div>
                  <div className="form-group form-group--full">
                    <label htmlFor="cf-message">Message *</label>
                    <textarea id="cf-message" name="message" rows={5} required placeholder="Write your message here..." />
                  </div>
                </div>
                <button type="submit" className="btn btn--primary">
                  Send Message
                </button>
              </form>
            )}
          </AnimateIn>
        </div>
      </AnimateIn>
    </>
  )
}
