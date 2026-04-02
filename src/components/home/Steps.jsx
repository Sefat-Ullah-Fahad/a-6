import React from "react";
import { FiUserPlus, FiBox, FiSend } from "react-icons/fi"; // প্রফেশনাল আইকন

const Steps = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
      icon: <FiUserPlus className="text-3xl text-[#8B5CF6]" />,
    },
    {
      id: "02",
      title: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",
      icon: <FiBox className="text-3xl text-[#8B5CF6]" />,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: <FiSend className="text-3xl text-[#8B5CF6]" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div className="absolute top-6 right-6 w-8 h-8 bg-[#8B5CF6] text-white rounded-full flex items-center justify-center text-xs font-bold">
              {step.id}
            </div>

            <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mb-6">
              {step.icon}
            </div>

            <h3 className="text-xl font-bold text-[#1E293B] mb-3">
              {step.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
