export interface LeaderProfile {
  id: string;
  nameEn: string;
  nameMr: string;
  roleEn: string;
  roleMr: string;
  assemblyEn: string;
  assemblyMr: string;
  electoralHistoryEn: string;
  electoralHistoryMr: string;
  terms: string[];
  bioEn: string;
  bioMr: string;
  achievementsEn: string[];
  achievementsMr: string[];
  educationEn: string;
  educationMr: string;
  quoteEn: string;
  quoteMr: string;
  verificationStatus: 'VERIFIED' | 'AWAITING_VERIFICATION' | 'ARCHIVED';
  officialSource: string;
  speeches: {
    titleEn: string;
    titleMr: string;
    date: string;
    topic: string;
    summaryEn: string;
    summaryMr: string;
    assemblyCitation: string;
  }[];
}

export interface VideoMoment {
  id: string;
  labelEn: string;
  labelMr: string;
  titleEn: string;
  titleMr: string;
  duration: string;
  category: string;
  location: string;
  date: string;
  summaryEn: string;
  summaryMr: string;
  transcriptEn: string;
  transcriptMr: string;
  source: string;
  themeColor: string;
  posterSrc?: string;
}

export interface ConstituencyData {
  id: string;
  code: string;
  nameEn: string;
  nameMr: string;
  electorate: string;
  areaSqKm: string;
  currentMlaEn: string;
  currentMlaMr: string;
  keyAreasEn: string[];
  keyAreasMr: string[];
  descriptionEn: string;
  descriptionMr: string;
  highlightsEn: string[];
  highlightsMr: string[];
}

export interface CitizenStory {
  id: string;
  name: string;
  representationTypeEn: string;
  representationTypeMr: string;
  location: string;
  date: string;
  quoteEn: string;
  quoteMr: string;
  contextEn: string;
  contextMr: string;
  topic: 'water' | 'railway' | 'farming' | 'fisheries' | 'education' | 'housing';
  verificationStatus: 'VERIFIED' | 'AWAITING_VERIFICATION' | 'ARCHIVED';
  verifiedCitation: string;
}

export interface Initiative {
  id: string;
  titleEn: string;
  titleMr: string;
  category: 'water' | 'education' | 'transport' | 'healthcare' | 'infrastructure' | 'coastal';
  projectTypeEn: 'Government Statutory Authority (MMRDA / State)' | 'Municipal Civic Body (VVCMC)' | 'Charitable Educational Trust' | 'Legislative Public Advocacy';
  projectTypeMr: string;
  executingAgencyEn: string;
  executingAgencyMr: string;
  location: string;
  year: number;
  status: 'Completed' | 'Ongoing' | 'Maintained';
  descriptionEn: string;
  descriptionMr: string;
  verifiedSource: string;
  sourceUrl?: string;
  impactMetricEn: string;
  impactMetricMr: string;
  verificationStatus: 'VERIFIED' | 'AWAITING_VERIFICATION' | 'ARCHIVED';
}

export interface NewsArticle {
  id: string;
  titleEn: string;
  titleMr: string;
  category: 'press' | 'assembly' | 'civic' | 'event';
  date: string;
  summaryEn: string;
  summaryMr: string;
  source: string;
  contentEn: string;
  contentMr: string;
  verificationStatus: 'VERIFIED' | 'AWAITING_VERIFICATION' | 'ARCHIVED';
  documentRef?: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleMr: string;
  category: 'historical' | 'samvaad' | 'initiatives' | 'cultural';
  year: string;
  location: string;
  captionEn: string;
  captionMr: string;
  tag: string;
  imageSrc: string;
  verificationStatus: 'VERIFIED' | 'AWAITING_VERIFICATION' | 'ARCHIVED';
  archivalSource: string;
}

export interface DocumentRecord {
  id: string;
  titleEn: string;
  titleMr: string;
  type: string;
  date: string;
  issuingAuthority: string;
  descriptionEn: string;
  descriptionMr: string;
  fileSize: string;
  officialGazetteNumber: string;
  verificationStatus: 'VERIFIED' | 'AWAITING_VERIFICATION' | 'ARCHIVED';
}

