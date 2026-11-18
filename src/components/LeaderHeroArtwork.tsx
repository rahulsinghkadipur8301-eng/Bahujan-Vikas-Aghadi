import React, { useState } from 'react';

interface LeaderHeroArtworkProps {
  className?: string;
  onExploreLeader?: (leaderId: string) => void;
}

/**
 * LeaderHeroArtwork Component:
 * Displays the cropped photograph of Hitendra Thakur & Kshitij Thakur
 * without ANY background, glow, shadow, or artificial borders.
 * Pure, high-resolution transparent cutout.
 */
export const LeaderHeroArtwork: React.FC<LeaderHeroArtworkProps> = ({
  className = '',
  onExploreLeader
}) => {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <div className={`relative flex flex-col items-center justify-end select-none bg-transparent ${className}`}>
      {/* Leadership Photo: 100% pure cutout with zero background */}
      <div className="relative z-10 w-full max-w-[840px] flex flex-col items-center justify-end bg-transparent">
        <div
          className="relative w-full flex items-end justify-center group cursor-pointer bg-transparent"
          onClick={() => onExploreLeader?.('hitendra-thakur')}
          title="Hitendra Thakur & Kshitij Thakur — Bahujan Vikas Aaghadi Leadership"
        >
          <img
            src={useFallback ? '/bva_leaders_hero.png' : '/bva_leaders_clean.png'}
            alt="Hitendra Thakur and Kshitij Thakur — Bahujan Vikas Aaghadi"
            className="w-full h-auto max-h-[620px] sm:max-h-[680px] lg:max-h-[720px] xl:max-h-[760px] object-contain object-bottom transition-transform duration-500 hover:scale-[1.01]"
            onError={() => setUseFallback(true)}
            loading="eager"
            decoding="async"
          />

          {/* Interactive clickable zones mapped to Kshitij Thakur and Hitendra Thakur */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onExploreLeader?.('kshitij-thakur');
            }}
            className="absolute left-0 bottom-0 w-[48%] h-[40%] cursor-pointer focus:outline-none"
            title="Kshitij Thakur — Former 3-Term MLA"
            aria-label="View Kshitij Thakur profile"
          >
            <span className="sr-only">Kshitij Thakur</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onExploreLeader?.('hitendra-thakur');
            }}
            className="absolute right-0 bottom-0 w-[48%] h-[40%] cursor-pointer focus:outline-none"
            title="Hitendra Thakur — Founder & Former 5-Term MLA"
            aria-label="View Hitendra Thakur profile"
          >
            <span className="sr-only">Hitendra Thakur</span>
          </button>
        </div>
      </div>
    </div>
  );
};
