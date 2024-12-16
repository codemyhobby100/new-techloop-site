import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ContactPage from "./pages/ContactPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  // Hook for scroll events
  useLenis(({ scroll }) => {
    console.log("Current Scroll Position:", scroll);
  });

  return (
    <Router>
      <ReactLenis root>
        <Navbar />
        <main className="text-sm text-neutral-300 antialiased">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Services />
                  <Projects />
                  <ClientWork />
                  <Team />
                  <Testimonial />
                  <Contact />
                  <Footer />
                </>
              }
            />
            {/* Separate Pages */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
      </ReactLenis>
    </Router>
  );
};

export default App;
