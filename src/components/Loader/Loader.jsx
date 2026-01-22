import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="relative flex flex-col items-center justify-center">

                {/* Glow Effect */}
                <div className="absolute w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>

                {/* Outer Ring - Slow Spin */}
                <div className="w-32 h-32 border border-gray-100 rounded-full animate-[spin_4s_linear_infinite]"></div>

                {/* Middle Ring - Medium Spin in Reverse */}
                <div className="absolute w-28 h-28 border-2 border-transparent border-t-gray-200 border-b-gray-200 rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>

                {/* Inner Ring - Fast Spin with Color */}
                <div className="absolute w-24 h-24 border-4 border-gray-50 border-t-cyan-400 border-l-cyan-400 rounded-full animate-[spin_2s_linear_infinite] shadow-lg shadow-cyan-400/20"></div>

                {/* Center Content */}
                <div className="absolute flex flex-col items-center gap-1 z-10">
                    <span className="text-xl font-black tracking-[0.3em] text-gray-900 ml-1">SHINVO</span>
                </div>

                {/* Loading Text */}
                <div className="absolute -bottom-16">
                    <span className="text-xs font-semibold tracking-widest text-gray-400 animate-pulse">LOADING</span>
                </div>
            </div>
        </div>
    );
};

export default Loader;
