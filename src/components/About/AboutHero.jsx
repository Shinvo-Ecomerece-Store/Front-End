import React from 'react';
import aboutHeroBg from '../../assets/about_hero_bg.png';
import { FaUser, FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';

const AboutHero = () => {
    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img src={aboutHeroBg} alt="Digital Life Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Navbar Overlay - Simulating the one in the screenshot for this page specific header */}
            <div className="absolute top-0 left-0 w-full z-20 p-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between text-white bg-white/10 backdrop-blur-md rounded-full px-8 py-3">
                    <div className="text-xl font-bold">LOGO</div>
                    <div className="hidden md:flex gap-8 text-sm">
                        <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
                        <a href="/about" className="text-cyan-400">About Us</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Categories</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <input type="text" placeholder="Search" className="bg-gray-200 text-black rounded-full px-4 py-1 text-sm focus:outline-none w-64" />
                            <FaSearch className="absolute right-3 top-1.5 text-gray-500 text-xs" />
                        </div>
                        <FaUser className="hover:text-cyan-400 cursor-pointer" />
                        <FaShoppingCart className="hover:text-cyan-400 cursor-pointer" />
                    </div>
                </div>
            </div>


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
