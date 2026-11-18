export interface MunicipalElectionResult {
  year: number;
  totalSeats: number;
  bvaSeats: number;
  bvaSeatSharePct: number;
  bvaVoteSharePct: number;
  rulingParty: string;
  mayorNameEn: string;
  mayorNameMr: string;
  status: 'verified' | 'pending-review';
  breakdown: {
    party: string;
    seats: number;
    color: string;
  }[];
  keyTakeawayEn: string;
  keyTakeawayMr: string;
  source: string;
}

export interface AssemblyElectionResult {
  year: number;
  constituencyCode: string;
  constituencyNameEn: string;
  constituencyNameMr: string;
  totalElectors: number;
  votesPolled: number;
  turnoutPct: number;
  winnerNameEn: string;
  winnerNameMr: string;
  winnerParty: string;
  winnerVotes: number;
  runnerUpNameEn: string;
  runnerUpNameMr: string;
  runnerUpParty: string;
  runnerUpVotes: number;
  margin: number;
  marginPct: number;
  source: string;
}

export interface WardElectionDetail {
  wardNumber: string;
  wardNameEn: string;
  wardNameMr: string;
  areaDescriptionEn: string;
  areaDescriptionMr: string;
  representativeNameEn: string;
  representativeNameMr: string;
  party: string;
  tenureStatusEn: string;
  tenureStatusMr: string;
  status: 'verified' | 'pending-review';
  electoralHistoryEn: string;
  electoralHistoryMr: string;
  source: string;
}

export const MUNICIPAL_ELECTIONS: MunicipalElectionResult[] = [
  {
    year: 2010,
    totalSeats: 89,
    bvaSeats: 55,
    bvaSeatSharePct: 61.8,
    bvaVoteSharePct: 48.4,
    rulingParty: 'Bahujan Vikas Aaghadi (Absolute Majority)',
    mayorNameEn: 'Rajeev Patil (Nana)',
    mayorNameMr: 'राजीव (नाना) पाटील',
    status: 'verified',
    breakdown: [
      { party: 'BVA', seats: 55, color: '#F4C430' },
      { party: 'Shiv Sena - BJP', seats: 20, color: '#FF9933' },
      { party: 'INC - NCP', seats: 8, color: '#128807' },
      { party: 'Independents', seats: 6, color: '#94A3B8' }
    ],
    keyTakeawayEn: 'Maiden municipal general election following the 3 July 2009 creation of VVCMC. BVA establishes single-party governance.',
    keyTakeawayMr: 'वसई-विरार महापालिकेच्या पहिल्याच सार्वत्रिक निवडणुकीत बविआचे स्पष्ट बहुमत; राजीव पाटील पहिले महापौर.',
    source: 'State Election Commission Maharashtra Gazette (June 2010)'
  },
  {
    year: 2015,
    totalSeats: 115,
    bvaSeats: 106,
    bvaSeatSharePct: 92.2,
    bvaVoteSharePct: 63.8,
    rulingParty: 'Bahujan Vikas Aaghadi (Supermajority)',
    mayorNameEn: 'Pravina Hitendra Thakur',
    mayorNameMr: 'प्रवीणा हितेंद्र ठाकूर',
    status: 'verified',
    breakdown: [
      { party: 'BVA', seats: 106, color: '#F4C430' },
      { party: 'Shiv Sena', seats: 5, color: '#FF7700' },
      { party: 'BJP', seats: 1, color: '#FF9933' },
      { party: 'INC', seats: 1, color: '#128807' },
      { party: 'Independents', seats: 2, color: '#94A3B8' }
    ],
    keyTakeawayEn: 'Landmark sweep winning 106 of 115 wards. Pravina Thakur elected first woman Mayor of VVCMC.',
    keyTakeawayMr: 'महाराष्ट्राच्या नागरी इतिहासातील विक्रमी विजय; ११५ पैकी १०६ जागांवर विजय. प्रवीणा ठाकूर पहिल्या महिला महापौर.',
    source: 'SEC Maharashtra Certified Gazette (June 2015)'
  },
  {
    year: 2026,
    totalSeats: 115,
    bvaSeats: 0,
    bvaSeatSharePct: 0,
    bvaVoteSharePct: 0,
    rulingParty: 'Under State Administrator (Elections Pending)',
    mayorNameEn: 'Awaiting SEC Poll Notification',
    mayorNameMr: 'निवडणूक अधिसूचना प्रलंबित',
    status: 'pending-review',
    breakdown: [
      { party: 'State Administrator Governance', seats: 115, color: '#64748B' }
    ],
    keyTakeawayEn: 'Subsequent VVCMC general elections are pending notification by the State Election Commission. The municipal corporation has functioned under a State-appointed Administrator since the 2020 term expiry.',
    keyTakeawayMr: 'वसई-विरार महापालिकेच्या पुढील सार्वत्रिक निवडणुकांची घोषणा राज्य निवडणूक आयोगाकडून प्रलंबित आहे. २०२० मध्ये मुदत संपल्यानंतर पालिका प्रशासक राजवटीखाली आहे.',
    source: 'State Election Commission & Urban Development Department Notifications (Pending Review)'
  }
];

