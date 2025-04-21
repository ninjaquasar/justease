import React from 'react';
import { NavLink } from 'react-router';

export default function Navbar() {
    return (
        <nav className="py-6 flex justify-between items-center">
            <div className="logo flex gap-x-4">
                <img src="https://i.ibb.co.com/9kvk40Lt/logo.png" alt="Logo" />
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-text via-green-200 to-primary bg-clip-text text-transparent" title="Justice has Ease">
                    JustEase
                </h3>
            </div>
            <ul className="nav-links flex gap-x-8 items-center font-medium text-xl">
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
                <button type="button" className="bg-primary hover:bg-transparent hover:text-primary border border-green-900 px-6 py-3 rounded-full text-xl font-bold cursor-grenade active:-translate-y-1 transition-transform">
                    Contact Now
                </button>
            </div>
        </nav>
    )
}