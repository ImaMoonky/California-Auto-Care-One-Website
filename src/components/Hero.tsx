import React from 'react';
import {
  MapPin,
  Calendar,
  ArrowRight,
  Phone,
  Navigation,
} from 'lucide-react';
import heroBg from '../assets/images/hero_clean_bg.png';

export const Hero: React.FC = () => {
  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* MOBILE VIEW (matches exact mobile card mockup with faded background image) */}
      {/* ========================================================================= */}
      <div className="block md:hidden bg-white p-3 sm:p-4">
        <div className="w-full bg-[#131418] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          
          {/* Top Visual Area with workshop image and smooth fade */}
          <div className="relative w-full h-64 sm:h-72 overflow-hidden">
            <img
              src={heroBg}
              alt="California Auto Care One - Oakland Shop"
              className="w-full h-full object-cover object-[50%_35%] block"
              loading="eager"
            />
            {/* Top dark subtle gradient for badge clarity */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

            {/* Pill Badge at the top */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-max max-w-[92%] z-10 pointer-events-none">
              <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-white text-[10.5px] font-extrabold tracking-wider uppercase shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse shrink-0" />
                <span>EST. OVER 25 YEARS • OAKLAND, CA</span>
              </div>
            </div>

            {/* Smooth bottom fade into dark card background */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#131418] via-[#131418]/75 to-transparent pointer-events-none" />
          </div>

          {/* Card Content Area */}
          <div className="px-5 pb-6 pt-1 text-white">
            {/* Headline */}
            <h1 className="text-[28px] sm:text-[32px] font-bold leading-[1.18] tracking-tight mb-3 font-serif">
              Caring for Oakland’s cars for{' '}
              <span className="text-[#f87171] border-b-2 border-[#b91c1c] pb-0.5 whitespace-nowrap">
                25+ years
              </span>
              .
            </h1>

            {/* Description */}
            <p className="text-stone-300 text-[13px] sm:text-sm leading-relaxed mb-5 font-normal">
              Undetectable collision repair, master vintage metalcraft &amp; direct insurance claim handling. Built on transparency.
            </p>

            {/* Primary Action Button: Book Online & Save $20 (Commented out - will return with new app) */}
            {/*
            <button
              type="button"
              onClick={handleScrollToServices}
              className="w-full bg-[#8c2222] hover:bg-[#a12828] active:scale-[0.99] text-white p-3 rounded-2xl flex items-center justify-between shadow-lg shadow-red-950/40 transition-all mb-2.5 cursor-pointer select-none"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-black/20 flex items-center justify-center shrink-0">
                  <Calendar className="w-4.5 h-4.5 text-white" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xs font-bold text-white">Book Online &amp; Save</div>
                  <div className="text-sm sm:text-base font-extrabold text-white">$20</div>
                </div>
              </div>
              <div className="bg-[#591414] px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 text-[10.5px] font-black uppercase tracking-wider text-white">
                <span>INSTANT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
            */}

            {/* Secondary Action Buttons Row: Compact single-line inline fit */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:5105001018"
                className="flex items-center justify-center gap-2 bg-[#1f2128] hover:bg-[#282a33] text-white py-2.5 px-2 rounded-xl border border-white/5 active:scale-95 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                <span className="text-white font-bold text-xs whitespace-nowrap tracking-tight">
                  (510) 500-1018
                </span>
              </a>
              <a
                href="https://maps.google.com/?q=California+Auto+Care+One+Oakland+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#1f2128] hover:bg-[#282a33] text-white py-2.5 px-2 rounded-xl border border-white/5 active:scale-95 transition-all font-bold text-xs shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                <span className="text-white">Directions</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP VIEW (keeps original unconstrained workshop hero layout)         */}
      {/* ========================================================================= */}
      <section className="hidden md:block relative w-full overflow-hidden bg-[#121315] select-none">
        <div className="relative w-full">
          <img
            src={heroBg}
            alt="California Auto Care One - Oakland Auto Body Repair and Restoration"
            className="w-full h-auto object-cover object-center block"
            loading="eager"
            decoding="sync"
          />

          {/* Top-Left Stylized Overlay Text */}
          <div className="absolute top-[3%] sm:top-[4%] lg:top-[4.5%] left-[3%] sm:left-[5%] max-w-[92%] sm:max-w-[75%] lg:max-w-[58%] z-10 pointer-events-none">
            
            {/* Badge: EST. 1994 • BAY AREA CONCIERGE BODY SHOP */}
            <div className="flex flex-col items-start mb-2 sm:mb-3 transform -rotate-[2deg] origin-bottom-left">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white shrink-0 drop-shadow-md" />
                <span
                  className="text-[10px] sm:text-xs md:text-[13px] font-bold uppercase tracking-[0.16em] text-white/95"
                  style={{
                    fontFamily: "'Sedgwick Ave', cursive",
                    fontStyle: 'italic',
                    textShadow: '0 2px 4px rgba(0,0,0,0.95)',
                  }}
                >
                  EST. 1994 • BAY AREA CONCIERGE BODY SHOP
                </span>
              </div>
              {/* Tapered crimson underline under badge */}
              <div className="w-full max-w-[280px] sm:max-w-[380px] h-[2px] bg-gradient-to-r from-[#9b1c1c] via-[#b82424] to-transparent mt-1 shadow-sm" />
            </div>

            {/* Big Slanted Brush Script Headline */}
            <h1
              className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.06] tracking-tight transform -rotate-[2.5deg] origin-top-left mb-2 sm:mb-3.5"
              style={{
                fontFamily: "'Kaushan Script', 'Damion', cursive",
                textShadow: '2px 4px 10px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.7)',
              }}
            >
              <div className="whitespace-nowrap">
                Caring for Oakland's cars
              </div>
              <div className="relative inline-block mt-0.5 sm:mt-1">
                <span>for 25 years.</span>
                {/* Dynamic Painterly Red Brush Underline */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-[105%] h-3 sm:h-5 pointer-events-none"
                  viewBox="0 0 320 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 11C40 9 95 6 160 5C225 4 285 7 318 10C290 12 210 14 150 13C90 12 35 14 2 11Z"
                    fill="#991b1b"
                    opacity="0.95"
                  />
                  <path
                    d="M20 13C80 11 150 9 240 10C270 10.5 295 12 305 13C260 14 180 15 110 14C55 13.5 30 14 20 13Z"
                    fill="#7f1d1d"
                    opacity="0.8"
                  />
                </svg>
              </div>
            </h1>

            {/* Stylized Action Buttons - Stacked Vertically */}
            <div className="mt-3 sm:mt-4 ml-1 sm:ml-2 flex flex-col items-start gap-2 sm:gap-2.5 pointer-events-auto">
              {/* Primary CTA: Book Online & Save $20 (Commented out - will return with new app) */}
              {/*
              <button
                type="button"
                onClick={handleScrollToServices}
                className="group flex items-center gap-2 bg-[#8c2222] hover:bg-[#a12828] active:scale-95 text-white py-2 px-4 rounded-xl shadow-lg shadow-black/70 transition-all cursor-pointer font-jakarta font-bold text-xs sm:text-sm select-none border border-red-400/25"
              >
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                <span>Book Online &amp; Save $20</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </button>
              */}

              {/* Phone CTA */}
              <a
                href="tel:5105001018"
                className="flex items-center gap-2 bg-black/75 hover:bg-black/90 active:scale-95 text-white py-1.5 sm:py-2 px-3.5 sm:px-4 rounded-xl border border-white/15 backdrop-blur-sm shadow-md shadow-black/50 transition-all cursor-pointer font-jakarta font-semibold text-xs sm:text-sm"
              >
                <Phone className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                <span>(510) 500-1018</span>
              </a>

              {/* Get Directions CTA */}
              <a
                href="https://maps.google.com/?q=California+Auto+Care+One+Oakland+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black/75 hover:bg-black/90 active:scale-95 text-white py-1.5 sm:py-2 px-3.5 sm:px-4 rounded-xl border border-white/15 backdrop-blur-sm shadow-md shadow-black/50 transition-all cursor-pointer font-jakarta font-semibold text-xs sm:text-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
