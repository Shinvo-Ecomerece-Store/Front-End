import React from 'react';
import { SiSamsung, SiApple, SiGoogle } from "react-icons/si";

const Brands = () => {
    const brands = [
        { id: 1, icon: <SiSamsung className="text-3xl md:text-4xl text-blue-700" />, name: "SAMSUNG" },
        { id: 2, icon: <SiGoogle className="text-3xl md:text-4xl text-red-500" />, name: "Pixel" },
        { id: 3, icon: <SiApple className="text-3xl md:text-4xl text-black" />, name: "Apple" },
        { id: 4, icon: <span className="text-2xl md:text-3xl font-bold text-green-600">UGREEN</span>, name: "UGREEN" },
        { id: 5, icon: <span className="text-2xl md:text-3xl font-bold text-black">soundcore</span>, name: "soundcore" },
        { id: 6, icon: <span className="text-2xl md:text-3xl font-bold text-black">JOYROOM</span>, name: "JOYROOM" },
        { id: 7, icon: <span className="text-2xl md:text-3xl font-bold text-black">baseus</span>, name: "baseus" },
        { id: 8, icon: <span className="text-3xl md:text-4xl font-bold text-blue-500">ANKER</span>, name: "ANKER" },
        { id: 9, icon: <span className="text-2xl md:text-3xl font-bold text-blue-400">SOUNDPEATS</span>, name: "SOUNDPEATS" },
    ];

    return (
        <div className="w-full bg-secondary-bg py-8 overflow-hidden">
            <div className="flex w-[200%] animate-marquee">
                {/* First Set */}
                <div className="flex w-1/2 justify-around items-center gap-8 md:gap-16 px-4">
                    {brands.map((brand) => (
                        <div key={brand.id} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                            {brand.icon}
                        </div>
                    ))}
                </div>
                {/* Duplicate Set for Seamless Loop */}
                <div className="flex w-1/2 justify-around items-center gap-8 md:gap-16 px-4">
                    {brands.map((brand) => (
                        <div key={`dup-${brand.id}`} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                            {brand.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Brands;
