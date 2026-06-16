import './App.css'
import { useReveal } from './useReveal'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Finishes } from './components/Finishes'
import { Gallery } from './components/Gallery'
import { WhyUs } from './components/WhyUs'
import { CtaBanner } from './components/CtaBanner'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref}>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Finishes />
        <Gallery />
        <WhyUs />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
