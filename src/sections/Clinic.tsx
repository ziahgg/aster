import lounge from '../assets/images/clinic-lounge.jpg'
import consultationRoom from '../assets/images/clinic-consultation-room.jpg'
import studio from '../assets/images/clinic-skincare-studio.jpg'
import treatmentRoom from '../assets/images/clinic-treatment-room.jpg'
import { Button, IconBadge, SectionHeader, SplitTitle } from '../components/ui'

function Photo({ src, caption, className }: { src: string; caption: string; className: string }) {
  return (
    <figure className={`relative flex items-end overflow-hidden rounded-lg p-[18px] ${className}`}>
      <img src={src} alt={caption} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <figcaption className="t-label relative rounded bg-sand px-3.5 py-2 text-ink">{caption}</figcaption>
    </figure>
  )
}

export function Clinic() {
  return (
    <section id="clinic" className="section-pad flex flex-col gap-7 bg-sand lg:gap-12">
      <SectionHeader
        eyebrow="Our clinic"
        title={
          <SplitTitle
            className="t-h1 text-ink lg:text-[60px] lg:leading-[62px] lg:tracking-[-0.015em]"
            lead="A calm space, "
            accent="built for care."
          />
        }
        intro="Private consultation rooms, a quiet lounge, and treatment spaces prepared to clinical hygiene standards. [Describe your clinic’s actual spaces.]"
        action={
          <Button href="#contact" variant="light" className="w-full md:w-auto md:self-start">
            Visit the clinic
          </Button>
        }
      />

      <div className="grid gap-3 lg:h-[660px] lg:grid-cols-[600fr_270fr_330fr] lg:gap-6">
        <Photo src={lounge} caption="Consultation lounge" className="h-[260px] md:h-[420px] lg:h-auto" />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:grid-rows-2 lg:gap-6">
          <Photo src={consultationRoom} caption="Consultation rooms" className="h-[180px] md:h-[320px] lg:h-auto" />
          <Photo src={studio} caption="Skincare studio" className="h-[180px] md:h-[320px] lg:h-auto" />
        </div>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-col">
          <Photo src={treatmentRoom} caption="Treatment room" className="h-[200px] md:h-auto md:min-h-[222px] lg:h-auto lg:flex-1" />
          <div className="flex flex-col gap-3 rounded-lg border border-line bg-cream p-6">
            <IconBadge icon="scanLine" size={44} iconSize={20} className="bg-sage" color="#6f7d66" />
            <h3 className="t-h3 text-ink">Technology &amp; equipment</h3>
            <p className="t-small text-body">
              [List the devices your clinic uses.] Images are illustrative. We explain each device and why it may be
              recommended before any treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
