import React from 'react';
import productHeroBg from '../../assets/product_hero_bg.jpg';

const ShopHero = () => {
    return (
        <div className="w-full overflow-hidden flex items-center px-4 py-5 lg:py-10">
            {/* Background Image */}
            <div className='relative w-full max-w-[1820px] h-[400px] md:h-[500px] mx-auto flex items-center rounded-[25px] overflow-hidden'>
                <div className="absolute inset-0 z-0">
                    <img
                        src={productHeroBg}
                        alt="Premium Mobile Cases"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Gradient Overlay for text readability on mobile if needed, though design looks clean */}
                    <div className="absolute inset-0 bg-linear-to-r from-gray-100/10 via-gray-100/30 to-gray-200/50 md:hidden"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex justify-end">
                    {/* Text Content (Right Side) */}
                    <div className="w-full md:w-1/2 lg:w-[45%] text-left md:text-left text-gray-900 bg-white/80 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
                        <h1 className="text-4xl md:text-5xl xl:text-[70px] font-black mb-4 leading-tight tracking-tight uppercase text-gray-900">
                            Premium <br /> Mobile Cases
                        </h1>
                        <p className="text-gray-600 text-lg xl:text-4xl font-medium mb-8 leading-relaxed">
                            Protect Your Style. <br />
                            Explore Our New Collection.
                        </p>

                        <button className="group relative inline-flex items-center gap-3 px-8 py-3 btn-primary text-white font-bold text-lg shadow-lg hover:bg-[#046E73] transition-all duration-300">
                            <span className="relative z-10">SHOP NOW</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopHero;