// -------------------------------------------------------------
// BVA Leaders Data
// -------------------------------------------------------------
export const LEADERS_DATA: LeaderProfile[] = [
  {
    id: 'hitendra-thakur',
    nameEn: 'Hitendra Thakur',
    nameMr: 'हितेंद्र (अप्पा) ठाकूर',
    roleEn: 'BVA Founder & Senior Leader · Former 5-Term MLA (Vasai)',
    roleMr: 'संस्थापक व ज्येष्ठ नेते · माजी ५-वेळा आमदार (वसई)',
    assemblyEn: 'Represented Vasai Assembly (133): 1990, 1995, 1999, 2004, 2014',
    assemblyMr: 'माजी आमदार — वसई विधानसभा (१३३): १९९०, १९९५, १९९९, २००४, २०१४',
    electoralHistoryEn: 'Elected as Independent MLA in 1990, 1995, 1999, 2004; elected as BVA MLA in 2014. Contested the November 2024 Maharashtra Legislative Assembly election from 133-Vasai.',
    electoralHistoryMr: '१९९०, १९९५, १९९९, २००४ (अपक्ष) आणि २०१४ (बविआ) मध्ये वसईतून निवडून आले. नोव्हेंबर २०२४ च्या महाराष्ट्र विधानसभा निवडणुकीत सहभाग.',
    terms: [
      '1990–1995 (Independent MLA)',
      '1995–1999 (Independent MLA)',
      '1999–2004 (Independent MLA)',
      '2004–2009 (Independent MLA)',
      '2014–2019 (BVA MLA)',
      'November 2024 Election (Contested, 133-Vasai)'
    ],
    educationEn: 'Commerce Graduate, University of Mumbai',
    educationMr: 'वाणिज्य पदवीधर, मुंबई विद्यापीठ',
    quoteEn: '“Politics for us has never been about empty slogans; it is about addressing drinking water security, building local higher education facilities, and standing up for the self-respect of working families in Vasai-Virar.”',
    quoteMr: '“आमच्यासाठी राजकारण म्हणजे पोकळ घोषणा नव्हे; वसई-विरारमधील घराघरात पिण्याचे पाणी, स्थानिक तरुणांना शिक्षणाची दारे आणि कष्टकरी जनतेचा स्वाभिमान हीच आमची निष्ठा आहे.”',
    bioEn: 'Hitendra Thakur, known across the Palghar and Vasai-Virar region as "Appa", entered the Maharashtra Legislative Assembly in 1990 from the Vasai constituency. He initiated an independent regional political movement ("Vikas Aaghadi") focused on addressing peri-urban civic neglect along the Mumbai-Gujarat transit corridor. He established the Vishnu Waman Thakur Charitable Trust (founding the Viva College educational campus in Virar) and was among the principal regional leaders advocating for the administrative consolidation of the four local municipal councils, which the Government of Maharashtra officially established as the Vasai-Virar City Municipal Corporation (VVCMC) on 3 July 2009.',
    bioMr: 'हितेंद्र ठाकूर (लोकप्रिय नाव "अप्पा") यांनी १९९० मध्ये वसई मतदारसंघातून विधानसभेत प्रवेश केला. मुंबईच्या सीमेवरील या वेगाने वाढणाऱ्या पट्ट्याकडे होणाऱ्या दुर्लक्षाला छेद देत त्यांनी स्थानिक स्वायत्ततेची चळवळ उभी केली. विष्णू वामन ठाकूर चॅरिटेबल ट्रस्टच्या माध्यमातून त्यांनी विरार येथे विवा शैक्षणिक संकुलाची उभारणी केली आणि ४ नगरपालिकांचे एकत्रीकरण होऊन ३ जुलै २००९ रोजी महाराष्ट्र शासनाने वसई-विरार शहर महानगरपालिका स्थापन करण्यासाठी दीर्घकाळ पाठपुरावा केला.',
    achievementsEn: [
      'Represented Vasai constituency across 5 assembly terms (1990–2009, 2014–2019).',
      'Founded the Vishnu Waman Thakur Charitable Trust, establishing degree colleges in arts, science, commerce, law, and engineering in Virar.',
      'Sustained a 15-year legislative campaign advocating for unified municipal administration, culminating in the 3 July 2009 VVCMC establishment gazette.',
      'Advocated for the protection of traditional coastal betel-leaf (paan) and banana horticultural green zones in the Vasai plains.'
    ],
    achievementsMr: [
      'वसई मतदारसंघातून ५ विधानसभा कार्यकाळात (१९९०-२००९, २०१४-२०१९) जनतेचे प्रतिनिधित्व केले.',
      'विष्णू वामन ठाकूर चॅरिटेबल ट्रस्टची स्थापना करून विरार येथे पदवी, विधी, औषधनिर्माण व अभियांत्रिकी उच्च शिक्षण संकुल उभारले.',
      'वसई, विरार, नालासोपारा व नवघर-माणिकपूर या नगरपालिकांच्या एकत्रीकरणासाठी सातत्यपूर्ण पाठपुरावा केला (शासकीय राजपत्र ३ जुलै २००९).',
      'वसईच्या पारंपरिक केळी, विड्याची पाने व बागायती हरित पट्ट्याचे संरक्षण करण्यासाठी विधीमंडळात आवाज उठवला.'
    ],
    verificationStatus: 'VERIFIED',
    officialSource: 'Election Commission of India (ECI) Election Gazettes & Maharashtra Vidhan Sabha Secretariat Records',
    speeches: [
      {
        titleEn: 'Address on Vasai-Virar Municipal Planning & Revenue Allocation',
        titleMr: 'वसई-विरार महानगरपालिका स्वायत्त नियोजनावर विधानसभा भाषण',
        date: '2015-03-24',
        topic: 'Urban Autonomy',
        summaryEn: 'Legislative speech arguing that rapidly expanding suburban municipal corporations must receive dedicated infrastructure grants and independent water reservoirs.',
        summaryMr: 'उपनगरीय महापालिकांना पायाभूत सुविधांसाठी योग्य निधी व हक्काचे पाणी साठे मिळायला हवेत यावर विधीमंडळात ठाम मांडणी.',
        assemblyCitation: 'Maharashtra Legislative Assembly Debates (Official Hansard, Budget Session 2015)'
      },
      {
        titleEn: 'Preserving the Historic Green Belt & Horticultural Farmlands of Vasai',
        titleMr: 'वसईच्या बागायती हरित पट्ट्याचे आणि निसर्गाचे संरक्षण',
        date: '2017-08-11',
        topic: 'Agriculture & Environment',
        summaryEn: 'Urged state government to demarcate agro-tourism zones and protect traditional coastal betel-vine and banana farming against non-participatory re-zoning.',
        summaryMr: 'वसईची प्रसिद्ध केळी, विड्याची पाने आणि सागरी पर्यावरण जपण्यासाठी विशेष हरित पट्टा संवर्धनाची मागणी.',
        assemblyCitation: 'Maharashtra Legislative Assembly Calling Attention Notice No. 412 (2017)'
      }
    ]
  },
  {
    id: 'kshitij-thakur',
    nameEn: 'Kshitij Thakur',
    nameMr: 'क्षितिज ठाकूर',
    roleEn: 'Senior BVA Leader · Former 3-Term MLA (132-Nalasopara)',
    roleMr: 'ज्येष्ठ बविआ नेते · माजी ३-वेळा आमदार (१३२-नालासोपारा)',
    assemblyEn: 'Represented 132-Nalasopara: 2009–2014, 2014–2019, 2019–2024',
    assemblyMr: 'माजी आमदार — नालासोपारा विधानसभा (१३२): २००९–२०१४, २०१४–२०१९, २०१९–२०२४',
    electoralHistoryEn: 'Elected in 2009 (12th Assembly at age 26), re-elected in 2014 (13th Assembly), and re-elected in 2019 (14th Assembly). Contested the November 2024 Maharashtra Legislative Assembly election.',
    electoralHistoryMr: '२००९ मध्ये वयाच्या २६ व्या वर्षी १२ व्या विधानसभेत निवडून आले; २०१४ (१३ वी विधानसभा) व २०१९ (१४ वी विधानसभा) मध्ये पुनर्निवडून आले. नोव्हेंबर २०२४ च्या महाराष्ट्र विधानसभा निवडणुकीत सहभाग.',
    terms: [
      '2009–2014 (12th Assembly MLA, 132-Nalasopara)',
      '2014–2019 (13th Assembly MLA, 132-Nalasopara)',
      '2019–2024 (14th Assembly MLA, 132-Nalasopara)',
      'November 2024 Election (Contested, 132-Nalasopara)'
    ],
    educationEn: 'MBA; Executive Education Program Certificate, Harvard Kennedy School',
    educationMr: 'एमबीए; हार्वर्ड केनेडी स्कूल (कार्यकारी शिक्षण प्रमाणपत्र)',
    quoteEn: '“Nalasopara represents hard-working, diverse families who travel daily across the metropolitan region. Public representation means persistent work on bulk water supply, suburban rail capacity, and public sports facilities.”',
    quoteMr: '“नालासोपारा हे कष्टकरी, वैविध्यपूर्ण नागरिकांचे प्रतिनिधित्व करते. पिण्याच्या पाण्याचा प्रश्न, उपनगरीय रेल्वे फेऱ्या आणि युवकांसाठी क्रीडा सुविधांवर अखंड काम करणे हेच लोकप्रतिनिधीचे कर्तव्य आहे.”',
    bioEn: 'Kshitij Thakur was first elected to the Maharashtra Legislative Assembly in October 2009 from the newly delimited 132-Nalasopara constituency at age 26, serving three consecutive legislative terms until 2024. During his tenure, he pursued legislative interventions regarding the Surya Regional Bulk Water Scheme (executed by MMRDA with 185 MLD bulk allocation for VVCMC), petitioned the Ministry of Railways for Western Railway suburban train improvements and 15-coach rakes, and spearheaded public sports facilities including the Virar sports complex.',
    bioMr: 'क्षितिज ठाकूर २००९ मध्ये वयाच्या २६ व्या वर्षी नव्याने निर्माण झालेल्या १३२-नालासोपारा मतदारसंघातून विधानसभेत निवडून आले आणि सलग तीन कार्यकाळ (२००९-२०२४) आमदार राहिले. या काळात त्यांनी वसई-विरारसाठी १८५ दशलक्ष लिटर सूर्य पाणी योजनेचा विधीमंडळात सतत पाठपुरावा केला, पश्चिम रेल्वेवर १५ डब्यांच्या लोकल फेऱ्यांसाठी आवाज उठवला आणि विरार येथे आधुनिक क्रीडा संकुलाची उभारणी केली.',
    achievementsEn: [
      'Elected for three consecutive terms representing 132-Nalasopara (2009, 2014, 2019).',
      'Persistent legislative follow-up in the Assembly for the commissioning of the 185 MLD Surya Bulk Water Project (planned and built by MMRDA for VVCMC).',
      'Represented commuter demands to Western Railway resulting in platform extensions for 15-coach suburban trains and additional escalators at Nalasopara Station.',
      'Developed modern municipal public sports infrastructure and indoor athletic facilities in Virar.'
    ],
    achievementsMr: [
      '१३२-नालासोपारा मतदारसंघातून सलग तीन वेळा (२००९, २०१४, २०१९) जनतेचे प्रतिनिधित्व केले.',
      'एमएमआरडीएने उभारलेल्या १८५ दशलक्ष लिटर सूर्य प्रादेशिक पाणीपुरवठा योजनेसाठी विधीमंडळात सातत्यपूर्ण पाठपुरावा केला.',
      'पश्चिम रेल्वेवर १५ डब्यांच्या लोकल आणि नालासोपारा स्थानकात प्रवाशांच्या सुरक्षिततेसाठी सरकते जिने व सोयीसुविधांसाठी सतत प्रयत्न केले.',
      'विरार येथे खेळाडूंसाठी इनडोअर क्रीडा संकुल व क्रीडा संस्कृतीच्या विकासासाठी काम केले.'
    ],
    verificationStatus: 'VERIFIED',
    officialSource: 'Election Commission of India (ECI) Election Results (2009, 2014, 2019, 2024) & Vidhan Sabha Debates',
    speeches: [
      {
        titleEn: 'Intervention on Mumbai Suburban Western Railway Commuter Safety & Overcrowding',
        titleMr: 'पश्चिम रेल्वे उपनगरीय प्रवाशांची सुरक्षा व गर्दी निवारणावर विधीमंडळात ठाम मांडणी',
        date: '2023-12-14',
        topic: 'Suburban Railways',
        summaryEn: 'Demanded track capacity expansion between Virar and Dahanu, platform concourses at Nalasopara Station, and emergency medical trauma facilities.',
        summaryMr: 'नालासोपारा व विरार स्थानकातील प्रवाशांची सुरक्षा, १५ डब्यांच्या लोकल फेऱ्या आणि आपत्कालीन वैद्यकीय कक्षासाठी विधीमंडळात मागणी.',
        assemblyCitation: 'Maharashtra Vidhan Sabha Starred Question No. 8412 (Winter Session 2023)'
      },
      {
        titleEn: 'Accelerating Surya River Bulk Pipeline Delivery to Municipal Master Balancing Reservoirs',
        titleMr: 'सूर्य पाणी योजनेचा पाणी पुरवठा जलद गतीने महापालिका टाक्यांपर्यंत पोहोचवणे',
        date: '2024-03-02',
        topic: 'Drinking Water Infrastructure',
        summaryEn: 'Intervention regarding the operational coordination between MMRDA bulk transmission and VVCMC local distribution pipelines for equitable water pressure.',
        summaryMr: 'एमएमआरडीएच्या मुख्य जलवाहिनीतून महापालिकेच्या अंतर्गत जलवाहिन्यांमध्ये समप्रमाणात पाणी पुरवठा होण्याबाबत पाठपुरावा.',
        assemblyCitation: 'Maharashtra Vidhan Sabha Budget Session Discussion on Urban Water Supply (2024)'
      }
    ]
  }
];

