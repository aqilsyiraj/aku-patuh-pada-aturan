import React from 'react';

/**
 * Bina: Karakter kartun 2D rapi, cerdas, dan pemberi tantangan kuis.
 * Memiliki rambut hitam rapi dengan poni samping, serta kacamata bulat nyata dengan gagang dan kilau lensa.
 */
export default function BinaAvatar({ expression = 'smile', size = 120, className = '' }) {
  const isWaving = expression === 'wave';
  const isClapping = expression === 'clap';
  const isSurprised = expression === 'surprise';

  return (
    <div 
      className={`relative inline-block transition-transform duration-200 select-none ${className}`}
      style={{ width: size, height: size * 1.22 }}
      aria-label="Karakter Bina Rapi"
    >
      <svg
        viewBox="0 0 160 195"
        className="w-full h-full drop-shadow-sm overflow-visible"
      >
        <defs>
          <linearGradient id="binaSuitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
          <linearGradient id="binaHairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>

        {/* Soft Shadow Ground */}
        <ellipse cx="80" cy="188" rx="44" ry="7" fill="#CBD5E1" opacity="0.6" />

        {/* Legs & Shoes */}
        <rect x="62" y="152" width="12" height="22" rx="4" fill="#312E81" />
        <rect x="86" y="152" width="12" height="22" rx="4" fill="#312E81" />
        <ellipse cx="68" cy="176" rx="14" ry="8" fill="#1E1B4B" />
        <ellipse cx="92" cy="176" rx="14" ry="8" fill="#1E1B4B" />
        <ellipse cx="67" cy="174" rx="8" ry="3" fill="#4338CA" />
        <ellipse cx="91" cy="174" rx="8" ry="3" fill="#4338CA" />

        {/* Body / Smart Vest & Jumper */}
        <path
          d="M 52 110 C 52 110 50 152 50 154 L 110 154 C 110 152 108 110 108 110 Z"
          fill="url(#binaSuitGrad)"
          stroke="#3730A3"
          strokeWidth="3"
        />

        {/* White Shirt Collar */}
        <polygon points="80,110 68,124 92,124" fill="#F8FAFC" />
        <polygon points="80,124 76,134 84,134" fill="#F43F5E" /> {/* Cute Little Tie / Ribbon */}

        {/* Gold Star Badge (Smart Student) */}
        <circle cx="94" cy="138" r="9" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
        <polygon points="94,132 96,136.5 101,137.5 97.5,141 98.5,146 94,143.5 89.5,146 90.5,141 87,137.5 92,136.5" fill="#92400E" />

        {/* Arms */}
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

        {/* Right Arm */}
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

        {/* BACK HAIR DOME (Rambut Kepala Bagian Belakang yang Tebal & Rapi) */}
        <circle cx="80" cy="65" r="41" fill="url(#binaHairGrad)" />

        {/* Head Face Base */}
        <circle cx="80" cy="68" r="37" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />

        {/* Ears */}
        <circle cx="42" cy="71" r="7.5" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
        <circle cx="118" cy="71" r="7.5" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />

        {/* FRONT HAIR - Rambut Depan Berponi Rapi Bergaya Cerdas */}
        <path
          d="M 42 63 C 42 34 118 34 118 63 C 118 72 114 78 112 80 C 110 70 108 60 98 62 C 88 64 82 52 74 54 C 66 56 62 64 54 62 C 48 60 48 70 46 80 C 44 76 42 70 42 63 Z"
          fill="url(#binaHairGrad)"
        />

        {/* Eyes (Blinking Animation) Behind Glasses */}
        <g className="animate-blink">
          {/* Eyebrows */}
          <path d="M 57 56 Q 64 52 71 55" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 89 55 Q 96 52 103 56" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Left Eye */}
          <ellipse cx="64" cy="71" rx="4.8" ry="6" fill="#0F172A" />
          <circle cx="66" cy="69" r="2" fill="#FFFFFF" />

          {/* Right Eye */}
          <ellipse cx="96" cy="71" rx="4.8" ry="6" fill="#0F172A" />
          <circle cx="98" cy="69" r="2" fill="#FFFFFF" />
        </g>

        {/* SPECTACLES / KACAMATA NYATA BERBENTUK JELAS */}
        <g>
          {/* Left Frame Arm / Temple to Ear */}
          <line x1="43" y1="70" x2="50" y2="70" stroke="#312E81" strokeWidth="3" strokeLinecap="round" />
          {/* Right Frame Arm / Temple to Ear */}
          <line x1="110" y1="70" x2="117" y2="70" stroke="#312E81" strokeWidth="3" strokeLinecap="round" />

          {/* Left Round Eyeglass Rim & Transparent Lens */}
          <circle cx="64" cy="71" r="14.5" fill="#E0F2FE" fillOpacity="0.4" stroke="#312E81" strokeWidth="3.2" />
          {/* Lens Glass Highlight / Refleksi Kaca */}
          <path d="M 55 64 Q 60 59 66 61" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Glasses Bridge (Jembatan Hidung Penghubung Lensa Kacamata) */}
          <path d="M 78.5 69 Q 80 66 81.5 69" stroke="#312E81" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          {/* Right Round Eyeglass Rim & Transparent Lens */}
          <circle cx="96" cy="71" r="14.5" fill="#E0F2FE" fillOpacity="0.4" stroke="#312E81" strokeWidth="3.2" />
          {/* Lens Glass Highlight */}
          <path d="M 87 64 Q 92 59 98 61" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>

        {/* Cheeks - Rosy and Sweet */}
        <ellipse cx="52" cy="83" rx="6.5" ry="4" fill="#F87171" opacity="0.6" />
        <ellipse cx="108" cy="83" rx="6.5" ry="4" fill="#F87171" opacity="0.6" />

        {/* Small Nose below bridge */}
        <circle cx="80" cy="77" r="1.8" fill="#F97316" opacity="0.8" />

        {/* Cheerful Clever Mouth */}
        {isSurprised ? (
          <ellipse cx="80" cy="88" rx="5.5" ry="7.5" fill="#B91C1C" stroke="#991B1B" strokeWidth="1.5" />
        ) : (
          <path
            d="M 71 85 Q 80 96 89 85"
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
