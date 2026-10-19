import { useId, useState } from 'react'
import { Icon } from '../components/Icon'
import { Button, Eyebrow, IconBadge, SplitTitle } from '../components/ui'

// Questions and answers as written in the Figma file (closed items keep their answers hidden).
const faqs = [
  {
    q: 'How do I book a consultation?',
    a: 'Book online through the booking page or call the clinic. Choose a consultation, select a time, and share anything you’d like to discuss. [Add your booking link and phone number.]',
  },
  {
    q: 'How is my treatment plan determined?',
    a: 'Your plan is based on a professional assessment of your skin, your medical and skincare history, your goals, and any factors that affect suitability. We explain options before you decide.',
  },
  {
    q: 'What should I expect at my first visit?',
    a: 'We’ll discuss your concerns, review your history, assess your skin, and talk through options and next steps. [Add typical consultation length.] There’s no obligation to start treatment.',
  },
  {
    q: 'How should I prepare, and what about aftercare?',
    a: 'You’ll receive preparation and aftercare instructions specific to your treatment. Follow them closely, and contact the clinic if anything concerns you.',
  },
  {
    q: 'Can I change or cancel my appointment?',
    a: '[Add your rescheduling and cancellation policy, including notice periods and any fees.]',
  },
  {
    q: 'How much do treatments cost, and how can I pay?',
    a: 'Costs depend on the treatment and your plan. [Add consultation fee, price list link, and accepted payment options.] You’ll receive costs before treatment begins.',
  },
  {
    q: 'When should I see a doctor first?',
    a: 'If you notice a changing mole, a new or unusual growth, a persistent rash, or skin that bleeds or doesn’t heal, see a doctor or dermatologist. Aesthetic treatments are not a substitute for medical diagnosis.',
  },
]

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId()
  return (
    <li className={`rounded-lg border border-line transition-colors ${open ? 'bg-cream' : 'bg-sand'}`}>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          onClick={onToggle}
          className="t-h3 flex w-full items-center gap-4 px-[18px] py-[22px] text-left text-ink md:px-[26px]"
        >
          <span className="flex-1">{q}</span>
          <span
            className={`flex size-[34px] shrink-0 items-center justify-center rounded-md border transition-colors ${
              open ? 'border-ink bg-ink' : 'border-line bg-cream'
            }`}
          >
            <Icon name={open ? 'minus' : 'plus'} size={16} color={open ? '#e8e3da' : '#2e1614'} />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="t-body -mt-2.5 px-[18px] pb-[22px] text-body md:pr-[76px] md:pl-[26px]">{a}</p>
        </div>
      </div>
    </li>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad bg-sand">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-16">
        <div className="contents lg:flex lg:w-[420px] lg:shrink-0 lg:flex-col lg:gap-[22px]">
          <div className="flex flex-col gap-[22px]">
            <Eyebrow>FAQ</Eyebrow>
            <SplitTitle
              className="t-h1-mixed text-ink"
              accentClassName="t-accent-lg text-muted lg:block"
              lead="Questions, "
              accent="answered."
            />
            <p className="t-lead text-body">
              Practical answers about booking, your first visit, and care. Something else on your mind? We’re happy to help.
            </p>
          </div>
          {/* On mobile the contact card follows the list, as in the design. */}
          <div className="order-last flex flex-col gap-3.5 rounded-lg bg-stone p-7 lg:order-none">
            <IconBadge icon="message" size={44} iconSize={20} className="bg-cream" color="#7a3036" />
            <h3 className="t-h3 text-ink">Still have questions?</h3>
            <p className="t-small text-body">Speak with our clinic team: [Phone number] · [Email address]</p>
            <Button href="#contact" variant="light" className="w-full md:w-auto md:self-start">
              Contact the clinic
            </Button>
          </div>
        </div>

        <ul className="flex flex-1 flex-col gap-3">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
