import { useState } from 'react';
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
// import logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='fixed top-4 left-0 right-0 z-50 m-2'>
            <div className='text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl
            mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800'>
                <h2 className='text-white text-[20px]'>Techloop Ltd.</h2>

                <div className='hidden md:flex space-x-6'>
                    <a href="/" className='hover:text-neutral-200'>
                        About us
                    </a>
                    <a href="#process" className='hover:text-neutral-200'>
                        Process
                    </a>
                    <a href="#project" className='hover:text-neutral-200'>
                        Projects
                    </a>
                </div>

                <div className='hidden md:flex space-x-4 items-center'>
                {/* <a href="#" className='border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-900 transition'>
                        Get a Quote
                    </a> */}
                    <a href="/contact" className='bg-white  text-black py-2 px-4 rounded-lg hover:bg-white/80 transition'>
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
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-screen opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'
                } bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2`}
            >
                <div className='flex flex-col space-y-4'>
                    <a href="#" className='text-white hover:text-neutral-200'>
                        About us
                    </a>
                    <a href="#process" className='text-white hover:text-neutral-200'>
                        Process
                    </a>
                    <a href="#" className='text-white hover:text-neutral-200'>
                        Testimonial
                    </a>
                    <a href="#project" className='text-white hover:text-white'>
                        Projects
                    </a>
                    {/* <a href="contact" className='hover:text-neutral-200'>
                        Get a free quote
                    </a> */}
                    <a href="contact" className='bg-white  text-black py-2 px-4 rounded-lg hover:bg-white/80 transition'>
                        Start Project
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
