import BackgroundBlobs from './components/layout/BackgroundBlobs'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Stats from './components/sections/Stats'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="relative flex min-h-svh flex-col">
      <BackgroundBlobs />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Stats />
        <About />
        <Projects />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
