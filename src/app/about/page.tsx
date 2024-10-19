import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const About: React.FC = () => {
    const services = [
        { title: 'Rendering', icon: '/images/rendering.jpg' },
        { title: 'Gardening', icon: '/images/Gardening.jpg' },
        { title: 'Jet Washing', icon: '/images/jetwashing.jpg' },
        { title: 'Electrical Work', icon: '/images/electrical.jpg' },
        { title: 'Plumbing', icon: '/images/plumbing.jpg' },
        { title: 'CCTV Installation', icon: '/images/cctv.jpg' },
    ];

    return (
        <>
            <Head>
                <title>About Us | Homeniser</title>
                <meta name="description" content="Learn more about Homeniser, a home services company providing top-quality services in London." />
            </Head>

            <div className="flex flex-col min-h-screen"> {/* Add this wrapper */}
                <main className="flex-grow bg-gray-100"> {/* Add flex-grow to push footer down */}
                    {/* Hero Section */}
                    <section className="max-w-7xl mx-auto text-center mb-16 px-6 pt-16">
                        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">About Homeniser</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Your trusted home services provider in London, delivering top-notch, affordable services with a commitment to customer satisfaction since 2019.
                        </p>
                    </section>

                    {/* Our Story Section */}
                    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-16 bg-white shadow-md rounded-lg mb-16">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Homeniser was founded in 2019 by <strong>vik</strong> with a mission to bridge the gap between quality and affordability in home services. We began as a small team dedicated to providing reliable services, and have since grown into a trusted name in the London area.
                            </p>
                        </div>
                        <div className="relative h-64 md:h-auto">
                            <Image
                                src='/images/homeniserlogo.jpg'
                                alt="Our Story - Homeniser"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="bg-gray-200 py-16">
                        <div className="max-w-7xl mx-auto text-center mb-12 px-6">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                From small repairs to large-scale projects, we cover all your home needs.
                            </p>
                        </div>

                        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                                    <div className="relative w-40 h-40 mb-6">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                                    <p className="text-gray-600">
                                        Expert {service.title.toLowerCase()} services to keep your home running smoothly.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                {/* Footer */}
               
            </div>
        </>
    );
};

export default About;
