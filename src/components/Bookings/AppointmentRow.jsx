import React from 'react';
import { removeFromStorage } from '../../utilities/handleStorage';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { HomeIcon } from 'lucide-react';

const AppointmentRow = ({ appointmentData }) => {
    
    const { id, name, speciality, fee } = appointmentData;
    const navigate = useNavigate();
    const handleCancelBtn = () => {
        removeFromStorage(id, name);
        navigate('/bookings');
    }
    return (
        <div className="p-8 space-y-4 w-full border border-neutral-700 rounded-3xl">
            <div className="flex max-lg:flex-col gap-y-4 justify-between items-center">
                <div className="space-y-3 max-lg:flex gap-x-12">
                    <h5 className="lg:text-xl font-bold">{name}</h5>
                    <h6 className="lg:text-lg font-medium text-neutral-300">{speciality}</h6>
                </div>
                <h6 className="text-lg font-medium text-neutral-300">Appoinment Fee: {fee} Taka</h6>
            </div>
            <div className="border border-neutral-700 border-dashed"></div>
            <button type="button" className="w-full px-5 py-2 lg:py-3 rounded-full border border-error text-error hover:bg-error hover:text-text active:-translate-y-1 transition-transform text-lg lg:text-2xl font-semibold text-center cursor-grenade" onClick={handleCancelBtn}>
                Cancel Appointment
            </button>
        </div>
    );
};

export default AppointmentRow;