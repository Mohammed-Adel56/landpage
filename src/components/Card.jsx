import React from 'react'

export default function Card() {
  return (
    <>
    <div className="bg-[#f0f0f0] p-6 rounded-lg shadow-md">
            <div className="relative">
              <img src="https://c.animaapp.com/yMf9VDvP/img/frame-36-5@2x.png" alt="Product" className="w-full h-full object-cover rounded-lg" />
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
  )
}
