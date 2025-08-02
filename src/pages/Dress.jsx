import React from "react";
import CasualImage from "../../src/assets/img/image 11.png";
import PartyImage from "../../src/assets/img/image 12.png";
import FormalImage from "../../src/assets/img/image 13.png";
import SportImage from "../../src/assets/img/image 14.png";

function DressStyle() {
  const dressStyles = [
    {
      name: "Casual",
      image: CasualImage,
      alt: "Casual Dress Style",
      link: "#casual",
    },
    {
      name: "Formal",
      image: FormalImage,
      alt: "Formal Dress Style",
      link: "#formal",
    },
    {
      name: "Party",
      image: PartyImage,
      alt: "Party Dress Style",
      link: "#party",
    },
    {
      name: "Gym",
      image: SportImage,
      alt: "Gym Dress Style",
      link: "#gym",
    },
  ];
  return (
    <div className="container mx-auto md:px-8 bg-[#F0F0F0] p-5 rounded-3xl -z-1 top-20 relative lg:px-16">
      <div className="text-center text-black">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-Poppins text-black mb-12">
          Browse By Dress Style
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 lg:gap-10 justify-items-center">
          {dressStyles.map((style) => (
            <a
              key={style.name}
              href={style.link}
              className="relative w-full max-w-md h-64 md:h-80 rounded-xl overflow-hidden shadow-lg
                         flex items-start p-6"
            >
              <img
                src={style.image}
                alt={style.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/cccccc/333333?text=Gambar+Tidak+Tersedia";
                }}
              />
              <h3 className="z-10 text-black text-3xl md:text-4xl font-bold">
                {style.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DressStyle;
