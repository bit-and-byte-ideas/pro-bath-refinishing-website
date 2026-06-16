import { Icon } from '../icons'
import { business } from '../site'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--1" />
        <span className="hero__blob hero__blob--2" />
        <span className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <Icon name="pin" />
            Serving {business.serviceArea}
          </span>

          <h1 className="hero__title">
            Better than new,
            <br />
            <span className="hero__title-accent">in a single day.</span>
          </h1>

          <p className="hero__lead">{business.tagline}</p>

          <div className="hero__cta">
            <a href="#contact" className="btn btn--accent btn--lg">
              Get a Free Quote
              <Icon name="arrow-right" />
            </a>
            <a href={business.smsHref} className="btn btn--ghost btn--lg">
              <Icon name="message" />
              Text us a photo
            </a>
          </div>

          <ul className="hero__trust">
            <li>
              <Icon name="badge" /> {business.yearsExperience} years experience
            </li>
            <li>
              <Icon name="shield" /> {business.license}
            </li>
            <li>
              <Icon name="clock" /> Ready in 24 hours
            </li>
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__photo">
            <img
              src="/gallery/project-06.jpg"
              alt="A bathtub freshly refinished by Pro Bath Refinishing, restored to a bright glossy white"
              width={900}
              height={900}
              fetchPriority="high"
            />
          </div>

          <div className="hero__card hero__card--stat">
            <span className="hero__card-value">24h</span>
            <span className="hero__card-label">Ready to use</span>
          </div>

          <div className="hero__card hero__card--rating">
            <div className="hero__stars" aria-hidden="true">
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
            </div>
            <span className="hero__card-label">Trusted by San Diego homeowners</span>
          </div>
        </div>
      </div>
    </section>
  )
}
