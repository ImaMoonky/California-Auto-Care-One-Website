import React from 'react';
import collisionImg from '../assets/images/collision_repair_before_after_1790236054604.jpg';

interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const Services: React.FC = () => {
  const topServices: ServiceItem[] = [
    {
      id: 'collision-body',
      badge: 'COLLISION',
      title: 'Collision & Body Repair',
      description:
        'Structural frame laser alignment, precision dent correction, computerized OEM color formulation, and factory-finish painting.',
      image: collisionImg,
      alt: 'Vehicle collision repair before and after restoration in body shop',
    },
    {
      id: 'free-estimates',
      badge: '$0 COST',
      title: 'Free Transparent Estimates',
      description:
        "Evaluating your vehicle's damage to provide an accurate computerized projection for repairs, without obligation or initial fees.",
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBNMvW3xuenNEki_p9rVFRguH27oL_7U83ai-Kj0k1rQfO_dvgUL-w8NMe-uS7wjTUZ6kfyUxHtPyzr5iyL0-re6kk5CVVq9BUe3Rkn6WXCXKRl5cqzviAE4oLRT-29fY_INB6mx8Yy_-vQNrTAAnJTkDZjrDArXatA3e8jJHjH_QshOX4Cj5QhoelEGh-bu_HcI5t6roADVu3PQG1MK-FOVi2C7UwUgsodiGLjv7xZE0UDTQcvQn5L',
      alt: 'Estimator inspecting vehicle with digital tablet in Oakland auto repair center',
    },
    {
      id: 'mechanical',
      badge: 'FULL DIAGNOSTIC',
      title: 'Full Service Mechanical',
      description:
        'Diagnosing and repairing all mechanical systems: braking systems, suspension, engines, OEM cooling, and factory electronic calibrations.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCAGxcrkbv4jCwS282GEr5hPEzImRwN9Ou-HTmqbeJ4wHiBrFkttH7Db2OQ2hg9fZu_sb6U3EhzuypE6mfjqEhPt-J0dvH1AHrians_uI0T52ZYAYTLo8Jd1Jf0LVygObCEJLKLibaeiaqUcasISPFRmALnXs0sHIAQPxgoSEgCkxDH4OB1JPRWvKkXzq_Gd7xRWrPEun65GQ4cL9ugVezQypN7ScBiUeqjFXTEGyiQYQmlmc_QFEh_',
      alt: 'Certified mechanical technician performing maintenance on lift',
    },
    {
      id: 'detailing',
      badge: 'STUDIO SPA',
      title: 'Auto Detailing & Finish',
      description:
        'Full interior allergen steam sterilization, dual-stage paint correction, buffing, and multi-year hydrophobic protective ceramic sealants.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDkPX6g6u3FUziHP5kb0kT7mjXJ1baKFaK353W2fan7HRP3Rt92lAtJL_-De2yvrzFLlPq090qdsgX_aGvdug8mBAM1qO80TqQCiEgd6ial4eWPpsXaWFfVLYHuo2OkLLJkFpETT6MrSlgKxRvC7ujbsUX-R3Zo4yOq9rbcMaTxfO8fBoZ6q9xLFKVzdKVacOOFHWu535bZv_3yVAhfOS8CTRUIJGTlkHPlCeCH7iC1gKdzxzEkQU09',
      alt: 'Studio automotive paint correction and buffing process',
    },
  ];

  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <span className="font-jakarta text-[11px] sm:text-xs uppercase font-extrabold tracking-[0.2em] text-[#8b1e1e] block mb-2">
          PRECISION ATELIER CARE
        </span>
        <h2 className="font-domine text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1b1c1a]">
          SERVICES
        </h2>
        <p className="font-jakarta text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
          Specialized collision repair and master mechanical diagnostics delivered with complete photographic transparency.
        </p>
      </div>

      {/* 4 Cards Grid (clean cards without hover shifts or buttons) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {topServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs flex flex-col"
          >
            {/* Card Image */}
            <div className="relative w-full h-48 sm:h-44 overflow-hidden bg-stone-100">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover object-center block"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                {service.badge}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-domine text-lg font-bold text-stone-900 leading-snug">
                {service.title}
              </h3>
              <p className="font-jakarta text-stone-600 text-xs sm:text-[13px] leading-relaxed mt-2.5">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
