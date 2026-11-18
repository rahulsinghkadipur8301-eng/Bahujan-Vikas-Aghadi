import React, { useState } from 'react';
import { validateGrievanceForm, type GrievanceInput } from '../utils/testableRules';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  currentLang: 'mr' | 'en' | 'hi';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
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

  return (
    <section id="contact" className="relative w-full bg-white py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-4 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0220A8] uppercase tracking-widest mb-1">
            <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-1 ring-amber-400" />
            <span>{currentLang === 'mr' ? 'थेट संपर्क व नागरिक निवारण' : 'CITIZEN CONNECT & SAMVAAD'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-marathi">
            {currentLang === 'mr'
              ? 'आपल्या समस्या व सूचना थेट प्रतिनिधींकडे पाठवा'
              : 'Direct Public Representation & Grievance Cell'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1">
            {currentLang === 'mr'
              ? 'दररोज विरार मध्यवर्ती कार्यालयात नागरिकांच्या तक्रारींची नोंद घेऊन तत्काळ पाठपुरावा केला जातो.'
              : 'Daily open citizen hours at the Virar Central Secretariat for immediate administrative follow-up.'}
          </p>
        </div>

        {/* Independent Demonstration Notice Banner */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-300 text-slate-800 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-slate-900 uppercase tracking-wide">
              {currentLang === 'mr' ? 'अनधिकृत व स्वतंत्र डिजिटल प्रात्यक्षिक सूचना' : 'INDEPENDENT DIGITAL DEMONSTRATION NOTICE'}
            </p>
            <p className="mt-1 text-slate-600 leading-relaxed">
              {currentLang === 'mr'
                ? 'हे संकेतस्थळ बहुजन विकास आघाडी किंवा वसई-विरार शहर महानगरपालिकेशी अधिकृतरीत्या जोडलेले नाही. हा एक स्वतंत्र प्रात्यक्षिक प्रकल्प आहे. येथील फॉर्म हा केवळ यूजर-इंटरफेस चाचणीसाठी असून यातील संदेश प्रत्यक्ष लोकप्रतिनिधी किंवा शासकीय यंत्रणेकडे जात नाहीत.'
                : 'This is an independent design demonstration portal created to illustrate modern web capabilities for the Bahujan Vikas Aaghadi. It is not an officially authorized party platform. Forms on this page operate in local demonstration mode only and do not transmit grievances to elected representatives or civic authorities.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* =========================================================
              LEFT COLUMN (5 cols): Office Details in Royal Logo Blue
              ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0220A8] via-[#00177A] to-[#001050] text-white space-y-6 relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 geo-dots-pattern-dark opacity-10 pointer-events-none" />

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#FDF219] uppercase tracking-widest block mb-1">
                    CENTRAL SECRETARIAT
                  </span>
                  <h3 className="text-xl font-bold font-display text-white">
                    {currentLang === 'mr' ? 'मध्यवर्ती जनसंपर्क कार्यालय' : 'BVA Central Secretariat'}
                  </h3>
                </div>
                <img
                  src="/bva_logo.png"
                  alt="BVA Logo"
                  className="h-7 w-auto object-contain rounded"
                />
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-blue-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FDF219] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white block">
                      {currentLang === 'mr' ? 'पत्ता:' : 'Physical Address:'}
                    </span>
                    <span>
                      Viva College Road, Near Virar Railway Station (East), Virar, Taluka Vasai, District Palghar, Maharashtra 401305
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#FDF219] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white block">
                      {currentLang === 'mr' ? 'थेट जनसंवाद वेळ:' : 'Daily Public Samvaad Hours:'}
                    </span>
                    <span>Monday to Saturday: 9:00 AM – 1:30 PM (Direct Citizen Walk-in)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#FDF219] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white block">
                      {currentLang === 'mr' ? 'नागरी सेवा सूचना:' : 'Civic Grievances Note:'}
                    </span>
                    <span>
                      {currentLang === 'mr'
                        ? 'तातडीच्या महापालिका पाणी किंवा रस्ते समस्यांसाठी प्रत्यक्ष वॉर्ड कार्यालय किंवा वसई-विरार महापालिका अधिकृत पोर्टलचा (vvcmc.in) वापर करावा.'
                        : 'For urgent municipal civic grievances (drinking water leakages, roads), residents may approach their respective VVCMC ward offices or the official municipal portal (vvcmc.in).'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 text-[11px] text-blue-200">
                {currentLang === 'mr'
                  ? 'टीप: प्रत्यक्ष जनसंपर्क कक्षात दररोज नागरिकांच्या लेखी निवेदनांची नोंद घेतली जाते.'
                  : 'Note: Walk-in representations are accepted daily during morning public assembly hours.'}
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN (7 cols): Working Citizen Grievance Form
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
                    className="px-5 py-2.5 bg-[#0220A8] text-white rounded-xl text-xs font-bold hover:bg-[#00177A] transition-colors shadow-xs"
                  >
                    {currentLang === 'mr' ? 'दुसरी चाचणी नोंदणी करा' : 'Submit Another Demo Query'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
                <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {currentLang === 'mr' ? 'नागरिक अर्ज / जनसंवाद फॉर्म (प्रात्यक्षिक)' : 'Citizen Representation Form (UI Demo)'}
                  </h3>
                  <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold">
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
                    rows={4}
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
                  className="w-full py-3.5 bg-[#0220A8] hover:bg-[#00177A] text-white text-xs font-bold tracking-wider uppercase rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#FDF219]" />
                  <span>
                    {currentLang === 'mr' ? 'अर्ज सादर करा' : 'SUBMIT CITIZEN QUERY'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
