import Navbar from "../Navbar/Navbar";
import heroimage1 from '../assets/images/products/hero1.png'
import { BsArrowUpRight } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <div className="w-full max-h-[1380px] h-screen bg-img-custom bg-[url('../assets/images/bg.jpg')] bg-cover bg-center mx-auto flex flex-col relative overflow-hidden">
      <Navbar />

      {/* Main Content Area - Relative for positioning */}
      <div className="flex-grow w-full max-w-[1920px] mx-auto relative h-full">

        {/* --- Social Icons --- */}
        {/* Mobile: Vertical on Right. Desktop: Horizontal Top Right */}
        <div className="absolute right-4 top-[20%] flex flex-col gap-4 z-20 lg:right-10 lg:flex-row">
          <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
            <FaFacebookF className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] text-black" />
          </div>
          <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
            <FaInstagram className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] text-black" />
          </div>
          <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
            <IoLogoWhatsapp className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] text-black" />
          </div>
        </div>

        {/* --- Product Cards (Desktop Only) --- */}

        {/* Left Card - Watch (Mid Left) */}
        <div className="hidden lg:flex absolute top-[22%] left-20 w-[250px] h-[250px] xl:w-[297px] xl:h-[282px] rounded-[40px] shadow-hard-card bg-img-custom bg-[url('../assets/images/products/hero1.png')] bg-cover bg-center items-center justify-center z-10 animate-float">
          <Link to="/##"><BsArrowUpRight className="p-4 w-[70px] h-[60px] xl:w-[82px] xl:h-[72px] rounded-full bg-white text-cta-cyan" /></Link>
        </div>

        {/* Right Card - Phone (Bottom Right) */}
        <div className="hidden lg:flex absolute bottom-32 right-10 xl:right-20 w-[250px] h-[250px] xl:w-[297px] xl:h-[282px] rounded-[40px] shadow-hard-card bg-img-custom bg-[url('../assets/images/products/hero1.png')] bg-cover bg-center items-center justify-center z-10 animate-float-delayed">
          <Link to="/##"><BsArrowUpRight className="p-4 w-[70px] h-[60px] xl:w-[82px] xl:h-[72px] rounded-full bg-white text-cta-cyan" /></Link>
        </div>


        {/* --- Text Content --- */}
        {/* Mobile: Bottom Center. Desktop: Bottom Left */}
        <div className="absolute bottom-32 w-full px-4 text-center lg:text-left lg:bottom-28 lg:left-20 lg:w-auto z-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-tight mb-4 text-white">
            Elevate Your<br className="hidden lg:block" /> Everyday
          </h1>
          <p className="text-lg md:text-xl lg:text-[26px] text-white font-[400] max-w-[600px] mx-auto lg:mx-0">
            Smart accessories for a connected life. Shop Mobile Cases, Earbuds, Cables & More.
          </p>
        </div>

        {/* --- CTA Button --- */}
        {/* Mobile: Bottom Center (below text). Desktop: Bottom Center */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 lg:bottom-3 z-20">
          <div className="btn-primary w-[200px] h-[70px] xl:w-[254px] xl:h-[93px] flex items-center justify-center gap-4 rounded-full text-[20px] xl:text-[26px] text-black font-semibold cursor-pointer hover:scale-105 transition-transform">
            Shop Now
            <Link to="/##"><BsArrowUpRight className="p-3 w-[50px] h-[40px] xl:p-4 xl:w-[69px] xl:h-[56px] rounded-full bg-white text-cta-cyan" /></Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;