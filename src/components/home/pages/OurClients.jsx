import React from 'react';
import { FaStar } from 'react-icons/fa';

const OurClients = () => {

    const clients = [
        { name: 'Google', logo: '/images/google.png', testimonial: 'Innovative and reliable services!' },
        { name: 'Amazon', logo: '/images/amazon.png', testimonial: 'Exceptional shopping experience!' },
        { name: 'Daraz', logo: '/images/daraz.png', testimonial: 'Convenient and user-friendly platform!' },
        { name: 'PayPal', logo: '/images/paypal.png', testimonial: 'Secure and fast transactions!' },
    ];
    
    return (
        <div className="py-10 mt-6">
            <div className="container mx-auto px-6">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-8 text-emerald-800">Our Clients</h1>

                {/* Client Testimonials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-1"
                        >
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-32 h-32 object-contain mb-4 transition-transform duration-300 transform hover:scale-110"
                                />
                                <h2 className="text-xl font-semibold mb-2">{client.name}</h2>
                                <p className="text-gray-700 mb-4">{client.testimonial}</p>
                                <div className="flex space-x-1 text-yellow-400 mb-2">
                                    <FaStar size={20} />
                                    <FaStar size={20} />
                                    <FaStar size={20} />
                                    <FaStar size={20} />
                                    <FaStar size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurClients;
