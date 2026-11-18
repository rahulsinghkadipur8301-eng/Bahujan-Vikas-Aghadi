import React from 'react';
import { History, Users, Building2, ArrowUpRight } from 'lucide-react';

interface ThreeColumnPanelProps {
  currentLang: 'mr' | 'en' | 'hi';
  onNavigateSection: (sectionId: string) => void;
}

export const ThreeColumnPanel: React.FC<ThreeColumnPanelProps> = ({
  currentLang,
  onNavigateSection
}) => {
  const columns = [
    {
      id: 'history',
      number: '01',
      titleEn: 'OUR HISTORY',
      titleMr: 'आमचा इतिहास',
      icon: History,
      subtitleEn: 'Three Decades of Regional Autonomy (1990–2026)',
      subtitleMr: 'तीन दशकांचा स्थानिक स्वायत्ततेचा लढा (१९९०-२०२६)',
      summaryEn:
        'Following sustained regional advocacy, the Government of Maharashtra unified four municipal councils to establish the Vasai-Virar City Municipal Corporation (VVCMC) on 3 July 2009, institutionalizing civic self-governance for the sub-region.',
      summaryMr:
        'दीर्घकालीन जनपाठपुराव्यानंतर महाराष्ट्र शासनाने ३ जुलै २००९ रोजी चार नगरपालिकांचे एकत्रीकरण करून वसई-विरार शहर महानगरपालिकेची अधिकृत स्थापना केली आणि स्थानिक स्वराज्य बळकट केले.',
      metricValue: '1990',
      metricLabelEn: 'Grassroots Foundation',
      metricLabelMr: 'लोकचळवळीची स्थापना',
      ctaEn: 'Read Complete History',
      ctaMr: 'संपूर्ण इतिहास वाचा'
    },
    {
      id: 'leadership',
      number: '02',
      titleEn: 'LEADERSHIP',
      titleMr: 'नेतृत्व परंपरा',
      icon: Users,
      subtitleEn: 'Public Service & Ground Accessibility',
      subtitleMr: 'थेट जनसंवाद व लोककल्याणकारी नेतृत्व',
      summaryEn:
        'Under the veteran guidance of founder and former MLA Hitendra Thakur and former 3-term MLA Kshitij Thakur (who represented 132-Nalasopara across three consecutive terms, 2009–2024), BVA’s leadership focuses on accessible open samvaad, higher education, and regional infrastructure.',
      summaryMr:
        'संस्थापक व माजी आमदार हितेंद्र ठाकूर आणि माजी ३-वेळा आमदार क्षितिज ठाकूर (२००९–२०२४) यांच्या नेतृत्वाखाली, थेट जनता दरबार, दर्जेदार उच्च शिक्षण संकुले आणि जनहिताच्या कामांवर अविरत भर.',
      metricValue: '3+ Decades',
      metricLabelEn: 'Continuous Public Samvaad',
      metricLabelMr: 'अखंडित थेट जनसंवाद',
      ctaEn: 'Explore Leadership Profiles',
      ctaMr: 'नेतृत्व परिचय पहा'
    },
    {
      id: 'initiatives',
      number: '03',
      titleEn: 'PUBLIC INITIATIVES',
      titleMr: 'विकास कामे व प्रकल्प',
      icon: Building2,
      subtitleEn: 'Water, Transport, Education & Coastal Welfare',
      subtitleMr: 'पाणी, रेल्वे, शिक्षण आणि सागरी संरक्षण',
      summaryEn:
        'Documented implementation of landmark civil endeavors including the 185 MLD bulk Surya water supply (MMRDA executed), Viva educational campus under the Vishnu Waman Thakur Charitable Trust, and Western Railway suburban improvements.',
      summaryMr:
        'एमएमआरडीएच्या सूर्य योजनेतून वसई-विरारसाठी १८५ दशलक्ष लिटर हक्काचे पाणी, विष्णू वामन ठाकूर चॅरिटेबल ट्रस्टचे विवा शैक्षणिक संकुल आणि पश्चिम रेल्वेवर १५ डब्यांच्या लोकल फेऱ्यांचा सातत्यपूर्ण पाठपुरावा.',
      metricValue: '185 MLD',
      metricLabelEn: 'Surya Bulk VVCMC Allocation',
      metricLabelMr: 'सूर्य पाणी वाटप कोटा',
      ctaEn: 'View Documented Projects',
      ctaMr: 'प्रकल्पांची माहिती पहा'
    }
  ];

  return (
    <section className="relative w-full bg-[#0220A8] text-white py-12 lg:py-16 overflow-hidden border-y border-blue-900">
      {/* Background Subtle Yellow Matrix Accents */}
      <div className="absolute inset-0 geo-dots-pattern-dark opacity-15 pointer-events-none" />

      {/* Radiant Yellow Horizon Line at Top */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#FDF219] to-transparent opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/15">
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.id}
                className="py-8 lg:py-4 px-0 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header: Number and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-black text-[#FDF219] tracking-widest bg-black/25 px-2 py-0.5 rounded">
                        {col.number}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FDF219]" />
                      <h3 className="text-sm font-bold tracking-widest text-[#FDF219] uppercase font-display">
                        {currentLang === 'mr' ? col.titleMr : col.titleEn}
                      </h3>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-[#FDF219] text-white group-hover:text-[#00177A] flex items-center justify-center transition-colors shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Subtitle */}
                  <h4 className="text-lg sm:text-xl font-extrabold text-white leading-snug group-hover:text-[#FDF219] transition-colors">
                    {currentLang === 'mr' ? col.subtitleMr : col.subtitleEn}
                  </h4>

                  {/* Summary Text */}
                  <p className="mt-3 text-xs sm:text-sm text-blue-100/85 leading-relaxed font-sans">
                    {currentLang === 'mr' ? col.summaryMr : col.summaryEn}
                  </p>
                </div>

                {/* Bottom Metric & Action */}
                <div className="mt-8 pt-6 border-t border-white/15 flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-black text-[#FDF219] font-display block">
                      {col.metricValue}
                    </span>
                    <span className="text-[11px] text-blue-200 font-medium">
                      {currentLang === 'mr' ? col.metricLabelMr : col.metricLabelEn}
                    </span>
                  </div>

                  <button
                    onClick={() => onNavigateSection(col.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#FDF219] transition-colors hover:underline focus:outline-none"
                  >
                    <span>{currentLang === 'mr' ? col.ctaMr : col.ctaEn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FDF219] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
