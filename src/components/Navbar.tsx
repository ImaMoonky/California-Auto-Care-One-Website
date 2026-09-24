import React from 'react';
import { Phone, Car, Shield } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="w-full z-50 bg-white md:bg-[#ebe6dc] border-b border-stone-200 md:border-b-[2.5px] md:border-[#6b1414] shadow-sm relative">
      <div className="w-full px-3 sm:px-4 h-18 sm:h-20 md:h-22 flex items-center justify-between">
        
        {/* Mobile Left: Red Icon + Brand Title & Subtitle */}
        <div className="flex items-center gap-2.5 md:hidden">
          <div className="w-9 h-9 rounded-xl bg-[#6b1414] flex items-center justify-center text-white shrink-0 shadow-sm">
            <Car className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-tight select-none">
            <span
              className="font-extrabold text-[13px] text-[#1b1c1a] tracking-tight uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              CALIFORNIA AUTO CARE ONE
            </span>
            <span className="text-[9.5px] font-black text-[#8b1e1e] tracking-wider uppercase mt-0.5">
              THE DIFFERENCE IS TRUST
            </span>
          </div>
        </div>

        {/* Mobile Right: Phone Call Button + Status Pill */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:5105001018"
            aria-label="Call Shop"
            className="w-10 h-10 rounded-full bg-stone-200/90 hover:bg-stone-300 flex items-center justify-center text-[#1b1c1a] active:scale-95 transition-all shadow-xs"
          >
            <Phone className="w-4.5 h-4.5 text-[#8b1e1e]" />
          </a>
          <button
            type="button"
            onClick={() => handleNavClick('services')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#fde8e8] text-[#8b1e1e] text-xs font-bold border border-[#f8b4b4]/60 active:scale-95 transition-transform"
          >
            <Shield className="w-3.5 h-3.5 fill-current" />
            <span>Status</span>
          </button>
        </div>

        {/* Desktop Left: Classic California Script Logo */}
        <div className="hidden md:flex items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col items-center leading-none select-none cursor-pointer"
          >
            {/* California script */}
            <span
              className="text-3xl sm:text-4xl lg:text-[44px] text-[#1e252d] tracking-tight transform -rotate-1 group-hover:text-[#6b1414] transition-colors"
              style={{
                fontFamily: "'Damion', 'Kaushan Script', cursive",
                textShadow: '1px 1px 0px rgba(0,0,0,0.05)',
              }}
            >
              California
            </span>
            
            {/* Red Underline & AUTO CARE ONE subtitle */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full mt-1">
              <span className="h-[2px] w-3 sm:w-5 bg-[#6b1414]" />
              <span
                className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.24em] text-[#1e252d] whitespace-nowrap"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                AUTO CARE ONE
              </span>
              <span className="h-[2px] w-3 sm:w-5 bg-[#6b1414]" />
            </div>
          </a>
        </div>

        {/* Desktop Right: SERVICES | LOCATION | CALL (800) 555-AUTO */}
        <div className="hidden md:flex items-center gap-4 sm:gap-7 text-xs sm:text-sm font-bold uppercase text-[#1e252d]">
          <button
            type="button"
            onClick={() => handleNavClick('services')}
            className="hover:text-[#6b1414] transition-colors py-2 cursor-pointer tracking-[0.14em] font-extrabold"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            SERVICES
          </button>

          <span className="text-[#9e978b] select-none">|</span>

          <button
            type="button"
            onClick={() => handleNavClick('location')}
            className="hover:text-[#6b1414] transition-colors py-2 cursor-pointer tracking-[0.14em] font-extrabold"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            LOCATION
          </button>

          <span className="text-[#9e978b] select-none">|</span>

          {/* Book Now button (Commented out - will return with new separate web app) */}
          {/*
          <button
            type="button"
            onClick={() => handleNavClick('services')}
            className="relative group px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#6e1313] hover:bg-[#801818] active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_2px_8px_rgba(110,19,19,0.4)] transition-all cursor-pointer flex items-center gap-2"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <span className="tracking-[0.08em] whitespace-nowrap">
              SAVE $20 • BOOK NOW
            </span>
          </button>
          */}

          {/* Call button with painted red capsule */}
          <a
            href="tel:5105001018"
            className="relative group px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#6e1313] hover:bg-[#801818] active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_2px_8px_rgba(110,19,19,0.4)] transition-all cursor-pointer flex items-center gap-2"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <Phone className="w-4 h-4 fill-current shrink-0" />
            <span className="tracking-[0.08em] whitespace-nowrap">
              CALL (510) 500-1018
            </span>
          </a>
        </div>

      </div>
    </header>
  );
};
