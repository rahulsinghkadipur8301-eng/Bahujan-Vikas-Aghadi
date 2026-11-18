import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronRight, ShieldCheck, X } from 'lucide-react';

interface TimelineEventItem {
  year: string;
  titleEn: string;
  titleMr: string;
  descEn: string;
  descMr: string;
  source: string;
  imageSrc: string;
  detailsEn?: string;
  detailsMr?: string;
}

const KEY_MILESTONES: TimelineEventItem[] = [
  {
    year: '1988',
    titleEn: 'Vikas Varta Movement',
    titleMr: 'विकास वार्ता जनआंदोलन',
    descEn: 'Grassroots civic awakening demanding regional self-reliance and drinking water access.',
    descMr: 'स्थानिक पाणी प्रश्न, नागरी सोयीसुविधा आणि स्वायत्ततेसाठी जनआंदोलनाची सुरुवात.',
    source: 'Regional Movement Archives',
    imageSrc: '/bva_story_1.png',
    detailsEn: 'Originating as Janahit Vikas Aaghadi to fight urban exploitation and lack of water infrastructure in Vasai-Virar.',
    detailsMr: 'वसई-विरार पट्ट्यातील पाणीटंचाई व नागरी दुर्लक्षाविरोधात जनहित विकास आघाडीद्वारे ऐतिहासिक जनआंदोलन.'
  },
  {
    year: '1990',
    titleEn: 'First Vidhan Sabha Victory',
    titleMr: 'पहिली विधानसभा निवड',
    descEn: 'Hitendra Thakur elected as MLA for Vasai, initiating over three decades of legislative voice.',
    descMr: 'हितेंद्र ठाकूर वसई मतदारसंघातून प्रथमच विधानसभेत विजयी होऊन लोकप्रतिनिधित्वाला प्रारंभ.',
    source: 'Election Commission of India (1990 Return)',
    imageSrc: '/hitendra_thakur.png',
    detailsEn: 'Marked the start of unbroken grassroots representation focused on local sovereignty and peri-urban infrastructure.',
    detailsMr: 'स्थानिक स्वायत्तता आणि ग्रामीण-नागरी विकासासाठी तीन दशकांच्या विधीमंडळ प्रवासाची मुहूर्तमेढ.'
  },
  {
    year: '2006',
    titleEn: 'Formal Party Registration',
    titleMr: 'बहुजन विकास आघाडी अधिकृत नोंदणी',
    descEn: 'Bahujan Vikas Aaghadi formally registered with the Election Commission of India.',
    descMr: 'स्थानिक अस्मितेला संघटित स्वरूप देत भारत निवडणूक आयोगाकडे बविआची अधिकृत नोंदणी.',
    source: 'Election Commission of India Notification',
    imageSrc: '/bva_logo.png',
    detailsEn: 'Established as an independent regional political party with whistle election symbol.',
    detailsMr: 'शिट्टी या अधिकृत चिन्हासह स्थानिक जनतेचा स्वतंत्र राजकीय पक्ष म्हणून आयोगाकडे नोंदणी.'
  },
  {
    year: '2009',
    titleEn: 'VVCMC Municipal Corporation Formation',
    titleMr: 'वसई-विरार शहर महानगरपालिका निर्मिती',
    descEn: 'Official Maharashtra Gazette notification on 3 July 2009 unifying four municipal councils.',
    descMr: '३ जुलै २००९ च्या शासकीय राजपत्राद्वारे चार नगरपालिकांचे एकत्रीकरण करून महापालिका स्थापन.',
    source: 'Urban Development Dept Gazette (3 July 2009)',
    imageSrc: '/bva_story_6.png',
    detailsEn: 'Unified Virar, Navghar-Manikpur, Nalasopara, and Vasai municipal councils into a single autonomous corporation.',
    detailsMr: 'चारही नगरपालिकांचे एकत्रीकरण करून स्वायत्त नागरी नियोजनासाठी महापालिकेची अधिकृत स्थापना.'
  },
  {
    year: '2009',
    titleEn: 'Kshitij Thakur Elected to 132-Nalasopara',
    titleMr: 'क्षितिज ठाकूर यांची आमदारपदी निवड',
    descEn: 'Elected at age 26 to the newly delimited Nalasopara constituency, serving three consecutive terms.',
    descMr: '१३२-नालासोपारा मतदारसंघातून वयाच्या अवघ्या २६ व्या वर्षी आमदार म्हणून ऐतिहासिक विजय.',
    source: 'Maharashtra Assembly Gazette 2009',
    imageSrc: '/kshitij_thakur.png',
    detailsEn: 'Secured 89,284 votes, beginning 15 continuous years of assembly stewardship in 132-Nalasopara.',
    detailsMr: '८९,२८४ मते मिळवून सलग तीन कार्यकाळ (२००९, २०१४, २०१९) जनतेचे विधीमंडळात प्रतिनिधित्व.'
  },
  {
    year: '2014 & 2019',
    titleEn: 'Sustained Double Assembly Mandates',
    titleMr: 'वसई व नालासोपारा सलग द्वैत विजय',
    descEn: 'Hitendra Thakur (Vasai) and Kshitij Thakur (Nalasopara) secured consecutive assembly mandates.',
    descMr: 'हितेंद्र ठाकूर (वसई) आणि क्षितिज ठाकूर (नालासोपारा) यांचा सलग विधानसभा निवडणुकांमध्ये विजय.',
    source: 'ECI Statistical Reports 2014 & 2019',
    imageSrc: '/bva_story_4.png',
    detailsEn: 'Consolidated peri-urban infrastructure: Surya 185 MLD bulk water sanction and suburban rail frequency expansion.',
    detailsMr: 'सूर्य १८५ दशलक्ष लिटर थेट पाणी पुरवठा योजना आणि उपनगरीय लोकल फेऱ्यांच्या वाढीसाठी सातत्यपूर्ण पाठपुरावा.'
  },
  {
    year: '2024',
    titleEn: 'Democratic Transition & Unbroken Service',
    titleMr: 'लोकशाही कौल व अविरत जनसेवा',
    descEn: 'Following the Nov 2024 election transition, continuing daily grievance redressal across the region.',
    descMr: 'नोव्हेंबर २०२४ च्या निवडणुकीनंतरही दररोज मध्यवर्ती कार्यालयातून जनतेच्या सेवेचा अखंड वसा.',
    source: 'Palghar DEO Form-20 & Vidhan Sabha Records',
    imageSrc: '/bva_story_7.png',
    detailsEn: 'Continuing grassroots civic outreach, consumer protection, and community welfare initiatives.',
    detailsMr: 'नागरिकांच्या दैनंदिन समस्या निराकरण आणि समाजकल्याण उपक्रमांचा मध्यवर्ती कार्यालयातून अविरत ओघ.'
  }
];

