import before from '../assets/images/result-before.png'
import after from '../assets/images/result-after.png'
import { Icon } from '../components/Icon'
import { DashedOutline, IconBadge, SectionHeader, SplitTitle } from '../components/ui'

function Testimonial() {
  return (
    <figure className="flex w-[280px] shrink-0 snap-start flex-col gap-5 rounded-lg border border-line bg-cream px-[22px] py-[30px] md:w-auto md:px-[30px]">
      <div className="flex items-center justify-between">
        <Icon name="quote" size={28} color="#b88a84" />
        <span className="t-eyebrow rounded bg-stone px-2.5 py-[5px] text-taupe">Placeholder</span>
      </div>
      <blockquote className="t-body text-ink lg:text-[18px] lg:leading-[27px] lg:tracking-[-0.01em]">
        [Patient experience placeholder — replace with a genuine review, shared with the patient’s written consent.]
      </blockquote>
      <hr className="border-line" />
      <figcaption className="flex items-center gap-3">
        <IconBadge icon="user" size={40} iconSize={18} radius={6} className="bg-stone" color="#8d7f78" />
        <span className="flex flex-col gap-px">
          <span className="t-label text-ink">[Patient initials]</span>
          <span className="t-small text-taupe">[Treatment received]</span>
        </span>
      </figcaption>
    </figure>
  )
}

function ResultPhoto({ src, label }: { src: string; label: string }) {
  return (
    <figure className="flex flex-1 flex-col gap-2.5">
      <div className="relative h-[200px] overflow-hidden rounded-lg bg-stone md:h-[300px]">
        <img src={src} alt={`${label} placeholder photo`} loading="lazy" className="h-full w-full object-cover" />
        <DashedOutline radius={8} dash="6 5" />
      </div>
      <figcaption className="t-label text-ink">{label}</figcaption>
    </figure>
  )
}

export function Results() {
  return (
    <section id="results" className="section-pad flex flex-col gap-7 overflow-hidden bg-blush lg:gap-12">
      <SectionHeader
        eyebrow="Patient stories"
        title={<SplitTitle className="t-h1 text-ink" lead="Stories shared " accent="with consent." />}
        intro="Every story and image here is a placeholder. Publish only genuine experiences and authorized photos, with written consent."
      />

      <div className="rail -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>

      <div className="flex flex-col gap-5 rounded-2xl border border-line bg-cream px-[18px] py-5 md:p-8 lg:flex-row lg:gap-8">
        <div className="flex flex-col gap-3.5 lg:w-[360px] lg:shrink-0">
          <p className="t-eyebrow text-wine">Results gallery</p>
          <h3 className="t-h2 text-ink">Before &amp; after placeholders</h3>
          <p className="t-small text-body">
            Use only authorized, unretouched photos taken under consistent lighting and angles. Show the treatment, number of
            sessions, and time between photos.
          </p>
          <p className="t-small flex items-start gap-2 rounded-md bg-stone px-3.5 py-2.5 text-ink">
            <Icon name="eye" size={16} color="#7a3036" className="mt-0.5" />
            Individual results vary. Images do not guarantee outcomes.
          </p>
          <p className="t-small text-taupe">[Treatment] · [Number of sessions] · [Time between photos]</p>
        </div>
        <div className="flex flex-1 gap-4">
          <ResultPhoto src={before} label="Before" />
          <ResultPhoto src={after} label="After" />
        </div>
      </div>
    </section>
  )
}
