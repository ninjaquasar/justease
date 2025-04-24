import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Banner from '../../components/Header/Banner';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <header className="px-44">
                <Navbar></Navbar>
            </header>
            <main className="px-44 space-y-24">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Root;