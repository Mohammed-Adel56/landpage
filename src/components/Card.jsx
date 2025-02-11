import React, { useState,useEffect } from 'react';

export default function Card() {
  const images = [
    "https://c.animaapp.com/yMf9VDvP/img/frame-36-5@2x.png",
    "./img/product2.png", // Add more images as needed
    "./img/product3.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPoints, setShowPoints] = useState(false); // State to control point visibility
  const totalImages = images.length;
  useEffect(() => {
    let interval;
    if (showPoints) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages); // Increment index
      }, 2000); // Change image every 2 seconds while hovering
    }
    return () => clearInterval(interval); // Clear interval on unmount or when showPoints changes
  }, [showPoints, totalImages]);

  const handleMouseEnter = (index) => {
    setCurrentImageIndex(index); // Change image on hover
    setShowPoints(true); // Show points on hover
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0); // Reset to the first image on mouse leave
    setShowPoints(false); // Hide points on mouse leave
  };

  return (
    <>
      <div 
        className="bg-[#f0f0f0] p-6 rounded-lg shadow-md"
        
      >
        <div className="relative" 
        onMouseEnter={() => handleMouseEnter(1)} // Change to the second image on hover
        onMouseLeave={handleMouseLeave} // Reset on mouse leave
        >
          <img 
            src={images[currentImageIndex]} 
            
            alt="Product" 
            className="w-full h-full object-cover rounded-lg transition-opacity duration-300" // Smooth transition
          />
          {/* Point Indicator */}
      {showPoints && ( // Show points only on hover
        <div className="flex justify-center mt-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`rounded-full ${currentImageIndex === index ? 'bg-green-500' : 'bg-gray-300'} w-3 h-3 mx-1 transition-all duration-300`}
            ></div>
          ))}
        </div>
      )}
          <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">خصم 25%</div>
        </div>
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <h3 className="text-xl font-semibold text-[#888] mt-4">عبايات ملونة</h3>
          <p className="text-[#16333b] font-bold text-3xl">Code -25 -Rose</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-[#16333b] font-bold">43 ر.ع</span>
            <span className="text-gray-500 line-through">84 ر.ع</span>
          </div>
        </div>
      </div>
      
    </>
  );
}