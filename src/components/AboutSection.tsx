import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle, ArrowRight, ShieldCheck, Landmark } from 'lucide-react';

interface AboutSectionProps {
  currentLang: 'mr' | 'en' | 'hi';
  onExploreHistory: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  onExploreHistory
}) => {
  return (
    <section id="about" className="relative w-full bg-white py-12 lg:py-16 border-b border-slate-200 scroll-mt-24">
      {/* Soft gradient entrance wipe connecting from Hero */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />

      <div className="bva-container relative z-10">
        {/* Section Header with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-8 lg:mb-10"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0220A8] uppercase tracking-widest mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-2 ring-[#0220A8]" />
            <span>{currentLang === 'mr' ? 'पक्ष परिचय व ध्येय' : 'ABOUT BAHUJAN VIKAS AAGHADI'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight font-marathi leading-tight">
            {currentLang === 'mr'
              ? 'स्थानिक अस्मिता, एकात्मिक नागरी नियोजन आणि अखंड जनसेवा'
              : 'Local Sovereignty, Integrated Civic Planning & Grassroots Service'}
          </h2>
        </motion.div>

        {/* 2-Column Balanced Image & Editorial Layout (Stage 3 progressive reveal) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (5 cols): Large Authentic Photograph with progressive reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            {/* Subtle blue/yellow corner accent */}
            <div className="absolute -top-2.5 -left-2.5 w-16 h-16 border-t-4 border-l-4 border-[#0220A8] rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-2.5 -right-2.5 w-16 h-16 border-b-4 border-r-4 border-[#FDF219] rounded-br-2xl pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="/bva_story_1.png"
                alt="Bahujan Vikas Aaghadi Public Samvaad & Community Gathering"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />

              {/* Photo Caption Badge */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#FDF219]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FDF219] font-bold">
                    {currentLang === 'mr' ? 'प्रमाणित अभिलेख' : 'VERIFIED ARCHIVE'}
                  </span>
                </div>
                <h4 className="text-sm font-bold leading-snug font-marathi">
                  {currentLang === 'mr'
                    ? 'विरार लोकसंवाद: जनतेच्या मूलभूत प्रश्नांवर थेट चर्चा'
                    : 'Virar Public Samvaad: Direct Grassroots Dialogue on Civic Rights'}
                </h4>
                <p className="text-[11px] text-slate-300 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#FDF219]" />
                  <span>Central Secretariat, Viva College Road, Virar</span>
                </p>
              </div>
            </div>

            {/* Gazette Certification Strip */}
            <div className="mt-3.5 p-3 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs text-slate-800 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#0220A8] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {currentLang === 'mr'
                  ? '३ जुलै २००९: महाराष्ट्र शासन राजपत्राद्वारे चार नगरपालिकांचे एकत्रीकरण करून वसई-विरार शहर महानगरपालिका निर्मिती.'
                  : '3 July 2009: Official Maharashtra Gazette notification unifying four municipal councils into VVCMC.'}
              </p>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Editorial Content & 3 Verified Facts */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-3.5">
              <p className="font-semibold text-slate-900 border-l-4 border-[#0220A8] pl-4 text-base sm:text-lg">
                {currentLang === 'mr'
                  ? 'बहुजन विकास आघाडी ही केवळ एक राजकीय पक्ष संघटना नसून, वसई-विरार आणि पालघर परिसरातील सामान्य जनतेच्या स्वाभिमानाचा आवाज आहे.'
                  : 'Bahujan Vikas Aaghadi (BVA) is an organic regional political organization rooted in the peri-urban soil of Vasai, Virar, Nalasopara, and the wider Palghar district.'}
              </p>

              <p>
                {currentLang === 'mr'
                  ? '१९९० च्या सुरुवातीला मुंबईच्या सीमेवरील हा पट्टा पाणीटंचाई, अपुऱ्या आरोग्य सुविधा आणि शैक्षणिक गैरसोयींनी ग्रासलेला होता. हितेंद्र ठाकूर यांनी स्थानिक अस्मितेची मशाल हाती घेत बाहेरील आदेशांवर अवलंबून न राहता स्थानिक समस्या स्थानिक पातळीवरच सोडवण्याचा स्वावलंबी विचार रुजवला.'
                  : 'In the early 1990s, the rapidly urbanizing northern metropolitan corridor faced severe infrastructure deficits. Recognizing this vacuum, Hitendra Thakur unified agrarian, fisherfolk, and working-class communities under the banner of autonomous peri-urban development.'}
              </p>
            </div>

            {/* Three Essential Verified Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0220A8] transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#0220A8] mb-2" />
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                  {currentLang === 'mr' ? 'नागरी स्वायत्तता' : 'Civic Autonomy'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentLang === 'mr'
                    ? '३ जुलै २००९ रोजी ४ नगरपालिकांचे एकत्रीकरण करून महापालिका निर्मिती.'
                    : 'Unified 4 municipal councils into VVCMC by gazette on 3 July 2009.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0220A8] transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#FDF219] ring-1 ring-amber-400 mb-2" />
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                  {currentLang === 'mr' ? 'पाणी व पायाभूत' : 'Water & Infra'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentLang === 'mr'
                    ? '१८५ दशलक्ष लिटर सूर्य पाणी योजना व उपनगरीय रेल्वे फेऱ्यांचा पाठपुरावा.'
                    : 'Surya 185 MLD bulk treated water allocation and suburban rail expansion.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0220A8] transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#0220A8] mb-2" />
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                  {currentLang === 'mr' ? 'उच्च शिक्षण क्रांती' : 'Decentralized Higher Ed'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentLang === 'mr'
                    ? 'विवा शैक्षणिक संकुलांद्वारे स्थानिक विद्यार्थ्यांना दर्जेदार पदवी व तंत्रशिक्षण.'
                    : 'Affordable engineering, pharmacy, and degree colleges within the region.'}
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-2">
              <button
                onClick={onExploreHistory}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0220A8] hover:bg-[#00177A] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors cursor-pointer"
              >
                <span>{currentLang === 'mr' ? 'आमचा ऐतिहासिक प्रवास पहा' : 'Explore Historical Journey'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FDF219]" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
