import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


const PrivacyPolicy = () => {
    return (
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible" 
        className="p-8 max-w-4xl mx-auto mt-32">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">Privacy Policy</h1>
        <p className="mt-6 mb-6 text-neutral-400 mx-auto text-center">Your privacy is important to us at Techloop Technologies Ltd. This policy explains how we collect, use, and protect your personal information.</p>

        <div className="text-neutral-400">
            <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
            <p className="mb-4">We may collect personal information such as your name, email address, phone number, and billing details when you engage with our services.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
            <p className="mb-4">The information collected is used to provide and improve our services, process payments, and communicate effectively with you.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
            <p className="mb-4">We implement robust security measures to protect your data. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Sharing of Information</h2>
            <p className="mb-4">We do not sell or rent your personal information to third parties. Information may be shared with trusted partners solely for the purpose of delivering our services.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies</h2>
            <p className="mb-4">We use cookies to enhance user experience and analyze website traffic. You can adjust your browser settings to decline cookies if preferred.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
            <p className="mb-4">You have the right to access, modify, or delete your personal information by contacting us directly at [Your Contact Email].</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Governing Law</h2>
            <p className="mb-4">This policy is governed by the laws of the Federal Republic of Nigeria. Any disputes arising under or in connection with this policy shall be subject to the exclusive jurisdiction of the courts of Nigeria.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">8. Updates to This Policy</h2>
            <p className="mb-4">We may update this Privacy Policy from time to time. We encourage you to review it periodically.</p>
        </div>
      </motion.section>
    );
  };
  
  export default PrivacyPolicy;
  