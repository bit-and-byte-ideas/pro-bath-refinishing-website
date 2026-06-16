import { Icon } from '../icons'
import { business } from '../site'

export function CtaBanner() {
  return (
    <section className="cta-banner" aria-label="Get a quote">
      <div className="container cta-banner__inner reveal">
        <div className="cta-banner__text">
          <h2 className="cta-banner__title">Text us a photo for a fast, free quote</h2>
          <p className="cta-banner__sub">
            The quickest way to get started — snap a picture of your tub, shower, or counter and
            we’ll reply with pricing, usually the same day.
          </p>
        </div>
        <div className="cta-banner__actions">
          <a href={business.smsHref} className="btn btn--light btn--lg">
            <Icon name="message" />
            Text {business.phoneDisplay}
          </a>
          <a href={business.phoneHref} className="btn btn--accent btn--lg">
            <Icon name="phone" />
            Call now
          </a>
        </div>
      </div>
    </section>
  )
}
