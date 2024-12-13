import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
// import { OUR_WORK } from "../constants";
import team1 from "../assets/team-01.jpg";
import team2 from "../assets/team-3.jpg";
import team3 from "../assets/team-5.jpg";
import team4 from "../assets/team-6.jpg";
import team5 from "../assets/team-4.jpg";
const Team = () => {
    const testimonials = [
        {
          quote:
            "With over 4 years of experience, Abdul-baqi is passionate about creating innovative solutions that empower businesses to flourish. His attention to detail and commitment to excellence have transformed workflows and exceeded client expectations.",
          name: "Abdul-baqi",
          designation: "CEO/Fullstack Developer",
          src: team1,
        },
        {
          quote:
            "Naimur is a skilled fullstack developer with over 4 years of experience, specializing in backend engineering. His deep technical expertise and innovative solutions ensure seamless implementation and impressive platform flexibility.",
          name: "Naimur",
          designation: "Senior Fullstack Engineer",
          src: team3,
        },
        {
          quote:
            "With over 5 years of experience in mobile app development and frontend web development, Abdullah has the unique ability to craft intuitive and user-friendly interfaces that significantly enhance productivity.",
          name: "Abdullah",
          designation: "Mobile App Developer",
          src: team2,
        },
        {
          quote:
            "Rasel is an exceptional UI designer who creates visually stunning and intuitive designs. His creative solutions and attention to user experience ensure every project is both functional and beautifully crafted.",
          name: "Rasel",
          designation: "UI/UX Designer",
          src: team4,
        },
        {
          quote:
            "Rakibul is an expert frontend developer whose work enhances scalability and performance, helping businesses grow and succeed through robust and efficient digital solutions.",
          name: "Rakibul",
          designation: "Frontend Developer",
          src: team5,
        },
      ];

  return (
    <section className="testimonial-section mt-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 mt-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                    Meet The Team
                </h2>
                <p className="mt-4">A showcase of innovative solutions and standout projects that turn ideas into impactful digital experiences.</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-[-60px]">
                <AnimatedTestimonials testimonials={testimonials} />
            </div>
        </div>
    </section>


  )
}

export default Team