import heroPortrait from '../assets/images/hero-portrait.png'
import { Button, Eyebrow, SplitTitle } from '../components/ui'

// Decorative circuit lines behind the hero (1408 × 900 artboard in Figma).
const lines: { x: number; y: number; d: string }[] = [
  { x: 0, y: 180, d: 'M0 0.6H150V340.6H0' },
  { x: 0, y: 300, d: 'M0 0.6H70V460.6' },
  { x: 150, y: 360, d: 'M0 0.6H180V110.6' },
  { x: 1250, y: 160, d: 'M158.6 0.6H0.6V360.6H158.6' },
  { x: 1330, y: 300, d: 'M78.6 0.6H0.6V460.6' },
  { x: 1080, y: 360, d: 'M170.6 0.6H0.6V90.6' },
  { x: 150, y: 520, d: 'M0 0.6H80V120.6' },
  { x: 1170, y: 520, d: 'M80.6 0.6H0.6V120.6' },
]
const nodes = [
  [56, 190, 28, 20],
  [316, 350, 28, 20],
  [136, 440, 30, 24],
  [1236, 190, 28, 20],
  [1066, 350, 40, 20],
  [1316, 440, 28, 20],
  [216, 600, 36, 18],
  [1156, 600, 36, 18],
]

function LineDecoration() {
  return (
    <svg
      width="1408"
      height="900"
      viewBox="0 0 1408 900"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute top-0 left-0 max-w-none xl:left-1/2 xl:-translate-x-1/2"
    >
      {lines.map((l, i) => (
        <path key={i} d={l.d} transform={`translate(${l.x} ${l.y})`} stroke="#cfc5b9" strokeWidth="1.2" />
      ))}
      {nodes.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill="#e8e3da" stroke="#cfc5b9" strokeWidth="1.2" />
      ))}
    </svg>
  )
}

function PreviewPill() {
  return <span className="t-eyebrow rounded bg-wine px-2 py-1 text-cream">Preview</span>
}

function NextConsultationCard() {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-ink p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <p className="t-label text-cream">Next consultation</p>
          <p className="t-small text-muted">[Date — connect booking]</p>
        </div>
        <PreviewPill />
      </div>
      <p className="t-h2 text-cream">[Time]</p>
      <div className="flex items-center gap-2">
        <span className="t-eyebrow rounded bg-wine px-2 py-1 text-cream">[Duration]</span>
        <span className="t-small text-muted">Skin consultation</span>
      </div>
    </div>
  )
}

/** Progress ring: Figma arc from −90° sweeping 252° (step 2 of 5 ≈ 70%), inner radius 75%. */
function PlanRing() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true" className="shrink-0">
      <path
        d="M26 0 A26 26 0 1 1 1.27 34.03 L7.46 32.02 A19.5 19.5 0 1 0 26 6.5 Z"
        fill="#f5f2ec"
      />
    </svg>
  )
}

function TreatmentPlanCard() {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-ink p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <p className="t-label text-cream">Your treatment plan</p>
          <p className="t-small text-muted">Example · illustrative</p>
        </div>
        <PreviewPill />
      </div>
      <div className="flex items-center gap-3.5">
        <PlanRing />
        <div className="flex flex-col gap-0.5">
          <p className="t-h3 text-cream">Step 2 of 5</p>
          <p className="t-small text-muted">Plan review</p>
        </div>
      </div>
    </div>
  )
}

function AboutSnippet() {
  return (
    <div className="flex flex-col gap-3">
      <p className="t-small text-taupe">✳ /about</p>
      <SplitTitle
        as="h2"
        className="t-h2"
        lead="Aster helps you understand your skin, choose suitable treatments, "
        accent="and care for it with confidence — guided by qualified professionals."
      />
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-sand px-4 pt-8 md:px-6 lg:pt-12">
      <LineDecoration />

      <div className="relative mx-auto flex max-w-[860px] flex-col items-center text-center">
        <Eyebrow className="self-center">Consultation-first skin clinic</Eyebrow>
        <SplitTitle
          as="h1"
          className="t-display mt-5"
          lead="Personalized "
          accent="Skin Care,"
          tail=" Clearly Explained"
        />
        <p className="t-body mt-[18px] max-w-[420px] text-taupe">
          Professional consultations and treatment plans built around your skin, your history, and your goals.
        </p>
        <div className="mt-7 flex w-full flex-col gap-2 md:w-auto md:flex-row md:items-center">
          <Button href="#booking">Book a Consultation</Button>
          <Button href="#treatments" variant="light">
            Explore Treatments
          </Button>
        </div>
      </div>

      {/* Desktop composition (≥1280px): portrait centred, copy left, cards overlapping right. */}
      <div className="relative mx-auto mt-0 hidden h-[520px] max-w-[1360px] xl:block">
        <div className="absolute top-0 left-1/2 h-[520px] w-[500px] -translate-x-1/2 overflow-hidden rounded-t-2xl">
          <img
            src={heroPortrait}
            alt="Woman with closed eyes and a fine line pattern drawn across her cheek"
            width={385}
            height={683}
            className="absolute top-[-39px] left-1/2 h-[683px] w-[385px] max-w-none -translate-x-1/2"
          />
        </div>
        <div className="absolute bottom-[38px] left-0 w-[380px] text-left">
          <AboutSnippet />
        </div>
        <div className="absolute right-[320px] bottom-3 w-[300px]">
          <NextConsultationCard />
        </div>
        <div className="absolute right-0 bottom-6 w-[300px]">
          <TreatmentPlanCard />
        </div>
      </div>

      {/* Stacked composition for mobile and tablet. */}
      <div className="relative mx-auto flex max-w-[960px] flex-col gap-3 pt-7 pb-6 xl:hidden">
        <div className="relative mx-auto h-[300px] w-full max-w-[500px] overflow-hidden rounded-xl md:h-[420px] md:rounded-t-2xl md:rounded-b-none">
          <img
            src={heroPortrait}
            alt="Woman with closed eyes and a fine line pattern drawn across her cheek"
            width={385}
            height={683}
            className="absolute top-[-39px] left-1/2 h-[418px] w-[235px] max-w-none -translate-x-1/2 md:h-[683px] md:w-[385px]"
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr] lg:items-end lg:gap-5">
          <div className="order-last pt-3 md:col-span-2 lg:order-first lg:col-span-1 lg:pt-0">
            <AboutSnippet />
          </div>
          <NextConsultationCard />
          <TreatmentPlanCard />
        </div>
      </div>
    </section>
  )
}
