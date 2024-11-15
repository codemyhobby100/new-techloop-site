import { motion } from "framer-motion"
import { TESTIMONIALS_CONTENT } from "../constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

const Testimonial = () => {

    const testimonialVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    }

  return (
    <section id="testimonial">
        <div className="max-w-7xl mx-auto px-4 mt-20">
            <motion.div className="text-center mb-12 border-t 
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

            <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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