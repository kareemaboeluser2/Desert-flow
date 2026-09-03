import React from 'react';
import { ShieldCheck, UserCheck, DollarSign, Award, Truck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, VALUE_PROPS } from '../data/content';

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-[#FBF9F5] border-b border-[#E5DFD7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95A2B] bg-[#D95A2B]/10 px-3 py-1 rounded-full mb-3">
            Why Phoenix Homeowners Choose DesertFlow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1F22] tracking-tight">
            Independent Craftsmanship. Not A Corporate Private-Equity Machine.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Many well-known plumbing brands in Phoenix have been purchased by out-of-state investment groups who replace experienced technicians with commission-driven salespeople. DesertFlow remains proudly owner-operated by master plumber Jason Miller.
          </p>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E5DFD7] shadow-sm flex flex-col justify-start h-full">
            <div className="w-12 h-12 rounded-xl bg-[#D95A2B]/10 text-[#D95A2B] flex items-center justify-center mb-4 shrink-0">
              <UserCheck className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1F22]">
              Owner-Supervised Quality
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Every major repair, repipe, and water heater installation is inspected to ensure compliance with strict Arizona uniform plumbing codes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DFD7] shadow-sm flex flex-col justify-start h-full">
            <div className="w-12 h-12 rounded-xl bg-[#D95A2B]/10 text-[#D95A2B] flex items-center justify-center mb-4 shrink-0">
              <DollarSign className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1F22]">
              Zero Sales Commissions
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Our technicians earn professional hourly wages, not commissions. We diagnose what is broken, provide repair options, and never fabricate emergencies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DFD7] shadow-sm flex flex-col justify-start h-full">
            <div className="w-12 h-12 rounded-xl bg-[#D95A2B]/10 text-[#D95A2B] flex items-center justify-center mb-4 shrink-0">
              <Award className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1F22]">
              Arizona ROC Licensed
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Fully licensed, bonded, and insured with the Arizona Registrar of Contractors: ROC {BUSINESS_INFO.rocNumber}. Comprehensive liability and code assurance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DFD7] shadow-sm flex flex-col justify-start h-full">
            <div className="w-12 h-12 rounded-xl bg-[#D95A2B]/10 text-[#D95A2B] flex items-center justify-center mb-4 shrink-0">
              <Truck className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1F22]">
              Fully Stocked Vans
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Our service vehicles carry high-demand Valley replacement parts, commercial hydro-jetters, and digital leak listening gear for single-visit resolutions.
            </p>
          </div>
        </div>

        {/* Master Plumber Pledge Box */}
        <div className="mt-10 bg-white rounded-2xl border border-[#E5DFD7] p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-[#1C1F22] text-[#D95A2B] flex items-center justify-center shrink-0 border-2 border-[#D95A2B]">
            <ShieldCheck className="w-8 h-8" aria-hidden="true" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-[#1C1F22]">
              The DesertFlow Upfront Diagnostic Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              &quot;When you call DesertFlow, you speak with plumbers who respect your home and your budget. We explain the exact mechanics of what failed, show you the worn component, and let you decide how to proceed without pressure.&quot;
            </p>
            <div className="mt-2 flex items-center justify-center md:justify-start gap-3 text-xs font-semibold text-gray-700">
              <span className="text-[#D95A2B]">— {BUSINESS_INFO.ownerName}</span>
              <span>•</span>
              <span className="text-gray-500">{BUSINESS_INFO.ownerTitle}</span>
              <span>•</span>
              <span className="text-gray-500">Phoenix, Arizona</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