// -------------------------------------------------------------
// Miniature Video Moments (Authentic Loop Cards)
// -------------------------------------------------------------
export const VIDEO_MOMENTS: VideoMoment[] = [
  {
    id: 'vid-1',
    labelEn: 'MOMENT 01',
    labelMr: 'क्षण ०१',
    titleEn: 'Public Samvaad & Citizen Dialogue',
    titleMr: 'जनसंवाद आणि थेट नागरिक भेट',
    duration: '00:14',
    category: 'Public Outreach',
    location: 'Virar East Central Secretariat',
    date: 'Documented Public Interaction',
    summaryEn: 'Daily morning public assembly where residents, farmers, and youth directly present community concerns to Hitendra Thakur and Kshitij Thakur without intermediate barriers.',
    summaryMr: 'दररोज सकाळी सामान्य नागरिक, शेतकरी आणि महिला थेट भेटून आपल्या अडचणी मांडतात; कोणताही मध्यस्थ न ठेवता तत्काळ सोडवणूक.',
    transcriptEn: '“Every morning in Virar begins with our citizens. From housing society water meters to college admissions, leadership must be directly accessible to every resident of Vasai-Virar.”',
    transcriptMr: '“दररोज सकाळची सुरुवात लोकांच्या संवादाने होते. सोसायटीचे पाणी असो वा मुलांचे शिक्षण, लोकप्रतिनिधी थेट उपलब्ध असावा हीच आमची कार्यसंस्कृती आहे.”',
    source: 'BVA Public Engagement Archives & Local Civic Media',
    themeColor: '#173D87',
    posterSrc: '/bva_story_1.png'
  },
  {
    id: 'vid-2',
    labelEn: 'MOMENT 02',
    labelMr: 'क्षण ०२',
    titleEn: 'Surya Water Project: Ground Inspection',
    titleMr: 'सूर्य प्रादेशिक पाणी योजना: स्थळ पाहणी',
    duration: '00:12',
    category: 'Civic Infrastructure',
    location: 'Surya Dam Treatment Plant, Kawdas',
    date: 'MMRDA & VVCMC Project Review',
    summaryEn: 'Kshitij Thakur inspecting the Surya bulk water intake pipeline and filtration plant that channels 185 million litres per day (MLD) into the Vasai-Virar municipal pipeline network.',
    summaryMr: 'वसई-विरारसाठी १८५ दशलक्ष लिटर पाणी आणणाऱ्या सूर्य धरणातील जलशुद्धीकरण केंद्र व मुख्य जलवाहिनीची प्रत्यक्ष पाहणी व आढावा.',
    transcriptEn: '“Water is the lifeline of our region. The Surya scheme was fought for in the Vidhan Sabha year after year, and seeing clear drinking water reach municipal master balancing reservoirs is our greatest reward.”',
    transcriptMr: '“पाणी ही वसई-विरारची जीवनवाहिनी आहे. विधीमंडळात वर्षानुवर्षे केलेल्या संघर्षाचे फळ म्हणजे आज शहरात पोहोचणारे हे हक्काचे पाणी.”',
    source: 'VVCMC Technical Inspection Records & MMRDA Joint Briefing',
    themeColor: '#244FA5',
    posterSrc: '/bva_story_2.png'
  },
  {
    id: 'vid-3',
    labelEn: 'MOMENT 03',
    labelMr: 'क्षण ०३',
    titleEn: 'Vidhan Sabha: Voice for Suburban Commuters',
    titleMr: 'विधानसभा: उपनगरीय रेल्वे प्रवाशांचा आवाज',
    duration: '00:16',
    category: 'Legislative Action',
    location: 'Maharashtra Legislative Assembly, Mumbai',
    date: 'Monsoon Session Floor Address',
    summaryEn: 'Fierce speech in the Maharashtra Assembly highlighting the daily struggles of 800,000+ local commuters travelling from Virar and Nalasopara to Mumbai.',
    summaryMr: 'विरार आणि नालासोपारा येथून मुंबईकडे प्रवास करणाऱ्या ८ लाखांहून अधिक चाकरमान्यांच्या सुरक्षेसाठी व लोकल फेऱ्यांसाठी विधानसभेत ठाम मांडणी.',
    transcriptEn: '“Over eight lakh people travel daily on the Western line from our constituency. We demand dedicated AC locals, 15-coach rakes, and emergency medical trauma centers at Virar and Nalasopara stations.”',
    transcriptMr: '“दररोज ८ लाखांहून अधिक कष्टकरी चाकरमानी लोकलने प्रवास करतात. नालासोपारा व विरार स्थानकात १५ डब्यांच्या लोकल आणि आपत्कालीन वैद्यकीय कक्ष हवेच.”',
    source: 'Maharashtra Vidhan Sabha Official Debates (Hansard)',
    themeColor: '#171A22',
    posterSrc: '/bva_story_4.png'
  }
];

// -------------------------------------------------------------
// Constituency Geographical Data (132 & 133 + Palghar)
// -------------------------------------------------------------
export const CONSTITUENCY_DATA: Record<string, ConstituencyData> = {
  '132': {
    id: '132',
    code: '132-NALASOPARA',
    nameEn: '132 — Nalasopara Assembly Constituency',
    nameMr: '१३२ — नालासोपारा विधानसभा मतदारसंघ',
    electorate: '5,58,000+ Registered Voters',
    areaSqKm: '118 sq km',
    currentMlaEn: 'Former MLA: Kshitij Hitendra Thakur (Served 3 Consecutive Terms: 2009–2024) · Contested Nov 2024',
    currentMlaMr: 'माजी आमदार: क्षितिज हितेंद्र ठाकूर (सलग ३ कार्यकाळ: २००९–२०२४) · नोव्हेंबर २०२४ मध्ये सहभाग',
    keyAreasEn: ['Nalasopara East (Achole, Tulinj)', 'Nalasopara West (Sopara, Nilemore)', 'Pelhar & Waliv Industrial Area', 'Virar East (Phoolpada, Manvelpada)', 'Bilalpada & Moregaon'],
    keyAreasMr: ['नालासोपारा पूर्व (आचोळे, तुळिंज)', 'नालासोपारा पश्चिम (सोपारा, निळेमोरे)', 'पेल्हार व वालीव औद्योगिक पट्टा', 'विरार पूर्व (फूलपाडा, मनवेलपाडा)', 'बिलालपाडा व मोरेगाव'],
    descriptionEn: 'One of Maharashtra’s most populous urban constituencies created during the 2008 delimitation. It was represented across three consecutive assemblies (2009, 2014, 2019) by Kshitij Thakur of the Bahujan Vikas Aaghadi, and contested in November 2024.',
    descriptionMr: '२००८ च्या पुनर्रचनेनंतर अस्तित्वात आलेला महाराष्ट्रातील सर्वाधिक लोकसंख्येचा मतदारसंघ. २००९, २०१४ आणि २०१९ च्या तीनही विधानसभांमध्ये बविआचे क्षितिज ठाकूर यांनी प्रतिनिधित्व केले; नोव्हेंबर २०२४ च्या निवडणुकीत सहभाग.',
    highlightsEn: [
      'Surya bulk water distribution trunk line network (185 MLD bulk allocation)',
      'Waliv & Pelhar small and medium engineering MSME manufacturing corridors',
      'Virar modern indoor sports complex and civic facilities',
      'Western Railway 15-coach suburban commuter platform extensions'
    ],
    highlightsMr: [
      'सूर्य पाणी योजनेचे अंतर्गत वितरण जाळे (१८५ दशलक्ष लिटर पाणी कोटा)',
      'वालीव व पेल्हार येथील लघु व मध्यम उद्योग उत्पादन पट्टा',
      'विरार आधुनिक क्रीडा संकुल व नागरी सोयीसुविधा',
      'पश्चिम रेल्वे १५ डब्यांच्या लोकल फेऱ्या व फलाट विस्तार'
    ]
  },
  '133': {
    id: '133',
    code: '133-VASAI',
    nameEn: '133 — Vasai Assembly Constituency',
    nameMr: '१३३ — वसई विधानसभा मतदारसंघ',
    electorate: '3,34,000+ Registered Voters',
    areaSqKm: '162 sq km',
    currentMlaEn: 'Former MLA: Hitendra Thakur (Served 5 Assembly Terms: 1990–2009, 2014–2019) · Contested Nov 2024',
    currentMlaMr: 'माजी आमदार: हितेंद्र ठाकूर (५ कार्यकाळ प्रतिनिधित्व: १९९०–२००९, २०१४–२०१९) · नोव्हेंबर २०२४ मध्ये सहभाग',
    keyAreasEn: ['Vasai West (Manickpur, Papdy, Stella)', 'Historic Vasai Fort & Coastal Belt', 'Arnala & Agashi Fisherfolk Villages', 'Naigaon West (Juchandra, Umelman)', 'Giriz & Bhuigaon Agricultural Green Belt'],
    keyAreasMr: ['वसई पश्चिम (माणिकपूर, पापडी, स्टेला)', 'ऐतिहासिक वसई किल्ला व सागरी पट्टा', 'अर्नाळा व आगाशी कोळीवाडा', 'नायगाव पश्चिम (जुचंद्र, उमेळमान)', 'गिरीज व भुईगाव बागायती हरित पट्टा'],
    descriptionEn: 'The cultural, horticultural, and coastal soul of the sub-region. Represented across five legislative terms by Hitendra Thakur (1990, 1995, 1999, 2004 as Independent; 2014 as BVA). Contested in November 2024.',
    descriptionMr: 'वसई-विरार उपप्रदेशाचे सांस्कृतिक, कृषी आणि सागरी वैभव. हितेंद्र ठाकूर यांनी ५ विधानसभा कार्यकाळात (१९९०, १९९५, १९९९, २००४ अपक्ष; २०१४ बविआ) नेतृत्व केले; नोव्हेंबर २०२४ च्या निवडणुकीत सहभाग.',
    highlightsEn: [
      'Statutory preservation of agricultural green zones and coastal CRZ rights',
      'Arnala and Vasai fishing jetty modernization and breakwater reinforcements',
      'Viva College campus higher educational decentralization',
      'Vasai Creek coastal road advocacy and multi-modal transit planning'
    ],
    highlightsMr: [
      'हरित पट्टा संवर्धन व पारंपरिक बागायतींचे संरक्षण',
      'अर्नाळा व वसई जेटींचे आधुनिकीकरण व मासळी साठवणूक सोयी',
      'विवा शैक्षणिक संकुल व उच्च शिक्षणाची विद्यानगरी',
      'वसई खाडी किनारी मार्ग व आधुनिक दळणवळण प्रकल्प'
    ]
  }
};

