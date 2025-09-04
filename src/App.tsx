import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import AdvantagesSection from './components/AdvantagesSection'
import AameegoAppSection from './components/AameegoAppSection'
import OurServices from './components/OurServices'
import './App.css'
import ReviewSection from './components/ReviewSection'
import ContactUs from './components/ContactUs'
import Footer from './components/FooterSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <AameegoAppSection />
      <OurServices />
      <ReviewSection />
      <ContactUs />
      <Footer/>
    </div>
  )
}

export default App
