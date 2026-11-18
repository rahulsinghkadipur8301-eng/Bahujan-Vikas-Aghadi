/**
 * VERIFIED FACTS & CLAIM REGISTRY (verifiedFacts.ts)
 * Source-controlled claim registry enforcing factual integrity, transparent citations,
 * dated status, and explicit verification state.
 */

export interface FactClaim {
  claimId: string;
  claimTextEn: string;
  claimTextMr: string;
  personOrEntity: string;
  category: 'leadership' | 'electoral' | 'governance' | 'infrastructure' | 'history' | 'party';
  validFrom: string;
  validTo?: string; // empty if ongoing/historical fact
  asOfDate: string;
  verificationStatus: 'verified' | 'reported' | 'pending-review';
  sourceTitle: string;
  sourceUrl: string;
  sourcePublisher: string;
  publicationDate?: string;
  lastReviewed: string;
  reviewerNote: string;
}

export const VERIFIED_FACTS_REGISTRY: FactClaim[] = [
  {
    claimId: 'fact-leader-hitendra-terms',
    claimTextEn: 'Hitendra Thakur has served 5 completed terms as Member of the Maharashtra Legislative Assembly from Vasai constituency (1990, 1995, 1999, 2004, 2014). In November 2024, he contested from 133-Vasai as BVA candidate.',
    claimTextMr: 'हितेंद्र ठाकूर यांनी वसई मतदारसंघातून महाराष्ट्र विधानसभेत ५ कार्यकाळ (१९९०, १९९५, १९९९, २००४, २०१४) आमदार म्हणून जनतेचे प्रतिनिधित्व केले आहे. नोव्हेंबर २०२४ मध्ये त्यांनी १३३-वसई मधून बविआ उमेदवार म्हणून निवडणूक लढवली.',
    personOrEntity: 'Hitendra Thakur (हितेंद्र ठाकूर)',
    category: 'leadership',
    validFrom: '1990-03-01',
    validTo: '2024-11-23',
    asOfDate: '2026-11-07',
    verificationStatus: 'verified',
    sourceTitle: 'Election Commission of India (ECI) Maharashtra Assembly Statistical Reports (1990–2024)',
    sourceUrl: 'https://www.eci.gov.in/statistical-reports',
    sourcePublisher: 'Election Commission of India (ECI)',
    publicationDate: '2024-11-23',
    lastReviewed: '2026-11-07',
    reviewerNote: 'Accurately identified as Former 5-Term MLA of Vasai. Not a sitting MLA following the Nov 2024 general election.'
  },
  {
    claimId: 'fact-leader-kshitij-terms',
    claimTextEn: 'Kshitij Thakur was elected to the Maharashtra Legislative Assembly from 132-Nalasopara across three consecutive terms (2009–2014, 2014–2019, 2019–2024). In November 2024, he contested from 132-Nalasopara as BVA candidate.',
    claimTextMr: 'क्षितिज ठाकूर हे १३२-नालासोपारा विधानसभा मतदारसंघातून सलग ३ कार्यकाळ (२००९–२०१४, २०१४–२०१९, २०१९–२०२४) महाराष्ट्र विधानसभेत आमदार राहिले. नोव्हेंबर २०२४ मध्ये त्यांनी १३२-नालासोपारा येथून निवडणूक लढवली.',
    personOrEntity: 'Kshitij Thakur (क्षितिज ठाकूर)',
    category: 'leadership',
    validFrom: '2009-10-22',
    validTo: '2024-11-23',
    asOfDate: '2026-11-07',
    verificationStatus: 'verified',
    sourceTitle: 'ECI Official Results (2009, 2014, 2019, 2024)',
    sourceUrl: 'https://ceoelection.maharashtra.gov.in/ceo/Vidhan-Sabha-2024.aspx',
    sourcePublisher: 'Chief Electoral Officer (CEO), Maharashtra & ECI',
    publicationDate: '2024-11-23',
    lastReviewed: '2026-11-07',
    reviewerNote: 'Accurately designated as Former 3-Term MLA of 132-Nalasopara. Not a sitting MLA following Nov 2024.'
  },
  {
    claimId: 'fact-rep-sitting-132-nalasopara',
    claimTextEn: 'As per official Palghar district records, Rajan B. Naik (BJP) is the sitting MLA representing 132-Nalasopara following the November 2024 Assembly election (1,32,042 votes vs Kshitij Thakur 1,07,432 votes, margin 24,610).',
    claimTextMr: 'पालघर जिल्ह्याच्या अधिकृत नोंदीनुसार, नोव्हेंबर २०२४ च्या विधानसभा निवडणुकीनंतर राजन बी. नाईक (भाजप) हे १३२-नालासोपारा मतदारसंघाचे विद्यमान आमदार आहेत (राजन नाईक १,३२,०४२ मते वि. क्षितिज ठाकूर १,०७,४३२ मते, फरक २४,६१०).',
    personOrEntity: 'Rajan B. Naik (राजन बी. नाईक)',
    category: 'electoral',
    validFrom: '2024-11-23',
    asOfDate: '2026-11-07',
    verificationStatus: 'verified',
    sourceTitle: 'Palghar District Official Directory of People’s Representatives & Form-20 Return',
    sourceUrl: 'https://palghar.gov.in/en/form/132-nalasopara-assembly-general-election-2024-sample-20-form-20/',
    sourcePublisher: 'District Election Officer, Palghar',
    publicationDate: '2024-11-23',
    lastReviewed: '2026-11-07',
    reviewerNote: 'Verified against Palghar government directory and certified Form-20 return.'
  },
  {
    claimId: 'fact-rep-sitting-133-vasai',
    claimTextEn: 'As per official Palghar district records, Sneha Dube Pandit (BJP) is the sitting MLA representing 133-Vasai following the November 2024 Assembly election (1,02,284 votes vs Hitendra Thakur 71,948 votes, margin 30,336).',
    claimTextMr: 'पालघर जिल्ह्याच्या अधिकृत नोंदीनुसार, नोव्हेंबर २०२४ च्या विधानसभा निवडणुकीनंतर स्नेहा दुबे पंडित (भाजप) या १३३-वसई मतदारसंघाच्या विद्यमान आमदार आहेत (स्नेहा पंडित १,०२,२८४ मते वि. हितेंद्र ठाकूर ७१,९४८ मते, फरक ३०,३३६).',
    personOrEntity: 'Sneha Dube Pandit (स्नेहा दुबे पंडित)',
    category: 'electoral',
    validFrom: '2024-11-23',
    asOfDate: '2026-11-07',
    verificationStatus: 'verified',
    sourceTitle: 'CEO Maharashtra Official Election Results 2024 & Palghar District Directory',
    sourceUrl: 'https://palghar.gov.in/en/peoples-representative/',
    sourcePublisher: 'Chief Electoral Officer, Maharashtra',
    publicationDate: '2024-11-23',
    lastReviewed: '2026-11-07',
    reviewerNote: 'Verified against Maharashtra CEO official election portal and Palghar administration listing.'
  },
  {
    claimId: 'fact-vvcmc-establishment-date',
    claimTextEn: 'The Vasai-Virar City Municipal Corporation (VVCMC) was officially established by the Government of Maharashtra via Urban Development Department gazette notification on 3 July 2009, consolidating 4 municipal councils.',
    claimTextMr: 'वसई-विरार शहर महानगरपालिकेची स्थापना महाराष्ट्र शासनाच्या नगर विकास विभागाने ३ जुलै २००९ रोजी शासकीय राजपत्राद्वारे ४ नगरपालिकांचे एकत्रीकरण करून अधिकृतपणे केली.',
    personOrEntity: 'Vasai-Virar City Municipal Corporation (VVCMC)',
    category: 'governance',
    validFrom: '2009-07-03',
    asOfDate: '2026-11-07',
    verificationStatus: 'verified',
    sourceTitle: 'Maharashtra Urban Development Department Gazette Notification',
    sourceUrl: 'https://vvcmc.in/en/history/',
    sourcePublisher: 'Government of Maharashtra',
    publicationDate: '2009-07-03',
    lastReviewed: '2026-11-07',
    reviewerNote: 'Official civic date. Municipal formation was a statutory act of the state government following sustained multi-party and public advocacy.'
  },
  {
    claimId: 'fact-surya-water-allocation',
    claimTextEn: 'The Surya Regional Water Supply Scheme is a 403 MLD bulk water project planned, engineered, and executed by MMRDA. Under statutory allocation, 185 MLD of bulk treated water is earmarked for VVCMC, and 218 MLD for Mira-Bhayandar.',
    claimTextMr: 'सूर्य प्रादेशिक पाणीपुरवठा योजना हा ४०३ दशलक्ष लिटर (MLD) क्षमतेचा प्रकल्प एमएमआरडीए (MMRDA) द्वारे राबवला गेला आहे. शासकीय वाटपानुसार १८५ MLD शुद्ध पाणी वसई-विरार पालिकेला आणि २१८ MLD मिरा-भाईंदर पालिकेला मंजूर आहे.',
    personOrEntity: 'MMRDA & VVCMC',
    category: 'infrastructure',
    validFrom: '2016-10-18',
    asOfDate: '2026-11-07',
    verificationStatus: 'verified',
    sourceTitle: 'MMRDA Surya Regional Bulk Water Scheme Project Charter & Allocation Order',
    sourceUrl: 'https://mmrda.maharashtra.gov.in/',
    sourcePublisher: 'Mumbai Metropolitan Region Development Authority',
    publicationDate: '2023-12-28',
    lastReviewed: '2026-11-07',
    reviewerNote: 'Execution credited strictly to MMRDA; BVA legislative advocacy in Maharashtra Assembly highlighted as parliamentary follow-up.'
  },
  {
    claimId: 'fact-vvcmc-elections-historical',
    claimTextEn: 'In completed general elections of the VVCMC, BVA won 55 out of 89 seats in June 2010 (first civic polls) and 106 out of 115 seats in June 2015 (absolute majority). The 2015 term expired in 2020, following which an Administrator was appointed.',
    claimTextMr: 'वसई-विरार महापालिकेच्या पूर्ण झालेल्या सार्वत्रिक निवडणुकांमध्ये बविआने जून २०१० (पहिल्या पालिका निवडणुका) मध्ये ८९ पैकी ५५ जागा आणि जून २०१५ मध्ये ११५ पैकी १०६ जागा जिंकून स्पष्ट बहुमत मिळवले. २०२० मध्ये मुदत संपल्यानंतर प्रशासक नियुक्त करण्यात आला.',
    personOrEntity: 'Bahujan Vikas Aaghadi in VVCMC',
    category: 'electoral',
    validFrom: '2010-06-15',
    validTo: '2020-06-15',
    asOfDate: '2026-11-07',
    verificationStatus: 'verified',
    sourceTitle: 'State Election Commission (SEC) Maharashtra Certified Municipal Returns (2010, 2015)',
    sourceUrl: 'https://mahasec.maharashtra.gov.in/',
    sourcePublisher: 'State Election Commission Maharashtra',
    publicationDate: '2015-06-15',
    lastReviewed: '2026-11-07',
    reviewerNote: 'Certified election results. Any claim of subsequent elections having already concluded is unverified.'
  },
  {
    claimId: 'fact-vvcmc-subsequent-polls-status',
    claimTextEn: 'Subsequent VVCMC general municipal elections have been pending notification and scheduling by the State Election Commission under court directions and local body restructuring; the civic body remains under administrative governance.',
    claimTextMr: 'वसई-विरार महापालिकेच्या पुढील सार्वत्रिक निवडणुकांची घोषणा राज्य निवडणूक आयोगामार्फत प्रलंबित असून पालिका कारभार प्रशासकाच्या नियंत्रणाखाली आहे.',
    personOrEntity: 'State Election Commission & VVCMC',
    category: 'governance',
    validFrom: '2020-06-15',
    asOfDate: '2026-11-07',
    verificationStatus: 'pending-review',
    sourceTitle: 'State Election Commission Notifications & Judicial Directives on Municipal Polls',
    sourceUrl: 'https://mahasec.maharashtra.gov.in/',
    sourcePublisher: 'State Election Commission Maharashtra',
    publicationDate: '2024-01-10',
    lastReviewed: '2026-11-07',
    reviewerNote: 'Explicitly labeled "Pending verification / पडताळणी प्रलंबित" in demo. No simulated or speculative future election results are presented as verified facts.'
  },
  {
    claimId: 'fact-sadanand-patil-tenure',
    claimTextEn: 'Sadanand Gajanan Patil is a veteran local political representative who served as elected Corporator from Virar North / Bolinj (Ward 1) in previous elected terms of VVCMC (2010 and 2015).',
    claimTextMr: 'सदानंद गजानन पाटील हे विरार उत्तर / बोळींज (प्रभाग १) मधील ज्येष्ठ स्थानिक लोकप्रतिनिधी असून त्यांनी वसई-विरार महापालिकेत (२०१० आणि २०१५) नगरसेवक म्हणून कार्य केले आहे.',
    personOrEntity: 'Sadanand Gajanan Patil (सदानंद गजानन पाटील)',
    category: 'leadership',
    validFrom: '2010-06-15',
    validTo: '2020-06-15',
    asOfDate: '2026-11-07',
    verificationStatus: 'verified',
    sourceTitle: 'VVCMC Municipal Corporator Roster (2010, 2015)',
    sourceUrl: 'https://vvcmc.in/',
    sourcePublisher: 'Vasai-Virar City Municipal Corporation',
    publicationDate: '2015-06-15',
    lastReviewed: '2026-11-07',
    reviewerNote: 'Tenure as previous corporator verified; future/pending civic election votes marked as pending verification.'
  },
  {
    claimId: 'fact-viva-college-trust',
    claimTextEn: 'Viva College educational campus in Virar was established in 2000 by the Vishnu Waman Thakur Charitable Trust, providing undergraduate and postgraduate programs affiliated with the University of Mumbai.',
    claimTextMr: 'विरार येथील विवा शैक्षणिक संकुलाची स्थापना २००० मध्ये विष्णू वामन ठाकूर चॅरिटेबल ट्रस्टने केली असून येथे मुंबई विद्यापीठाशी संलग्न पदवी व पदव्युत्तर शिक्षण दिले जाते.',
    personOrEntity: 'Vishnu Waman Thakur Charitable Trust',
    category: 'infrastructure',
    validFrom: '2000-08-15',
    asOfDate: '2026-11-07',
    verificationStatus: 'verified',
    sourceTitle: 'University of Mumbai Institutional Affiliation Registers',
    sourceUrl: 'https://vivacollege.org/',
    sourcePublisher: 'University of Mumbai & VWTCT',
    publicationDate: '2000-08-15',
    lastReviewed: '2026-11-07',
    reviewerNote: 'Correctly attributed to the private charitable educational trust.'
  }
];
