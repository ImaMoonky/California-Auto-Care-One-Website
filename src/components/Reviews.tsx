import React from 'react';
import { Star } from 'lucide-react';

interface ReviewItem {
  id: string;
  stars: number;
  quote: string;
  author: string;
  vehicleLocation?: string;
}

export const Reviews: React.FC = () => {
  const reviews: ReviewItem[] = [
    {
      id: 'rev-1',
      stars: 5,
      quote:
        '“Fast and quality work from the people over at California Auto Care! They got my badly sun damaged Honda looking brand new again and it looks amazing.”',
      author: 'David A.',
      vehicleLocation: 'Honda Civic',
    },
    {
      id: 'rev-2',
      stars: 5,
      quote:
        '“California Auto Care fixed my car, and fixed all of the codes and problems that I had going so that I could start the school year off with a reliable vehicle. Now my car looks and drives great. Highly recommended.”',
      author: 'Clarisse H.',
      vehicleLocation: 'Suburu Outback',
    },
    {
      id: 'rev-3',
      stars: 5,
      quote:
        '“Jose has worked on many of my vehicles throughout the years. He is my go to mechanic for all of my cars. There is nobody more transparent about pricing or knowledgeable about cars in the bay area. Would visit again.”',
      author: 'David H.',
      vehicleLocation: 'Bay Area Local',
    },
  ];

  return (
    <section
      id="reviews"
      className="w-full bg-[#0c0d10] border-y border-stone-800/90 text-white py-14 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="font-jakarta text-[11px] sm:text-xs uppercase font-extrabold tracking-[0.2em] text-[#e04838] block mb-2">
            VERIFIED DRIVER REVIEWS
          </span>
          <h2 className="font-domine text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Don't take our word for it.
          </h2>
          <p className="font-jakarta text-stone-400 text-sm sm:text-base leading-relaxed">
            Real Bay Area drivers. Flawless metalwork, transparent estimates, no games.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#15171e] border border-white/5 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl min-h-[260px] hover:border-stone-700/60 transition-colors"
            >
              <div>
                {/* Top Row: Stars + Google Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current text-[#f59e0b]"
                      />
                    ))}
                  </div>

                  {/* Google Icon Badge */}
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center font-bold text-[#4285F4] text-sm select-none border border-white/10">
                    G
                  </div>
                </div>

                {/* Review Quote */}
                <p className="font-jakarta text-stone-300 text-sm leading-relaxed font-normal">
                  {rev.quote}
                </p>
              </div>

              {/* Author and Vehicle Details */}
              <div className="mt-6 pt-4 border-t border-stone-800/70">
                <div className="font-jakarta text-white font-bold text-sm">
                  {rev.author}
                </div>
                {rev.vehicleLocation && (
                  <div className="font-jakarta text-stone-400 text-xs mt-0.5">
                    {rev.vehicleLocation}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Platform Ratings Line */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center text-sm font-medium text-stone-300">
          <div className="flex items-center gap-2 bg-[#15171e] px-5 py-2.5 rounded-full border border-white/10 shadow-md">
            <div className="flex items-center gap-0.5 text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-[#f59e0b]" />
              ))}
            </div>
            <span className="text-white font-bold ml-1">Rated 5.0 on Google</span>
          </div>
        </div>

      </div>
    </section>
  );
};