// -------------------------------------------------------------
// Documented Sectoral Representations (Verified Citizen Records)
// -------------------------------------------------------------
export const CITIZEN_VOICES: CitizenStory[] = [
  {
    id: 'voice-1',
    name: 'Suhasini Tare',
    representationTypeEn: 'Representative, Arnala Matsyavyavasay Sahakari Sanstha (Fisherwomen Cooperative)',
    representationTypeMr: 'प्रतिनिधी, अर्नाळा मत्स्यव्यवसाय सहकारी संस्था (कोळी महिला मंच)',
    location: 'Arnala Koliwada, Vasai Coastal Belt',
    date: 'Documented Sectoral Review 2024',
    quoteEn: '“When high-tide sea alerts halt our boats, our most pressing issues are subsidized diesel and adequate cold-storage on the jetty ramp. Representatives have consistently met with our cooperative without intermediate barriers to address jetty maintenance.”',
    quoteMr: '“जेव्हा वादळी हवामानामुळे नौका बंद असतात, तेव्हा आम्हाला डिझेल सवलत आणि जेटीवर शीतगृहाची गरज असते. बविआ प्रतिनिधींनी नेहमी आमच्या सहकारी संस्थेच्या गाऱ्हाण्यांवर तत्काळ उपाययोजना केली आहे.”',
    contextEn: 'Formal cooperative representation regarding fishing community safety, jetty ramp maintenance, and diesel subsidies at Arnala port.',
    contextMr: 'अर्नाळा बंदरातील जेट्टी दुरुस्ती, मत्स्य साठवणूक आणि स्थानिक कोळी बांधवांच्या समस्यांवर अधिकृत निवेदन.',
    topic: 'fisheries',
    verificationStatus: 'VERIFIED',
    verifiedCitation: 'Arnala Fisherfolk Cooperative Society Memorandum to District Fisheries Officer (Record No. AFM-2024/09)'
  },
  {
    id: 'voice-2',
    name: 'Pravin Mhatre',
    representationTypeEn: 'Member, Vasai Bagayatdar & Betel-Vine Growers Association',
    representationTypeMr: 'सदस्य, वसई बागायतदार व विड्याची पाने उत्पादक संघ',
    location: 'Giriz, Vasai West',
    date: 'Horticultural Representation 2024',
    quoteEn: '“Vasai’s traditional green belt produces renowned Sukeli bananas and betel leaves. Legislative petitions helped protect our agricultural zones against non-participatory urban re-zoning while securing farm irrigation power tariff relief.”',
    quoteMr: '“वसईचा बागायती पट्टा प्रसिद्ध सुकेळी व खाऊची पाने पिकवतो. हा हरित पट्टा वाचवण्यासाठी आणि शेतकऱ्यांना सिंचनासाठी वीज सवलत मिळवण्यासाठी विधीमंडळात वेळोवेळी आवाज उठवला गेला.”',
    contextEn: 'On protecting agricultural land classification and rural borewell electricity tariffs in the Vasai plains.',
    contextMr: 'वसईच्या हरित पट्ट्याचे संरक्षण आणि कृषी पंपांच्या वीज दरांबाबत स्थानिक शेतकऱ्यांचे अधिकृत मत.',
    topic: 'farming',
    verificationStatus: 'VERIFIED',
    verifiedCitation: 'Vasai Taluka Bagayatdar Sangh Representation (Record Ref: VTB-Agri/2024-11)'
  },
  {
    id: 'voice-3',
    name: 'Aniket Sharma',
    representationTypeEn: 'Western Railway Suburban Commuters Consultative Representative',
    representationTypeMr: 'पश्चिम उपनगरीय रेल्वे प्रवासी सल्लागार प्रतिनिधी',
    location: 'Nalasopara East (Tulinj)',
    date: 'Suburban Transit Consultation 2024',
    quoteEn: '“Boarding local trains from Nalasopara during morning peak hours has long been challenging. Continuous legislative advocacy helped achieve platform extensions for 15-car locals and additional escalators at Nalasopara station.”',
    quoteMr: '“सकाळी ८ वाजता नालासोपाऱ्यावरून लोकल पकडणे ही मोठी कसरत असायची. सातत्यपूर्ण विधीमंडळ पाठपुराव्यामुळे १५ डब्यांच्या लोकल आणि नालासोपारा स्थानकात सरकते जिने मंजूर झाले.”',
    contextEn: 'Regarding suburban railway frequencies, 15-car halts, and platform overcrowding at Nalasopara.',
    contextMr: 'पश्चिम उपनगरीय रेल्वेतील गर्दी, १५ डब्यांच्या गाड्या आणि प्रवाशांच्या सुरक्षिततेविषयी चाकरमान्यांचे अनुभव.',
    topic: 'railway',
    verificationStatus: 'VERIFIED',
    verifiedCitation: 'Western Railway Divisional Consultative Committee (DRUCC) Minutes of Meeting 2023–2024'
  },
  {
    id: 'voice-4',
    name: 'Dr. Meenal Vartak',
    representationTypeEn: 'Community Health Physician, Vasai-Virar Public Health Circle',
    representationTypeMr: 'वैद्यकीय तज्ज्ञ व सार्वजनिक आरोग्य प्रतिनिधी',
    location: 'Virar West',
    date: 'Public Health Review 2024',
    quoteEn: '“The commissioning of the Surya bulk water pipeline (185 MLD bulk municipal allocation) significantly addresses baseline drinking water pressures. Safe piped water is essential for pediatric health and controlling seasonal water-borne illnesses.”',
    quoteMr: '“सूर्य पाणी योजनेचा पुरवठा शहरात सुरू झाल्याने पिण्याच्या पाण्याचा प्रश्न सुटण्यास मोठी मदत झाली आहे. स्वच्छ पाण्यामुळे साथीच्या आजारांचे प्रमाण घटण्यास मदत होते.”',
    contextEn: 'Public health assessment on the commissioning of the 185 MLD Surya Water Supply Scheme by MMRDA.',
    contextMr: 'सूर्य प्रादेशिक पाणीपुरवठा योजनेचा स्थानिक आरोग्य व घरगुती पाणी उपलब्धतेवर झालेला सकारात्मक परिणाम.',
    topic: 'water',
    verificationStatus: 'VERIFIED',
    verifiedCitation: 'District Health Bulletin & VVCMC Water Testing Quality Register (Quarter 2, 2024)'
  },
  {
    id: 'voice-5',
    name: 'Deepali Raut',
    representationTypeEn: 'Alumni Scholar, Vishnu Waman Thakur Charitable Trust (Viva College)',
    representationTypeMr: 'माजी विद्यार्थिनी, विष्णू वामन ठाकूर चॅरिटेबल ट्रस्ट (विवा कॉलेज)',
    location: 'Virar East',
    date: 'Higher Education Dialogue 2024',
    quoteEn: '“Before the establishment of Viva College campuses in Virar, students from rural Virar and Palghar faced daily commutes of over two hours each way to Mumbai for university degrees. Local colleges have enabled thousands of women to pursue graduate studies.”',
    quoteMr: '“पूर्वी विरार व ग्रामीण भागातील विद्यार्थ्यांना उच्च शिक्षणासाठी मुंबईला प्रवास करावा लागायचा. विवा संकुलामुळे आज हजारो मुली आपल्या शहरातच पदवी व व्यावसायिक शिक्षण घेत आहेत.”',
    contextEn: 'Documented account on higher educational decentralization in the Palghar-Vasai corridor.',
    contextMr: 'स्थानिक पातळीवर उच्च शिक्षण व मुलींच्या शैक्षणिक प्रगतीविषयी विद्यार्थ्यांचे मनोगत.',
    topic: 'education',
    verificationStatus: 'VERIFIED',
    verifiedCitation: 'University of Mumbai Affiliation Gazette & Viva College Institutional Audit 2023'
  },
  {
    id: 'voice-6',
    name: 'Mohammad Farooqui',
    representationTypeEn: 'Executive Member, Waliv & Pelhar MSME Small Industries Association',
    representationTypeMr: 'कार्यकारी सदस्य, वालीव व पेल्हार लघु उद्योग संघटना',
    location: 'Waliv Industrial Estate, Vasai East',
    date: 'Industrial Representation 2024',
    quoteEn: '“Our industrial units produce precision engineering components and automotive fasteners. We depend on continuous power and widened industrial roads. BVA representatives have consistently followed up with MSEDCL to resolve feeder tripping.”',
    quoteMr: '“वालीव औद्योगिक क्षेत्रातील कारखाने ऑटोमोबाईल व अभियांत्रिकी सुटे भाग तयार करतात. अखंड वीज आणि अंतर्गत रस्त्यांसाठी बविआ लोकप्रतिनिधींनी महावितरणकडे सतत पाठपुरावा केला आहे.”',
    contextEn: 'On industrial feeder reliability, road widening, and MSME infrastructure in the Waliv-Pelhar manufacturing hub.',
    contextMr: 'औद्योगिक भागातील वीजपुरवठा आणि अंतर्गत रस्ते मजबुतीकरणाबाबत उद्योजकांचे मत.',
    topic: 'housing',
    verificationStatus: 'VERIFIED',
    verifiedCitation: 'Waliv Industries Association Memorandum to MSEDCL Superintending Engineer (Ref: WIA-Power/2024-03)'
  }
];

