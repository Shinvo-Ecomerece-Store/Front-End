import React, { useState } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';
import UpperNavbar from './UpperNavbar';
import { IoSearch } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="top-0 left-0 w-[calc(100%-20px)] z-50 fixed">
      <UpperNavbar />

      {/* Main Container */}
      <div className="max-w-[1820px] mx-auto mt-2 relative rounded-[30px] gradient-border-nav">

        {/* Inner Nav Content (Glassmorphism) */}
        <nav className="w-full bg-white/10 backdrop-blur-md rounded-[30px] px-6 py-3 flex flex-col md:flex-row justify-between items-center shadow-lg nav-content relative z-50">

          <div className="w-full md:w-auto flex justify-between items-center">
            <button
              className="md:hidden text-white text-2xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
            {/* LEFT: Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-white tracking-wider hover:text-[#53C1CC] transition-colors">
                LOGO
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            {/* <IoSearch className="text-white/70 text-lg" /> */}
            <FiShoppingCart className="text-2xl md:hidden" color='white' />
          </div>

          {/* CENTER: Navigation (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-[18px] font-[400]">
            <Link to="/" className="text-white/90 hover:text-[#53C1CC] transition-colors">Home</Link>
            <Link to="/about" className="text-white/90 hover:text-[#53C1CC] transition-colors">About Us</Link>
            <Link to="/categories" className="text-white/90 hover:text-[#53C1CC] transition-colors">Categories</Link>
          </div>

          {/* RIGHT: Search + Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-white/20 rounded-full px-4 py-1.5 w-[300px] xl:w-[555px] h-[55px] border border-white/10 focus-within:bg-white/30 focus-within:border-[#53C1CC] transition-all">
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

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full mt-2 bg-black/90 backdrop-blur-xl rounded-[20px] p-6 flex flex-col gap-6 border border-white/10 shadow-2xl z-40 animate-fade-in">

            {/* Mobile Links */}
            <div className="flex flex-col gap-4 text-center text-lg">
              <Link to="/" className="text-white hover:text-[#53C1CC] transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="text-white hover:text-[#53C1CC] transition-colors" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link to="/categories" className="text-white hover:text-[#53C1CC] transition-colors" onClick={() => setIsOpen(false)}>Categories</Link>
            </div>

            {/* Mobile Search */}
            <div className="flex items-center bg-white/20 rounded-full px-4 py-3 w-full border border-white/10">
              <input type="text" placeholder="Search" className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-300 w-full" />
              <FiSearch className="text-white/70 text-lg" />
            </div>

            {/* Mobile Icons */}
            <div className="flex justify-center gap-8 border-t border-white/10 pt-4">
              <button className="text-white hover:text-[#53C1CC] transition-transform hover:scale-110">
                <FiUser className="text-2xl" />
              </button>
              <button className="relative text-white hover:text-[#53C1CC] transition-transform hover:scale-110">
                <span className="absolute -top-1 -right-2 bg-[#53C1CC] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar