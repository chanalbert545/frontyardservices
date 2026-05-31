import './CallbackModal.css'

export default function ConfirmModal({
  isOpen,
  title,
  message,
  onCancel,
  onConfirm,
  confirmText = 'Continue',
  cancelText = 'Cancel',
  isSubmitting = false,
}) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay modal-overlay--animated" onClick={onCancel} role="dialog" aria-modal="true" aria-labelledby="confirm-title">
      <div className="modal modal--animated" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={onCancel} aria-label="Close">
          &times;
        </button>
        <h2 id="confirm-title">{title}</h2>
        <p>{message}</p>
        <button type="button" className="btn btn--primary" onClick={onConfirm} disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : confirmText}
        </button>
        <button type="button" className="btn btn--outline-dark" onClick={onCancel} style={{ marginTop: 12 }}>
          {cancelText}
        </button>
      </div>
    </div>
  )
}
