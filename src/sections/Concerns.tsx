import panelImage from '../assets/images/concerns-panel.jpg'
import { Icon, type IconName } from '../components/Icon'
import { Button, IconBadge, SectionHeader, SplitTitle } from '../components/ui'

const concerns: { title: string; icon: IconName }[] = [
  { title: 'Acne & blemishes', icon: 'target' },
  { title: 'Uneven skin tone', icon: 'palette' },
  { title: 'Hyperpigmentation', icon: 'sun' },
  { title: 'Fine lines & visible aging', icon: 'hourglass' },
  { title: 'Dehydrated skin', icon: 'droplet' },
  { title: 'Skin texture concerns', icon: 'waves' },
]

export function Concerns() {
  return (
    <section id="concerns" className="section-pad flex flex-col gap-7 bg-sand lg:gap-12">
      <SectionHeader
        eyebrow="Skin concerns"
        title={
          <SplitTitle
            className="t-h1-mixed text-ink"
            accentClassName="t-accent-lg text-muted"
            lead="Find care by "
            accent="skin concern."
          />
        }
        intro="Start with what you’re noticing. Each concern links to treatments that may help — your consultation confirms what’s right for you."
      />

      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="relative flex min-h-[234px] flex-col justify-end overflow-hidden rounded-2xl p-8 lg:min-h-[414px] lg:w-[420px] lg:shrink-0">
          <img
            src={panelImage}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(180deg, rgba(43,33,28,0) 40%, rgba(43,33,28,0.85) 100%)' }}
          />
          <div className="relative flex flex-col gap-4">
            <h3 className="t-h2 text-sand">Not sure what your skin needs?</h3>
            <p className="t-small text-mist">A professional assessment is the clearest place to start.</p>
            <Button href="#booking" variant="light" className="self-start">
              Book an assessment
            </Button>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2.5 lg:gap-4">
          <ul className="grid gap-2.5 md:grid-cols-2 lg:gap-4">
            {concerns.map((c) => (
              <li key={c.title}>
                <a
                  href="#treatments"
                  className="group flex items-center gap-[18px] rounded-lg border border-line bg-cream px-6 py-[22px] transition-colors hover:border-muted"
                >
                  <IconBadge icon={c.icon} size={52} iconSize={24} className="bg-blush" color="#2e1614" accent="#7a3036" />
                  <span className="flex min-w-0 flex-1 flex-col gap-[3px]">
                    <span className="t-h3 text-ink">{c.title}</span>
                    <span className="t-small text-taupe">See related treatments</span>
                  </span>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-stone transition-colors group-hover:bg-line">
                    <Icon name={c.icon} size={16} color="#2e1614" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-start gap-2 rounded-md bg-sage px-5 py-4 lg:items-center lg:gap-3">
            <Icon name="eye" size={18} color="#6f7d66" className="mt-px lg:mt-0" />
            <p className="t-small text-ink">
              This list is a starting point, not a diagnosis. Changes in your skin that concern you should be assessed by a
              qualified professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
