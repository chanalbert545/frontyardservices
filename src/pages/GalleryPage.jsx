import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import AnimateIn from '../components/AnimateIn'
import Stagger from '../components/Stagger'
import { galleryPageHero, galleryImages } from '../data/images/gallery'
import LazyImage from '../components/LazyImage'

export default function GalleryPage() {
  const [modal, setModal] = useState(null)

  function handleItemClick(item) {
    setModal(item)
  }

  function closeModal() {
    setModal(null)
  }

  useEffect(() => {
    if (!modal) return

    const prevent = (e) => {
      e.preventDefault()
    }

    window.addEventListener('wheel', prevent, { passive: false })
    window.addEventListener('touchmove', prevent, { passive: false })

    return () => {
      window.removeEventListener('wheel', prevent)
      window.removeEventListener('touchmove', prevent)
    }
  }, [modal])

  return (
    <>
      <PageHero
        image={galleryPageHero}
        label="Our Work"
        title="Gallery"
        description="A glimpse of the professional cleaning and facility care we deliver across Uganda."
      />

      <AnimateIn as="section" className="section section--alt">
        <div className="container">
          <Stagger className="gallery-grid" step={55}>
            {galleryImages.map((item) => (
              <figure
                key={item.caption}
                className="gallery-item scroll-target"
                onClick={() => handleItemClick(item)}
                onKeyDown={(e) => e.key === 'Enter' && handleItemClick(item)}
                role="button"
                tabIndex={0}
              >
                <LazyImage src={item.src} alt={item.caption} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </Stagger>
          <AnimateIn
            className="section-cta"
            delay={100}
            style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--color-border)' }}
          >
            <p>Ready to see what we can do for your facility?</p>
            <Link className="btn btn--primary" to="/contact#quote-form">
              Get a Free Quote
            </Link>
          </AnimateIn>
        </div>
      </AnimateIn>

      {modal &&
        createPortal(
          <div className="image-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="image-modal-close" onClick={closeModal} aria-label="Close">
                &times;
              </button>
              {modal.video ? (
                <video className="image-modal-img" src={modal.video} controls autoPlay />
              ) : (
                <LazyImage src={modal.src} alt={modal.caption} className="image-modal-img" priority />
              )}
              <p className="image-modal-caption">{modal.caption}</p>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
