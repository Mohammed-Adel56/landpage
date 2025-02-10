import React from 'react';

const NewArrivals = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">وصل حديثا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative">
              <img src="https://c.animaapp.com/yMf9VDvP/img/frame-36-5@2x.png" alt="Product" className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">خصم 25%</div>
            </div>
            <h3 className="text-xl font-semibold mt-4">عبايات ملونة</h3>
            <p className="text-gray-600">Code -25 -Rose</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-500 line-through">84 ر.ع</span>
              <span className="text-green-500 font-bold">43 ر.ع</span>
            </div>
          </div>
          {/* Repeat for other products */}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;