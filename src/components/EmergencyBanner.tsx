import React from 'react';
import { AlertTriangle, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const EmergencyBanner: React.FC = () => {
  return (
    <section id="emergency" className="py-10 bg-[#FFF8F5] border-b border-[#E5DFD7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border-2 border-[#D95A2B]/40 shadow-sm p-4 sm:p-8 lg:p-10 relative overflow-hidden">
          
          {/* Subtle desert accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D95A2B]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Content: Emergency Triage Alert */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#D95A2B]/10 text-[#D95A2B] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Active Leak or Water Emergency?</span>
              </div>

              <h2 className="text-xl sm:text-3xl font-extrabold text-[#1C1F22] tracking-tight">
                Immediate Action Steps Before Our Technician Arrives
              </h2>

              <p className="text-gray-700 text-xs sm:text-base leading-relaxed">
                Water damage multiplies every minute. If you have an active rupture, burst supply line, or overflowing water heater, follow these 3 steps immediately:
              </p>

              {/* 3 Step Triage Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1 sm:pt-2">
                <div className="bg-[#FBF9F5] p-3.5 sm:p-4 rounded-xl border border-[#E5DFD7] flex flex-col justify-start h-full">
                  <div className="flex items-center gap-2 text-[#D95A2B] font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#D95A2B] text-white flex items-center justify-center text-xs shrink-0 font-extrabold">
                      1
                    </span>
                    <span>Shut Off Water</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Turn your main shutoff valve clockwise (usually located near the front hose bib or street curb box).
                  </p>
                </div>

                <div className="bg-[#FBF9F5] p-3.5 sm:p-4 rounded-xl border border-[#E5DFD7] flex flex-col justify-start h-full">
                  <div className="flex items-center gap-2 text-[#D95A2B] font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#D95A2B] text-white flex items-center justify-center text-xs shrink-0 font-extrabold">
                      2
                    </span>
                    <span>Kill Power to Heater</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Switch off the electrical breaker or turn the gas thermostat valve to &quot;OFF&quot; to prevent element burnout.
                  </p>
                </div>

                <div className="bg-[#FBF9F5] p-3.5 sm:p-4 rounded-xl border border-[#E5DFD7] flex flex-col justify-start h-full">
                  <div className="flex items-center gap-2 text-[#D95A2B] font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#D95A2B] text-white flex items-center justify-center text-xs shrink-0 font-extrabold">
                      3
                    </span>
                    <span>Call Live Dispatch</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Speak directly with our on-call technician. We provide over-the-phone mitigation while in transit.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Action: Emergency Phone Call Box */}
            <div className="lg:col-span-4 bg-[#1C1F22] rounded-xl p-5 sm:p-6 text-white text-center flex flex-col items-center justify-center space-y-3.5 sm:space-y-4 shadow-md">
              <div className="w-12 h-12 rounded-full bg-[#D95A2B]/20 text-[#D95A2B] flex items-center justify-center">
                <Phone className="w-6 h-6 animate-pulse" aria-hidden="true" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold block">
                  Valley-Wide Emergency Dispatch
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white hover:text-[#D95A2B] transition-colors block mt-1 tracking-tight"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <span className="text-xs text-gray-400 block mt-1">
                  Average Response: 30–60 Minutes
                </span>
              </div>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full bg-[#D95A2B] hover:bg-[#BF491E] text-white py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
              >
                <span>Dispatch Technician Now</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <p className="text-[11px] text-gray-400">
                Phoenix • Scottsdale • Tempe • Mesa • Chandler • Gilbert
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
