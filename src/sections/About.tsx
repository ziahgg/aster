import type { IconName } from '../components/Icon'
import { Eyebrow, IconBadge, SplitTitle } from '../components/ui'

const stats = [
  { value: '[00+]', label: 'Years caring for skin' },
  { value: '[0,000+]', label: 'Consultations completed' },
  { value: '[00]', label: 'Qualified practitioners' },
]

const reasons: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'clipboardCheck',
    title: 'Personalized treatment planning',
    text: 'Your plan reflects your skin, history, lifestyle, and goals — not a fixed package.',
  },
  {
    icon: 'users',
    title: 'Professional consultation',
    text: 'Every new patient begins with an assessment by a qualified team member.',
  },
  {
    icon: 'heart',
    title: 'Patient-centered care',
    text: 'Your questions, comfort, and preferences guide each decision.',
  },
  {
    icon: 'message',
    title: 'Clear explanations',
    text: 'We explain what each treatment involves, what to expect, and alternatives.',
  },
  {
    icon: 'leaf',
    title: 'Aftercare guidance',
    text: 'Practical instructions and follow-up support between appointments.',
  },
  {
    icon: 'home',
    title: 'A calm, comfortable space',
    text: 'Private treatment rooms and an unhurried, welcoming environment.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="flex flex-col gap-10 bg-ink px-4 py-[72px] md:px-10 md:py-24 lg:gap-20 lg:px-20 lg:py-[120px]"
    >
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-6 text-center">
        <Eyebrow onDark className="self-center">
          About us
        </Eyebrow>
        <SplitTitle
          className="t-h1 text-sand"
          lead="Aster helps you understand your skin, "
          accent="choose the right care, and feel confident in every step of your treatment."
        />
      </div>

      <dl className="grid md:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center gap-2 py-5 text-center md:px-6 md:py-2 ${
              i > 0 ? 'border-t border-sand md:border-t-0 md:border-l' : ''
            }`}
          >
            <dt className="t-small order-2 text-muted">{s.label}</dt>
            <dd className="t-stat order-1 text-sand">{s.value}</dd>
            <dd className="t-eyebrow order-3 text-rose">Add verified figure</dd>
          </div>
        ))}
      </dl>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <li
            key={r.title}
            className={`flex flex-col gap-3.5 border-b border-sand py-6 lg:py-9 lg:pr-8 ${
              i < 3 ? 'lg:border-t' : ''
            } ${i % 3 !== 0 ? 'lg:border-l lg:pl-8' : ''} ${i % 2 === 1 ? 'md:max-lg:border-l md:max-lg:pl-8' : 'md:max-lg:pr-8'}`}
          >
            <IconBadge
              icon={r.icon}
              size={48}
              iconSize={22}
              className="border border-sand bg-sand"
              color="#b88a84"
            />
            <h3 className="t-h3 text-sand">{r.title}</h3>
            <p className="t-small text-muted">{r.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
