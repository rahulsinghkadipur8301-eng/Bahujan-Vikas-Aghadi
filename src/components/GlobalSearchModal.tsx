import React, { useState, useMemo } from 'react';
import { ALL_MEMBERS_DATA, MemberProfile } from '../data/membersData';
import { COMPLETE_TIMELINE_DATA, TimelineEvent } from '../data/timelineData';
import { CONTROVERSIES_DATA, ControversyCase } from '../data/controversiesData';
import { DOCUMENTS_DATA } from '../data/bvaData';
import { Search, X, User, Calendar, Scale, FileText, ChevronRight } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMember: (member: MemberProfile) => void;
  onNavigateSection: (sectionId: string) => void;
  currentLang: 'mr' | 'en' | 'hi';
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMember,
  onNavigateSection,
  currentLang
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return { members: [], timeline: [], controversies: [], documents: [] };
    const q = searchTerm.toLowerCase().trim();

    const members = ALL_MEMBERS_DATA.filter(
      (m) =>
        m.nameEn.toLowerCase().includes(q) ||
        m.nameMr.toLowerCase().includes(q) ||
        m.roleEn.toLowerCase().includes(q) ||
        m.wardOrConstituencyEn.toLowerCase().includes(q)
    ).slice(0, 5);

    const timeline = COMPLETE_TIMELINE_DATA.filter(
      (t) =>
        t.year.includes(q) ||
        t.titleEn.toLowerCase().includes(q) ||
        t.titleMr.toLowerCase().includes(q) ||
        t.shortDescEn.toLowerCase().includes(q)
    ).slice(0, 4);

    const controversies = CONTROVERSIES_DATA.filter(
      (c) =>
        c.titleEn.toLowerCase().includes(q) ||
        c.titleMr.toLowerCase().includes(q) ||
        c.summaryEn.toLowerCase().includes(q)
    ).slice(0, 3);

    const documents = DOCUMENTS_DATA.filter(
      (d) =>
        d.titleEn.toLowerCase().includes(q) ||
        d.titleMr.toLowerCase().includes(q) ||
        d.issuingAuthority.toLowerCase().includes(q)
    ).slice(0, 3);

    return { members, timeline, controversies, documents };
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={
              currentLang === 'mr'
                ? 'संपूर्ण अभिलेखागार शोधा (उदा. सदानंद पाटील, सूर्य पाणी, १९९०, टाडा निकाल, महापालिका)...'
                : 'Search entire BVA archive (e.g. Sadanand Patil, Surya Water, 1990, TADA, VVCMC)...'
            }
            className="w-full text-sm sm:text-base text-slate-900 focus:outline-none placeholder:text-slate-400 font-medium"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {!searchTerm.trim() ? (
            <div className="text-center py-8 text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="font-medium">
                {currentLang === 'mr'
                  ? 'नेते, प्रभाग, निवडणुका, न्यायालयीन नोंदी किंवा अधिकृत दस्तऐवज शोधण्यासाठी टाइप करा.'
                  : 'Type to instantly search 28+ members, 38 years of timeline, elections, and legal cases.'}
              </p>
            </div>
          ) : (
            <>
              {/* Members Results */}
              {searchResults.members.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#0220A8]" />
                    <span>Leaders & Representatives</span>
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.members.map((m) => (
                      <div
                        key={m.id}
                        onClick={() => {
                          onSelectMember(m);
                          onClose();
                        }}
                        className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer border border-transparent hover:border-slate-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-900 text-[#F4C430] flex items-center justify-center font-bold text-xs flex-shrink-0">
                            {m.avatarFallback}
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block">
                              {currentLang === 'mr' ? m.nameMr : m.nameEn}
                            </span>
                            <span className="text-[10px] text-slate-500">{m.wardOrConstituencyEn}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline Results */}
              {searchResults.timeline.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>Timeline & Historical Milestones</span>
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.timeline.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => {
                          onNavigateSection('history');
                          onClose();
                        }}
                        className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer border border-transparent hover:border-slate-200"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-amber-700 text-xs">{t.year}</span>
                            <span className="font-bold text-slate-900">
                              {currentLang === 'mr' ? t.titleMr : t.titleEn}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {currentLang === 'mr' ? t.shortDescMr : t.shortDescEn}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Controversies Results */}
              {searchResults.controversies.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-slate-700" />
                    <span>Legal Taxonomy & Controversies</span>
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.controversies.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => {
                          onNavigateSection('controversies');
                          onClose();
                        }}
                        className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer border border-transparent hover:border-slate-200"
                      >
                        <div>
                          <span className="font-bold text-slate-900 block">
                            {currentLang === 'mr' ? c.titleMr : c.titleEn}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-700">
                            {c.currentLegalStatusEn}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Documents Results */}
              {searchResults.documents.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <span>Public Gazettes & Records</span>
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.documents.map((d) => (
                      <div
                        key={d.id}
                        onClick={() => {
                          onNavigateSection('documents');
                          onClose();
                        }}
                        className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer border border-transparent hover:border-slate-200"
                      >
                        <div>
                          <span className="font-bold text-slate-900 block">
                            {currentLang === 'mr' ? d.titleMr : d.titleEn}
                          </span>
                          <span className="text-[10px] text-slate-500">{d.issuingAuthority}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* No match case */}
              {searchResults.members.length === 0 &&
                searchResults.timeline.length === 0 &&
                searchResults.controversies.length === 0 &&
                searchResults.documents.length === 0 && (
                  <div className="text-center py-8 text-slate-400">
                    <p className="font-medium">No archived records found matching "{searchTerm}".</p>
                    <p className="text-xs mt-1 text-slate-500">Try searching for Hitendra, Kshitij, Sadanand, VVCMC, Surya, or TADA.</p>
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
