import { useState } from 'react'
import type { FormEvent } from 'react'
import { Icon } from '../icons'
import { business } from '../site'

interface Errors {
  name?: string
  phone?: string
  message?: string
}

const initialValues = { name: '', phone: '', message: '' }

export function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (v: typeof values): Errors => {
    const next: Errors = {}
    if (!v.name.trim()) next.name = 'Please tell us your name.'
    if (!v.phone.trim()) next.phone = 'A phone number lets us text you back.'
    else if (v.phone.replace(/\D/g, '').length < 10) next.phone = 'Please enter a 10-digit phone number.'
    if (!v.message.trim()) next.message = 'Let us know what you’d like refinished.'
    return next
  }

  const update = (field: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = document.querySelector<HTMLElement>('[aria-invalid="true"]')
      first?.focus()
      return
    }
    // No backend: open the user's SMS app pre-filled so we still get the lead.
    const body = `Hi Pro Bath Refinishing, I'm ${values.name}. ${values.message} (Call/text me at ${values.phone}.)`
    window.location.href = `${business.smsHref}?&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <section className="section section--alt" id="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="eyebrow">Get in touch</span>
          <h2 className="section-title">Let’s refinish it</h2>
          <p className="section-sub">
            Text or call for the fastest response — picture texts are welcome and help us quote
            accurately. We’ll get right back to you.
          </p>

          <ul className="contact__list">
            <li>
              <a href={business.phoneHref} className="contact__row">
                <span className="contact__row-icon"><Icon name="phone" /></span>
                <span>
                  <strong>Call or text</strong>
                  {business.phoneDisplay}
                </span>
              </a>
            </li>
            <li>
              <a href={business.instagramHref} className="contact__row" target="_blank" rel="noreferrer">
                <span className="contact__row-icon"><Icon name="instagram" /></span>
                <span>
                  <strong>Instagram</strong>
                  {business.instagram}
                </span>
              </a>
            </li>
            <li>
              <div className="contact__row">
                <span className="contact__row-icon"><Icon name="pin" /></span>
                <span>
                  <strong>Service area</strong>
                  {business.serviceArea}
                </span>
              </div>
            </li>
            <li>
              <div className="contact__row">
                <span className="contact__row-icon"><Icon name="shield" /></span>
                <span>
                  <strong>Licensed</strong>
                  {business.license}
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success" role="status">
              <span className="contact__success-icon"><Icon name="check" /></span>
              <h3>Almost there!</h3>
              <p>
                Your text message is ready to send. If it didn’t open automatically, just call or
                text us at <a href={business.phoneHref}>{business.phoneDisplay}</a>.
              </p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={onSubmit} noValidate>
              <h3 className="contact__form-title">Request a free quote</h3>

              <div className="field">
                <label htmlFor="name">
                  Name <span className="field__req" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={update('name')}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? 'name-err' : undefined}
                />
                {errors.name ? <p className="field__error" id="name-err" role="alert">{errors.name}</p> : null}
              </div>

              <div className="field">
                <label htmlFor="phone">
                  Phone <span className="field__req" aria-hidden="true">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(619) 555-0123"
                  value={values.phone}
                  onChange={update('phone')}
                  aria-invalid={errors.phone ? true : undefined}
                  aria-describedby={errors.phone ? 'phone-err' : undefined}
                />
                {errors.phone ? <p className="field__error" id="phone-err" role="alert">{errors.phone}</p> : null}
              </div>

              <div className="field">
                <label htmlFor="message">
                  What needs refinishing? <span className="field__req" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="e.g. a cast-iron tub with a few chips, and a tile kitchen counter"
                  value={values.message}
                  onChange={update('message')}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? 'message-err' : 'message-help'}
                />
                {errors.message ? (
                  <p className="field__error" id="message-err" role="alert">{errors.message}</p>
                ) : (
                  <p className="field__help" id="message-help">Add details and we’ll text you a quote.</p>
                )}
              </div>

              <button type="submit" className="btn btn--accent btn--lg contact__submit">
                Send & text us
                <Icon name="arrow-right" />
              </button>
              <p className="contact__form-foot">Prefer to talk? Call <a href={business.phoneHref}>{business.phoneDisplay}</a>.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
