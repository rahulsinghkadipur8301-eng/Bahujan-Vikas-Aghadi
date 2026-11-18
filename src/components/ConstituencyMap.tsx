import React, { useState } from 'react';
import { ConstituencySvgMap } from './ConstituencySvgMap';
import {
  MapPin,
  Users,
  Maximize2,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Info,
  Calendar,
  Award
} from 'lucide-react';

interface ConstituencyMapProps {
  currentLang: 'mr' | 'en' | 'hi';
}

interface ConstituencyDossier {
  id: '132' | '133';
  code: string;
  nameEn: string;
  nameMr: string;
  districtEn: string;
  districtMr: string;
  parliamentaryEn: string;
  parliamentaryMr: string;
  sittingMlaEn: string;
  sittingMlaMr: string;
  sittingParty: string;
  electionYear: number;
  votesPolledSitting: string;
  margin: string;
  historicalBvaMlaEn: string;
  historicalBvaMlaMr: string;
  historicalTermsEn: string[];
  historicalTermsMr: string[];
  electorate2024: string;
  areaSqKm: string;
  keyAreasEn: string[];
  keyAreasMr: string[];
  descriptionEn: string;
  descriptionMr: string;
  officialSources: {
    title: string;
    url: string;
    publisher: string;
  }[];
}

