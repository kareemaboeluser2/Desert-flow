import React from 'react';
import { Phone, ShieldCheck, CheckCircle2, Clock, MapPin, Wrench, Flame, Activity } from 'lucide-react';
import { BUSINESS_INFO, VALUE_PROPS } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative bg-[#1C1F22] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-[#282C30]">
      {/* Background Subtle Gradient & Grid Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Conversion Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Trust Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#282C30] border border-gray-700/60 rounded-full px-3.5 py-1.5 text-xs sm:text-sm text-gray-200">
              <span className="w-2 h-2 rounded-full bg-[#D95A2B] animate-ping" aria-hidden="true" />
              <span className="font-semibold text-[#D95A2B]">Phoenix Metro Service</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-300">24/7 Emergency Dispatch Active</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Phoenix Plumbing Done Right.{' '}
              <span className="text-[#D95A2B] block sm:inline">
                Straightforward Diagnostics. Zero Upselling.
              </span>
            </h1>

            {/* Sub-headline / Core Description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-normal">
              Licensed residential and commercial plumbing repairs across Phoenix, Scottsdale, Tempe, and Mesa. Water heaters, electronic leak detection, and precision drain cleaning—handled directly by licensed master craftsmen with guaranteed upfront quotes.
            </p>

            {/* Dual Conversion CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary Inbound Phone CTA */}
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="min-h-[56px] flex items-center justify-center gap-3 bg-[#D95A2B] hover:bg-[#BF491E] active:bg-[#A33D17] text-white px-7 py-3.5 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-[#D95A2B]/20 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1F22]"
                aria-label={`Call DesertFlow Plumbing now at ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-5 h-5 animate-pulse shrink-0" aria-hidden="true" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              {/* Secondary Online Scheduling CTA */}
              <a
                href="#contact"
                className="min-h-[56px] flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 active:bg-white/15 text-white border-2 border-gray-600 hover:border-gray-400 px-6 py-3 rounded-xl font-semibold text-base transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D95A2B]"
              >
                <span>Schedule Diagnostic</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Immediate Proof Points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[#282C30] text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D95A2B] shrink-0" aria-hidden="true" />
                <span>ROC Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D95A2B] shrink-0" aria-hidden="true" />
                <span>Zero Commission Sales</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-[#D95A2B] shrink-0" aria-hidden="true" />
                <span>Same-Day Availability</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Diagnostic Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#282C30] border border-gray-700/80 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-200">
                    Valley Field Dispatch
                  </span>
                </div>
                <span className="text-xs text-[#D95A2B] font-semibold bg-[#D95A2B]/10 px-2 py-0.5 rounded border border-[#D95A2B]/30">
                  Live Status
                </span>
              </div>

              {/* Diagnostic Capability Pillars */}
              <div className="mt-5 space-y-4">
                <div className="p-3.5 rounded-xl bg-[#1C1F22] border border-gray-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#D95A2B]/10 text-[#D95A2B] shrink-0">
                    <Flame className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Water Heater Emergency</h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Fast leak diagnosis, element rebuilds & tank replacements for hard-water mineral stress.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1C1F22] border border-gray-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#D95A2B]/10 text-[#D95A2B] shrink-0">
                    <Activity className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Non-Invasive Slab Leak Detection</h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Acoustic sensors pinpoint underground pipe breaches under concrete slabs.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1C1F22] border border-gray-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#D95A2B]/10 text-[#D95A2B] shrink-0">
                    <Wrench className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Master Plumber Supervision</h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Every project verified by owner Jason Miller. Transparent itemized proposals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Dispatch Footnote */}
              <div className="mt-5 pt-4 border-t border-gray-700/60 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D95A2B]" />
                  <span>Phoenix, Scottsdale, Tempe, Mesa</span>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="text-white font-semibold hover:text-[#D95A2B] transition-colors"
                >
                  Direct: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