export const ASSEMBLY_ELECTIONS: AssemblyElectionResult[] = [
  // 132-Nalasopara
  {
    year: 2009,
    constituencyCode: '132',
    constituencyNameEn: 'Nalasopara',
    constituencyNameMr: 'नालासोपारा',
    totalElectors: 312450,
    votesPolled: 176420,
    turnoutPct: 56.46,
    winnerNameEn: 'Kshitij Hitendra Thakur',
    winnerNameMr: 'क्षितिज हितेंद्र ठाकूर',
    winnerParty: 'BVA',
    winnerVotes: 89284,
    runnerUpNameEn: 'Shirish Chavan',
    runnerUpNameMr: 'शिरीष चव्हाण',
    runnerUpParty: 'Shiv Sena',
    runnerUpVotes: 48502,
    margin: 40782,
    marginPct: 23.11,
    source: 'ECI Maharashtra Assembly Election 2009 Statistical Report'
  },
  {
    year: 2014,
    constituencyCode: '132',
    constituencyNameEn: 'Nalasopara',
    constituencyNameMr: 'नालासोपारा',
    totalElectors: 432890,
    votesPolled: 254820,
    turnoutPct: 58.86,
    winnerNameEn: 'Kshitij Hitendra Thakur',
    winnerNameMr: 'क्षितिज हितेंद्र ठाकूर',
    winnerParty: 'BVA',
    winnerVotes: 113566,
    runnerUpNameEn: 'Rajan Naik',
    runnerUpNameMr: 'राजन नाईक',
    runnerUpParty: 'BJP',
    runnerUpVotes: 59067,
    margin: 54499,
    marginPct: 21.38,
    source: 'ECI Assembly 2014 Results'
  },
  {
    year: 2019,
    constituencyCode: '132',
    constituencyNameEn: 'Nalasopara',
    constituencyNameMr: 'नालासोपारा',
    totalElectors: 518420,
    votesPolled: 335210,
    turnoutPct: 64.66,
    winnerNameEn: 'Kshitij Hitendra Thakur',
    winnerNameMr: 'क्षितिज हितेंद्र ठाकूर',
    winnerParty: 'BVA',
    winnerVotes: 149865,
    runnerUpNameEn: 'Pradeep Sharma',
    runnerUpNameMr: 'प्रदीप शर्मा',
    runnerUpParty: 'Shiv Sena',
    runnerUpVotes: 106136,
    margin: 43729,
    marginPct: 13.04,
    source: 'ECI Assembly 2019 Official Results'
  },
  {
    year: 2024,
    constituencyCode: '132',
    constituencyNameEn: 'Nalasopara',
    constituencyNameMr: 'नालासोपारा',
    totalElectors: 558416,
    votesPolled: 279580,
    turnoutPct: 50.07,
    winnerNameEn: 'Rajan B. Naik',
    winnerNameMr: 'राजन बी. नाईक',
    winnerParty: 'BJP',
    winnerVotes: 132042,
    runnerUpNameEn: 'Kshitij Hitendra Thakur',
    runnerUpNameMr: 'क्षितिज हितेंद्र ठाकूर',
    runnerUpParty: 'BVA',
    runnerUpVotes: 107432,
    margin: 24610,
    marginPct: 8.8,
    source: 'Form-20 Final Result Sheet 132-Nalasopara & CEO Maharashtra 2024'
  },
  // 133-Vasai
  {
    year: 2014,
    constituencyCode: '133',
    constituencyNameEn: 'Vasai',
    constituencyNameMr: 'वसई',
    totalElectors: 301240,
    votesPolled: 187840,
    turnoutPct: 62.35,
    winnerNameEn: 'Hitendra Vishnu Thakur',
    winnerNameMr: 'हितेंद्र विष्णू ठाकूर',
    winnerParty: 'BVA',
    winnerVotes: 97291,
    runnerUpNameEn: 'Vivek Pandit',
    runnerUpNameMr: 'विवेक पंडित',
    runnerUpParty: 'Independent',
    runnerUpVotes: 65395,
    margin: 31896,
    marginPct: 16.98,
    source: 'ECI Assembly 2014 Returns'
  },
  {
    year: 2019,
    constituencyCode: '133',
    constituencyNameEn: 'Vasai',
    constituencyNameMr: 'वसई',
    totalElectors: 342110,
    votesPolled: 190820,
    turnoutPct: 55.78,
    winnerNameEn: 'Hitendra Vishnu Thakur',
    winnerNameMr: 'हितेंद्र विष्णू ठाकूर',
    winnerParty: 'BVA',
    winnerVotes: 97263,
    runnerUpNameEn: 'Vijay Patil',
    runnerUpNameMr: 'विजय पाटील',
    runnerUpParty: 'Shiv Sena',
    runnerUpVotes: 71268,
    margin: 25995,
    marginPct: 13.62,
    source: 'ECI Maharashtra Assembly 2019'
  },
  {
    year: 2024,
    constituencyCode: '133',
    constituencyNameEn: 'Vasai',
    constituencyNameMr: 'वसई',
    totalElectors: 334512,
    votesPolled: 212580,
    turnoutPct: 63.55,
    winnerNameEn: 'Sneha Dube Pandit',
    winnerNameMr: 'स्नेहा दुबे पंडित',
    winnerParty: 'BJP',
    winnerVotes: 102284,
    runnerUpNameEn: 'Hitendra Vishnu Thakur',
    runnerUpNameMr: 'हितेंद्र विष्णू ठाकूर',
    runnerUpParty: 'BVA',
    runnerUpVotes: 71948,
    margin: 30336,
    marginPct: 14.27,
    source: 'CEO Maharashtra Official Assembly Returns 2024'
  },
  // 131-Boisar (ST)
  {
    year: 2019,
    constituencyCode: '131',
    constituencyNameEn: 'Boisar (ST)',
    constituencyNameMr: 'बोईसर (अ.ज.)',
    totalElectors: 318540,
    votesPolled: 212450,
    turnoutPct: 66.69,
    winnerNameEn: 'Rajesh Raghunath Patil',
    winnerNameMr: 'राजेश रघुनाथ पाटील',
    winnerParty: 'BVA',
    winnerVotes: 78703,
    runnerUpNameEn: 'Vilas Tare',
    runnerUpNameMr: 'विलास तरे',
    runnerUpParty: 'Shiv Sena',
    runnerUpVotes: 75951,
    margin: 2752,
    marginPct: 1.29,
    source: 'ECI Vidhan Sabha 2019 Data'
  }
];

