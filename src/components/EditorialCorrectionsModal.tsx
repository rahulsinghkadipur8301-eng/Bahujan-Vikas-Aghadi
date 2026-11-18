import React from 'react';
import { EDITORIAL_CORRECTIONS_LOG } from '../data/correctionsData';
import { X, CheckCircle2, ShieldCheck, History, AlertTriangle } from 'lucide-react';

interface EditorialCorrectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: 'mr' | 'en' | 'hi';
}

export const EditorialCorrectionsModal: React.FC<EditorialCorrectionsModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="corrections-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TRANSPARENT PUBLIC AUDIT LOG</span>
            </div>
            <h3 id="corrections-title" className="text-xl sm:text-2xl font-black text-white font-display">
              {currentLang === 'mr'
                ? 'संपादकीय दुरुस्ती व तथ्य पडताळणी नोंदवही'
                : 'EDITORIAL CORRECTIONS & FACT AUDIT LOG'}
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Chronological log of verified factual adjustments made to this independent archive, citing primary Election Commission gazettes, court orders, and municipal returns.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 flex-1 text-xs sm:text-sm text-slate-800">
          {EDITORIAL_CORRECTIONS_LOG.map((item) => (
            <div key={item.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200">
                <span className="font-bold text-slate-900 text-sm">
                  {currentLang === 'mr' ? item.subjectMr : item.subjectEn}
                </span>
                <span className="font-mono text-[10px] text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                  Audit Date: {item.date}
                </span>
              </div>

              {/* Previous Text vs Corrected Fact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-red-50/60 border border-red-200 text-red-950">
                  <span className="text-[10px] font-bold text-red-700 uppercase block mb-1">
                    Previous Preliminary Claim
                  </span>
                  <p className="line-through text-slate-500">
                    {currentLang === 'mr' ? item.previousTextMr : item.previousTextEn}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase block mb-1">
                    Certified Corroborated Fact
                  </span>
                  <p className="font-medium text-emerald-950">
                    {currentLang === 'mr' ? item.correctedFactMr : item.correctedFactEn}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5 truncate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">Primary Source: <strong>{item.primarySourceCitation}</strong></span>
                </div>
                <div className="font-mono text-slate-400">
                  Auditor: {currentLang === 'mr' ? item.auditorMr : item.auditorEn}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <span>Baseline Cutoff Date: <strong>3 November 2026</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0220A8] text-white rounded-xl font-bold cursor-pointer hover:bg-blue-900 transition-colors"
          >
            Close Audit Log
          </button>
        </div>
      </div>
    </div>
  );
};
