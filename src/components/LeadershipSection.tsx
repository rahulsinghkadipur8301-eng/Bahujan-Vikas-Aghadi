import React from 'react';
import { LEADERS_DATA } from '../data/bvaData';
import { MemberProfile, ALL_MEMBERS_DATA } from '../data/membersData';
import { CheckCircle2, ArrowRight, ShieldCheck, Users } from 'lucide-react';

interface LeadershipSectionProps {
  currentLang: 'mr' | 'en' | 'hi';
  onSelectMember: (member: MemberProfile) => void;
  onOpenFullDirectory?: () => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  currentLang,
  onSelectMember,
  onOpenFullDirectory
}) => {
  const handleOpenLeaderModal = (leaderId: string) => {
    const member = ALL_MEMBERS_DATA.find((m) => m.id === leaderId) || ALL_MEMBERS_DATA[0];
    onSelectMember(member);
  };

  return (
    <section id="leadership" className="relative w-full bg-white py-16 lg:py-20 border-b border-slate-200 scroll-mt-20">
      <div className="bva-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 pb-4 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0220A8] uppercase tracking-widest mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-2 ring-[#0220A8]" />
              <span>{currentLang === 'mr' ? 'पक्ष नेतृत्व' : 'PARTY LEADERSHIP'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight font-marathi">
              {currentLang === 'mr' ? 'जनतेशी एकरूप असलेले नेतृत्व' : 'Grassroots Stewards of Vasai-Virar'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-sans">
              {currentLang === 'mr'
                ? 'हितेंद्र ठाकूर आणि क्षितिज ठाकूर — तीन दशकांहून अधिक काळ जनतेच्या हक्कांसाठी अखंड संघर्ष.'
                : 'Hitendra Thakur & Kshitij Thakur — Dedicated legislative representation and peri-urban stewardship.'}
            </p>
          </div>

          {onOpenFullDirectory && (
            <button
              onClick={onOpenFullDirectory}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-[#0220A8] hover:text-white text-slate-800 text-xs font-bold transition-all shadow-xs self-start md:self-auto cursor-pointer"
            >
              <Users className="w-4 h-4 text-[#0220A8] group-hover:text-white" />
              <span>{currentLang === 'mr' ? 'सर्व पदाधिकारी सूची (२८+)' : 'Browse Full Directory (28+)'}</span>
            </button>
          )}
        </div>

        {/* Wide Full-Width Leadership Cards (Phase 4 & Phase 8 Specs) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 w-full">
          {/* 1. Hitendra Thakur */}
          <div className="bg-white rounded-2xl border border-slate-200 hover:border-[#0220A8] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group">
            {/* Prominent Large Portrait (Major part of card) */}
            <div className="w-full sm:w-[48%] h-80 sm:h-auto min-h-[340px] relative overflow-hidden bg-gradient-to-t from-slate-900/10 to-transparent shrink-0">
              <img
                src="/hitendra_thakur.png"
                alt="Hitendra Thakur"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-md text-[10px] font-bold bg-[#FDF219] text-slate-900 border border-amber-300 shadow-sm font-mono tracking-wider">
                FOUNDER
              </span>
            </div>

            {/* Bio & Legislative Record Details */}
            <div className="p-6 sm:p-7 xl:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#0220A8] text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EAB308]" />
                  <span>{currentLang === 'mr' ? 'माजी ५-वेळा आमदार (वसई)' : 'Founder · Former 5-Term MLA (Vasai)'}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                  {currentLang === 'mr' ? 'हितेंद्र (अप्पा) ठाकूर' : 'Hitendra (Appa) Thakur'}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {currentLang === 'mr'
                    ? 'वसई-विरारच्या स्वायत्त विकासाची पायाभरणी, पाणी प्रश्न निराकरण व विवा शिक्षण संकुलांची निर्मिती करून उच्च शिक्षण घरोघरी पोहोचवणारे लोकनेते.'
                    : 'Pioneered municipal autonomy, regional water security, and affordable decentralised higher education across the Palghar peri-urban corridor.'}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleOpenLeaderModal('hitendra-thakur')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0220A8] hover:text-[#00177A] group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>{currentLang === 'mr' ? 'सविस्तर प्रोफाइल व कार्यपट पहा' : 'View Verified Profile'}</span>
                  <ArrowRight className="w-4 h-4 text-[#0220A8]" />
                </button>
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">133-Vasai</span>
              </div>
            </div>
          </div>

          {/* 2. Kshitij Thakur */}
          <div className="bg-white rounded-2xl border border-slate-200 hover:border-[#0220A8] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group">
            {/* Prominent Large Portrait (Major part of card) */}
            <div className="w-full sm:w-[48%] h-80 sm:h-auto min-h-[340px] relative overflow-hidden bg-gradient-to-t from-slate-900/10 to-transparent shrink-0">
              <img
                src="/kshitij_thakur.png"
                alt="Kshitij Thakur"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-md text-[10px] font-bold bg-[#0220A8] text-white shadow-sm font-mono tracking-wider">
                132-NALASOPARA
              </span>
            </div>

            {/* Bio & Legislative Record Details */}
            <div className="p-6 sm:p-7 xl:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0220A8] text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0220A8]" />
                  <span>{currentLang === 'mr' ? 'माजी ३-वेळा आमदार (२००९–२०२४)' : 'Former 3-Term MLA (2009–2024)'}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                  {currentLang === 'mr' ? 'क्षितिज ठाकूर' : 'Kshitij Thakur'}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {currentLang === 'mr'
                    ? 'उपनगरीय रेल्वे फेऱ्या विस्तार, युवा कौशल्य विकास, १८५ दशलक्ष लिटर सूर्य पाणी योजना आणि आधुनिक क्रीडा सुविधांचे सक्षमीकरण.'
                    : 'Championed 185 MLD Surya bulk treated water, suburban rail frequency modernization, youth skill initiatives, and sports infrastructure.'}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleOpenLeaderModal('kshitij-thakur')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0220A8] hover:text-[#00177A] group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>{currentLang === 'mr' ? 'सविस्तर प्रोफाइल व कार्यपट पहा' : 'View Verified Profile'}</span>
                  <ArrowRight className="w-4 h-4 text-[#0220A8]" />
                </button>
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">132-Nalasopara</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle / Verification Notice */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2 font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Designations cross-referenced with official Maharashtra Vidhan Sabha Gazette records.</span>
        </div>
      </div>
    </section>
  );
};