interface InteractiveTimelineSectionProps {
  currentLang: 'mr' | 'en' | 'hi';
}

export const InteractiveTimelineSection: React.FC<InteractiveTimelineSectionProps> = ({ currentLang }) => {
  const [activeEvent, setActiveEvent] = useState<TimelineEventItem | null>(null);

  return (
    <section id="journey" className="relative w-full bg-slate-50/70 py-16 lg:py-20 border-b border-slate-200 scroll-mt-20">
      <div className="bva-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0220A8] uppercase tracking-widest mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-2 ring-[#0220A8]" />
            <span>{currentLang === 'mr' ? 'ऐतिहासिक कालपट' : 'OUR HISTORICAL JOURNEY'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight font-marathi">
            {currentLang === 'mr' ? 'संघर्ष, विकास आणि लोकविश्वासाची तीन दशके' : 'Three Decades of Grassroots Heritage'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            {currentLang === 'mr'
              ? '१९८८ च्या स्थानिक जनआंदोलनापासून, २००९ ची महापालिका निर्मिती ते आजतागायत अविरत सुरू असलेला लोकसेवेचा प्रवास.'
              : 'Chronological timeline of verified statutory and legislative milestones shaping the Vasai-Virar region.'}
          </p>
        </div>

        {/* Compact, Visually Connected Timeline Grid (Phase 9 Specs) */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Center Track Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-400 via-[#0220A8] to-blue-300 -translate-x-1/2" />

          <div className="space-y-6 sm:space-y-8">
            {KEY_MILESTONES.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={`${milestone.year}-${idx}`}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Central Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#0220A8] shadow-md z-10 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FDF219]" />
                  </div>

                  {/* Content Card (Balanced tight spacing) */}
                  <div
                    className={`ml-10 sm:ml-0 w-full sm:w-[calc(50%-2rem)] ${
                      isEven ? 'sm:text-left' : 'sm:text-left'
                    }`}
                  >
                    <div
                      onClick={() => setActiveEvent(milestone)}
                      className="bg-white rounded-2xl border border-slate-200 hover:border-[#0220A8] p-4 sm:p-5 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer group-hover:-translate-y-0.5 flex gap-4 items-center"
                    >
                      {/* Authentic Archival Thumbnail */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 relative">
                        <img
                          src={milestone.imageSrc}
                          alt={milestone.titleEn}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Year & Badge */}
                        <div className="flex items-center justify-between mb-1">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#0220A8] text-[#FDF219] font-mono font-black text-xs">
                            {milestone.year}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Verified</span>
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0220A8] transition-colors leading-snug line-clamp-1 font-display">
                          {currentLang === 'mr' ? milestone.titleMr : milestone.titleEn}
                        </h3>

                        {/* One-Sentence Concise Explanation */}
                        <p className="mt-1 text-xs text-slate-600 leading-relaxed font-sans line-clamp-2">
                          {currentLang === 'mr' ? milestone.descMr : milestone.descEn}
                        </p>

                        <div className="mt-2 flex items-center justify-between text-[11px] text-[#0220A8] font-bold">
                          <span className="truncate text-slate-400 text-[10px] font-mono">{milestone.source}</span>
                          <span className="flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                            <span>Details</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestone Detail Modal */}
        {activeEvent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setActiveEvent(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 border border-slate-200 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveEvent(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-lg bg-[#0220A8] text-[#FDF219] font-mono font-black text-xs">
                  {activeEvent.year}
                </span>
                <span className="text-xs font-mono text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Statutory Record</span>
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 leading-snug font-display mb-3">
                {currentLang === 'mr' ? activeEvent.titleMr : activeEvent.titleEn}
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed font-sans mb-4">
                {currentLang === 'mr' ? activeEvent.descMr : activeEvent.descEn}
              </p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 font-mono">
                <span className="font-bold text-slate-800 block mb-0.5">Primary Documentation:</span>
                <span>{activeEvent.source}</span>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveEvent(null)}
                  className="px-4 py-2 bg-[#0220A8] text-white text-xs font-bold rounded-xl cursor-pointer hover:bg-[#00177A] transition-colors"
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
