import { Link } from 'react-router-dom'
import { company, locations } from '../data/siteData'
import { brandLogoImg } from '../data/images/core'
import LazyImage from './LazyImage'
import AnimateIn from './AnimateIn'
import { PhoneIcon, MailIcon } from './Icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <AnimateIn as="div" className="footer__cta" variant="fade">
        <div className="container footer__cta-inner">
          <div>
            <h2>{company.tagline}</h2>
            <p>Partner with Uganda&apos;s trusted facility cleaning team. Request a free quotation today.</p>
          </div>
          <Link className="btn btn--accent" to="/contact#quote-form">
            Get a Free Quote
          </Link>
        </div>
      </AnimateIn>
      <div className="footer__main">
        <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link className="footer__logo" to="/">
              <LazyImage src={brandLogoImg} alt="" className="footer__logo-img" />
              <strong>{company.shortName}</strong>
            </Link>
            <p className="footer__motto">{company.motto}</p>
            <p>{company.address}</p>
            <div className="footer__contact">
              {company.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="contact-link footer__contact-link">
                  <PhoneIcon />
                  <span>{phone}</span>
                </a>
              ))}
              <a href={`mailto:${company.email}`} className="contact-link footer__contact-link">
                <MailIcon />
                <span>{company.email}</span>
              </a>
            </div>
            <p className="footer__since">Established {company.since}</p>
            <a href={company.profilePdf} className="footer__download" download>
              Download Company Profile (PDF)
            </a>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="/services#commercial-cleaning">Commercial &amp; Industrial Cleaning</Link>
              </li>
              <li>
                <Link to="/services#pest-control">Pest Control &amp; Fumigation</Link>
              </li>
              <li>
                <Link to="/services#grounds-maintenance">Grounds &amp; Facility Maintenance</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Areas We Serve</h4>
            <ul>
              {locations.map((loc) => (
                <li key={loc}>
                  <Link to="/contact">{loc}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/about#values">Our Values</Link>
              </li>
              <li>
                <Link to="/gallery">Our Work</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials &amp; Partners</Link>
              </li>
              <li>
                <Link to="/about#faq">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="footer__links">
            <Link to="/contact">Privacy &amp; enquiries</Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}
