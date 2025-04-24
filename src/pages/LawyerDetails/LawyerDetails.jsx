import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import LawyerDetailCard from '../../components/LawyerDetailCard/LawyerDetailCard';
import { CircleAlertIcon } from 'lucide-react';
import { addToStorage } from '../../utilities/handleStorage';

const LawyerDetails = () => {
    const lawyers = useLoaderData();
    const { id } = useParams();
    const lawyerId = parseInt(id);
    const wantedLawyer = lawyers.find(lawyer => lawyer.id === lawyerId);
    const navigate = useNavigate();
    return (
        <section className="space-y-8">
            <div className="p-20 rounded-2xl bg-neutral-900 border border-neutral-700 text-center space-y-4">
                <h2 className="text-4xl font-bold">Lawyer's Profile Details</h2>
                <p className="text-lg font-medium">JustEase lets you find and book trusted lawyers across Bangladesh in just a few clicks. Whether it's personal, corporate, or urgent matters - we've got your back. Say goodbye to legal stress and hello to smooth appointments.</p>
            </div>
            <LawyerDetailCard key={lawyerId} lawyer={wantedLawyer}></LawyerDetailCard>
            <div className="p-8 rounded-2xl border border-neutral-700 space-y-4">
                <h3 className="text-3xl font-bold text-center">Book an Appointment</h3>
                <div className="border border-neutral-700 border-dashed w-full"></div>
                <div className="flex justify-between items-center">
                    <h5 className="text-xl font-bold">Availability</h5>
                    <p className="text-primary bg-green-950/80 px-4 py-2 font-medium rounded-full w-fit">Lawyer Available Today</p>
                </div>
                <div className="border border-neutral-700/75 w-full"></div>
                <div className="px-4 py-2 flex gap-x-2 items-center bg-[#44310099] text-[#ffc107] rounded-full w-fit">
                    <CircleAlertIcon size={18}></CircleAlertIcon> Due to high patient volume, we're currently accepting appointments for only today. We appreciate your understanding and co-operation.
                </div>
                <div className="p-6">
                    <button type="button" className="w-full px-5 py-4 rounded-full text-center text-xl font-bold bg-primary border border-primary cursor-grenade hover:bg-transparent hover:text-primary active:-translate-y-1 transition-transform" onClick={() => addToStorage(wantedLawyer.id, wantedLawyer.name, navigate)}>
                        Book Appointment Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LawyerDetails;