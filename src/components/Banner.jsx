import React from "react";
import bannerImg from "../assets/banner.png";
import { FaPlay } from "react-icons/fa";
function Banner() {
  return (
    <section className="bg-[#F8FAFC] px-4 md:px-8 lg:px-12 pt-8 md:pt-12 pb-1">
      <div className="max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 md:px-10 lg:px-16 py-12 md:py-16">
          
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#EEF4FF] text-[#2563EB] px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-[#2563EB] rounded-full"></span>
              New: AI-Powered Tools Available
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0F172A]">
              Supercharge YourDigital Workflow
            </h1>

            <p className="text-[#64748B] text-base md:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.   

Explore Products
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2">
             
<button className="btn border-none rounded-full bg-[#4F39F6] hover:bg-[#3B82F6] text-white px-7 h-12 text-base font-semibold shadow-md transition-all duration-300">
  Get Started
</button>
              <button className="btn rounded-full bg-white border border-[#4F39F6] text-[#4F39F6] hover:bg-gray-100 px-7 h-12 text-base font-semibold flex items-center gap-2 transition-all duration-300">
  <FaPlay className="text-sm" />
  Watch Demo
</button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-[#DBEAFE] rounded-full blur-3xl opacity-70"></div>

            <img
              src={bannerImg}
              alt="Digital tools banner"
              className="relative z-10 w-full max-w-md md:max-w-lg object-contain"
            />

            {/* Floating Card 1 */}
            <div className="hidden md:flex absolute top-6 left-0 bg-white shadow-lg rounded-2xl px-4 py-3 items-center gap-3 z-20 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-xl">
                📈
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F172A]">
                  Productivity Boost
                </p>
                <p className="text-xs text-[#64748B]">+85% Efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;