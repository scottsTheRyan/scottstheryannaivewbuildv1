import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import profile from '../assets/profile.jpeg';
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#FBFCFE] text-[#838384]'>
            <div>
                <img src={profile} alt="profile image" style={{height: '62px', width: '70px', borderRadius: "50%", display: "block"}}/>
            </div>

            {/* menu */}
               <ul className= 'hidden md:flex'>
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            about
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                            skills
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>
                            projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            contact
                        </Link>
                    </li>
                </ul>


            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

             {/* Mobile menu */}
            <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#FBFCFE] flex flex-col justify-center items-center'}>

                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                            home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {''}
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                            about
                        </Link></li>
                <li className='py-6 text-4xl'>
                    {''}
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                            skills
                        </Link></li>
                <li className='py-6 text-4xl'>
                    {''}
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                            projects
                        </Link></li>
                <li className='py-6 text-4xl'>
                    {''}
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                            contact
                        </Link></li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#838384]'href="https://www.linkedin.com/in/scottstheryan/">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#838384]'href="https://github.com/scottsTheRyan">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                   </ul>
            </div>

        </div>
    )
}

export default Navbar
