import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // মেনু এবং ক্লোজ আইকন

const Navbar = ({ cartCount = 0 }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // মেনু আইটেমগুলো (একবার লিখে দুই জায়গায় ব্যবহার করব)
  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navbar Start: Logo */}
        <div className="navbar-start">
          {/* Logo - ক্লিক করলে রুটে (/) চলে যাবে */}
          <a href="/" className="text-2xl sm:text-3xl font-bold text-[#8B5CF6] cursor-pointer tracking-tight">
            DigiTools
          </a>
        </div>

        {/* Navbar Center: Desktop Menu (Hidden on Mobile) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-600 hover:text-[#8B5CF6] font-medium transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End: Icons & Mobile Toggle */}
        <div className="navbar-end flex items-center gap-3 sm:gap-6">
          
          {/* Cart Icon */}
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FiShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="badge badge-sm indicator-item bg-[#8B5CF6] text-white border-none">
                {cartCount}
              </span>
            </div>
          </button>

          {/* Login Link (Desktop only) - স্ক্রিনশটের মতো */}
          <a href="#login" className="hidden sm:flex text-gray-700 hover:text-[#8B5CF6] font-medium cursor-pointer text-sm">
            Login
          </a>
          
          {/* Get Started Button (Desktop only) */}
          <button className="hidden sm:flex btn bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full px-6 border-none capitalize text-sm font-medium">
            Get Started
          </button>

          {/* Mobile Menu Button - ক্লিক করলে সাইডবার খুলবে */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 text-gray-700"
          >
            <HiMenuAlt3 className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* --- Mobile Sidebar (Drawer Effect) --- */}
      {/* Overlay - সাইডবার খুললে ব্যাকগ্রাউন্ড হালকা কালো হবে */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar Content */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5 flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-gray-700 hover:text-[#8B5CF6]">
              <HiX className="h-7 w-7" />
            </button>
          </div>

          {/* Sidebar Menu Links */}
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-[#8B5CF6]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Login/Get Started */}
          <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-3">
             <a href="#login" className="btn btn-ghost text-gray-700 hover:bg-gray-50 hover:text-[#8B5CF6] w-full rounded-lg font-medium text-base border border-gray-200">
               Login
             </a>
             <button className="btn bg-[#8B5CF6] hover:bg-[#7C3AED] text-white w-full rounded-lg border-none">
                Get Started
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;