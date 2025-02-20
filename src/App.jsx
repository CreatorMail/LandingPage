import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import BankAccounts from './components/BankAccounts'
import Payments from './components/Payments'
import Testimonials from './components/Testimonials'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BankAccounts />
        <Payments />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </div>
  )
}

export default App