import React from 'react';

export default function Success() {
    const successServices = [
        {
            "id": 1,
            "image": "https://i.ibb.co.com/JWQHM2xX/lawyers.png",
            "count": 198,
            "topic": "Lawyers"
        },
        {
            "id": 2,
            "image": "https://i.ibb.co.com/GfdKNb90/reviews.png",
            "count": 484,
            "topic": "Reviews"
        },
        {
            "id": 3,
            "image": "https://i.ibb.co.com/spLggsg0/cases.png",
            "count": 1962,
            "topic": "Cases Initiated"
        },
        {
            "id": 4,
            "image": "https://i.ibb.co.com/twxW3K11/staffs.png",
            "count": 288,
            "topic": "Staffs"
        }
    ];
    return (
        <section id="success-services" className="space-y-8">
            <div className="space-y-4 text-center">
                <h2 className="text-4xl font-extrabold">We Provide Best Law Services</h2>
                <p>JustEase lets you find and book trusted lawyers across Bangladesh in just a few clicks. Whether it's personal, corporate, or urgent matters - we've got your back.</p>
            </div>
            <div className="services-container grid grid-cols-4 gap-6">
                {
                    successServices.map(successService => <ServiceCard key={successService.id} service={successService}></ServiceCard>)
                }
            </div>
        </section>
    )
}


const ServiceCard = ({service}) => {
    return (
        <div className="service-card space-y-6 py-10 px-14 rounded-2xl bg-neutral-900 border border-neutral-700">
            <img src={service.image} alt="Service Image" loading='lazy' />
            <h1 className="text-5xl font-extrabold">{service.count}+</h1>
            <h5 className="text-xl font-medium">Total {service.topic}</h5>
        </div>
    )
}