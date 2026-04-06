import React from "react";

function Stats() {
  return (
    <section className="px-4 md:px-8 lg:px-12 mt-0 mx-auto">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#7C3AED] py-8 ">
        
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 text-white">
          
          <div className="text-center py-4">
            <div className="text-3xl md:text-4xl font-bold">50K+</div>
            <p className="text-white/80 mt-2 text-sm">Active Users</p>
          </div>

          <div className="text-center py-4">
            <div className="text-3xl md:text-4xl font-bold">200+</div>
            <p className="text-white/80 mt-2 text-sm">Premium Tools</p>
          </div>

          <div className="text-center py-4">
            <div className="text-3xl md:text-4xl font-bold">4.9</div>
            <p className="text-white/80 mt-2 text-sm">Rating</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Stats;