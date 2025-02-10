import React from "react";

const ShareYourLooks = () => {
  return (
    <div className="relative w-full h-[188px] shadow-md mb-10 ">
      {/* Desktop Section */}
      <div className="hidden lg:block ">
        <div
          className="relative h-[215px] bg-cover bg-center"    
          style={{
            backgroundImage:
              "url('img/background.png')",
          }}
        >
            {/* Overlay for Blur */}
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          {/* Text Section */}
          <div className="absolute top-[30px] left-[500px] flex flex-col items-center gap-5">
            <div className="w-[248px] h-[24px] flex items-center justify-center gap-2.5">
              <p className="text-3xl font-bold text-[#79c7ba] text-right">
                شاركينا إطلالاتك
              </p>
            </div>
            <div className="w-full flex items-center justify-center">
              <p className="text-[13px] text-[#2d4950] text-center leading-5">
                منشني @syriana_boutique syriana_boutique# لفرصة عرض صورك على صفحتنا!
              </p>
            </div>
          </div>

          {/* Images */}
          <img
            src="./img/file-1-1.png"
            alt="File 1"
            className="absolute w-[406px] h-[230px] top-[-15px] left-[-5px]"
          />
          <img
            src="./img/file-6-1.png"
            alt="File 6"
            className="absolute w-[408px] h-[215px] top-0 right-0"
          />
        </div>
      </div>

      {/* Mobile Section */}
      <div className="lg:hidden relative h-[215px] w-full ">
        {/* Background Image for Mobile */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('img/background.png')",
          }}
        />
        <div className="absolute inset-0 backdrop-blur-sm"></div>

        {/* Text Section */}
        <div className="absolute top-[79px] left-[115px] flex flex-col items-center gap-1">
          <div className="w-[148px] h-[24px] flex items-center justify-center gap-2.5">
            <p className="text-[16px] font-bold text-[#79c7ba] text-right">
              شاركينا إطلالاتك
            </p>
          </div>
          <div className="w-[148px] flex items-center justify-center">
            <p className="text-[10px] text-[#4c6268] text-center leading-5">
            منشني @syriana_boutique syriana_boutique# لفرصة عرض صورك على صفحتنا!
            </p>
          </div>
        </div>

        {/* Image (Only in Mobile) */}
        
        <img
          src="./img/file-1-1.png"
          alt="File 1"
          className="absolute w-[206px] h-[162px] top-[53px] left-[-30px]"
        />
        
        <div className="absolute w-[306px] h-[255px] top-[-40px] right-[-7px] ">
          <img
            src="./img/file-6-1.png"
            alt="File 6"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ShareYourLooks;  