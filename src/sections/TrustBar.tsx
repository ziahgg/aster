import type { IconName } from '../components/Icon'
import { DashedOutline, IconBadge } from '../components/ui'

const credentials: { icon: IconName; title: string; subtitle: string; color: string }[] = [
  { icon: 'award', title: '[Professional membership]', subtitle: 'Add verified membership', color: '#2e1614' },
  { icon: 'shieldCheck', title: '[Clinic registration]', subtitle: 'Add accreditation details', color: '#7a3036' },
  { icon: 'clipboardCheck', title: '[Practitioner qualifications]', subtitle: 'Add verified credentials', color: '#7a3036' },
  { icon: 'star', title: '[Patient rating]', subtitle: 'Add rating & source', color: '#7a3036' },
]

export function TrustBar() {
  return (
    <section aria-label="Credentials and ratings" className="bg-sand px-4 pb-12 md:px-10 lg:px-20 lg:pb-20">
      <div className="flex flex-col gap-2.5 rounded-lg border border-line bg-cream px-4 py-[18px] lg:flex-row lg:items-center lg:gap-5 lg:py-[22px] lg:pr-6 lg:pl-8">
        <div className="flex flex-col gap-1 lg:w-[200px] lg:shrink-0">
          <p className="t-eyebrow text-ink">Credentials &amp; ratings</p>
          <p className="t-small text-taupe">Placeholders — add verified details only.</p>
        </div>
        <ul className="grid gap-2.5 md:grid-cols-2 lg:flex lg:flex-1 lg:items-center lg:gap-5">
          {credentials.map((c) => (
            <li key={c.title} className="relative flex items-center gap-3 rounded-md p-[17px] lg:flex-1">
              <DashedOutline radius={6} dash="5 4" />
              <IconBadge icon={c.icon} size={40} iconSize={18} radius={6} className="bg-stone" color={c.color} accent="#2e1614" />
              <div className="flex min-w-0 flex-col gap-px">
                <p className="t-label text-ink">{c.title}</p>
                <p className="t-small text-taupe">{c.subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
