import { useEffect } from 'react'
import { SiteHeader } from './components/SiteHeader.jsx'
import { About } from './sections/About.jsx'
import { Contacts } from './sections/Contacts.jsx'
import { Education } from './sections/Education.jsx'
import { FocusAreas } from './sections/FocusAreas.jsx'
import { Hero } from './sections/Hero.jsx'
import { Invitation } from './sections/Invitation.jsx'
import { Testimonials } from './sections/Testimonials.jsx'

export default function App() {
  useEffect(() => {
    if (!window.location.hash) return

    let isCancelled = false

    document.fonts.ready.then(() => {
      if (isCancelled) return

      const target = document.querySelector(window.location.hash)
      target?.scrollIntoView()
    })

    return () => {
      isCancelled = true
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Перейти к содержанию</a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <About />
        <FocusAreas />
        <Education />
        <Testimonials />
        <Invitation />
      </main>
      <Contacts />
    </>
  )
}
