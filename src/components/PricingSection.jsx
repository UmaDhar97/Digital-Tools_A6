import React from "react";

function PricingSection() {
  return (
    <section className="bg-white px-5 md:px-8 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#7C3AED] rounded-[36px] px-6 md:px-12 lg:px-16 py-14 md:py-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your Workflow?
            </h2>

            <p className="text-[#E0E7FF] text-base md:text-lg mt-6 leading-8 max-w-2xl mx-auto">
              Join thousands of professionals who are already using Digitools
              to work smarter. Start your free trial today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <button className="btn border-none rounded-full bg-white text-[#4F46E5] hover:bg-gray-100 px-8 h-12 text-base font-semibold shadow-md">
                Explore Products
              </button>

              <button className="btn rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-[#4F46E5] px-8 h-12 text-base font-semibold">
                View Pricing
              </button>
            </div>

            <p className="text-[#E0E7FF] text-sm md:text-base mt-6 leading-8 text-center max-w-2xl mx-auto">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;