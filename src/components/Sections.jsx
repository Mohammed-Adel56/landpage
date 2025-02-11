import React from 'react';

const Sections = () => {
  const showItemsDesktop =[
    {
      name:"فساتين",
      background:"https://c.animaapp.com/yMf9VDvP/img/frame-36-5@2x.png"
    },
    {
      name:"عبايا مميزة",
      background:"https://c.animaapp.com/yMf9VDvP/img/frame-22.png"
    },
    {
      name:"عبايا ملونة",
      background:"https://c.animaapp.com/yMf9VDvP/img/frame-24.png"
    },
    {
      name:"عبايا ملونة",
      background:"https://c.animaapp.com/yMf9VDvP/img/frame-24.png"
    },
  ] ;
  const showItemMobile = [
    {
      name:" عبايا ملونة",
      background:"./img/product1.png",
      imageBackground:"./img/background1.png"
    },
    {
      name:"عبايا مميزة",
      background:"./img/product2.png",
      imageBackground:"./img/background2.png"
    },
    {
      name:" فساتين",
      background:"./img/file-1-3.png",
      imageBackground:"./img/background1.png"
    },
    {
      name:"فساتين ",
      background:"./img/file-1-3.png",
      imageBackground:"./img/background3.png"
    },
  ]
  return (
    <div>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="w-full h-full bg-cover bg-[url('https://c.animaapp.com/yMf9VDvP/img/boutique.png')] overflow-y-auto">
          <div className="relative w-full min-h-screen mt-[120px] bg-white">
            {/* Group 3 Section */}
            <div className="group-3">
              <div className="frame-32 flex justify-between p-4">
                {showItemsDesktop.map((item, index) => (
                  <div key={index} className="frame-33 w-[282px] h-[564px] rounded-lg overflow-hidden border border-[#b7d8c7] shadow-sm bg-cover bg-center" style={{ backgroundImage: `url(${item.background})` }}>
                    <div className="frame-34 flex flex-col items-center gap-6 mt-[398px]">
                      <div className="h-lite">
                        <div className="text-wrapper-19 font-tajawal font-medium text-white text-2xl leading-[36.3px]">
                          {item.name}
                        </div>
                      </div>
                      <div className="h-button-wrapper">
                        <button className="h-button bg-[#16333b] text-white px-4 py-2 rounded-lg border-1 border-[#bedde3]">
                          <div className="text-wrapper-18">تسوق الآن</div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="w-full  bg-[var(--black-25)] flex flex-col items-center justify-start p-4 mx-auto overflow-x-hidden">
          {/* Frame 19 Section */}
          <div className="frame-19">
            <div className="frame-20 flex items-center justify-center gap-5 mb-7">
              <div className="frame-21">
                <div className="rectangle-9 w-[120px] h-1 bg-[#224f58]"></div>
              </div>
              <div className="h">
                <div className="text-wrapper-15 font-tajawal font-bold text-[#5cbcac] text-[20px] leading-[29px]">
                  التصنيفات
                </div>
              </div>
              <div className="frame-21">
                <div className="rectangle-9 w-[120px] h-1 bg-[#224f58]"></div>
              </div>
            </div>
            <div className="frame-22 ">
              <div className="frame-23 grid grid-cols-2 gap-7   ">
                {showItemMobile.map((item, index) => (
                 
                 <div key={index} className="bg-cover overlap-group-wrapper relative w-[171px] h-[129px]   shadow-sm " style={{ backgroundImage: `url(${item.imageBackground})` }}>
                    <div className="rectangle-10 absolute w-full h-full bg-black/20"></div>
                    <div className="overlap-group-2 relative">
                      <div className="rectangle-10 absolute w-full h-full bg-black/20"></div>
                      <div className="phone-wrapper absolute top-[30px] left-[95px] w-full">
                        <div className="phone">
                          <div className="text-wrapper-16 font-tajawal font-bold text-white  text-sm leading-[18.9px]">
                            {item.name}
                          </div>
                        </div>
                      </div>
                      <div className="frame-24 absolute top-[70px] left-[85px]">
                        <div className="  bg-[#5cbcac] text-white px-3 py-1   w-[80px] border border-amber-50">
                          <div className="text-wrapper-17 text-center text-[10px]">تسوق الآن</div>
                        </div>
                      </div>
                      <img className="file absolute w-[96px] h-[150px] top-[-30px] left-[-28px]" src={item.background} alt="Product" />
                    </div>
                  </div>
                ))}
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;