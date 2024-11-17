import { motion } from "framer-motion";
import { KEY_FEATURES_CONTENT } from "../constants";
import { HoverEffect } from "./ui/card-hover-effect";
import { HiOutlinePaintBrush, HiOutlineRocketLaunch  } from "react-icons/hi2";
// import { FaReact } from "react-icons/fa";

import { FaHandsHelping, FaMapSigns, FaCode, FaCheckCircle } from "react-icons/fa";

export const projects = [
  {
    title: "Project Consultation",
    description:
      "We’ll meet to discuss your needs, goals, and ideas for the project.",
    link: "https://stripe.com",
    icon: <FaHandsHelping size={40} className="text-white" />, // Symbolizing collaboration
  },
  {
    title: "Research & Planning",
    description:
      "We define the scope, create a roadmap, and analyze competitors to refine the strategy.",
    link: "https://netflix.com",
    icon: <FaMapSigns size={40} className="text-white" />, // Signifying direction and planning
  },
  {
    title: "Design Phase",
    description:
      "We craft intuitive designs that align with your vision and user experience goals.",
    link: "https://google.com",
    icon: <HiOutlinePaintBrush size={40} className="text-white" />, // Representing creativity and design
  },
  {
    title: "Development",
    description:
      "Our team builds the solution, focusing on functionality, scalability, and performance.",
    link: "https://meta.com",
    icon: <FaCode size={40} className="text-white" />, // Representing coding and development
  },
  {
    title: "Testing & Feedback",
    description:
      "The product is tested rigorously, and your feedback ensures it meets expectations.",
    link: "https://amazon.com",
    icon: <FaCheckCircle size={40} className="text-white" />, // Indicating validation and approval
  },
  {
    title: "Launch & Support",
    description:
      "We deploy the solution and provide ongoing support for optimal performance.",
    link: "https://microsoft.com",
    icon: <HiOutlineRocketLaunch  size={40} className="text-white" />, // Representing launch and progress
  },
];


const Projects = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                straggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    }

    const featureVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            }
        }
    }
  return (
    <section>
        <div className="max-w-7xl mx-auto px-4 mt-20">
            <div className="text-center mb-12 border-t border-neutral-800">
                <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t
                    from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                    {KEY_FEATURES_CONTENT.sectionTitle}
                </h2>
                <p className="mt-4">
                    {KEY_FEATURES_CONTENT.sectionDescription}
                </p>
            </div>

            {/* <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-wrap justify-between">
                {KEY_FEATURES_CONTENT.features.map((feature) => (
                    <motion.div key={feature.id} className="flex flex-col items-center
                    text-center w-full md:w-1/2 lg:w-1/3 p-6"
                    variants={featureVariants}>
                        <div className="flex justify-center items-center mb-4 text-2xl">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl">{feature.title}</h3>
                        <p className="mt-2 text-neutral-400">{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div> */}

            <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </motion.div>
        </div>
    </section>
  )
}

export default Projects