import React from 'react';

export const BrandLogos: Record<string, () => React.JSX.Element> = {
  BMW: () => (
    <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="46" stroke="#ffffff" strokeWidth="4" />
      <circle cx="50" cy="50" r="34" stroke="#ffffff" strokeWidth="2" />
      {/* BMW Monochrome Quadrants */}
      <path d="M50 16 A34 34 0 0 1 84 50 L50 50 Z" fill="#ffffff" />
      <path d="M50 50 L84 50 A34 34 0 0 1 50 84 Z" fill="#17181c" stroke="#ffffff" strokeWidth="1" />
      <path d="M16 50 A34 34 0 0 1 50 16 L50 50 Z" fill="#17181c" stroke="#ffffff" strokeWidth="1" />
      <path d="M50 50 L16 50 A34 34 0 0 0 50 84 Z" fill="#ffffff" />
      <circle cx="50" cy="50" r="34" stroke="#ffffff" strokeWidth="2" fill="none" />
    </svg>
  ),

  FORD: () => (
    <svg className="w-13 h-8" viewBox="0 0 120 70" fill="none">
      <ellipse cx="60" cy="35" rx="55" ry="30" stroke="#ffffff" strokeWidth="3" fill="#17181c" />
      <ellipse cx="60" cy="35" rx="49" ry="24" stroke="#ffffff" strokeWidth="1.5" />
      <text
        x="60"
        y="42"
        textAnchor="middle"
        fontFamily="cursive, 'Playfair Display', serif"
        fontStyle="italic"
        fontWeight="bold"
        fontSize="28"
        fill="#ffffff"
      >
        Ford
      </text>
    </svg>
  ),

  SUBARU: () => (
    <svg className="w-12 h-8" viewBox="0 0 100 65" fill="none">
      <ellipse cx="50" cy="32.5" rx="46" ry="28" stroke="#ffffff" strokeWidth="3" fill="#17181c" />
      {/* 6 White Stars */}
      <polygon points="34,22 36,28 42,28 37,32 39,38 34,34 29,38 31,32 26,28 32,28" fill="#ffffff" />
      <polygon points="56,22 57,26 61,26 58,29 59,33 56,31 53,33 54,29 51,26 55,26" fill="#ffffff" transform="scale(0.85) translate(14, 5)" />
      <polygon points="70,24 71,28 75,28 72,31 73,35 70,33 67,35 68,31 65,28 69,28" fill="#ffffff" transform="scale(0.8) translate(28, 4)" />
      <polygon points="50,40 51,43 54,43 52,45 53,48 50,46 47,48 48,45 46,43 49,43" fill="#ffffff" transform="scale(0.85) translate(8, 6)" />
      <polygon points="64,42 65,45 68,45 66,47 67,50 64,48 61,50 62,47 60,45 63,45" fill="#ffffff" transform="scale(0.75) translate(25, 12)" />
      <polygon points="76,40 77,43 80,43 78,45 79,48 76,46 73,48 74,45 72,43 75,43" fill="#ffffff" transform="scale(0.75) translate(36, 12)" />
    </svg>
  ),

  AUDI: () => (
    <svg className="w-14 h-8" viewBox="0 0 140 60" fill="none">
      <circle cx="30" cy="30" r="18" stroke="#ffffff" strokeWidth="3" />
      <circle cx="56" cy="30" r="18" stroke="#ffffff" strokeWidth="3" />
      <circle cx="82" cy="30" r="18" stroke="#ffffff" strokeWidth="3" />
      <circle cx="108" cy="30" r="18" stroke="#ffffff" strokeWidth="3" />
    </svg>
  ),

  TOYOTA: () => (
    <svg className="w-11 h-8" viewBox="0 0 100 70" fill="none">
      <ellipse cx="50" cy="35" rx="46" ry="31" stroke="#ffffff" strokeWidth="3.5" />
      <ellipse cx="50" cy="29" rx="29" ry="14" stroke="#ffffff" strokeWidth="3.5" />
      <ellipse cx="50" cy="35" rx="14" ry="30" stroke="#ffffff" strokeWidth="3.5" />
    </svg>
  ),

  VOLVO: () => (
    <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
      <circle cx="48" cy="52" r="36" stroke="#ffffff" strokeWidth="4" />
      <path d="M68 32 L84 16" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <path d="M72 16 H84 V28" stroke="#ffffff" strokeWidth="4" strokeLinejoin="round" />
      <rect x="22" y="44" width="52" height="16" fill="#17181c" stroke="#ffffff" strokeWidth="1.5" />
      <text x="48" y="56" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" letterSpacing="1.5">
        VOLVO
      </text>
    </svg>
  ),

  'LAND ROVER': () => (
    <svg className="w-13 h-7" viewBox="0 0 120 60" fill="none">
      <ellipse cx="60" cy="30" rx="55" ry="24" stroke="#ffffff" strokeWidth="2.5" fill="#17181c" />
      <ellipse cx="60" cy="30" rx="50" ry="19" stroke="#ffffff" strokeWidth="1" />
      <text x="60" y="27" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="extrabold" letterSpacing="2.5">
        LAND
      </text>
      <text x="60" y="41" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="extrabold" letterSpacing="2.5">
        ROVER
      </text>
    </svg>
  ),

  NISSAN: () => (
    <svg className="w-10 h-8" viewBox="0 0 100 80" fill="none">
      <circle cx="50" cy="40" r="34" stroke="#ffffff" strokeWidth="3.5" />
      <rect x="15" y="32" width="70" height="16" rx="2" fill="#17181c" stroke="#ffffff" strokeWidth="2" />
      <text x="50" y="44" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" letterSpacing="1.5">
        NISSAN
      </text>
    </svg>
  ),

  MERCEDES: () => (
    <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="44" stroke="#ffffff" strokeWidth="3.5" />
      <path d="M50 50 L50 8" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 50 L14 71" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 50 L86 71" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
      <polygon points="50,12 47,48 50,50" fill="#ffffff" />
      <polygon points="50,12 53,48 50,50" fill="#9ca3af" />
      <polygon points="16,69 48,53 50,50" fill="#ffffff" />
      <polygon points="16,69 49,47 50,50" fill="#9ca3af" />
      <polygon points="84,69 51,47 50,50" fill="#ffffff" />
      <polygon points="84,69 52,53 50,50" fill="#9ca3af" />
    </svg>
  ),

  RAM: () => (
    <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
      {/* Ram Head Stylized Emblem */}
      <path
        d="M20 22 C32 16, 42 28, 50 40 C58 28, 68 16, 80 22 C88 26, 88 40, 80 48 C72 56, 60 52, 58 46 C64 48, 72 44, 76 38 C80 32, 74 24, 68 26 C60 28, 56 38, 50 48 C44 38, 40 28, 32 26 C26 24, 20 32, 24 38 C28 44, 36 48, 42 46 C40 52, 28 56, 20 48 C12 40, 12 26, 20 22 Z"
        fill="#ffffff"
      />
      {/* Center Snout / Shield */}
      <polygon points="50,44 42,66 45,78 50,82 55,78 58,66" fill="#ffffff" />
      <polygon points="50,50 46,65 50,75 54,65" fill="#17181c" />
    </svg>
  ),

  TESLA: () => (
    <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none">
      {/* Top curved bar */}
      <path d="M18 24 C38 17, 62 17, 82 24 C66 20, 34 20, 18 24 Z" fill="#ffffff" />
      {/* Center T Emblem */}
      <path d="M28 32 C42 27, 58 27, 72 32 L56 36 L54 78 L46 78 L44 36 Z" fill="#ffffff" />
    </svg>
  ),

  HONDA: () => (
    <svg className="w-10 h-9" viewBox="0 0 100 90" fill="none">
      <rect x="12" y="10" width="76" height="70" rx="14" stroke="#ffffff" strokeWidth="3.5" />
      <path
        d="M26 24 H37 L43 56 H57 L63 24 H74 L68 70 H57 L54 60 H46 L43 70 H32 Z"
        fill="#ffffff"
      />
    </svg>
  ),
};
