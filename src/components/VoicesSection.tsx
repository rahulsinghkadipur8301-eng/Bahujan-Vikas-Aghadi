import React, { useState } from 'react';
import { CITIZEN_VOICES, type CitizenStory } from '../data/bvaData';
import { MapPin, Quote } from 'lucide-react';

interface VoicesSectionProps {
  currentLang: 'mr' | 'en' | 'hi';
}

export const VoicesSection: React.FC<VoicesSectionProps> = ({ currentLang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredVoices = CITIZEN_VOICES.filter((voice) => {
    if (activeFilter === 'all') return true;
    return voice.topic === activeFilter;
  });

  const categories = [
    { id: 'all', labelEn: 'All Accounts', labelMr: 'सर्व प्रतिक्रिया' },
    { id: 'railway', labelEn: 'Suburban Commuters', labelMr: 'रेल्वे प्रवासी' },
    { id: 'water', labelEn: 'Drinking Water', labelMr: 'पाणीपुरवठा' },
    { id: 'fisheries', labelEn: 'Koli Fisherfolk', labelMr: 'कोळी बांधव' },
    { id: 'farming', labelEn: 'Green Belt Farmers', labelMr: 'बागायतदार शेतकरी' },
    { id: 'education', labelEn: 'Youth & Scholars', labelMr: 'विद्यार्थी व तरुण' }
  ];

  return (
    <section id="voices" className="relative w-full bg-white py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0220A8] uppercase tracking-widest mb-1">
              <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-1 ring-amber-400" />
              <span>{currentLang === 'mr' ? 'स्थानिक जनतेचा आवाज' : 'VOICES OF THE CONSTITUENCY'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-marathi">
              {currentLang === 'mr'
                ? 'वसई, विरार, नालासोपारा येथील नागरिकांचे मनोगत'
                : 'Documentary Accounts from Vasai, Virar & Nalasopara'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-sans mt-1">
              {currentLang === 'mr'
                ? 'चाकरमानी, शेतकरी, कोळी बांधव आणि विद्यार्थ्यांचे वास्तव अनुभव'
                : 'Genuine feedback on suburban railways, water security, agricultural green zones, and education.'}
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div className="mt-4 md:mt-0 flex flex-wrap gap-1.5 p-1.5 bg-slate-50 border border-slate-200 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeFilter === cat.id
                    ? 'bg-[#0220A8] text-[#FDF219] shadow-xs'
                    : 'text-slate-700 hover:text-[#0220A8] hover:bg-slate-100'
                }`}
              >
                {currentLang === 'mr' ? cat.labelMr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Voices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVoices.map((voice) => (
            <div
              key={voice.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#0220A8]"
            >
              <div>
                {/* Topic & Date */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-2 border-b border-slate-100">
                  <span className="font-mono text-[#0220A8] font-bold text-[11px] uppercase tracking-wider">
                    {voice.topic}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-900 border border-amber-200">
                      {voice.verificationStatus}
                    </span>
                    <span className="font-mono text-slate-500 font-medium text-[11px]">{voice.date}</span>
                  </div>
                </div>

                {/* Quote Text */}
                <div className="relative mb-3">
                  <Quote className="w-5 h-5 text-amber-400 opacity-70 mb-1" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans italic">
                    "{currentLang === 'mr' ? voice.quoteMr : voice.quoteEn}"
                  </p>
                </div>

                {/* Citation */}
                <div className="text-[10px] text-slate-500 font-mono bg-slate-50 p-2 rounded-lg border border-slate-200 mb-3">
                  <span className="font-bold text-slate-700 block">Archive Ref:</span>
                  <span className="line-clamp-2">{voice.verifiedCitation}</span>
                </div>
              </div>

              {/* Speaker Attribution */}
              <div className="pt-3 border-t border-slate-100 flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                    {voice.name}
                  </h4>
                  <p className="text-[11px] text-[#0220A8] font-medium leading-tight mt-0.5">
                    {currentLang === 'mr' ? voice.representationTypeMr : voice.representationTypeEn}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono shrink-0">
                  <MapPin className="w-3 h-3 text-[#0220A8]" />
                  <span>{voice.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
