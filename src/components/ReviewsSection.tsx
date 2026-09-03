import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/content';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white border-b border-[#E5DFD7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95A2B] bg-[#D95A2B]/10 px-3 py-1 rounded-full mb-3">
            Real Phoenix Homeowners & Businesses
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1F22] tracking-tight">
            Straightforward Service. Verified Local Feedback.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Read authentic experiences from residential and commercial clients across the Phoenix Valley.
          </p>
        </div>

        {/* Reviews 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FBF9F5] rounded-2xl border border-[#E5DFD7] p-6 sm:p-7 flex flex-col justify-between h-full shadow-sm relative hover:border-[#D95A2B]/40 transition-colors"
            >
              <div className="flex-1 flex flex-col">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                  ))}
                </div>

                {/* Service Tag */}
                <div className="mb-3">
                  <span className="inline-block text-[11px] font-semibold text-[#D95A2B] bg-[#D95A2B]/10 px-2.5 py-0.5 rounded-full">
                    {review.serviceType}
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="text-sm text-gray-800 leading-relaxed font-normal italic flex-1">
                  &quot;{review.quote}&quot;
                </blockquote>
              </div>

              {/* Author & Location Footer */}
              <div className="mt-6 pt-4 border-t border-[#E5DFD7] flex items-center justify-between text-xs shrink-0">
                <div>
                  <span className="font-bold text-[#1C1F22] block">{review.author}</span>
                  <span className="text-gray-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D95A2B]" />
                    {review.location}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Work</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Review Transparency Note */}
        <div className="mt-8 text-center text-xs text-gray-500">
          Reviews verified directly through post-service invoicing and direct customer feedback across Phoenix, Scottsdale, and Tempe.
        </div>

      </div>
    </section>
  );
};
