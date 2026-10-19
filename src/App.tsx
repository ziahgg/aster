import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { TrustBar } from './sections/TrustBar'
import { Treatments } from './sections/Treatments'
import { Concerns } from './sections/Concerns'
import { About } from './sections/About'
import { Specialists } from './sections/Specialists'
import { Journey } from './sections/Journey'
import { Clinic } from './sections/Clinic'
import { Results } from './sections/Results'
import { Faq } from './sections/Faq'
import { Booking } from './sections/Booking'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    // The design sits inside a wine-coloured frame: 8px on mobile, 16px from desktop up.
    <div className="p-2 lg:p-4">
      <div className="mx-auto max-w-[1408px] overflow-x-clip">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <Treatments />
          <Concerns />
          <About />
          <Specialists />
          <Journey />
          <Clinic />
          <Results />
          <Faq />
          <Booking />
        </main>
        <Footer />
      </div>
    </div>
  )
}
