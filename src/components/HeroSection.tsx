import { useEffect, useRef } from "react";
import { BRAND_LOGOS, HERO_CONTENT } from "../constants";
import heroImage from "../assets/hero-3.jpg";
import { motion } from "framer-motion";
import { ContainerScroll } from "./ui/container-scroll-animation";

import "./herosection.css"



const containerVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1, transition: {straggerChildren: 0.2}},
}

const fadeInUp = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
}

const fadeIn = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {duration: 0.6}}
}
const HeroSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const scroll = () => {
        marquee.scrollLeft += 1;
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
      };
      const interval = setInterval(scroll, 20);
      return () => clearInterval(interval);
    }
  }, []);


  return (
    <motion.section 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="pt-28 lg:pt-36">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <motion.div 
        variants={fadeInUp}
        className="mb-8  border-neutral-800 px-3 py-2 rounded-full text-xs">
          {HERO_CONTENT.badgeText}
        </motion.div>

        <motion.h1 
        variants={fadeInUp}
        className="text-4xl md:text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
        >
        {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <span key={index}>
            {text}
            <br />
            </span>
        ))}
        </motion.h1>

        <motion.p 
        variants={fadeInUp}
        className="mt-6 text-neutral-400 max-w-xl">
          {HERO_CONTENT.subHeading}
        </motion.p>

        <motion.div 
        variants={fadeInUp}
        className="mt-6 space-x-4">
          <a
            href="#"
            className="inline-block bg-white hover:opacity-90 py-3 px-6 rounded-lg font-medium text-black"
          >
            {HERO_CONTENT.callToAction.primary}
          </a>
          <a
            href="#"
            className="inline-block border border-gray-500 hover:border-gray-400 py-3 px-6 rounded-lg font-medium"
          >
            {HERO_CONTENT.callToAction.secondary}
          </a>
        </motion.div> 

        {/* Logo slider with marquee effect */}
        <motion.div
          variants={fadeIn}
          className="py-10 overflow-hidden mb-[-200px] mt-10 sm:mt-32"
        >
          <p className="text-gray-400 text-center mb-8">
            {HERO_CONTENT.trustedByText}
          </p>
          <div
            className="relative w-full overflow-hidden"
            style={{ height: 'auto' }}
          >
            <div
              ref={marqueeRef}
              className="flex space-x-8 whitespace-nowrap"
              style={{
                display: 'flex',
                animation: 'marquee 15s linear infinite',
              }}
            >
              {BRAND_LOGOS.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 md:h-8"
                />
              ))}
              {/* Duplicate logos for seamless scrolling */}
              {BRAND_LOGOS.map((logo, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 md:h-8"
                />
              ))}
            </div>
          </div>
        </motion.div>
        {/* <motion.div 
        variants={fadeIn}
        className="mt-12">
          <img src={heroImage} alt="Project Sample" 
          className="w-full h-auto rounded-3xl border border-neutral-800 mb-20" />
        </motion.div> */}
        <ContainerScroll
        titleComponent={
          <>
            <h1 className="-mt-8 text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <img
          src={heroImage}
          alt="hero"
          className="w-full h-full mx-auto rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>



      </div>
    </motion.section>
  );
};

export default HeroSection;
