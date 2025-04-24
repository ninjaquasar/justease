import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

const Root = () => {
    return (
        <ScrollToTop>
            <ToastContainer></ToastContainer>
            <header className="px-4 md:px-44">
                <Navbar></Navbar>
            </header>
            <main className="px-4 lg:px-44 space-y-32 lg:space-y-24">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </ScrollToTop>
    )
}

export default Root;