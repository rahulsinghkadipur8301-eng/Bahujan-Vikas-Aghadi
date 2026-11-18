import React, { useState } from 'react';
import { ALLIANCES_DATA, PoliticalAlliance } from '../data/alliancesData';
import { Network, ArrowRight, ShieldCheck, Landmark, Users } from 'lucide-react';

interface AlliancesNetworkSectionProps {
  currentLang: 'mr' | 'en' | 'hi';
}

export const AlliancesNetworkSection: React.FC<AlliancesNetworkSectionProps> = ({ currentLang }) => {
  const [selectedAllianceId, setSelectedAllianceId] = useState<string>('alliance-bjp');

  const selectedAlliance =
    ALLIANCES_DATA.find((a) => a.id === selectedAllianceId) || ALLIANCES_DATA[0];

  return (
    <section id="alliances" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0220A8]/10 text-[#0220A8] text-xs font-bold uppercase tracking-wider mb-2">
              <Network className="w-3.5 h-3.5 text-[#F4C430]" />
              <span>
                {currentLang === 'mr'
                  ? 'राजकीय समीकरणे व संबंध'
                  : currentLang === 'hi'
                  ? 'राजनीतिक समीकरण एवं गठबंधन'
                  : 'POLITICAL ALLIANCES & RIVALRIES'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
              {currentLang === 'mr'
                ? 'काँग्रेस, भाजप, शिवसेना व मविआ सोबत संबंध'
                : currentLang === 'hi'
                ? 'कांग्रेस, भाजपा, शिवसेना एवं गठबंधन सम्बंध'
                : 'STRATEGIC ALIGNMENTS ACROSS DECADES'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1.5">
              {currentLang === 'mr'
                ? '१९९० पासून ते २०२६ पर्यंत राष्ट्रीय व राज्य पक्षांसोबत बदललेली राजकीय समीकरणे, बाहेरून दिलेला पाठिंबा आणि निवडणुकीतील थेट संघर्ष.'
                : 'Interactive dynamic network mapping BVA’s documented shifting relationships with national and regional coalitions from 1990 to 2026.'}
            </p>
          </div>
        </div>

        {/* Dynamic Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {ALLIANCES_DATA.map((alliance) => {
            const isSelected = selectedAllianceId === alliance.id;

            return (
              <button
                key={alliance.id}
                onClick={() => setSelectedAllianceId(alliance.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-[#0220A8] bg-[#0220A8] text-white shadow-md'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: alliance.partyColor }}
                  />
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {alliance.partyAbbr}
                  </span>
                </div>
                <div className="font-bold text-sm">
                  {currentLang === 'mr'
                    ? alliance.partyNameMr
                    : currentLang === 'hi'
                    ? alliance.partyNameHi
                    : alliance.partyNameEn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Alliance Deep-Dive Container */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-200 gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Selected Relationship Overview
              </span>
              <h3 className="text-2xl font-black text-slate-900 font-display">
                {currentLang === 'mr'
                  ? selectedAlliance.partyNameMr
                  : currentLang === 'hi'
                  ? selectedAlliance.partyNameHi
                  : selectedAlliance.partyNameEn}
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700">
              Stance: <span className="text-[#0220A8]">{selectedAlliance.currentStance}</span>
            </div>
          </div>

          {/* Strategic Analysis */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 mb-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Strategic Analysis</span>
            {currentLang === 'mr' ? selectedAlliance.strategicAnalysisMr : selectedAlliance.strategicAnalysisEn}
          </div>

          {/* Historical Phases Timeline */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-[#0220A8]" />
              <span>DOCUMENTED HISTORICAL PHASES</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedAlliance.historicalPhases.map((phase, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 text-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between font-bold mb-2">
                      <span className="text-slate-900 font-display text-sm">{phase.period}</span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[#0220A8] font-bold text-[10px]">
                        {phase.typeEn}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      {currentLang === 'mr' ? phase.descriptionMr : phase.descriptionEn}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                    <span className="font-semibold text-slate-700 block">Milestone: {phase.keyMilestone}</span>
                    <span className="truncate block mt-0.5">Source: {phase.evidenceSource}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
