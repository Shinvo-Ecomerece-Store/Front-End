import React from 'react';

const brands = [
    "Samsung",
    "Vivo",
    "Xiaomi",
    "iPhone",
    "Google Pixel"
];

const ChooseDevice = () => {
    return (
        <div className="w-full max-w-[1820px] mx-auto py-12 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
                Choose Your Device
            </h2>

            <div className="w-full flex flex-wrap justify-center gap-6">
                {brands.map((brand) => (
                    <button
                        key={brand}
                        className="px-8 py-4 flex-1 bg-white border border-gray-100 rounded-2xl shadow-md transition-all duration-300 text-lg font-medium text-gray-800 hover:shadow-[0_0px_2px_2px_rgba(34,211,238,0.5)] hover:scale-99"
                    >
                        {brand}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChooseDevice;
