
import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className='fixed w-full h-20 z-50 bg-gray-900 text-white py-4 px-8 shadow-lg '>
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link className='text-3xl font-bold cursor-pointer' to="/home">
                        DETROIT
                        <span className='text-pink-600 text-2xl '>ARCHETECT</span>
                    </Link>
                </div>
                <div className='gap-5 hidden md:flex'>
                    <Link
                        to="/home"
                        className='relative text-white/80 px-2 transition duration-350 hover:text-pink-600 group cursor-pointer'
                    >
                        <span className="group-hover:text-pink-600">
                            Home
                            <span className='absolute left-0 -bottom-1 h-1 bg-pink-600 transition-all duration-350 w-0 group-hover:w-full'></span>
                        </span>
                    </Link>
                    <Link
                        to="/about"
                        className='relative text-white/80 px-2 transition duration-350 hover:text-pink-600 group cursor-pointer'
                    >
                        <span className="group-hover:text-pink-600">
                            About
                            <span className='absolute left-0 -bottom-1 h-1 bg-pink-600 transition-all duration-350 w-0 group-hover:w-full'></span>
                        </span>
                    </Link>
                    <Link
                        to="/projects"
                        className='relative text-white/80 px-2 transition duration-350 hover:text-pink-600 group cursor-pointer'
                    >
                        <span className="group-hover:text-pink-600">
                            Projects
                            <span className='absolute left-0 -bottom-1 h-1 bg-pink-600 transition-all duration-350 w-0 group-hover:w-full'></span>
                        </span>
                    </Link>
                    <Link
                        to="/team"
                        className='relative text-white/80 px-2 transition duration-350 hover:text-pink-600 group cursor-pointer'
                    >
                        <span className="group-hover:text-pink-600">
                            Team
                            <span className='absolute left-0 -bottom-1 h-1 bg-pink-600 transition-all duration-350 w-0 group-hover:w-full'></span>
                        </span>
                    </Link>
                    <Link
                        to="/contact"
                        className='relative text-white/80 px-2 transition duration-350 hover:text-pink-600 group cursor-pointer'
                    >
                        <span className="group-hover:text-pink-600">
                            Contact
                            <span className='absolute left-0 -bottom-1 h-1 bg-pink-600 transition-all duration-350 w-0 group-hover:w-full'></span>
                        </span>
                    </Link>
                </div>

                {/* Mobile view Buttons */}
                <div className='md:hidden flex items-center gap-4'>
                    {
                        showMenu ?
                            <button
                                className='text-2xl cursor-pointer'
                                type="button"
                                aria-label="Close menu"
                                onClick={() => setShowMenu(false)}
                            >
                                <FaXmark size={24} />
                            </button>
                            :
                            <button
                                className='text-2xl cursor-pointer'
                                type="button"
                                aria-label="Open menu"
                                onClick={() => setShowMenu(true)}
                            >
                                <FaBars size={24} />
                            </button>
                    }
                </div>
            </div>

            {/* Mobile menu */}
            {
                showMenu && (
                    <div className='flex justify-center text-center flex-col gap-5 md:hidden mt-4 bg-gray-900 p-4 rounded shadow-lg'>
                        <Link
                            to="/home"
                            className='relative text-white/80 px-2 transition duration-350 active:text-pink-600 group cursor-pointer'
                            onClick={() => setShowMenu(false)}
                        >
                            <span className="group-active:text-pink-600">
                                Home
                            </span>
                        </Link>
                        <Link
                            to="/about"
                            className='relative text-white/80 px-2 transition duration-350 active:text-pink-600 group cursor-pointer'
                            onClick={() => setShowMenu(false)}
                        >
                            <span className="group-active:text-pink-600">
                                About

                            </span>
                        </Link>
                        <Link
                            to="/Projects"
                            className='relative text-white/80 px-2 transition duration-350 active:text-pink-600 group cursor-pointer'
                            onClick={() => setShowMenu(false)}
                        >
                            <span className="group-active:text-pink-600">
                                Projects

                            </span>
                        </Link>
                        <Link
                            to="/team"
                            className='relative text-white/80 px-2 transition duration-350 active:text-pink-600 group cursor-pointer'
                            onClick={() => setShowMenu(false)}
                        >
                            <span className="group-active:text-pink-600">
                                Team

                            </span>
                        </Link>
                        <Link
                            to="/contact"
                            className='relative text-white/80 px-2 transition duration-350 active:text-pink-600 group cursor-pointer'
                            onClick={() => setShowMenu(false)}
                        >
                            <span className="group-active:text-pink-600">
                                Contact

                            </span>
                        </Link>
                    </div>
                )
            }

        </nav>
    )
}

export default Navbar
