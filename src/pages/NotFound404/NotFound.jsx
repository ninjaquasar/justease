import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Link, Outlet } from 'react-router';
import { Home } from 'lucide-react';

export default function NotFound404() {
    return (
        <>
            <header className="px-44">
                <Navbar></Navbar>
            </header>
            <main className="px-44 flex flex-col gap-y-10 items-center justify-center min-h-[85vh]">
                <div className="p-4 rounded-2xl bg-neutral-900 drop-shadow-lg drop-shadow-neutral-950">
                    <video src="https://ik.imagekit.io/riaurko/404%20Lost%20In%20Space.mp4" className="w-sm rounded-2xl" autoPlay loop muted></video>
                </div>
                <div className="space-y-4 text-center">
                    <h2 className="text-4xl font-bold text-rose-600">404 - Page Not Found</h2>
                    <p className="text-xl font-medium">Oops! Looks like you're lost in the internet-verse. Wanna explore something interesting — visit the world's <a href="https://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank" className="text-primary underline underline-offset-2 cursor-grenade">first website</a> ever. Or you can just:</p>
                    <Link to='/' className="px-6 py-3 flex items-center place-self-center gap-x-2 text-2xl font-semibold bg-primary border border-green-900 rounded-xl w-fit cursor-grenade hover:bg-transparent hover:text-primary active:-translate-y-1 transition-transform"><Home size={28}></Home> Go Back Home</Link>
                </div>
            </main>
        </>
    )
}