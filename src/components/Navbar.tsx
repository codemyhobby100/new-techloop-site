import { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu for mobile
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle navigation
    const handleNavigation = (sectionId: string): void => {
        if (window.location.pathname !== "/") {
            // Navigate to the homepage first, then scroll
            window.location.href = `/#${sectionId}`;
        } else {
            // Scroll smoothly within the current page
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth", // Smooth scroll for all devices
                    block: "start",     // Align to the top of the section
                });
            }
        }
    };
    

    // Smooth scroll to section when page loads with hash
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const sectionId = hash.replace("#", "");
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return (
        <nav className='fixed top-4 left-0 right-0 z-50 m-2'>
            <div className='text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800'>
                <h2 className='text-white text-[20px]'>Techloop Ltd.</h2>

                <div className='hidden md:flex space-x-6'>
                    <button onClick={() => handleNavigation("services")} className='hover:text-neutral-200'>
                        About us
                    </button>
                    <button onClick={() => handleNavigation("process")} className='hover:text-neutral-200'>
                        Process
                    </button>
                    <button onClick={() => handleNavigation("project")} className='hover:text-neutral-200'>
                        Projects
                    </button>
                </div>

                <div className='hidden md:flex space-x-4 items-center'>
                    <a href="/contact" className='bg-white text-black py-2 px-4 rounded-lg hover:bg-white/80 transition'>
                        Start Project
                    </a>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none'
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}>
                        {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'}`}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid #2c2c2c', padding: '16px', borderRadius: '12px', marginTop: '8px' }}
            >
                <div className='flex flex-col space-y-4 items-start'>
                    <button onClick={() => handleNavigation("services")} className='text-white hover:text-neutral-200'>
                        About us
                    </button>
                    <button onClick={() => handleNavigation("process")} className='text-white hover:text-neutral-200'>
                        Process
                    </button>
                    <button onClick={() => handleNavigation("project")} className='text-white hover:text-neutral-200'>
                        Projects
                    </button>
                    <a href="/contact" className='bg-white text-black py-2 px-4 rounded-lg hover:bg-white/80 transition'>
                        Start Project
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
