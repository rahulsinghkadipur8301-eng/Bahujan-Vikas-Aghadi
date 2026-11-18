export interface PoliticalAlliance {
  id: string;
  partyNameEn: string;
  partyNameMr: string;
  partyNameHi: string;
  partyAbbr: string;
  partyColor: string;
  currentStance: 'OPPOSITION_RIVAL' | 'ISSUE_BASED_COOPERATION' | 'HISTORICAL_ALLIANCE' | 'INDEPENDENT_NEUTRAL';
  historicalPhases: {
    period: string;
    typeEn: 'Formal Alliance' | 'External Voting Support' | 'Direct Electoral Rivalry' | 'Issue-Based Strategic Accord';
    typeMr: string;
    descriptionEn: string;
    descriptionMr: string;
    keyMilestone: string;
    evidenceSource: string;
  }[];
  strategicAnalysisEn: string;
  strategicAnalysisMr: string;
  verificationStatus: 'VERIFIED' | 'AWAITING_VERIFICATION' | 'ARCHIVED';
}

export const ALLIANCES_DATA: PoliticalAlliance[] = [
  {
    id: 'alliance-bjp',
    partyNameEn: 'Bharatiya Janata Party (BJP)',
    partyNameMr: 'भारतीय जनता पक्ष (भाजप)',
    partyNameHi: 'भारतीय जनता पार्टी (भाजपा)',
    partyAbbr: 'BJP',
    partyColor: '#FF9933',
    currentStance: 'OPPOSITION_RIVAL',
    historicalPhases: [
      {
        period: '1990–2009',
        typeEn: 'Direct Electoral Rivalry',
        typeMr: 'थेट निवडणुकीतील स्पर्धा',
        descriptionEn: 'Fierce electoral rivalry in Palghar Lok Sabha and Vasai Vidhan Sabha constituencies against BJP stalwart Chintaman Vanga.',
        descriptionMr: 'पालघर लोकसभा व वसई विधानसभेत भाजपविरुद्ध सातत्यपूर्ण थेट लढत.',
        keyMilestone: '1990, 1995, 2004 assembly contests where Thakur defeated BJP nominees.',
        evidenceSource: 'ECI Assembly Reports'
      },
      {
        period: '2014–2019',
        typeEn: 'Issue-Based Strategic Accord',
        typeMr: 'मुद्द्यांवर आधारित सामंजस्य',
        descriptionEn: 'Supported Devendra Fadnavis government on strategic legislative bills while maintaining an independent regional identity.',
        descriptionMr: 'विधानसभेत स्वतंत्र अस्तित्व राखत विशिष्ट विधेयकांवर सरकारला सहकार्य.',
        keyMilestone: 'Support during Palghar district development allocations.',
        evidenceSource: 'Maharashtra Vidhan Sabha Debates'
      },
      {
        period: '2024–2026',
        typeEn: 'Direct Electoral Rivalry',
        typeMr: 'तीव्र राजकीय संघर्ष',
        descriptionEn: 'High-voltage friction during Nov 2024 assembly campaign (Virar hotel incident) followed by direct faceoff in January 2026 VVCMC municipal election.',
        descriptionMr: 'विधानसभा व २०२६ पालिका निवडणुकीत भाजप विरुद्ध बविआ असा थेट राजकीय सामना.',
        keyMilestone: 'January 2026 VVCMC election where BVA won 71 seats against BJP’s 28.',
        evidenceSource: 'SEC Maharashtra Civic Gazettes (Jan 2026)'
      }
    ],
    strategicAnalysisEn: 'The BJP represents BVA’s chief ideological and electoral adversary in peri-urban Palghar, competing directly for middle-class, urban commuter, and commercial votes.',
    strategicAnalysisMr: 'शहरीकरण आणि स्थानिक नागरी मतदारांवर वर्चस्व राखण्यासाठी भाजप हा बविआचा मुख्य प्रतिस्पर्धी पक्ष राहिला आहे.',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'alliance-congress',
    partyNameEn: 'Indian National Congress (INC)',
    partyNameMr: 'भारतीय राष्ट्रीय काँग्रेस (काँग्रेस)',
    partyNameHi: 'भारतीय राष्ट्रीय कांग्रेस (कांग्रेस)',
    partyAbbr: 'INC',
    partyColor: '#128807',
    currentStance: 'HISTORICAL_ALLIANCE',
    historicalPhases: [
      {
        period: '1990–1995',
        typeEn: 'Formal Alliance',
        typeMr: 'अधिकृत पक्ष सदस्यत्व व उमेदवारी',
        descriptionEn: 'Hitendra Thakur began his legislative journey as the official Congress MLA from Vasai in 1990.',
        descriptionMr: 'हितेंद्र ठाकूर १९९० मध्ये काँग्रेस पक्षाच्या चिन्हावर पहिल्यांदा आमदार झाले.',
        keyMilestone: 'Sharad Pawar and Sudhakarrao Naik state cabinets era.',
        evidenceSource: 'Maharashtra Assembly Archives 1990'
      },
      {
        period: '2009–2014',
        typeEn: 'External Voting Support',
        typeMr: 'बाहेरून पाठिंबा',
        descriptionEn: 'BVA MP Baliram Jadhav provided outside support to the UPA-II central government under Prime Minister Dr. Manmohan Singh.',
        descriptionMr: 'बविआ खासदार बळीराम जाधव यांनी केंद्रातील संपुआ (UPA-२) सरकारला बाहेरून पाठिंबा दिला.',
        keyMilestone: '15th Lok Sabha voting on nuclear and economic legislation.',
        evidenceSource: 'Lok Sabha Voting Records 2009-2014'
      },
      {
        period: '2019–2026',
        typeEn: 'Issue-Based Strategic Accord',
        typeMr: 'प्रादेशिक समन्वय',
        descriptionEn: 'Cooperated with Congress legislators on rural and tribal welfare bills in northern Konkan.',
        descriptionMr: 'आदिवासी हक्क व ग्रामीण प्रश्नांवर विधिमंडळात एकत्र भूमिका.',
        keyMilestone: 'Coordination during rural land rights discussions.',
        evidenceSource: 'Vidhan Sabha Records'
      }
    ],
    strategicAnalysisEn: 'BVA’s political DNA originates from secular grassroots Congress tradition, maintaining cordial equations with state and national Congress leaders.',
    strategicAnalysisMr: 'काँग्रेसशी ऐतिहासिक नाते असून धर्मनिरपेक्ष प्रादेशिक विकासाच्या भूमिकेवर सहकार्य.',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'alliance-shivsena',
    partyNameEn: 'Shiv Sena (UBT & Shinde factions)',
    partyNameMr: 'शिवसेना (ठाकरे व शिंदे गट)',
    partyNameHi: 'शिवसेना',
    partyAbbr: 'SS',
    partyColor: '#EA580C',
    currentStance: 'OPPOSITION_RIVAL',
    historicalPhases: [
      {
        period: '1995–2019',
        typeEn: 'Direct Electoral Rivalry',
        typeMr: 'स्थानिक बालेकिल्ला संघर्ष',
        descriptionEn: 'Intense battles for control of the Vasai-Virar municipal belt. Shiv Sena fielded heavyweight candidates including Pradeep Sharma in 2019.',
        descriptionMr: 'वसई-विरार पट्ट्यात शिवसेनेविरुद्ध अनेक दशके चुरशीची राजकीय लढत.',
        keyMilestone: '2019 Nalasopara poll where Kshitij Thakur defeated Pradeep Sharma by 43,729 votes.',
        evidenceSource: 'ECI Assembly Data 2019'
      },
      {
        period: '2019–2022',
        typeEn: 'External Voting Support',
        typeMr: 'एमव्हीए सरकारला पाठिंबा',
        descriptionEn: 'BVA’s 3 MLAs voted in favor of the Maha Vikas Aghadi government led by Uddhav Thackeray in November 2019 trust vote.',
        descriptionMr: 'नोव्हेंबर २०१९ च्या विश्वासदर्शक ठरावात बविआच्या ३ आमदारांनी मविआ सरकारला अनुकूल मतदान केले.',
        keyMilestone: 'November 2019 Vidhan Sabha Trust Vote.',
        evidenceSource: 'Assembly Secretariat Division Registers'
      },
      {
        period: '2022–2026',
        typeEn: 'Issue-Based Strategic Accord',
        typeMr: 'स्वतंत्र प्रादेशिक भूमिका',
        descriptionEn: 'Maintained independent identity while former mayor Rajeev Patil switched affiliation to Shiv Sena (Shinde).',
        descriptionMr: 'स्थानिक पातळीवर स्वतंत्र ताकद कायम ठेवत नगरपालिकेत स्पष्ट वर्चस्व.',
        keyMilestone: '2026 Municipal polls where BVA won 71 wards.',
        evidenceSource: 'SEC Maharashtra 2026'
      }
    ],
    strategicAnalysisEn: 'Shiv Sena and BVA have historically represented the two dominant grassroots forces in the Vasai basin, oscillating between fierce rivalry and tactical coalition voting.',
    strategicAnalysisMr: 'वसई-विरार खोऱ्यातील दोन प्रमुख शक्तींमध्ये कधी थेट संघर्ष तर कधी मुद्द्यांवर आधारित सहकार्य.',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'alliance-ncp',
    partyNameEn: 'Nationalist Congress Party (NCP)',
    partyNameMr: 'राष्ट्रवादी काँग्रेस पक्ष (राष्ट्रवादी)',
    partyNameHi: 'राष्ट्रवादी कांग्रेस पार्टी (एनसीपी)',
    partyAbbr: 'NCP',
    partyColor: '#0066CC',
    currentStance: 'HISTORICAL_ALLIANCE',
    historicalPhases: [
      {
        period: '1999–2019',
        typeEn: 'Issue-Based Strategic Accord',
        typeMr: 'वैयक्तिक व राजकीय सलोखा',
        descriptionEn: 'Hitendra Thakur maintained close personal and political friendship with Sharad Pawar, frequently coordinating in Thane-Palghar regional affairs.',
        descriptionMr: 'शरद पवार यांच्याशी हितेंद्र ठाकूर यांचे घनिष्ठ राजकीय संबंध; प्रादेशिक विकासात सातत्यपूर्ण समन्वय.',
        keyMilestone: 'Formation of Thane-Palghar district bifurcation agreement.',
        evidenceSource: 'Contemporary Political Memoirs'
      },
      {
        period: '2020–2026',
        typeEn: 'Issue-Based Strategic Accord',
        typeMr: 'नागरी सहकार्य',
        descriptionEn: 'Mutual cooperation on agriculture, cooperative banking, and sugar/milk federations in Konkan.',
        descriptionMr: 'सहकार चळवळ व कृषी विकासाच्या मुद्द्यांवर एकमत.',
        keyMilestone: 'Cooperative credit union resolutions.',
        evidenceSource: 'Cooperative Dept Records'
      }
    ],
    strategicAnalysisEn: 'The Pawar-Thakur dynamic provided significant institutional stability to Vasai-Virar during critical infrastructure approvals in the 2000s.',
    strategicAnalysisMr: 'पवार-ठाकूर यांच्यातील सलोख्यामुळे वसई-विरारच्या सिंचन व पाणी योजनांना मंत्रालयात मोठी गती मिळाली.',
    verificationStatus: 'VERIFIED'
  }
];
