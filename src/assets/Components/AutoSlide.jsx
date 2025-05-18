import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Peter England Men's Solid Slim Fit Full Sleeve Casual Shirt| 100% Cotton",
    image: "./images/homelogo1.png",
  },
  {
    id: 2,
    title: "Slide Majestic Man Men Classic Slim Fit Pure Cotton Casual Shirt",
    image: "./images/homelogo2.png",
  },
  {
    id: 3,
    title: "Slide Dennis Lingo Men's Checkered Slim Fit Cotton Casual Shirt",
    image: "./images/homelogo3.png",
  },
];

const AutoSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" w-xl h-full p-4 rounded-2xl shadow-lg">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 h-64 sm:h-80 md:h-96 relative"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full  p-3 rounded-2xl"
                style={{ height: "650px", width: "550px" }}
              />
              <div className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">
                {slide.title}
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoSlide;
