import { FocusCards } from "./ui/focus-cards";
import Project1 from "../assets/acct.png";
import Project2 from "../assets/project27.png";
import Project3 from "../assets/project25.png";
import Project4 from "../assets/iog.png";
import Project5 from "../assets/project20.png";
import Project6 from "../assets/project18.jpg";
import Project7 from "../assets/project23.png";
import Project8 from "../assets/project28.png";
import Project9 from "../assets/project29.png";
import { OUR_WORK } from "../constants";
 
const ClientWork = () => {
    const cards = [
        {
          title: "Acctbazaar",
          src: Project1,   
          link: "https://acctbazaar.com/",
        },
        {
          title: "Clean My Space",
          src: Project2,   
          link: "https://www.cleanmyspace.ng/",
        },
        {
          title: "Acctpanel",
          src: Project3,   
          link: "http://acctpanel.com/",
        },
        {
          title: "IOG Website",
          src: Project4,   
          link: "https://internationalorthopaedicgroup.com/",
        },
        {
          title: "Forex Prop Firm",
          src: Project5,   
          link: "https://github.com/codemyhobby100",
        },
        {
          title: "Trip Planner",
          src: Project6,  
          link: "https://github.com/codemyhobby100", 
        },
        {
          title: "HR Management System",
          src: Project7,  
          link: "https://github.com/codemyhobby100", 
        },
        {
          title: "Garnicopies",
          src: Project8,
          link: "https://www.garnicopies.co/",   
        },
        {
          title: "Wax & Co Clinic",
          src: Project9,   
          link: "https://waxandcoclinic.com/",
        },

      ];
     
      return (
        <section id="project">
            <div className="max-w-7xl mx-auto px-4 mt-20">
                <div className="text-center mb-12 ">
                    <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t
                        from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                        {OUR_WORK.sectionTitle}
                    </h2>
                    <p className="mt-4">
                    {OUR_WORK.sectionDescription}
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-4 mt-20">
                    <FocusCards cards={cards} />
                </div>
            </div>
        </section>
      );
}

export default ClientWork;
