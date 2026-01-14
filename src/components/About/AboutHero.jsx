import React from 'react';
import aboutHeroBg from '../../assets/about_hero_bg.png';
import { FaUser, FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';

const AboutHero = () => {
    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img src={aboutHeroBg} alt="Digital Life Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Navbar Overlay - Simulating the one in the screenshot for this page specific header */}
            <Navbar />


            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center md:justify-end max-w-7xl mx-auto px-6 z-10">
                <div className="text-center md:text-right text-white max-w-2xl mt-20">
                    <h2 className="text-xl md:text-2xl font-light mb-2 tracking-wide text-gray-200">EMPOWERING YOUR</h2>
                    <h1 className="text-6xl md:text-8xl font-black text-cyan-400 mb-2 leading-tight tracking-tighter" style={{ textShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}>
                        DIGITAL
                    </h1>
                    <h1 className="text-6xl md:text-8xl font-white mb-6 leading-tight tracking-tighter">
                        LIFE
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light">
                        The destination for premium, authentic mobile accessories in Pakistan.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
