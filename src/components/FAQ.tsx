import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'What services do you offer at your collision repair shop?',
      answer:
        'We offer a wide range of services, including cosmetic and structural vehicle repair, bumper repair, paint repair, paintless dent removal, windshield & glass replacement, and vehicle diagnostics & calibration.',
    },
    {
      id: 'faq-2',
      question: 'Do you work with insurance companies?',
      answer:
        'Yes, we work with all major insurance companies to help streamline the repair process.',
    },
    {
      id: 'faq-3',
      question: 'How long will it take to repair my vehicle?',
      answer:
        'The length of time it takes to repair your vehicle depends on the extent of the damage, the specific repairs needed, and parts availability. Rest assured, we will also provide repair updates while your vehicle is at our facility.',
    },
    {
      id: 'faq-4',
      question: 'How much will it cost to repair my vehicle?',
      answer:
        'The cost of repairs depends on a variety of factors, including the extent of the damage, the parts and materials needed, and the labor required to complete the repairs. We always provide our customers with transparent pricing information.',
    },
    {
      id: 'faq-5',
      question: 'Do you offer a warranty on your repairs?',
      answer:
        "Yes, we stand behind our work with a warranty on all workmanship for as long as you own the vehicle. Parts will carry the manufacturer’s warranty. If you experience any issues or concerns with your repairs, simply bring your vehicle back and we'll make it right.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="font-jakarta text-[11px] sm:text-xs uppercase font-extrabold tracking-[0.2em] text-[#8b1e1e] block mb-1">
            CLEAR ANSWERS
          </span>
          <h2 className="font-domine text-2xl sm:text-3xl font-bold tracking-tight text-[#1b1c1a]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-500">
          <HelpCircle className="w-5 h-5" />
        </div>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-domine text-sm sm:text-base font-bold text-stone-900 hover:text-[#8b1e1e] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#8b1e1e] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 border-t border-stone-100">
                  <p className="font-jakarta text-xs sm:text-sm text-stone-600 leading-relaxed pt-3">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
