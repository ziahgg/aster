import specialist1 from '../assets/images/specialist-1.jpg'
import specialist2 from '../assets/images/specialist-2.jpg'
import specialist3 from '../assets/images/specialist-3.jpg'
import specialist4 from '../assets/images/specialist-4.jpg'
import { Icon } from '../components/Icon'
import { Button, SectionHeader, SplitTitle } from '../components/ui'

const specialists = [
  { role: '[Role — e.g., Dermatologist]', image: specialist1 },
  { role: '[Role — e.g., Aesthetic Nurse]', image: specialist2 },
  { role: '[Role — e.g., Skin Therapist]', image: specialist3 },
  { role: '[Role — e.g., Patient Coordinator]', image: specialist4 },
]

export function Specialists() {
  return (
    <section id="specialists" className="section-pad flex flex-col gap-7 overflow-hidden bg-sand lg:gap-12">
      <SectionHeader
        eyebrow="Our team"
        title={<SplitTitle className="t-h1 text-ink" lead="The people behind " accent="your care." />}
        intro="Introduce your team here. Roles below are examples only — list the professionals and services your clinic actually provides."
        action={
          <Button href="#specialists" variant="light" className="w-full md:w-auto md:self-start">
            Meet the full team
          </Button>
        }
      />

      {/* Horizontal rail on mobile, grid from tablet up. */}
      <ul className="rail -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-4">
        {specialists.map((s) => (
          <li
            key={s.role}
            className="flex w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-lg border border-line bg-cream md:w-auto"
          >
            <div className="h-[340px] bg-mist">
              <img src={s.image} alt="Placeholder portrait of a clinic team member" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-2 px-[22px] pt-[22px] pb-6">
              <p className="t-eyebrow text-wine">{s.role}</p>
              <h3 className="t-h2 text-ink">[Specialist name]</h3>
              <p className="t-label text-body">[Qualifications &amp; registration]</p>
              <p className="t-small text-taupe">[Short bio: areas of focus and approach to care.]</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="t-small flex items-start gap-2.5 text-taupe lg:items-center">
        <Icon name="shieldCheck" size={16} color="#8d7f78" className="mt-0.5 lg:mt-0" />
        Display professional registrations and qualifications exactly as issued and verified. Portraits shown with each
        person’s consent.
      </p>
    </section>
  )
}
