import { motion } from "framer-motion"
import { TESTIMONIALS_CONTENT } from "../constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const testimonials = [
    {
      quote:
        "Techloop brought our ideas to life with precision and innovation. Their team was responsive, professional, and delivered a website that not only looked amazing but also performed seamlessly. We’re thrilled with the results!",
      name: "Dhruv",
      title: "Webdesign Agency",
    },
    {
      quote:
        "Choosing Techloop was the best decision we made for our business. They created a website that perfectly captured our brand and provided valuable input that enhanced the final product. Their dedication to quality is truly impressive.",
      name: "Acctbazar",
      title: "CEO",
    },
    {
      quote: "Techloop transformed our outdated website into a modern, sleek, and efficient platform. Their commitment to user experience and performance optimization was evident throughout the project. We highly recommend them!",
      name: "Tamazing Events",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "Techloop delivered a seamless, user-friendly app that perfectly brought Donki AI to life. Their attention to detail and expertise made the process smooth and enjoyable.",
      name: "Volume Technologies",
      title: "CEO",
    },
    {
      quote:
        "Techloop developed a sleek, responsive web app that exceeded expectations. Their focus on quality and functionality made all the difference",
      name: "Acctpanel",
      title: "CEO",
    },
  ];

const Testimonial = () => {

    // const testimonialVariants = {
    //     hidden: { opacity: 0, y: 50 },
    //     visible: (i) => ({
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             delay: i * 0.2,
    //             duration: 0.6,
    //             ease: "easeOut"
    //         }
    //     })
    // }

  return (
    <section id="testimonial">
        <div className="max-w-7xl mx-auto px-4 mt-20">
            <motion.div className="text-center mb-0 border-t 
            border-neutral-800" 
            initial= {{opacity: 0, y: -20}}
            animate={{ opacity: 1, y:0 }}
            transition={{duration: 0.6, ease: "easeOut"}} >
                <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter
                bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 
                bg-clip-text text-transparent">
                    {TESTIMONIALS_CONTENT.sectionTitle}
                </h2>
                <p className="mt-4">
                    {TESTIMONIALS_CONTENT.sectionDescription}
                </p>
            </motion.div>

            <div className="mt-[-100px] h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    </section>
  )
}

export default Testimonial