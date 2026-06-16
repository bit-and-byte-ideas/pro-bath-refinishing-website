import { Icon } from '../icons'
import { business, navLinks } from '../site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__logo" aria-label={`${business.name} home`}>
            <img src="/logo.png" alt="" width={48} height={46} />
            <span>
              <strong>Pro Bath</strong> Refinishing
            </span>
          </a>
          <p className="footer__tagline">
            Repairing and refinishing bathtubs, showers, tile, and countertops across {business.serviceArea}{' '}
            for {business.yearsExperience} years.
          </p>
          <a href={business.instagramHref} className="footer__social" target="_blank" rel="noreferrer">
            <Icon name="instagram" />
            {business.instagram}
          </a>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h3 className="footer__heading">Explore</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__contact">
            <li>
              <a href={business.phoneHref}>
                <Icon name="phone" /> {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={business.smsHref}>
                <Icon name="message" /> Text a photo
              </a>
            </li>
            <li>
              <span>
                <Icon name="pin" /> {business.serviceArea}
              </span>
            </li>
            <li>
              <span>
                <Icon name="shield" /> {business.license}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p>{business.license} · {business.serviceArea}</p>
        </div>
      </div>
    </footer>
  )
}
