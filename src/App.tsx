import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import AdvantagesSection from './components/AdvantagesSection'
import AameegoAppSection from './components/AameegoAppSection'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <AameegoAppSection />
    </div>
  )
}

export default App
