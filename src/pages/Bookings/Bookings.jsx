import React from 'react';
import { useLoaderData } from 'react-router';
import Appointments from '../../components/Bookings/Appointments';

const Bookings = () => {
    const lawyersData = useLoaderData();
    const appointmentsIdStr = localStorage.getItem("appointmentList");
    const appointmentsIdObj = JSON.parse(appointmentsIdStr);
    const appointments = [];
    if (appointmentsIdObj) {
        appointmentsIdObj.map(appointmentId => {
            const appointment = lawyersData.find(lawyerData => lawyerData.id === appointmentId);
            appointments.push(appointment);
        })
    }
    return (
        <>
            <Appointments appointmentsList={appointments}></Appointments>
        </>
    );
};

export default Bookings;