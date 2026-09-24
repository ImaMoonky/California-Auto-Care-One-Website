import React from 'react';
import { MapPin, ExternalLink, Phone, Mail } from 'lucide-react';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="font-jakarta text-[11px] sm:text-xs uppercase font-extrabold tracking-[0.2em] text-[#8b1e1e] block mb-1">
            OAKLAND FACILITY
          </span>
          <h2 className="font-domine text-2xl sm:text-3xl font-bold tracking-tight text-[#1b1c1a]">
            Location &amp; Hours
          </h2>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-bold text-stone-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>Open Today</span>
        </span>
      </div>

      {/* Main Location & Hours Card */}
      <div className="rounded-3xl bg-white border border-stone-200/80 overflow-hidden shadow-xs flex flex-col">
        {/* Map Banner */}
        <div className="w-full h-52 sm:h-72 bg-cover bg-center relative overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm4kw_UWJu9NXcyEWKGZWQvVJuwy4frudUzT4cplqwXW7S5LavMSLr0oDogxYNtc66DtY1_siDGaqUCIIYUje2c5Sy8ATDcITrO2BGe0xFjcyrepWaZYUhKpivn8OyF3ebUUMz0l3jtowWNzbxCcHKzmqW--0S_wfftTNsT_3ujFE1G0L4MqCcGMaiMuwzjcVYMiH4Xyp_QKoWay3bIIaOQ7JpjRu5ZBg60J_9tyhkkCaoXjXOU778"
            alt="Oakland Facility Map - 4021 East 15th Street"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/10 flex items-center justify-center">
            <div className="bg-[#8b1e1e] text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 border border-white/20 animate-bounce">
              <MapPin className="w-4 h-4 fill-current" />
              <span className="font-jakarta text-xs sm:text-sm font-bold tracking-tight">
                California Auto Care One
              </span>
            </div>
          </div>
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs text-stone-800 font-semibold shadow-md flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>4021 East 15th St • Oakland</span>
          </div>
        </div>

        {/* Detailed Schedule & Links */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-domine text-xl font-bold text-stone-900">
                4021 East 15th Street
              </span>
              <span className="font-jakarta text-sm text-stone-500 font-medium">
                Oakland, CA 94601 (Fruitvale &amp; San Antonio District)
              </span>
            </div>
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="px-4 py-2.5 rounded-full bg-[#8b1e1e] hover:bg-[#a52626] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all self-start sm:self-auto cursor-pointer"
            >
              <span>Open Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Hours Table */}
          <div className="rounded-2xl bg-stone-50 p-4 sm:p-5 flex flex-col gap-2.5 border border-stone-200/70 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 border-b border-stone-200/50">
              <span className="font-bold text-stone-800">Monday – Friday</span>
              <span className="font-bold text-stone-900">8:00 AM – 5:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-stone-200/50">
              <span className="font-bold text-stone-800">Saturday</span>
              <span className="font-bold text-stone-900">9:00 AM – 3:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-1 text-stone-500">
              <span className="font-medium">Sunday</span>
              <span className="font-medium italic">Closed (Family Time)</span>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="bg-stone-100 hover:bg-stone-200/80 p-3 rounded-xl text-center text-xs sm:text-sm font-bold text-stone-900 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#8b1e1e]" />
              <span>Call Shop</span>
            </button>
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="bg-stone-100 hover:bg-stone-200/80 p-3 rounded-xl text-center text-xs sm:text-sm font-bold text-stone-900 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#8b1e1e]" />
              <span>Email Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
