import React from 'react';
import screenProtector from '../../assets/productpage/bottom/scree_protector.png';
import lensProtector from '../../assets/productpage/bottom/lens.png';
import mobileHolder from '../../assets/productpage/bottom/mobile_holder.png';

const promos = [
    {
        title: "Screen Protector",
        image: screenProtector,
        link: "/categories"
    },
    {
        title: "Lens Protector",
        image: lensProtector,
        link: "/categories"
    },
    {
        title: "Mobile Holder",
        image: mobileHolder,
        link: "/categories"
    }
];

const AccessoryPromos = () => {
    return (
        <div className="w-full max-w-[1820px] mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {promos.map((promo, index) => (
                    <div
                        key={index}
                        className="group relative h-[250px] md:h-[320px] rounded-[30px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={promo.image}
                                alt={promo.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Dark Overlay/Gradient */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
                            {/* Radial gradient for more depth */}
                            <div className="absolute inset-0 bg-radial-from-b from-black/80 to-transparent opacity-80"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide drop-shadow-md text-center px-4">
                                {promo.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccessoryPromos;