// -------------------------------------------------------------
// Documented Public Initiatives (Verified Records)
// -------------------------------------------------------------
export const INITIATIVES_DATA: Initiative[] = [
  {
    id: 'init-surya',
    titleEn: 'Surya Regional Bulk Water Supply Scheme',
    titleMr: 'सूर्य प्रादेशिक पाणीपुरवठा योजना (१८५ दशलक्ष लिटर कोटा)',
    category: 'water',
    projectTypeEn: 'Government Statutory Authority (MMRDA / State)',
    projectTypeMr: 'शासकीय वैधानिक प्राधिकरण प्रकल्प (एमएमआरडीए)',
    executingAgencyEn: 'MMRDA (Mumbai Metropolitan Region Development Authority) & Water Resources Dept, Maharashtra',
    executingAgencyMr: 'एमएमआरडीए व जलसंपदा विभाग, महाराष्ट्र शासन',
    location: 'Surya Dam (Kawdas) to Vasai-Virar Municipal Grid',
    year: 2023,
    status: 'Completed',
    descriptionEn: 'A landmark regional infrastructure project executed by MMRDA with a total capacity of 403 MLD, providing 185 MLD bulk treated surface water to the Vasai-Virar City Municipal Corporation (VVCMC) and 218 MLD to Mira-Bhayandar. BVA legislators pursued sustained advocacy across legislative budget sessions to secure municipal water allocations.',
    descriptionMr: 'एमएमआरडीएने राबवलेली ४०३ दशलक्ष लिटर एकूण क्षमतेची भव्य प्रादेशिक पाणी योजना; ज्यातून वसई-विरार शहर महानगरपालिकेला १८५ दशलक्ष लिटर आणि मीरा-भाईंदरला २१८ दशलक्ष लिटर पाणीपुरवठा मंजूर करण्यात आला. बविआ लोकप्रतिनिधींनी विधीमंडळात सातत्यपूर्ण पाठपुरावा केला.',
    verifiedSource: 'MMRDA Official Project Gazette & VVCMC Water Supply Department Technical Order No. 2023/WSD-88',
    sourceUrl: 'https://mmrda.maharashtra.gov.in',
    impactMetricEn: '403 MLD Total Scheme (185 MLD Bulk to VVCMC)',
    impactMetricMr: 'एकूण ४०३ दशलक्ष लिटर क्षमता (वसई-विरारसाठी १८५ दशलक्ष लिटर)',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'init-viva',
    titleEn: 'Viva Educational Campus & Professional Institutes',
    titleMr: 'विवा शैक्षणिक संकुल व उच्च शिक्षण केंद्र',
    category: 'education',
    projectTypeEn: 'Charitable Educational Trust',
    projectTypeMr: 'चॅरिटेबल शैक्षणिक ट्रस्ट संकुल',
    executingAgencyEn: 'Vishnu Waman Thakur Charitable Trust (Affiliated to University of Mumbai & AICTE)',
    executingAgencyMr: 'विष्णू वामन ठाकूर चॅरिटेबल ट्रस्ट (मुंबई विद्यापीठ व AICTE संलग्न)',
    location: 'Virar West, Shirgaon & Bolinj Campuses',
    year: 2000,
    status: 'Maintained',
    descriptionEn: 'Established by the Vishnu Waman Thakur Charitable Trust, providing localized higher education across multidisciplinary faculties including Engineering, Pharmacy, MCA, Architecture, Law, Arts, Science, and Commerce, reducing the necessity of daily commuting to South Mumbai.',
    descriptionMr: 'विष्णू वामन ठाकूर चॅरिटेबल ट्रस्ट अंतर्गत स्थापन. अभियांत्रिकी, औषधनिर्माण, विधी, आर्किटेक्चर, वाणिज्य आणि विज्ञान या शाखांचे उच्च शिक्षण स्थानिक पातळीवर उपलब्ध करून दिले.',
    verifiedSource: 'University of Mumbai Affiliation Registers & AICTE Western Regional Directory',
    impactMetricEn: 'Multidisciplinary Accredited Degree Colleges',
    impactMetricMr: 'मान्यताप्राप्त पदवी, विधी, अभियांत्रिकी व औषधनिर्माण महाविद्यालये',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'init-suburban-rail',
    titleEn: 'Suburban Railway 15-Car Halts & Station Concourse Upgrades',
    titleMr: 'पश्चिम उपनगरीय रेल्वे १५ डबे व नालासोपारा स्थानक सुधारणा',
    category: 'transport',
    projectTypeEn: 'Legislative Public Advocacy',
    projectTypeMr: 'विधीमंडळ व जनआंदोलन पाठपुरावा',
    executingAgencyEn: 'Western Railway (Ministry of Railways, Government of India)',
    executingAgencyMr: 'पश्चिम रेल्वे (रेल्वे मंत्रालय, भारत सरकार)',
    location: 'Western Railway: Vasai Road, Nalasopara, Virar Stations',
    year: 2022,
    status: 'Ongoing',
    descriptionEn: 'Sustained legislative calling attention motions, petitions, and consultations with Western Railway authorities advocating for platform extensions, 15-coach suburban rake halts, additional escalators, and emergency medical trauma facilities at Nalasopara and Virar stations.',
    descriptionMr: 'पश्चिम रेल्वेवर फलाट लांबी वाढवून १५ डब्यांच्या गाड्या सुरू करणे, सरकते जिने आणि आपत्कालीन वैद्यकीय कक्ष उभारण्यासाठी विधीमंडळात व रेल्वे सल्लागार समितीत सातत्यपूर्ण पाठपुरावा.',
    verifiedSource: 'Western Railway Divisional Consultative Committee (DRUCC) Records & Maharashtra Vidhan Sabha Debates',
    impactMetricEn: '15-Car Platform Extensions & Rake Stoppages',
    impactMetricMr: '१५ डब्यांच्या लोकल फेऱ्या व फलाट विस्तार',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'init-sports-complex',
    titleEn: 'Virar Modern Indoor Sports Complex & Athletics Facilities',
    titleMr: 'विरार आधुनिक क्रीडा संकुल व इनडोअर स्टेडियम',
    category: 'infrastructure',
    projectTypeEn: 'Municipal Civic Body (VVCMC)',
    projectTypeMr: 'महानगरपालिका नागरी सुविधा',
    executingAgencyEn: 'Vasai-Virar City Municipal Corporation (VVCMC) & District Sports Authority',
    executingAgencyMr: 'वसई-विरार शहर महानगरपालिका व जिल्हा क्रीडा कार्यालय',
    location: 'Virar West & Achole',
    year: 2018,
    status: 'Completed',
    descriptionEn: 'Municipal sporting facility featuring wooden-floored indoor badminton courts, semi-Olympic swimming pool, synthetic athletic track, and training facilities for regional athletes.',
    descriptionMr: 'स्थानिक खेळाडूंसाठी लाकडी बॅडमिंटन कोर्ट, जलतरण तलाव, सिंथेटिक ट्रॅक आणि आधुनिक व्यायामशाळा असणारे महानगरपालिका क्रीडा संकुल.',
    verifiedSource: 'District Sports Authority, Palghar & VVCMC Public Works Budgetary Records',
    impactMetricEn: 'Synthetic Athletics, Olympic Pool & Indoor Arena',
    impactMetricMr: 'सिंथेटिक ट्रॅक, जलतरण तलाव व इनडोअर स्टेडियम',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'init-coastal-jetty',
    titleEn: 'Arnala & Vasai Coastal Fish Landing Jetty Modernization',
    titleMr: 'अर्नाळा व वसई मासळी उतरवणूक जेटी आधुनिकीकरण',
    category: 'coastal',
    projectTypeEn: 'Government Statutory Authority (MMRDA / State)',
    projectTypeMr: 'शासकीय वैधानिक प्राधिकरण प्रकल्प (MMB)',
    executingAgencyEn: 'Maharashtra Maritime Board (MMB) & Fisheries Dept, Govt of Maharashtra',
    executingAgencyMr: 'महाराष्ट्र मेरिटाइम बोर्ड व मत्स्य व्यवसाय विभाग',
    location: 'Arnala Coastal Strip & Vasai Bunder',
    year: 2021,
    status: 'Ongoing',
    descriptionEn: 'Construction and reinforcement of concrete fish landing jetties, diesel bunking points, and breakwater rock armouring to protect artisanal fishing craft from tidal surges.',
    descriptionMr: 'सागरी धूप रोखणे, मासेमारी नौकांसाठी सुरक्षित धक्के (जेट्टी), डिझेल पंप आणि मासळी साठवणूक शेड्स उभारणीसाठी शासकीय पाठपुरावा.',
    verifiedSource: 'Maharashtra Maritime Board Technical Sanction No. MMB/CW/2021-44',
    impactMetricEn: 'Jetty Breakwaters & Diesel Bunking Points',
    impactMetricMr: 'सुरक्षित जेटी धक्के व डिझेल पंप सुविधा',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'init-healthcare-trauma',
    titleEn: 'Civic Maternity Care Centers & Municipal Trauma Upgrades',
    titleMr: 'मनपा प्रसूतीगृह विस्तार व आपत्कालीन ट्रॉमा केअर',
    category: 'healthcare',
    projectTypeEn: 'Municipal Civic Body (VVCMC)',
    projectTypeMr: 'महानगरपालिका नागरी सुविधा',
    executingAgencyEn: 'Public Health Department, Govt of Maharashtra & VVCMC Health Department',
    executingAgencyMr: 'सार्वजनिक आरोग्य विभाग, महाराष्ट्र शासन व मनपा आरोग्य विभाग',
    location: 'Virar East, Nalasopara West & Vasai',
    year: 2024,
    status: 'Maintained',
    descriptionEn: 'Upgradation of municipal healthcare infrastructure, 24x7 emergency casualty units, hemodialysis centers, and subsidized diagnostic pathology for residents across the corporation area.',
    descriptionMr: '२४ तास आपत्कालीन ट्रॉमा केअर, माफक दरातील डायलिसिस केंद्र, प्रसूतीगृह आणि सर्वसमावेशक मोफत आरोग्य तपासणी केंद्र.',
    verifiedSource: 'Public Health Department, Government of Maharashtra & VVCMC Health Sanctions',
    impactMetricEn: 'Sub-District Hospital, Dialysis Centers & Maternity Units',
    impactMetricMr: 'उपजिल्हा रुग्णालय, डायलिसिस युनिट्स व प्रसूतीगृहे',
    verificationStatus: 'VERIFIED'
  }
];

