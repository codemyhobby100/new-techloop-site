// import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

const Contact = () => {
  return (
    <section>
        <div className="max-w-7xl mx-auto px-4 mt-20">
            <LampContainer className='mt-[-100px]'>
            <motion.h2
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br    from-neutral-50 via-neutral-300 to-neutral-600  py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                Get in Touch <br /> Bring Your Vision to Life
            </motion.h2>
            </LampContainer>
        </div>
    </section>
  );
}

export default Contact