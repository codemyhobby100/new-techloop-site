import { motion } from "framer-motion";
import Footer from "../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TermsAndConditions = () => {
    return (
      <div>
        <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="p-8 max-w-4xl mx-auto mt-32 min-h-screen overflow-x-hidden"
        >
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">
            Terms and Conditions
          </h1>
          <p className="mt-6 mb-6 text-neutral-400 mx-auto text-center">
            Welcome to Techloop Technologies Ltd. These Terms and Conditions outline the rules and regulations for the use of our services. By engaging with our services, you agree to these terms in full. Please read them carefully.
          </p>

          <div className="text-neutral-400">
            <h2 className="text-xl font-semibold mt-6 mb-2">1. General Terms</h2>
            <p className="mb-4">
              Techloop Technologies Ltd provides services including but not limited to web development, mobile application development (Android and iOS), and other software solutions. All services provided are subject to the terms outlined herein.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">2. Billing and Payment Policies</h2>
            <p className="mb-4">We require a structured payment plan for all projects, which includes an initial deposit and progress payments based on project milestones. The final balance is due upon project completion.</p>
            <p className="mb-4">After full payment, we will transfer the project (e.g., website or application) to the designated server or app store. Ongoing services like hosting, maintenance, or SEO are billed on a 6- or 12-month cycle, as chosen by the client.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Client Responsibilities</h2>
            <p className="mb-4">Clients must provide all necessary content, feedback, and approvals promptly to avoid project delays. Failure to meet these obligations may result in timeline extensions or additional costs.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
            <p className="mb-4">While we strive for excellence, we cannot guarantee specific results such as exact search engine rankings or sales increases. Our liability for any project is limited to the amount paid by the client for that specific service.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Termination Policy</h2>
            <p className="mb-4">Either party may terminate the agreement at any stage with written notice. Upon termination, the client will be billed for work completed up to that point.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Intellectual Property</h2>
            <p className="mb-4">Upon final payment, all intellectual property rights for the deliverables will transfer to the client. However, Techloop Technologies Ltd retains the right to showcase the work in our portfolio unless otherwise agreed upon.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Governing Law</h2>
            <p className="mb-4">
              These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.
            </p>
          </div>
          
        </motion.section>
        <Footer/>
      </div>
    );
  };
  
  export default TermsAndConditions;
  