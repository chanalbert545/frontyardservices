import { useState } from 'react'
import ConfirmModal from './ConfirmModal'
import { submitWeb3Form } from '../utils/web3forms'
import { quoteOptions, company } from '../data/siteData'

export default function QuoteForm({ id = 'quote-form' }) {
  const [submitted, setSubmitted] = useState(false)
  const [pendingQuote, setPendingQuote] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')?.toString().trim() ?? ''
    const companyName = formData.get('company')?.toString().trim() ?? ''
    const email = formData.get('email')?.toString().trim() ?? ''
    const phone = formData.get('phone')?.toString().trim() ?? ''
    const requirements = formData.get('requirements')?.toString().trim() ?? ''
    const message = formData.get('message')?.toString().trim() ?? ''

    setPendingQuote({ name, companyName, email, phone, requirements, message })
  }

  async function handleConfirmQuote() {
    if (!pendingQuote) return

    setIsSubmitting(true)
    setSubmissionError('')

    const { name, companyName, email, phone, requirements, message } = pendingQuote
    const body = [
      `Name: ${name}`,
      `Company: ${companyName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Requirements: ${requirements}`,
      '',
      'Additional Details:',
      message,
    ].join('\n')

    try {
      await submitWeb3Form({
        name,
        email,
        subject: `[Quotation Request] ${name}`,
        message: body,
        data: { company: companyName, phone, requirements, form_type: 'quotation' },
      })
      setPendingQuote(null)
      setSubmitted(true)
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : 'Failed to submit. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleCancelQuote() {
    setPendingQuote(null)
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
        {submissionError && <p className="form-note form-note--error">{submissionError}</p>}
      </form>
      <ConfirmModal
        isOpen={Boolean(pendingQuote)}
        title="Confirm send quotation request"
        message={`You are about to send this quotation request to ${company.email} using Web3Forms. Continue?`}
        onConfirm={handleConfirmQuote}
        onCancel={handleCancelQuote}
        confirmText="Send Request"
        cancelText="Cancel"
        isSubmitting={isSubmitting}
      />
    </div>
  )
}
