import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const BestLawyers = () => {
    const lawyersData = useLoaderData();
    const [ showAll, setShowAll ] = useState(false);
    return (
        <section id="best-lawyers" className="space-y-8">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold">Our Best Lawyers</h2>
                <p className="mx-auto lg:w-3/4">JustEase lets you find and book trusted lawyers across Bangladesh in just a few clicks. Whether it's personal, corporate, or urgent matters - we've got your back. Say goodbye to legal stress and hello to smooth appointments. Here's our top 10+ lawyers who helps to bring justice for you.</p>
            </div>
            <div className="lawyers-container grid grid-cols-1 2xl:grid-cols-2 gap-16">
                {
                    lawyersData.map(lawyer => {
                        return (!showAll && lawyer.id <= 6) || showAll ? <LawyerCard key={lawyer.id} lawyer={lawyer}></LawyerCard> : ''
                    })
                }
            </div>
            <div className="text-center">
                <button type="button" className="text-xl border border-green-900 hover:text-primary bg-primary hover:bg-transparent font-bold px-6 py-3 rounded-full cursor-grenade active:-translate-y-1 transition-transform" onClick={() => setShowAll(!showAll)}>
                    Show {showAll ? 'Less' : 'All'} Lawyers
                </button>
            </div>
        </section>
    )
}

const LawyerCard = ({lawyer}) => {
    const { id, profilePicture, name, speciality, licenseId, isAvailable, experience } = lawyer;
    // const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const dateObj = new Date();
    // const today = weekdays[dateObj.getDay()];
    // const isAvailable = availability.includes(today);
    return (
        <div className="lawyer-card flex max-lg:flex-col gap-y-6 items-center justify-between p-6 rounded-3xl border border-neutral-500">
            <div className="lawyer-card-thumb w-4/5 lg:w-[30%]">
                <img src={profilePicture} alt="Thumbnail" className="rounded-2xl w-full aspect-square" loading='lazy' />
            </div>
            <div className="lawyer-card-content space-y-4 w-full lg:w-3/5">
                <div className="space-y-2">
                    <div className="flex gap-x-4">
                        <p className={`${isAvailable ? "text-primary bg-green-950/80" : "text-error bg-error/20"} px-4 py-1 font-medium text-sm rounded-full`}>{isAvailable ? 'Available' : 'Unavailable'}</p>
                        <p className="text-primary bg-green-950/80 px-4 py-1 font-medium text-sm rounded-full">{experience}+ Years Experience</p>
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-2xl font-extrabold">{name}</h4>
                        <h6 className="text-lg font-medium">{speciality}</h6>
                        <p className="flex gap-x-2"><span>&reg;</span>License No: {licenseId}</p>
                    </div>
                </div>
                <Link to={`/lawyers/${id}`}>
                    <button type="button" className="w-full text-primary border border-green-900 hover:text-text hover:bg-primary font-bold py-2 rounded-full cursor-grenade active:-translate-y-1 transition-transform">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default BestLawyers;