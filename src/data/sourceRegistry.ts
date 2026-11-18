/**
 * SOURCE REGISTRY (sourceRegistry.ts)
 * Central repository of verified primary public documentation, government portals,
 * election commissions, and administrative gazettes for Bahujan Vikas Aaghadi (BVA).
 */

export interface SourceRecord {
  id: string;
  title: string;
  titleMr: string;
  publisher: string;
  category: 'election_commission' | 'state_gazette' | 'district_administration' | 'statutory_authority' | 'trust_archive' | 'court_record';
  url: string;
  isOfficialGov: boolean;
  publicationDate?: string;
  lastVerifiedDate: string;
  verificationStatus: 'verified' | 'reported' | 'pending-review';
  coverage: string;
  notes: string;
}

export const OFFICIAL_SOURCES: SourceRecord[] = [
  {
    id: 'src-palghar-reps',
    title: "Palghar District Official People's Representatives Directory",
    titleMr: 'पालघर जिल्हा अधिकृत लोकप्रतिनिधी यादी',
    publisher: 'District Administration Palghar, Government of Maharashtra',
    category: 'district_administration',
    url: 'https://palghar.gov.in/en/peoples-representative/',
    isOfficialGov: true,
    lastVerifiedDate: '2026-11-07',
    verificationStatus: 'verified',
    coverage: 'Sitting MLAs for Palghar District: AC 132 Nalasopara (Rajan B. Naik), AC 133 Vasai (Sneha Dube Pandit)',
    notes: 'Official administrative portal confirming 2024 assembly elected representatives.'
  },
  {
    id: 'src-palghar-constituencies',
    title: 'Palghar District Assembly & Parliamentary Constituencies',
    titleMr: 'पालघर जिल्हा विधानसभा व लोकसभा मतदारसंघ यादी',
    publisher: 'District Administration Palghar, Government of Maharashtra',
    category: 'district_administration',
    url: 'https://palghar.gov.in/en/constituencies-2/',
    isOfficialGov: true,
    lastVerifiedDate: '2026-11-07',
    verificationStatus: 'verified',
    coverage: 'Delimitation of AC 128 Dahanu, AC 129 Vikramgad, AC 130 Palghar, AC 131 Boisar, AC 132 Nalasopara, AC 133 Vasai',
    notes: 'Primary district administrative map and constituency directory.'
  },
  {
    id: 'src-ceo-vs-2024',
    title: 'Maharashtra Vidhan Sabha General Election 2024 Official Returns',
    titleMr: 'महाराष्ट्र विधानसभा सार्वत्रिक निवडणूक २०२४ अधिकृत निकाल',
    publisher: 'Chief Electoral Officer (CEO), Maharashtra',
    category: 'election_commission',
    url: 'https://ceoelection.maharashtra.gov.in/ceo/Vidhan-Sabha-2024.aspx',
    isOfficialGov: true,
    publicationDate: '2024-11-23',
    lastVerifiedDate: '2026-11-07',
    verificationStatus: 'verified',
    coverage: 'Certified candidate vote tallies, margins, and Form-20 final result sheets across all Maharashtra constituencies.',
    notes: 'Primary election commission source for 2024 Maharashtra Legislative Assembly results.'
  },
  {
    id: 'src-form20-132-nalasopara',
    title: '132 Nalasopara Assembly General Election-2024 Sample - 20 (Form-20)',
    titleMr: '१३२ नालासोपारा विधानसभा सार्वत्रिक निवडणूक २०२४ प्रपत्र-२०',
    publisher: 'Returning Officer 132-Nalasopara & District Election Officer, Palghar',
    category: 'election_commission',
    url: 'https://palghar.gov.in/en/form/132-nalasopara-assembly-general-election-2024-sample-20-form-20/',
    isOfficialGov: true,
    publicationDate: '2024-11-23',
    lastVerifiedDate: '2026-11-07',
    verificationStatus: 'verified',
    coverage: 'Certified polling-station-wise final vote count for 132-Nalasopara.',
    notes: 'Certifies Rajan B. Naik (BJP) 1,32,042 votes vs Kshitij Thakur (BVA) 1,07,432 votes; Margin: 24,610.'
  },
  {
    id: 'src-form20-128-dahanu',
    title: '128 Dahanu Assembly General Election-2024 Sample - 20 (Form-20)',
    titleMr: '१२८ डहाणू विधानसभा सार्वत्रिक निवडणूक २०२४ प्रपत्र-२०',
    publisher: 'Returning Officer 128-Dahanu & District Election Officer, Palghar',
    category: 'election_commission',
    url: 'https://palghar.gov.in/en/form/128-dahanu-assembly-general-election-2024-sample-20-form-20/',
    isOfficialGov: true,
    publicationDate: '2024-11-23',
    lastVerifiedDate: '2026-11-07',
    verificationStatus: 'verified',
    coverage: 'Official Form-20 return for Palghar district Dahanu segment.',
    notes: 'Official reference proving electoral record publishing on the Palghar district government repository.'
  },
  {
    id: 'src-ceo-ac-directory',
    title: 'CEO Maharashtra Official Assembly Constituencies List (PDF)',
    titleMr: 'महाराष्ट्र मुख्य निवडणूक अधिकारी अधिकृत विधानसभा मतदारसंघ यादी',
    publisher: 'Chief Electoral Officer, Maharashtra',
    category: 'election_commission',
    url: 'https://ceoelection.maharashtra.gov.in/Downloads/PDF/ACs.pdf',
    isOfficialGov: true,
    lastVerifiedDate: '2026-11-07',
    verificationStatus: 'verified',
    coverage: 'Definitive listing of all 288 assembly segments in Maharashtra including AC 132 and AC 133.',
    notes: 'Official state boundary reference defining Palghar district constituencies.'
  },
  {
    id: 'src-ceo-pc-directory',
    title: 'CEO Maharashtra Official Parliamentary Constituencies List (PDF)',
    titleMr: 'महाराष्ट्र मुख्य निवडणूक अधिकारी अधिकृत लोकसभा मतदारसंघ यादी',
    publisher: 'Chief Electoral Officer, Maharashtra',
    category: 'election_commission',
    url: 'https://ceoelection.maharashtra.gov.in/Downloads/PDF/PCs.pdf',
    isOfficialGov: true,
    lastVerifiedDate: '2026-11-07',
    verificationStatus: 'verified',
    coverage: 'Definitive parliamentary delimitation linking AC 132 & 133 to 22-Palghar (ST) Lok Sabha seat.',
    notes: 'Delimitation Order 2008 schedule.'
  },
  {
    id: 'src-ceo-maps',
    title: 'CEO Maharashtra Election Maps & Constituency Search Portal',
    titleMr: 'महाराष्ट्र निवडणूक नकाशे व मतदारसंघ शोध पोर्टल',
    publisher: 'Chief Electoral Officer, Maharashtra',
    category: 'election_commission',
    url: 'https://ceoelection.maharashtra.gov.in/SearchInfo/maps.aspx',
    isOfficialGov: true,
    lastVerifiedDate: '2026-11-07',
    verificationStatus: 'verified',
    coverage: 'Official administrative GIS delimitation maps for parliamentary and assembly segments.',
    notes: 'Primary portal for official election cartography across Maharashtra.'
  },
  {
    id: 'src-eci-statistical-reports',
    title: 'Election Commission of India (ECI) General Election Statistical Reports',
    titleMr: 'भारत निवडणूक आयोग सार्वत्रिक निवडणूक सांख्यिकी अहवाल',
    publisher: 'Election Commission of India (ECI)',
    category: 'election_commission',
    url: 'https://www.eci.gov.in/statistical-reports',
    isOfficialGov: true,
    lastVerifiedDate: '2026-11-07',
    verificationStatus: 'verified',
    coverage: 'Historical election returns from 1990 to 2019 for Maharashtra assembly and Lok Sabha.',
    notes: 'Certifies Hitendra Thakur victories in 1990, 1995, 1999, 2004, 2014, 2019 and Kshitij Thakur in 2009, 2014, 2019.'
  },
  {
    id: 'src-vvcmc-gazette-2009',
    title: 'Establishment of Vasai-Virar City Municipal Corporation Notification',
    titleMr: 'वसई-विरार शहर महानगरपालिका स्थापना शासकीय राजपत्र',
    publisher: 'Urban Development Department (UDD), Government of Maharashtra',
    category: 'state_gazette',
    url: 'https://vvcmc.in/en/history/',
    isOfficialGov: true,
    publicationDate: '2009-07-03',
    lastVerifiedDate: '2026-11-07',
    verificationStatus: 'verified',
    coverage: 'Amalgamation of 4 municipal councils (Virar, Vasai, Nalasopara, Navghar-Manikpur) and 53 villages into VVCMC.',
    notes: 'Official Gazette Notification dated 3 July 2009 creating the municipal corporation.'
  },
  {
    id: 'src-mmrda-surya-project',
    title: 'Surya Regional Bulk Water Supply Scheme (403 MLD Project Document)',
    titleMr: 'सूर्य प्रादेशिक पाणीपुरवठा योजना (४०३ दशलक्ष लिटर प्रकल्प अहवाल)',
    publisher: 'Mumbai Metropolitan Region Development Authority (MMRDA)',
    category: 'statutory_authority',
    url: 'https://mmrda.maharashtra.gov.in/',
    isOfficialGov: true,
    publicationDate: '2023-12-28',
    lastVerifiedDate: '2026-11-07',
    verificationStatus: 'verified',
    coverage: '403 MLD total regional water scheme from Surya Dam, Kawdas intake: 185 MLD allocated to VVCMC, 218 MLD to MBMC.',
    notes: 'MMRDA executed and funded project; BVA leadership pursued persistent legislative advocacy in Vidhan Sabha.'
  },
  {
    id: 'src-sec-vvcmc-2015',
    title: 'State Election Commission Maharashtra — VVCMC General Elections 2015 Results',
    titleMr: 'राज्य निवडणूक आयोग महाराष्ट्र — वसई-विरार मनपा सार्वत्रिक निवडणूक २०१५ निकाल',
    publisher: 'State Election Commission (SEC) Maharashtra',
    category: 'election_commission',
    url: 'https://mahasec.maharashtra.gov.in/',
    isOfficialGov: true,
    publicationDate: '2015-06-15',
    lastVerifiedDate: '2026-11-07',
    verificationStatus: 'verified',
    coverage: 'VVCMC 2015 civic elections: BVA won 106 seats out of 115 total seats (absolute majority).',
    notes: 'Last completed regular municipal general elections held for VVCMC; civic body placed under State Administrator in 2020.'
  },
  {
    id: 'src-viva-trust-charter',
    title: 'Vishnu Waman Thakur Charitable Trust Institutional Affiliation',
    titleMr: 'विष्णू वामन ठाकूर चॅरिटेबल ट्रस्ट महाविद्यालयीन संलग्नता',
    publisher: 'University of Mumbai & Directorate of Technical Education (DTE)',
    category: 'trust_archive',
    url: 'https://vivacollege.org/',
    isOfficialGov: false,
    publicationDate: '2000-08-15',
    lastVerifiedDate: '2026-11-07',
    verificationStatus: 'verified',
    coverage: 'Viva College educational campus in Virar established by charitable trust headed by Hitendra Thakur family.',
    notes: 'Private educational trust initiative providing higher education across arts, science, commerce, law, and engineering.'
  }
];
