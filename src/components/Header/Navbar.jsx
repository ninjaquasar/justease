import { SquareStackIcon } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [mobileMenuOpened, setmobileMenuOpened] = useState(false);
    return (
        <nav className="py-6 flex justify-between items-center">
            <div className="mobile-menu relative lg:hidden">
                <button type="button" className="p-2 cursor-grenade rounded-full hover:bg-neutral-800" onClick={() => setmobileMenuOpened(!mobileMenuOpened)}>
                    <SquareStackIcon size={36}></SquareStackIcon>
                </button>
                <ul className={`mobile-menu-links ${mobileMenuOpened ? 'flex flex-col': 'hidden'} py-4 rounded-2xl min-w-44 bg-neutral-950 z-20 absolute top-14 left-0 font-medium text-xl`}>
                    <li className="hover:bg-neutral-900 cursor-grenade pl-4 py-2">
                        <NavLink to="/" className="cursor-grenade">Home</NavLink>
                    </li>
                    <li className="hover:bg-neutral-900 cursor-grenade pl-4 py-2">
                        <NavLink to="/bookings" className="cursor-grenade">Bookings</NavLink>
                    </li>
                    <li className="hover:bg-neutral-900 cursor-grenade pl-4 py-2">
                        <NavLink to="/blogs" className="cursor-grenade">Blogs</NavLink>
                    </li>
                    <li className="hover:bg-neutral-900 cursor-grenade pl-4 py-2">
                        <NavLink to="/contact" className="cursor-grenade">Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="logo flex items-center gap-x-4">
                <img src="https://i.ibb.co.com/9kvk40Lt/logo.png" alt="Logo" className="lg:w-12 lg:h-12 w-8 h-8" />
                <h3 className="pb-2 text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-text via-green-200 to-primary bg-clip-text text-transparent" title="Justice has Ease">
                    JustEase
                </h3>
            </div>
            <ul className="nav-links hidden lg:flex lg:gap-x-8 lg:items-center font-medium text-xl">
                <li>
                    <NavLink to="/" className="px-4 py-3 hover:bg-neutral-800 rounded-t-lg rounded-b-md cursor-grenade">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/bookings" className="px-4 py-3 hover:bg-neutral-800 rounded-t-lg rounded-b-md cursor-grenade">My Bookings</NavLink>
                </li>
                <li>
                    <NavLink to="/blogs" className="px-4 py-3 hover:bg-neutral-800 rounded-t-lg rounded-b-md cursor-grenade">Blogs</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="px-4 py-3 hover:bg-neutral-800 rounded-t-lg rounded-b-md cursor-grenade">Contact</NavLink>
                </li>
            </ul>
            <div className="contact-button-container">
                <button type="button" className="bg-primary hover:bg-transparent hover:text-primary border border-green-900 px-4 lg:px-6 py-1.5 lg:py-3 rounded-full md:text-xl font-bold cursor-grenade active:-translate-y-1 transition-transform">
                    Contact Now
                </button>
            </div>
        </nav>
    )
}

export default Navbar;