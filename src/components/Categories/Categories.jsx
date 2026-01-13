import { FaArrowRight } from "react-icons/fa6";

const Categories = () => {
    const categories = [
        { id: 1, title: "Smart Watch", image: "cat_smartwatch.png" },
        { id: 2, title: "Power Bank", image: "cat_powerbank.png" },
        { id: 3, title: "Charger", image: "cat_charger.png" },
        { id: 4, title: "Earbuds", image: "cat_earbuds.png" },
    ];

    return (
        <div className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-16">

                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Find Accessories<br />For Your Device
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {categories.map((cat) => (
                        <div key={cat.id} className="relative w-full aspect-square rounded-[30px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(/src/assets/${cat.image})` }}
                            ></div>

                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent"></div>

                            <div className="absolute bottom-6 left-0 w-full text-center z-10">
                                <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide">{cat.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="flex items-center gap-3 bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition-colors shadow-lg hover:shadow-cyan-400/50">
                    View All Products
                    <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                        <FaArrowRight className="text-black text-xs -rotate-45" />
                    </div>
                </button>

            </div>
        </div>
    );
};

export default Categories;
