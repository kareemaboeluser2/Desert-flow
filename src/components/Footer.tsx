import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Clock, Droplets } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREAS } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1F22] text-white border-t border-[#282C30] pt-12 sm:pt-14 pb-32 sm:pb-28 md:pb-12 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand & ROC License (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#D95A2B] flex items-center justify-center text-white shadow-sm shadow-[#D95A2B]/20">
                <Droplets className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                DesertFlow Plumbing
              </span>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Dependable, master-plumber-supervised residential and commercial plumbing solutions across the Phoenix metropolitan area. Transparent diagnostics and zero high-pressure sales.
            </p>

            <div className="pt-2 p-3.5 rounded-xl bg-[#282C30] border border-gray-700/60 text-xs text-gray-300 space-y-1">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#D95A2B]" />
                <span>State Contractor Registration</span>
              </div>
              <p className="text-gray-400">
                Arizona Registrar of Contractors: ROC <span className="text-gray-200 font-mono">{BUSINESS_INFO.rocNumber}</span>
              </p>
              <p className="text-gray-400">Fully Licensed, Bonded & Insured</p>
            </div>
          </div>

          {/* Column 2: Quick Links / Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#D95A2B]">
              Core Plumbing Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <a href="#services" className="hover:text-[#D95A2B] transition-colors py-0.5 inline-block">
                  Water Heater Repair & Replacement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D95A2B] transition-colors py-0.5 inline-block">
                  Electronic Slab Leak Detection
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D95A2B] transition-colors py-0.5 inline-block">
                  Hydro-Jetting & Drain Snaking
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D95A2B] transition-colors py-0.5 inline-block">
                  Whole-Home Repiping & Pressure Valves
                </a>
              </li>
              <li>
                <a href="#commercial" className="hover:text-[#D95A2B] transition-colors py-0.5 inline-block">
                  Commercial Facility Maintenance
                </a>
              </li>
              <li>
                <a href="#emergency" className="hover:text-[#D95A2B] transition-colors font-semibold text-[#D95A2B] py-0.5 inline-block">
                  24/7 Emergency Triage Steps
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Valley Municipalities (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#D95A2B]">
              Valley Coverage
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-1.5 text-xs text-gray-300">
              {SERVICE_AREAS.map((area) => (
                <li key={area.name}>
                  <a href="#service-areas" className="hover:text-[#D95A2B] transition-colors py-0.5 inline-block">
                    {area.name}, AZ
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#D95A2B]">
              Direct Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-gray-300">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center gap-2 text-white font-bold hover:text-[#D95A2B] transition-colors text-sm py-1"
              >
                <Phone className="w-4 h-4 text-[#D95A2B] shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#D95A2B] transition-colors py-0.5 break-all"
              >
                <Mail className="w-4 h-4 text-[#D95A2B] shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-gray-400">
                <MapPin className="w-4 h-4 text-[#D95A2B] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address}, {BUSINESS_INFO.cityStateZip}
                </span>
              </div>

              <div className="flex items-start gap-2 pt-1 text-gray-400">
                <Clock className="w-4 h-4 text-[#D95A2B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-200 font-medium block">
                    {BUSINESS_INFO.hoursRegular}
                  </span>
                  <span className="text-[#D95A2B] font-semibold text-[11px] block mt-0.5">
                    24/7 Emergency Dispatch
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3 text-center sm:text-left">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="text-[11px] text-gray-400">
            Proudly independent and owner-operated in Maricopa County, Arizona.
          </p>
        </div>

      </div>
    </footer>
  );
};
