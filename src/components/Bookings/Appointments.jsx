import React, { useState } from 'react';
import AppointmentRow from './AppointmentRow';
import { Link } from 'react-router';
import { HomeIcon } from 'lucide-react';

const Appointments = ({ appointmentsList }) => {
    const [noAppointments, setNoAppointments] = useState(true);
    if (appointmentsList.length > 0 && noAppointments )
        setNoAppointments(false);
    else if (appointmentsList.length < 1 && !noAppointments || !appointmentsList)
        setNoAppointments(true);
    return noAppointments ? (
        <div className="p-8 space-y-4 w-full border border-neutral-700 rounded-3xl">
            <h2 className="text-4xl font-extrabold text-center">No Appointments Booked</h2>
            <p className="text-lg font-medium text-center">Need help to book an appointment? Go to this page (Home) and find the perfect match for your case:</p>
            <Link to='/' className="px-6 py-3 flex items-center place-self-center gap-x-2 text-2xl font-semibold bg-primary border border-green-900 rounded-xl w-fit cursor-grenade hover:bg-transparent hover:text-primary active:-translate-y-1 transition-transform"><HomeIcon size={28}></HomeIcon> Go to Home</Link>
        </div>
    ) : (
        <section className="flex flex-col items-center gap-y-8 lg:gap-y-16">
            <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-center">My Today's Appointments</h2>
                <p className="text-center">JustEase lets you find and book trusted lawyers across Bangladesh in just a few clicks.</p>
            </div>
            {
                appointmentsList.map(appointment => <AppointmentRow key={appointment.id} appointmentData={appointment}></AppointmentRow>)
            }
        </section>
    );
};

export default Appointments;