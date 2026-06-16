import { stats } from '../site'

export function Stats() {
  return (
    <section className="stats" aria-label="By the numbers">
      <div className="container stats__inner">
        {stats.map((stat) => (
          <div className="stats__item reveal" key={stat.label}>
            <span className="stats__value">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
