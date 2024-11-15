
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/Navbar";



const App = () => {
  return (
    <main className='text-sm text-neutral-300 antialiased'>
      <Navbar/>
      <HeroSection />
      <Services/>
      <Projects/>
      <Testimonial/>
    </main>
  )
}

export default App