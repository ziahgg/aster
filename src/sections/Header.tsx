import { useEffect, useState } from 'react'
import { Icon } from '../components/Icon'
import { Button } from '../components/ui'
import { Logo } from '../components/Logo'

const navItems = [
  { label: 'Treatments', href: '#treatments', chevron: true },
  { label: 'Skin Concerns', href: '#concerns', chevron: true },
  { label: 'Our Clinic', href: '#clinic' },
  { label: 'Specialists', href: '#specialists' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu with Escape or when the viewport grows to desktop.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 1024px)')
    const onResize = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onResize)
    }
  }, [open])

  return (
    <header className="relative z-20 bg-sand">
      {/* Announcement bar */}
      <div className="bg-wine px-3 pt-1.5 pb-2.5 md:px-10 lg:px-20 lg:pt-1 lg:pb-3">
        <div className="flex items-center justify-center lg:justify-between">
          <p className="t-small hidden items-center gap-2 text-muted lg:flex">
            <Icon name="clock" size={14} color="#b88a84" />
            [Opening hours — add your clinic hours]
          </p>
          <p className="t-small flex items-start gap-2 text-sand lg:items-center">
            <Icon name="sparkles" size={14} color="#b88a84" className="mt-[3px] lg:mt-0" />
            Consultations by appointment · New patients welcome
          </p>
          <p className="t-small hidden items-center gap-2 text-muted lg:flex">
            <Icon name="phone" size={14} color="#b88a84" />
            [Clinic phone number]
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="flex items-center justify-between px-3 pt-3 pb-2 lg:px-6 lg:pt-5 lg:pb-2">
        <a href="#top" aria-label="Aster — home" className="rounded-md">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-[34px] xl:gap-[34px]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="t-label flex items-center gap-1 text-ink transition-colors hover:text-wine"
                >
                  {item.label}
                  {item.chevron && <Icon name="chevronDown" size={14} color="#8d7f78" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="#contact" variant="light" className="hidden xl:inline-flex">
            Call the clinic
          </Button>
          <Button href="#booking">Book a Consultation</Button>
        </div>

        <button
          type="button"
          className="flex size-8 items-center justify-center rounded bg-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name="menu" size={16} color="#e8e3da" />
        </button>
      </div>

      {/* Mobile menu: same links and actions as the desktop header. */}
      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full border-t border-line bg-sand px-3 pb-4 shadow-[0_20px_48px_rgba(43,33,28,0.2)] lg:hidden">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-line">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="t-label flex items-center justify-between py-3.5 text-ink"
                  >
                    {item.label}
                    <Icon name="chevronRight" size={16} color="#8d7f78" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 flex flex-col gap-2" onClick={() => setOpen(false)}>
            <Button href="#booking">Book a Consultation</Button>
            <Button href="#contact" variant="light">
              Call the clinic
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
