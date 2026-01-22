import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <div className="max-w-md w-full flex flex-col items-center">
                {/* Icon */}
                <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-20 rounded-full"></div>
                    <FaExclamationTriangle className="relative text-6xl text-cyan-400" />
                </div>

                {/* 404 Text */}
                <h1 className="text-9xl font-black text-gray-900 leading-none mb-2">404</h1>

                {/* Message */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                    Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="group relative inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full font-medium overflow-hidden transition-all hover:w-[180px] hover:justify-center w-[160px] justify-center"
                >
                    <span className="absolute inset-0 w-full h-full bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors"></span>
                    <FaHome className="text-sm" />
                    <span>Go Home</span>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
