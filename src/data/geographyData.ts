export interface ZoneGeography {
  id: string;
  code: string;
  nameEn: string;
  nameMr: string;
  nameHi: string;
  type: 'Assembly Constituency' | 'Municipal Zone' | 'District Division';
  electorateOrPopulation: string;
  areaSqKm: string;
  currentElectedRepresentativeEn: string;
  currentElectedRepresentativeMr: string;
  historicalDominanceEn: string;
  historicalDominanceMr: string;
  keyLocalitiesEn: string[];
  keyLocalitiesMr: string[];
  criticalInfrastructureEn: string[];
  criticalInfrastructureMr: string[];
  coordinates: { x: number; y: number; r: number };
}

export const CONSTITUENCY_ZONES: ZoneGeography[] = [
  {
    id: 'ac-132',
    code: '132',
    nameEn: '132 - Nalasopara Assembly Constituency',
    nameMr: '१३२ - नालासोपारा विधानसभा मतदारसंघ',
    nameHi: '132 - नालासोपारा विधानसभा क्षेत्र',
    type: 'Assembly Constituency',
    electorateOrPopulation: '5,84,120 Electors (2024)',
    areaSqKm: '112.4 sq km',
    currentElectedRepresentativeEn: 'Rajan Naik (BJP - Elected Nov 2024); previously Kshitij Thakur (BVA - 2009 to 2024)',
    currentElectedRepresentativeMr: 'राजन नाईक (भाजप - नोव्हेंबर २०२४); पूर्वी क्षितिज ठाकूर (बविआ - २००९ ते २०२४)',
    historicalDominanceEn: 'BVA won 3 consecutive assembly terms (2009, 2014, 2019) under Kshitij Thakur.',
    historicalDominanceMr: 'क्षितिज ठाकूर यांच्या नेतृत्वाखाली बविआने सलग ३ वेळा विजय संपादन केला (२००९, २०१४, २०१९).',
    keyLocalitiesEn: ['Nalasopara East', 'Nalasopara West', 'Tulinj', 'Achole', 'Moregaon', 'Evershine City', 'Bolinj', 'Virar East'],
    keyLocalitiesMr: ['नालासोपारा पूर्व', 'नालासोपारा पश्चिम', 'तुळींज', 'आचोळे', 'मोरेगाव', 'एव्हरशाईन सिटी', 'बोळींज', 'विरार पूर्व'],
    criticalInfrastructureEn: ['Surya Water Kashidkopar Balancing Reservoir', 'Nalasopara 200-Bed Sub-District Civic Hospital', 'Achole ROB Flyover'],
    criticalInfrastructureMr: ['काशीदकोपर मुख्य जलकुंभ (सूर्य योजना)', 'नालासोपारा २०० खाटांचे रुग्णालय', 'आचोळे उड्डाणपूल'],
    coordinates: { x: 260, y: 190, r: 52 }
  },
  {
    id: 'ac-133',
    code: '133',
    nameEn: '133 - Vasai Assembly Constituency',
    nameMr: '१३३ - वसई विधानसभा मतदारसंघ',
    nameHi: '133 - वसई विधानसभा क्षेत्र',
    type: 'Assembly Constituency',
    electorateOrPopulation: '3,82,450 Electors (2024)',
    areaSqKm: '98.6 sq km',
    currentElectedRepresentativeEn: 'Sneha Dube Pandit (BJP - Elected Nov 2024); previously Hitendra Thakur (BVA / Ind - 1990 to 2009, 2014 to 2024)',
    currentElectedRepresentativeMr: 'स्नेहा दुबे पंडित (भाजप - नोव्हेंबर २०२४); पूर्वी हितेंद्र ठाकूर (बविआ / अपक्ष - ५ कार्यकाळ)',
    historicalDominanceEn: 'Hitendra Thakur served 5 historic terms representing Vasai in Maharashtra Vidhan Sabha.',
    historicalDominanceMr: 'हितेंद्र ठाकूर यांनी वसईचे विधानसभेत विक्रमी ५ वेळा प्रतिनिधित्व केले.',
    keyLocalitiesEn: ['Vasai West', 'Navghar-Manikpur', 'Papdy', 'Sandor', 'Giriz', 'Bhuigaon', 'Agashi', 'Arnala', 'Rangaon'],
    keyLocalitiesMr: ['वसई पश्चिम', 'नवघर-माणिकपूर', 'पापडी', 'सांडोर', 'गिरीज', 'भुईगाव', 'आगाशी', 'अर्नाळा', 'रानगाव'],
    criticalInfrastructureEn: ['Historic Vasai Fort Heritage Zone', 'Manikpur Municipal Sports Complex', 'Arnala Fishing Jetty & Coastal Bund'],
    criticalInfrastructureMr: ['ऐतिहासिक वसई किल्ला परिसर', 'माणिकपूर क्रीडा संकुल', 'अर्नाळा मच्छीमार जेटी व बंधारा'],
    coordinates: { x: 230, y: 310, r: 48 }
  },
  {
    id: 'ac-131',
    code: '131',
    nameEn: '131 - Boisar Assembly Constituency (ST)',
    nameMr: '१३१ - बोईसर विधानसभा मतदारसंघ (अ.ज.)',
    nameHi: '131 - बोईसर विधानसभा क्षेत्र (अ.ज.)',
    type: 'Assembly Constituency',
    electorateOrPopulation: '3,18,540 Electors',
    areaSqKm: '480.2 sq km',
    currentElectedRepresentativeEn: 'Vilas Tare (2024); previously Rajesh Raghunath Patil (BVA - 2019 to 2024)',
    currentElectedRepresentativeMr: 'विलास तरे (२०२४); पूर्वी राजेश रघुनाथ पाटील (बविआ - २०१९ ते २०२४)',
    historicalDominanceEn: 'Rajesh Patil won in 2019 securing substantial rural and tribal belt support.',
    historicalDominanceMr: 'राजेश पाटील यांनी २०१९ मध्ये ग्रामीण व आदिवासी भागात बविआचा झेंडा फडकवला.',
    keyLocalitiesEn: ['Boisar MIDC', 'Tarapur coastal corridor', 'Manor', 'Palghar rural border', 'Wada road junction'],
    keyLocalitiesMr: ['बोईसर एमआयडीसी', 'तारापूर सागरी पट्टा', 'मनोर', 'पालघर ग्रामीण सीमा', 'वाडा रस्ता जंक्शन'],
    criticalInfrastructureEn: ['Tarapur Atomic Power Station periphery', 'Boisar Industrial Effluent Treatment Plant', 'Surya River canal network'],
    criticalInfrastructureMr: ['तारापूर अणुऊर्जा केंद्र परिसर', 'बोईसर सांडपाणी प्रक्रिया प्रकल्प', 'सूर्य कालवा सिंचन नेटवर्क'],
    coordinates: { x: 320, y: 90, r: 42 }
  },
  {
    id: 'pc-22',
    code: '22',
    nameEn: '22 - Palghar Parliamentary Constituency (ST)',
    nameMr: '२२ - पालघर लोकसभा मतदारसंघ (अ.ज.)',
    nameHi: '22 - पालघर लोकसभा क्षेत्र (अ.ज.)',
    type: 'District Division',
    electorateOrPopulation: '21,45,000 Electors across 6 Assembly Segments',
    areaSqKm: '5,344 sq km (Entire Palghar District)',
    currentElectedRepresentativeEn: 'Dr. Hemant Savara (BJP - 2024); BVA won in 2009 (Baliram Jadhav)',
    currentElectedRepresentativeMr: 'डॉ. हेमंत सवरा (भाजप - २०२४); बविआ २००९ मध्ये विजयी (बळीराम जाधव)',
    historicalDominanceEn: 'Baliram Sukur Jadhav served as the 15th Lok Sabha MP representing BVA.',
    historicalDominanceMr: 'बळीराम जाधव यांनी १५ व्या लोकसभेत बविआचे पहिले खासदार म्हणून काम केले.',
    keyLocalitiesEn: ['Vasai', 'Virar', 'Nalasopara', 'Palghar', 'Dahanu', 'Talasari', 'Vikramgad', 'Mokhada', 'Jawhar'],
    keyLocalitiesMr: ['वसई', 'विरार', 'नालासोपारा', 'पालघर', 'डहाणू', 'तलासरी', 'विक्रमगड', 'मोखाडा', 'जव्हार'],
    criticalInfrastructureEn: ['Western Railway Dahanu Corridor', 'Vadhavan Port proposed periphery', 'Surya Regional Dam'],
    criticalInfrastructureMr: ['पश्चिम रेल्वे डहाणू कॉरिडॉर', 'वाढवण बंदर सीमा परिसर', 'सूर्य धामणी व कवडास धरण'],
    coordinates: { x: 380, y: 160, r: 65 }
  }
];

