import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"; // আধুনিক আইকন

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Logo, Description & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Press</a></li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Social Links</h4>
            <div className="flex gap-4">
              {/* Social Icons with Hover */}
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8B5CF6] transition-all duration-300 cursor-pointer">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8B5CF6] transition-all duration-300 cursor-pointer">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8B5CF6] transition-all duration-300 cursor-pointer">
                <FaXTwitter className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Policy */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 DigiTools. All rights reserved.
          </p>
          
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;