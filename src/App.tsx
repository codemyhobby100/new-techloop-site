import { ReactLenis, useLenis } from "lenis/react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/Navbar";
import ClientWork from "./components/ClientWork";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  // Optional: Hook to listen to scroll events
  useLenis(({ scroll }) => {
    console.log("Current Scroll Position:", scroll); // Logs the scroll position (Optional Debugging)
  });

  return (
    <ReactLenis root>
      <main className="text-sm text-neutral-300 antialiased">
        <Navbar />
        <HeroSection />
        <Services />
        <Projects />
        <ClientWork />
        <Team/>
        <Testimonial />
        <Contact/>
        <Footer />
      </main>
    </ReactLenis>
  );
};

export default App;
