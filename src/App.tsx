import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Projects from "./components/Projects";



const App = () => {
  return (
    <main className='text-sm text-neutral-300 antialiased'>
      <Navbar/>
      <HeroSection />
      <Services/>
      <Projects/>
    </main>
  )
}

export default App