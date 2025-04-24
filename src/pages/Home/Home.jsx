import React from 'react';
import Banner from '../../components/Header/Banner';
import BestLawyers from '../../components/Main/BestLawyers';
import SuccessServices from '../../components/Main/SuccessServices';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <BestLawyers></BestLawyers>
            <SuccessServices></SuccessServices>
        </>
    )
}

export default Home;