export const SPOTLIGHT_WARDS: WardElectionDetail[] = [
  {
    wardNumber: 'Ward 1 (Bolinj)',
    wardNameEn: 'Virar North / Bolinj High Road',
    wardNameMr: 'विरार उत्तर / बोळींज मुख्य रस्ता',
    areaDescriptionEn: 'Urban and semi-rural transition corridor with rapid residential expansion.',
    areaDescriptionMr: 'बोळींज व विरार उत्तर परिसरातील वेगाने वाढणारा निवासी व नागरी पट्टा.',
    representativeNameEn: 'Sadanand Gajanan Patil',
    representativeNameMr: 'सदानंद गजानन पाटील',
    party: 'Bahujan Vikas Aaghadi (BVA)',
    tenureStatusEn: 'Veteran Former Corporator (Elected in 2010 & 2015 VVCMC Councils)',
    tenureStatusMr: 'ज्येष्ठ माजी नगरसेवक (२०१० व २०१५ महापालिका कार्यकाळात विजयी)',
    status: 'verified',
    electoralHistoryEn: 'Served as elected corporator across two consecutive terms in VVCMC. Represented civic development, water booster pumps, and arterial road widening in Bolinj.',
    electoralHistoryMr: 'वसई-विरार महापालिकेत सलग दोन कार्यकाळ नगरसेवक म्हणून प्रतिनिधित्व. बोळींज पाणी पंपिंग स्टेशन व अंतर्गत रस्त्यांचा पाठपुरावा.',
    source: 'VVCMC Municipal Roster (2010, 2015) & State Election Commission Archives'
  }
];

