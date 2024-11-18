import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { OUR_WORK } from "../constants";
import team1 from "../assets/team-01.jpg";
import team2 from "../assets/team-3.jpg";
import team3 from "../assets/team-5.jpg";
import team4 from "../assets/team-6.jpg";
import team5 from "../assets/team-4.jpg";
const Team = () => {
    const testimonials = [
        {
          quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
          name: "Abdul-baqi",
          designation: "CEO/Fullstack Developer",
          src: team1,
        },
        {
          quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
          name: "Naimur",
          designation: "Senior Fullstack Engineer",
          src: team3,
        },
        {
          quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
          name: "Abdullah",
          designation: "Mobile App Developer",
          src: team2,
        },
        {
          quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
          name: "Rasel",
          designation: "UI/UX Designer",
          src: team4,
        },
        {
          quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
          name: "Rakibul",
          designation: "Frontend Developer",
          src: team5,
        },
      ];

  return (
    <section className="testimonial-section relative -z-50">
        <div className="max-w-7xl mx-auto px-4 mt-28">
            <div className="text-center mb-12">
            <h2
                className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t
                        from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent"
            >
                {OUR_WORK.sectionTitle}
            </h2>
            <p className="mt-4">{OUR_WORK.sectionDescription}</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-[-50px]">
            <AnimatedTestimonials testimonials={testimonials} />
            </div>
        </div>
    </section>

  )
}

export default Team