import React from 'react';
import { Phone, Navigation, Wrench } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f4f2ee] border-t border-stone-200 py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
        
        {/* Logo Lockup */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#8b1e1e] flex items-center justify-center text-white shadow-xs">
            <Wrench className="w-4 h-4" />
          </div>
          <span className="font-jakarta text-sm sm:text-base text-stone-900 font-extrabold uppercase tracking-tight">
            California Auto Care One
          </span>
        </div>

        {/* Address */}
        <p className="font-jakarta text-xs sm:text-sm text-stone-600 max-w-md leading-relaxed">
          4021 East 15th Street, Oakland, CA 94601 • Serving the Greater Bay Area for over 25 years.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-1">
          <a
            href="tel:5105001018"
            className="px-5 py-2.5 rounded-full bg-white border border-stone-200 text-stone-800 text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-stone-50 active:scale-95 shadow-xs transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#8b1e1e]" />
            <span>(510) 500-1018</span>
          </a>
          <a
            href="https://maps.google.com/?q=California+Auto+Care+One+Oakland+CA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white border border-stone-200 text-stone-800 text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-stone-50 active:scale-95 shadow-xs transition-all cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#8b1e1e]" />
            <span>Directions</span>
          </a>
        </div>

        {/* Quiet Legal Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mt-4 text-[11px] text-stone-500 font-medium">
          <span>© 2025 California Auto Care One. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hover:text-stone-800 transition-colors"
            >
              Warranty Terms
            </a>
            <span>•</span>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hover:text-stone-800 transition-colors"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hover:text-stone-800 transition-colors"
            >
              Insurance FAQ
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
