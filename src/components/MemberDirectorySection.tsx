import React, { useState, useMemo } from 'react';
import { ALL_MEMBERS_DATA, MemberProfile } from '../data/membersData';
import { filterMembers } from '../utils/testableRules';
import { Search, Filter, LayoutGrid, Table, CheckCircle2, ChevronRight, Award, Shield, User } from 'lucide-react';

interface MemberDirectorySectionProps {
  currentLang: 'mr' | 'en' | 'hi';
  onSelectMember: (member: MemberProfile) => void;
}

export const MemberDirectorySection: React.FC<MemberDirectorySectionProps> = ({
  currentLang,
  onSelectMember
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedWard, setSelectedWard] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredMembers = useMemo(() => {
    return filterMembers(ALL_MEMBERS_DATA, {
      query: searchQuery,
      category: selectedCategory,
      status: selectedStatus,
      wardOrConstituency: selectedWard
    });
  }, [searchQuery, selectedCategory, selectedStatus, selectedWard]);

  const categories = [
    { id: 'all', labelEn: 'All Profiles (28+)', labelMr: 'सर्व नोंदी (२८+)', labelHi: 'सभी प्रोफाइल (28+)' },
    { id: 'core_leader', labelEn: 'Core Leadership', labelMr: 'प्रमुख नेतृत्व', labelHi: 'प्रमुख नेतृत्व' },
    { id: 'former_mla', labelEn: 'Former MLAs', labelMr: 'माजी आमदार', labelHi: 'पूर्व विधायक' },
    { id: 'former_mp', labelEn: 'Former MPs', labelMr: 'माजी खासदार', labelHi: 'पूर्व सांसद' },
    { id: 'mayor', labelEn: 'Mayors', labelMr: 'महापौर', labelHi: 'मेयर' },
    { id: 'corporator', labelEn: 'Corporators (2026)', labelMr: 'नगरसेवक (२०२६)', labelHi: 'पार्षद (2026)' },
    { id: 'committee_chair', labelEn: 'Committee Chairs', labelMr: 'समिती सभापती', labelHi: 'समिति सभापति' },
    { id: 'former_member', labelEn: 'Former Members', labelMr: 'माजी सदस्य', labelHi: 'पूर्व सदस्य' }
  ];

  return (
    <section id="leadership" className="py-16 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0220A8]/10 text-[#0220A8] text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F4C430]" />
              <span>
                {currentLang === 'mr'
                  ? 'सत्यापित लोकप्रतिनिधी डेटाबेस'
                  : currentLang === 'hi'
                  ? 'सत्यापित जनसेवक डेटाबेस'
                  : 'VERIFIED LEADERSHIP & MEMBER DATABASE'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
              {currentLang === 'mr'
                ? 'स्थानिक जनसेवेतील विश्वासार्ह चेहरे'
                : currentLang === 'hi'
                ? 'स्थानीय जनसेवा के प्रामाणिक चेहरे'
                : 'PEOPLE BEHIND THE PARTY'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1.5">
              {currentLang === 'mr'
                ? 'माजी आमदार, खासदार, महापौर व २०२६ च्या पालिका निवडणुकीत विजयी झालेले नगरसेवक. प्रभाग १-ड मधून सदानंद पाटील यांच्यासह सर्व २८+ प्रमाणित नोंदी.'
                : 'Searchable verified public directory spanning former MLAs, MPs, Mayors, and newly elected 2026 corporators including Sadanand Gajanan Patil (Ward 1D).'}
            </p>
          </div>

          {/* Grid vs Table View Toggle */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs font-bold text-slate-500 mr-1">View:</span>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#0220A8] text-white border-[#0220A8]'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-[#0220A8] text-white border-[#0220A8]'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
              title="Table View"
            >
              <Table className="w-4 h-4" />
              <span>Table</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  currentLang === 'mr'
                    ? 'नाव, प्रभाग किंवा पद शोधा (उदा. सदानंद, ठाकूर, प्रभाग १-ड)...'
                    : 'Search name, ward, or role (e.g. Sadanand, Hitendra, Ward 1D)...'
                }
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0220A8] text-xs sm:text-sm text-slate-900 bg-slate-50/50"
              />
            </div>

            {/* Ward Selector */}
            <div className="md:col-span-3">
              <select
                value={selectedWard}
                onChange={(e) => setSelectedWard(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0220A8] text-xs sm:text-sm text-slate-700 bg-slate-50/50 cursor-pointer"
              >
                <option value="all">All Wards & Segments</option>
                <option value="1D">Ward 1D (Bolinj / Sadanand Patil)</option>
                <option value="Ward 2">Ward 2 (Virar West)</option>
                <option value="Ward 3">Ward 3 (Nalasopara East)</option>
                <option value="Ward 4">Ward 4 (Vasai Coastal)</option>
                <option value="Ward 6">Ward 6 (Virar East)</option>
                <option value="132">132 - Nalasopara Segment</option>
                <option value="133">133 - Vasai Segment</option>
                <option value="131">131 - Boisar Segment</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0220A8] text-xs sm:text-sm text-slate-700 bg-slate-50/50 cursor-pointer"
              >
                <option value="all">All Affiliation Statuses</option>
                <option value="ACTIVE">Active Representative</option>
                <option value="FORMER_PARTY_MEMBER">Former Party Member</option>
                <option value="FORMER_ELECTED">Former Elected Official</option>
              </select>
            </div>
          </div>

          {/* Category Quick Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0220A8] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {currentLang === 'mr' ? cat.labelMr : currentLang === 'hi' ? cat.labelHi : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
          <span>
            Showing <strong className="text-slate-900">{filteredMembers.length}</strong> verified leaders
          </span>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedWard('all');
              }}
              className="text-[#0220A8] hover:underline font-bold cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* View Mode 1: Cards Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => onSelectMember(member)}
                className={`bg-white rounded-2xl border p-4 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  member.id === 'sadanand-patil'
                    ? 'border-amber-300 bg-gradient-to-b from-amber-50/30 to-white ring-1 ring-amber-200'
                    : 'border-slate-200 hover:border-[#0220A8]/40'
                }`}
              >
                <div>
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        member.status === 'ACTIVE'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : member.status === 'FORMER_PARTY_MEMBER'
                          ? 'bg-slate-100 text-slate-600 border border-slate-200'
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {member.status === 'ACTIVE'
                        ? 'Active'
                        : member.status === 'FORMER_PARTY_MEMBER'
                        ? 'Former Member'
                        : 'Former'}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono truncate max-w-[130px]">
                      {member.wardOrConstituencyEn}
                    </span>
                  </div>

                  {/* Leader Avatar and Name */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 flex-shrink-0">
                      <img
                        src={member.imageSrc}
                        alt={member.nameEn}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center font-bold text-sm text-[#F4C430] bg-slate-900 -z-10">
                        {member.avatarFallback}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#0220A8] transition-colors leading-snug">
                        {currentLang === 'mr' ? member.nameMr : currentLang === 'hi' ? member.nameHi : member.nameEn}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                        {currentLang === 'mr' ? member.roleMr : member.roleEn}
                      </p>
                    </div>
                  </div>

                  {/* Spotlight on Sadanand Patil Ward 1D Victory */}
                  {member.id === 'sadanand-patil' && (
                    <div className="mb-3 p-2.5 rounded-xl bg-amber-100/60 border border-amber-300 text-[11px] text-amber-950 font-medium">
                      <div className="flex items-center gap-1 font-bold text-amber-900 mb-0.5">
                        <Award className="w-3.5 h-3.5 text-amber-700" />
                        <span>Ward 1D Jan 2026 Mandate</span>
                      </div>
                      <span>11,016 votes polled · Winning margin of 3,182 votes</span>
                    </div>
                  )}

                  {/* Commitments snippet */}
                  <div className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                    {(currentLang === 'mr' ? member.publicCommitmentsMr : member.publicCommitmentsEn)[0]}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0220A8]">
                  <span>View Full Dossier</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* View Mode 2: Detailed Table View */
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-100 text-slate-600 uppercase text-[10px] font-bold tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Representative</th>
                    <th className="py-3 px-4">Role & Constituency</th>
                    <th className="py-3 px-4">Affiliation Status</th>
                    <th className="py-3 px-4">Education</th>
                    <th className="py-3 px-4">Last Verified</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filteredMembers.map((member) => (
                    <tr
                      key={member.id}
                      onClick={() => onSelectMember(member)}
                      className="hover:bg-slate-50 transition-colors cursor-pointer group"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-slate-900 text-[#F4C430] flex items-center justify-center font-bold text-xs flex-shrink-0 overflow-hidden">
                            <img
                              src={member.imageSrc}
                              alt=""
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                            {member.avatarFallback}
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block group-hover:text-[#0220A8]">
                              {currentLang === 'mr' ? member.nameMr : currentLang === 'hi' ? member.nameHi : member.nameEn}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              {member.nameEn}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="block font-semibold text-slate-800">
                          {currentLang === 'mr' ? member.roleMr : member.roleEn}
                        </span>
                        <span className="text-[10px] text-slate-500">{member.wardOrConstituencyEn}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            member.status === 'ACTIVE'
                              ? 'bg-emerald-50 text-emerald-700'
                              : member.status === 'FORMER_PARTY_MEMBER'
                              ? 'bg-slate-100 text-slate-600'
                              : 'bg-blue-50 text-blue-700'
                          }`}
                        >
                          {member.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-600">{member.educationEn}</td>
                      <td className="py-3 px-4 font-mono text-slate-400">{member.lastVerifiedDate}</td>
                      <td className="py-3 px-4 text-right">
                        <button className="text-[#0220A8] font-bold hover:underline">View &rarr;</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
