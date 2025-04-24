import { Flip, Zoom, toast } from "react-toastify";

const getStoredLawyer = () => {
    const storedLawyerText = localStorage.getItem("appointmentList");
    return storedLawyerText ? JSON.parse(storedLawyerText) : [];
}

const addToStorage = (id, name, navigate) => {
    const storedLawyer = getStoredLawyer();
    if (storedLawyer.includes(id)) {
        toast.error("Appointment already booked!", {
            position: "top-right",
            theme: "dark",
            autoClose: 3000,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            transition: Zoom
        });
    }
    else {
        storedLawyer.push(id);
        const stringifiedData = JSON.stringify(storedLawyer);
        localStorage.setItem("appointmentList", stringifiedData);
        toast.success(`Booked an Appointment for ${name}`, {
            position: "top-right",
            theme: "dark",
            autoClose: 3250,
            closeOnClick: true,
            hideProgressBar: false,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            transition: Flip
        });
        navigate('/bookings');
    }
}

const removeFromStorage = (id) => {
    const storedLawyersText = localStorage.getItem('appointmentList');
    const storedLawyersList = JSON.parse(storedLawyersText);
    const storedLawyerIndex = storedLawyersList.findIndex(lawyerId => lawyerId === id);
    storedLawyersList.splice(storedLawyerIndex, 1);
    localStorage.removeItem('appointmentList');
    localStorage.setItem('appointmentList', JSON.stringify(storedLawyersList));
}

export { addToStorage, removeFromStorage };