const CONSTITUENCIES: Record<'132' | '133', ConstituencyDossier> = {
  '132': {
    id: '132',
    code: '132-NALASOPARA',
    nameEn: '132 — Nalasopara Assembly Constituency',
    nameMr: '१३२ — नालासोपारा विधानसभा मतदारसंघ',
    districtEn: 'Palghar District, Maharashtra',
    districtMr: 'पालघर जिल्हा, महाराष्ट्र',
    parliamentaryEn: '22 — Palghar (ST) Parliamentary Constituency',
    parliamentaryMr: '२२ — पालघर (अ.ज.) लोकसभा मतदारसंघ',
    sittingMlaEn: 'Rajan B. Naik (Elected Nov 2024)',
    sittingMlaMr: 'राजन बी. नाईक (नोव्हेंबर २०२४ मध्ये विजयी)',
    sittingParty: 'Bharatiya Janata Party (BJP)',
    electionYear: 2024,
    votesPolledSitting: '1,32,042 votes (47.2%)',
    margin: '+24,610 over Kshitij Thakur (BVA: 1,07,432 votes)',
    historicalBvaMlaEn: 'Kshitij Thakur (Former 3-Term MLA: 2009–2024)',
    historicalBvaMlaMr: 'क्षितिज ठाकूर (माजी ३-वेळा आमदार: २००९–२०२४)',
    historicalTermsEn: [
      '2009 General Assembly: Won with 89,284 votes (BVA)',
      '2014 General Assembly: Won with 1,13,566 votes (BVA)',
      '2019 General Assembly: Won with 1,49,868 votes (BVA)',
      '2024 General Assembly: Runner-up with 1,07,432 votes (BVA)'
    ],
    historicalTermsMr: [
      '२००९ विधानसभा निवडणूक: ८९,२८४ मते मिळवून विजयी (बविआ)',
      '२०१४ विधानसभा निवडणूक: १,१३,५६६ मते मिळवून विजयी (बविआ)',
      '२०१९ विधानसभा निवडणूक: १,४९,८६८ मते मिळवून विजयी (बविआ)',
      '२०२४ विधानसभा निवडणूक: १,०७,४३२ मते (दुसऱ्या क्रमांकावर, बविआ)'
    ],
    electorate2024: '5,58,416 Registered Voters (ECI 2024 Roll)',
    areaSqKm: '118 sq km',
    keyAreasEn: [
      'Nalasopara East (Achole, Tulinj, Moregaon)',
      'Nalasopara West (Sopara, Nilemore, Samel Pada)',
      'Pelhar & Waliv Industrial MSME Sector',
      'Virar East (Phoolpada, Manvelpada, Chandansar)',
      'Bilalpada & Dhaniv Baug'
    ],
    keyAreasMr: [
      'नालासोपारा पूर्व (आचोळे, तुळिंज, मोरेगाव)',
      'नालासोपारा पश्चिम (सोपारा, निळेमोरे, सामेळ पाडा)',
      'पेल्हार व वालीव औद्योगिक पट्टा',
      'विरार पूर्व (फूलपाडा, मनवेलपाडा, चंदनसार)',
      'बिलालपाडा व धानीव बाग'
    ],
    descriptionEn:
      'Created under Delimitation Order 2008, 132-Nalasopara encompasses the high-density suburban corridor of Nalasopara and Virar East. It was represented across three consecutive assemblies (2009, 2014, 2019) by Kshitij Thakur of the BVA, and is currently represented by Rajan B. Naik (BJP).',
    descriptionMr:
      '२००८ च्या पुनर्रचनेनुसार निर्माण झालेला १३२-नालासोपारा मतदारसंघ हा नालासोपारा व विरार पूर्वचा दाट लोकवस्तीचा नागरी पट्टा आहे. २००९, २०१४ आणि २०१९ च्या तीनही विधानसभांमध्ये बविआचे क्षितिज ठाकूर आमदार राहिले; सध्या नोव्हेंबर २०२४ पासून भाजपचे राजन बी. नाईक प्रतिनिधित्व करत आहेत.',
    officialSources: [
      {
        title: 'Form-20 Final Result Sheet 132-Nalasopara',
        url: 'https://palghar.gov.in/en/form/132-nalasopara-assembly-general-election-2024-sample-20-form-20/',
        publisher: 'District Election Officer, Palghar'
      },
      {
        title: 'Palghar District People’s Representatives Directory',
        url: 'https://palghar.gov.in/en/peoples-representative/',
        publisher: 'District Administration Palghar'
      },
      {
        title: 'CEO Maharashtra Election Maps Portal',
        url: 'https://ceoelection.maharashtra.gov.in/SearchInfo/maps.aspx',
        publisher: 'Chief Electoral Officer, Maharashtra'
      }
    ]
  },
  '133': {
    id: '133',
    code: '133-VASAI',
    nameEn: '133 — Vasai Assembly Constituency',
    nameMr: '१३३ — वसई विधानसभा मतदारसंघ',
    districtEn: 'Palghar District, Maharashtra',
    districtMr: 'पालघर जिल्हा, महाराष्ट्र',
    parliamentaryEn: '22 — Palghar (ST) Parliamentary Constituency',
    parliamentaryMr: '२२ — पालघर (अ.ज.) लोकसभा मतदारसंघ',
    sittingMlaEn: 'Sneha Dube Pandit (Elected Nov 2024)',
    sittingMlaMr: 'स्नेहा दुबे पंडित (नोव्हेंबर २०२४ मध्ये विजयी)',
    sittingParty: 'Bharatiya Janata Party (BJP)',
    electionYear: 2024,
    votesPolledSitting: '1,02,284 votes (48.1%)',
    margin: '+30,336 over Hitendra Thakur (BVA: 71,948 votes)',
    historicalBvaMlaEn: 'Hitendra Thakur (Former 5-Term MLA: 1990–2009, 2014–2019)',
    historicalBvaMlaMr: 'हितेंद्र ठाकूर (माजी ५-वेळा आमदार: १९९०–२००९, २०१४–२०१९)',
    historicalTermsEn: [
      '1990 General Assembly: Won as INC Candidate',
      '1995 & 1999 Assemblies: Won as Independent / VVA',
      '2004 General Assembly: Won as Independent / BVA',
      '2014 General Assembly: Won with 97,291 votes (BVA)',
      '2019 General Assembly: Won with 1,02,945 votes (BVA)',
      '2024 General Assembly: Runner-up with 71,948 votes (BVA)'
    ],
    historicalTermsMr: [
      '१९९० विधानसभा निवडणूक: काँग्रेस उमेदवार म्हणून प्रथम विजयी',
      '१९९५ व १९९९ विधानसभा: अपक्ष / वसई विकास आघाडी म्हणून विजयी',
      '२००४ विधानसभा: अपक्ष / बविआ म्हणून विजयी',
      '२०१४ विधानसभा: ९७,२९१ मते मिळवून विजयी (बविआ)',
      '२०१९ विधानसभा: १,०२,९४५ मते मिळवून विजयी (बविआ)',
      '२०२४ विधानसभा: ७१,९४८ मते (दुसऱ्या क्रमांकावर, बविआ)'
    ],
    electorate2024: '3,34,512 Registered Voters (ECI 2024 Roll)',
    areaSqKm: '162 sq km',
    keyAreasEn: [
      'Vasai West (Manickpur, Papdy, Stella, Chulne)',
      'Historic Vasai Fort & Coastal Fisherfolk Belt',
      'Arnala, Agashi & Bhuigaon Coastal Koliwadas',
      'Naigaon West (Juchandra, Umelman)',
      'Giriz & Agashi Horticultural Banana/Betel-vine Belt'
    ],
    keyAreasMr: [
      'वसई पश्चिम (माणिकपूर, पापडी, स्टेला, चुळणे)',
      'ऐतिहासिक वसई किल्ला व सागरी पट्टा',
      'अर्नाळा, आगाशी व भुईगाव कोळीवाडा',
      'नायगाव पश्चिम (जुचंद्र, उमेळमान)',
      'गिरीज व आगाशी बागायती हरित पट्टा'
    ],
    descriptionEn:
      'The historic cultural, agrarian, and coastal anchor of the region. Represented across five legislative terms by Hitendra Thakur (1990, 1995, 1999, 2004, 2014, 2019), and currently represented by Sneha Dube Pandit (BJP) following the November 2024 election.',
    descriptionMr:
      'वसई-विरारचे ऐतिहासिक, सांस्कृतिक व कृषी-सागरी वैभव. हितेंद्र ठाकूर यांनी ५ विधानसभा कार्यकाळात (१९९०, १९९५, १९९९, २००४, २०१४, २०१९) वसईचे नेतृत्व केले; नोव्हेंबर २०२४ च्या निवडणुकीनंतर भाजपच्या स्नेहा दुबे पंडित प्रतिनिधित्व करत आहेत.',
    officialSources: [
      {
        title: 'Palghar District Representatives Official Directory',
        url: 'https://palghar.gov.in/en/peoples-representative/',
        publisher: 'District Administration Palghar'
      },
      {
        title: 'CEO Maharashtra Assembly Constituencies (PDF)',
        url: 'https://ceoelection.maharashtra.gov.in/Downloads/PDF/ACs.pdf',
        publisher: 'Chief Electoral Officer, Maharashtra'
      },
      {
        title: 'ECI Maharashtra Statistical Returns (1990–2024)',
        url: 'https://www.eci.gov.in/statistical-reports',
        publisher: 'Election Commission of India'
      }
    ]
  }
};

