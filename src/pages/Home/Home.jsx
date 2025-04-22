import React from 'react';
import Banner from '../../components/Header/Banner';
import BestLawyers from '../../components/Main/BestLawyers';
import Success from '../../components/Main/Success';

export default function Home() {
    return (
        <>
            <Banner></Banner>
            <BestLawyers></BestLawyers>
            <Success></Success>
        </>
    )
}