export const LOK_SABHA_ELECTIONS = [
  {
    year: 2009,
    seatName: '22 - Palghar (ST)',
    winnerNameEn: 'Baliram Sukur Jadhav',
    winnerNameMr: 'बळीराम सुकूर जाधव',
    winnerParty: 'BVA',
    winnerVotes: 223234,
    runnerUpNameEn: 'Chintaman Vanga',
    runnerUpParty: 'BJP',
    runnerUpVotes: 210874,
    margin: 12360,
    notesEn: 'Historic breakthrough: BVA wins the newly created 22-Palghar Lok Sabha constituency in its maiden general election.',
    notesMr: 'ऐतिहासिक विजय: बविआने नव्याने निर्माण झालेल्या पालघर लोकसभा मतदारसंघात पहिल्याच प्रयत्नात विजय मिळवला.',
    source: 'ECI Statistical Report 2009'
  },
  {
    year: 2014,
    seatName: '22 - Palghar (ST)',
    winnerNameEn: 'Chintaman Vanga',
    winnerNameMr: 'चिंतामण वंगा',
    winnerParty: 'BJP',
    winnerVotes: 533201,
    runnerUpNameEn: 'Baliram Sukur Jadhav',
    runnerUpParty: 'BVA',
    runnerUpVotes: 293681,
    margin: 239520,
    notesEn: 'High voter turnout during national general election; BVA finished as principal challenger with 2.93 lakh votes.',
    notesMr: 'बविआचे बळीराम जाधव दुसऱ्या क्रमांकावर (२.९३ लाख मते).',
    source: 'ECI General Election 2014'
  },
  {
    year: 2019,
    seatName: '22 - Palghar (ST)',
    winnerNameEn: 'Rajendra Gavit',
    winnerNameMr: 'राजेन्द्र गावित',
    winnerParty: 'Shiv Sena',
    winnerVotes: 580498,
    runnerUpNameEn: 'Baliram Sukur Jadhav',
    runnerUpParty: 'BVA',
    runnerUpVotes: 491615,
    margin: 88883,
    notesEn: 'Intense bilateral contest where BVA polled 4.91 lakh votes across the district.',
    notesMr: 'बविआने ४.९१ लाख मते मिळवून कडवी झुंज दिली.',
    source: 'ECI General Election 2019'
  },
  {
    year: 2024,
    seatName: '22 - Palghar (ST)',
    winnerNameEn: 'Dr. Hemant Vishnu Savara',
    winnerNameMr: 'डॉ. हेमंत विष्णू सवरा',
    winnerParty: 'BJP',
    winnerVotes: 601244,
    runnerUpNameEn: 'Bharti Bharat Kamdi',
    runnerUpParty: 'SS(UBT)',
    runnerUpVotes: 417850,
    margin: 183394,
    notesEn: 'Multi-cornered contest for 22-Palghar (ST); Rajesh Patil contested on BVA ticket polling 2,54,056 votes.',
    notesMr: 'बविआचे राजेश पाटील यांनी २,५४,०५६ मते मिळवली.',
    source: 'ECI Lok Sabha 2024 Certified Result Returns'
  }
];
