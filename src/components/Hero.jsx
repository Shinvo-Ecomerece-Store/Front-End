import Navbar from "./Navbar/Navbar";
import heroimage1 from '../assets/images/products/hero1.png'
import { BsArrowUpRight } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <div className="max-w-[1920px] w-full max-h-[1300px] h-[100vh] bg-img-custom bg-[url('../assets/images/bg.jpg')] mx-auto">
      <Navbar />

      <div className="w-full h-[60%] flex items-center justify-center">
        <div className="w-[95%] shadow-card p-6 flex items-start justify-between">
          <div className="w-[297px] h-[282px] rounded-[40px] shadow-hard-card bg-img-custom bg-[url('../assets/images/products/hero1.png')] flex items-center justify-center">
            <Link to="/##"><BsArrowUpRight className="p-4 w-[82px] h-[72px] rounded-full bg-white text-cta-cyan " /></Link>
          </div>

          <div className="w-[208px] h-[50px] flex items-center justify-between">
            <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full">
              <FaFacebookF className="w-[41px] h-[40px] rounded-full" />
            </div>
            <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full">
              <FaInstagram className="w-[41px] h-[40px] rounded-full" />
            </div>
            <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full">
              <IoLogoWhatsapp className="w-[41px] h-[40px] rounded-full" />
            </div>
          </div>
        </div>

      </div>

      <div className=" w-full h-[50%] flex items-center justify-around text-white">
        <div className=" bg-red-300 flex flex-col items-start justify-center">
          <h1 className="w-[869px] bg-red-600">
            Elevate Your Everyday
          </h1>
          <p className="w-[597px] text-[26px] text-white font-[400]">
            Smart accessories for a connected life. Shop Mobile Cases, Earbuds, Cables & More.
          </p>
        </div>

        <div className="btn-primary w-[254px] h-[93px] flex items-center justify-center gap-4 rounded-full text-[26px] text-black font-semibold">
          Shop Now
          <Link to="/##"><BsArrowUpRight className="p-4 w-[69px] h-[56px] rounded-full bg-white text-cta-cyan " /></Link>
        </div>

        <div className="w-[297px] h-[282px] rounded-[40px] shadow-hard-card bg-img-custom bg-[url('../assets/images/products/hero1.png')] flex items-center justify-center">
          <Link to="/##"><BsArrowUpRight className="p-4 w-[82px] h-[72px] rounded-full bg-white text-cta-cyan " /></Link>
        </div>
      </div>

    </div>
  );
};

export default Hero;