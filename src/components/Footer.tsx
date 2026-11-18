import React from 'react';
import { BvaEmblem } from './BvaEmblem';
import { MapPin, Phone, Mail, ArrowUp, ShieldAlert, ShieldCheck, FileText, Sparkles } from 'lucide-react';

interface FooterProps {
  currentLang: 'mr' | 'en' | 'hi';
  onNavigate: (sectionId: string) => void;
  onOpenCorrections?: () => void;
  onOpenDocuments?: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigate,
  onOpenCorrections,
  onOpenDocuments,
  onOpenAdmin
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#00177A] text-white pt-16 pb-12 border-t border-blue-900 relative overflow-hidden select-none">
      {/* Background Dots Grid */}
      <div className="absolute inset-0 geo-dots-pattern-dark opacity-10 pointer-events-none" />

      <div className="bva-container relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 (5 cols): Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BvaEmblem size={44} />
              <div>
                <h3 className="text-xl font-black text-white font-marathi tracking-tight leading-none">
                  बहुजन विकास आघाडी
                </h3>
                <p className="text-[11px] font-black text-[#FDF219] tracking-widest font-sans uppercase mt-0.5">
                  BAHUJAN VIKAS AAGHADI
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-sans max-w-sm">
              {currentLang === 'mr'
                ? 'वसई, विरार, नालासोपारा आणि पालघर पट्ट्यातील सामान्य जनतेच्या हक्कांचा, स्वायत्ततेचा आणि शाश्वत प्रगतीचा अधिकृत राजकीय विचार मंच.'
                : 'A dedicated regional political platform committed to grassroots empowerment, municipal autonomy, water security, and higher educational decentralization across Vasai, Virar, Nalasopara, and Palghar district.'}
            </p>

            <div className="pt-2 text-xs text-blue-200/80 space-y-1 font-mono">
              <p>Election Commission Symbol: Whistle (शिट्टी)</p>
              <p>Party Colors: Yellow, Royal Blue &amp; White</p>
              <p>Key Assembly Segments: 132-Nalasopara &amp; 133-Vasai</p>
            </div>
          </div>

          {/* Col 2 (3 cols): Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#FDF219] uppercase tracking-widest font-mono">
              {currentLang === 'mr' ? 'प्रमुख विभाग' : 'PORTAL SECTIONS'}
            </h4>
            <ul className="space-y-2 text-xs font-medium text-blue-100">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#FDF219] transition-colors cursor-pointer"
                >
                  {currentLang === 'mr' ? '१. मुख्य दालन (Home)' : '1. Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FDF219] transition-colors cursor-pointer"
                >
                  {currentLang === 'mr' ? '२. आमच्याविषयी (About)' : '2. About BVA'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('leadership')}
                  className="hover:text-[#FDF219] transition-colors cursor-pointer"
                >
                  {currentLang === 'mr' ? '३. पक्ष नेतृत्व (Leadership)' : '3. Leadership'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journey')}
                  className="hover:text-[#FDF219] transition-colors cursor-pointer"
                >
                  {currentLang === 'mr' ? '४. ऐतिहासिक कालक्रम (Journey)' : '4. Our Journey'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('constituencies')}
                  className="hover:text-[#FDF219] transition-colors cursor-pointer"
                >
                  {currentLang === 'mr' ? '५. मतदारसंघ (Constituencies)' : '5. Constituencies'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="hover:text-[#FDF219] transition-colors cursor-pointer"
                >
                  {currentLang === 'mr' ? '६. विकासकामे (Our Work)' : '6. Our Work'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FDF219] transition-colors cursor-pointer"
                >
                  {currentLang === 'mr' ? '७. वृत्त व संपर्क (News & Contact)' : '7. News & Contact'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 (4 cols): Headquarters & Secondary Tools */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#FDF219] uppercase tracking-widest font-mono">
              {currentLang === 'mr' ? 'मध्यवर्ती संपर्क व अभिलेखागार' : 'SECRETARIAT & ARCHIVES'}
            </h4>
            <div className="text-xs text-blue-100/90 space-y-2 font-sans">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FDF219] shrink-0 mt-0.5" />
                <span>
                  Viva College Road, Near Virar Railway Station (East), Virar, Palghar District, Maharashtra 401305
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FDF219] shrink-0" />
                <span>0250-2500000 / 0250-2510000</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FDF219] shrink-0" />
                <span>secretariat@bva-vasaivirar.org</span>
              </p>
            </div>

            {/* Secondary Modals Quick Access Strip */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2">
              {onOpenCorrections && (
                <button
                  onClick={onOpenCorrections}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-white/10"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{currentLang === 'mr' ? 'तथ्य पडताळणी' : 'Fact Registry'}</span>
                </button>
              )}

              {onOpenDocuments && (
                <button
                  onClick={onOpenDocuments}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-white/10"
                >
                  <FileText className="w-3.5 h-3.5 text-[#FDF219]" />
                  <span>{currentLang === 'mr' ? 'शासकीय राजपत्रे' : 'Official Gazettes'}</span>
                </button>
              )}

              {onOpenAdmin && (
                <button
                  onClick={onOpenAdmin}
                  className="px-3 py-1.5 rounded-lg bg-[#FDF219] hover:bg-amber-300 text-[#00177A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Demo CMS</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Independent Concept Disclaimer Block */}
        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-[11px] text-blue-200/80 space-y-1.5 leading-relaxed">
          <div className="flex items-center gap-2 text-[#FDF219] font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Independent Demonstration &amp; Educational Concept</span>
          </div>
          <p>
            {currentLang === 'mr'
              ? 'हे संकेतस्थळ बहुजन विकास आघाडी (BVA) च्या संभाव्य आधुनिक डिजिटल व्यासपीठाचे स्वतंत्र, अनधिकृत संकल्पना प्रात्यक्षिक आहे. यात नमूद सर्व माहिती, निवडणूक निकाल, विधीमंडळ भाषणे आणि सार्वजनिक प्रकल्प हे भारत निवडणूक आयोग (ECI), महाराष्ट्र विधानसभा कार्यवृत्त व वसई-विरार शहर महानगरपालिका (VVCMC) च्या सार्वजनिक अधिकृत राजपत्रांमधून संकलित करण्यात आले आहेत.'
              : 'This website is an independent, unofficial digital demonstration created to showcase the potential of a cinematic, documentary-style portal for Bahujan Vikas Aaghadi (BVA). All political biographies, legislative interventions, election histories, and civic projects are verified against official records of the Election Commission of India (ECI), Maharashtra Vidhan Sabha archives, and VVCMC public gazettes.'}
          </p>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-200/60 gap-4">
          <p>
            © {new Date().getFullYear()} Bahujan Vikas Aaghadi Digital Concept. All verified records preserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#FDF219] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