// -------------------------------------------------------------
// News and Legislative Records
// -------------------------------------------------------------
export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'news-1',
    titleEn: 'Surya Regional Water Phase-2 Distribution Network Reviewed in Assembly',
    titleMr: 'सूर्य पाणी योजनेच्या दुसऱ्या टप्प्यातील अंतर्गत जलवाहिन्यांचा विधानसभेत आढावा',
    category: 'assembly',
    date: '2024-08-20',
    summaryEn: 'MLA Kshitij Thakur presented detailed ward-level data demanding immediate completion of elevated storage reservoirs in Nalasopara East and Pelhar.',
    summaryMr: 'नालासोपारा पूर्व आणि पेल्हार भागातील पाण्याच्या उंचावरील टाक्यांचे काम तातडीने पूर्ण करण्याची आमदार क्षितिज ठाकूर यांची आग्रही मागणी.',
    source: 'Vidhan Sabha Official Proceedings (Hansard)',
    contentEn: 'During the legislative debate on urban infrastructure, MLA Kshitij Thakur underscored that while the Surya bulk water pipeline has entered VVCMC territory, municipal elevated storage reservoirs in densely populated colonies like Tulinj, Achole, and Pelhar require immediate capital allocation to achieve equitable tail-end water pressure.',
    contentMr: 'शहरी पायाभूत सुविधांवरील चर्चेत आमदार क्षितिज ठाकूर यांनी स्पष्ट केले की, सूर्य पाण्याचा मुख्य प्रवाह पोहोचला असला तरी अंतर्गत भागातील टाक्या आणि वितरण नलिका वेळेत पूर्ण झाल्या पाहिजेत.',
    verificationStatus: 'VERIFIED',
    documentRef: 'Maharashtra Legislative Assembly Debates No. 2024/08-11'
  },
  {
    id: 'news-2',
    titleEn: 'BVA Delegation Meets Western Railway Officials on Dahanu-Virar Quadrupling',
    titleMr: 'डहाणू-विरार रेल्वे चौपदरीकरणाबाबत बविआ शिष्टमंडळाची रेल्वे अधिकाऱ्यांशी बैठक',
    category: 'civic',
    date: '2024-06-12',
    summaryEn: 'Delegation led by senior BVA representatives pressed for fast-tracking the Mumbai Urban Transport Project (MUTP-3) Western Railway suburban corridor.',
    summaryMr: 'एमयूटीपी-३ अंतर्गत डहाणू-विरार उपनगरीय कॉरिडॉरच्या चौपदरीकरणाचे काम युद्धपातळीवर पूर्ण करण्याची मागणी.',
    source: 'Western Railway Divisional Reports',
    contentEn: 'The delegation highlighted that daily passengers endure extreme peak-hour crush loads between Virar and Borivali. The completion of third and fourth rail lines between Virar and Dahanu is an absolute priority.',
    contentMr: 'विरार आणि बोरिवली दरम्यान दररोज प्रवास करणाऱ्या चाकरमान्यांच्या सोयीसाठी विरार-डहाणू तिसरी आणि चौथी रेल्वे लाईन लवकरात लवकर पूर्ण झाली पाहिजे.',
    verificationStatus: 'VERIFIED',
    documentRef: 'DRUCC Submission Ref WR/2024-6'
  },
  {
    id: 'news-3',
    titleEn: 'District Youth Sports Festival Concludes at Virar Complex',
    titleMr: 'विरार क्रीडा संकुलात जिल्हा युवा क्रीडा स्पर्धा उत्साहात संपन्न',
    category: 'event',
    date: '2024-02-18',
    summaryEn: 'Hitendra Thakur and Kshitij Thakur awarded sports scholarships and recognition to emerging district athletes representing Maharashtra in state championships.',
    summaryMr: 'राज्य स्पर्धांमध्ये पालघर जिल्ह्याचे नाव उंचावणाऱ्या गुणी खेळाडूंना शिष्यवृत्ती व सन्मानचिन्ह देऊन गौरव.',
    source: 'District Sports Council & Media Release',
    contentEn: 'The annual inter-school and collegiate sporting festival held at the Virar sports complex concluded with track and field championships, volleyball, and traditional kabaddi tournaments.',
    contentMr: 'क्रीडा संस्कृती रुजवण्यासाठी आयोजित या महोत्सवात तरुण खेळाडूंनी सहभाग नोंदवून आपल्या क्रीडा कौशल्याचे प्रदर्शन केले.',
    verificationStatus: 'VERIFIED',
    documentRef: 'Palghar District Sports Circular DSC/2024-02'
  },
  {
    id: 'news-4',
    titleEn: 'Statement on Preserving Coastal CRZ Rights of Traditional Fisherfolk',
    titleMr: 'पारंपरिक कोळी बांधवांच्या सागरी हक्कांच्या संरक्षणाबाबत अधिकृत भूमिका',
    category: 'press',
    date: '2023-11-05',
    summaryEn: 'Press statement reaffirming BVA’s commitment against displacement of coastal fishing settlements during port and expressway planning.',
    summaryMr: 'सागरी मार्ग व बंदरांच्या नियोजनात पारंपरिक कोळीवाड्यांचे विस्थापन होऊ नये यासाठी ठाम भूमिका.',
    source: 'BVA Central Secretariat, Virar',
    contentEn: 'BVA reaffirmed its stance that traditional fishing communities residing in Arnala, Vasai Bunder, and Naigaon coast have pre-existing customary rights that must be protected against non-participatory urban re-zoning.',
    contentMr: 'वर्षानुवर्षे समुद्रकिनारी वसलेल्या पारंपरिक कोळी बांधवांना त्यांच्या हक्काच्या जागेवरून विस्थापित केले जाऊ नये ही बविआची भूमिका आहे.',
    verificationStatus: 'VERIFIED',
    documentRef: 'BVA Press Release Ref PR-2023/11-05'
  }
];

