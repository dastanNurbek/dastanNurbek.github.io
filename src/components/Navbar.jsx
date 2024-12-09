import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
    
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
    
        // Determine offset based on screen width
        const isMobile = window.innerWidth <= 768; // Adjust breakpoint if needed
        const offset = isMobile ? 100 : 200; // Use a smaller offset for mobile
    
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    
        setNav(true); // Close mobile menu after scrolling
    };
    

  return (
    <div className='sticky top-0 z-50 bg-[#fbfbfe] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='text-2xl font-bold cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('about')}>DASTAN N.</h1>
        <ul className='hidden md:flex uppercase'>
            <li className='p-4 cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('background')}>Background</li>
            <li className='p-4 cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('experience')}>Experience</li>
            <li className='p-4 cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('skills')}>Skills</li>
            <li className='p-4 cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('projects')}>Projects</li>
            <li className='p-4 cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('publications')}>Publications</li>
            <li className='p-4 cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>

        {/* mobile menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={!nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-[#fbfbfe] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-2xl font-bold m-4 cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('about')}>DASTAN N.</h1>

            <ul className='uppercase'>
                <li className='p-4 cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('background')}>Background</li>
                <li className='p-4 cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('experience')}>Experience</li>
                <li className='p-4 cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('skills')}>Skills</li>
                <li className='p-4 cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('projects')}>Projects</li>
                <li className='p-4 cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('publications')}>Publications</li>
                <li className='p-4 cursor-pointer hover:text-gray-400' onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar