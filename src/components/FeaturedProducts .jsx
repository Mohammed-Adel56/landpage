import Card from './Card';
import { useState, useRef } from 'react';

const FeaturedProducts = ({title}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const cards = [
    <Card key={1} />,
    <Card key={2} />,
    <Card key={3} />
  ];

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const progressPercentage = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="w-full bg-gray-100 py-12" dir='rtl'>
        <div className="flex justify-between items-center mb-8">
          <div className='flex justify-start items-center gap-1'>
            <div className="rectangle self-center md:w-[100px] md:h-[10px] md:top-1 w-10 h-2 relative top-0" dir='ltr'></div>
            <h2 className="md:text-3xl text-normal font-bold text-[#5cbcac]">{title}</h2>
          </div>
          <div className="flex items-center gap-2 text-black">
            <div className="md:text-lg text-sm">عرض الكل</div>
            <img 
              className="w-6 h-6" 
              src="https://c.animaapp.com/yMf9VDvP/img/icon-2.svg" 
              alt="show all icon" 
            />
          </div>
        </div>
      <div className="container mx-auto px-4">
        
      
            
      <div className="container mx-auto relative">
        <div 
          ref={sliderRef}
          className="overflow-hidden relative mb-4"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Desktop view (3 cards) */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <div key={index} className="w-full">
                {card}
              </div>
            ))}
          </div>

          {/* Mobile view (1 card) */}
          <div className="md:hidden w-full">
            <div 
              className="flex transition-transform duration-300 w-[300%]"
              style={{
                transform: `translateX(${currentIndex * 33.333}%)`
              }}
            >
              {cards.map((card, index) => (
                <div 
                  key={index} 
                  className="w-1/3 flex-shrink-0"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>

          {/* Centered, medium-sized progress bar (mobile only) */}
          <div className="md:hidden flex justify-center">
            <div className="w-1/2 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#5cbcac] transition-all duration-300 ease-out"
                style={{ 
                  width: `${progressPercentage}%`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;