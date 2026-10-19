import { Icon, type IconName } from '../components/Icon'
import { LogoInverse } from '../components/Logo'

const columns = [
  {
    title: 'Treatments',
    href: '#treatments',
    links: ['Skin Consultation', 'Acne Care', 'Pigmentation', 'Skin Rejuvenation', 'Clinical Facials', 'Medical-Grade Skincare'],
  },
  {
    title: 'Skin Concerns',
    href: '#concerns',
    links: ['Acne & blemishes', 'Uneven skin tone', 'Hyperpigmentation', 'Fine lines', 'Dehydrated skin', 'Texture'],
  },
]
const clinicLinks = [
  { label: 'About the clinic', href: '#about' },
  { label: 'Our specialists', href: '#specialists' },
  { label: 'Patient stories', href: '#results' },
  { label: 'Careers', href: '#contact' },
  { label: 'Contact', href: '#contact' },
]
const visit: { icon: IconName; text: string }[] = [
  { icon: 'mapPin', text: '[Clinic address]' },
  { icon: 'clock', text: '[Opening hours]' },
  { icon: 'phone', text: '[Phone number]' },
  { icon: 'mail', text: '[Email address]' },
]
const socials: { icon: IconName; label: string }[] = [
  { icon: 'instagram', label: 'Instagram' },
  { icon: 'facebook', label: 'Facebook' },
  { icon: 'x', label: 'X' },
]
const legal = ['Privacy Policy', 'Terms of Use', 'Accessibility', 'Patient Rights']

const linkClass = 'block t-small text-mist transition-colors hover:text-sand'

export function Footer() {
  return (
    <footer className="flex flex-col gap-8 bg-ink px-4 pt-14 pb-8 md:px-10 lg:gap-12 lg:px-20 lg:pt-[88px] lg:pb-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-[18px] lg:w-[340px]">
          <LogoInverse />
          <p className="t-small text-muted">
            A consultation-first skin clinic offering personalized care in a calm, welcoming setting. [Add your clinic
            description.]
          </p>
          <ul className="flex gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                {/* Icons set in ink: in the design they share the button colour and are invisible. */}
                <a
                  href="#top"
                  aria-label={`${s.label} (placeholder link)`}
                  className="flex size-[38px] items-center justify-center rounded-md border border-sand bg-sand transition-colors hover:bg-cream"
                >
                  <Icon name={s.icon} size={17} color="#2e1614" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-5 md:flex md:gap-14">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
              <h2 className="t-eyebrow text-rose">{col.title}</h2>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href={col.href} className={linkClass}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <nav aria-label="Clinic" className="flex flex-col gap-3">
            <h2 className="t-eyebrow text-rose">Clinic</h2>
            <ul className="flex flex-col gap-3">
              {clinicLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-2 flex flex-col gap-3 md:w-[220px]">
            <h2 className="t-eyebrow text-rose">Visit</h2>
            <ul className="flex flex-col gap-3">
              {visit.map((v) => (
                <li key={v.text} className="t-small flex items-center gap-2 text-mist">
                  <Icon name={v.icon} size={14} color="#b88a84" />
                  {v.text}
                </li>
              ))}
            </ul>
            <a href="#booking" className="t-label inline-flex items-center gap-1.5 self-start text-sand hover:underline">
              Book online
              <Icon name="arrowRight" size={14} color="#e8e3da" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-sand" />

      <p className="t-small flex items-start gap-3 text-muted lg:items-center">
        <Icon name="shieldCheck" size={16} color="#b88a84" className="mt-0.5 lg:mt-0" />
        The information on this website is general and is not a substitute for a professional medical assessment. Treatment
        suitability is determined at consultation, and individual results vary.
      </p>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <p className="t-small text-taupe">© 2026 Aster Skin Clinic — placeholder brand. [Add registered business name.]</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 lg:gap-[22px]">
          {legal.map((l) => (
            <li key={l}>
              <a href="#top" className={linkClass}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
