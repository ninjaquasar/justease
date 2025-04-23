import React from 'react';

export default function Banner() {
    return (
        <section id="banner" className="px-40 py-44 mt-2 space-y-8 relative bg-[url(https://i.ibb.co.com/mFDS2CB5/banner-image.jpg)] bg-cover bg-center text-green-700">
            <h1 className="text-5xl font-extrabold text-center w-3/4 mx-auto">Your Gateway to Legal Help - Fast, Easy & Reliable. Justice has Ease now.</h1>
            <p className="font-semibold text-center mx-auto w-5/6 text-lg">JustEase lets you find and book trusted lawyers across Bangladesh in just a few clicks. Whether it's personal, corporate, or urgent matters - we've got your back. Say goodbye to legal stress and hello to smooth appointments.</p>
            {/* <div className="px-40 py-44 space-y-6 bg-gradient-to-r from-primary to-green-700 bg-clip-text text-transparent">
                
            </div> */}
        </section>
    )
}