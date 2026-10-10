import React from 'react';

/**
 * Panca: Karakter kartun 2D rapi, ceria, dan ramah anak.
 * Topi bisbol biru terpasang pas di kepala dengan rambut cokelat rapi terlihat di bawahnya.
 */
export default function PancaAvatar({ expression = 'smile', size = 120, className = '' }) {
  const isWaving = expression === 'wave';
  const isClapping = expression === 'clap';
  const isSurprised = expression === 'surprise';

  return (
    <div 
      className={`relative inline-block transition-transform duration-200 select-none ${className}`}
      style={{ width: size, height: size * 1.22 }}
      aria-label="Karakter Panca Rapi"
    >
      <svg
        viewBox="0 0 160 195"
        className="w-full h-full drop-shadow-sm overflow-visible"
      >
        <defs>
          <linearGradient id="pancaCapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="pancaShirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#EAB308" />
          </linearGradient>
        </defs>

        {/* Soft Shadow Ground */}
        <ellipse cx="80" cy="188" rx="44" ry="7" fill="#CBD5E1" opacity="0.6" />

        {/* Legs & Shoes */}
        <rect x="62" y="152" width="12" height="22" rx="4" fill="#0369A1" />
        <rect x="86" y="152" width="12" height="22" rx="4" fill="#0369A1" />
        <ellipse cx="68" cy="176" rx="14" ry="8" fill="#1E293B" />
        <ellipse cx="92" cy="176" rx="14" ry="8" fill="#1E293B" />
        <ellipse cx="67" cy="174" rx="8" ry="3" fill="#64748B" />
        <ellipse cx="91" cy="174" rx="8" ry="3" fill="#64748B" />

        {/* Body / Shirt */}
        <path
          d="M 52 110 C 52 110 50 152 50 154 L 110 154 C 110 152 108 110 108 110 Z"
          fill="url(#pancaShirtGrad)"
          stroke="#CA8A04"
          strokeWidth="3"
        />

        {/* Shirt Collar & Star Badge */}
        <path d="M 70 110 Q 80 120 90 110" stroke="#CA8A04" strokeWidth="2.5" fill="#FEF08A" />
        <circle cx="80" cy="132" r="10" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
        <polygon points="80,126 82.5,130.5 87.5,131.5 84,135 85,140 80,137.5 75,140 76,135 72.5,131.5 77.5,130.5" fill="#FFFFFF" />

        {/* Left Arm */}
        <g className={isClapping ? 'animate-clap' : ''}>
          <path
            d="M 52 114 Q 34 126 36 142"
            stroke="#FED7AA"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="36" cy="142" r="7" fill="#FED7AA" />
        </g>

        {/* Right Arm (Waving or Normal) */}
        <g className={isWaving ? 'animate-arm-wave' : isClapping ? 'animate-clap' : ''}>
          {isWaving ? (
            <>
              <path
                d="M 108 114 Q 130 96 132 74"
                stroke="#FED7AA"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="132" cy="74" r="8" fill="#FED7AA" />
            </>
          ) : (
            <>
              <path
                d="M 108 114 Q 126 126 124 142"
                stroke="#FED7AA"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="124" cy="142" r="7" fill="#FED7AA" />
            </>
          )}
        </g>

        {/* Neck */}
        <rect x="74" y="98" width="12" height="15" rx="3" fill="#FED7AA" />

        {/* Head Base */}
        <circle cx="80" cy="68" r="38" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />

        {/* Ears */}
        <circle cx="42" cy="70" r="8" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
        <circle cx="118" cy="70" r="8" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />

        {/* Hair - Brown hair visible on sides and front below cap */}
        {/* Back and side hair */}
        <path d="M 43 65 Q 41 84 49 84 Q 48 70 48 64 Z" fill="#78350F" />
        <path d="M 117 65 Q 119 84 111 84 Q 112 70 112 64 Z" fill="#78350F" />
        {/* Front bangs peaking under the cap */}
        <path d="M 52 56 Q 64 68 72 58 Q 80 66 90 56 Q 100 66 108 56 L 108 50 L 52 50 Z" fill="#78350F" />

        {/* BASEBALL CAP - Properly structured cap */}
        {/* Cap Dome / Crown */}
        <path
          d="M 44 54 C 44 26 116 26 116 54 C 116 58 44 58 44 54 Z"
          fill="url(#pancaCapGrad)"
          stroke="#0369A1"
          strokeWidth="2.5"
        />
        {/* Cap Front Seam */}
        <path d="M 80 29 L 80 54" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 2" />
        {/* Cap Top Button */}
        <ellipse cx="80" cy="28" rx="6" ry="3.5" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />

        {/* Cap Visor (Lidah Topi yang proporsional dan rapi) */}
        <path
          d="M 46 54 C 46 54 75 66 122 55 C 126 59 122 66 106 68 C 76 72 46 58 46 54 Z"
          fill="#0284C7"
          stroke="#0369A1"
          strokeWidth="2"
        />
        <path
          d="M 54 55 Q 82 66 116 56"
          stroke="#38BDF8"
          strokeWidth="2"
          fill="none"
        />

        {/* Eyes (Blinking Animation) */}
        <g className="animate-blink">
          {/* Eyebrows */}
          <path d="M 58 64 Q 65 60 72 63" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 88 63 Q 95 60 102 64" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Left Eye */}
          <ellipse cx="65" cy="74" rx="5.5" ry="7" fill="#1E293B" />
          <circle cx="67" cy="72" r="2.2" fill="#FFFFFF" />
          <circle cx="63" cy="76" r="1.1" fill="#FFFFFF" />

          {/* Right Eye */}
          <ellipse cx="95" cy="74" rx="5.5" ry="7" fill="#1E293B" />
          <circle cx="97" cy="72" r="2.2" fill="#FFFFFF" />
          <circle cx="93" cy="76" r="1.1" fill="#FFFFFF" />
        </g>

        {/* Cheeks - Rosy and Sweet */}
        <ellipse cx="54" cy="82" rx="7" ry="4.5" fill="#F87171" opacity="0.6" />
        <ellipse cx="106" cy="82" rx="7" ry="4.5" fill="#F87171" opacity="0.6" />

        {/* Cute Small Nose */}
        <circle cx="80" cy="78" r="2" fill="#F97316" opacity="0.8" />

        {/* Cheerful Mouth */}
        {isSurprised ? (
          <ellipse cx="80" cy="89" rx="6" ry="8" fill="#B91C1C" stroke="#991B1B" strokeWidth="1.5" />
        ) : (
          <path
            d="M 70 85 Q 80 97 90 85"
            fill="#B91C1C"
            stroke="#991B1B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
}
