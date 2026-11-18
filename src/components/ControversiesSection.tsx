import React, { useState } from 'react';
import { CONTROVERSIES_DATA, ControversyCase } from '../data/controversiesData';
import { ShieldAlert, Scale, ChevronDown, ChevronUp, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

interface ControversiesSectionProps {
  currentLang: 'mr' | 'en' | 'hi';
}

export const ControversiesSection: React.FC<ControversiesSectionProps> = ({ currentLang }) => {
  const [expandedCaseId, setExpandedCaseId] = useState<string>('case-suresh-dube');

  const toggleCase = (id: string) => {
    setExpandedCaseId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="controversies" className="py-16 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Scale className="w-3.5 h-3.5 text-[#F4C430]" />
              <span>
                {currentLang === 'mr'
                  ? 'न्यायालयीन नोंदी व वस्तुनिष्ठ इतिहास'
                  : currentLang === 'hi'
                  ? 'न्यायिक अभिलेख एवं तथ्यपरक इतिहास'
                  : 'LEGAL TAXONOMY & VERIFIED PUBLIC RECORDS'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
              {currentLang === 'mr'
                ? 'न्यायालयीन प्रक्रिया व प्रमुख विवाद'
                : currentLang === 'hi'
                ? 'न्यायिक प्रक्रियाएं एवं प्रमुख विवाद'
                : 'CONTROVERSIES & JUDICIAL PROCEEDINGS'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1.5 leading-relaxed">
              {currentLang === 'mr'
                ? 'आरोप, एफआयआर, तपास, आरोपपत्र, खटला, निर्दोष मुक्तता व सर्वोच्च न्यायालयाचे निकाल या अधिकृत कायदेशीर टप्प्यांवर आधारित निःपक्षपाती माहिती.'
                : 'Strict taxonomy differentiating Allegation, FIR, Investigation, Trial, Acquittal, Appeal, and Latest Status according to official court decrees.'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-800/50">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>PRIMARY COURT CITATIONS ATTACHED</span>
          </div>
        </div>

        {/* Case Studies Accordion */}
        <div className="space-y-4">
          {CONTROVERSIES_DATA.map((cCase) => {
            const isExpanded = expandedCaseId === cCase.id;

            return (
              <div
                key={cCase.id}
                className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-slate-700 overflow-hidden transition-all duration-300"
              >
                {/* Accordion Bar */}
                <div
                  onClick={() => toggleCase(cCase.id)}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[#F4C430] flex-shrink-0 group-hover:border-[#F4C430]/60 transition-colors">
                      <Scale className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-slate-400">{cCase.period}</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-800 text-slate-300">
                          {cCase.officialCourtCitation}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#F4C430] transition-colors font-display">
                        {currentLang === 'mr' ? cCase.titleMr : currentLang === 'hi' ? cCase.titleHi : cCase.titleEn}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-xs text-emerald-400 font-mono hidden md:inline">
                      {cCase.chronology[cCase.chronology.length - 1].stage}
                    </span>
                    <div className="p-1.5 rounded-lg bg-slate-900 text-slate-400 group-hover:text-white transition-colors">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 border-t border-slate-800/80 bg-slate-900/50 space-y-6 text-xs sm:text-sm">
                    {/* Summary */}
                    <div className="text-slate-300 leading-relaxed max-w-4xl">
                      {currentLang === 'mr' ? cCase.summaryMr : currentLang === 'hi' ? cCase.summaryHi : cCase.summaryEn}
                    </div>

                    {/* Legal Stages Chronology */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#F4C430]" />
                        <span>PROCEDURAL LEGAL CHRONOLOGY</span>
                      </h4>

                      <div className="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
                        {cCase.chronology.map((step, idx) => (
                          <div key={idx} className="relative pl-8">
                            <span className="absolute left-2 top-1.5 w-2.5 h-2.5 rounded-full bg-[#F4C430] ring-4 ring-slate-950 -translate-x-1/2" />
                            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-bold text-white text-xs">{step.stage} ({step.dateOrYear})</span>
                                <span className="text-[10px] text-slate-400 font-mono">{step.citation}</span>
                              </div>
                              <p className="text-slate-400 text-xs">
                                {currentLang === 'mr' ? step.descriptionMr : step.descriptionEn}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Competing Claims Comparison */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      {(currentLang === 'mr' ? cCase.competingClaimsMr : cCase.competingClaimsEn).map(
                        (claim, idx) => (
                          <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                              {claim.party}
                            </span>
                            <p className="text-xs text-slate-300 leading-relaxed">{claim.statement}</p>
                          </div>
                        )
                      )}
                    </div>

                    {/* Current Binding Status Bar */}
                    <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-400 uppercase block">
                          Current Verified Legal Status
                        </span>
                        <span className="text-slate-200 font-medium">
                          {currentLang === 'mr' ? cCase.currentLegalStatusMr : cCase.currentLegalStatusEn}
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        Audited on: {cCase.lastFactCheckDate}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
