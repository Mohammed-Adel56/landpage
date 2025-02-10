import React from 'react';

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#f3f6f5] text-[#16333b] py-10 px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo - First on mobile, last on desktop */}
          <div className="order-1 md:order-4 mx-auto">
            <img src="./img/g-16.png" alt="Logo" />
          </div>

          {/* Pages - Second on mobile, first on desktop */}
          <div className="order-2 md:order-3 mx-auto">
            <h3 className="text-xl font-bold mb-4">صفحات تهمك</h3>
            <ul className="space-y-2">
              <li>الصفحة الرئيسية</li>
              <li>سياسة الخصوصية</li>
              <li>شروط الخدمة</li>
              <li>اتصل بنا</li>
            </ul>
          </div>

          {/* Store - Third on mobile, second on desktop */}
          <div className="order-3 md:order-2 mx-auto">
            <h3 className="text-xl font-bold mb-4">المتجر</h3>
            <ul className="space-y-2">
              <li>الأسئلة الشائعة</li>
              <li>الشحن والإرجاع</li>
              <li>من نحن</li>
              <li>المتجر</li>
            </ul>
          </div>

          {/* Social Media - Last on mobile, third on desktop */}
          <div className="order-4 md:order-1 mx-auto">
            <h3 className="text-xl font-bold mb-4">وسائل التواصل الاجتماعي</h3>
            <div className="flex gap-4">
              <img src="https://c.animaapp.com/yMf9VDvP/img/facebook-1@2x.png" alt="Facebook" className="w-8 h-8" />
              <img src="https://c.animaapp.com/yMf9VDvP/img/facebook-2@2x.png" alt="Facebook" className="w-8 h-8" />
              <img src="https://c.animaapp.com/yMf9VDvP/img/facebook-3@2x.png" alt="Facebook" className="w-8 h-8" />
              <img src="https://c.animaapp.com/yMf9VDvP/img/facebook-4@2x.png" alt="Facebook" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div className="flex items-center justify-center gap-3 text-center bg-gray-800 text-white mt-2 p-1">
        <p>جميع الحقوق محفوظة لتطوير 2024</p>
        <img className="bi-c-circle-2" src="./img/bi-c-circle.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;