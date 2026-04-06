import React from "react";

function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: "https://i.ibb.co/Q7j5YB0B/user.png",
    },
    {
      number: "02",
      title: "Choose Product",
      desc: "Browse premium digital products and select the resources that fit your needs.",
      icon: "https://i.ibb.co.com/j9sqrrK3/package.png",
    },
    {
      number: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: "https://i.ibb.co.com/tMM2gTLv/rocket.png",
    },
  ];

  return (
    <section className="bg-white px-4 md:px-8 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight">
            Get Started in 3 Steps
          </h2>
          <p className="text-[#64748B] text-base md:text-lg mt-5 leading-8">
            Start using premium digital products without any complicated setup.
            Everything is designed to be fast, simple, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#F8FAFC] border border-gray-100 rounded-[30px] p-8 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] flex items-center justify-center overflow-hidden">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-8 h-8 object-contain "
                  />
                </div>

                <span className="text-0.5xl text-white font-bold btn rounded-full bg-[#4F39F6] border border-[#4F39F6]">
                  {step.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                {step.title}
              </h3>
              <p className="text-[#64748B] leading-8 text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StepsSection;