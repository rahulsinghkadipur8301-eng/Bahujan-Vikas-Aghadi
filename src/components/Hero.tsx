import React, { useRef, useState, useEffect } from 'react';
import { HeroBackground } from './HeroBackground';
import { BvaEmblem } from './BvaEmblem';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

interface HeroProps {
  currentLang: 'mr' | 'en' | 'hi';
  onExploreStory: () => void;
  onExploreLeader: (leaderId: string) => void;
  onExploreConstituency?: () => void;
}

/**
 * Hero Component:
 * Upgraded to balanced 3-Zone Composition:
 * - Left Side: HITENDRA THAKUR (Bold typography, role, verified badge, description, primary CTA)
 * - Centre: Prominent leadership photograph (/bva_leaders_clean.png) with orbital lines & ambient glows
 * - Right Side: KSHITIJ THAKUR (Balanced typography, role, verified badge, description, secondary CTA)
 * - Cinematic scroll transition coordinated with high-performance native RAF
 * - Dedicated responsive mobile layout
 * - Fixed navbar headroom to prevent clipping
 */
export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onExploreStory,
  onExploreLeader,
  onExploreConstituency
}) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // High performance RAF scroll listener for cinematic hero transitions
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (heroRef.current) {
            const rect = heroRef.current.getBoundingClientRect();
            const total = heroRef.current.offsetHeight || window.innerHeight;
            // Progress goes from 0 (at top) to 1 (when scrolled out of view)
            const progress = Math.min(1, Math.max(0, -rect.top / total));
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop Scroll-driven Transforms (Stage 2 & Stage 3 specifications)
  const sp = scrollProgress;
  const leftTextX = -sp * 45;
  const leftTextOpacity = Math.max(0, 1 - sp * 1.6);

  const rightTextX = sp * 45;
  const rightTextOpacity = Math.max(0, 1 - sp * 1.6);

  const photoScale = 1 - sp * 0.07;
  const photoY = -sp * 32;
  const photoOpacity = Math.max(0.15, 1 - sp * 1.1);

  const indicatorOpacity = Math.max(0, 1 - sp * 4.5);
  const progressLineWidth = `${Math.min(100, Math.round(sp * 100))}%`;

  const content = {
    regionTag: 'Vasai · Virar · Nalasopara · Palghar',
    hitendra: {
      nameEn: 'Hitendra (Appa) Thakur',
      nameMr: 'हितेंद्र (अप्पा) ठाकूर',
      roleEn: 'Founder · Former 5-Term MLA (Vasai)',
      roleMr: 'संस्थापक · माजी ५-वेळा आमदार (वसई)'
    },
    kshitij: {
      nameEn: 'Kshitij Thakur',
      nameMr: 'क्षितिज ठाकूर',
      roleEn: 'Former 3-Term MLA (2009–2024)',
      roleMr: 'माजी ३-वेळा आमदार (२००९–२०२४)'
    },
    tagline: {
      en: 'Regional Voice & Sustainable Progress',
      mr: 'स्थानिक जनतेचा आवाज, शाश्वत विकासाची परंपरा.'
    },
    description: {
      en: 'Over three decades of dedicated grassroots representation across Vasai, Virar, Nalasopara, and Palghar district.',
      mr: 'गेली तीन दशके वसई, विरार, नालासोपारा आणि पालघर जिल्ह्याच्या सर्वांगीण प्रगतीसाठी समर्पित लोकप्रतिनिधित्व.'
    },
    ctaPrimary: {
      en: 'EXPLORE OUR JOURNEY',
      mr: 'आमचा प्रवास'
    },
    ctaSecondary: {
      en: 'CONSTITUENCIES',
      mr: 'मतदारसंघ माहिती'
    }
  };

  const handleConstituencyClick = () => {
    if (onExploreConstituency) {
      onExploreConstituency();
    } else {
      const el = document.getElementById('constituencies') || document.getElementById('map');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full bg-white overflow-hidden flex flex-col justify-between pt-4 sm:pt-6 lg:pt-8 pb-4 select-none scroll-mt-24"
    >
      {/* 1. Multi-Layered Premium Animated Background System */}
      <HeroBackground scrollProgress={scrollProgress} />

      {/* =========================================================
          MOBILE COMPOSITION (< lg screens: 320px, 360px, 375px, 390px, 414px, 768px)
          Portrait prominently first at top, then both leaders' names arranged legibly below
          ========================================================= */}
      <div className="lg:hidden w-full max-w-md mx-auto px-4 py-2 relative z-10 flex flex-col items-center">
        {/* Identity Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-[#0220A8] text-[11px] font-bold uppercase tracking-wider shadow-2xs mb-2">
          <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-2 ring-[#0220A8]" />
          <span>{content.regionTag}</span>
        </div>

        {/* Central Leadership Photograph Prominently First (Zero Face/Gesture Clipping) */}
        <div className="w-full relative flex items-end justify-center">
          <div className="absolute inset-x-4 bottom-0 h-40 bg-gradient-to-t from-blue-100/40 via-amber-100/20 to-transparent rounded-full filter blur-xl pointer-events-none" />
          <img
            src="/bva_leaders_clean.png"
            alt="Hitendra Thakur and Kshitij Thakur — Bahujan Vikas Aaghadi"
            className="w-full h-auto max-h-[300px] sm:max-h-[340px] object-contain object-bottom relative z-10 drop-shadow-sm"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Both Leaders' Names Arranged Legibly on Mobile Below Photograph */}
        <div className="w-full text-center space-y-2 pt-3">
          <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/80">
            {/* Left Leader: Hitendra Thakur */}
            <div
              onClick={() => onExploreLeader('hitendra-thakur')}
              className="p-2 rounded-xl bg-slate-50/90 border border-slate-200 text-left cursor-pointer active:bg-blue-50"
            >
              <span className="text-[10px] font-bold text-[#EAB308] uppercase block font-mono">Founder</span>
              <h2 className="text-sm font-black text-[#0220A8] leading-tight font-display">
                HITENDRA THAKUR
              </h2>
              <p className="text-[10px] text-slate-600 font-marathi truncate mt-0.5">
                माजी ५-वेळा आमदार
              </p>
            </div>

            {/* Right Leader: Kshitij Thakur */}
            <div
              onClick={() => onExploreLeader('kshitij-thakur')}
              className="p-2 rounded-xl bg-slate-50/90 border border-slate-200 text-left cursor-pointer active:bg-blue-50"
            >
              <span className="text-[10px] font-bold text-[#0220A8] uppercase block font-mono">132-Nalasopara</span>
              <h2 className="text-sm font-black text-[#0220A8] leading-tight font-display">
                KSHITIJ THAKUR
              </h2>
              <p className="text-[10px] text-slate-600 font-marathi truncate mt-0.5">
                माजी ३-वेळा आमदार
              </p>
            </div>
          </div>

          <p className="text-xs font-black text-[#0220A8] font-marathi pt-1">
            {currentLang === 'mr' ? 'स्थानिक जनतेचा आवाज, शाश्वत विकासाची परंपरा.' : 'Grassroots Leadership · Regional Autonomy'}
          </p>
        </div>

        {/* Mobile Action CTAs */}
        <div className="w-full pt-3 space-y-2">
          <button
            onClick={onExploreStory}
            className="w-full py-3.5 px-4 bg-[#0220A8] active:bg-[#00177A] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 min-h-[48px] cursor-pointer"
          >
            <span>{currentLang === 'mr' ? content.ctaPrimary.mr : content.ctaPrimary.en}</span>
            <ArrowRight className="w-4 h-4 text-[#FDF219]" />
          </button>

          <button
            onClick={handleConstituencyClick}
            className="w-full py-2.5 text-center text-xs font-bold text-[#0220A8] active:text-[#00177A] flex items-center justify-center gap-1.5 min-h-[44px] cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#0220A8]" />
            <span>{currentLang === 'mr' ? 'मतदारसंघ माहिती (१३२ व १३३) →' : 'Explore Constituencies (132 & 133) →'}</span>
          </button>
        </div>
      </div>

      {/* =========================================================
          DESKTOP THREE-ZONE BALANCED COMPOSITION (>= lg screens: 1024px, 1280px, 1440px, 1920px)
          - Left: HITENDRA THAKUR (Bold typography, role, verified badge, description, primary CTA)
          - Centre: Prominent leadership photograph (/bva_leaders_clean.png)
          - Right: KSHITIJ THAKUR (Consistent typography, role, verified badge, description, secondary CTA)
          ========================================================= */}
      <div className="hidden lg:flex bva-container-wide w-full relative z-10 items-center justify-between my-auto min-h-[calc(100vh-140px)] px-4">
        {/* =========================================================
            ZONE 1 (LEFT WING): HITENDRA THAKUR
            ========================================================= */}
        <div
          style={{
            transform: `translate3d(${leftTextX}px, 0, 0)`,
            opacity: leftTextOpacity,
            transition: 'transform 0.08s ease-out, opacity 0.12s ease-out'
          }}
          className="w-[300px] xl:w-[360px] 2xl:w-[400px] shrink-0 flex flex-col justify-center text-left space-y-3 py-4 animate-in fade-in duration-700 z-20"
        >
          {/* Identity Tag */}
          <div className="flex items-center gap-2">
            <BvaEmblem variant="badge" size={28} priority={true} />
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#0220A8] text-[11px] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-2 ring-[#0220A8]" />
              <span>133-Vasai · Founder</span>
            </div>
          </div>

          {/* Accent Line */}
          <div className="w-12 h-1 bg-[#FDF219] rounded-full" />

          {/* Prominent Name: HITENDRA THAKUR */}
          <div className="space-y-0.5">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-[54px] font-black text-[#0220A8] tracking-tight leading-[0.92] uppercase font-display">
              HITENDRA
              <br />
              <span className="text-slate-900">THAKUR</span>
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#0220A8] font-marathi pt-1">
              {content.hitendra.nameMr}
            </p>
          </div>

          {/* Verified Role Pill */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#0220A8] text-xs font-bold shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#EAB308]" />
              <span>{currentLang === 'mr' ? 'संस्थापक · माजी ५-वेळा आमदार' : 'Founder · Former 5-Term MLA'}</span>
            </div>
          </div>

          {/* Supporting Sentence */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans max-w-xs">
            {currentLang === 'mr'
              ? 'वसई-विरारच्या स्वायत्त विकासाची पायाभरणी, पाणी प्रश्न निराकरण व विवा शिक्षण संकुलांची निर्मिती.'
              : 'Pioneered municipal autonomy, regional water security, and affordable decentralised higher education.'}
          </p>

          {/* Action Button: Explore Our Journey */}
          <div className="pt-2">
            <button
              onClick={onExploreStory}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0220A8] hover:bg-[#00177A] text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-blue-950/20 transition-all duration-300 group hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FDF219] cursor-pointer"
            >
              <span>{currentLang === 'mr' ? content.ctaPrimary.mr : content.ctaPrimary.en}</span>
              <ArrowRight className="w-4 h-4 text-[#FDF219] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* =========================================================
            ZONE 2 (CENTRE: EXACT 50% VIEWPORT AXIS): LEADERSHIP CUTOUT
            ========================================================= */}
        <div
          style={{
            transform: `scale(${photoScale}) translate3d(0, ${photoY}px, 0)`,
            opacity: photoOpacity,
            transition: 'transform 0.08s ease-out, opacity 0.12s ease-out'
          }}
          className="flex-1 flex flex-col items-center justify-end relative h-full pt-2 animate-in fade-in zoom-in-95 duration-700 z-10 overflow-visible"
        >
          {/* Leaders Photograph: Naturally proportioned, preserved faces and gestures */}
          <div className="relative z-10 w-full flex items-end justify-center select-none">
            <img
              src="/bva_leaders_clean.png"
              alt="Hitendra Thakur and Kshitij Thakur — Bahujan Vikas Aaghadi"
              className="w-auto h-auto max-h-[480px] lg:max-h-[550px] xl:max-h-[640px] 2xl:max-h-[700px] object-contain object-bottom transition-transform duration-500 hover:scale-[1.01] drop-shadow-[0_15px_35px_rgba(2,32,168,0.12)]"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Slogan Pill Centered Underneath */}
          <div className="relative z-10 mt-2 mb-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-blue-200/90 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-2 ring-[#0220A8]" />
            <span className="text-xs font-bold text-[#0220A8] font-marathi">
              स्थानिक जनतेचा आवाज, शाश्वत विकासाची परंपरा
            </span>
          </div>
        </div>

        {/* =========================================================
            ZONE 3 (RIGHT WING): KSHITIJ THAKUR (EXACT SAME WIDTH AS LEFT)
            ========================================================= */}
        <div
          style={{
            transform: `translate3d(${rightTextX}px, 0, 0)`,
            opacity: rightTextOpacity,
            transition: 'transform 0.08s ease-out, opacity 0.12s ease-out'
          }}
          className="w-[300px] xl:w-[360px] 2xl:w-[400px] shrink-0 flex flex-col justify-center text-right space-y-3 py-4 animate-in fade-in duration-700 z-20"
        >
          {/* Identity Tag */}
          <div className="flex items-center justify-end gap-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#0220A8] text-[11px] font-bold uppercase tracking-wider">
              <span>132-Nalasopara · Legislative</span>
              <span className="w-2 h-2 rounded-full bg-[#0220A8] ring-2 ring-blue-300" />
            </div>
          </div>

          {/* Accent Line Aligned Right */}
          <div className="w-12 h-1 bg-[#0220A8] rounded-full ml-auto" />

          {/* Prominent Name: KSHITIJ THAKUR */}
          <div className="space-y-0.5">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-[54px] font-black text-[#0220A8] tracking-tight leading-[0.92] uppercase font-display">
              KSHITIJ
              <br />
              <span className="text-slate-900">THAKUR</span>
            </h2>
            <p className="text-base sm:text-lg font-bold text-[#0220A8] font-marathi pt-1">
              {content.kshitij.nameMr}
            </p>
          </div>

          {/* Verified Role Pill */}
          <div className="flex justify-end">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0220A8] text-xs font-bold shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0220A8]" />
              <span>{currentLang === 'mr' ? 'माजी ३-वेळा आमदार (२००९–२०२४)' : 'Former 3-Term MLA (2009–2024)'}</span>
            </div>
          </div>

          {/* Supporting Sentence */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans max-w-xs ml-auto">
            {currentLang === 'mr'
              ? 'उपनगरीय रेल्वे फेऱ्या विस्तार, युवा कौशल्य विकास, १८५ दशलक्ष लिटर सूर्य पाणी योजना आणि क्रीडा सुविधा.'
              : 'Championed 185 MLD Surya bulk treated water, suburban rail frequency modernization, and youth welfare.'}
          </p>

          {/* Action Button: Explore Constituencies */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={handleConstituencyClick}
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-300 hover:border-[#0220A8] transition-colors cursor-pointer shadow-xs"
            >
              <MapPin className="w-4 h-4 text-[#0220A8]" />
              <span>{currentLang === 'mr' ? content.ctaSecondary.mr : content.ctaSecondary.en}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Synchronized Scroll Progress Line (Stage 2 Specification) */}
      <div className="relative z-10 w-full max-w-xs sm:max-w-md mx-auto pt-1 pb-1">
        <div className="w-full h-[2.5px] bg-slate-200/80 rounded-full overflow-hidden">
          <div
            style={{ width: progressLineWidth, transition: 'width 0.1s linear' }}
            className="h-full bg-gradient-to-r from-[#0220A8] via-[#FDF219] to-[#0220A8]"
          />
        </div>
      </div>

      {/* Minimalist Scroll Indicator (Fades out smoothly on scroll) */}
      <div
        style={{ opacity: indicatorOpacity, transition: 'opacity 0.2s ease-out' }}
        className="relative z-10 w-full flex flex-col items-center justify-center pt-0 pb-1"
      >
        <button
          onClick={onExploreStory}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#0220A8] transition-colors group cursor-pointer"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-slate-500 group-hover:text-[#0220A8]">
            SCROLL TO EXPLORE
          </span>
          <div className="w-4 h-6 rounded-full border border-slate-300 group-hover:border-[#0220A8] flex items-start justify-center p-0.5 transition-colors">
            <span className="w-1 h-1.5 bg-[#0220A8] rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
