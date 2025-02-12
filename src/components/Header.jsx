import React, { useState } from 'react';
import { ChevronLeft, ShoppingCart, Menu, X,ChevronDown } from 'lucide-react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoDropdownOpen, setIsLogoDropdownOpen] = useState(false);

  const navItems = [
    { label: 'الصفحة الرئيسية', active: true },
    { label: 'المجموعة الجديدة', active: false },
    { label: 'العروض الخاصة', active: false },
    { label: 'الأسئلة الشائعة', active: false },
    { label: 'من نحن', active: false }
  ];

  const countries = [
    { currency: 'ريال عماني', country: 'عمان',icon:'./img/flag1.png' },
    { currency: 'ريال سعودي', country: 'السعودية',icon:'./img/flag2.png' }
  ];
  const sidebarSections = [
    {
      title: 'الاقسام',
      items: [
        { label: 'الصفحة الرئيسية', icon: 'https://example.com/home-icon.png' },
        { label: 'المجموعة الجديدة', icon: 'https://example.com/new-icon.png' },
        { label: 'العروض الخاصة', icon: 'https://example.com/offers-icon.png' }
      ]
    },
    {
      title: 'الدولة',
      items: [
        { label: 'عمان', icon: 'https://example.com/oman-flag.png' },
        { label: 'السعودية', icon: 'https://example.com/saudi-flag.png' }
      ]
    },
    {
      title: 'اللغة',
      items: [
        { label: 'العربية', icon: 'https://example.com/arabic-icon.png' },
        { label: 'الإنجليزية', icon: 'https://example.com/english-icon.png' }
      ]
    }
  ];

  const handleLogoClick = () => {
    setIsLogoDropdownOpen(!isLogoDropdownOpen);
  };

  return (
    <div className="w-full z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="w-full h-[120px] bg-white shadow-md z-50">
          <div className="flex items-center justify-between h-full px-4 md:px-[5%]">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-white">2</span>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://c.animaapp.com/yMf9VDvP/img/subway-world-1.svg" 
                  alt="Logo" 
                  className="w-6 h-6 cursor-pointer" 
                  onClick={handleLogoClick}
                />
                {isLogoDropdownOpen && (
                  <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-70 z-40">
                    <table className="w-full">
                      <thead>
                        <tr className="">
                          <th className="px-4 py-2 text-right">اللغة</th>
                          <th className="px-4 py-2 text-right">الدولة</th>
                        </tr>
                      </thead>
                      <tbody>
                        {countries.map((item, index) => (
                          <tr key={index} >
                            <td className="px-4 py-2 text-gray-400 text-right">{item.currency}</td>
                            <td className="px-4 py-2 text-center flex justify-end items-center gap-2">
                              {item.country}
                            <img 
                                src={item.icon} 
                                alt={item.country} 
                                className="w-4 h-4 mr-2" 
                              />
                              
                              </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
            <img 
              src="https://c.animaapp.com/yMf9VDvP/img/g16@2x.png" 
              alt="Graphic" 
              className="w-[105px] h-24" 
            />
            <div className="relative w-80 h-9 border border-gray-200 rounded-lg">
              <img 
                src="https://c.animaapp.com/yMf9VDvP/img/frame.svg" 
                alt="Search" 
                className="absolute top-0 right-[-5px] w-[74px] h-full" 
              />
              <div className="absolute top-1 right-30 text-gray-400 text-sm text-right">
                <input value="...البحث"/>
              </div>
            </div>
          </div>
        </div>
          <div className="flex items-center justify-center space-x-4 mt-4" dir='rtl'>
            {navItems.map((item, index) => (
              <button 
                key={index} 
                className={`text-base text-[20px] ${
                  item.active 
                    ? 'text-[#5CBCAC] font-medium' 
                    : 'text-[#1F403A]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
      </div>

      {/* Mobile Navigation */}
      <div className="block md:hidden">
        {/* Top Header */}
        <div className="h-[120px] bg-white shadow-md flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs text-white">2</span>
              </div>
            </div>
           
          </div>
          <img 
            src="https://c.animaapp.com/yMf9VDvP/img/g16@2x.png" 
            alt="Graphic" 
            className="w-[105px] h-24" 
          />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-[#1f3f3a]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full px-4 mt-2">
          <div className="w-full h-9 border border-gray-200 rounded-lg relative">
            <img 
              src="https://c.animaapp.com/yMf9VDvP/img/frame.svg" 
              alt="Search" 
              className="absolute top-0 right-[-5px] w-[74px] h-full" 
            />
            <div className="absolute top-1 right-20 text-gray-400 text-sm text-right">
            <input value="...البحث"/>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        {/* Sidebar Menu (Right to Left) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#5cbcac] bg-opacity-50 z-50 " onClick={() => setIsMobileMenuOpen(false)}>
            <div className="fixed top-0 right-0 h-full bg-white w-[90%]  shadow-lg transform transition-transform duration-300 ease-in-out rounded-lg">
              {/* Sidebar Header with Close Icon */}
              <div className="p-4 border-b  border-[#4aa89a] flex justify-between items-center">
                <img 
                  src="https://c.animaapp.com/yMf9VDvP/img/g16@2x.png" 
                  alt="Logo" 
                  className="w-24 h-auto mx-auto" 
                />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-black absolute top-4 right-4"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Sections */}
              <div className="p-4">
                {sidebarSections.map((section, index) => (
                  <div key={index} className="flex items-center justify-between mb-5">
                    {
                      section.title=='الدولة' ?  <div  className="flex items-center gap-1">

                      <ChevronDown className="w-6 h-6" />
                            <img 
                                src='./img/flag1.png' 
                                alt={section.title} 
                                className="w-4 h-4 mr-2" 
                              />
                      </div> : <>
                      <ChevronDown className="w-6 h-6" />
                      </>
                    }
                   
                    <h2 className="text-lg font-bold text-black mb-2 ">{section.title}</h2>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;