export const MUNICIPAL_WARD_ZONES = [
  {
    zoneLetter: 'Zone A',
    nameEn: 'Virar North / Bolinj (Includes Ward 1D)',
    nameMr: 'विरार उत्तर / बोळींज (प्रभाग १-ड समाविष्ट)',
    councillorsCount: 14,
    bvaSeatsHeld: 11,
    keyLeader: 'Sadanand Gajanan Patil (Ward 1D: 11,016 votes)',
    characteristicsEn: 'Rapidly growing residential sector with major Viva campus and agricultural buffer.',
    characteristicsMr: 'वेगाने वाढणारा निवासी भाग; विवा शैक्षणिक संकुल व ग्रामीण पट्टा.'
  },
  {
    zoneLetter: 'Zone B',
    nameEn: 'Virar East / Phoolpada / Totale Lake',
    nameMr: 'विरार पूर्व / फुलपाडा / तोताळे तलाव',
    councillorsCount: 13,
    bvaSeatsHeld: 9,
    keyLeader: 'Pravin Shetty & Suvarna Patil',
    characteristicsEn: 'Traditional village gaothans merged with modern housing societies.',
    characteristicsMr: 'गावठाण व नवीन गृहनिर्माण सोसायट्यांचा संगम.'
  },
  {
    zoneLetter: 'Zone C',
    nameEn: 'Nalasopara Central / Achole / Tulinj',
    nameMr: 'नालासोपारा मध्य / आचोळे / तुळींज',
    councillorsCount: 16,
    bvaSeatsHeld: 10,
    keyLeader: 'Sunil Acholekar & Ajiv Patil',
    characteristicsEn: 'Extremely high commuter population density and commercial hubs.',
    characteristicsMr: 'अतिशय दाट लोकवस्ती आणि चाकरमान्यांचा मोठा व्यापारी केंद्र.'
  },
  {
    zoneLetter: 'Zone D',
    nameEn: 'Nalasopara West / Station Road',
    nameMr: 'नालासोपारा पश्चिम / स्टेशन रोड',
    councillorsCount: 12,
    bvaSeatsHeld: 8,
    keyLeader: 'Prashant Raut & Afif Sheikh',
    characteristicsEn: 'Major civic hospital hub, transit junctions, and multi-community settlements.',
    characteristicsMr: 'महापालिका रुग्णालय, परिवहन केंद्र व सर्वसमावेशक वस्त्या.'
  },
  {
    zoneLetter: 'Zone E',
    nameEn: 'Navghar - Manikpur / Vasai East',
    nameMr: 'नवघर - माणिकपूर / वसई पूर्व',
    councillorsCount: 14,
    bvaSeatsHeld: 9,
    keyLeader: 'Ranjana Thalekar & Nilesh Deshmukh',
    characteristicsEn: 'Industrial estates, highway access to NH-48, and suburban complexes.',
    characteristicsMr: 'औद्योगिक वसाहत व महामार्गाशी जोडलेला नागरी पट्टा.'
  },
  {
    zoneLetter: 'Zone F',
    nameEn: 'Vasai West / Coastal Maritime Belts (Sandor/Papdy)',
    nameMr: 'वसई पश्चिम / सागरी किनारपट्टी पट्टा (सांडोर/पापडी)',
    councillorsCount: 15,
    bvaSeatsHeld: 11,
    keyLeader: 'Marshal Dominic Lopis & Bina Furtado',
    characteristicsEn: 'Ancestral East Indian villages, banana plantations, and fishing harbors.',
    characteristicsMr: 'पारंपरिक ईस्ट इंडियन गावे, बागायती शेती व मच्छीमार बंदरे.'
  }
];
