import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactPage = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-12"
    >
      <div className="max-w-3xl w-full">
        <motion.h1
          variants={fadeInUp}
          className="text-center text-4xl md:text-5xl lg:text-6xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-6 mb-6 text-neutral-400 max-w-xl mx-auto text-center"
        >
          Reach out to us for any inquiries, support, or business-related questions.
        </motion.p>
        {/* Contact Form */}
        <form className="grid gap-6">
          {/* Full Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-neutral-400 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="p-3 rounded bg-neutral-900 text-white w-full outline-none"
              />
            </div>
            <div>
              <label className="block text-neutral-400 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded bg-neutral-900 text-white w-full outline-none"
              />
            </div>
          </div>

          {/* Subject & Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-neutral-400 mb-2">Subject</label>
              <input
                type="text"
                placeholder="Enter the subject"
                className="p-3 rounded bg-neutral-900 text-white w-full outline-none"
              />
            </div>
            <div>
              <label className="block text-neutral-400 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="p-3 rounded bg-neutral-900 text-white w-full outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-neutral-400 mb-2">Message</label>
            <textarea
              placeholder="Write your message here"
              rows={5}
              className="p-3 rounded bg-neutral-900 text-white w-full resize-none outline-none"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="p-3 w-full bg-white hover:bg-white/80 rounded text-black font-bold transition duration-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactPage;
