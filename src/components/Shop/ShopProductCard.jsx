import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShopProductCard = ({ id, title, subtitle, colors = [] }) => {
    const [selectedColor, setSelectedColor] = useState('black');

    // Dummy images for demonstration
    const images = {
        black: "https://placehold.co/400x400/202020/FFFFFF?text=Black+Case",
        red: "https://placehold.co/400x400/DC2626/FFFFFF?text=Red+Case"
    };

    return (
        <Link to={`/product/${id || 1}`} className="block w-full group">
            <div className="bg-white rounded-3xl p-4 shadow hover:shadow-lg transition-shadow duration-300 w-full h-full">
                {/* Image Placeholder */}
                <div className="bg-gray-100 rounded-2xl w-full aspect-square mb-4 overflow-hidden relative">
                    <img
                        src={selectedColor === 'black' ? images.black : images.red}
                        alt={`${selectedColor} case`}
                        className="w-full h-full object-cover transition-opacity duration-300"
                    />
                </div>

                {/* Content */}
                <div className="text-left">
                    <h3 className="font-bold text-gray-900 text-lg uppercase tracking-wide">
                        {title || "PHONE CASE"}
                    </h3>
                    <p className="text-gray-500 text-xs mb-3">
                        {subtitle || "For device model"}
                    </p>

                    {/* Color Swatches */}
                    <div className="flex gap-2" onClick={(e) => e.preventDefault()}>
                        <button
                            onClick={() => setSelectedColor('black')}
                            className={`w-4 h-4 rounded-full bg-black border border-gray-300 transition-all duration-200 ${selectedColor === 'black' ? 'ring-2 ring-offset-2 ring-black scale-110' : 'hover:scale-110'}`}
                            aria-label="Select Black"
                        ></button>
                        <button
                            onClick={() => setSelectedColor('red')}
                            className={`w-4 h-4 rounded-full bg-red-600 border border-gray-300 transition-all duration-200 ${selectedColor === 'red' ? 'ring-2 ring-offset-2 ring-red-600 scale-110' : 'hover:scale-110'}`}
                            aria-label="Select Red"
                        ></button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ShopProductCard;
