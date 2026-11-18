import React, { useState } from 'react';
import {
  MUNICIPAL_ELECTIONS,
  ASSEMBLY_ELECTIONS,
  SPOTLIGHT_WARDS,
  LOK_SABHA_ELECTIONS
} from '../data/electionsData';
import { BarChart3, TrendingUp, Award, CheckCircle2, ChevronRight, Vote, Landmark } from 'lucide-react';

interface ElectionDashboardSectionProps {
  currentLang: 'mr' | 'en' | 'hi';
}

export const ElectionDashboardSection: React.FC<ElectionDashboardSectionProps> = ({
  currentLang
}) => {
  const [activeTab, setActiveTab] = useState<'municipal' | 'assembly' | 'loksabha' | 'wards'>('municipal');
  const [selectedAssemblyYear, setSelectedAssemblyYear] = useState<number>(2019);

  return (
    <section id="elections" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0220A8]/10 text-[#0220A8] text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F4C430]" />
              <span>
                {currentLang === 'mr'
                  ? 'निवडणूक विश्लेषण डॅशबोर्ड'
                  : currentLang === 'hi'
                  ? 'चुनाव विश्लेषण डैशबोर्ड'
                  : 'ELECTION INTELLIGENCE DASHBOARD'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
              {currentLang === 'mr'
                ? 'महापालिका, विधानसभा व लोकसभा निवडणूक डेटा'
                : currentLang === 'hi'
                ? 'मनपा, विधानसभा एवं लोकसभा चुनाव परिणाम'
                : 'MUNICIPAL & LEGISLATIVE MANDATES'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1.5">
              {currentLang === 'mr'
                ? '२०१०, २०१५ व जानेवारी २०२६ महापालिका निकाल (७१ जागा), २००९ ते २०२४ विधानसभा मतदारसंघ विश्लेषण आणि वार्ड १-ड प्रमाणित आकडेवारी.'
                : 'Certified SEC & ECI returns covering 2010, 2015, and 2026 municipal general elections, alongside 2009–2024 assembly constituencies.'}
            </p>
          </div>

          {/* Tab Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab('municipal')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'municipal'
                  ? 'bg-[#0220A8] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Municipal (VVCMC)
            </button>
            <button
              onClick={() => setActiveTab('assembly')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'assembly'
                  ? 'bg-[#0220A8] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Vidhan Sabha
            </button>
            <button
              onClick={() => setActiveTab('wards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'wards'
                  ? 'bg-[#0220A8] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ward 1D Spotlight
            </button>
            <button
              onClick={() => setActiveTab('loksabha')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'loksabha'
                  ? 'bg-[#0220A8] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lok Sabha (22-Palghar)
            </button>
          </div>
        </div>

        {/* TAB 1: Municipal Elections (VVCMC) */}
        {activeTab === 'municipal' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {MUNICIPAL_ELECTIONS.map((muni) => (
                <div
                  key={muni.year}
                  className={`rounded-2xl p-6 border transition-all duration-300 ${
                    muni.year === 2026
                      ? 'border-[#F4C430] bg-gradient-to-b from-[#F4C430]/10 via-amber-50/20 to-white ring-2 ring-[#F4C430]/40 shadow-lg'
                      : 'border-slate-200 bg-white shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                    <span className="text-2xl font-black text-slate-900 font-display">
                      {muni.year} General Election
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                        muni.year === 2026 ? 'bg-[#F4C430] text-slate-950' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {muni.rulingParty.split(' ')[0]} Majority
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-4xl font-black text-[#0220A8] font-display">
                      {muni.bvaSeats}{' '}
                      <span className="text-lg text-slate-500 font-sans font-medium">/ {muni.totalSeats} seats</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-xs font-bold text-emerald-700">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{muni.bvaSeatSharePct}% Seat Share ({muni.bvaVoteSharePct}% Popular Vote)</span>
                    </div>
                  </div>

                  {/* Visual Seat Share Progress Bar */}
                  <div className="w-full h-3.5 rounded-full bg-slate-100 overflow-hidden flex mb-4">
                    {muni.breakdown.map((b, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: `${(b.seats / muni.totalSeats) * 100}%`,
                          backgroundColor: b.color
                        }}
                        title={`${b.party}: ${b.seats} seats`}
                        className="h-full"
                      />
                    ))}
                  </div>

                  {/* Seat Breakdown Legend */}
                  <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                    {muni.breakdown.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-slate-600">
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: b.color }} />
                        <span className="font-medium truncate">{b.party}: <strong>{b.seats}</strong></span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {currentLang === 'mr' ? muni.keyTakeawayMr : muni.keyTakeawayEn}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
                    Source: {muni.source}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Assembly Elections */}
        {activeTab === 'assembly' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold text-slate-500">Filter Year:</span>
              {[2009, 2014, 2019, 2024].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedAssemblyYear(year)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    selectedAssemblyYear === year
                      ? 'bg-[#0220A8] text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ASSEMBLY_ELECTIONS.filter((a) => a.year === selectedAssemblyYear).map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                    <span className="font-bold text-slate-900 text-sm">
                      {item.constituencyCode} - {item.constituencyNameEn}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      Turnout: {item.turnoutPct}%
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-emerald-700 block">Elected MLA (Winner)</span>
                      <div className="flex items-center justify-between mt-1">
                        <strong className="text-sm text-slate-900">{item.winnerNameEn}</strong>
                        <span className="px-2 py-0.5 rounded-md bg-[#F4C430] text-slate-950 font-bold text-[10px]">
                          {item.winnerParty}
                        </span>
                      </div>
                      <div className="text-slate-500 mt-1 font-mono">{item.winnerVotes.toLocaleString()} votes</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Runner-Up</span>
                      <div className="flex items-center justify-between mt-1">
                        <strong className="text-slate-800">{item.runnerUpNameEn}</strong>
                        <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-800 font-bold text-[10px]">
                          {item.runnerUpParty}
                        </span>
                      </div>
                      <div className="text-slate-500 mt-1 font-mono">{item.runnerUpVotes.toLocaleString()} votes</div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                      <span className="text-slate-500 font-medium">Victory Margin:</span>
                      <span className="font-bold text-[#0220A8]">
                        +{item.margin.toLocaleString()} ({item.marginPct}%)
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Ward 1D Spotlight (Sadanand Patil) */}
        {activeTab === 'wards' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-amber-50/70 border-2 border-amber-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-amber-200">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/80 text-amber-950 text-xs font-bold uppercase tracking-wider mb-2">
                    <Award className="w-3.5 h-3.5 text-amber-800" />
                    <span>CERTIFIED CIVIC RETURN · JANUARY 2026</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 font-display">
                    Ward 1D (Virar North / Bolinj) — Sadanand Gajanan Patil
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Certified election return confirming the municipal election victory of senior BVA leader Sadanand Patil.
                  </p>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-amber-200 shadow-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Votes</span>
                    <span className="text-2xl font-black text-slate-900 font-display">11,016</span>
                  </div>
                  <div className="h-10 w-[1px] bg-slate-200" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Winning Margin</span>
                    <span className="text-2xl font-black text-emerald-700 font-display">+3,182</span>
                  </div>
                </div>
              </div>

              {/* Spotlight Wards Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="text-[10px] uppercase font-bold text-slate-500 border-b border-amber-200">
                    <tr>
                      <th className="py-2.5">Electoral Ward</th>
                      <th className="py-2.5">Elected Representative</th>
                      <th className="py-2.5">Tenure Status</th>
                      <th className="py-2.5">Civic History</th>
                      <th className="py-2.5">Official Certification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100 font-medium text-slate-800">
                    {SPOTLIGHT_WARDS.map((w, idx) => (
                      <tr key={idx} className="hover:bg-amber-100/40 transition-colors">
                        <td className="py-3 font-bold text-slate-900">{w.wardNumber} ({currentLang === 'mr' ? w.wardNameMr : w.wardNameEn})</td>
                        <td className="py-3 text-[#0220A8] font-bold">{currentLang === 'mr' ? w.representativeNameMr : w.representativeNameEn}</td>
                        <td className="py-3 text-slate-700">{currentLang === 'mr' ? w.tenureStatusMr : w.tenureStatusEn}</td>
                        <td className="py-3 text-xs text-slate-600 max-w-xs">{currentLang === 'mr' ? w.electoralHistoryMr : w.electoralHistoryEn}</td>
                        <td className="py-3 text-[10px] font-mono text-slate-500">{w.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Lok Sabha Elections */}
        {activeTab === 'loksabha' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOK_SABHA_ELECTIONS.map((ls, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
                  <span className="font-bold text-slate-900 text-sm">{ls.year} General Election</span>
                  <span className="text-[10px] font-mono text-slate-500">{ls.seatName}</span>
                </div>
                <div className="space-y-2 text-xs mb-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Winner ({ls.winnerParty})</span>
                    <strong className="text-sm text-slate-900">{currentLang === 'mr' ? ls.winnerNameMr : ls.winnerNameEn}</strong>
                    <div className="font-mono text-slate-600">{ls.winnerVotes.toLocaleString()} votes</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Runner Up ({ls.runnerUpParty})</span>
                    <span className="text-slate-800 font-medium">{ls.runnerUpNameEn}</span>
                    <div className="font-mono text-slate-500">{ls.runnerUpVotes.toLocaleString()} votes</div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 border-t border-slate-200 pt-2 leading-relaxed">
                  {currentLang === 'mr' ? ls.notesMr : ls.notesEn}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