export const ConstituencyMap: React.FC<ConstituencyMapProps> = ({ currentLang }) => {
  const [selectedId, setSelectedId] = useState<'132' | '133'>('132');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);

  const data = CONSTITUENCIES[selectedId];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 1.8));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <section id="constituencies" className="relative w-full bg-white py-14 lg:py-20 border-b border-slate-200 scroll-mt-20">
      <div id="map" className="sr-only" />
      <div className="bva-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0220A8] uppercase tracking-widest mb-1">
              <span className="w-2 h-2 rounded-full bg-[#FDF219] ring-2 ring-[#0220A8]" />
              <span>{currentLang === 'mr' ? 'मतदारसंघ भौगोलिक शोधक' : 'CONSTITUENCY EXPLORER'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-marathi">
              {currentLang === 'mr'
                ? '१३२-नालासोपारा व १३३-वसई विधानसभा मतदारसंघ'
                : '132 - Nalasopara & 133 - Vasai Delimitation Explorer'}
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              {currentLang === 'mr'
                ? 'भारत निवडणूक आयोग (ECI) व पालघर जिल्हा प्रशासनाच्या अधिकृत राजपत्रांनुसार प्रमाणित माहिती.'
                : 'Corroborated against primary gazettes and returns of the Election Commission of India and Palghar District Administration.'}
            </p>
          </div>

          {/* Constituency Segment Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl shrink-0">
            <button
              onClick={() => setSelectedId('132')}
              aria-pressed={selectedId === '132'}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer min-h-[40px] flex items-center gap-1.5 ${
                selectedId === '132'
                  ? 'bg-[#0220A8] text-[#FDF219] shadow-xs'
                  : 'text-slate-700 hover:text-[#0220A8] hover:bg-white/80'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>132 — Nalasopara</span>
            </button>
            <button
              onClick={() => setSelectedId('133')}
              aria-pressed={selectedId === '133'}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer min-h-[40px] flex items-center gap-1.5 ${
                selectedId === '133'
                  ? 'bg-[#0220A8] text-[#FDF219] shadow-xs'
                  : 'text-slate-700 hover:text-[#0220A8] hover:bg-white/80'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>133 — Vasai</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Interactive Map Schematic (Left) + Certified Dossier (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* =========================================================
              LEFT COLUMN (6 cols): Schematic Map Canvas + Controls
              ========================================================= */}
          <div className="lg:col-span-6 bg-slate-50/90 rounded-2xl border border-slate-200 p-5 flex flex-col items-center justify-center relative shadow-inner">
            {/* Disclaimer Pill: Illustrative schematic map */}
            <div className="w-full mb-3 flex items-center justify-between text-[11px] font-mono px-3 py-2 bg-amber-50 border border-amber-200 rounded-xl text-amber-900">
              <span className="flex items-center gap-1.5 font-bold">
                <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>{currentLang === 'mr' ? 'संकल्पनात्मक नकाशा (नॉन-जीआयएस)' : 'ILLUSTRATIVE SCHEMATIC MAP'}</span>
              </span>
              <a
                href="https://ceoelection.maharashtra.gov.in/SearchInfo/maps.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0220A8] underline hover:text-blue-900 flex items-center gap-1 font-semibold"
                title="Open official Maharashtra CEO GIS Maps"
              >
                <span>CEO Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Map Zoom & Reset Controls */}
            <div className="absolute top-16 right-7 z-20 flex flex-col gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
              <button
                onClick={handleZoomIn}
                className="p-1.5 text-slate-600 hover:text-[#0220A8] hover:bg-slate-100 rounded-lg cursor-pointer"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-1.5 text-slate-600 hover:text-[#0220A8] hover:bg-slate-100 rounded-lg cursor-pointer"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 text-slate-600 hover:text-[#0220A8] hover:bg-slate-100 rounded-lg cursor-pointer"
                title="Reset View"
                aria-label="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Map Legend Overlay */}
            <div className="absolute bottom-6 left-6 z-10 bg-white/95 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200 shadow-2xs text-[10px] space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-[#0220A8]" />
                <span className="font-semibold text-slate-800">132 Nalasopara / 133 Vasai</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-1 bg-[#FDF219] rounded ring-1 ring-amber-300" />
                <span className="text-slate-600">Western Rail Line</span>
              </div>
            </div>

            {/* Interactive SVG Map schematic */}
            <div
              className="w-full max-w-sm py-4 transition-transform duration-300 flex items-center justify-center overflow-hidden"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <ConstituencySvgMap
                className="w-full h-auto drop-shadow-md"
                activeConstituency={selectedId}
                onSelectConstituency={(id) => setSelectedId(id as '132' | '133')}
                interactive={true}
                silhouetteColor="#0220A8"
                accentColor="#FDF219"
              />
            </div>

            <p className="text-[10px] font-mono text-slate-400 mt-2 text-center">
              Click either constituency silhouette on the map to switch dossier
            </p>
          </div>

          {/* =========================================================
              RIGHT COLUMN (6 cols): Official Public Dossier
              ========================================================= */}
          <div className="lg:col-span-6 space-y-5">
            {/* Top Identity Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#0220A8] text-xs font-mono font-bold">
                  {data.code}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono">
                  {currentLang === 'mr' ? data.parliamentaryMr : data.parliamentaryEn}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display leading-tight">
                {currentLang === 'mr' ? data.nameMr : data.nameEn}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                {currentLang === 'mr' ? data.districtMr : data.districtEn}
              </p>
            </div>

            {/* Current Representative Panel (2024 General Election) */}
            <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#FDF219]" />
                  <span>{currentLang === 'mr' ? 'विद्यमान आमदार (२०२४ निवडणूक निकाल)' : 'CURRENT ELECTED REPRESENTATIVE (2024)'}</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-900/80 text-blue-200 text-[10px] font-mono font-bold">
                  Nov 2024
                </span>
              </div>

              <div className="text-lg font-bold text-white flex items-center justify-between">
                <span>{currentLang === 'mr' ? data.sittingMlaMr : data.sittingMlaEn}</span>
              </div>

              <p className="text-xs text-slate-300 font-medium">
                Party Affiliation: <span className="text-[#FDF219] font-bold">{data.sittingParty}</span>
              </p>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap justify-between gap-2">
                <span>Votes: <strong className="text-white">{data.votesPolledSitting}</strong></span>
                <span>Margin: <strong className="text-emerald-400">{data.margin}</strong></span>
              </div>
            </div>

            {/* Historical BVA Representation Panel */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0220A8] uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#0220A8]" />
                  <span>{currentLang === 'mr' ? 'बविआ ऐतिहासिक प्रतिनिधित्व' : 'HISTORICAL BVA REPRESENTATION'}</span>
                </span>
                <span className="text-[10px] font-mono font-bold text-blue-800">ECI Certified</span>
              </div>

              <p className="text-sm font-bold text-slate-900">
                {currentLang === 'mr' ? data.historicalBvaMlaMr : data.historicalBvaMlaEn}
              </p>

              <ul className="space-y-1 text-xs text-slate-700 pt-1">
                {(currentLang === 'mr' ? data.historicalTermsMr : data.historicalTermsEn).map((term, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0220A8] shrink-0 mt-0.5" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-bold mb-1">
                  <Users className="w-3.5 h-3.5 text-[#0220A8]" />
                  <span>{currentLang === 'mr' ? 'नोंदणीकृत मतदार' : 'Registered Voters'}</span>
                </div>
                <p className="text-lg font-black text-slate-900 font-display">
                  {data.electorate2024}
                </p>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">2024 ECI Final Roll</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-bold mb-1">
                  <Maximize2 className="w-3.5 h-3.5 text-[#0220A8]" />
                  <span>{currentLang === 'mr' ? 'भौगोलिक क्षेत्र' : 'Constituency Area'}</span>
                </div>
                <p className="text-lg font-black text-[#0220A8] font-display">
                  {data.areaSqKm}
                </p>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">Sq Kilometers Extent</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              {currentLang === 'mr' ? data.descriptionMr : data.descriptionEn}
            </p>

            {/* Key Verified Sectors & Localities */}
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-mono">
                {currentLang === 'mr' ? 'प्रमुख भाग व उपनगरे:' : 'Key Sectors & Localities:'}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {(currentLang === 'mr' ? data.keyAreasMr : data.keyAreasEn).map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 font-medium shadow-2xs"
                  >
                    <MapPin className="w-3 h-3 text-[#0220A8]" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Expandable Official Sources Drawer */}
            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => setIsSourcesOpen(!isSourcesOpen)}
                className="w-full flex items-center justify-between py-2 text-xs font-bold text-[#0220A8] hover:text-blue-900 transition-colors cursor-pointer"
                aria-expanded={isSourcesOpen}
              >
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{currentLang === 'mr' ? 'अधिकृत शासकीय संदर्भ व पुरावे पहा' : 'View Verified Government Data Sources'}</span>
                </span>
                {isSourcesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {isSourcesOpen && (
                <div className="mt-2 p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                  {data.officialSources.map((src, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-2 py-1 border-b border-slate-200 last:border-0">
                      <div>
                        <p className="font-bold text-slate-900">{src.title}</p>
                        <p className="text-[10px] text-slate-500 font-mono">Publisher: {src.publisher}</p>
                      </div>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded bg-[#0220A8] text-white text-[11px] font-bold flex items-center gap-1 shrink-0 hover:bg-[#00177A] transition-colors"
                      >
                        <span>Open</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
