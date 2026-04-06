import React from "react";

function SimplePricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      desc: "Perfect for getting started",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      highlight: false,
      badge: "",
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      desc: "Best for professionals.",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      highlight: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      desc: "For teams and businesses.",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
      ],
      buttonText: "Contact Sales",
      highlight: false,
      badge: "",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] px-4 md:px-8 lg:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
         
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#64748B] text-sm md:text-base mt-4 leading-7">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-[28px] border p-6 shadow-sm transition duration-300 hover:shadow-md relative flex flex-col ${
                plan.highlight
                  ? "bg-[#0F172A] text-white border-[#0F172A] lg:-mt-3 lg:mb-3"
                  : "bg-white border-gray-100 text-[#0F172A]"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-5 right-5">
                  <span className="bg-[#2563EB] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3
                className={`text-xl font-bold ${
                  plan.highlight ? "text-white" : "text-[#0F172A]"
                }`}
              >
                {plan.name}
              </h3>

              <p
                className={`mt-3 leading-7 text-sm ${
                  plan.highlight ? "text-[#CBD5E1]" : "text-[#64748B]"
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-6 flex items-end gap-1">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlight ? "text-white" : "text-[#0F172A]"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm mb-1 ${
                    plan.highlight ? "text-[#CBD5E1]" : "text-[#64748B]"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <div className="mt-6 space-y-3 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span
                      className={`mt-[2px] text-sm ${
                        plan.highlight ? "text-[#60A5FA]" : "text-[#2563EB]"
                      }`}
                    >
                      ✔
                    </span>
                    <p
                      className={`text-sm ${
                        plan.highlight ? "text-[#E2E8F0]" : "text-[#475569]"
                      }`}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button
                className={`btn w-full mt-8 rounded-full h-11 text-sm font-semibold border-none ${
                  plan.highlight
                    ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
                    : "bg-[#EEF4FF] hover:bg-[#DBEAFE] text-[#2563EB]"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SimplePricingSection;