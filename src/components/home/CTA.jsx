import React from 'react';

const CTA = () => {
  return (
    /* পুরো স্ক্রিন জুড়ে গ্রাডিয়েন্ট ব্যাকগ্রাউন্ড */
    <section className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] py-20 px-4 mt-20">
      <div className="max-w-4xl mx-auto text-center text-white">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Ready To Transform Your Workflow?
        </h2>
        
        {/* Subtext */}
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
        </p>

        {/* Buttons with Hover Effects */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {/* Primary Button */}
          <button className="px-8 py-4 bg-white text-[#8B5CF6] rounded-full font-bold text-sm transition-all duration-300 cursor-pointer hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-lg">
            Explore Products
          </button>
          
          {/* Outline Button */}
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-sm transition-all duration-300 cursor-pointer hover:bg-white hover:text-[#8B5CF6] hover:scale-105 active:scale-95 shadow-lg">
            View Pricing
          </button>
        </div>

        {/* Bottom Note */}
        <p className="text-white/60 text-xs md:text-sm tracking-wide">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;