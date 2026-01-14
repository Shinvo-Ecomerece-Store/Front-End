import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaLock, FaShoppingBag } from 'react-icons/fa';
import chargerImg from '../../assets/bestsellers/charger.png';
import caseImg from '../../assets/bestsellers/case.png';
import holderImg from '../../assets/bestsellers/holder.png';

const Bestsellers = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const products = [
        {
            id: 1,
            name: 'UGREEN',
            description: 'Nexode 45w charger',
            image: chargerImg,
            thumbnails: [chargerImg, chargerImg],
        },
        {
            id: 2,
            name: 'Google Pixel',
            description: 'Transparent Magsafe case',
            image: caseImg,
            thumbnails: [caseImg, caseImg, caseImg],
        },
        {
            id: 3,
            name: 'Mobile holder',
            description: 'Suction Magnetic',
            image: holderImg,
            thumbnails: [holderImg, holderImg, holderImg],
        },
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    // Helper to determine position relative to active index
    const getPosition = (index) => {
        if (index === activeIndex) return 'center';
        if (index === (activeIndex - 1 + products.length) % products.length) return 'left';
        if (index === (activeIndex + 1) % products.length) return 'right';
        return 'hidden';
    };

    return (
        <div className="w-full max-w-[1920px] mx-auto py-10 flex flex-col items-center bg-white overflow-hidden">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Bestsellers</h2>

            <div className="relative w-full max-w-[1920px] h-[500px] min-[1300px]:h-[700px] flex items-center justify-center">

                {products.map((product, index) => {
                    const position = getPosition(index);
                    const isCenter = position === 'center';
                    const isLeft = position === 'left';
                    const isRight = position === 'right';

                    // Base classes for transition
                    let className = "absolute transition-all duration-500 ease-in-out flex flex-col items-center rounded-3xl p-6 shadow-xl ";

                    if (isCenter) {
                        className += "z-20 w-[350px] min-[430px]:w-[400px] min-[1300px]:w-[600px] h-[500px] min-[1300px]:h-[700px] bg-gradient-to-b from-cyan-100 to-cyan-400 scale-100 opacity-100";
                    } else if (isLeft) {
                        className += "z-10 w-[350px] min-[1300px]:w-[450px] h-[400px] min-[1300px]:h-[550px] bg-cyan-50 -translate-x-[350px] min-[1300px]:-translate-x-[500px] scale-90 opacity-80 blur-[1px]";
                    } else if (isRight) {
                        className += "z-10 w-[350px] min-[1300px]:w-[450px] h-[400px] min-[1300px]:h-[550px] bg-cyan-50 translate-x-[350px] min-[1300px]:translate-x-[500px] scale-90 opacity-80 blur-[1px]";
                    } else {
                        className += "hidden";
                    }

                    return (
                        <div key={product.id} className={className}>
                            {/* Card Content */}
                            <div className="text-center mb-4">
                                <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                                <p className="text-gray-600 font-medium">{product.description}</p>
                            </div>

                            {/* Main Image */}
                            <div className="relative flex-grow flex items-center justify-center w-full">
                                {/* Decorative Circle for center card */}
                                {isCenter && <div className="absolute w-48 h-48 bg-white/30 rounded-full blur-xl"></div>}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={`relative object-contain transition-all duration-500 ${isCenter ? 'h-64 min-[1300px]:h-96 drop-shadow-2xl' : 'h-40 min-[1300px]:h-60 grayscale-[0.3]'}`}
                                />
                            </div>

                            {/* Thumbnails (Only Show on Center) */}
                            <div className={`flex gap-3 mt-4 h-16 transition-opacity duration-300 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                                {product.thumbnails.map((thumb, i) => (
                                    <div key={i} className="w-14 h-14 bg-white rounded-xl p-1 shadow-sm border border-gray-100">
                                        <img src={thumb} className="w-full h-full object-contain" alt="thumb" />
                                    </div>
                                ))}
                            </div>

                            {/* Side Actions (Only visible on side cards - mocked based on design) */}
                            {!isCenter && (
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                                    <div className="w-8 h-8 rounded-full bg-black"></div>
                                    <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                                        <FaLock className="text-gray-400 text-xs" />
                                    </div>
                                </div>
                            )}

                            {/* View Details Button (Only on Center) */}
                            {isCenter && (
                                <button className="absolute -bottom-5 bg-black text-white px-8 py-2 rounded-full font-medium shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                                    View details
                                </button>
                            )}
                        </div>
                    );
                })}

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-[10%] sm:left-[20%] z-30 bg-white p-3 rounded-full shadow-lg text-cyan-500 hover:bg-gray-50 transition-colors"
                >
                    <FaChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-[10%] sm:right-[20%] z-30 bg-white p-3 rounded-full shadow-lg text-cyan-500 hover:bg-gray-50 transition-colors"
                >
                    <FaChevronRight size={24} />
                </button>

            </div>
        </div>
    );
};

export default Bestsellers;
