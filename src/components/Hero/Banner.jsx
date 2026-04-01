import React from 'react';
import bannerImg from '../../assets/banner.png'; // আপনার assets ফোল্ডার থেকে ইমেজ ইম্পোর্ট
import { BsPlayCircle } from 'react-icons/bs'; // প্লে আইকনের জন্য

const Banner = () => {
  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="order-2 lg:order-1 text-left">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F3E8FF] text-[#8B5CF6] px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">New: AI-Powered Tools Available</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-[#1E293B] leading-tight mb-6">
            Supercharge Your <br className="hidden lg:block" />
            <span className="text-[#1E293B]">Digital Workflow</span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          <p className="text-gray-400 mb-8 font-medium cursor-pointer hover:text-[#8B5CF6] transition-colors">
            Explore Products
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <button className="btn bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-none px-8 rounded-full normal-case text-base font-semibold">
              Explore Products
            </button>
            
            <button className="btn btn-outline border-[#D8B4FE] hover:border-[#8B5CF6] hover:bg-transparent text-[#8B5CF6] px-8 rounded-full flex items-center gap-2 normal-case text-base font-semibold">
              <BsPlayCircle className="text-2xl" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-full">
            {/* Image from your assets */}
            <img 
              src={bannerImg} 
              alt="Digital Workflow Banner" 
              className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl"
            />
            {/* Optional Gradient Background behind image for look */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;