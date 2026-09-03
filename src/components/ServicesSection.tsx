import React from 'react';
import { Flame, Activity, Waves, Wrench, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#D95A2B]" aria-hidden="true" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#D95A2B]" aria-hidden="true" />;
      case 'Waves':
        return <Waves className="w-6 h-6 text-[#D95A2B]" aria-hidden="true" />;
      case 'Wrench':
      default:
        return <Wrench className="w-6 h-6 text-[#D95A2B]" aria-hidden="true" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FBF9F5] border-b border-[#E5DFD7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95A2B] bg-[#D95A2B]/10 px-3 py-1 rounded-full mb-3">
            Core Master Plumber Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1F22] tracking-tight">
            Specialized Solutions for Phoenix Plumbing Challenges
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Extreme heat, high mineral hard water, and shifting desert soil place unique mechanical stresses on Arizona plumbing. We provide specialized diagnostics and durable repairs built to withstand the Valley climate.
          </p>
        </div>

        {/* 4 Priority Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-[#E5DFD7] shadow-sm hover:shadow-md transition-all duration-200 p-5 sm:p-8 flex flex-col justify-between relative group h-full"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-5 sm:left-6 right-5 sm:right-6 h-1 bg-[#D95A2B]/20 group-hover:bg-[#D95A2B] transition-colors rounded-t" />

              <div className="flex-1 flex flex-col">
                {/* Header: Icon & Category Tag */}
                <div className="flex items-center justify-between mt-1">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#D95A2B]/10 flex items-center justify-center shrink-0">
                    {getIcon(service.icon)}
                  </div>
                  {service.tag && (
                    <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1C1F22] text-white">
                      {service.tag}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C1F22] mt-4 sm:mt-5 tracking-tight min-h-0 sm:min-h-[3.25rem] flex items-center">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-gray-700 mt-2 font-medium leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Phoenix Local Context / Problem Solved */}
                <div className="mt-4 p-3 sm:p-3.5 rounded-xl bg-[#F8F6F2] border border-[#EBE6DF]">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#D95A2B] block mb-1">
                    Phoenix Climate Challenge:
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {service.problemSolved}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-700 flex-1">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#D95A2B] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link with 44px touch target */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#E5DFD7] flex items-center justify-between shrink-0">
                <a
                  href="#contact"
                  onClick={() => onSelectService && onSelectService(service.title)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#D95A2B] hover:text-[#BF491E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D95A2B] rounded py-2 min-h-[44px]"
                >
                  <span>Request Diagnostic for This Issue</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