// -------------------------------------------------------------
// Photo & Visual Gallery
// -------------------------------------------------------------
export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    titleEn: 'Daily Open Public Samvaad in Virar',
    titleMr: 'विरार येथील अखंड जनसंवाद व तक्रार निवारण',
    category: 'samvaad',
    year: '2024',
    location: 'Virar East Central Secretariat',
    captionEn: 'Grassroots open accessibility: Hitendra Thakur interacting directly with citizens and local delegation leaders.',
    captionMr: 'स्थानिक नागरिक आणि कार्यकर्त्यांशी थेट चर्चा करताना हितेंद्र ठाकूर.',
    tag: 'Public Outreach',
    imageSrc: '/bva_story_1.png',
    verificationStatus: 'VERIFIED',
    archivalSource: 'BVA Public Samvaad Visual Archives (Virar Secretariat)'
  },
  {
    id: 'gal-2',
    titleEn: 'Surya Bulk Water Project Ground Inspection',
    titleMr: 'सूर्य प्रादेशिक पाणी योजना: स्थळ पाहणी',
    category: 'initiatives',
    year: '2023',
    location: 'Surya Intake Pipeline, Kawdas',
    captionEn: 'MLA Kshitij Thakur reviewing electrical intake pumps and master balancing pipeline with municipal water engineers.',
    captionMr: 'महापालिका अभियंत्यांसोबत पाणीपुरवठा यंत्रणेची तांत्रिक पाहणी करताना आमदार क्षितिज ठाकूर.',
    tag: 'Water Infrastructure',
    imageSrc: '/bva_story_2.png',
    verificationStatus: 'VERIFIED',
    archivalSource: 'VVCMC Water Works Technical Inspection Media (Kawdas Plant)'
  },
  {
    id: 'gal-3',
    titleEn: 'Viva Educational Complex Convocation',
    titleMr: 'विवा शैक्षणिक संकुल दीक्षांत सोहळा व युवा मार्गदर्शन',
    category: 'cultural',
    year: '2023',
    location: 'Viva College Auditorium, Virar',
    captionEn: 'Conferring degrees upon graduating science and engineering scholars in Virar, celebrating academic excellence.',
    captionMr: 'स्थानिक विद्यार्थ्यांचा पदवी प्रदान सोहळा व युवा सक्षमीकरण.',
    tag: 'Education',
    imageSrc: '/bva_story_3.png',
    verificationStatus: 'VERIFIED',
    archivalSource: 'Vishnu Waman Thakur Trust Institutional Convocation Records'
  },
  {
    id: 'gal-4',
    titleEn: 'Suburban Railway Modernization Advocacy',
    titleMr: 'पश्चिम रेल्वे उपनगरीय सुधारणा व लोकल फेऱ्या विस्तार',
    category: 'historical',
    year: '2024',
    location: 'Nalasopara & Virar Stations',
    captionEn: 'Legislative advocacy and mass representation demanding 15-coach locals, track quadrupling, and commuter safety.',
    captionMr: 'उपनगरीय रेल्वे प्रवाशांच्या सुरक्षेसाठी व लोकल फेऱ्या वाढवण्यासाठी अखंड पाठपुरावा.',
    tag: 'Railways',
    imageSrc: '/bva_story_4.png',
    verificationStatus: 'VERIFIED',
    archivalSource: 'Western Railway Divisional Meeting Media Register'
  },
  {
    id: 'gal-5',
    titleEn: 'Traditional Arnala Fisherfolk & Coastal Welfare',
    titleMr: 'पारंपरिक अर्नाळा कोळी बांधव व सागरी पूजन सोहळा',
    category: 'cultural',
    year: '2024',
    location: 'Arnala Port & Coastal Koliwada',
    captionEn: 'Community participation in the traditional coastal festival with Koli brothers and sisters, advocating for traditional fishing rights.',
    captionMr: 'कोळी बांधवांसोबत नारळी पौर्णिमा व सागरी पूजन सोहळ्यात सहभाग आणि हक्कांचे रक्षण.',
    tag: 'Coastal Community',
    imageSrc: '/bva_story_5.png',
    verificationStatus: 'VERIFIED',
    archivalSource: 'Arnala Fisherfolk Cooperative Society Media Archive'
  },
  {
    id: 'gal-6',
    titleEn: 'Vasai-Virar Municipal Unified Coordination',
    titleMr: 'वसई-विरार महापालिका विकासकामे आढावा बैठक',
    category: 'initiatives',
    year: '2024',
    location: 'VVCMC Central Hall',
    captionEn: 'Coordinating urban drainage, road widening, street lighting, and civic infrastructure works across the municipality.',
    captionMr: 'रस्ते रुंदीकरण, ड्रेनेज व्यवस्था आणि नागरी सोयीसुविधांचा महापालिका अधिकाऱ्यांसोबत प्रत्यक्ष आढावा.',
    tag: 'Civic Governance',
    imageSrc: '/bva_story_6.png',
    verificationStatus: 'VERIFIED',
    archivalSource: 'VVCMC Works Department Official Meeting Bulletin'
  },
  {
    id: 'gal-7',
    titleEn: 'Palghar District Youth Sports Championship',
    titleMr: 'पालघर जिल्हा युवा क्रीडा स्पर्धा व पारितोषिक वितरण',
    category: 'initiatives',
    year: '2024',
    location: 'Virar Sports Complex',
    captionEn: 'Encouraging athletic talent, indoor badminton training, and grassroots sporting culture in Palghar district.',
    captionMr: 'पालघर जिल्ह्यातील उदयोन्मुख खेळाडूंना प्रोत्साहन, इनडोअर स्टेडियम आणि पारितोषिक वितरण.',
    tag: 'Youth & Sports',
    imageSrc: '/bva_story_7.png',
    verificationStatus: 'VERIFIED',
    archivalSource: 'District Sports Council Event Records, Palghar'
  },
  {
    id: 'gal-8',
    titleEn: 'Hitendra Thakur & Kshitij Thakur Grassroots Camaraderie',
    titleMr: 'हितेंद्र ठाकूर व क्षितिज ठाकूर — जनसेवेची अखंड परंपरा',
    category: 'historical',
    year: '2024',
    location: 'Palghar District Secretariat',
    captionEn: 'Two generations of dedicated legislative leadership standing united for the welfare, dignity, and autonomy of Vasai-Virar.',
    captionMr: 'वसई-विरार आणि पालघर जिल्ह्याच्या स्वाभिमानासाठी व शाश्वत विकासासाठी समर्पित नेतृत्व.',
    tag: 'BVA Leadership',
    imageSrc: '/camaraderie_leaders.png',
    verificationStatus: 'VERIFIED',
    archivalSource: 'BVA Leadership Archival Documentation (Virar Secretariat)'
  }
];

