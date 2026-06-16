import { Icon } from '../icons'
import { benefits, business } from '../site'

export function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="container why__inner">
        <div className="why__media">
          <img
            src="/gallery/project-09.jpg"
            alt="A living space with a fireplace surround and bench refinished in light stone coating"
            loading="lazy"
            className="why__photo"
          />
          <div className="why__badge">
            <Icon name="badge" />
            <div>
              <strong>{business.yearsExperience} years</strong>
              <span>refinishing San Diego homes</span>
            </div>
          </div>
        </div>

        <div className="why__content">
          <span className="eyebrow">Why refinish</span>
          <h2 className="section-title">Why replace it when you can renew it?</h2>
          <p className="section-sub">
            Replacing a tub or countertop means demolition, dumpsters, and days without a working
            bathroom or kitchen. Refinishing gives you the same fresh look for a fraction of the
            cost — and you’re back in business the next day.
          </p>

          <ul className="why__list">
            {benefits.map((benefit) => (
              <li className="why__item reveal" key={benefit.title}>
                <span className="why__icon">
                  <Icon name={benefit.icon} />
                </span>
                <div>
                  <h3 className="why__item-title">{benefit.title}</h3>
                  <p className="why__item-desc">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
