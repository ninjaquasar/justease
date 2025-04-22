import React from 'react';
import { useLoaderData } from 'react-router';

export default function BestLawyers() {
    const lawyersData = useLoaderData();
    return (
        <section id="best-lawyers" className="space-y-8">
            <div className="space-y-4 text-center">
                <h2 className="text-4xl font-bold">Our Best Lawyers</h2>
                <p className="mx-auto w-3/4">JustEase lets you find and book trusted lawyers across Bangladesh in just a few clicks. Whether it's personal, corporate, or urgent matters - we've got your back. Say goodbye to legal stress and hello to smooth appointments. Here's our top 10+ lawyers who helps to bring justice for you.</p>
            </div>
            <div className="lawyers-container grid grid-cols-1 2xl:grid-cols-2 gap-16">
                {
                    lawyersData.map(lawyer => <LawyerCard key={lawyer.id} lawyer={lawyer}></LawyerCard>)
                }
            </div>
            <div className="text-center">
                <button type="button" className="border border-green-900 hover:text-primary bg-primary hover:bg-transparent font-bold px-6 py-3 rounded-full cursor-grenade active:-translate-y-1 transition-transform">
                    Show All Lawyers
                </button>
            </div>
        </section>
    )
}

const LawyerCard = ({lawyer}) => {
    const { profilePicture, name, speciality, licenseId, isAvailable, experience } = lawyer;
    return (
        <div className="lawyer-card flex items-center justify-between p-6 rounded-3xl border border-neutral-500">
            <div className="lawyer-card-thumb w-[30%]">
                <img src={profilePicture} alt="Thumbnail" className="rounded-2xl w-full aspect-square" loading='lazy' />
            </div>
            <div className="lawyer-card-content space-y-4 w-3/5">
                <div className="space-y-2">
                    <div className="flex gap-x-4">
                        <p className="text-primary bg-primary/15 px-4 py-1 font-medium text-sm rounded-full">{isAvailable ? 'Available' : 'Unavailable'}</p>
                        <p className="text-primary bg-primary/15 px-4 py-1 font-medium text-sm rounded-full">{experience}+ Years Experience</p>
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-2xl font-extrabold">{name}</h4>
                        <h6 className="text-lg font-medium">{speciality}</h6>
                        <p className="flex gap-x-2"><span>&reg;</span>License No: {licenseId}</p>
                    </div>
                </div>
                <button type="button" className="w-full text-primary border border-green-900 hover:text-text hover:bg-primary font-bold py-2 rounded-full cursor-grenade drop-shadow-lg drop-shadow-black active:drop-shadow-none active:scale-95 transition-transform">
                    View Details
                </button>
            </div>
        </div>
    )
}