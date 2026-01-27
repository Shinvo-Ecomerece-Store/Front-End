import React from 'react';
import ShopProductCard from './ShopProductCard';

const sections = [
    {
        title: "Samsung Covers",
        products: [1, 2, 3, 4, 5, 6] // Mock IDs for now to generate cards
    },
    {
        title: "Vivo Covers",
        products: [1, 2, 3, 4, 5, 6]
    },
    {
        title: "Xiaomi Covers",
        products: [1, 2, 3, 4, 5, 6]
    },
    {
        title: "iPhone Covers",
        products: [1, 2, 3, 4, 5, 6]
    },
    {
        title: "Google Pixel Covers",
        products: [1, 2, 3, 4, 5, 6]
    }
];

const ShopSections = () => {
    return (
        <div className="w-full max-w-[1820px] mx-auto px-6 pb-20">
            {sections.map((section, idx) => (
                <div key={idx} className="mb-16">
                    <h2 className="text-center text-2xl font-bold mb-8 capitalize text-black">
                        {section.title}
                    </h2>
                    {/* Grid Layout matching design: 3 columns on Desktop, responsive downwards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {section.products.map((item, pIdx) => (
                            <ShopProductCard
                                key={pIdx}
                                title="PHONE CASE"
                                subtitle="For specific model"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShopSections;
