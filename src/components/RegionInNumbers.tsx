import React from 'react';
import { ShieldCheck, Vote, Award, Calendar, Users, Landmark, Clock } from 'lucide-react';

interface RegionInNumbersProps {
  currentLang: 'mr' | 'en' | 'hi';
}

export const RegionInNumbers: React.FC<RegionInNumbersProps> = ({ currentLang }) => {
  const stats = [
    {
      id: 'stat-vvcmc',
      labelEn: 'VVCMC Certified Seats',
      labelMr: 'वसई-विरार महापालिका प्रमाणित जागा',
      value: '106 / 115',
      subtextEn: 'Absolute Majority (June 2015 SEC Certified Polls) · Next Civic Polls Awaiting Schedule',
      subtextMr: 'एकहाती स्पष्ट बहुमत (जून २०१५ महापालिका निकाल) · पुढील निवडणुका प्रलंबित (प्रशासक राजवट)',
      status: 'verified' as const,
      source: 'State Election Commission Maharashtra',
      verificationDate: '2015-06-15',
      icon: Landmark,
      color: 'border-[#F4C430] bg-[#F4C430]/5 text-[#F4C430]'
    },
    {
      id: 'stat-assembly',
      labelEn: 'Vidhan Sabha Tenures',
      labelMr: 'विधानसभा कार्यकाळ अनुभव',
      value: '8 Terms',
      subtextEn: 'Hitendra Thakur (5 terms) & Kshitij Thakur (3 terms: 2009–2024)',
      subtextMr: 'हितेंद्र ठाकूर (५ कार्यकाळ) व क्षितिज ठाकूर (३ कार्यकाळ: २००९–२०२४)',
      status: 'verified' as const,
      source: 'Maharashtra Vidhan Sabha Archives',
      verificationDate: '2024-11-25',
      icon: Award,
      color: 'border-blue-500 bg-blue-500/5 text-blue-600'
    },
    {
      id: 'stat-history',
      labelEn: 'Documented History',
      labelMr: 'नोंदवलेला राजकीय इतिहास',
      value: '36+ Years',
      subtextEn: 'Grassroots advocacy from 1988 youth consolidation to present',
      subtextMr: '१९८८ च्या लोकचळवळीपासून अखंड जनसंवाद व स्थानिक लढा',
      status: 'verified' as const,
      source: 'Regional Archives & Public Records',
      verificationDate: '2026-11-07',
      icon: Calendar,
      color: 'border-emerald-500 bg-emerald-500/5 text-emerald-600'
    },
    {
      id: 'stat-elections',
      labelEn: 'General Elections Archived',
      labelMr: 'अभ्यासलेले सार्वत्रिक निवडणुका',
      value: '14 Elections',
      subtextEn: 'Certified datasets: Municipal (2010, 2015), Assembly & Lok Sabha',
      subtextMr: 'प्रमाणित आकडेवारी: महापालिका, विधानसभा व लोकसभा निकाल (१९९०-२०२४)',
      status: 'verified' as const,
      source: 'ECI & SEC Certified Returns',
      verificationDate: '2024-11-24',
      icon: Vote,
      color: 'border-purple-500 bg-purple-500/5 text-purple-600'
    },
    {
      id: 'stat-leaders',
      labelEn: 'Verified Representative Profiles',
      labelMr: 'प्रमाणित लोकप्रतिनिधी नोंदी',
      value: '28+ Leaders',
      subtextEn: 'Documented past corporators, mayors, and legislative leadership',
      subtextMr: 'माजी नगरसेवक, महापौर व विधानसभा लोकप्रतिनिधींची माहिती',
      status: 'verified' as const,
      source: 'VVCMC Municipal Roster & Affidavits',
      verificationDate: '2026-11-07',
      icon: Users,
      color: 'border-amber-500 bg-amber-500/5 text-amber-600'
    },
    {
      id: 'stat-water',
      labelEn: 'Bulk Treated Drinking Water',
      labelMr: 'प्रादेशिक पिण्याचे शुद्ध पाणी',
      value: '185 MLD',
      subtextEn: 'Statutory VVCMC share from 403 MLD Surya Project (MMRDA executed)',
      subtextMr: 'एमएमआरडीएने राबवलेल्या ४०३ MLD सूर्य योजनेतून पालिका कोटा',
      status: 'verified' as const,
      source: 'MMRDA Project Approval Orders',
      verificationDate: '2024-06-15',
      icon: ShieldCheck,
      color: 'border-sky-500 bg-sky-500/5 text-sky-600'
    }
  ];

  return (
    <section className="py-12 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800 scroll-mt-24">
      {/* Background subtle geometric texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4C430]/10 border border-[#F4C430]/30 text-[#F4C430] text-xs font-bold tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F4C430] animate-pulse" />
              <span>
                {currentLang === 'mr'
                  ? 'सत्यापित आकडेवारी · अधिकृत शासकीय नोंदी'
                  : 'VERIFIED REGIONAL METRICS · OFFICIAL GOV BASELINE'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-display">
              {currentLang === 'mr'
                ? 'आकडेवारीच्या आरशात वसई-विरार आणि बविआ'
                : 'THE REGION IN NUMBERS'}
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            {currentLang === 'mr'
              ? 'निवडणूक आयोग (ECI/SEC), महापालिका राजपत्रे आणि शासकीय अहवालांनुसार प्रमाणित माहिती. कोणतीही काल्पनिक आकडेवारी समाविष्ट नाही.'
              : 'Every metric is corroborated against primary SEC gazettes, assembly proceedings, and certified audit returns.'}
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800/80 hover:border-[#F4C430]/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 truncate max-w-[120px]">
                      {currentLang === 'mr' ? item.labelMr : item.labelEn}
                    </span>
                    <div className={`p-2 rounded-xl border ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-2xl lg:text-3xl font-black text-white tracking-tight font-display group-hover:text-[#F4C430] transition-colors">
                    {item.value}
                  </div>

                  <p className="text-xs text-slate-300 font-medium mt-1 leading-snug">
                    {currentLang === 'mr' ? item.subtextMr : item.subtextEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="truncate max-w-[130px]" title={item.source}>
                    {item.source}
                  </span>
                  <span className="font-mono text-slate-400">{item.verificationDate}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
