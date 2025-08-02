import React from "react";
import Rectangle2 from "../../src/assets/img/Rectangle_2-removebg-preview 1.svg";
import { useNavigate } from "react-router-dom";



function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="container p-4 mt-16 flex items-center flex-col font-Poppins overflow-hidden -z-1">
      <div className="relative flex flex-col lg:flex-row flex-grow">
        {/* Text Content */}
        <div className="flex-1 text-black p-4 flex gap-9 flex-col">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-Poppins text-black uppercase">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-lg md:text-xl font-poppins text-black">
            Shop quality clothing in a wide selection of styles. Find outfits
            suitable for everyday activities, formal occasions, and casual
            family outings.
          </p>
          <button onClick={() => navigate("/shop")} className="bg-black text-white w-[358px] font-poppins h-12 rounded-full cursor-pointer hover:bg-yellow-500 transition-colors duration-300">
            Shop Now
          </button>
          <div className="flex flex-col md:flex-row justify-start gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                200+
              </h2>
              <p className="text-gray-600 text-lg">International Brands</p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                2,000+
              </h2>
              <p className="text-gray-600 text-lg">High-Quality Products</p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                30,000+
              </h2>
              <p className="text-gray-600 text-lg">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Image Container - Hidden on mobile and tablet, visible only on lg screens and up */}
        <div
          className="hidden lg:block flex-1 relative bg-cover bg-center"
          style={{
            backgroundImage: `url(${Rectangle2})`,
          }}
        >
          <div className="absolute top-10 right-12 text-black text-5xl transform rotate-45">
            ★
          </div>
          <div className="absolute top-1/3 left-1/8 text-black text-5xl transform rotate-45">
            ★
          </div>
        </div>
      </div>

      {/* Brand Logos - Responsive adjustments */}
      <div className="flex flex-wrap justify-center w-full lg:justify-between p-5 bg-black z-10 gap-4 lg:gap-0">
        <h1 className="text-white font-Poppins text-lg md:text-xl lg:text-2xl">
          VERSACE
        </h1>
        <h1 className="text-white font-Poppins text-lg md:text-xl lg:text-2xl">
          ZARA
        </h1>
        <h1 className="text-white font-Poppins text-lg md:text-xl lg:text-2xl">
          GUCCI
        </h1>
        <h1 className="text-white font-Poppins text-lg md:text-xl lg:text-2xl">
          PRADA
        </h1>
        <h1 className="text-white font-Poppins text-lg md:text-xl lg:text-2xl">
          CALVIN KLEIN
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
