import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alexander",
    verified: true,
    text: "I'm blown away by the quality and style of the clothes I received from WijayaStore. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.",
  },
  {
    name: "Charles",
    verified: true,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered WijayaStore. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "Ethan",
    verified: true,
    text: "As someone who’s always on the lookout for unique fashion pieces, I’m thrilled to have stumbled upon WijayaStore. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Henry",
    verified: false,
    text: "Love how fast the shipping was and the material quality! Definitely shopping again soon.",
  },
];

const TestimonialCarousel = () => {
  const [start, setStart] = useState(0);
  const visibleCount = 3; 

 
  const handlePrev = () => {
    setStart((prev) => Math.max(0, prev - 1));
  };


  const handleNext = () => {
   
    setStart((prev) =>
      prev + visibleCount < testimonials.length ? prev + 1 : prev
    );
  };

  return (
    <div className="md:px-12 lg:px-20 relative top-20 container p-5 border border-red-500 mx-auto flex justify-center flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl md:text-4xl font-Poppins font-black">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-4">
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed" 
            onClick={handlePrev}
            disabled={start === 0} 
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed" 
            onClick={handleNext}
            disabled={start + visibleCount >= testimonials.length} 
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
        {testimonials.slice(start, start + visibleCount).map((item, idx) => (
          <div
            key={idx} 
            className="rounded-xl border p-6 bg-white shadow hover:shadow-md transition"
          >
            <div className="flex items-center mb-4">
           
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="gold" stroke="gold" />
              ))}
            </div>
            <h4 className="font-semibold text-lg mb-1">
              {item.name}{" "}
             
              {item.verified && (
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full ml-1 align-middle"></span>
              )}
            </h4>
            <p className="text-sm text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;