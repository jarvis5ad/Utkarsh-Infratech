import React from 'react'
import Header from './components/construction/Header'
import Hero from './components/construction/Hero'
import About from './components/construction/About'
import Services from './components/construction/Services'
import Projects from './components/construction/Projects'
import WhyChooseUs from './components/construction/WhyChooseUs'
import Testimonials from './components/construction/Testimonials'
import Contact from './components/construction/Contact'
import Footer from './components/construction/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}