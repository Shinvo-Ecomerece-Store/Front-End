import React from 'react';
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import UpperNavbar from './UpperNavbar';

function Navbar() {
  return (
    <div className="top-0 left-0 w-full z-50 fixed px-2">
      <UpperNavbar />

      {/* Main Container */}
      <div className="max-w-[1820px] h-[113px] mx-auto mt-2 relative rounded-[30px] gradient-border-nav p-[1px]">

        {/* Inner Nav Content (Glassmorphism) */}
        <nav className="w-full h-full bg-white/10 backdrop-blur-md rounded-[30px] px-6 py-3 flex justify-between items-center shadow-lg nav-content">

          {/* LEFT: Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white tracking-wider hover:text-[#53C1CC] transition-colors">
              LOGO
            </Link>
          </div>

          {/* CENTER: Navigation */}
          <div className="hidden md:flex items-center gap-8 text-[18px] font-[400]">
            <Link to="/" className="text-white/90 hover:text-[#53C1CC] transition-colors">Home</Link>
            <Link to="/about" className="text-white/90 hover:text-[#53C1CC] transition-colors">About Us</Link>
            <Link to="/categories" className="text-white/90 hover:text-[#53C1CC] transition-colors">Categories</Link>
          </div>

          {/* RIGHT: Search + Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white/20 rounded-full px-4 py-1.5 w-[555px] h-[55px] border border-white/10 focus-within:bg-white/30 focus-within:border-[#53C1CC] transition-all">
              <input type="text" placeholder="Search" className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-300 w-full" />
              <FiSearch className="text-white/70 w-[24px] h-[24px] text-lg cursor-pointer hover:text-white" />
            </div>

            <div className="flex items-center gap-3 border-l border-white/20 pl-4">
              <button className="text-white hover:text-[#53C1CC] transition-transform hover:scale-110">
                <FiUser className="text-xl w-[32px] h-[32px]" />
              </button>
              <button className="relative text-white hover:text-[#53C1CC] transition-transform hover:scale-110">
                <FiShoppingCart className="text-xl w-[32px] h-[32px]" />
                <span className="absolute -top-1 -right-1 bg-[#53C1CC] text-white text-[9px] font-bold w-3 h-3 flex items-center justify-center rounded-full">2</span>
              </button>
            </div>
          </div>

        </nav>
      </div>
    </div>
  )
}

export default Navbar