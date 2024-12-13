import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

const Contact = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 mt-20 relative">
        {/* Lamp Section */}
        <LampContainer>
          <motion.h2
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-3 bg-gradient-to-br from-neutral-50 via-neutral-300 to-neutral-600
              py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center mt-4 text-lg"
          >
            Bring Your Vision to Life
          </motion.p>
        </LampContainer>

        {/* CTA Section */}
        <div className="bg-black mt-[-250px] text-white py-16 px-8 text-center border-2 border-white rounded-lg relative z-10">
          <h3 className="text-3xl md:text-4xl font-light mb-4">
            Ready to Transform Your Vision into Reality?
          </h3>
          <p className="text-lg md:text-[16px] font-extralight mb-8">
            Partner with us to build innovative websites, apps, and digital solutions that drive results. Let’s create something amazing together.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-black border border-white hover:bg-gray-100 hover:text-black py-3 px-6 rounded-lg font-medium transition"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
