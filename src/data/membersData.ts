export interface MemberProfile {
  id: string;
  nameEn: string;
  nameMr: string;
  nameHi: string;
  roleEn: string;
  roleMr: string;
  roleHi: string;
  category: 'core_leader' | 'former_mla' | 'former_mp' | 'mayor' | 'corporator' | 'committee_chair' | 'former_member';
  status: 'ACTIVE' | 'FORMER_ELECTED' | 'FORMER_PARTY_MEMBER' | 'HISTORICAL';
  currentAffiliation: string;
  wardOrConstituencyEn: string;
  wardOrConstituencyMr: string;
  imageSrc: string;
  avatarFallback: string;
  birthYearOrAge?: string;
  educationEn: string;
  educationMr: string;
  electoralHistoryEn: string[];
  electoralHistoryMr: string[];
  recentVictoryEn?: string;
  recentVictoryMr?: string;
  votesPolled?: number;
  winningMargin?: number;
  assetDisclosures?: {
    year: string;
    movable: string;
    immovable: string;
    liabilities: string;
    source: string;
  }[];
  legalDisclosures?: {
    caseTitle: string;
    stage: 'Allegation' | 'FIR' | 'Investigation' | 'Chargesheet' | 'Trial' | 'Acquitted' | 'Closed';
    detailsEn: string;
    detailsMr: string;
    verificationDate: string;
  }[];
  publicCommitmentsEn: string[];
  publicCommitmentsMr: string[];
  officialSource: string;
  lastVerifiedDate: string;
  verificationStatus: 'VERIFIED' | 'AWAITING_VERIFICATION' | 'ARCHIVED';
}

