import { useCallback, useEffect, useState } from 'react'
import { Icon } from '../icons'
import { gallery } from '../site'

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const isOpen = active !== null

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (dir: number) =>
      setActive((cur) => {
        if (cur === null) return cur
        return (cur + dir + gallery.length) % gallery.length
      }),
    [],
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close, step])

  return (
    <section className="section section--alt" id="gallery">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Our work</span>
          <h2 className="section-title">Real San Diego projects</h2>
          <p className="section-sub">
            Tubs, showers, counters, and tile we’ve brought back to life. Tap any photo to take a
            closer look.
          </p>
        </div>

        <div className="gallery__grid">
          {gallery.map((item, i) => (
            <button
              type="button"
              key={item.src}
              className={`gallery__item ${item.span ? `gallery__item--${item.span}` : ''}`}
              onClick={() => setActive(i)}
              aria-label={`View larger: ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery__zoom" aria-hidden="true">
                <Icon name="sparkles" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {isOpen ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project photo viewer">
          <button className="lightbox__scrim" aria-label="Close" onClick={close} />
          <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous photo" onClick={() => step(-1)}>
            <Icon name="chevron-left" />
          </button>
          <figure className="lightbox__figure">
            <img src={gallery[active].src} alt={gallery[active].alt} />
            <figcaption className="lightbox__caption">{gallery[active].alt}</figcaption>
          </figure>
          <button className="lightbox__nav lightbox__nav--next" aria-label="Next photo" onClick={() => step(1)}>
            <Icon name="chevron-right" />
          </button>
          <button className="lightbox__close" aria-label="Close viewer" onClick={close}>
            <Icon name="close" />
          </button>
        </div>
      ) : null}
    </section>
  )
}
