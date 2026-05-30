import { useState, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company, navLinks, serviceDropdown } from '../data/siteData'
import { brandLogoImg } from '../data/images/core'
import LazyImage from './LazyImage'
import { PhoneIcon, MailIcon } from './Icons'
import './Header.css'

export default function Header({ onRequestCallback }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [dropdownThumbs, setDropdownThumbs] = useState(null)

  const loadServiceThumbs = useCallback(() => {
    if (dropdownThumbs) return
    import('../data/images/services').then((mod) => {
      setDropdownThumbs({
        '/services#commercial-cleaning': mod.serviceImages['commercial-cleaning'],
        '/services#pest-control': mod.serviceImages['pest-control'],
        '/services#grounds-maintenance': mod.serviceImages['grounds-maintenance'],
      })
    })
  }, [dropdownThumbs])

  function handleServicesEnter() {
    setServicesOpen(true)
    loadServiceThumbs()
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="header__logo" to="/" onClick={() => setMenuOpen(false)}>
          <LazyImage src={brandLogoImg} alt="Frontyard Services" className="header__logo-img" priority />
          <span className="header__logo-text">
            <strong>{company.shortName}</strong>
            <small>{company.tagline}</small>
          </span>
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__menu">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="header__item"
                onMouseEnter={() => link.children && handleServicesEnter()}
                onMouseLeave={() => link.children && setServicesOpen(false)}
              >
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `header__link ${isActive ? 'header__link--active' : ''}`
                  }
                  onClick={() => {
                    setMenuOpen(false)
                    if (link.children) loadServiceThumbs()
                  }}
                >
                  {link.label}
                </NavLink>
                {link.children && (
                  <div className={`header__dropdown ${servicesOpen ? 'header__dropdown--open' : ''}`}>
                    <ul>
                      {serviceDropdown.map((item) => (
                        <li key={item.href}>
                          {dropdownThumbs?.[item.href] ? (
                            <LazyImage src={dropdownThumbs[item.href]} alt="" />
                          ) : (
                            <span className="header__dropdown-thumb-placeholder" aria-hidden="true" />
                          )}
                          <Link to={item.href} onClick={() => setMenuOpen(false)}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="header__dropdown-help">
                      <p>Need help?</p>
                      {company.phones.map((phone) => (
                        <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="contact-link header__dropdown-contact">
                          <PhoneIcon />
                          <span>{phone}</span>
                        </a>
                      ))}
                      <a href={`mailto:${company.email}`} className="contact-link header__dropdown-contact">
                        <MailIcon />
                        <span>{company.email}</span>
                      </a>
                      <a href={company.profilePdf} download>
                        Download profile
                      </a>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="header__actions">
            <a href={`tel:${company.phones[0].replace(/\s/g, '')}`} className="contact-link header__call">
              <PhoneIcon />
              <span>{company.phones[0]}</span>
            </a>
            <a href={company.profilePdf} className="header__profile" download>
              Download Profile
            </a>
            <Link className="btn btn--primary header__quote-btn" to="/contact#quote-form" onClick={() => setMenuOpen(false)}>
              Get a Free Quote
            </Link>
          </div>
        </nav>

        <button
          type="button"
          className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
