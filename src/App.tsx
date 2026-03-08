import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Staff from './components/Staff'
import Testimonials from './components/Testimonials'
import Rates from './components/Rates'
import Reserve from './components/Reserve'
import Footer from './components/Footer'
import SectionWrapper from './components/SectionWrapper'

function useFadeOnScroll() {
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (query.matches) {
      document.querySelectorAll('.fade-section').forEach((el) => {
        el.classList.add('visible')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.fade-section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useFadeOnScroll()

  return (
    <>
      <Nav />

      <main>
        <SectionWrapper nextBg="#FFF8F0">
          <Hero />
        </SectionWrapper>

        <About />

        <SectionWrapper nextBg="#FFF8F0" flip>
          <Services />
        </SectionWrapper>

        <SectionWrapper nextBg="#3D0A14">
          <Staff />
        </SectionWrapper>

        <SectionWrapper nextBg="#0E0205" flip>
          <Testimonials />
        </SectionWrapper>

        <SectionWrapper nextBg="#FFF8F0">
          <Rates />
        </SectionWrapper>

        <Reserve />
      </main>

      <Footer />
    </>
  )
}
