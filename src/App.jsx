import { useState } from 'react';
import Header from "./components/Header";
import ImageSlider from './components/ImageSlider';
import FeaturedProducts from './components/FeaturedProducts ';
import Footer from './components/Footer';
import Sections from './components/Sections';
import DiscountSection from './components/DiscountSection';
import ShareYourLooks from './components/ShareYourLooks';

function App() {

  return (
    <div className="overflow-x-hidden">
      <Header/>
      <ImageSlider/>
      <FeaturedProducts title="وصل  حديثاً" />
      <Sections/>
      <DiscountSection/>
      <FeaturedProducts title="الاكثر  مبيعاً" />
      <ShareYourLooks/>
      
      <Footer />
    </div>
  )
}

export default App