export const ALL_MEMBERS_DATA: MemberProfile[] = [
  {
    id: 'hitendra-thakur',
    nameEn: 'Hitendra Vishnu Thakur',
    nameMr: 'हितेंद्र (अप्पा) विष्णू ठाकूर',
    nameHi: 'हितेंद्र (अप्पा) विष्णु ठाकुर',
    roleEn: 'BVA Founder & Senior Leader · Former 5-Term MLA (Vasai)',
    roleMr: 'संस्थापक व ज्येष्ठ नेते · माजी ५-वेळा आमदार (वसई)',
    roleHi: 'संस्थापक व वरिष्ठ नेता · पूर्व ५-बार विधायक (वसई)',
    category: 'core_leader',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi (Founder/President)',
    wardOrConstituencyEn: 'Vasai Assembly (133)',
    wardOrConstituencyMr: 'वसई विधानसभा मतदारसंघ (१३३)',
    imageSrc: '/hitendra_solo.png',
    avatarFallback: 'HT',
    educationEn: 'Undergraduate / Commerce studies (Vartak College)',
    educationMr: 'वाणिज्य शाखा (वर्तक महाविद्यालय)',
    electoralHistoryEn: [
      '1990: Won Vasai Assembly as Indian National Congress candidate',
      '1995: Won Vasai Assembly as Independent candidate',
      '1999: Won Vasai Assembly as Independent candidate',
      '2004: Won Vasai Assembly as Independent candidate',
      '2014: Won Vasai Assembly as BVA candidate (Delimited 133-Vasai)',
      '2019: Won Vasai Assembly as BVA candidate (97,263 votes)',
      '2024: Contested Vasai Assembly; completed 5 legislative terms'
    ],
    electoralHistoryMr: [
      '१९९०: भारतीय राष्ट्रीय काँग्रेसतर्फे वसई विधानसभेतून विजयी',
      '१९९५: अपक्ष म्हणून वसई विधानसभेतून विजयी',
      '१९९९: अपक्ष म्हणून वसई विधानसभेतून फेरविजयी',
      '२००४: अपक्ष म्हणून चौथ्यांदा विधानसभेत',
      '२०१४: बविआ अधिकृत उमेदवार म्हणून वसईतून विजयी',
      '२०१९: वसई विधानसभेतून ९७,२६३ मतांसह पाचव्यांदा विजयी',
      '२०२४: वसई विधानसभा लढवली; ५ कार्यकाळ पूर्ण'
    ],
    assetDisclosures: [
      {
        year: '2024 (ECI Form 26 Affidavit)',
        movable: '₹28.45 Cr (Self & Spouse)',
        immovable: '₹37.12 Cr',
        liabilities: '₹14.20 Cr',
        source: 'ECI Maharashtra Assembly Election 2024 Affidavit'
      },
      {
        year: '2019 (ECI Form 26 Affidavit)',
        movable: '₹22.18 Cr',
        immovable: '₹31.40 Cr',
        liabilities: '₹11.85 Cr',
        source: 'ECI Assembly Election 2019 Public Affidavit'
      }
    ],
    legalDisclosures: [
      {
        caseTitle: 'Suresh Dube Murder Proceedings (1989)',
        stage: 'Acquitted',
        detailsEn: 'Arrested under TADA in early 1990s. Completely acquitted by Designated TADA Court in 2005. Supreme Court upheld acquittal in 2009 citing lack of substantive evidence.',
        detailsMr: '१९८९ च्या प्रकरणात टाडा अंतर्गत कारवाई; विशेष टाडा न्यायालयाने २००५ मध्ये निर्दोष मुक्त केले. सर्वोच्च न्यायालयाने २००९ मध्ये निर्दोषत्वावर शिक्कामोर्तब केले.',
        verificationDate: '2026-11-03'
      },
      {
        caseTitle: 'November 2024 Virar Hotel Code of Conduct Inquiry',
        stage: 'Investigation',
        detailsEn: 'FIR registered regarding Model Code of Conduct confrontation during campaign. Matter submitted to judicial magistrate; sub-judice.',
        detailsMr: 'विधानसभा निवडणुकीदरम्यान आचारसंहिता तक्रार; न्यायालयीन प्रक्रिया सुरू.',
        verificationDate: '2026-11-03'
      }
    ],
    publicCommitmentsEn: [
      'Founding of VVCMC municipal structure (Notified July 2009)',
      'Establishment of Vishnu Waman Thakur Charitable Trust (Viva College)',
      'Sanctioning and follow-up of 185 MLD Surya Bulk Water scheme',
      'Advocacy for separate Palghar district bifurcation (Achieved 2014)'
    ],
    publicCommitmentsMr: [
      'वसई-विरार महापालिका निर्मिती (३ जुलै २००९ शासन निर्णय)',
      'विष्णू वामन ठाकूर चॅरिटेबल ट्रस्ट (विवा संकुल) शैक्षणिक क्रांती',
      'सूर्य प्रादेशिक पाणीपुरवठा योजनेतून १८५ दशलक्ष लिटर पाण्याचा कोटा',
      'स्वतंत्र पालघर जिल्हा निर्मितीसाठी सातत्यपूर्ण पाठपुरावा (२०१४)'
    ],
    officialSource: 'Maharashtra Legislative Assembly Debates & ECI Affidavits',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'kshitij-thakur',
    nameEn: 'Kshitij Hitendra Thakur',
    nameMr: 'क्षितिज हितेंद्र ठाकूर',
    nameHi: 'क्षितिज हितेंद्र ठाकुर',
    roleEn: 'Former 3-Term MLA (132-Nalasopara) · Youth Leader',
    roleMr: 'माजी ३-वेळा आमदार (१३२-नालासोपारा) · युवा नेतृत्व',
    roleHi: 'पूर्व ३-बार विधायक (१३२-नालासोपारा) · युवा नेता',
    category: 'former_mla',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Nalasopara Assembly (132)',
    wardOrConstituencyMr: 'नालासोपारा विधानसभा मतदारसंघ (१३२)',
    imageSrc: '/kshitij_thakur.png',
    avatarFallback: 'KT',
    birthYearOrAge: 'Born 1983 (Elected at age 26 in 2009)',
    educationEn: 'MBA (California, USA) & B.Com (University of Mumbai)',
    educationMr: 'एमबीए (कॅलिफोर्निया, अमेरिका) व बी.कॉम (मुंबई विद्यापीठ)',
    electoralHistoryEn: [
      '2009: Elected MLA for 132-Nalasopara at age 26 (89,284 votes)',
      '2014: Re-elected MLA for 132-Nalasopara (1,13,566 votes)',
      '2019: Re-elected for third consecutive term in 132-Nalasopara (1,49,865 votes)',
      '2024: Contested Nalasopara; concluded 3 terms of legislative tenure'
    ],
    electoralHistoryMr: [
      '२००९: वयाच्या अवघ्या २६ व्या वर्षी नालासोपारा (१३२) मधून आमदार (८९,२८४ मते)',
      '२०१४: नालासोपारातून दुसऱ्यांदा प्रचंड मताधिक्याने विजयी (१,१३,५६६ मते)',
      '२०१९: नालासोपारातून सलग तिसऱ्यांदा विक्रमी विजयी (१,४९,८६५ मते)',
      '२०२४: नालासोपारा विधानसभा लढवली; ३ कार्यकाळ पूर्ण'
    ],
    assetDisclosures: [
      {
        year: '2024 (ECI Form 26 Affidavit)',
        movable: '₹19.82 Cr (Self & Family)',
        immovable: '₹26.40 Cr',
        liabilities: '₹8.75 Cr',
        source: 'ECI Maharashtra Assembly Election 2024 Public Disclosure'
      }
    ],
    legalDisclosures: [
      {
        caseTitle: 'March 2013 Vidhan Bhavan Police Incident',
        stage: 'Closed',
        detailsEn: 'Privilege committee proceedings initiated after confrontation with Mumbai police sub-inspector. Suspension revoked by Assembly resolution following committee review.',
        detailsMr: 'विधानभवन परिसरातील घटनेनंतर विशेष समिती चौकशी; विधिमंडळ ठरावानंतर निलंबन मागे.',
        verificationDate: '2026-11-03'
      }
    ],
    publicCommitmentsEn: [
      'Suburban Western Railway frequency augmentation between Borivali and Dahanu',
      'Construction of 200-bed mother-and-child civic hospital in Nalasopara West',
      'Expansion of Viva Engineering & Technology institutes',
      'Grievance redressal centers for migrant and local working families'
    ],
    publicCommitmentsMr: [
      'बोरीवली ते डहाणू उपनगरीय लोकल फेऱ्यांमध्ये वाढीसाठी सातत्यपूर्ण आवाज',
      'नालासोपारा पश्चिम येथे २०० खाटांचे माता व बाल संगोपन पालिका रुग्णालय',
      'विवा अभियांत्रिकी व तंत्रज्ञान संकुलाचा शैक्षणिक विस्तार',
      'सर्वसामान्य चाकरमानी व स्थानिक नागरिकांसाठी थेट तक्रार निवारण कक्ष'
    ],
    officialSource: 'Maharashtra Vidhan Sabha Official Debates & ECI Documents',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'sadanand-patil',
    nameEn: 'Sadanand Gajanan Patil',
    nameMr: 'सदानंद गजानन पाटील',
    nameHi: 'सदानंद गजानन पाटिल',
    roleEn: 'VVCMC Corporator (Ward 1D) · Senior Municipal Civic Veteran',
    roleMr: 'महापालिका नगरसेवक (प्रभाग १-ड) · ज्येष्ठ पालिका लोकप्रतिनिधी',
    roleHi: 'मनपा पार्षद (वार्ड 1-डी) · वरिष्ठ जनसेवक',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'VVCMC Electoral Ward 1D (Virar North / Bolinj)',
    wardOrConstituencyMr: 'वसई-विरार महापालिका प्रभाग १-ड (विरार उत्तर / बोळींज)',
    imageSrc: '/bva_story_1.png',
    avatarFallback: 'SP',
    educationEn: 'Higher Secondary (HSC) & Diploma in Local Governance',
    educationMr: 'उच्च माध्यमिक व स्थानिक स्वराज्य संस्था प्रशासन अभ्यास',
    electoralHistoryEn: [
      '2010: Elected Corporator in inaugural VVCMC general elections',
      '2015: Re-elected Corporator from Ward 1 sector with strong regional support',
      '2026: Victorious in January 2026 VVCMC Municipal Election in Ward 1D'
    ],
    electoralHistoryMr: [
      '२०१०: वसई-विरार महापालिकेच्या पहिल्या सार्वत्रिक निवडणुकीत नगरसेवक म्हणून विजयी',
      '२०१५: प्रभाग १ क्षेत्रातून भरघोस मतांनी फेरविजयी',
      '२०२६: जानेवारी २०२६ महापालिका सार्वत्रिक निवडणुकीत प्रभाग १-ड मधून दणदणीत विजय'
    ],
    recentVictoryEn: 'Won Ward 1D in Jan 2026 securing 11,016 votes with a winning margin of 3,182 votes.',
    recentVictoryMr: 'जानेवारी २०२६ पालिका निवडणुकीत प्रभाग १-ड मधून ११,०१६ मते मिळवून ३,१८२ मतांच्या फरकाने विजयी.',
    votesPolled: 11016,
    winningMargin: 3182,
    assetDisclosures: [
      {
        year: '2026 (State Election Commission Affidavit)',
        movable: '₹1.84 Cr',
        immovable: '₹3.20 Cr',
        liabilities: '₹42.5 Lakhs',
        source: 'SEC Maharashtra Municipal Affidavit 2026'
      }
    ],
    legalDisclosures: [
      {
        caseTitle: 'Past Municipal Protest & Public Demonstration Filings',
        stage: 'Acquitted',
        detailsEn: 'Historical public demonstration notices during civic protests; all closed or discharged without convictions.',
        detailsMr: 'स्थानिक नागरी आंदोलनांसंदर्भातील जुन्या नोंदी; सर्व निकाली व निर्दोष.',
        verificationDate: '2026-11-03'
      }
    ],
    publicCommitmentsEn: [
      'Bolinj water booster pump station overhaul',
      'Internal concrete road networking in rural-urban transition pockets',
      'Stormwater drain widening prior to monsoon seasons',
      'Primary healthcare center upgrade in Virar North'
    ],
    publicCommitmentsMr: [
      'बोळींज पाणी बूस्टर पंपिंग स्टेशनचे आधुनिकीकरण',
      'गावांना शहराशी जोडणाऱ्या अंतर्गत काँक्रिट रस्त्यांचे जाळे',
      'पावसाळ्यापूर्वी मुख्य गटारे व पाण्याचा निचरा व्यवस्था रुंदीकरण',
      'विरार उत्तर प्राथमिक आरोग्य केंद्राचे सक्षमीकरण'
    ],
    officialSource: 'VVCMC Election Return & SEC Maharashtra January 2026 Gazettes',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'rajesh-patil',
    nameEn: 'Rajesh Raghunath Patil',
    nameMr: 'राजेश रघुनाथ पाटील',
    nameHi: 'राजेश रघुनाथ पाटिल',
    roleEn: 'Former MLA (131-Boisar) · Tribal Rights & Rural Organiser',
    roleMr: 'माजी आमदार (१३१-बोईसर) · आदिवासी हक्क व ग्रामीण संघटक',
    roleHi: 'पूर्व विधायक (१३१-बोईसर) · ग्रामीण जनसेवक',
    category: 'former_mla',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Boisar Assembly (131 - ST Reserved)',
    wardOrConstituencyMr: 'बोईसर विधानसभा मतदारसंघ (१३१ - अ.ज. राखीव)',
    imageSrc: '/bva_story_2.png',
    avatarFallback: 'RP',
    educationEn: 'Graduate (Arts) - University of Mumbai',
    educationMr: 'पदवीधर (कला शाखा) - मुंबई विद्यापीठ',
    electoralHistoryEn: [
      '2019: Won 131-Boisar Assembly for BVA (78,703 votes)',
      '2024: Contested Boisar Assembly seat representing BVA'
    ],
    electoralHistoryMr: [
      '२०१९: बोईसर (१३१) विधानसभेतून बविआ तर्फे विजयी (७८,७०३ मते)',
      '२०२४: बोईसर मतदारसंघात बविआचे प्रतिनिधित्व'
    ],
    assetDisclosures: [
      {
        year: '2024 Affidavit',
        movable: '₹2.12 Cr',
        immovable: '₹4.35 Cr',
        liabilities: '₹68 Lakhs',
        source: 'ECI Assembly Election 2024'
      }
    ],
    publicCommitmentsEn: [
      'MIDC effluent monitoring and local tribal employment quotas',
      'Surya canal maintenance for interior taluka farmers',
      'Tribal land tenure regularization advocacy'
    ],
    publicCommitmentsMr: [
      'बोईसर एमआयडीसी प्रदूषण नियंत्रण व स्थानिक आदिवासी रोजगार',
      'आतील तालुक्यांतील शेतकऱ्यांसाठी सूर्य कालवा दुरुस्ती',
      'वनजमीन व आदिवासी जमिनींच्या हक्कांचा सातत्यपूर्ण पाठपुरावा'
    ],
    officialSource: 'ECI Official Results 2019 & 2024',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'baliram-jadhav',
    nameEn: 'Baliram Sukur Jadhav',
    nameMr: 'बळीराम सुकुर जाधव',
    nameHi: 'बलिराम सुकुर जाधव',
    roleEn: 'Former Member of Parliament (15th Lok Sabha - Palghar) · Senior Tribal Leader',
    roleMr: 'माजी खासदार (१५ वी लोकसभा - पालघर) · ज्येष्ठ आदिवासी नेतृत्व',
    roleHi: 'पूर्व सांसद (१५ वीं लोकसभा - पालघर) · वरिष्ठ आदिवासी नेता',
    category: 'former_mp',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Palghar Parliamentary Constituency (22 - ST)',
    wardOrConstituencyMr: 'पालघर लोकसभा मतदारसंघ (२२ - अ.ज. राखीव)',
    imageSrc: '/bva_story_3.png',
    avatarFallback: 'BJ',
    educationEn: 'Secondary School Education',
    educationMr: 'माध्यमिक शिक्षण',
    electoralHistoryEn: [
      '2009: Won Palghar Lok Sabha for BVA, defeating Congress and BJP candidates (2,23,234 votes)',
      '2014: Contested Palghar Lok Sabha (Secured 3,17,201 votes - runner up)',
      '2019: Contested Palghar Lok Sabha (Secured 4,00,000+ votes in high turnout election)'
    ],
    electoralHistoryMr: [
      '२००९: पालघर लोकसभेतून बविआचे पहिले खासदार म्हणून विजयी (२,२३,२३४ मते)',
      '२०१४: पालघर लोकसभा लढवली (३,१७,२०१ मतांसह दुसऱ्या क्रमांकावर)',
      '२०१९: पालघर लोकसभेत ४ लाखांहून अधिक मते मिळवून सशक्त लढा'
    ],
    publicCommitmentsEn: [
      'First BVA representative in Parliament of India (2009-2014)',
      'Advocated for Western Coastal security and Dahanu thermal plant local rehabilitation',
      'Tribal scholarship distribution monitoring across Palghar-Thane'
    ],
    publicCommitmentsMr: [
      'भारतीय संसदेत बविआचे पहिले प्रतिनिधित्व (२००९-२०१४)',
      'पश्चिम किनारपट्टी सुरक्षा आणि डहाणू औष्णिक प्रकल्पग्रस्तांचे पुनर्वसन',
      'आदिवासी विद्यार्थ्यांच्या शिष्यवृत्ती व वसतिगृह सुविधांवर भर'
    ],
    officialSource: 'Lok Sabha Secretariat Biographical Data & ECI Records',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'pravina-thakur',
    nameEn: 'Pravina Hitendra Thakur',
    nameMr: 'प्रवीणा हितेंद्र ठाकूर',
    nameHi: 'प्रवीणा हितेंद्र ठाकुर',
    roleEn: 'First Woman Mayor of VVCMC · Social Welfare Leader',
    roleMr: 'वसई-विरार महापालिकेच्या पहिल्या महिला महापौर · सामाजिक कार्यकर्त्या',
    roleHi: 'वसई-विरार मनपा की प्रथम महिला महापौर',
    category: 'mayor',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Virar Central / VVCMC Civic House',
    wardOrConstituencyMr: 'विरार मध्य / वसई-विरार महापालिका',
    imageSrc: '/bva_story_4.png',
    avatarFallback: 'PT',
    educationEn: 'Graduate (Arts)',
    educationMr: 'पदवीधर (कला)',
    electoralHistoryEn: [
      '2015: Elected Mayor of VVCMC following massive municipal victory',
      'Served full mayoral tenure championing urban women empowerment initiatives'
    ],
    electoralHistoryMr: [
      '२०१५: महापालिकेत बविआच्या विजयानंतर पहिल्या महिला महापौर म्हणून निवड',
      'महिला सक्षमीकरण आणि नागरी आरोग्य योजनांची यशस्वी अंमलबजावणी'
    ],
    publicCommitmentsEn: [
      'Initiated VVCMC Mother & Child primary wellness clinics',
      'Self-help group (Bachat Gat) marketplace infrastructure in Virar and Nalasopara',
      'Tree plantation and green buffer zones along Ring Road'
    ],
    publicCommitmentsMr: [
      'माता व बाल आरोग्य क्लिनिक्सची महापालिकेत सुरुवात',
      'महिला बचत गटांसाठी विरार व नालासोपारा येथे हक्काची बाजारपेठ',
      'रिंग रोड परिसरामध्ये वृक्षारोपण व हरित पट्टे निर्मिती'
    ],
    officialSource: 'VVCMC Official Mayoral Roster & Gazette Archives',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'rajeev-patil',
    nameEn: 'Rajeev Patil (Nana)',
    nameMr: 'राजीव (नाना) पाटील',
    nameHi: 'राजीव (नाना) पाटिल',
    roleEn: 'First Mayor of VVCMC (2010–2015) · Former Senior BVA Leader',
    roleMr: 'वसई-विरार महापालिकेचे पहिले महापौर (२०१०-२०१५) · माजी बविआ नेते',
    roleHi: 'वसई-विरार मनपा के प्रथम महापौर (२०१०-२०१५)',
    category: 'former_member',
    status: 'FORMER_PARTY_MEMBER',
    currentAffiliation: 'Shiv Sena (Eknath Shinde) / Independent alignment in recent years',
    wardOrConstituencyEn: 'Vasai West',
    wardOrConstituencyMr: 'वसई पश्चिम',
    imageSrc: '/bva_story_5.png',
    avatarFallback: 'RPN',
    educationEn: 'Commerce Graduate',
    educationMr: 'वाणिज्य पदवीधर',
    electoralHistoryEn: [
      '2010: Elected as Inaugural Mayor of newly formed VVCMC under BVA banner',
      'Later transitioned political affiliation to Shiv Sena (2020s)'
    ],
    electoralHistoryMr: [
      '२०१०: बविआच्या नेतृत्वाखाली स्थापन झालेल्या पालिकेचे पहिले महापौर म्हणून निवड',
      'पुढील काळात राजकीय भूमिका बदलून शिवसेना पक्षात प्रवेश'
    ],
    publicCommitmentsEn: [
      'Led municipal transition from 4 separate municipal councils into unified municipal corporation',
      'Oversaw initial master town planning and fire brigade modernization'
    ],
    publicCommitmentsMr: [
      'चार नगरपालिकांचे विलीनीकरण करून महापालिकेच्या प्राथमिक रचनेचे नेतृत्व',
      'नगररचना आराखडा व अग्निशामक दल आधुनिकीकरण'
    ],
    officialSource: 'VVCMC Historical Record of Mayors',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'ajiv-patil',
    nameEn: 'Ajiv Yashwant Patil',
    nameMr: 'अजीव यशवंत पाटील',
    nameHi: 'अजीव यशवंत पाटिल',
    roleEn: 'Senior Corporator & Former Standing Committee Chairman',
    roleMr: 'ज्येष्ठ नगरसेवक व माजी स्थायी समिती सभापती',
    roleHi: 'वरिष्ठ पार्षद एवं पूर्व स्थायी समिति सभापति',
    category: 'committee_chair',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 3 (Nalasopara East)',
    wardOrConstituencyMr: 'प्रभाग ३ (नालासोपारा पूर्व)',
    imageSrc: '/bva_story_6.png',
    avatarFallback: 'AP',
    educationEn: 'Graduate',
    educationMr: 'पदवीधर',
    electoralHistoryEn: ['Elected Corporator 2010, 2015; re-elected in Jan 2026'],
    electoralHistoryMr: ['२०१०, २०१५ मध्ये नगरसेवक; जानेवारी २०२६ मध्ये फेरविजयी'],
    publicCommitmentsEn: ['Municipal budget balancing', 'Infrastructure contracts monitoring'],
    publicCommitmentsMr: ['महापालिका अर्थसंकल्प नियोजन', 'विकासकामांच्या गुणवत्तेचे परीक्षण'],
    officialSource: 'VVCMC Municipal Roster',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'marshal-lopis',
    nameEn: 'Marshal Dominic Lopis',
    nameMr: 'मार्शल डॉमिनिक लोपीस',
    nameHi: 'मार्शल डोमिनिक लोपिस',
    roleEn: 'Veteran Coastal Community Leader & Corporator',
    roleMr: 'ज्येष्ठ किनारपट्टी प्रतिनिधी व नगरसेवक',
    roleHi: 'तटीय क्षेत्र जनसेवक एवं पार्षद',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 4 (Vasai Coastal belt)',
    wardOrConstituencyMr: 'प्रभाग ४ (वसई किनारपट्टी पट्टा)',
    imageSrc: '/bva_story_7.png',
    avatarFallback: 'ML',
    educationEn: 'Secondary Education',
    educationMr: 'माध्यमिक शिक्षण',
    electoralHistoryEn: ['Long-time elected representative in Vasai municipal council and VVCMC'],
    electoralHistoryMr: ['वसई नगरपालिका व महापालिकेत प्रदीर्घ लोकप्रतिनिधित्व'],
    publicCommitmentsEn: ['Coastal bund protection', 'East Indian community cultural preservation'],
    publicCommitmentsMr: ['खाडी बंधारे दुरुस्ती', 'ईस्ट इंडियन समाज संस्कृती संवर्धन'],
    officialSource: 'VVCMC Gazette',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'pravin-shetty',
    nameEn: 'Pravin Chinnayya Shetty',
    nameMr: 'प्रवीण चिन्नय्या शेट्टी',
    nameHi: 'प्रवीण चिन्नय्या शेट्टी',
    roleEn: 'Former Standing Committee Chairman · VVCMC Corporator',
    roleMr: 'माजी स्थायी समिती सभापती · नगरसेवक',
    roleHi: 'पूर्व स्थायी समिति सभापति',
    category: 'committee_chair',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 6 (Virar East)',
    wardOrConstituencyMr: 'प्रभाग ६ (विरार पूर्व)',
    imageSrc: '/bva_story_1.png',
    avatarFallback: 'PS',
    educationEn: 'Commerce Graduate',
    educationMr: 'वाणिज्य पदवीधर',
    electoralHistoryEn: ['Key organizational organizer for municipal ward governance'],
    electoralHistoryMr: ['महापालिका स्थायी समितीचे यशस्वी संचालन'],
    publicCommitmentsEn: ['Civic finance and public sports arena development'],
    publicCommitmentsMr: ['नागरी अर्थकारण व क्रीडा संकुलांचा विकास'],
    officialSource: 'VVCMC Civic Records',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'prafulla-sane',
    nameEn: 'Prafulla Jagannath Sane',
    nameMr: 'प्रफुल्ल जगन्नाथ साने',
    nameHi: 'प्रफुल्ल जगन्नाथ साने',
    roleEn: 'Corporator & Education Committee Coordinator',
    roleMr: 'नगरसेवक व शिक्षण समिती समन्वयक',
    roleHi: 'पार्षद एवं शिक्षा समिति सदस्य',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 2 (Virar West)',
    wardOrConstituencyMr: 'प्रभाग २ (विरार पश्चिम)',
    imageSrc: '/bva_story_2.png',
    avatarFallback: 'PJS',
    educationEn: 'Post Graduate',
    educationMr: 'पदव्युत्तर शिक्षण',
    electoralHistoryEn: ['Elected in 2015 and 2026 municipal polls'],
    electoralHistoryMr: ['२०१५ आणि २०२६ पालिका निवडणुकांत विजयी'],
    publicCommitmentsEn: ['Municipal school digital classrooms program'],
    publicCommitmentsMr: ['महापालिका शाळांमध्ये डिजिटल वर्गखोल्या'],
    officialSource: 'VVCMC Education Board',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'prashant-raut',
    nameEn: 'Prashant Raut',
    nameMr: 'प्रशांत राऊत',
    nameHi: 'प्रशांत राउत',
    roleEn: 'Corporator & Transport Committee Representative',
    roleMr: 'नगरसेवक व परिवहन समिती प्रतिनिधी',
    roleHi: 'पार्षद एवं परिवहन प्रतिनिधि',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 8 (Nalasopara West)',
    wardOrConstituencyMr: 'प्रभाग ८ (नालासोपारा पश्चिम)',
    imageSrc: '/bva_story_3.png',
    avatarFallback: 'PR',
    educationEn: 'Diploma in Engineering',
    educationMr: 'अभियांत्रिकी पदविका',
    electoralHistoryEn: ['Elected representative focusing on suburban bus connectivity'],
    electoralHistoryMr: ['परिवहन बस सेवा विस्तारासाठी सातत्यपूर्ण कार्य'],
    publicCommitmentsEn: ['VVMT CNG and EV bus fleet deployment'],
    publicCommitmentsMr: ['व्हीव्हीएमटी इलेक्ट्रिक व सीएनजी बसेसची संख्या वाढवणे'],
    officialSource: 'VVMT Operations Report',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'narendra-patil',
    nameEn: 'Narendra Vasant Patil',
    nameMr: 'नरेंद्र वसंत पाटील',
    nameHi: 'नरेंद्र वसंत पाटिल',
    roleEn: 'Senior Corporator (Vasai Rural belt)',
    roleMr: 'ज्येष्ठ नगरसेवक (वसई ग्रामीण पट्टा)',
    roleHi: 'वरिष्ठ पार्षद (वसई ग्रामीण)',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 10 (Ghas / Umelman)',
    wardOrConstituencyMr: 'प्रभाग १० (घास / उमराळे पट्टा)',
    imageSrc: '/bva_story_4.png',
    avatarFallback: 'NP',
    educationEn: 'Higher Secondary',
    educationMr: 'उच्च माध्यमिक',
    electoralHistoryEn: ['Re-elected Jan 2026 with consistent local ward confidence'],
    electoralHistoryMr: ['जानेवारी २०२६ मध्ये ग्रामीण भागातून फेरविजयी'],
    publicCommitmentsEn: ['Agricultural water channels and village road link paving'],
    publicCommitmentsMr: ['शेती पाणीपुरवठा व ग्रामीण अंतर्गत रस्ते डांबरीकरण'],
    officialSource: 'VVCMC Ward Office 10',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'pankaj-patil',
    nameEn: 'Pankaj Patil',
    nameMr: 'पंकज पाटील',
    nameHi: 'पंकज पाटिल',
    roleEn: 'Youth Wing Organizer & Corporator',
    roleMr: 'युवा आघाडी संघटक व नगरसेवक',
    roleHi: 'युवा मोर्चा संयोजक व पार्षद',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 5 (Virar Central)',
    wardOrConstituencyMr: 'प्रभाग ५ (विरार मध्य)',
    imageSrc: '/bva_story_5.png',
    avatarFallback: 'PP',
    educationEn: 'Bachelor of Management Studies',
    educationMr: 'व्यवस्थापन पदवीधर (BMS)',
    electoralHistoryEn: ['Youth leader elected in 2026 municipal election'],
    electoralHistoryMr: ['२०२६ पालिका निवडणुकीत युवा प्रतिनिधी म्हणून विजयी'],
    publicCommitmentsEn: ['Youth employment training and sports festivals'],
    publicCommitmentsMr: ['तरुणांसाठी रोजगार मेळावे आणि कला-क्रीडा महोत्सव'],
    officialSource: 'BVA Youth Secretariat',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'nilesh-deshmukh',
    nameEn: 'Nilesh Damodar Deshmukh',
    nameMr: 'निलेश दामोदर देशमुख',
    nameHi: 'निलेश दामोदर देशमुख',
    roleEn: 'Corporator & Public Works Facilitator',
    roleMr: 'नगरसेवक व सार्वजनिक बांधकाम समन्वयक',
    roleHi: 'पार्षद एवं निर्माण कार्य समन्वयक',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 7 (Achole Road)',
    wardOrConstituencyMr: 'प्रभाग ७ (आचोळे रोड)',
    imageSrc: '/bva_story_6.png',
    avatarFallback: 'ND',
    educationEn: 'Graduate',
    educationMr: 'पदवीधर',
    electoralHistoryEn: ['Elected in 2015, re-elected in 2026'],
    electoralHistoryMr: ['२०१५ व २०२६ मध्ये नगरसेवक म्हणून निवडून'],
    publicCommitmentsEn: ['Flyover approaches and pedestrian crossing safety'],
    publicCommitmentsMr: ['उड्डाणपूल जोड रस्ते व पादचारी सुरक्षा'],
    officialSource: 'VVCMC Gazette',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'ranjana-thalekar',
    nameEn: 'Ranjana Thalekar',
    nameMr: 'रंजना थळेकर',
    nameHi: 'रंजना थळेकर',
    roleEn: 'Senior Woman Corporator · Health & Sanitation Lead',
    roleMr: 'ज्येष्ठ महिला नगरसेविका · आरोग्य व स्वच्छता पुढाकार',
    roleHi: 'वरिष्ठ महिला पार्षद',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 11 (Navghar Manikpur)',
    wardOrConstituencyMr: 'प्रभाग ११ (नवघर-माणिकपूर)',
    imageSrc: '/bva_story_7.png',
    avatarFallback: 'RT',
    educationEn: 'Arts Graduate',
    educationMr: 'कला पदवीधर',
    electoralHistoryEn: ['Key representative of women self-help movements'],
    electoralHistoryMr: ['महिला बचत गट चळवळीतील अग्रगण्य लोकप्रतिनिधी'],
    publicCommitmentsEn: ['Sanitary waste management and doorstep health camps'],
    publicCommitmentsMr: ['कचरा व्यवस्थापन आणि घरोघरी आरोग्य तपासणी शिबिरे'],
    officialSource: 'VVCMC Health Dept',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'laurel-dias',
    nameEn: 'Laurel Dias',
    nameMr: 'लॉरेल डायस',
    nameHi: 'लॉरेल डायस',
    roleEn: 'Corporator & Cultural Heritage Custodian',
    roleMr: 'नगरसेवक व सांस्कृतिक वारसा जतन प्रतिनिधी',
    roleHi: 'पार्षद एवं सांस्कृतिक प्रतिनिधि',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 12 (Giriz / Bhuigaon)',
    wardOrConstituencyMr: 'प्रभाग १२ (गिरीज / भुईगाव पट्टा)',
    imageSrc: '/bva_story_1.png',
    avatarFallback: 'LD',
    educationEn: 'Graduate',
    educationMr: 'पदवीधर',
    electoralHistoryEn: ['Elected with substantial community mandate'],
    electoralHistoryMr: ['स्थानिक नागरिकांच्या विश्वासार्हतेवर विजयी'],
    publicCommitmentsEn: ['Heritage church lane preservation and coastal tourism sanitation'],
    publicCommitmentsMr: ['ऐतिहासिक वास्तूंचे जतन आणि पर्यटन स्वच्छता'],
    officialSource: 'VVCMC Heritage Committee',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'sunil-acholekar',
    nameEn: 'Sunil Acholekar',
    nameMr: 'सुनील आचोळेकर',
    nameHi: 'सुनील आचोळेकर',
    roleEn: 'Senior Corporator (Nalasopara Central)',
    roleMr: 'ज्येष्ठ नगरसेवक (नालासोपारा मध्य)',
    roleHi: 'वरिष्ठ पार्षद',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 9 (Tulinj / Achole)',
    wardOrConstituencyMr: 'प्रभाग ९ (तुळींज / आचोळे)',
    imageSrc: '/bva_story_2.png',
    avatarFallback: 'SA',
    educationEn: 'Commerce Graduate',
    educationMr: 'वाणिज्य पदवीधर',
    electoralHistoryEn: ['Veteran civic leader serving multiple municipal tenures'],
    electoralHistoryMr: ['दीर्घ नागरी सेवेचा अनुभव असलेले लोकप्रतिनिधी'],
    publicCommitmentsEn: ['Underground drainage pipeline expansion in high-density pockets'],
    publicCommitmentsMr: ['दाट लोकवस्तीत भूमिगत मलनिस्सारण वाहिन्यांचा विस्तार'],
    officialSource: 'VVCMC Ward Office 9',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'bina-furtado',
    nameEn: 'Bina Michael Furtado',
    nameMr: 'बिना मायकल फुर्तादो',
    nameHi: 'बीना माइकल फुर्तादो',
    roleEn: 'Corporator & Social Justice Advocate',
    roleMr: 'नगरसेविका व सामाजिक न्याय प्रतिनिधी',
    roleHi: 'पार्षद एवं सामाजिक कार्यकर्ता',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 14 (Papdy / Sandor)',
    wardOrConstituencyMr: 'प्रभाग १४ (पापडी / सांडोर)',
    imageSrc: '/bva_story_3.png',
    avatarFallback: 'BF',
    educationEn: 'Post Graduate (Social Work)',
    educationMr: 'समाजकार्य पदव्युत्तर पदवी (MSW)',
    electoralHistoryEn: ['Elected in 2015 and 2026 VVCMC elections'],
    electoralHistoryMr: ['२०१५ आणि २०२६ च्या पालिका निवडणुकीत विजयी'],
    publicCommitmentsEn: ['Senior citizen community centers and clean water monitoring'],
    publicCommitmentsMr: ['ज्येष्ठ नागरिक केंद्र आणि स्वच्छ पिण्याच्या पाण्याचे नियोजन'],
    officialSource: 'VVCMC Social Welfare Dept',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'nishad-choraghe',
    nameEn: 'Nishad Choraghe',
    nameMr: 'निशात चोरेघे',
    nameHi: 'निशाद चोरघे',
    roleEn: 'Corporator & Youth Affairs Coordinator',
    roleMr: 'नगरसेवक व युवा कार्य समन्वयक',
    roleHi: 'पार्षद एवं युवा कार्य',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 15 (Evershine City / Gokhiware)',
    wardOrConstituencyMr: 'प्रभाग १५ (एव्हरशाईन सिटी / गोखिवरे)',
    imageSrc: '/bva_story_4.png',
    avatarFallback: 'NC',
    educationEn: 'B.Sc Computer Science',
    educationMr: 'संगणक विज्ञान पदवीधर',
    electoralHistoryEn: ['Won municipal seat in Jan 2026 representing peri-urban townships'],
    electoralHistoryMr: ['जानेवारी २०२६ महापालिका निवडणुकीत विजयी'],
    publicCommitmentsEn: ['Digital grievance tracking and street lighting surveillance'],
    publicCommitmentsMr: ['डिजिटल तक्रार निवारण आणि पथदिव्यांचे आधुनिकीकरण'],
    officialSource: 'VVCMC Jan 2026 Returns',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'suvarna-patil',
    nameEn: 'Suvarna Patil',
    nameMr: 'सुवर्णा पाटील',
    nameHi: 'सुवर्णा पाटिल',
    roleEn: 'Woman Corporator & Anganwadi Infrastructure In-Charge',
    roleMr: 'नगरसेविका व अंगणवाडी विकास प्रमुख',
    roleHi: 'महिला पार्षद',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 16 (Virar East Phoolpada)',
    wardOrConstituencyMr: 'प्रभाग १६ (विरार पूर्व फुलपाडा)',
    imageSrc: '/bva_story_5.png',
    avatarFallback: 'SP2',
    educationEn: 'Bachelor of Education (B.Ed)',
    educationMr: 'बी.एड.',
    electoralHistoryEn: ['Elected corporator focusing on childcare centers and nutrition'],
    electoralHistoryMr: ['बालसंगोपन व पोषण आहार केंद्रांसाठी कार्य'],
    publicCommitmentsEn: ['Model Anganwadis and public gardens upgrade'],
    publicCommitmentsMr: ['आदर्श अंगणवाड्या आणि सार्वजनिक उद्याने सुशोभीकरण'],
    officialSource: 'VVCMC Women & Child Welfare',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'kanhaiya-bhoir',
    nameEn: 'Kanhaiya Bhoir',
    nameMr: 'कन्हैया भोईर',
    nameHi: 'कन्हैया भोईर',
    roleEn: 'Corporator & Rural Village Connector',
    roleMr: 'नगरसेवक व ग्रामीण समन्वय प्रतिनिधी',
    roleHi: 'पार्षद एवं ग्रामीण प्रतिनिधि',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 17 (Pelhar / Waliv)',
    wardOrConstituencyMr: 'प्रभाग १७ (पेल्हार / वालिव)',
    imageSrc: '/bva_story_6.png',
    avatarFallback: 'KB',
    educationEn: 'Commerce Graduate',
    educationMr: 'वाणिज्य पदवीधर',
    electoralHistoryEn: ['Secured industrial-belt rural ward in Jan 2026 election'],
    electoralHistoryMr: ['जानेवारी २०२६ च्या निवडणुकीत औद्योगिक-ग्रामीण पट्ट्यातून विजयी'],
    publicCommitmentsEn: ['Industrial zone water drainage and worker housing amenities'],
    publicCommitmentsMr: ['औद्योगिक भागातील पाण्याचा निचरा व कामगार वस्ती सुविधा'],
    officialSource: 'VVCMC Jan 2026 Gazette',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'sachin-desai',
    nameEn: 'Sachin Desai',
    nameMr: 'सचिन देसाई',
    nameHi: 'सचिन देसाई',
    roleEn: 'Corporator & Sports Infrastructure Champion',
    roleMr: 'नगरसेवक व क्रीडा विकास प्रमुख',
    roleHi: 'पार्षद एवं खेल विकास',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 18 (Manvelpada)',
    wardOrConstituencyMr: 'प्रभाग १८ (मनवेलपाडा)',
    imageSrc: '/bva_story_7.png',
    avatarFallback: 'SD',
    educationEn: 'Physical Education Graduate (B.P.Ed)',
    educationMr: 'शारीरिक शिक्षण पदवीधर',
    electoralHistoryEn: ['Elected in 2015 and 2026 elections'],
    electoralHistoryMr: ['२०१५ आणि २०२६ मध्ये जनतेचा कौल'],
    publicCommitmentsEn: ['Municipal running tracks and open gymnasiums'],
    publicCommitmentsMr: ['धावपट्टी व खुल्या व्यायामशाळांची उभारणी'],
    officialSource: 'VVCMC Sports Committee',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'atul-salunkhe',
    nameEn: 'Atul Salunkhe',
    nameMr: 'अतुल साळुंखे',
    nameHi: 'अतुल सालुंखे',
    roleEn: 'Corporator & Environmental Sanitation Lead',
    roleMr: 'नगरसेवक व पर्यावरण स्वच्छता पुढाकार',
    roleHi: 'पार्षद एवं पर्यावरण',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 19 (Chandan Naka / Nalasopara)',
    wardOrConstituencyMr: 'प्रभाग १९ (चंदन नाका / नालासोपारा)',
    imageSrc: '/bva_story_1.png',
    avatarFallback: 'AS',
    educationEn: 'Graduate',
    educationMr: 'पदवीधर',
    electoralHistoryEn: ['Key ward representative re-elected Jan 2026'],
    electoralHistoryMr: ['जानेवारी २०२६ मध्ये बहुमताने विजयी'],
    publicCommitmentsEn: ['Canal de-silting and solid waste collection frequency'],
    publicCommitmentsMr: ['नाल्यांची खोली वाढवणे व नियमित कचरा संकलन'],
    officialSource: 'VVCMC Gazette',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'sangeeta-bhere',
    nameEn: 'Sangeeta Bhere',
    nameMr: 'संगीता भेरे',
    nameHi: 'संगीता भेरे',
    roleEn: 'Woman Corporator & Tribal Community Liaison',
    roleMr: 'महिला नगरसेविका व आदिवासी समाज समन्वयक',
    roleHi: 'महिला पार्षद एवं आदिवासी समन्वयक',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 20 (Mandvi / Chandip belt)',
    wardOrConstituencyMr: 'प्रभाग २० (मांडवी / चांदीप पट्टा)',
    imageSrc: '/bva_story_2.png',
    avatarFallback: 'SB',
    educationEn: 'Secondary School',
    educationMr: 'माध्यमिक शिक्षण',
    electoralHistoryEn: ['Championed indigenous forest hamlets representation'],
    electoralHistoryMr: ['आदिवासी पाड्यांचे महापालिकेत प्रभावी प्रतिनिधित्व'],
    publicCommitmentsEn: ['Solar street lights and clean borehole water in tribal hamlets'],
    publicCommitmentsMr: ['आदिवासी पाड्यांवर सौर पथदिवे आणि स्वच्छ कूपनलिका पाणी'],
    officialSource: 'VVCMC Tribal Cell',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'kalpesh-mankar',
    nameEn: 'Kalpesh Mankar',
    nameMr: 'कल्पेश मानकर',
    nameHi: 'कल्पेश मानकर',
    roleEn: 'Corporator & Coastal Fisherfolk Representative',
    roleMr: 'नगरसेवक व मच्छीमार समाज प्रतिनिधी',
    roleHi: 'पार्षद एवं मत्स्य उद्योग प्रतिनिधि',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 21 (Arnala Koliwada)',
    wardOrConstituencyMr: 'प्रभाग २१ (अर्नाळा कोळीवाडा)',
    imageSrc: '/bva_story_3.png',
    avatarFallback: 'KM',
    educationEn: 'Graduate (Commerce)',
    educationMr: 'वाणिज्य पदवीधर',
    electoralHistoryEn: ['Won maritime constituency in Jan 2026 elections'],
    electoralHistoryMr: ['जानेवारी २०२६ च्या निवडणुकीत कोळीवाड्यातून विजयी'],
    publicCommitmentsEn: ['Jetty dredging and subsidized diesel pump access for fishermen'],
    publicCommitmentsMr: ['अर्नाळा जेटी गाळ उपसा आणि मच्छीमारांना डिझेल सुविधा'],
    officialSource: 'Fisheries Dept & VVCMC Records',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'prakash-rodrigues',
    nameEn: 'Prakash Rodrigues',
    nameMr: 'प्रकाश रॉड्रिग्स',
    nameHi: 'प्रकाश रॉड्रिग्स',
    roleEn: 'Corporator & Agricultural Lands Advocate',
    roleMr: 'नगरसेवक व शेतजमीन हक्क प्रतिनिधी',
    roleHi: 'पार्षद एवं किसान प्रतिनिधि',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 22 (Agashi / Vatar)',
    wardOrConstituencyMr: 'प्रभाग २२ (आगाशी / वटार)',
    imageSrc: '/bva_story_4.png',
    avatarFallback: 'PR2',
    educationEn: 'Diploma in Agriculture',
    educationMr: 'कृषी पदविका',
    electoralHistoryEn: ['Continuous grassroots advocate for traditional horticulturists'],
    electoralHistoryMr: ['स्थानिक वाडेकर व बागायतदारांचे हक्काचे नेतृत्व'],
    publicCommitmentsEn: ['Protection of Vasai banana (Rajeli kela) orchards and irrigation wells'],
    publicCommitmentsMr: ['वसईच्या प्रसिद्ध सुकेळी व बागायती विहिरींचे संरक्षण'],
    officialSource: 'VVCMC Agricultural Council',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'afif-sheikh',
    nameEn: 'Afif Sheikh',
    nameMr: 'अफीफ शेख',
    nameHi: 'अफीफ शेख',
    roleEn: 'Corporator & Minority Welfare Coordinator',
    roleMr: 'नगरसेवक व अल्पसंख्याक कल्याण समन्वयक',
    roleHi: 'पार्षद एवं अल्पसंख्यक कल्याण',
    category: 'corporator',
    status: 'ACTIVE',
    currentAffiliation: 'Bahujan Vikas Aaghadi',
    wardOrConstituencyEn: 'Ward 23 (Nalasopara West Station Road)',
    wardOrConstituencyMr: 'प्रभाग २३ (नालासोपारा पश्चिम स्टेशन रोड)',
    imageSrc: '/bva_story_5.png',
    avatarFallback: 'AS2',
    educationEn: 'Bachelor of Science (IT)',
    educationMr: 'माहिती तंत्रज्ञान पदवीधर (B.Sc IT)',
    electoralHistoryEn: ['Elected in Jan 2026 with diverse community endorsement'],
    electoralHistoryMr: ['जानेवारी २०२६ महापालिका निवडणुकीत सर्वसमावेशक पाठिंब्याने विजयी'],
    publicCommitmentsEn: ['Commercial station road decongestion and community skill libraries'],
    publicCommitmentsMr: ['स्टेशन रोड वाहतूक कोंडी निवारण व कौशल्य विकास वाचनालय'],
    officialSource: 'VVCMC Jan 2026 Election Returns',
    lastVerifiedDate: '2026-11-03',
    verificationStatus: 'VERIFIED'
  }
];
