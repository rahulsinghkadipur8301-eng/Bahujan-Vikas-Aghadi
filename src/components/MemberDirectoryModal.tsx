import React from 'react';
import { MemberDirectorySection } from './MemberDirectorySection';
import { MemberProfile } from '../data/membersData';
import { X } from 'lucide-react';

interface MemberDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMember: (member: MemberProfile) => void;
  currentLang: 'mr' | 'en' | 'hi';
}

export const MemberDirectoryModal: React.FC<MemberDirectoryModalProps> = ({
  isOpen,
  onClose,
  onSelectMember,
  currentLang
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-6xl bg-white rounded-3xl border border-slate-200 shadow-2xl max-h-[92vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky top close bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-[#0220A8] uppercase tracking-wider block">
              BAHUJAN VIKAS AAGHADI · FUNCTIONARIES DIRECTORY
            </span>
            <h3 className="text-lg font-black text-slate-900 font-display">
              {currentLang === 'mr' ? 'सर्व २८+ पदाधिकारी व लोकप्रतिनिधी' : 'Complete 28+ Leadership & Members Directory'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close directory"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 sm:p-6 flex-1">
          <MemberDirectorySection
            currentLang={currentLang}
            onSelectMember={(member) => {
              onSelectMember(member);
            }}
          />
        </div>
      </div>
    </div>
  );
};
