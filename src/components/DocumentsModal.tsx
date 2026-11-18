import React, { useState } from 'react';
import {
  VERIFIED_DOCUMENT_LIBRARY,
  OfficialDocumentItem
} from './DocumentsSection';
import {
  X,
  FileText,
  ExternalLink,
  ShieldCheck,
  Search,
  Calendar,
  Building,
  CheckCircle2
} from 'lucide-react';

interface DocumentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: 'mr' | 'en' | 'hi';
}

export const DocumentsModal: React.FC<DocumentsModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', labelEn: 'All Documents', labelMr: 'सर्व दस्तऐवज' },
    { id: 'Electoral Return (Form-20)', labelEn: 'Form-20 Returns', labelMr: 'प्रपत्र-२० निकाल' },
    { id: 'Statutory Gazette', labelEn: 'Gazette Notifications', labelMr: 'शासकीय राजपत्रे' },
    { id: 'Administrative Order', labelEn: 'Administrative Orders', labelMr: 'प्रशासकीय आदेश' },
    { id: 'Legislative Proceeding', labelEn: 'Assembly Records', labelMr: 'विधानसभा कार्यवृत्त' }
  ];

  const filteredDocs = VERIFIED_DOCUMENT_LIBRARY.filter((doc) => {
    const matchesCategory =
      selectedCategory === 'all' || doc.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      doc.titleEn.toLowerCase().includes(query) ||
      doc.titleMr.toLowerCase().includes(query) ||
      doc.descriptionEn.toLowerCase().includes(query) ||
      doc.descriptionMr.toLowerCase().includes(query) ||
      doc.documentRefNumber.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0220A8] font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Government Gazette Archive</span>
              </span>
              <span className="text-xs font-mono text-slate-400">ECI · GoM · MMRDA</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
              {currentLang === 'mr' ? 'अधिकृत शासकीय राजपत्रे व पुरावा दस्तऐवज' : 'Official Gazettes & Statutory Records'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filters & Search */}
        <div className="pt-4 pb-2 space-y-3 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'mr' ? 'दस्तऐवज किंवा संदर्भ क्रमांक शोधा...' : 'Search by title, reference number, or keyword...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 focus:outline-none focus:ring-2 focus:ring-[#0220A8] text-xs sm:text-sm text-slate-900"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0220A8] text-white shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {currentLang === 'mr' ? cat.labelMr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Document List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1 py-2">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#0220A8] hover:shadow-md transition-all space-y-2 group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-blue-50 text-[#0220A8]">
                  {doc.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{doc.documentDate}</span>
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-[#0220A8] transition-colors">
                {currentLang === 'mr' ? doc.titleMr : doc.titleEn}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {currentLang === 'mr' ? doc.descriptionMr : doc.descriptionEn}
              </p>

              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-mono text-slate-500 text-[11px]">
                  Ref: <strong className="text-slate-800">{doc.documentRefNumber}</strong>
                </span>

                <a
                  href={doc.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0220A8] hover:bg-[#00177A] text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-2xs"
                >
                  <span>Open Official Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}

          {filteredDocs.length === 0 && (
            <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-500">
              No matching official documents found.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between shrink-0 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>All source links point to active Maharashtra / ECI domains.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
