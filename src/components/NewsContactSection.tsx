import React, { useState } from 'react';
import { NEWS_DATA, type NewsArticle } from '../data/bvaData';
import { validateGrievanceForm, formatBvaDate, type GrievanceInput } from '../utils/testableRules';
import {
  Calendar,
  Search,
  ArrowRight,
  X,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  Mail,
  Phone
} from 'lucide-react';

interface NewsContactSectionProps {
  currentLang: 'mr' | 'en' | 'hi';
}

export const NewsContactSection: React.FC<NewsContactSectionProps> = ({ currentLang }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  // Contact Form State
  const [formData, setFormData] = useState<GrievanceInput>({
    fullName: '',
    phone: '',
    constituency: '132-Nalasopara',
    category: 'water',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof GrievanceInput, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateGrievanceForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    const newId = `BVA-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(newId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      constituency: '132-Nalasopara',
      category: 'water',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  // Top 3 selected recent news updates
  const recentArticles = NEWS_DATA.slice(0, 3);

  return (
    <section id="contact" className="relative w-full bg-white py-16 lg:py-20 border-b border-slate-200 scroll-mt-20">
      <div id="news" className="sr-only" />
      <div className="bva-container">
        {/* Section Header */}
        <div className="mb-8 lg:mb-10 pb-4 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0220A8] uppercase tracking-widest mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-2 ring-[#0220A8]" />
            <span>{currentLang === 'mr' ? 'वृत्त व थेट जनसंवाद' : 'NEWS & CITIZEN CONNECT'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight font-marathi">
            {currentLang === 'mr'
              ? 'अधिकृत घडामोडी, विधीमंडळ भूमिका व नागरिक संपर्क'
              : 'Press Releases, Public Records & Citizen Samvaad'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-sans">
            {currentLang === 'mr'
              ? 'पक्षाची अधिकृत निवेदने, विधीमंडळ कार्यवृत्त आणि विरार मध्यवर्ती कार्यालयाशी थेट नागरिक संवाद.'
              : 'Official party communiques, parliamentary records, and direct citizen grievance redressal.'}
          </p>
        </div>

        {/* 2-Column Split: News Updates (Left 5 cols) + Citizen Connect Form (Right 7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* =========================================================
              LEFT COLUMN (5 cols): Important Official Updates & Office Info
              ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#0220A8]" />
                <span>{currentLang === 'mr' ? 'महत्त्वाच्या घडामोडी व निवेदने' : 'Recent Communiques'}</span>
              </h3>
              <span className="text-[10px] font-mono font-bold text-[#0220A8] uppercase">3 Updates</span>
            </div>

            {/* List of 3 compact news cards */}
            <div className="space-y-3.5">
              {recentArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="bg-white rounded-xl border border-slate-200 hover:border-[#0220A8] p-4 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#0220A8] bg-blue-50 px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px] text-slate-500">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {formatBvaDate(article.date, currentLang)}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0220A8] transition-colors leading-snug">
                    {currentLang === 'mr' ? article.titleMr : article.titleEn}
                  </h4>

                  <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {currentLang === 'mr' ? article.summaryMr : article.summaryEn}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#0220A8]">
                    <span>{currentLang === 'mr' ? 'सविस्तर वाचा' : 'Read Full'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Central Secretariat Compact Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0220A8] to-[#00177A] text-white space-y-3 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#FDF219] uppercase tracking-wider">
                  CENTRAL SECRETARIAT
                </span>
                <span className="text-[10px] text-blue-200 font-mono">Virar East</span>
              </div>

              <div className="space-y-2 text-xs text-blue-100">
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FDF219] shrink-0 mt-0.5" />
                  <span>Viva College Road, Near Virar Railway Station (East), Palghar District 401305</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#FDF219] shrink-0" />
                  <span>Public Samvaad: Mon–Sat 9:00 AM – 1:30 PM (Direct Citizen Walk-in)</span>
                </p>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN (7 cols): Citizen Samvaad Form
              ========================================================= */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-amber-50/70 border border-amber-200 text-center space-y-4 shadow-xs">
                <div className="w-14 h-14 rounded-full bg-[#0220A8] text-[#FDF219] mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  {currentLang === 'mr'
                    ? 'प्रात्यक्षिक नोंदणी यशस्वी (लोकल मोड)!'
                    : 'Demonstration Query Logged (Demo Mode)!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                  {currentLang === 'mr'
                    ? `सिम्युलेटेड टोकन क्रमांक: ${ticketId}. ही एक डिजिटल प्रात्यक्षिक चाचणी आहे. प्रत्यक्ष तक्रारीसाठी कृपया विरार येथील मध्यवर्ती कार्यालयात भेट द्या.`
                    : `Simulated Demo Tracking ID: ${ticketId}. This confirms client-side form validation. As this is an independent demonstration, no live data has been sent to public agencies.`}
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-[#0220A8] text-white rounded-xl text-xs font-bold hover:bg-[#00177A] transition-colors shadow-xs cursor-pointer"
                  >
                    {currentLang === 'mr' ? 'दुसरी चाचणी नोंदणी करा' : 'Submit Another Demo Query'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
                <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {currentLang === 'mr' ? 'नागरिक अर्ज / जनसंवाद फॉर्म (प्रात्यक्षिक)' : 'Citizen Representation Form (UI Demo)'}
                  </h3>
                  <span className="text-[10px] font-mono uppercase bg-blue-50 text-[#0220A8] px-2 py-0.5 rounded font-bold">
                    Demo Mode
                  </span>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {currentLang === 'mr' ? 'पूर्ण नाव *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Anand Patil"
                    className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0220A8] ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-rose-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone & Constituency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {currentLang === 'mr' ? 'मोबाईल नंबर *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9820123456"
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0220A8] ${
                        errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[11px] text-rose-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {currentLang === 'mr' ? 'मतदारसंघ / परिसर *' : 'Constituency / Region *'}
                    </label>
                    <select
                      value={formData.constituency}
                      onChange={(e) => setFormData({ ...formData, constituency: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0220A8]"
                    >
                      <option value="132-Nalasopara">132 — Nalasopara (नालासोपारा)</option>
                      <option value="133-Vasai">133 — Vasai (वसई)</option>
                      <option value="Virar-East">Virar East / Urban VVCMC</option>
                      <option value="Palghar-District">Palghar Rural &amp; Coastal</option>
                    </select>
                  </div>
                </div>

                {/* Category Topic */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {currentLang === 'mr' ? 'विषय / प्रवर्ग *' : 'Grievance / Inquiry Topic *'}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0220A8]"
                  >
                    <option value="water">Drinking Water &amp; Pipeline Pressure (पाणीपुरवठा)</option>
                    <option value="railway">Suburban Railway &amp; Station Amenities (रेल्वे समस्या)</option>
                    <option value="roads">Roads, Drainage &amp; Streetlights (रस्ते व नाले)</option>
                    <option value="education">College Admissions &amp; Scholarships (शिक्षण व शिष्यवृत्ती)</option>
                    <option value="healthcare">Hospital &amp; Healthcare Support (आरोग्य साहाय्य)</option>
                    <option value="other">Other Public Representation (इतर जनसमस्या)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {currentLang === 'mr' ? 'समस्येचा तपशील *' : 'Detailed Description *'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      currentLang === 'mr'
                        ? 'कृपया वॉर्ड, परिसर आणि समस्येचे स्वरूप थोडक्यात लिहा...'
                        : 'Describe the location, ward number, and nature of the issue...'
                    }
                    className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0220A8] ${
                      errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-rose-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0220A8] hover:bg-[#00177A] text-white text-xs font-bold tracking-wider uppercase rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#FDF219]" />
                  <span>
                    {currentLang === 'mr' ? 'अर्ज सादर करा (प्रात्यक्षिक)' : 'SUBMIT CITIZEN QUERY (DEMO)'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Modal for Article Reading */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-0.5 rounded bg-blue-50 text-[#0220A8] border border-blue-200 text-xs font-mono font-bold uppercase">
                  {selectedArticle.category}
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatBvaDate(selectedArticle.date, currentLang)}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 leading-snug">
                {currentLang === 'mr' ? selectedArticle.titleMr : selectedArticle.titleEn}
              </h3>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-sans">
                <p>{currentLang === 'mr' ? selectedArticle.contentMr : selectedArticle.contentEn}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Public Record Verified</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-xl bg-[#0220A8] text-white text-xs font-bold hover:bg-[#00177A] transition-colors cursor-pointer"
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
