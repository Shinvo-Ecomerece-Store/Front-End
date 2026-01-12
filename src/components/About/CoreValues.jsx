import React from 'react';
import { FaCheckCircle, FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa';

const CoreValues = () => {
    const values = [
        {
            id: 1,
            icon: <FaCheckCircle className="text-4xl text-black" />,
            title: "100% Original Guarantee",
            description: "We source directly from authorized distributors. No fakes, no copies, no A-Grade replicas. Just the real deal.",
            bg: "bg-cyan-400", // Special highlight for first one
            textColor: "text-black"
        },
        {
            id: 2,
            icon: <FaShieldAlt className="text-4xl text-cyan-400" />,
            title: "Tested for Quality",
            description: "Every product in our store is curated for durability and performance. We focus on gadgets that last.",
            bg: "bg-gray-100",
            textColor: "text-black"
        },
        {
            id: 3,
            icon: <FaTruck className="text-4xl text-cyan-400" />,
            title: "Fast Nationwide Shipping",
            description: "Your tech needs are urgent. We ensure your order is packed securely and shipped quickly to your doorstep.",
            bg: "bg-gray-100",
            textColor: "text-black"
        },
        {
            id: 4,
            icon: <FaHeadset className="text-4xl text-cyan-400" />,
            title: "Expert Support",
            description: "Not sure which charger fits your Pixel? Need a case for your iPhone? Our team is here to help you make the right choice.",
            bg: "bg-gray-100",
            textColor: "text-black"
        }
    ];

    return (
        <div className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
                <p className="text-gray-500 mb-16">Built on trust, curated for quality, and delivered with care.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value) => (
                        <div key={value.id} className={`${value.bg} rounded-3xl p-8 shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300`}>
                            <div className="bg-white p-4 rounded-full shadow-md mb-6 relative">
                                {/* Small checkmark badge for regular icons if needed, but main icon is enough */}
                                {value.icon}
                            </div>
                            <h3 className={`text-xl font-bold mb-4 ${value.textColor}`}>{value.title}</h3>
                            <p className={`text-sm leading-relaxed ${value.textColor === 'text-white' ? 'text-gray-100' : 'text-gray-600'}`}>
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
