import React from 'react';
import { FiCheck } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`relative p-8 rounded-3xl border transition-all duration-500 flex flex-col h-full cursor-default

              hover:-translate-y-3 hover:shadow-2xl 
              ${
              plan.isPopular 
                ? 'bg-[#8B5CF6] text-white border-[#8B5CF6] shadow-xl scale-105 z-10' 
                : 'bg-white text-gray-900 border-gray-100 shadow-sm'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-4 py-1 rounded-full border border-[#FDE68A] shadow-sm uppercase tracking-wider">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className={`text-2xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-[#1E293B]'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm ${plan.isPopular ? 'text-white/80' : 'text-gray-500'}`}>
                {plan.description}
              </p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-extrabold">${plan.price}</span>
              <span className={`text-lg font-medium ${plan.isPopular ? 'text-white/80' : 'text-gray-500'}`}>
                /Month
              </span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm group">
                  <FiCheck className={`text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-125 ${plan.isPopular ? 'text-white' : 'text-[#8B5CF6]'}`} />
                  <span className={plan.isPopular ? 'text-white/90' : 'text-gray-600'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            
            <button 
              className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer active:scale-95
                ${
                plan.isPopular 
                  ? 'bg-white text-[#8B5CF6] hover:bg-gray-100 hover:shadow-lg' 
                  : 'bg-[#8B5CF6] text-white hover:bg-[#7C3AED] hover:shadow-lg hover:shadow-purple-200'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;