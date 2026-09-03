import React, { useState } from 'react';
import { MapPin, Clock, ArrowRight, Shield } from 'lucide-react';
import { SERVICE_AREAS, BUSINESS_INFO } from '../data/content';

export const ServiceAreasSection: React.FC = () => {
  const [selectedAreaIndex, setSelectedAreaIndex] = useState(0);
  const activeArea = SERVICE_AREAS[selectedAreaIndex];

  return (
    <section id="service-areas" className="py-16 lg:py-24 bg-[#FBF9F5] border-b border-[#E5DFD7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95A2B] bg-[#D95A2B]/10 px-3 py-1 rounded-full mb-3">
            Valley-Wide Service Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1F22] tracking-tight">
            Serving Phoenix & Surrounding Valley Communities
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Our fully equipped service vans are strategically positioned across the Valley for rapid emergency dispatch and scheduled maintenance visits.
          </p>
        </div>

        {/* Interactive City Selector & Detail Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: City Buttons */}
          <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">
              Select Your Valley City:
            </span>
            {SERVICE_AREAS.map((area, idx) => {
              const isSelected = selectedAreaIndex === idx;
              return (
                <button
                  key={area.name}
                  type="button"
                  onClick={() => setSelectedAreaIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#1C1F22] text-white border-[#1C1F22] shadow-md'
                      : 'bg-white text-[#1C1F22] border-[#E5DFD7] hover:border-[#D95A2B]/50 hover:bg-[#FFFDFB]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      className={`w-5 h-5 ${
                        isSelected ? 'text-[#D95A2B]' : 'text-gray-400'
                      }`}
                    />
                    <div>
                      <span className="font-bold text-sm sm:text-base block">
                        {area.name}
                      </span>
                      <span
                        className={`text-xs ${
                          isSelected ? 'text-gray-300' : 'text-gray-500'
                        }`}
                      >
                        {area.responseTime}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 ${
                      isSelected ? 'text-[#D95A2B]' : 'text-gray-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected City Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5DFD7] p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5DFD7]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D95A2B]">
                    Active Coverage Zone
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#1C1F22] mt-0.5">
                    {activeArea.name}, Arizona
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 bg-[#FFF4EE] text-[#D95A2B] px-3 py-1 rounded-full text-xs font-bold border border-[#D95A2B]/30 shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activeArea.responseTime}</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Key Neighborhoods & Subdivisions
                  </h4>
                  <p className="text-sm font-semibold text-[#1C1F22] mt-1">
                    {activeArea.coverage}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F6F2] border border-[#EBE6DF]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D95A2B]">
                    Neighborhood Plumbing Profile
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1 leading-relaxed">
                    {activeArea.primaryFocus}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 mt-6 border-t border-[#E5DFD7]">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#D95A2B] hover:bg-[#BF491E] text-white px-5 py-3 rounded-lg font-bold text-sm shadow-sm transition-colors"
              >
                <span>Call {activeArea.name} Dispatch</span>
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-[#1C1F22] hover:bg-[#F3EFEA] border border-[#E5DFD7] px-5 py-3 rounded-lg font-semibold text-sm transition-colors"
              >
                <span>Book Diagnostic Appointment</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
