import React, { useState, useEffect } from 'react';
import { BvaEmblem } from './BvaEmblem';
import { Menu, X, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { PRIMARY_NAV_LINKS } from '../data/navSections';

interface NavbarProps {
  currentLang: 'mr' | 'en' | 'hi';
  onSelectLang: (lang: 'mr' | 'en' | 'hi') => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAdmin: () => void;
  onOpenSearch?: () => void;
  onOpenCorrections: () => void;
  onOpenDocuments?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  activeSection,
  onNavigate,
  onOpenAdmin,
  onOpenCorrections,
  onOpenDocuments
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Civic Identity Strip aligned identically with main navbar container */}
      <div className="bg-[#0220A8] text-white text-[11px] sm:text-xs font-medium py-1.5 sm:py-2 border-b border-blue-900 tracking-wide select-none">
        <div className="bva-container max-sm:px-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 mx-auto md:mx-0 text-center md:text-left">
            <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-2 ring-white/40 animate-pulse shrink-0" />
            <span className="font-sans font-semibold leading-snug">
              {currentLang === 'mr'
                ? 'बहुजन विकास आघाडी (BVA) · अधिकृत सार्वजनिक नोंदी व प्रत्यक्ष विकास कार्यावर आधारित'
                : 'Bahujan Vikas Aaghadi (BVA) · Independent Research & Public Governance Archive'}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-blue-100 text-xs shrink-0">
            <span className="flex items-center gap-1.5 font-medium whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#FDF219]" />
              <span>Palghar District · Vasai-Virar</span>
            </span>
            <span className="text-white/20">|</span>
            <button
              onClick={onOpenCorrections}
              className="text-white hover:text-[#FDF219] flex items-center gap-1.5 font-bold cursor-pointer transition-colors whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{currentLang === 'mr' ? 'तथ्य पडताळणी' : 'Evidence'}</span>
            </button>
            {onOpenDocuments && (
              <>
                <span className="text-white/20">|</span>
                <button
                  onClick={onOpenDocuments}
                  className="text-white hover:text-[#FDF219] flex items-center gap-1.5 font-bold cursor-pointer transition-colors whitespace-nowrap"
                >
                  <span>{currentLang === 'mr' ? 'राजपत्रे' : 'Gazettes'}</span>
                </button>
              </>
            )}
            <span className="text-white/20">|</span>
            <button
              onClick={onOpenAdmin}
              className="text-[#FDF219] hover:underline flex items-center gap-1.5 font-bold cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4 text-[#FDF219]" />
              <span>Demo CMS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Crisp White Navigation Bar */}
      <header
        className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? 'shadow-[0_6px_28px_rgba(2,32,168,0.10)] border-b border-slate-200 py-2.5 sm:py-3'
            : 'border-b border-slate-200 py-3 sm:py-4 lg:py-4'
        }`}
      >
        <div className="bva-container max-sm:px-3 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Authentic Logo and Exact 3-Line Party Name Format (Consistent across Mobile & Desktop) */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2 sm:gap-3.5 text-left group transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0220A8] cursor-pointer shrink-0"
            aria-label="Bahujan Vikas Aaghadi Home"
          >
            <div className="transition-transform group-hover:scale-105 shrink-0 hidden sm:block">
              <BvaEmblem
                variant="navbar"
                size={isScrolled ? 64 : 76}
                priority={true}
              />
            </div>
            <div className="transition-transform group-hover:scale-105 shrink-0 sm:hidden">
              <BvaEmblem
                variant="navbar"
                size={isScrolled ? 32 : 36}
                priority={true}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-black text-slate-900 text-[15px] sm:text-xl lg:text-[24px] tracking-tight leading-none font-marathi group-hover:text-[#0220A8] transition-colors whitespace-nowrap">
                बहुजन विकास आघाडी
              </span>
              <span className="text-[9px] sm:text-xs lg:text-[13px] font-black text-[#0220A8] tracking-[0.10em] sm:tracking-widest font-sans uppercase mt-0.5 sm:mt-1 whitespace-nowrap leading-none">
                BAHUJAN VIKAS AAGHADI
              </span>
              <span className="text-[6.8px] sm:text-[10px] lg:text-[11px] text-slate-500 font-bold tracking-[0.03em] sm:tracking-wider uppercase mt-0.5 sm:mt-1 whitespace-nowrap leading-none">
                VASAI · VIRAR · NALASOPARA · PALGHAR
              </span>
            </div>
          </button>

          {/* Center: Desktop Navigation Links cleanly balanced */}
          <nav className="hidden xl:flex items-center justify-center gap-5 2xl:gap-7" aria-label="Main Navigation">
            {PRIMARY_NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-[14px] 2xl:text-[15px] font-extrabold tracking-wide transition-all py-1.5 relative uppercase cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#0220A8]'
                      : 'text-slate-600 hover:text-[#0220A8]'
                  }`}
                >
                  {currentLang === 'mr' ? link.labelMr : link.labelEn}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 w-full h-[3.5px] bg-[#FDF219] rounded-full shadow-[0_2px_8px_rgba(253,242,25,0.9)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Language Switcher & Mobile Hamburger Menu (Search button removed) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Language Selector: Marathi and English Primary Toggle */}
            <div className="flex items-center p-0.5 sm:p-1 rounded-xl border border-slate-200 bg-slate-100 text-xs font-bold shadow-2xs">
              <button
                onClick={() => onSelectLang('mr')}
                aria-label="मराठी भाषा निवडा"
                className={`px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-lg font-bold text-[10.5px] sm:text-[13px] transition-all cursor-pointer min-h-[34px] sm:min-h-[38px] whitespace-nowrap ${
                  currentLang === 'mr' ? 'bg-[#0220A8] text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                मराठी
              </button>
              <button
                onClick={() => onSelectLang('en')}
                aria-label="Select English Language"
                className={`px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-lg font-bold text-[10.5px] sm:text-[13px] transition-all cursor-pointer min-h-[34px] sm:min-h-[38px] whitespace-nowrap ${
                  currentLang === 'en' ? 'bg-[#0220A8] text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                ENG
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-800 hover:text-[#0220A8] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0220A8] cursor-pointer min-h-[40px] min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center border border-slate-200"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#0220A8]" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="xl:hidden fixed inset-x-0 top-[calc(44px+68px)] sm:top-[calc(44px+88px)] bottom-0 bg-white/98 backdrop-blur-md z-50 border-b border-slate-200 shadow-2xl px-4 py-5 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col space-y-1 max-w-md mx-auto">
              <div className="pb-2 mb-2 border-b border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span>{currentLang === 'mr' ? 'विभाग सूची' : 'NAVIGATION SECTIONS'}</span>
                <span className="text-[10px] font-mono text-slate-400">Esc to close</span>
              </div>

              {PRIMARY_NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-bold tracking-wide transition-colors cursor-pointer min-h-[48px] flex items-center justify-between ${
                      isActive
                        ? 'bg-[#0220A8] text-white shadow-xs'
                        : 'text-slate-800 hover:bg-slate-100 active:bg-slate-200'
                    }`}
                  >
                    <span>{currentLang === 'mr' ? link.labelMr : link.labelEn}</span>
                    <span className="text-[10px] font-mono opacity-60">
                      {currentLang === 'mr' ? link.descriptionMr : link.descriptionEn}
                    </span>
                  </button>
                );
              })}

              <div className="pt-4 mt-3 border-t border-slate-200 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCorrections();
                  }}
                  className="flex items-center justify-center gap-2 text-xs font-bold text-slate-800 px-3.5 py-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer min-h-[44px]"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{currentLang === 'mr' ? 'तथ्य पडताळणी व पुरावा नोंद' : 'Fact Audit & Evidence Registry'}</span>
                </button>

                {onOpenDocuments && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenDocuments();
                    }}
                    className="flex items-center justify-center gap-2 text-xs font-bold text-slate-800 px-3.5 py-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer min-h-[44px]"
                  >
                    <span>{currentLang === 'mr' ? 'अधिकृत राजपत्रे व दस्तऐवज' : 'Official Gazettes & Documents'}</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="px-3.5 py-3 bg-[#0220A8] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer min-h-[44px]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FDF219]" />
                  <span>{currentLang === 'mr' ? 'डेमो सीएमएस पोर्टल' : 'Demo CMS Console'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
