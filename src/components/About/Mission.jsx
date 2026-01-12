import React from 'react';
import missionImg from '../../assets/mission_lifestyle.png';

const Mission = () => {
    return (
        <div className="w-full bg-gray-50 py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">The Mission</h2>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Side */}
                    <div className="relative w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                        {/* Mobile: Image comes second (order-2) or first? Screenshot 2 shows Text "Why We Started" then text paragraphs. 
                        Wait, typically "Why We Started" is the header for the text section. 
                        In the desktop screenshot, Image is Left, Text "Why We Started" is Right.
                        In Mobile, usually it stacks. The user said "responsive same as like in the second one pic".
                        The second pic shows: Header "Why We Started?", then paragraph "We know the frustration...". 
                        The image is NOT visible in that mobile crop. It might be above or below. 
                        I will stick to Image First (Order-1) for standard mobile flow, or Text First if that's preferred.
                        Actually, looking at the crop again, it seems it's just the text section shown. 
                        Let's keep standard stacking: Image then Text on mobile is common, but sometimes Text then Image.
                        Let's do Image Top (default) -> Text Bottom. 
                     */}
                        <div className="relative">
                            {/* Geometric Shape Background */}
                            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-400 rotate-45 opacity-20 rounded-3xl z-0"></div>
                            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-400 rotate-12 -z-0 rounded-3xl"></div>
                            {/* Mobile geometric shapes? Maybe simpler or hidden to save space/clutter */}
                            <div className="lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-400/20 rotate-6 rounded-3xl z-0"></div>

                            {/* Actual Image */}
                            <img
                                src={missionImg}
                                alt="Hands holding power bank"
                                className="relative z-10 rounded-3xl shadow-xl w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
                        <h3 className="text-3xl font-bold mb-6">Why We Started?</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We know the frustration of buying a charging cable that breaks in a week, or a power bank that damages your phone's battery. The market is flooded with counterfeits and low-quality generics.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We built [Store Name] to change that. We are a team of tech enthusiasts dedicated to bringing you 100% original products from the world's best brands like Anker, Baseus, and Samsung. If we wouldn't use it on our own devices, we won't sell it to you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
