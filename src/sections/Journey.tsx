import { Button, Eyebrow, IconBadge, SplitTitle } from '../components/ui'

const steps = [
  {
    title: 'Book a consultation',
    text: 'Choose a time online or by phone. Tell us briefly what you’d like to discuss.',
  },
  { title: 'Discuss your skin', text: 'We review your concerns, history, and goals, and assess your skin.' },
  { title: 'Receive your plan', text: 'A personalized plan with options, timing, and what to expect.' },
  { title: 'Begin treatment', text: 'Start when you’re ready, with preparation and aftercare guidance.' },
  { title: 'Follow up as needed', text: 'Review progress and adjust your plan at follow-up visits.' },
]

export function Journey() {
  return (
    <section className="section-pad flex flex-col gap-8 bg-stone lg:gap-14">
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-5 text-center">
        <Eyebrow className="self-center">Your visit</Eyebrow>
        <SplitTitle
          className="t-h1-mixed text-ink"
          accentClassName="t-accent-lg text-muted"
          lead="Your journey, "
          accent="step by step."
        />
        <p className="t-lead max-w-[620px] text-body">
          A clear, unhurried process — so you always know what happens next.
        </p>
      </div>

      <ol className="relative grid gap-6 md:grid-cols-3 lg:h-[200px] lg:grid-cols-5 lg:gap-5">
        {/* Connector behind the step numbers (desktop only, as in the design). */}
        <span
          aria-hidden="true"
          className="absolute top-[31px] right-[calc((100%-80px)/5-62px)] left-8 hidden h-0.5 bg-muted lg:block"
        />
        {steps.map((s, i) => (
          <li key={s.title} className="relative flex flex-col gap-3.5">
            <span className="t-h2 flex size-16 items-center justify-center rounded-lg border border-muted bg-cream text-muted">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="t-h3 text-ink">{s.title}</h3>
            <p className="t-small text-body">{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-3.5 rounded border border-line bg-cream px-[18px] py-5 md:flex-row md:items-center md:gap-5 md:pr-5 md:pl-7">
        <IconBadge icon="calendar" size={48} iconSize={22} className="bg-blush" color="#7a3036" />
        <div className="flex flex-1 flex-col gap-0.5">
          <h3 className="t-h3 text-ink">Not sure where to start?</h3>
          <p className="t-small text-body">
            A consultation is the best first step — we’ll assess your skin and explain your options.
          </p>
        </div>
        <Button href="#booking" icon="arrowUpRight">
          Book a Consultation
        </Button>
      </div>
    </section>
  )
}
