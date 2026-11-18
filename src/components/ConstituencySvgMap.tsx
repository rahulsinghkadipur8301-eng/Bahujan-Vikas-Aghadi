import React from 'react';

interface ConstituencySvgMapProps {
  className?: string;
  activeConstituency?: string; // '132' | '133' | 'all'
  onSelectConstituency?: (id: string) => void;
  interactive?: boolean;
  accentColor?: string;
  silhouetteColor?: string;
}

export const ConstituencySvgMap: React.FC<ConstituencySvgMapProps> = ({
  className = '',
  activeConstituency = 'all',
  onSelectConstituency,
  interactive = false,
  accentColor = '#FACC15',
  silhouetteColor = '#2E0854'
}) => {
  const isVasaiActive = activeConstituency === '133' || activeConstituency === 'all';
  const isNalasoparaActive = activeConstituency === '132' || activeConstituency === 'all';

  return (
    <svg
      viewBox="0 0 600 760"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vasai and Nalasopara Constituency Geographic Boundary"
    >
      <defs>
        {/* Soft violet atmospheric ambient glow */}
        <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7E22CE" stopOpacity="0.12" />
          <stop offset="70%" stopColor="#FACC15" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#7E22CE" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="vasaiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={silhouetteColor} />
          <stop offset="100%" stopColor="#3B0764" />
        </linearGradient>

        <linearGradient id="nalasoparaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B0764" />
          <stop offset="100%" stopColor={silhouetteColor} />
        </linearGradient>

        {/* Shadow filter for subtle lift */}
        <filter id="subtleMapShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#2E0854" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Background ambient halo */}
      <circle cx="300" cy="380" r="280" fill="url(#mapGlow)" />

      {/* Palghar District Context Boundary (Dashed) */}
      <path
        d="M200 60 C 260 40, 360 50, 430 80 C 470 120, 500 200, 520 280 C 530 360, 520 460, 480 560 C 450 630, 390 680, 340 710"
        stroke="#E9D5FF"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        fill="none"
        opacity="0.8"
      />

      {/* Arabian Sea Coastal Water Ripples */}
      <g stroke="#DDD6FE" strokeWidth="1" opacity="0.6" strokeLinecap="round">
        <path d="M 60 300 Q 80 295 100 300" />
        <path d="M 50 420 Q 70 415 90 420" />
        <path d="M 80 540 Q 100 535 120 540" />
        <path d="M 70 650 Q 90 645 110 650" />
      </g>

      {/* 133 — VASAI ASSEMBLY CONSTITUENCY SILHOUETTE */}
      <path
        id="path-constituency-133"
        d="
          M 175 420
          C 170 445, 160 480, 155 520
          C 150 560, 145 590, 150 630
          C 155 660, 175 690, 205 705
          C 235 720, 275 715, 310 690
          C 335 670, 345 640, 335 605
          C 328 580, 305 565, 290 540
          C 275 515, 270 485, 265 450
          C 260 425, 250 415, 220 418
          Z
        "
        fill="url(#vasaiGradient)"
        filter="url(#subtleMapShadow)"
        stroke={interactive && activeConstituency === '133' ? accentColor : '#581C87'}
        strokeWidth={interactive && activeConstituency === '133' ? '3' : '1.5'}
        className={`transition-all duration-300 ${
          interactive ? 'cursor-pointer hover:opacity-95' : ''
        } ${interactive && activeConstituency === '132' ? 'opacity-35' : 'opacity-100'}`}
        onClick={() => interactive && onSelectConstituency?.('133')}
      />

      {/* 132 — NALASOPARA ASSEMBLY CONSTITUENCY SILHOUETTE */}
      <path
        id="path-constituency-132"
        d="
          M 210 160
          C 240 145, 280 155, 320 170
          C 365 190, 420 220, 445 270
          C 465 315, 455 370, 430 420
          C 405 470, 360 510, 310 545
          C 285 530, 275 490, 265 450
          C 255 410, 230 410, 205 405
          C 180 400, 168 375, 172 340
          C 176 300, 182 260, 188 220
          C 192 190, 198 170, 210 160
          Z
        "
        fill="url(#nalasoparaGradient)"
        filter="url(#subtleMapShadow)"
        stroke={interactive && activeConstituency === '132' ? accentColor : '#581C87'}
        strokeWidth={interactive && activeConstituency === '132' ? '3' : '1.5'}
        className={`transition-all duration-300 ${
          interactive ? 'cursor-pointer hover:opacity-95' : ''
        } ${interactive && activeConstituency === '133' ? 'opacity-35' : 'opacity-100'}`}
        onClick={() => interactive && onSelectConstituency?.('132')}
      />

      {/* Northern Virar / Vaitarna Buffer */}
      <path
        d="
          M 210 160
          C 200 135, 205 105, 230 90
          C 260 75, 300 85, 330 110
          C 355 130, 360 150, 320 170
          Z
        "
        fill="#230640"
        opacity="0.9"
      />

      {/* Boundary Divider */}
      <path
        d="M 175 420 C 210 415, 255 425, 290 540"
        stroke={accentColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={interactive ? 'none' : '4 4'}
        opacity="0.95"
      />

      {/* Western Railway Line Transit Spine */}
      <path
        d="M 235 690 L 235 590 L 250 480 L 255 350 L 255 220 L 250 110"
        stroke="#FACC15"
        strokeWidth="2"
        strokeDasharray="6 4"
        strokeLinecap="round"
        opacity="0.95"
      />

      {/* Railway Stations */}
      <g fill="#FFFFFF" stroke="#581C87" strokeWidth="2">
        <circle cx="235" cy="650" r="4.5" />
        <circle cx="250" cy="480" r="4.5" />
        <circle cx="255" cy="310" r="4.5" />
      </g>

      {/* Yellow Accent Landmarks */}
      <circle cx="160" cy="670" r="3.5" fill={accentColor} />
      <circle cx="172" cy="270" r="3.5" fill={accentColor} />
      <circle cx="430" cy="350" r="3.5" fill={accentColor} />

      {/* Interactive text labels only when interactive is true */}
      {interactive && (
        <g className="select-none pointer-events-none">
          <text
            x="240"
            y="300"
            fill="#FFFFFF"
            fontSize="12"
            fontWeight="700"
            fontFamily="'Inter', sans-serif"
            textAnchor="middle"
          >
            132 - NALASOPARA
          </text>
          <text
            x="240"
            y="318"
            fill="#FEF08A"
            fontSize="10"
            fontWeight="600"
            fontFamily="'Mukta', sans-serif"
            textAnchor="middle"
          >
            नालासोपारा विधानसभा
          </text>

          <text
            x="240"
            y="615"
            fill="#FFFFFF"
            fontSize="12"
            fontWeight="700"
            fontFamily="'Inter', sans-serif"
            textAnchor="middle"
          >
            133 - VASAI
          </text>
          <text
            x="240"
            y="633"
            fill="#FEF08A"
            fontSize="10"
            fontWeight="600"
            fontFamily="'Mukta', sans-serif"
            textAnchor="middle"
          >
            वसई विधानसभा
          </text>

          <text x="248" y="653" fill="#D8B4FE" fontSize="8" fontWeight="500">
            Vasai Road
          </text>
          <text x="262" y="483" fill="#D8B4FE" fontSize="8" fontWeight="500">
            Nalasopara
          </text>
          <text x="268" y="313" fill="#D8B4FE" fontSize="8" fontWeight="500">
            Virar
          </text>
        </g>
      )}
    </svg>
  );
};
