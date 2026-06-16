import { Icon } from '../icons'
import { processSteps } from '../site'

export function Process() {
  return (
    <section className="section section--navy" id="process">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">A simple path to a like-new finish</h2>
          <p className="section-sub">
            No mess, no week-long remodel. Here’s how a typical project goes from first text to
            first use.
          </p>
        </div>

        <ol className="process">
          {processSteps.map((step) => (
            <li className="process__step reveal" key={step.num}>
              <div className="process__top">
                <span className="process__icon">
                  <Icon name={step.icon} />
                </span>
                <span className="process__num">{step.num}</span>
              </div>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__desc">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
