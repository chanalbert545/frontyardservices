import { useState } from 'react'
import { quoteOptions } from '../data/siteData'

export default function QuoteForm({ id = 'quote-form' }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div id={id} className="contact-form-panel contact-form-card contact-form-card--success scroll-target">
        <h3>Thank you!</h3>
        <p>We&apos;ve received your request and will send a tailored quotation soon.</p>
      </div>
    )
  }

  return (
    <div id={id} className="contact-form-panel scroll-target">
      <h2 className="contact-form-title">Free Quotation Form</h2>
      <p className="contact-form-sub">
        Tell us about your facility and we&apos;ll get back to you with a tailored quote.
      </p>
      <form className="quote-form contact-form-card" onSubmit={handleSubmit}>
        <input type="text" name="website" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="quote-form__grid">
          <div className="form-group">
            <label htmlFor="qf-name">Full Name *</label>
            <input id="qf-name" name="name" type="text" required placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="qf-company">Company</label>
            <input id="qf-company" name="company" type="text" placeholder="Company name" />
          </div>
          <div className="form-group">
            <label htmlFor="qf-email">Email *</label>
            <input id="qf-email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="qf-phone">Phone *</label>
            <input id="qf-phone" name="phone" type="tel" required placeholder="+256 700 000 000" />
          </div>
          <div className="form-group form-group--full">
            <label htmlFor="qf-requirements">Cleaning Requirements</label>
            <select id="qf-requirements" name="requirements" defaultValue={quoteOptions[0]}>
              {quoteOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group form-group--full">
            <label htmlFor="qf-message">Additional Details</label>
            <textarea
              id="qf-message"
              name="message"
              rows={4}
              placeholder="Tell us about your premises, schedule, and any special requirements..."
            />
          </div>
        </div>
        <button type="submit" className="btn btn--primary">
          Receive Free Quotation
        </button>
        <p className="form-note">By using this form you agree to our privacy policy.</p>
      </form>
    </div>
  )
}
