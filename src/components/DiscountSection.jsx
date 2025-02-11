import React from "react";

const DiscountSection = () => {
  return (
    <div className="w-full bg-white  ">
      {/* Desktop Section */}
      <div className="hidden lg:flex bg-gradient-to-r from-[#ececf4] to-[#c5dfd8]   w-[90%] mx-auto mb-10 flex-col justify-between items-start gap-6 p-10 rounded-lg shadow-sm">
        <div className="flex items-center gap-6 w-full">
          {/* Image Section */}
          <div className="relative w-[445px] h-[187px]">
            <div className="absolute w-[357px] h-[42px] top-[138px] left-[30px] bg-gradient-to-r from-[#ececf4] to-[#c5dfd8] rounded-full" />
            <img
              src="https://c.animaapp.com/yMf9VDvP/img/file--3--1@2x.png"
              alt="Discount"
              className="absolute w-full h-full top-0 left-0"
            />
          </div>

          {/* Text and Button Section */}
          <div className="flex flex-col justify-end items-center gap-2 w-[495px] ms-[240px]">
            <div className="flex flex-col  items-center gap-2">
              <p className="text-[31px] font-extrabold text-[#5CBCAC] text-right">
                احصل على خصم 25% الآن
              </p>
                <p className="text-[20px] text-[#16333B] text-center leading-7">
                    اشترك في نشرتنا البريدية واحصل على برومو كود خصم 25% على أول عملية شراء لك. لا تفوت الفرصة
              </p>
            </div>

            {/* Buttons */}
            <div className="relative w-[398px] h-[42px] rounded-lg border border-[#16333b] overflow-hidden">
              <button className="absolute top-0 left-0 w-[126px] h-full bg-[#16333b] text-white text-[16px] font-normal rounded-lg">
                اشترك الآن
              </button>
              <input placeholder="أدخل بريدك الإلكتروني هنا" className="absolute top-[6px] left-[219px] text-[16px] text-[#78898f] font-normal"/>
                
             
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="lg:hidden flex flex-col items-center p-4 bg-gradient-to-r from-[#ececf4] to-[#c5dfd8] w-[95%] rounded-lg mx-auto mb-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[20px] font-bold text-[#5CBCAC] text-right">
            احصل على خصم 25% الآن
          </p>
          <p className="text-[16px] text-[#16333B] text-center leading-6">
            احصل على برومو كود خصم 25% على أول عملية شراء لك. لا تفوت الفرصة
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-[213px] h-[90px] mt-4">
          <div className="absolute w-[171px] h-[20px] top-[66px] left-[14px] bg-gradient-to-r from-[#2d5140] to-transparent rounded-full" />
          <img
            src="./img/file-3-1.png"
            alt="Discount"
            className="absolute w-full h-full top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;