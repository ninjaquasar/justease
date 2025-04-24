import React from 'react';
import SimpleParallax from 'simple-parallax-js';

const LawyerDetailCard = ({ lawyer }) => {
    const { profilePicture, name, licenseId, speciality, experience, fee } = lawyer
    return (
        <div className="p-8 rounded-2xl border border-neutral-700 flex items-center gap-x-6">
            <div className="lawyer-picture-xl w-80 aspect-square">
                <SimpleParallax orientation='down' scale={1.2} delay={0.4} transition='cubic-bezier(0,0,0,0.4)'>
                    <img src={profilePicture} alt="Profile Picture" className="rounded-2xl w-full h-full" />
                </SimpleParallax>
            </div>
            <div className="lawyer-contentical-info space-y-4">
                <p className="text-primary bg-green-950/80 px-4 py-2 font-medium rounded-full w-fit">{experience}+ Years Experience</p>
                <h2 className="text-4xl font-bold">{name}</h2>
                <div className="flex gap-x-10 font-medium">
                    <p>{speciality}</p>
                    <p className="flex gap-x-2"><span>&reg;</span>License No: {licenseId}</p>
                </div>
                <div className="flex gap-x-4">
                    <h6 className="text-lg font-bold">Availability:</h6>
                    {/* <div className="flex gap-x-4">
                        {
                            availability.map(singleAvailability => <p key={singleAvailability} className="bg-neutral-800 px-4 py-2 font-medium text-sm rounded-full">{singleAvailability}</p>)
                        }
                    </div> */}
                </div>
                <div className="flex gap-x-4 text-lg font-bold">
                    <h6>Consultation Fee:</h6>
                    <h6 className="text-primary">৳{fee}</h6>
                </div>
            </div>
        </div>
    );
};

export default LawyerDetailCard;