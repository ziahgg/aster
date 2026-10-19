import consultation from '../assets/images/treatment-consultation.jpg'
import acne from '../assets/images/treatment-acne.jpg'
import pigmentation from '../assets/images/treatment-pigmentation.jpg'
import rejuvenation from '../assets/images/treatment-rejuvenation.jpg'
import facials from '../assets/images/treatment-facials.jpg'
import skincare from '../assets/images/treatment-skincare.jpg'
import { Icon } from '../components/Icon'
import { Button, Eyebrow, IconBadge, SplitTitle } from '../components/ui'

const treatments = [
  {
    tag: 'Start here',
    title: 'Skin Consultation',
    text: 'A thorough assessment of your skin, history, and goals, with a clear plan of next steps.',
    image: consultation,
    alt: 'Practitioner examining a patient’s skin during a consultation',
  },
  {
    tag: 'Consultation first',
    title: 'Acne Care',
    text: 'Personalized plans for breakouts and congestion, combining in-clinic care with home routines.',
    image: acne,
    alt: 'Close-up of a facial skin treatment',
  },
  {
    tag: 'Consultation first',
    title: 'Pigmentation Treatments',
    text: 'Approaches for uneven tone and dark spots, selected after assessing your skin type.',
    image: pigmentation,
    alt: 'Patient relaxing during a pigmentation treatment',
  },
  {
    tag: 'Consultation first',
    title: 'Skin Rejuvenation',
    text: 'Treatments that support texture, tone, and radiance, planned around your skin’s needs.',
    image: rejuvenation,
    alt: 'Skin rejuvenation treatment in progress',
  },
  {
    tag: 'In-clinic',
    title: 'Clinical Facials',
    text: 'Professional facials tailored to your skin on the day, from deep cleansing to hydration.',
    image: facials,
    alt: 'Clinical facial being applied in a treatment room',
  },
  {
    tag: 'Guidance included',
    title: 'Medical-Grade Skincare',
    text: 'Product recommendations matched to your skin and treatment plan, with clear guidance on use.',
    image: skincare,
    alt: 'Medical-grade skincare products',
  },
]

function TreatmentCard({ tag, title, text, image, alt }: (typeof treatments)[number]) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line bg-cream">
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="t-eyebrow absolute top-4 left-4 rounded bg-sand px-3 py-1.5 text-ink">{tag}</span>
      </div>
      <div className="flex flex-1 flex-col gap-2.5 px-6 pt-6 pb-[26px]">
        <h3 className="t-h2 text-ink">{title}</h3>
        <p className="t-small text-body">{text}</p>
        <a href="#booking" className="t-label mt-auto inline-flex items-center gap-1.5 self-start pt-2 text-wine hover:underline">
          Learn more
          <Icon name="arrowRight" size={15} />
        </a>
      </div>
    </article>
  )
}

export function Treatments() {
  return (
    <section id="treatments" className="bg-ink px-2 pt-12 pb-2 md:px-6 md:pt-24 md:pb-6">
      <div
        className="flex flex-col gap-8 rounded-2xl px-4 pt-12 pb-4 md:gap-14 md:px-10 md:pt-24 md:pb-10 lg:px-14 lg:pb-14"
        style={{
          backgroundImage:
            'linear-gradient(128deg, #2e1714 7.3%, #42241f 42.8%, #b8a187 58.5%, #543029 65.6%, #2e1714 78.4%)',
        }}
      >
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center">
          <Eyebrow onDark className="self-center">
            Our treatments
          </Eyebrow>
          <SplitTitle
            className="t-h1 text-sand"
            lead="Treatments "
            accent="Tailored To"
            tail=" Your Skin"
          />
          <p className="t-body max-w-[520px] text-muted">
            Every treatment is recommended only after we understand your skin, history, and goals.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {treatments.map((t) => (
            <TreatmentCard key={t.title} {...t} />
          ))}
        </div>

        <div className="flex flex-col gap-3.5 rounded-lg border border-line bg-cream p-[18px] md:flex-row md:items-center md:gap-5 md:py-5 md:pr-5 md:pl-7">
          <IconBadge icon="scanLine" size={48} iconSize={22} className="bg-sage" color="#6f7d66" />
          <div className="flex flex-1 flex-col gap-0.5">
            <h3 className="t-h3 text-ink">Laser &amp; aesthetic treatments</h3>
            <p className="t-small text-body">
              [Where offered — list your clinic’s actual services and devices.] Suitability is always confirmed during a
              consultation.
            </p>
          </div>
          <Button href="#booking" variant="light">
            Ask about suitability
          </Button>
        </div>
      </div>
    </section>
  )
}
