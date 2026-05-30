import LazyImage from './LazyImage'
import './PageHero.css'

export default function PageHero({ image, label, title, description }) {
  return (
    <section className="page-hero">
      {image && <LazyImage src={image} alt="" className="page-hero__bg" priority />}
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="container page-hero__content page-hero-sequential">
        {label && <span className="section__label">{label}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  )
}
