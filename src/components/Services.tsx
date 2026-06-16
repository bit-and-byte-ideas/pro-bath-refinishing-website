import { Icon } from '../icons'
import { services } from '../site'

export function Services() {
  return (
    <section className="section section--alt" id="services">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">What we do</span>
          <h2 className="section-title">One crew for every surface in your home</h2>
          <p className="section-sub">
            From worn-out bathtubs to dated countertops, we refinish and restore the fixtures you
            already have — no demolition required.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.title}>
              <span className="service-card__icon">
                <Icon name={service.icon} />
              </span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <ul className="service-card__points">
                {service.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="service-card service-card--cta reveal">
            <h3 className="service-card__title">Not sure what you need?</h3>
            <p className="service-card__desc">
              Send us a photo and we’ll tell you the best option and a fair price — at no cost.
            </p>
            <a href="#contact" className="btn btn--light">
              Ask an expert
              <Icon name="arrow-right" />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
