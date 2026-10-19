import { useState } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { Button, Eyebrow, SplitTitle } from '../components/ui'

const services = [
  'Skin Consultation',
  'Acne Care',
  'Pigmentation Treatments',
  'Skin Rejuvenation',
  'Clinical Facials',
  'Medical-Grade Skincare',
]
const days = Array.from({ length: 21 }, (_, i) => i + 1)
// Greyed-out dates in the design (illustrative closed days).
const unavailable = new Set([6, 7, 13, 14, 20, 21])
const times = ['[Time]', '[Time]', '[Time]', '[Time]']

const contactDetails: { icon: IconName; text: string }[] = [
  { icon: 'mapPin', text: '[Clinic address]' },
  { icon: 'clock', text: '[Opening hours]' },
  { icon: 'mail', text: '[Email address]' },
]

/** Booking preview: interactive, but not connected to a booking system. */
function BookingWidget() {
  const [day, setDay] = useState(10)
  const [time, setTime] = useState(1)

  return (
    <div
      id="booking"
      className="flex w-full flex-col gap-[18px] rounded-lg bg-cream px-4 py-5 shadow-[0_20px_48px_rgba(43,33,28,0.2)] md:p-7 lg:w-[460px] lg:shrink-0"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="t-h3 text-ink">Request a consultation</h3>
        <span className="t-eyebrow rounded bg-stone px-2.5 py-1 text-taupe">Preview</span>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="t-label text-ink">Service</span>
        <span className="relative block">
          <select className="t-body h-12 w-full cursor-pointer appearance-none rounded-md border border-line bg-transparent pr-10 pl-3.5 text-ink">
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <Icon name="chevronDown" size={16} color="#8d7f78" className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2" />
        </span>
      </label>

      <fieldset className="flex flex-col gap-2.5 rounded-md border border-line p-3.5">
        <legend className="sr-only">Choose a date</legend>
        <div className="flex items-center justify-between">
          <button type="button" aria-label="Previous month" className="-m-0.5 rounded p-0.5 hover:bg-stone">
            <Icon name="chevronLeft" size={16} color="#8d7f78" />
          </button>
          <span className="t-label text-ink">[Month Year]</span>
          <button type="button" aria-label="Next month" className="-m-0.5 rounded p-0.5 hover:bg-stone">
            <Icon name="chevronRight" size={16} color="#8d7f78" />
          </button>
        </div>
        <div className="grid grid-cols-6 gap-1 md:gap-1.5">
          {days.map((d) => {
            const disabled = unavailable.has(d)
            const selected = d === day
            return (
              <button
                key={d}
                type="button"
                disabled={disabled}
                aria-pressed={selected}
                onClick={() => setDay(d)}
                className={`t-small h-8 rounded-lg transition-colors md:h-[34px] ${
                  selected
                    ? 'bg-wine text-cream'
                    : disabled
                      ? 'cursor-not-allowed text-muted'
                      : 'text-ink hover:bg-stone'
                }`}
              >
                {d}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a time">
        {times.map((t, i) => (
          <button
            key={i}
            type="button"
            aria-pressed={time === i}
            onClick={() => setTime(i)}
            className={`t-small rounded border px-3.5 py-2 transition-colors ${
              time === i ? 'border-ink bg-ink text-sand' : 'border-line text-ink hover:bg-stone'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <button type="button" className="t-label rounded bg-wine px-[22px] py-[13px] tracking-[-0.003em] text-cream transition-colors hover:bg-[#692a2f]">
        Request appointment
      </button>
      <p className="t-small text-center text-taupe">Availability shown is illustrative — connect your booking system.</p>
    </div>
  )
}

export function Booking() {
  return (
    <section id="contact" className="bg-sand px-2 pb-12 md:px-10 lg:px-20 lg:pb-28">
      <div className="flex flex-col gap-7 rounded-2xl bg-ink px-4 pt-8 pb-4 md:p-10 lg:flex-row lg:items-center lg:gap-14 lg:p-14">
        <div className="flex flex-1 flex-col gap-6">
          <Eyebrow onDark>Book your visit</Eyebrow>
          <SplitTitle
            className="t-h1 text-sand lg:leading-[62px]"
            accentClassName="t-accent-lg text-muted"
            lead="Ready to care for your skin "
            accent="with confidence?"
          />
          <p className="t-lead text-muted">
            Start with a consultation. We’ll listen, assess your skin, and recommend a plan you understand — with no
            obligation to proceed.
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-3">
            <Button href="#booking">Book Your Consultation</Button>
            <Button href="#contact" variant="ghost">
              Call [Phone number]
            </Button>
          </div>
          <ul className="flex flex-col gap-2.5 pt-3">
            {contactDetails.map((c) => (
              <li key={c.text} className="t-small flex items-center gap-2.5 text-muted">
                <Icon name={c.icon} size={16} color="#b88a84" />
                {c.text}
              </li>
            ))}
          </ul>
        </div>
        <BookingWidget />
      </div>
    </section>
  )
}
