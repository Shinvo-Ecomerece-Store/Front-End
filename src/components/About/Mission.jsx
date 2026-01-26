import React from 'react';
import missionImg from '../../assets/mission_lifestyle.png';

const Mission = () => {
    return (
        <div className="w-full bg-gray-50 py-12 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16">The Mission</h2>

                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[100px]">
                    {/* Image Side */}
                    <div className="relative w-full lg:w-[50%] flex justify-center order-2 lg:order-1">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            {/* Geometric Shape Background */}
                            <div className="hidden lg:block w-full h-full bg-[#02D5E0] rotate-45 rounded-3xl z-0 absolute top-0 left-0"></div>
                            <img
                                src={missionImg}
                                alt="Hands holding power bank"
                                className="relative lg:absolute top-0 left-0 z-10 rounded-3xl shadow-xl w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-[50%] order-1 lg:order-2 text-center lg:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Why We Started?</h3>
                        <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                            We know the frustration of buying a charging cable that breaks in a week, or a power bank that damages your phone's battery. The market is flooded with counterfeits and low-quality generics.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                            We built [Store Name] to change that. We are a team of tech enthusiasts dedicated to bringing you 100% original products from the world's best brands like Anker, Baseus, and Samsung. If we wouldn't use it on our own devices, we won't sell it to you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
