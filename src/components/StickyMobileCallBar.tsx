import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const StickyMobileCallBar: React.FC = () => {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1C1F22] border-t border-[#282C30] px-3 py-2.5 shadow-2xl safe-area-bottom"
      role="region"
      aria-label="Mobile Quick Contact Bar"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex-1 min-h-[48px] flex items-center justify-center gap-2 bg-[#D95A2B] hover:bg-[#BF491E] active:bg-[#A33D17] text-white py-2.5 px-3 rounded-xl font-bold text-sm xs:text-base shadow-lg transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white truncate"
          aria-label={`Call DesertFlow Plumbing immediately at ${BUSINESS_INFO.phone}`}
        >
          <Phone className="w-4 h-4 xs:w-5 xs:h-5 shrink-0 animate-bounce" aria-hidden="true" />
          <span className="tracking-tight truncate">Call: {BUSINESS_INFO.phone}</span>
        </a>
        <a
          href="#contact"
          className="min-h-[48px] min-w-[48px] flex items-center justify-center p-3 bg-[#282C30] text-gray-200 hover:text-white rounded-xl border border-gray-700/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D95A2B] shrink-0"
          aria-label="Jump to Online Scheduling Form"
          title="Schedule Service"
        >
          <Calendar className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};
