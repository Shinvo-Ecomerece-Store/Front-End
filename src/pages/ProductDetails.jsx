import React, { useState } from 'react';
import { FiMinus, FiPlus, FiShoppingCart, FiUser } from 'react-icons/fi';
import img from "../assets/productpage/product_details/1.png"
import img2 from "../assets/productpage/product_details/2.png"
import img3 from "../assets/productpage/product_details/3.png"
import img4 from "../assets/productpage/product_details/4.png"
import img5 from "../assets/productpage/product_details/5.png"

const ProductDetails = () => {
    // Mock Data based on the image provided
    const product = {
        title: "Samsung 45W Travel Adapter (Super Fast Charging 2.0)",
        price: "Rs. 6,500",
        rating: 4.8,
        reviews: 120,
        features: [
            "Support fast protocols (PD, QC)",
            "Super Fast Charging 2.0 (45W)",
            "Supports PD (Power Delivery) & QC Protocols",
            "USB-C Interface",
            "Official Samsung Product"
        ],
        colors: ["Black", "White"], // Represented as hex or names
        powerOptions: ["25W", "45W", "65W"],
        images: [
            img, // Main placeholder
            img3,
            img4,
            img5,
            img2,
        ]
    };

    const [selectedColor, setSelectedColor] = useState('Black');
    const [selectedPower, setSelectedPower] = useState('25W');
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    const handleQuantityChange = (type) => {
        if (type === 'dec' && quantity > 1) setQuantity(quantity - 1);
        if (type === 'inc') setQuantity(quantity + 1);
    };

    return (
        <div className="bg-[#f8f9fa] min-h-screen pt-[120px] pb-20 lg:mt-10 font-sans text-gray-800">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-black items-stretch">
                    {/* Left Column: Image Gallery */}
                    <div className="flex flex-col gap-2 lg:gap-6 h-full">
                        {/* Main Image */}
                        <div className="bg-gray-50 rounded-[20px] p-8 flex items-center justify-center relative overflow-hidden group flex-grow min-h-[500px]">
                            <img
                                src={product.images[activeImage]}
                                alt={product.title}
                                className="object-contain max-h-full max-w-full transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-gray-100 text-xs px-2 py-1 rounded">25W PD Adapter</div>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {product.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`w-[80px] h-[80px] rounded-[15px] border-2 flex-shrink-0 flex items-center justify-center p-2 bg-white transition-all
                                        ${activeImage === index ? 'border-cyan-400' : 'border-gray-200 hover:border-gray-300'}
                                    `}
                                >
                                    <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="bg-white flex flex-col gap-6 p-8 rounded-[30px] shadow-md h-full">
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Brand: Samsung (Clickable Link)</p>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex text-yellow-400 text-sm">
                                    {'★'.repeat(5)} {/* Simplified star rendering */}
                                </div>
                                <span className="text-sm text-gray-500">({product.rating}) | {product.reviews} Reviews</span>
                            </div>

                            <h1 className="text-3xl font-bold mb-4 leading-tight">{product.title}</h1>
                            <p className="text-3xl font-bold mb-6">{product.price}</p>

                            <ul className="space-y-2 mb-8">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                        <span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Color Selector */}
                        <div>
                            <p className="font-bold mb-3 text-sm">Color: <span className="font-normal text-gray-600">{selectedColor}</span></p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setSelectedColor('Black')}
                                    className={`w-8 h-8 rounded-full bg-black border-2 transition-all ${selectedColor === 'Black' ? 'ring-2 ring-cyan-400 ring-offset-2' : ''}`}
                                ></button>
                                <button
                                    onClick={() => setSelectedColor('White')}
                                    className={`w-8 h-8 rounded-full bg-white border border-gray-300 transition-all ${selectedColor === 'White' ? 'ring-2 ring-cyan-400 ring-offset-2' : ''}`}
                                ></button>
                            </div>
                        </div>

                        {/* Power Output Selector */}
                        <div>
                            <p className="font-bold mb-3 text-sm">Power Output</p>
                            <div className="flex gap-3">
                                {product.powerOptions.map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => setSelectedPower(opt)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                                            ${selectedPower === opt
                                                ? 'bg-[#008f9d] text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                                        `}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mt-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center bg-gray-100 rounded-lg">
                                    <button
                                        onClick={() => handleQuantityChange('dec')}
                                        className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black"
                                    >
                                        <FiMinus size={14} />
                                    </button>
                                    <span className="w-8 text-center font-medium text-sm">{quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange('inc')}
                                        className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black"
                                    >
                                        <FiPlus size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3 mt-4">
                            <button className="w-full bg-[#02D5E0] hover:bg-[#02b5be] text-black font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-cyan-400/30 text-lg">
                                Add to Cart
                            </button>
                            <button className="w-full bg-black hover:bg-gray-900 text-white font-bold py-4 rounded-xl transition-all shadow-lg text-lg">
                                Buy it Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
