import React from 'react';

/**
 * Sila: Karakter kartun 2D rapi, ramah, dan santun.
 * Memiliki rambut jelas dengan kuncir dua (twintails), poni rapi, dan jepit bunga merah muda.
 */
export default function SilaAvatar({ expression = 'smile', size = 120, className = '' }) {
  const isWaving = expression === 'wave';
  const isClapping = expression === 'clap';
  const isSurprised = expression === 'surprise';

  return (
    <div 
      className={`relative inline-block transition-transform duration-200 select-none ${className}`}
      style={{ width: size, height: size * 1.22 }}
      aria-label="Karakter Sila Rapi"
    >
      <svg
        viewBox="0 0 160 195"
        className="w-full h-full drop-shadow-sm overflow-visible"
      >
        <defs>
          <linearGradient id="silaDressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="silaHairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5C2607" />
            <stop offset="100%" stopColor="#3A1502" />
          </linearGradient>
        </defs>

        {/* Soft Shadow Ground */}
        <ellipse cx="80" cy="188" rx="44" ry="7" fill="#CBD5E1" opacity="0.6" />

        {/* Shoes */}
        <ellipse cx="64" cy="176" rx="13" ry="8" fill="#EC4899" />
        <ellipse cx="96" cy="176" rx="13" ry="8" fill="#EC4899" />
        <ellipse cx="64" cy="174" rx="7" ry="3" fill="#F472B6" />
        <ellipse cx="96" cy="174" rx="7" ry="3" fill="#F472B6" />

        {/* BACK HAIR - Twin Pigtails (Kuncir Dua Kiri & Kanan yang Sangat Jelas) */}
        {/* Left Pigtail */}
        <g>
          <ellipse cx="32" cy="78" rx="16" ry="24" fill="url(#silaHairGrad)" transform="rotate(-15 32 78)" />
          <ellipse cx="30" cy="95" rx="12" ry="18" fill="url(#silaHairGrad)" transform="rotate(-10 30 95)" />
          {/* Hair band / Ribbon */}
          <ellipse cx="38" cy="65" rx="7" ry="9" fill="#EC4899" />
        </g>
        {/* Right Pigtail */}
        <g>
          <ellipse cx="128" cy="78" rx="16" ry="24" fill="url(#silaHairGrad)" transform="rotate(15 128 78)" />
          <ellipse cx="130" cy="95" rx="12" ry="18" fill="url(#silaHairGrad)" transform="rotate(10 130 95)" />
          {/* Hair band / Ribbon */}
          <ellipse cx="122" cy="65" rx="7" ry="9" fill="#EC4899" />
        </g>

        {/* Back Hair Dome */}
        <circle cx="80" cy="66" r="41" fill="url(#silaHairGrad)" />

        {/* Dress / Torso */}
        <path
          d="M 56 112 L 44 162 L 116 162 L 104 112 Z"
          fill="url(#silaDressGrad)"
          stroke="#047857"
          strokeWidth="3"
        />
        {/* White hemline at dress bottom */}
        <path d="M 44 158 Q 80 166 116 158" stroke="#FDF2F8" strokeWidth="4" fill="none" />

        {/* Dress Collar & Pink Bow */}
        <polygon points="80,112 68,124 92,124" fill="#FDF2F8" />
        <circle cx="80" cy="125" r="5.5" fill="#EC4899" />
        <path d="M 75 127 L 72 134" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />
        <path d="M 85 127 L 88 134" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />

        {/* Arms */}
        {/* Left Arm */}
        <g className={isClapping ? 'animate-clap' : ''}>
          <path
            d="M 54 116 Q 36 128 36 144"
            stroke="#FED7AA"
            strokeWidth="11"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="36" cy="144" r="6.5" fill="#FED7AA" />
        </g>

        {/* Right Arm (Waving or Normal) */}
        <g className={isWaving ? 'animate-arm-wave' : isClapping ? 'animate-clap' : ''}>
          {isWaving ? (
            <>
              <path
                d="M 106 116 Q 128 98 130 76"
                stroke="#FED7AA"
                strokeWidth="11"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="130" cy="76" r="7.5" fill="#FED7AA" />
            </>
          ) : (
            <>
              <path
                d="M 106 116 Q 124 128 124 144"
                stroke="#FED7AA"
                strokeWidth="11"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="124" cy="144" r="6.5" fill="#FED7AA" />
            </>
          )}
        </g>

        {/* Neck */}
        <rect x="74" y="98" width="12" height="15" rx="3" fill="#FED7AA" />

        {/* Head Face Base */}
        <circle cx="80" cy="68" r="37" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />

        {/* Ears */}
        <circle cx="43" cy="71" r="7" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />
        <circle cx="117" cy="71" r="7" fill="#FED7AA" stroke="#FDBA74" strokeWidth="1.5" />

        {/* FRONT HAIR - Cute curved bangs and side strands framing the face */}
        <path
          d="M 43 62 C 43 38 117 38 117 62 C 117 68 112 78 110 82 C 108 72 108 60 100 62 C 92 64 88 56 80 58 C 72 56 68 64 60 62 C 52 60 52 72 50 82 C 48 78 43 68 43 62 Z"
          fill="url(#silaHairGrad)"
        />

        {/* Flower Hairpin (Jepit Bunga Cantik) */}
        <g transform="translate(56, 46)">
          <circle cx="0" cy="0" r="6.5" fill="#F472B6" />
          <circle cx="-5" cy="0" r="4.5" fill="#FBCFE8" />
          <circle cx="5" cy="0" r="4.5" fill="#FBCFE8" />
          <circle cx="0" cy="-5" r="4.5" fill="#FBCFE8" />
          <circle cx="0" cy="5" r="4.5" fill="#FBCFE8" />
          <circle cx="0" cy="0" r="3.5" fill="#FDE047" />
        </g>

        {/* Eyes (Blinking Animation) + Sweet Lashes */}
        <g className="animate-blink">
          {/* Eyebrows */}
          <path d="M 58 65 Q 65 62 72 65" stroke="#5C2607" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 88 65 Q 95 62 102 65" stroke="#5C2607" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* Left Eye */}
          <ellipse cx="65" cy="74" rx="5" ry="6.5" fill="#1E293B" />
          <circle cx="67" cy="72" r="2.2" fill="#FFFFFF" />
          <circle cx="63" cy="76" r="1.1" fill="#FFFFFF" />
          {/* Eyelash */}
          <path d="M 60 70 L 57 66" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 70 70 L 73 66" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" />

          {/* Right Eye */}
          <ellipse cx="95" cy="74" rx="5" ry="6.5" fill="#1E293B" />
          <circle cx="97" cy="72" r="2.2" fill="#FFFFFF" />
          <circle cx="93" cy="76" r="1.1" fill="#FFFFFF" />
          {/* Eyelash */}
          <path d="M 90 70 L 87 66" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 100 70 L 103 66" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" />
        </g>

        {/* Rosy Cheeks */}
        <ellipse cx="54" cy="82" rx="7" ry="4.5" fill="#F472B6" opacity="0.65" />
        <ellipse cx="106" cy="82" rx="7" ry="4.5" fill="#F472B6" opacity="0.65" />

        {/* Cute Small Nose */}
        <circle cx="80" cy="78" r="1.8" fill="#F97316" opacity="0.8" />

        {/* Sweet Smile */}
        {isSurprised ? (
          <ellipse cx="80" cy="88" rx="5.5" ry="7.5" fill="#DB2777" stroke="#BE185D" strokeWidth="1.5" />
        ) : (
          <path
            d="M 72 84 Q 80 95 88 84"
            fill="#DB2777"
            stroke="#BE185D"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
}
