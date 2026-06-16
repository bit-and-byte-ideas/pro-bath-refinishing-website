import { useEffect, useState } from 'react'
import { Icon } from '../icons'
import { business, navLinks } from '../site'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label={`${business.name} home`}>
          <img src="/logo.png" alt="" width={44} height={42} className="nav__logo" />
          <span className="nav__brand-text">
            <strong>Pro Bath</strong>
            <span>Refinishing</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href={business.phoneHref} className="nav__phone">
            <Icon name="phone" />
            <span>{business.phoneDisplay}</span>
          </a>
          <a href="#contact" className="btn btn--accent nav__cta">
            Free Quote
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`nav__mobile ${open ? 'is-open' : ''}`}
        hidden={!open}
      >
        <nav className="nav__mobile-links" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav__mobile-actions">
          <a href={business.smsHref} className="btn btn--ghost btn--lg" onClick={() => setOpen(false)}>
            <Icon name="message" /> Text a Photo
          </a>
          <a href={business.phoneHref} className="btn btn--accent btn--lg" onClick={() => setOpen(false)}>
            <Icon name="phone" /> {business.phoneDisplay}
          </a>
        </div>
      </div>
      {open ? <button className="nav__scrim" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} /> : null}
    </header>
  )
}
