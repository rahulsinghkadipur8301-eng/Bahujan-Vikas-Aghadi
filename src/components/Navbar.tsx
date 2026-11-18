import React, { useState, useEffect } from 'react';
import { BvaEmblem } from './BvaEmblem';
import { Menu, X, Sparkles, MapPin, Search, ShieldCheck } from 'lucide-react';
import { PRIMARY_NAV_LINKS } from '../data/navSections';

interface NavbarProps {
  currentLang: 'mr' | 'en' | 'hi';
  onSelectLang: (lang: 'mr' | 'en' | 'hi') => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAdmin: () => void;
  onOpenSearch: () => void;
  onOpenCorrections: () => void;
  onOpenDocuments?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  activeSection,
  onNavigate,
  onOpenAdmin,
  onOpenSearch,
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
      {/* Top Civic Identity Strip in Royal Logo Blue & Official Yellow */}
      <div className="bg-[#0220A8] text-white text-xs sm:text-[13px] font-medium py-1.5 sm:py-2 px-4 sm:px-8 flex items-center justify-between border-b border-blue-900 tracking-wide select-none">
        <div className="flex items-center gap-2.5 mx-auto sm:mx-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FDF219] ring-2 ring-white/40 animate-pulse" />
          <span className="font-sans font-semibold">
            {currentLang === 'mr'
              ? 'बहुजन विकास आघाडी (BVA) · अधिकृत सार्वजनिक नोंदी व प्रत्यक्ष विकास कार्यावर आधारित'
              : 'Bahujan Vikas Aaghadi (BVA) · Independent Research & Public Governance Archive'}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-blue-100 text-xs">
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#FDF219]" />
            <span>Palghar District · Vasai-Virar</span>
          </span>
          <span className="text-white/20">|</span>
          <button
            onClick={onOpenCorrections}
            className="text-white hover:text-[#FDF219] flex items-center gap-1.5 font-bold cursor-pointer transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{currentLang === 'mr' ? 'तथ्य पडताळणी' : 'Evidence'}</span>
          </button>
          {onOpenDocuments && (
            <>
              <span className="text-white/20">|</span>
              <button
                onClick={onOpenDocuments}
                className="text-white hover:text-[#FDF219] flex items-center gap-1.5 font-bold cursor-pointer transition-colors"
              >
                <span>{currentLang === 'mr' ? 'राजपत्रे' : 'Gazettes'}</span>
              </button>
            </>
          )}
          <span className="text-white/20">|</span>
          <button
            onClick={onOpenAdmin}
            className="text-[#FDF219] hover:underline flex items-center gap-1.5 font-bold cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#FDF219]" />
            <span>Demo CMS</span>
          </button>
        </div>
      </div>

      {/* Main Sticky Crisp White Navigation Bar (Substantially Enlarged & Authoritative) */}
      <header
        className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? 'shadow-[0_6px_28px_rgba(2,32,168,0.10)] border-b border-slate-200 py-3 sm:py-3.5'
            : 'border-b border-slate-200 py-4 sm:py-5 lg:py-5'
        }`}
      >
        <div className="bva-container flex items-center justify-between">
          {/* Left: Authentic Logo and Party Names - Substantially Enlarged */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 sm:gap-4 text-left group transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0220A8] cursor-pointer"
            aria-label="Bahujan Vikas Aaghadi Home"
          >
            <div className="transition-transform group-hover:scale-105 shrink-0 hidden sm:block">
              <BvaEmblem
                variant="navbar"
                size={isScrolled ? 70 : 86}
                priority={true}
              />
            </div>
            <div className="transition-transform group-hover:scale-105 shrink-0 sm:hidden">
              <BvaEmblem
                variant="navbar"
                size={isScrolled ? 46 : 56}
                priority={true}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-black text-slate-900 text-lg sm:text-2xl lg:text-[25px] tracking-tight leading-none font-marathi group-hover:text-[#0220A8] transition-colors">
                बहुजन विकास आघाडी
              </span>
              <span className="text-[10px] sm:text-xs lg:text-[13px] font-black text-[#0220A8] tracking-widest font-sans uppercase mt-1">
                BAHUJAN VIKAS AAGHADI
              </span>
              <span className="text-[9px] sm:text-[11px] text-slate-500 font-bold tracking-wider uppercase hidden sm:block mt-0.5">
                VASAI · VIRAR · NALASOPARA · PALGHAR
              </span>
            </div>
          </button>

          {/* Center: Desktop Navigation Links (Enlarged 15px font-extrabold with illuminated active pill) */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7" aria-label="Main Navigation">
            {PRIMARY_NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-[14px] 2xl:text-[15px] font-extrabold tracking-wide transition-all py-1.5 relative uppercase cursor-pointer ${
                    isActive
                      ? 'text-[#0220A8] scale-105'
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

          {/* Right Controls: Search, Language Switcher & Hamburger Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 hover:border-[#0220A8] bg-slate-50 hover:bg-white text-slate-800 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-2xs min-h-[46px]"
              title="Global Archive Search (⌘K)"
              aria-label="Search Archive"
            >
              <Search className="w-4 h-4 text-[#0220A8]" />
              <span className="hidden sm:inline font-bold">Search</span>
              <kbd className="hidden md:inline text-[10px] font-mono bg-slate-200/80 px-1.5 py-0.5 rounded text-slate-600 font-semibold">
                ⌘K
              </kbd>
            </button>

            {/* Language Selector: Marathi and English Primary Toggle */}
            <div className="flex items-center p-1 rounded-xl border border-slate-200 bg-slate-100 text-xs font-bold shadow-2xs">
              <button
                onClick={() => onSelectLang('mr')}
                aria-label="मराठी भाषा निवडा"
                className={`px-3 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-[13px] transition-all cursor-pointer min-h-[38px] ${
                  currentLang === 'mr' ? 'bg-[#0220A8] text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                मराठी
              </button>
              <button
                onClick={() => onSelectLang('en')}
                aria-label="Select English Language"
                className={`px-3 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-[13px] transition-all cursor-pointer min-h-[38px] ${
                  currentLang === 'en' ? 'bg-[#0220A8] text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                ENG
              </button>
            </div>

            {/* Mobile Hamburger Menu Button (>= 46x46 px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-slate-800 hover:text-[#0220A8] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0220A8] cursor-pointer min-h-[46px] min-w-[46px] flex items-center justify-center border border-slate-200"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0220A8]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="xl:hidden fixed inset-x-0 top-[calc(44px+78px)] bottom-0 bg-white/98 backdrop-blur-md z-50 border-b border-slate-200 shadow-2xl px-4 py-5 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
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