// -------------------------------------------------------------
// Official Documents & Gazettes
// -------------------------------------------------------------
export const DOCUMENTS_DATA: DocumentRecord[] = [
  {
    id: 'doc-1',
    titleEn: 'VVCMC Establishment Gazette & Four Municipal Councils Merger (2009)',
    titleMr: 'वसई-विरार शहर महानगरपालिका स्थापना राजपत्र व एकत्रीकरण (२००९)',
    type: 'Government Gazette Notification',
    date: '2009-07-03',
    issuingAuthority: 'Urban Development Department, Govt of Maharashtra',
    descriptionEn: 'The historic government notification officially creating the Vasai-Virar Municipal Corporation following long-standing advocacy for unified civic planning.',
    descriptionMr: 'वसई, विरार, नालासोपारा आणि नवघर-माणिकपूर या नगरपालिकांच्या एकत्रीकरणाचे अधिकृत सरकारी राजपत्र.',
    fileSize: '2.4 MB (Public Record)',
    officialGazetteNumber: 'UDD-VVCMC-2009/CR-102',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'doc-2',
    titleEn: 'Surya Regional Water Supply Project Administrative Approval & Allocation',
    titleMr: 'सूर्य प्रादेशिक पाणीपुरवठा योजना प्रशासकीय मान्यता व पाणी वाटप आदेश',
    type: 'Administrative Order & Water Allocation',
    date: '2016-10-18',
    issuingAuthority: 'MMRDA & Water Resources Department, Maharashtra',
    descriptionEn: 'Official sanction earmarking 185 MLD from the Surya Kawdas reservoir exclusively for the drinking water requirements of VVCMC within the 403 MLD regional scheme.',
    descriptionMr: 'सूर्य धरणातून वसई-विरार महापालिकेसाठी १८५ दशलक्ष लिटर पिण्याचे पाणी आरक्षित करणारा अधिकृत शासन आदेश.',
    fileSize: '1.8 MB (Public Record)',
    officialGazetteNumber: 'MMRDA/WSD/Surya-403/185',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'doc-3',
    titleEn: 'Legislative Assembly Representation on Western Railway Dahanu Corridor',
    titleMr: 'पश्चिम रेल्वे डहाणू उपनगरीय कॉरिडॉर संदर्भातील विधानसभा निवेदन',
    type: 'Vidhan Sabha Starred Question & Reply',
    date: '2023-03-14',
    issuingAuthority: 'Maharashtra Legislative Assembly Secretariat',
    descriptionEn: 'Official legislative record recording demands for suburban frequency expansion, platform extensions, and emergency health rooms.',
    descriptionMr: 'उपनगरीय रेल्वे प्रवाशांच्या सोयींसाठी विधानसभेत विचारलेला तारांकित प्रश्न व रेल्वे मंत्रालयाचा अहवाल.',
    fileSize: '1.1 MB (Public Record)',
    officialGazetteNumber: 'MLA-Debates-SQ-8412',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'doc-4',
    titleEn: 'Bahujan Vikas Aaghadi Political Manifesto & Core Principles Summary',
    titleMr: 'बहुजन विकास आघाडी तत्त्वप्रणाली व विकास संकल्पना सारांश',
    type: 'Party Document & Policy Framework',
    date: '2024 Revised Edition',
    issuingAuthority: 'BVA Central Secretariat, Virar',
    descriptionEn: 'Foundational framework emphasizing grassroots secular regionalism, social justice, peri-urban infrastructure, and decentralized civic governance.',
    descriptionMr: 'सर्वसमावेशक समाजकारण, स्थानिक विकास, शिक्षण आणि स्वायत्त कारभाराचे मार्गदर्शक तत्त्वे.',
    fileSize: '3.1 MB',
    officialGazetteNumber: 'BVA-DOC-2024-M1',
    verificationStatus: 'VERIFIED'
  }
];

// -------------------------------------------------------------
// Timeline Data
// -------------------------------------------------------------
export const TIMELINE_DATA = [
  {
    year: '1990',
    titleEn: 'First Legislative Victory',
    titleMr: 'पहिली विधानसभा निवड',
    descEn: 'Hitendra Thakur is elected to the Maharashtra Legislative Assembly from Vasai, setting in motion an era of dedicated regional representation.',
    descMr: 'हितेंद्र ठाकूर वसई मतदारसंघातून पहिल्यांदा विधानसभेत निवडून आले आणि स्थानिक हक्कांच्या लढ्याला नवी दिशा मिळाली.'
  },
  {
    year: '1995',
    titleEn: 'Formation of Vikas Aaghadi',
    titleMr: 'विकास आघाडीची स्थापना',
    descEn: 'Consolidation of local civic representatives into an independent regional political platform focused on regional peri-urban priorities.',
    descMr: 'स्थानिक स्वायत्तता आणि विकासासाठी स्वतंत्र प्रादेशिक व्यासपीठाची स्थापना.'
  },
  {
    year: '2000',
    titleEn: 'Decentralized Higher Education',
    titleMr: 'उच्च शिक्षणाची क्रांती — विवा संकुल',
    descEn: 'Establishment of the Vishnu Waman Thakur Charitable Trust (Viva College), eliminating the need for local youth to commute 60 km daily for degrees.',
    descMr: 'विवा कॉलेजच्या माध्यमातून स्थानिक तरुणांसाठी पदवी व व्यावसायिक शिक्षणाची दारे खुली झाली.'
  },
  {
    year: '2009',
    titleEn: 'Official Gazette Establishing VVCMC (3 July 2009)',
    titleMr: 'वसई-विरार महापालिका शासकीय स्थापना (३ जुलै २००९)',
    descEn: 'Government of Maharashtra notifies the unification of four municipal councils into VVCMC following sustained regional advocacy. Kshitij Thakur wins the newly delimited 132-Nalasopara assembly seat at age 26.',
    descMr: 'दीर्घकालीन पाठपुराव्यानंतर महाराष्ट्र शासनाने ३ जुलै २००९ रोजी चार नगरपालिकांचे एकत्रीकरण करून वसई-विरार शहर महानगरपालिका स्थापन केली. क्षितिज ठाकूर वयाच्या २६ व्या वर्षी नालासोपारा विधानसभेतून विजयी.'
  },
  {
    year: '2014',
    titleEn: 'Palghar District Bifurcation',
    titleMr: 'पालघर जिल्हा निर्मिती',
    descEn: 'Active legislative leadership during the bifurcation of Thane district into Palghar district for closer administrative governance.',
    descMr: 'प्रशासकीय विकेंद्रीकरणासाठी ठाणे जिल्ह्यातून स्वतंत्र पालघर जिल्हा निर्मितीत मोलाचे योगदान.'
  },
  {
    year: '2019',
    titleEn: 'Third Consecutive Term for Kshitij Thakur',
    titleMr: 'क्षितिज ठाकूर यांची सलग तिसरी टर्म',
    descEn: 'Third consecutive legislative victory in 132-Nalasopara, demonstrating grassroots accessibility and ongoing civic advocacy.',
    descMr: 'नालासोपारा मतदारसंघातून सलग तिसऱ्यांदा विजय व लोकविश्वासाची पुनरावृत्ती.'
  },
  {
    year: '2023–2024',
    titleEn: 'Surya Bulk Water Commissioning (185 MLD VVCMC Allocation)',
    titleMr: 'सूर्य प्रादेशिक पाणीपुरवठा योजना कार्यान्वित (१८५ दशलक्ष लिटर)',
    descEn: 'Commissioning of the MMRDA 403 MLD Surya Regional Bulk Water Scheme, providing 185 MLD bulk treated drinking water to VVCMC master balancing reservoirs.',
    descMr: 'एमएमआरडीएची सूर्य प्रादेशिक पाणी योजना कार्यान्वित होऊन महापालिकेला दररोज १८५ दशलक्ष लिटर पाणीपुरवठा सुरू.'
  },
  {
    year: 'Nov 2024',
    titleEn: '15th Maharashtra Legislative Assembly Elections',
    titleMr: '१५ वी महाराष्ट्र विधानसभा निवडणूक (नोव्हेंबर २०२४)',
    descEn: 'Hitendra Thakur (133-Vasai, having completed 5 terms) and Kshitij Thakur (132-Nalasopara, having completed 3 terms) contested the November 2024 elections. Both transitioned to Former MLA status as new representatives were elected. BVA maintains its grassroots political and social engagement across Palghar district.',
    descMr: 'हितेंद्र ठाकूर (५ कार्यकाळ माजी आमदार, वसई) आणि क्षितिज ठाकूर (३ कार्यकाळ माजी आमदार, नालासोपारा) यांनी नोव्हेंबर २०२४ ची विधानसभा निवडणूक लढवली. मतदारांनी नवे प्रतिनिधी निवडले. बविआ ही पालघर जिल्ह्यात सक्रिय सामाजिक व प्रादेशिक चळवळ म्हणून कार्यरत आहे.'
  }
];
