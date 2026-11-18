import React, { useState } from 'react';
import { NEWS_DATA, type NewsArticle } from '../data/bvaData';
import { filterNews, formatBvaDate } from '../utils/testableRules';
import { Calendar, Search, ArrowRight, X, FileText, CheckCircle2 } from 'lucide-react';

interface NewsEventsSectionProps {
  currentLang: 'mr' | 'en' | 'hi';
}

export const NewsEventsSection: React.FC<NewsEventsSectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const filteredNews = filterNews(NEWS_DATA, {
    category: selectedCategory,
    searchQuery
  });

  const categories = [
    { id: 'all', labelEn: 'All Updates', labelMr: 'सर्व घडामोडी' },
    { id: 'assembly', labelEn: 'Vidhan Sabha', labelMr: 'विधानसभा कामकाज' },
    { id: 'civic', labelEn: 'Civic Delegations', labelMr: 'नागरी शिष्टमंडळे' },
    { id: 'event', labelEn: 'Community Events', labelMr: 'सार्वजनिक कार्यक्रम' },
    { id: 'press', labelEn: 'Press Releases', labelMr: 'अधिकृत प्रसिद्धीपत्रके' }
  ];

  return (
    <section id="news" className="relative w-full bg-white py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0220A8] uppercase tracking-widest mb-1">
              <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-1 ring-amber-400" />
              <span>{currentLang === 'mr' ? 'बातम्या व अधिकृत निवेदने' : 'NEWS, SPEECHES & EVENTS'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-marathi">
              {currentLang === 'mr'
                ? 'विधीमंडळ, जनसंवाद आणि पक्षाच्या भूमिका'
                : 'Assembly Records, Press Releases & Field Reports'}
            </h2>
          </div>

          {/* Search Box */}
          <div className="mt-4 md:mt-0 relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={currentLang === 'mr' ? 'बातम्यांमध्ये शोधा...' : 'Search news updates...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0220A8] transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Categories Strip */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0220A8] text-white shadow-xs ring-1 ring-[#0220A8]'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {currentLang === 'mr' ? cat.labelMr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-0.5 hover:border-[#0220A8]"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 font-bold text-[#0220A8] uppercase tracking-wider text-[11px]">
                    <img src="/bva_logo.png" alt="BVA" className="h-3.5 w-auto object-contain rounded" />
                    <span>{article.category}</span>
                  </div>
                  <span className="flex items-center gap-1 font-mono text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {formatBvaDate(article.date, currentLang)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0220A8] transition-colors leading-snug">
                  {currentLang === 'mr' ? article.titleMr : article.titleEn}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                  {currentLang === 'mr' ? article.summaryMr : article.summaryEn}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  Official Gazette Archival
                </span>
                <span className="text-xs font-bold text-[#0220A8] flex items-center gap-1 group-hover:underline">
                  <span>{currentLang === 'mr' ? 'वाचा' : 'Read Full'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0220A8] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500 font-medium">
              {currentLang === 'mr' ? 'कोणतीही बातमी सापडली नाही.' : 'No matching news updates found.'}
            </p>
          </div>
        )}

        {/* Modal for Article Reading */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <img src="/bva_logo.png" alt="BVA" className="h-6 w-auto object-contain rounded" />
                <span className="px-2.5 py-0.5 rounded bg-blue-50 text-[#0220A8] border border-blue-200 text-xs font-mono font-bold uppercase">
                  {selectedArticle.category}
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatBvaDate(selectedArticle.date, currentLang)}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 leading-snug">
                {currentLang === 'mr' ? selectedArticle.titleMr : selectedArticle.titleEn}
              </h3>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-sans">
                <p>{currentLang === 'mr' ? selectedArticle.contentMr : selectedArticle.contentEn}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Public Record Verified</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-xl bg-[#0220A8] text-white text-xs font-bold hover:bg-[#00177A] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
