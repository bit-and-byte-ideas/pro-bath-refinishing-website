import { Icon } from '../icons'
import { finishes } from '../site'

export function Finishes() {
  return (
    <section className="section" id="finishes">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Color & finish options</span>
          <h2 className="section-title">Pick a look you’ll love</h2>
          <p className="section-sub">
            Choose from classic glossy white to rich imitation-stone coatings. These are real
            finishes from recent San Diego projects — and we can color-match to your space.
          </p>
        </div>

        <div className="finishes__grid">
          {finishes.map((finish) => (
            <figure className="finish-card reveal" key={finish.name}>
              <div className="finish-card__img">
                <img src={finish.image} alt={`${finish.name} finish sample`} loading="lazy" />
              </div>
              <figcaption className="finish-card__caption">
                <span
                  className="finish-card__swatch"
                  style={{ background: finish.swatch }}
                  aria-hidden="true"
                />
                {finish.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="finishes__note">
          <Icon name="sparkles" />
          Dozens more colors available — ask us for the full sample deck.
        </p>
      </div>
    </section>
  )
}
