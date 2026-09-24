import React from 'react';
import { BrandLogos } from './BrandLogos.tsx';
import { ShieldCheck, RotateCw, BatteryCharging } from 'lucide-react';

export const CarsWeWorkOn: React.FC = () => {
  const brands = [
    'BMW',
    'FORD',
    'SUBARU',
    'AUDI',
    'TOYOTA',
    'VOLVO',
    'LAND ROVER',
    'NISSAN',
    'MERCEDES',
    'RAM',
    'TESLA',
    'HONDA',
  ];

  return (
    <section
      id="cars-we-work-on"
      className="w-full bg-[#0d0e11] border-y border-stone-800/80 text-white py-14 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="font-jakarta text-[11px] sm:text-xs uppercase font-extrabold tracking-[0.2em] text-[#ff9d95] block mb-2">
            MANUFACTURER PRECISION
          </span>
          <h2 className="font-domine text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            CARS WE WORK ON
          </h2>
          <p className="font-jakarta text-stone-400 text-sm sm:text-base mt-3 leading-relaxed">
            Factory-certified diagnostic tooling, OEM schematics, and genuine replacement components for all Domestic, Asian, and European vehicle brands.
          </p>
        </div>

        {/* Outer Enclosing Container (matching image 2) */}
        <div className="bg-[#121317] border border-stone-800/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl mb-8 sm:mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4.5">
            {brands.map((brand) => {
              const LogoComponent = BrandLogos[brand];
              return (
                <div
                  key={brand}
                  className="bg-[#1a1c22] hover:bg-[#22252e] border border-white/5 hover:border-stone-700/80 rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center gap-3.5 transition-all duration-200 group shadow-sm min-h-[125px] sm:min-h-[135px]"
                >
                  <div className="h-10 flex items-center justify-center transition-transform group-hover:scale-110 duration-200">
                    {LogoComponent && <LogoComponent />}
                  </div>
                  <span className="font-jakarta text-xs sm:text-sm font-bold tracking-wider uppercase text-stone-200 group-hover:text-white transition-colors">
                    {brand}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Certification Highlights Pills (Matching image 2 bottom) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 bg-[#17191f] border border-stone-800 px-4 py-2 rounded-full text-xs font-semibold text-stone-300 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#ff9d95]" />
            <span>OEM Direct Catalogs &amp; Guaranteed Precision Fitment</span>
          </div>

          <div className="flex items-center gap-2.5 bg-[#17191f] border border-stone-800 px-4 py-2 rounded-full text-xs font-semibold text-stone-300 shadow-sm">
            <RotateCw className="w-4 h-4 text-[#fbbf24]" />
            <span>ADAS Electronic Calibration Certified</span>
          </div>

          <div className="flex items-center gap-2.5 bg-[#17191f] border border-stone-800 px-4 py-2 rounded-full text-xs font-semibold text-stone-300 shadow-sm">
            <BatteryCharging className="w-4 h-4 text-[#ff9d95]" />
            <span>EV &amp; Hybrid Battery Safety Qualified</span>
          </div>
        </div>

      </div>
    </section>
  );
};
