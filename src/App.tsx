import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { LeadershipSection } from './components/LeadershipSection';
import { InteractiveTimelineSection } from './components/InteractiveTimelineSection';
import { ConstituencyMap } from './components/ConstituencyMap';
import { InitiativesSection } from './components/InitiativesSection';
import { NewsContactSection } from './components/NewsContactSection';
import { Footer } from './components/Footer';

// Secondary Modals & Workflows (Preserving verified databases without cluttering the homepage)
import { MemberProfileModal } from './components/MemberProfileModal';
import { MemberDirectoryModal } from './components/MemberDirectoryModal';
import { EditorialCorrectionsModal } from './components/EditorialCorrectionsModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { AdminCMSModal } from './components/AdminCMSModal';
import { DocumentsModal } from './components/DocumentsModal';
import { MemberProfile, ALL_MEMBERS_DATA } from './data/membersData';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'mr' | 'en' | 'hi'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bva_lang_pref');
      if (saved === 'mr' || saved === 'en' || saved === 'hi') return saved;
    }
    return 'mr';
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isCorrectionsOpen, setIsCorrectionsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<MemberProfile | null>(null);

  const lenisRef = useRef<Lenis | null>(null);

  // Initialize best-in-class Lenis smooth scroll engine
  useEffect(() => {
    // Respect user's prefers-reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-grade exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.2,
      infinite: false
    });

    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      (window as any).__lenis = null;
    };
  }, []);

  const handleSelectLang = (lang: 'mr' | 'en' | 'hi') => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('bva_lang_pref', lang);
    } catch {
      // storage unavailable
    }
  };

  // Ultra-smooth scroll navigation with section alias mapping and custom easing
  const scrollToSection = (sectionId: string) => {
    // Map legacy / secondary aliases to the 7 core primary sections
    const aliasMap: Record<string, string> = {
      history: 'journey',
      map: 'constituencies',
      initiatives: 'work',
      news: 'contact',
      numbers: 'about'
    };

    const targetId = aliasMap[sectionId] || sectionId;
    setActiveSection(targetId);

    const element = document.getElementById(targetId) || document.getElementById(sectionId);
    if (element) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(element, {
          offset: -95,
          duration: 1.35,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        const navOffset = 95;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navOffset,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleLeaderExplore = (leaderId: string) => {
    const member = ALL_MEMBERS_DATA.find((m) => m.id === leaderId);
    if (member) {
      setSelectedMember(member);
    } else {
      scrollToSection('leadership');
    }
  };

  // Keyboard shortcut: Cmd+K / Ctrl+K opens global search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track scroll position to update active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'leadership', 'journey', 'constituencies', 'work', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#0220A8] selection:text-[#FDF219]">
      {/* 0. Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 1. Sticky Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCorrections={() => setIsCorrectionsOpen(true)}
        onOpenDocuments={() => setIsDocumentsOpen(true)}
      />

      {/* Main Content Area: Exactly the 7 Primary Minimalist Sections */}
      <main className="flex-1">
        {/* SECTION 1: HOME — Powerful leadership hero with minimal text */}
        <Hero
          currentLang={currentLang}
          onExploreStory={() => scrollToSection('about')}
          onExploreLeader={handleLeaderExplore}
          onExploreConstituency={() => scrollToSection('constituencies')}
        />

        {/* SECTION 2: ABOUT BVA — Short party introduction and essential history */}
        <AboutSection
          currentLang={currentLang}
          onExploreHistory={() => scrollToSection('journey')}
        />

        {/* SECTION 3: LEADERSHIP — Prominent leaders and concise profiles */}
        <LeadershipSection
          currentLang={currentLang}
          onSelectMember={(member) => setSelectedMember(member)}
          onOpenFullDirectory={() => setIsDirectoryOpen(true)}
        />

        {/* SECTION 4: OUR JOURNEY — Minimal animated historical timeline */}
        <InteractiveTimelineSection currentLang={currentLang} />

        {/* SECTION 5: CONSTITUENCIES — Interactive Nalasopara and Vasai explorer */}
        <ConstituencyMap currentLang={currentLang} />

        {/* SECTION 6: OUR WORK — Selected, verifiable public initiatives */}
        <InitiativesSection currentLang={currentLang} />

        {/* SECTION 7: NEWS & CONTACT — Important updates and contact samvaad */}
        <NewsContactSection currentLang={currentLang} />
      </main>

      {/* Editorial Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={scrollToSection}
        onOpenCorrections={() => setIsCorrectionsOpen(true)}
        onOpenDocuments={() => setIsDocumentsOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* =========================================================
          SECONDARY MODALS & WORKFLOWS
          (Preserves all verified data, election records, and search)
          ========================================================= */}
      {/* 1. Dynamic Member Profile Modal */}
      <MemberProfileModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        currentLang={currentLang}
      />

      {/* 2. Full 28+ Leadership & Members Directory Modal */}
      <MemberDirectoryModal
        isOpen={isDirectoryOpen}
        onClose={() => setIsDirectoryOpen(false)}
        onSelectMember={(member) => {
          setIsDirectoryOpen(false);
          setSelectedMember(member);
        }}
        currentLang={currentLang}
      />

      {/* 3. Editorial Corrections & Evidence Registry Modal */}
      <EditorialCorrectionsModal
        isOpen={isCorrectionsOpen}
        onClose={() => setIsCorrectionsOpen(false)}
        currentLang={currentLang}
      />

      {/* 4. Official Gazettes & Government Documents Modal */}
      <DocumentsModal
        isOpen={isDocumentsOpen}
        onClose={() => setIsDocumentsOpen(false)}
        currentLang={currentLang}
      />

      {/* 5. Global Archive Search Modal (Cmd+K) */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectMember={(member) => setSelectedMember(member)}
        onNavigateSection={scrollToSection}
        currentLang={currentLang}
      />

      {/* 6. Admin CMS Demonstration Modal */}
      <AdminCMSModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
