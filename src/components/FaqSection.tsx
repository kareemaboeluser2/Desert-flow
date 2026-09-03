import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#FBF9F5] border-b border-[#E5DFD7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95A2B] bg-[#D95A2B]/10 px-3 py-1 rounded-full mb-3">
            Common Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1F22] tracking-tight">
            Frequently Asked Plumbing Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Clear, honest answers about Phoenix water conditions, response times, and pricing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E5DFD7] overflow-hidden transition-colors shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D95A2B]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-bold text-sm sm:text-base text-[#1C1F22]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#D95A2B] text-white rotate-180' : 'bg-[#F3EFEA] text-gray-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 pt-1 text-sm text-gray-700 leading-relaxed border-t border-[#F3EFEA]"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Prompt */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#E5DFD7] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="font-bold text-sm text-[#1C1F22] block">
              Have a specific plumbing question or need advice?
            </span>
            <span className="text-xs text-gray-500">
              Speak directly with an on-duty master plumber at DesertFlow.
            </span>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="flex items-center gap-2 bg-[#1C1F22] hover:bg-[#282C30] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#D95A2B]" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
