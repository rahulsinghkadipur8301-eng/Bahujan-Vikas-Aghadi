import React from 'react';
import { MemberProfile } from '../data/membersData';
import { X, CheckCircle2, ShieldAlert, Award, FileText, Landmark, Calendar, DollarSign, Building } from 'lucide-react';

interface MemberProfileModalProps {
  member: MemberProfile | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: 'mr' | 'en' | 'hi';
}

export const MemberProfileModal: React.FC<MemberProfileModalProps> = ({
  member,
  isOpen,
  onClose,
  currentLang
}) => {
  if (!isOpen || !member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="member-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-slate-950 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-900 border-2 border-[#F4C430] flex-shrink-0 shadow-lg">
              <img
                src={member.imageSrc}
                alt={member.nameEn}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-xl font-black text-[#F4C430] bg-slate-900 -z-10">
                {member.avatarFallback}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#F4C430] text-slate-950">
                  {member.status === 'ACTIVE'
                    ? currentLang === 'mr'
                      ? 'सक्रिय लोकप्रतिनिधी'
                      : 'ACTIVE REPRESENTATIVE'
                    : member.status === 'FORMER_PARTY_MEMBER'
                    ? currentLang === 'mr'
                      ? 'माजी बविआ सदस्य'
                      : 'FORMER PARTY MEMBER'
                    : currentLang === 'mr'
                    ? 'माजी लोकप्रतिनिधी'
                    : 'FORMER ELECTED'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300">
                  {member.wardOrConstituencyEn}
                </span>
              </div>

              <h3 id="member-modal-title" className="text-xl sm:text-2xl font-black text-white font-display">
                {currentLang === 'mr' ? member.nameMr : currentLang === 'hi' ? member.nameHi : member.nameEn}
              </h3>
              <p className="text-xs sm:text-sm text-[#F4C430] font-medium mt-0.5">
                {currentLang === 'mr' ? member.roleMr : currentLang === 'hi' ? member.roleHi : member.roleEn}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-800 text-sm">
          {/* Recent Certified Victory Spotlight (e.g. Sadanand Patil Ward 1D) */}
          {(member.recentVictoryEn || member.votesPolled) && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span>
                  {currentLang === 'mr'
                    ? 'जानेवारी २०२६ महापालिका निवडणूक प्रमाणित निकाल'
                    : 'CERTIFIED JANUARY 2026 MUNICIPAL ELECTION RETURN'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-medium">
                {currentLang === 'mr' ? member.recentVictoryMr : member.recentVictoryEn}
              </p>
              {member.votesPolled && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3 pt-3 border-t border-amber-200 text-xs">
                  <div>
                    <span className="text-slate-500 block">Total Votes Polled</span>
                    <span className="font-black text-slate-900 text-base">{member.votesPolled.toLocaleString()}</span>
                  </div>
                  {member.winningMargin && (
                    <div>
                      <span className="text-slate-500 block">Winning Margin</span>
                      <span className="font-black text-emerald-700 text-base">+{member.winningMargin.toLocaleString()}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-slate-500 block">Seat Mandate</span>
                    <span className="font-bold text-amber-800">Ward Representative</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Education & Background */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Education & Qualifications
              </span>
              <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                {currentLang === 'mr' ? member.educationMr : member.educationEn}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Current Affiliation
              </span>
              <p className="font-semibold text-slate-900 text-xs sm:text-sm">{member.currentAffiliation}</p>
            </div>
          </div>

          {/* Electoral History */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Landmark className="w-4 h-4 text-[#0220A8]" />
              <span>
                {currentLang === 'mr'
                  ? 'निवडणूक इतिहास व लोकप्रतिनिधित्व'
                  : 'ELECTORAL RECORD & REPRESENTATION'}
              </span>
            </h4>
            <div className="space-y-2">
              {(currentLang === 'mr' ? member.electoralHistoryMr : member.electoralHistoryEn).map(
                (item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Public Asset Disclosures (if available) */}
          {member.assetDisclosures && member.assetDisclosures.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                <span>
                  {currentLang === 'mr'
                    ? 'सार्वजनिक शपथपत्र संपत्ती तपशील (ECI / SEC)'
                    : 'PUBLIC ASSET DISCLOSURES (AFFIDAVIT AUDIT)'}
                </span>
              </h4>
              <div className="space-y-3">
                {member.assetDisclosures.map((asset, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-900 mb-2">
                      <span>{asset.year}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{asset.source}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-slate-600">
                      <div>
                        <span className="block text-[10px] text-slate-400 uppercase">Movable</span>
                        <span className="font-semibold text-slate-800">{asset.movable}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400 uppercase">Immovable</span>
                        <span className="font-semibold text-slate-800">{asset.immovable}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400 uppercase">Liabilities</span>
                        <span className="font-semibold text-slate-800">{asset.liabilities}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Legal Proceedings Record (Strict Legal Taxonomy) */}
          {member.legalDisclosures && member.legalDisclosures.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-slate-700" />
                <span>
                  {currentLang === 'mr'
                    ? 'न्यायालयीन नोंदी व कायदेशीर स्थिती'
                    : 'JUDICIAL & LEGAL PROCEEDINGS AUDIT'}
                </span>
              </h4>
              <div className="space-y-3">
                {member.legalDisclosures.map((record, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-slate-900">{record.caseTitle}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          record.stage === 'Acquitted' || record.stage === 'Closed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        {record.stage}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {currentLang === 'mr' ? record.detailsMr : record.detailsEn}
                    </p>
                    <div className="mt-2 text-[10px] text-slate-400 font-mono">
                      Verified status as of: {record.verificationDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Public Works & Commitments */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Building className="w-4 h-4 text-blue-600" />
              <span>
                {currentLang === 'mr' ? 'प्रमुख विकासकामे व पाठपुरावा' : 'KEY PUBLIC COMMITMENTS & PROJECTS'}
              </span>
            </h4>
            <div className="space-y-2">
              {(currentLang === 'mr' ? member.publicCommitmentsMr : member.publicCommitmentsEn).map(
                (item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer with Verification Citation */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="truncate max-w-sm" title={member.officialSource}>
              Source: {member.officialSource}
            </span>
          </div>
          <div className="font-mono text-[11px] text-slate-400">
            Last Fact-Checked: {member.lastVerifiedDate}
          </div>
        </div>
      </div>
    </div>
  );
};
