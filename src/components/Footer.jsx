import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#F8FAFC] px-4 md:px-8 lg:px-12 pt-8 pb-10">
      <div className="max-w-7xl mx-auto bg-white border border-gray-100 rounded-[32px] px-6 md:px-10 lg:px-14 py-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-[#2563EB]">DigiTools</h2>
            <p className="text-[#64748B] mt-4 leading-8 text-sm md:text-base">
             Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <button className="w-10 h-10 rounded-full bg-[#EEF4FF] text-[#2563EB] flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition">
                <FaFacebookF />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#EEF4FF] text-[#2563EB] flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition">
                <FaTwitter />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#EEF4FF] text-[#2563EB] flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition">
                <FaInstagram />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#EEF4FF] text-[#2563EB] flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition">
                <FaLinkedinIn />
              </button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-4">Products</h3>
            <ul className="space-y-3 text-[#64748B]">
              <li><a className="hover:text-[#2563EB] transition">Features</a></li>
              <li><a className="hover:text-[#2563EB] transition">Pricing</a></li>
              <li><a className="hover:text-[#2563EB] transition">Templates</a></li>
              <li><a className="hover:text-[#2563EB] transition">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-4">Company</h3>
            <ul className="space-y-3 text-[#64748B]">
              <li><a className="hover:text-[#2563EB] transition">About </a></li>
              <li><a className="hover:text-[#2563EB] transition">Blog</a></li>
              <li><a className="hover:text-[#2563EB] transition">Career</a></li>
              <li><a className="hover:text-[#2563EB] transition">Prees</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-4">Resources</h3>
            <ul className="space-y-3 text-[#64748B]">
              <li><a className="hover:text-[#2563EB] transition">Documentation</a></li>
              <li><a className="hover:text-[#2563EB] transition">Help Center </a></li>
              <li><a className="hover:text-[#2563EB] transition">Comunity</a></li>
              <li><a className="hover:text-[#2563EB] transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#64748B]">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <p>Privacy Policy           Terms of Service           Cookies.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;