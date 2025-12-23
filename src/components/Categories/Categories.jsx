import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";

const Categories = () => {
    const categories = [
        { id: 1, title: "Smart Watch", image: "url('/src/assets/images/products/hero1.png')" },
        { id: 2, title: "Power Bank", image: "url('/src/assets/images/products/hero1.png')" },
        { id: 3, title: "Charger", image: "url('/src/assets/images/products/hero1.png')" },
        { id: 4, title: "Earbuds", image: "url('/src/assets/images/products/hero1.png')" },
    ];

    return (
        <div className="w-full max-w-[1600px] mx-auto px-4 py-16 flex flex-col items-center gap-10">

            {/* Title */}
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-primary-text leading-tight">
                    Find Accessories<br />For Your Device
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 w-full justify-items-center">
                {categories.map((cat) => (
                    <div key={cat.id} className="relative w-full max-w-[180px] md:max-w-[434px] h-[160px] lg:h-[280px] xl:h-[358px] rounded-[25px] md:rounded-[100px] overflow-hidden group cursor-pointer shadow-lg">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: cat.image }}
                        ></div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                        {/* Content */}
                        <div className="absolute bottom-6 left-0 w-full text-center">
                            <h3 className="text-white text-lg md:text-2xl font-bold">{cat.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <button className="flex items-center gap-3 bg-cta-cyan text-black px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 transition-colors shadow-md hover:shadow-lg">
                View All Products
                <div className="bg-white rounded-full p-1">
                    <BsArrowUpRight className="text-cta-cyan text-sm" />
                </div>
            </button>

        </div>
    );
};

export default Categories;
