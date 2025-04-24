import React from 'react';

const Banner = () => {
    return (
        <section id="banner" className="px-2 lg:px-40 py-20 lg:py-44 mt-2 space-y-4 lg:space-y-8 relative bg-[url(https://i.ibb.co.com/mFDS2CB5/banner-image.jpg)] bg-cover bg-center text-green-700 rounded-3xl">
            <h1 className="text-2xl lg:text-5xl font-extrabold text-center md:w-3/4 md:mx-auto">Your Gateway to Legal Help - Fast, Easy & Reliable. Justice has Ease now.</h1>
            <p className="font-semibold text-center mx-auto w-5/6 lg:text-lg">JustEase lets you find and book trusted lawyers across Bangladesh in just a few clicks. Whether it's personal, corporate, or urgent matters - we've got your back. Say goodbye to legal stress and hello to smooth appointments.</p>
        </section>
    )
}

export default Banner;