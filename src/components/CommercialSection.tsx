import React from 'react';
import { Building2, ShieldCheck, Check, ArrowRight, Phone } from 'lucide-react';
import { COMMERCIAL_SERVICE, BUSINESS_INFO } from '../data/content';

export const CommercialSection: React.FC = () => {
  return (
    <section id="commercial" className="py-16 lg:py-20 bg-white border-b border-[#E5DFD7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1C1F22] rounded-3xl p-8 sm:p-12 text-white border border-[#282C30] shadow-xl relative overflow-hidden">
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="comm-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#FFFFFF" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#comm-grid)" />
            </svg>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#D95A2B]/15 text-[#D95A2B] border border-[#D95A2B]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-4 h-4" aria-hidden="true" />
                  <span>Commercial & Property Management</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-4">
                  {COMMERCIAL_SERVICE.headline}
                </h2>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl font-normal mt-3">
                  {COMMERCIAL_SERVICE.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {COMMERCIAL_SERVICE.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#D95A2B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-4 bg-[#282C30] p-6 sm:p-7 rounded-2xl border border-gray-700/70 flex flex-col justify-between space-y-5 h-full">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-[#D95A2B] font-semibold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed & Bonded</span>
                </div>
                <h3 className="text-xl font-bold text-white">Commercial Dispatch Line</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Priority scheduling and direct commercial account billing for Valley facility operators and property managers.
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#D95A2B] hover:bg-[#BF491E] text-white py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call Commercial Intake</span>
                </a>

                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-gray-600 py-3 rounded-xl font-medium text-xs transition-colors"
                >
                  <span>Request Facility Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
