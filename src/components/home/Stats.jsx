import React from 'react';

const Stats = () => {
  return (
    /* পুরো স্ক্রিন জুড়ে ব্যাকগ্রাউন্ড থাকবে */
    <section className="w-full bg-[#8B5CF6] py-16 mb-20">
      
      {/* ভেতরের কন্টেন্টগুলো ৭xl উইডথ-এর ভেতরে থাকবে */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center text-center text-white">
          
          {/* Stat 1 */}
          <div className="flex flex-col gap-2 md:border-r border-white/20">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">50K+</h2>
            <p className="text-white/80 font-medium uppercase tracking-wider text-sm">Active Users</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-2 md:border-r border-white/20">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">200+</h2>
            <p className="text-white/80 font-medium uppercase tracking-wider text-sm">Premium Tools</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">4.9</h2>
            <p className="text-white/80 font-medium uppercase tracking-wider text-sm">User Rating</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;