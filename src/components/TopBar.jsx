import { company } from '../data/siteData'
import { MailIcon } from './Icons'
import './TopBar.css'

export default function TopBar({ onRequestCallback }) {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__left">
          <span className="topbar__motto">{company.motto}</span>
          <span className="topbar__since">Trusted since {company.since}</span>
        </div>
        <div className="topbar__right">
          <a href={`mailto:${company.email}`} className="contact-link topbar__email">
            <MailIcon />
            <span>{company.email}</span>
          </a>
          <button type="button" className="topbar__callback" onClick={onRequestCallback}>
            Request a Call Back
          </button>
        </div>
      </div>
    </div>
  )
}
