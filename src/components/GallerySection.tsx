import React, { useState } from 'react';
import { GALLERY_DATA, type GalleryItem } from '../data/bvaData';
import { Image, MapPin, Calendar, Maximize2, X, Tag, ShieldCheck } from 'lucide-react';

interface GallerySectionProps {
  currentLang: 'mr' | 'en' | 'hi';
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const categories = [
    { id: 'all', labelEn: 'All Records', labelMr: 'सर्व छायाचित्रे' },
    { id: 'samvaad', labelEn: 'Public Samvaad', labelMr: 'थेट जनसंवाद' },
    { id: 'initiatives', labelEn: 'Projects & Inspections', labelMr: 'विकासकामे' },
    { id: 'cultural', labelEn: 'Cultural & Community', labelMr: 'सांस्कृतिक वारसा' },
    { id: 'historical', labelEn: 'Milestones & Leaders', labelMr: 'ऐतिहासिक क्षण' }
  ];

  return (
    <section id="gallery" className="relative w-full bg-white py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0220A8] uppercase tracking-widest mb-1">
              <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-2 ring-amber-400" />
              <span>{currentLang === 'mr' ? 'छायाचित्र अभिलेखागार' : 'AUTHENTIC DOCUMENTARY PHOTO ARCHIVES'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-marathi">
              {currentLang === 'mr'
                ? 'वसई-विरारमधील प्रत्यक्ष लोकसहभाग व विकास'
                : 'Documented Photographic Records of Grassroots Governance'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-sans">
              {currentLang === 'mr'
                ? 'प्रत्यक्ष बैठका, पाणी योजना पाहणी, विधीमंडळ लढे आणि जनसंवादाचे अस्सल क्षणचित्र.'
                : 'Real, authentic photographs of public meetings, water project site reviews, assembly debates, and civic moments.'}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-4 md:mt-0 flex flex-wrap gap-1.5 p-1.5 bg-slate-50 border border-slate-200 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0220A8] text-[#FDF219] shadow-xs'
                    : 'text-slate-700 hover:text-[#0220A8] hover:bg-slate-200/60'
                }`}
              >
                {currentLang === 'mr' ? cat.labelMr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between hover:border-[#0220A8] hover:-translate-y-1"
            >
              {/* Photo Container */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden flex items-center justify-center">
                <img
                  src={item.imageSrc}
                  alt={item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle gradient overlay at bottom for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-[#0220A8]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#FDF219] text-slate-900 flex items-center justify-center shadow-lg font-bold group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-5 h-5 text-slate-950" />
                  </div>
                </div>

                {/* Top Year & Category Tag */}
                <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-mono text-white flex items-center gap-1.5 border border-white/10">
                  <Calendar className="w-3 h-3 text-[#FDF219]" />
                  <span>{item.year}</span>
                </div>

                <div className="absolute top-2.5 right-2.5 bg-[#0220A8] text-[#FDF219] px-2 py-0.5 rounded text-[10px] font-bold font-mono tracking-wider uppercase shadow-xs">
                  {item.tag}
                </div>

                {/* Bottom title on image */}
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <p className="text-xs font-bold leading-tight line-clamp-1 drop-shadow-sm font-display">
                    {currentLang === 'mr' ? item.titleMr : item.titleEn}
                  </p>
                </div>
              </div>

              {/* Caption & Location metadata */}
              <div className="p-3.5 bg-white text-slate-800 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#0220A8] mb-1">
                    <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {currentLang === 'mr' ? item.captionMr : item.captionEn}
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-[#0220A8] font-bold">
                    <ShieldCheck className="w-3 h-3 text-[#0220A8]" />
                    Verified Photo
                  </span>
                  <span>Click to view →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[92vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-30 p-2 text-white bg-black/70 hover:bg-black rounded-full transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Main Image */}
            <div className="relative w-full bg-slate-950 flex items-center justify-center max-h-[62vh] overflow-hidden">
              <img
                src={selectedImage.imageSrc}
                alt={selectedImage.titleEn}
                className="max-h-[62vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Lightbox Information Bar */}
            <div className="p-5 sm:p-6 bg-white space-y-2 overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0220A8] text-[#FDF219] text-xs font-mono font-bold">
                    {selectedImage.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {selectedImage.year} · {selectedImage.location}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Documented Public Record</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display">
                {currentLang === 'mr' ? selectedImage.titleMr : selectedImage.titleEn}
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed font-sans">
                {currentLang === 'mr' ? selectedImage.captionMr : selectedImage.captionEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
