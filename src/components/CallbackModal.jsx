import { useState } from 'react'
import './CallbackModal.css'

export default function CallbackModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleClose() {
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="modal-overlay modal-overlay--animated" onClick={handleClose} role="dialog" aria-modal="true" aria-labelledby="callback-title">
      <div className="modal modal--animated" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={handleClose} aria-label="Close">
          &times;
        </button>
        {submitted ? (
          <div className="modal__success">
            <h2 id="callback-title">Thank you!</h2>
            <p>We&apos;ll call you back during business hours.</p>
            <button type="button" className="btn btn--primary" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id="callback-title">Request a Call Back</h2>
            <p>Leave your details and we&apos;ll contact you shortly.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="cb-name">Full Name *</label>
                <input id="cb-name" name="name" type="text" required placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="cb-phone">Phone *</label>
                <input id="cb-phone" name="phone" type="tel" required placeholder="+256 700 000 000" />
              </div>
              <button type="submit" className="btn btn--primary">
                Request Call Back
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
