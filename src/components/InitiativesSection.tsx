import React, { useState } from 'react';
import { INITIATIVES_DATA, type Initiative } from '../data/bvaData';
import { filterInitiatives } from '../utils/testableRules';
import { Search, CheckCircle2, Clock, MapPin, Building, Droplets, GraduationCap, Train, ShieldCheck, HeartPulse } from 'lucide-react';

interface InitiativesSectionProps {
  currentLang: 'mr' | 'en' | 'hi';
}

export const InitiativesSection: React.FC<InitiativesSectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = filterInitiatives(INITIATIVES_DATA, {
    category: selectedCategory,
    searchQuery
  });

  const categoryTabs = [
    { id: 'all', labelEn: 'All Projects', labelMr: 'सर्व प्रकल्प' },
    { id: 'water', labelEn: 'Water Grid', labelMr: 'पाणीपुरवठा' },
    { id: 'education', labelEn: 'Education', labelMr: 'शिक्षण संकुल' },
    { id: 'transport', labelEn: 'Suburban Rail', labelMr: 'रेल्वे व रस्ते' },
    { id: 'healthcare', labelEn: 'Healthcare', labelMr: 'आरोग्य सुविधा' },
    { id: 'coastal', labelEn: 'Coastal & Ports', labelMr: 'सागरी व जेटी' },
    { id: 'infrastructure', labelEn: 'Sports & Civic', labelMr: 'क्रीडा व पायाभूत' }
  ];

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'water':
        return <Droplets className="w-4 h-4 text-sky-600" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-[#0220A8]" />;
      case 'transport':
        return <Train className="w-4 h-4 text-amber-600" />;
      case 'healthcare':
        return <HeartPulse className="w-4 h-4 text-rose-600" />;
      default:
        return <Building className="w-4 h-4 text-[#0220A8]" />;
    }
  };

  return (
    <section id="work" className="relative w-full bg-white py-16 lg:py-20 border-b border-slate-200 scroll-mt-20">
      <div id="initiatives" className="sr-only" />
      <div className="bva-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0220A8] uppercase tracking-widest mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-2 ring-[#0220A8]" />
              <span>{currentLang === 'mr' ? 'प्रमाणित विकासकामे' : 'SELECTED PUBLIC INITIATIVES'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight font-marathi">
              {currentLang === 'mr'
                ? 'पाणी, शिक्षण, वाहतूक आणि लोककल्याण'
                : 'Verified Civic & Infrastructure Works'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              {currentLang === 'mr'
                ? 'शासकीय मान्यता व निविदा आदेशांनुसार प्रमाणित प्रमुख पायाभूत प्रकल्प.'
                : 'Selected major public projects documented with statutory executive approvals and allocations.'}
            </p>
          </div>

          {/* Search Box */}
          <div className="mt-4 md:mt-0 relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={currentLang === 'mr' ? 'प्रकल्प शोधा...' : 'Search initiatives...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0220A8] transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#0220A8] text-white shadow-xs ring-1 ring-[#0220A8]'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {currentLang === 'mr' ? tab.labelMr : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Image-Led Initiatives Grid (Phase 11 Specs: Large Imagery, Fewer Words) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => {
            // Assign authentic photo corresponding to project scope
            const projectImage =
              item.category === 'water'
                ? '/bva_story_2.png'
                : item.category === 'education'
                ? '/bva_story_3.png'
                : item.category === 'transport'
                ? '/bva_story_4.png'
                : item.category === 'coastal'
                ? '/bva_story_5.png'
                : item.category === 'infrastructure'
                ? '/bva_story_7.png'
                : `/bva_story_${(idx % 7) + 1}.png`;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:border-[#0220A8]"
              >
                <div>
                  {/* Large Authentic Image (16:9 ratio, subtle hover zoom) */}
                  <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                    <img
                      src={projectImage}
                      alt={item.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Status Pill Over Image */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0220A8] text-white shadow-xs uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-emerald-800 border border-emerald-200 flex items-center gap-1 shadow-xs">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                        <span>{item.status}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    {/* Agency Attribution */}
                    <div className="text-[11px] font-semibold text-[#0220A8] flex items-center gap-1 truncate">
                      <Building className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">
                        {currentLang === 'mr' ? item.executingAgencyMr : item.executingAgencyEn}
                      </span>
                    </div>

                    {/* Short Project Title */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0220A8] transition-colors leading-snug line-clamp-2 font-display">
                      {currentLang === 'mr' ? item.titleMr : item.titleEn}
                    </h3>

                    {/* One-Line Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-2">
                      {currentLang === 'mr' ? item.descriptionMr : item.descriptionEn}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Metric & Learn More */}
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700 font-mono">
                    <span className="text-[#0220A8]">{currentLang === 'mr' ? item.impactMetricMr : item.impactMetricEn}</span>
                  </div>

                  <span className="text-xs font-bold text-[#0220A8] group-hover:translate-x-0.5 transition-transform">
                    {currentLang === 'mr' ? 'माहिती →' : 'Learn More →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500 font-medium">
              {currentLang === 'mr' ? 'कोणताही प्रकल्प सापडला नाही.' : 'No matching public initiatives found.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
