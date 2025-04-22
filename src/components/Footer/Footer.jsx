import React from 'react';
import { NavLink } from 'react-router';

export default function Footer() {
    return (
        <footer className="px-20 py-24 flex flex-col gap-y-8 items-center bg-neutral-7 bg-text text-base">
            <div className="foot-logo flex gap-x-4">
                <img src="https://i.ibb.co.com/0pG0HQ37/footer-logo.png" alt="Logo" />
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-base via-green-900 to-primary bg-clip-text text-transparent">
                    JustEase
                </h3>
            </div>
            <ul className="foot-links flex gap-x-8 items-center font-medium text-xl">
                <li>
                    <NavLink to="/" className="px-4 py-3 hover:bg-neutral-300 rounded-lg cursor-grenade">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/bookings" className="px-4 py-3 hover:bg-neutral-300 rounded-lg cursor-grenade">My Bookings</NavLink>
                </li>
                <li>
                    <NavLink to="/blogs" className="px-4 py-3 hover:bg-neutral-300 rounded-lg cursor-grenade">Blogs</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="px-4 py-3 hover:bg-neutral-300 rounded-lg cursor-grenade">Contact</NavLink>
                </li>
            </ul>
            <div className="w-full border border-neutral-400 border-dashed"></div>
            <div className="social-icons flex gap-x-6">
                <a href="https://www.linkedin.com/in/riaurko/" target="_blank" className="cursor-grenade">
                    <img src="https://i.ibb.co.com/d0DgT5wY/linkedin.png" alt="LinkedIn" className="w-12 hover:-translate-y-2 hover:scale-105 transition-transform duration-200" />
                </a>
                <a href="https://github.com/riaurko" target="_blank" className="cursor-grenade">
                    <img src="https://i.ibb.co.com/JW68nLrG/github.png" alt="GitHub" className="w-12 hover:-translate-y-2 hover:scale-105 transition-transform duration-200" />
                </a>
                <a href="https://www.facebook.com/riaurko" target="_blank" className="cursor-grenade">
                    <img src="https://i.ibb.co.com/ksk23Z2s/facebook.png" alt="Facebook" className="w-12 hover:-translate-y-2 hover:scale-105 transition-transform duration-200" />
                </a>
                <a href="https://www.youtube.com/@riaurko" target="_blank" className="cursor-grenade">
                    <img src="https://i.ibb.co.com/Gfm2Zc23/youtube.png" alt="YouTube" className="w-12 hover:-translate-y-2 hover:scale-105 transition-transform duration-200" />
                </a>
                <a href="https://discordapp.com/users/1192212742636048486" target="_blank" className="cursor-grenade">
                    <img src="https://i.ibb.co.com/prkjWMGK/discord.png" alt="LinkedIn" className="w-12 hover:-translate-y-2 hover:scale-105 transition-transform duration-200" />
                </a>
                <a href="https://x.com/riaurko" target="_blank" className="cursor-grenade">
                    <img src="https://i.ibb.co.com/21pkB9hb/x-tweet.png" alt="X" className="w-12 hover:-translate-y-2 hover:scale-105 transition-transform duration-200" />
                </a>
            </div>
        </footer>
    )
}