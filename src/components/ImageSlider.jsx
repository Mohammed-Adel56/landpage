import React from 'react'

export default function ImageSlider() {
  return (
    <>
<div className='hidden md:block'>
      

      {/* Main Content */}
      <div className="relative w-full min-h-screen mt-[10px] bg-white">
        <div className=" w-full h-[720px]  bg-black/20 rounded-2xl shadow-lg overflow-hidden bg-[url('https://c.animaapp.com/yMf9VDvP/img/desktop---2.png')] bg-cover bg-center">
          <div className="relative w-full h-[720px]">
            <img
              src="https://c.animaapp.com/yMf9VDvP/img/file-1.png"
              alt="Background"
              className="absolute w-[604px] h-[720px] top-0 left-[19px]"
            />
            <div className="absolute w-full h-[719px] top-[1px] left-0 bg-black/40"></div>
            <div className="absolute w-[653px] top-[180px] left-[45%] flex flex-col items-end gap-[120px]">
              <div className="flex flex-col items-end gap-[32px] w-full">
                <div className="w-[500px] flex items-center justify-center gap-[10px]">
                  <h1 className="text-[39px] font-bold text-white leading-[56.6px] text-right">
                    اكتشف أناقة الشرق الأوسط
                  </h1>
                </div>
                <p className="text-[25px] font-medium text-gray-100 leading-[36.3px] text-right">
                  الملابس ليست مجرد وسيلة للتدفئة أو الحماية، بل هي أيضًا وسيلة
                  للتعبير عن الذات وتعكس ثقافاتنا وتقاليدنا
                </p>
              </div>
              <div className="w-[210px] h-[42px] border border-[#5CBCAC] rounded-[16px] flex items-center justify-center">
                <button className="text-base font-normal text-white">
                  تسوق الآن
                </button>
              </div>
            </div>
            <div className="absolute top-[676px] left-[610px] flex items-center gap-[4px] p-[8px_12px] bg-white/20 rounded-[24px]">
              <div className="w-[60px] h-[12px] bg-gray-900 bg-icons rounded-[8px]"></div>
              <div className="w-[36px] h-[12px] bg-gray-800 rounded-[8px]"></div>
              <div className="w-[24px] h-[12px] bg-gray-600 rounded-[8px]"></div>
              <div className="w-[12px] h-[12px] bg-gray-500 rounded-[8px]"></div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
    <div className='block md:hidden'>
      

      {/* Main Content */}
      <div className="relative w-full min-h-screen mt-[10px] bg-white ">
        <div className=" w-full h-[720px]  bg-black/20 rounded-2xl shadow-lg overflow-hidden bg-[url('./img/backgroundMobile.png')] bg-cover bg-center">
          <div className="relative w-full h-[720px]">
            <img
              src="https://c.animaapp.com/yMf9VDvP/img/file-1.png"
              alt="Background"
              className="object-cover absolute top-[280px] left-[-30px] "
            />
            <div className="absolute w-full h-[719px] top-[1px] left-0 bg-black/40"></div>
            <div className="absolute w-[370px] top-[50px]  flex flex-col items-end gap-[30px]">
              <div className="flex flex-col items-end  w-full p-2">
                <div className=" flex items-center justify-center gap-[15px]">
                  <h1 className="text-[16px] font-bold text-white leading-[56.6px] text-right">
                    اكتشف أناقة الشرق الأوسط
                  </h1>
                </div>
                <p className="text-[13px] font-medium text-gray-100 leading-[36.3px] text-right">
                  الملابس ليست مجرد وسيلة للتدفئة أو الحماية، بل هي أيضًا وسيلة
                  للتعبير عن الذات وتعكس ثقافاتنا وتقاليدنا
                </p>
              </div>
              <div className="w-[200px] h-[42px] border border-icons border-white rounded-[16px] flex items-center justify-center">
                <button className="text-base text-[13px] font-normal text-white">
                  تسوق الآن
                </button>
              </div>
            </div>
            <div className="absolute top-[676px] left-[610px] flex items-center gap-[4px] p-[8px_12px] bg-white/20 rounded-[24px]">
              <div className="w-[60px] h-[12px] bg-gray-900 bg-icons rounded-[8px]"></div>
              <div className="w-[36px] h-[12px] bg-gray-800 rounded-[8px]"></div>
              <div className="w-[24px] h-[12px] bg-gray-600 rounded-[8px]"></div>
              <div className="w-[12px] h-[12px] bg-gray-500 rounded-[8px]"></div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  
    </>
  )
}
