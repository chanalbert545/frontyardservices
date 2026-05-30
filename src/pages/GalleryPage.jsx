import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import AnimateIn from '../components/AnimateIn'
import Stagger from '../components/Stagger'
import { galleryPageHero, galleryImages } from '../data/images/gallery'
import LazyImage from '../components/LazyImage'
import { scrollElementToCenter } from '../utils/scroll'

export default function GalleryPage() {
  const [modal, setModal] = useState(null)

  function handleItemClick(e, item) {
    scrollElementToCenter(e.currentTarget)
    setModal(item)
  }

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
                onClick={(e) => handleItemClick(e, item)}
                onKeyDown={(e) => e.key === 'Enter' && handleItemClick(e, item)}
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

      {modal && (
        <div className="image-modal-overlay" onClick={() => setModal(null)} role="dialog" aria-modal="true">
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="image-modal-close" onClick={() => setModal(null)} aria-label="Close">
              &times;
            </button>
            <LazyImage src={modal.src} alt={modal.caption} className="image-modal-img" priority />
            <p className="image-modal-caption">{modal.caption}</p>
          </div>
        </div>
      )}
    </>
  )
}
