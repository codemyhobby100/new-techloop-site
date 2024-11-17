import { FocusCards } from "./ui/focus-cards";
import Project1 from "../assets/project11.png";
import Project2 from "../assets/project21.png";
import Project3 from "../assets/project13.png";
import Project4 from "../assets/project14.png";
import { KEY_FEATURES_CONTENT } from "../constants";
 
const ClientWork = () => {
    const cards = [
        {
          title: "Forest Adventure",
          src: Project1,  // Corrected here
        },
        {
          title: "Valley of life",
          src: Project2,  // Corrected here
        },
        {
          title: "Sala behta hi jayega",
          src: Project3,  // Corrected here
        },
        {
          title: "Camping is for pros",
          src: Project4,  // Corrected here
        },
        {
          title: "The road not taken",
          src: Project2,  // Corrected here
        },
        {
          title: "The First Rule",
          src: Project1,  // Corrected here
        },
      ];
     
      return (
        <section>
            <div className="text-center mb-12 ">
                <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t
                    from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                    What we built
                </h2>
                <p className="mt-4">
                {KEY_FEATURES_CONTENT.sectionDescription}
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-20">
                <FocusCards cards={cards} />
            </div>
        </section>
      );
}

export default ClientWork;
