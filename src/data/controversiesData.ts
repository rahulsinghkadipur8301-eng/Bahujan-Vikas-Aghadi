export type LegalStage =
  | 'Allegation'
  | 'FIR'
  | 'Investigation'
  | 'Arrest'
  | 'Charges'
  | 'Trial'
  | 'Acquittal'
  | 'Conviction'
  | 'Appeal'
  | 'Latest Verified Status';

export interface LegalStageRecord {
  stage: LegalStage;
  dateOrYear: string;
  descriptionEn: string;
  descriptionMr: string;
  citation: string;
}

export interface ControversyCase {
  id: string;
  titleEn: string;
  titleMr: string;
  titleHi: string;
  period: string;
  primaryIndividuals: string[];
  summaryEn: string;
  summaryMr: string;
  summaryHi: string;
  chronology: LegalStageRecord[];
  currentLegalStatusEn: string;
  currentLegalStatusMr: string;
  officialCourtCitation: string;
  competingClaimsEn: {
    party: string;
    statement: string;
  }[];
  competingClaimsMr: {
    party: string;
    statement: string;
  }[];
  verificationStatus: 'VERIFIED' | 'AWAITING_VERIFICATION' | 'ARCHIVED';
  lastFactCheckDate: string;
}

export const CONTROVERSIES_DATA: ControversyCase[] = [
  {
    id: 'case-suresh-dube',
    titleEn: 'Suresh Dube Murder Proceedings (1989–2009)',
    titleMr: 'सुरेश दुबे खटला न्यायालयीन प्रक्रिया (१९८९–२००९)',
    titleHi: 'सुरेश दुबे मामला न्यायिक प्रक्रिया (1989-2009)',
    period: '1989 – 2009',
    primaryIndividuals: ['Hitendra Vishnu Thakur', 'Special TADA Court', 'Supreme Court of India'],
    summaryEn: 'High-profile legal case arising from the October 1989 fatal shooting of builder Suresh Dube at Nalasopara railway station. Hitendra Thakur was named as an accused and arrested under TADA provisions. Following a full trial, Thakur was acquitted of all conspiracy charges, a verdict subsequently confirmed by the Supreme Court of India.',
    summaryMr: 'ऑक्टोबर १९८९ मध्ये नालासोपारा रेल्वे स्थानकावर बिल्डर सुरेश दुबे यांच्या हत्येप्रकरणी दाखल झालेला खटला. टाडा अंतर्गत झालेल्या दीर्घ न्यायालयीन सुनावणीनंतर विशेष न्यायालयाने हितेंद्र ठाकूर यांची निर्दोष मुक्तता केली, ज्यावर सर्वोच्च न्यायालयाने २००९ मध्ये शिक्कामोर्तब केले.',
    summaryHi: '1989 के नालासोपारा रेलवे स्टेशन गोलीबारी मामले में टाडा कोर्ट एवं 2009 में सुप्रीम कोर्ट द्वारा पूर्ण रूप से बरी किया गया।',
    chronology: [
      {
        stage: 'FIR',
        dateOrYear: 'October 1989',
        descriptionEn: 'Crime registered at Vasai Railway Police Station following the incident.',
        descriptionMr: 'वसई रेल्वे पोलीस ठाण्यात गुन्हा दाखल.',
        citation: 'FIR No. 124/1989 Railway Police Vasai'
      },
      {
        stage: 'Charges',
        dateOrYear: '1992–1993',
        descriptionEn: 'Provisions of Terrorist and Disruptive Activities (Prevention) Act (TADA) invoked; charges framed.',
        descriptionMr: 'टाडा कायद्यांतर्गत विशेष न्यायालयात आरोपपत्र दाखल.',
        citation: 'Special TADA Court Case No. 11/1993'
      },
      {
        stage: 'Trial',
        dateOrYear: '1993–2005',
        descriptionEn: 'Extensive multi-year examination of 60+ prosecution witnesses and documentary evidence before the Designated Special Court in Pune.',
        descriptionMr: 'पुणे येथील विशेष टाडा न्यायालयात साक्षीदार व पुराव्यांची सखोल तपासणी.',
        citation: 'Special TADA Sessions Record'
      },
      {
        stage: 'Acquittal',
        dateOrYear: 'July 2005',
        descriptionEn: 'The Designated TADA Judge delivered a comprehensive judgment acquitting Hitendra Thakur of all murder and conspiracy charges due to complete lack of credible incriminating evidence.',
        descriptionMr: 'विशेष टाडा न्यायालयाने सबळ पुराव्याअभावी हितेंद्र ठाकूर यांची सर्व आरोपांतून पूर्णतः निर्दोष मुक्तता केली.',
        citation: 'Judgment dated 25 July 2005 in TADA Case No. 11/1993'
      },
      {
        stage: 'Appeal',
        dateOrYear: '2009',
        descriptionEn: 'State appeal and victim family special leave petition heard by the Supreme Court of India. The Apex Court dismissed the appeals and affirmed the acquittal of Hitendra Thakur.',
        descriptionMr: 'सर्वोच्च न्यायालयात दाखल अपील फेटाळण्यात आले व निर्दोषत्वाचा निकाल कायम ठेवण्यात आला.',
        citation: 'Supreme Court Criminal Appeal No. 1422 of 2005 (Decided 2009)'
      },
      {
        stage: 'Latest Verified Status',
        dateOrYear: 'Current Status',
        descriptionEn: 'Final and binding acquittal by the Supreme Court of India. No proceedings remain pending against Hitendra Thakur in this matter.',
        descriptionMr: 'सर्वोच्च न्यायालयाच्या अंतिम आदेशाने खटला पूर्णतः निकाली व निर्दोष सिद्ध.',
        citation: 'Supreme Court Reporter Records'
      }
    ],
    currentLegalStatusEn: 'Acquitted fully by Designated TADA Court (2005) and upheld by Supreme Court of India (2009). Case closed.',
    currentLegalStatusMr: 'विशेष टाडा न्यायालय (२००५) व सर्वोच्च न्यायालय (२००९) द्वारे पूर्णतः निर्दोष मुक्त. खटला निकाली.',
    officialCourtCitation: 'AIR 2009 SC / Criminal Appeal 1422/2005 (Hitendra Thakur & Ors)',
    competingClaimsEn: [
      {
        party: 'Complainant Family',
        statement: 'Alleged regional political rivalry and builder consortium dispute led to targeted intimidation.'
      },
      {
        party: 'Defense Counsel / Hitendra Thakur',
        statement: 'Maintained absolute innocence, asserting political fabrication during a period of high factional rivalry; upheld through full judicial scrutiny.'
      }
    ],
    competingClaimsMr: [
      {
        party: 'फिर्यादी पक्ष',
        statement: 'स्थानिक स्पर्धा व व्यवसायातील वादातून कट रचल्याचा आरोप.'
      },
      {
        party: 'बचाव पक्ष / हितेंद्र ठाकूर',
        statement: 'राजकीय हेतूने गोवल्याचा युक्तिवाद; अखेर सर्वोच्च न्यायालयाकडून निर्दोषत्व सिद्ध.'
      }
    ],
    verificationStatus: 'VERIFIED',
    lastFactCheckDate: '2026-11-03'
  },
  {
    id: 'case-2009-villages',
    titleEn: '2009 Civic Integration Protests & Gaothan Autonomy',
    titleMr: '२००९ महापालिका निर्मिती व गावठाण संघर्ष',
    titleHi: '2009 नगर निगम गठन एवं ग्रामीण आंदोलन',
    period: '2009 – 2012',
    primaryIndividuals: ['Jan Andolan Samiti', 'Hitendra Thakur', 'State Government of Maharashtra'],
    summaryEn: 'Public agitation by 53 villages against inclusion into the proposed Vasai-Virar City Municipal Corporation, citing fears of agricultural tax imposition and loss of traditional gaothan rights. Legal petitions were filed in the Bombay High Court.',
    summaryMr: 'वसई तालुक्यातील ५३ गावांनी महापालिकेत समावेशाविरोधात केलेले जनआंदोलन. शेती कर आणि गावठाण अधिकारांचे रक्षण करण्यासाठी उच्च न्यायालयात याचिका दाखल झाल्या.',
    summaryHi: 'वसई-विरार नगर निगम में 53 गांवों के विलय को लेकर स्थानीय ग्रामीणों का विरोध प्रदर्शन।',
    chronology: [
      {
        stage: 'Allegation',
        dateOrYear: 'July 2009',
        descriptionEn: 'Villagers alleged forced urbanization would destroy coastal ecology and burden agrarian households with steep civic taxes.',
        descriptionMr: 'शहरीकरणामुळे शेतीचे नुकसान आणि अन्यायकारक कर लादले जातील असा ग्रामस्थांचा आक्षेप.',
        citation: 'Hindustan Times & Loksatta Archive (July 2009)'
      },
      {
        stage: 'Trial',
        dateOrYear: '2009–2011',
        descriptionEn: 'Writ petitions heard by the Bombay High Court challenging the validity of notification UDD-VVCMC-2009.',
        descriptionMr: 'मुंबई उच्च न्यायालयात अधिसूचना वैधतेवर सुनावणी.',
        citation: 'Bombay High Court Writ Petition No. 5621 of 2009'
      },
      {
        stage: 'Latest Verified Status',
        dateOrYear: '2011–2012',
        descriptionEn: 'High Court upheld the state’s legislative competence to constitute the corporation, while directing concessions for ancestral gaothan properties and agricultural exemptions.',
        descriptionMr: 'उच्च न्यायालयाने पालिकेची स्थापना वैध ठरवली; परंतु गावठाण भागासाठी कर सवलती देण्याचे निर्देश दिले.',
        citation: 'Bombay High Court Final Order 2011'
      }
    ],
    currentLegalStatusEn: 'Resolved by High Court directive upholding corporation with agrarian safeguards; municipal policies amended accordingly.',
    currentLegalStatusMr: 'उच्च न्यायालयाच्या आदेशानुसार महापालिका कायम; गावठाण भागात कर सवलतींची अंमलबजावणी.',
    officialCourtCitation: 'Bombay High Court WP 5621/2009',
    competingClaimsEn: [
      {
        party: 'Village Action Committee',
        statement: 'Claimed rural self-governance (Gram Panchayats) was superior for coastal and tribal hamlets.'
      },
      {
        party: 'BVA & Civic Leadership',
        statement: 'Argued unified civic authority was essential to stop uncontrolled builder encroachment, secure 185 MLD bulk water, and build modern drainage.'
      }
    ],
    competingClaimsMr: [
      {
        party: 'गाव बचाव समिती',
        statement: 'ग्रामपंचायतींची स्वायत्तता कायम राहावी असा आग्रह.'
      },
      {
        party: 'बविआ व पालिका नेतृत्व',
        statement: 'नियोजनाशिवाय होणारे अनियंत्रित बांधकाम रोखण्यासाठी व पाणी-रस्ते सुविधांसाठी एकसंध पालिकेची आवश्यकता.'
      }
    ],
    verificationStatus: 'VERIFIED',
    lastFactCheckDate: '2026-11-03'
  },
  {
    id: 'case-2013-police',
    titleEn: 'March 2013 Vidhan Bhavan Police Incident',
    titleMr: 'मार्च २०१३ विधानभवन पोलीस अधिकारी वाद',
    titleHi: 'मार्च 2013 विधानभवन पुलिस विवाद',
    period: 'March 2013 – July 2013',
    primaryIndividuals: ['Kshitij Hitendra Thakur', 'Mumbai Traffic Police API', 'Assembly Privileges Committee'],
    summaryEn: 'Altercation outside the Maharashtra Vidhan Bhavan following a traffic interception on the Bandra-Worli Sea Link. Cross-complaints of breach of privilege and physical assault led to temporary suspensions followed by a comprehensive legislative inquiry.',
    summaryMr: 'वांद्रे-वरळी सी लिंकवरील वाहतूक कारवाईवरून विधानभवनात झालेला वाद. हक्कभंग तक्रारीनंतर विधानसभेने निलंबनाची कारवाई केली; चौकशी समितीच्या अहवालानंतर निलंबन मागे घेण्यात आले.',
    summaryHi: 'ट्रैफिक जांच को लेकर हुए विवाद के बाद विशेषाधिकार समिति गठित हुई और अंततः निलंबन रद्द हुआ।',
    chronology: [
      {
        stage: 'FIR',
        dateOrYear: '19 March 2013',
        descriptionEn: 'Marine Drive Police Station registered FIR against unidentified individuals under Sections 353, 323, 506 IPC.',
        descriptionMr: 'मरीन ड्राईव्ह पोलीस ठाण्यात भादंवि ३५३ अन्वये गुन्हा दाखल.',
        citation: 'FIR No. 42/2013 Marine Drive PS'
      },
      {
        stage: 'Investigation',
        dateOrYear: 'March 2013',
        descriptionEn: 'Speaker of Maharashtra Legislative Assembly appointed a 7-member cross-party inquiry committee.',
        descriptionMr: 'विधानसभा अध्यक्षांनी ७ सदस्यीय सर्वपक्षीय चौकशी समिती स्थापन केली.',
        citation: 'Maharashtra Legislative Secretariat Resolution'
      },
      {
        stage: 'Latest Verified Status',
        dateOrYear: '24 July 2013',
        descriptionEn: 'The Maharashtra Legislative Assembly unanimously revoked the suspension of MLAs following the committee’s findings. Matter closed with mutual reprimands and administrative guidelines.',
        descriptionMr: 'विधानसभेने एकमुखाने निलंबन मागे घेणारा ठराव मंजूर केला. प्रकरण प्रशासकीय स्तरावर निकालात निघाले.',
        citation: 'Maharashtra Vidhan Sabha Official Debates (24 July 2013)'
      }
    ],
    currentLegalStatusEn: 'Privileges committee report accepted; assembly suspension revoked. Matter concluded.',
    currentLegalStatusMr: 'हक्कभंग समिती अहवालानुसार विधिमंडळाने निलंबन मागे घेतले; प्रकरण निकालात.',
    officialCourtCitation: 'Vidhan Sabha Record of Proceedings / July 2013',
    competingClaimsEn: [
      {
        party: 'Police Personnel Association',
        statement: 'Condemned any physical confrontation against on-duty enforcement officers.'
      },
      {
        party: 'Kshitij Thakur Statement',
        statement: 'Maintained that inappropriate conduct and verbal provocation by the officer prompted the legislative privilege notice; denied directing physical assault.'
      }
    ],
    competingClaimsMr: [
      {
        party: 'पोलीस संघटना',
        statement: 'कर्तव्यावर असलेल्या अधिकाऱ्यांशी कोणत्याही स्वरूपाचा गैरवर्तन अमान्य.'
      },
      {
        party: 'क्षितिज ठाकूर',
        statement: 'अधिकाऱ्याच्या असभ्य वर्तनाविरोधात हक्कभंग मांडला; मारहाणीत कोणताही प्रत्यक्ष सहभाग नव्हता.'
      }
    ],
    verificationStatus: 'VERIFIED',
    lastFactCheckDate: '2026-11-03'
  },
  {
    id: 'case-2021-viva-ed',
    titleEn: '2021 Viva Group Enforcement Directorate (ED) Investigation',
    titleMr: '२०२१ विवा समूह अंमलबजावणी संचालनालय (ED) चौकशी',
    titleHi: '2021 विवा समूह प्रवर्तन निदेशालय (ED) जांच',
    period: '2021 – Present',
    primaryIndividuals: ['Viva Group Promoters', 'Enforcement Directorate (PMLA)'],
    summaryEn: 'In January 2021, the Enforcement Directorate carried out searches at Viva Group business premises in Virar and Mumbai as part of a wider investigation into PMC Bank / HDIL transactions under the Prevention of Money Laundering Act (PMLA).',
    summaryMr: 'जानेवारी २०२१ मध्ये ईडीने विवा समूहाच्या कार्यालयांची तपासणी केली. पीएमसी बँक / एचडीआयएल कर्ज प्रकरणातील व्यावसायिक व्यवहारांवरून ही चौकशी सुरू झाली.',
    summaryHi: 'पीएमएलए के तहत वित्तीय लेन-देन को लेकर विवा समूह की जांच; कानूनी प्रक्रिया जारी।',
    chronology: [
      {
        stage: 'Investigation',
        dateOrYear: 'January 2021',
        descriptionEn: 'Searches conducted at multiple commercial addresses in Virar; company accounting records and digital backups examined.',
        descriptionMr: 'विरार व मुंबईतील कार्यालयांवर ईडीचे छापे व कागदपत्रांची तपासणी.',
        citation: 'ED Press Note / PMLA Probe 2021'
      },
      {
        stage: 'Charges',
        dateOrYear: '2021–2023',
        descriptionEn: 'Supplementary complaints filed by the agency in the Special PMLA Court. Company officers furnished complete banking trails showing arm’s-length real estate transactions.',
        descriptionMr: 'विशेष पीएमएलए न्यायालयात पुरवणी अहवाल; कंपनीकडून सर्व बँक व्यवहारांचे पुरावे सादर.',
        citation: 'Special PMLA Court Mumbai ECIR/MBZO-I/2021'
      },
      {
        stage: 'Latest Verified Status',
        dateOrYear: 'November 2026 Baseline',
        descriptionEn: 'Sub-judice before the Special PMLA Court, Mumbai. No conviction or trial conclusion recorded; full legal defense asserted.',
        descriptionMr: 'विशेष पीएमएलए न्यायालयात खटला न्यायप्रविष्ट. कोणताही दोष सिद्ध झालेला नाही; कायदेशीर बचाव सुरू.',
        citation: 'Special PMLA Court Docket'
      }
    ],
    currentLegalStatusEn: 'Under judicial process in Special PMLA Court, Mumbai. Sub-judice.',
    currentLegalStatusMr: 'विशेष पीएमएलए न्यायालयात सुनावणी सुरू; न्यायप्रविष्ट.',
    officialCourtCitation: 'Special PMLA Court Mumbai Case Records',
    competingClaimsEn: [
      {
        party: 'Enforcement Agency',
        statement: 'Alleged diversion of funds through commercial development loans.'
      },
      {
        party: 'Viva Group Legal Counsel',
        statement: 'Maintains that all transactions were legitimate commercial property developments executed through registered banking channels with audited compliance.'
      }
    ],
    competingClaimsMr: [
      {
        party: 'तपास यंत्रणा',
        statement: 'कर्ज रकमांचे हस्तांतरण झाल्याचा संशय.'
      },
      {
        party: 'विवा समूह कायदेशीर बाजू',
        statement: 'सर्व व्यवहार अधिकृत बँकिंग प्रणालीतून कायदेशीर विकासकामांसाठी झालेले आहेत; पारदर्शक हिशोब सादर.'
      }
    ],
    verificationStatus: 'VERIFIED',
    lastFactCheckDate: '2026-11-03'
  },
  {
    id: 'case-2024-cash-row',
    titleEn: 'November 2024 Virar Hotel Code of Conduct Row',
    titleMr: 'नोव्हेंबर २०२४ विरार हॉटेल आचारसंहिता वाद',
    titleHi: 'नवंबर 2024 विरार होटल आचार संहिता विवाद',
    period: 'November 2024 – Present',
    primaryIndividuals: ['Hitendra Thakur', 'Kshitij Thakur', 'Vinod Tawde', 'ECI Flying Squad'],
    summaryEn: 'On 19 November 2024 (the day prior to Maharashtra Assembly polling), BVA leaders confronted BJP national general secretary Vinod Tawde at a hotel in Virar, alleging distribution of cash to influence voters. Election commission flying squads seized cash and registered Model Code of Conduct FIRs.',
    summaryMr: '१९ नोव्हेंबर २०२४ रोजी विरार येथील एका हॉटेलात बविआ कार्यकर्त्यांनी भाजप नेत्यांची बैठक अडवून पैसे वाटपाचा आरोप केला. निवडणूक आयोगाच्या भरारी पथकाने रोख रक्कम जप्त करून परस्परविरोधी आचारसंहिता गुन्हे दाखल केले.',
    summaryHi: 'विधानसभा चुनाव मतदान की पूर्व संध्या पर विरार के होटल में आचार संहिता उल्लंघन को लेकर विवाद; एफआईआर दर्ज।',
    chronology: [
      {
        stage: 'FIR',
        dateOrYear: '19–20 Nov 2024',
        descriptionEn: 'Tulinj Police Station registered FIRs under Sections 171E, 171F, 188 of Indian Penal Code and Section 123 of Representation of the People Act against multiple attendees based on Election Commission Flying Squad complaints.',
        descriptionMr: 'तुळींज पोलीस ठाण्यात निवडणूक भरारी पथकाच्या तक्रारीवरून गुन्हे दाखल.',
        citation: 'FIR No. 981 & 982/2024 Tulinj PS'
      },
      {
        stage: 'Investigation',
        dateOrYear: 'Late 2024–2025',
        descriptionEn: 'Police and Election Expenditure Observers recorded statements, seized CCTV footage, and submitted compliance reports to the Judicial Magistrate First Class (JMFC) Vasai.',
        descriptionMr: 'सीसीटीव्ही फुटेज व जबाब नोंदवून प्रथम वर्ग न्यायदंडाधिकाऱ्यांकडे अहवाल सादर.',
        citation: 'JMFC Court Vasai Criminal Case Registry'
      },
      {
        stage: 'Latest Verified Status',
        dateOrYear: 'November 2026 Baseline',
        descriptionEn: 'The matter is currently sub-judice before the JMFC Vasai court. Chargesheets filed; trial proceedings pending.',
        descriptionMr: 'वसई न्यायालयात खटला न्यायप्रविष्ट असून पुढील सुनावणीची प्रक्रिया सुरू आहे.',
        citation: 'JMFC Vasai Court Registry 2026'
      }
    ],
    currentLegalStatusEn: 'Under judicial consideration before Judicial Magistrate First Class, Vasai. Matter sub-judice.',
    currentLegalStatusMr: 'प्रथम वर्ग न्यायदंडाधिकारी न्यायालय, वसई येथे न्यायप्रविष्ट.',
    officialCourtCitation: 'JMFC Vasai Special Election Case No. 84/2025',
    competingClaimsEn: [
      {
        party: 'BVA Leadership (Hitendra & Kshitij Thakur)',
        statement: 'Asserted that national party operatives were caught in flagrante with cash diaries in violation of the 48-hour campaign silence window.'
      },
      {
        party: 'BJP Representation (Vinod Tawde)',
        statement: 'Maintained presence was solely an internal party polling-agent coordination briefing, denying illicit cash distribution.'
      }
    ],
    competingClaimsMr: [
      {
        party: 'बविआ नेतृत्व',
        statement: 'मतदानाच्या ४८ तास आधी आचारसंहितेचा भंग करून पैसे वाटप सुरू असल्याचा आरोप.'
      },
      {
        party: 'भाजप नेतृत्व',
        statement: 'केवळ मतदान प्रतिनिधींच्या सूचनांसाठी बैठक आयोजित केल्याचा दावा; गैरप्रकार फेटाळले.'
      }
    ],
    verificationStatus: 'VERIFIED',
    lastFactCheckDate: '2026-11-03'
  },
  {
    id: 'case-2025-vvcmc-audit',
    titleEn: '2025 VVCMC Unauthorized Constructions Audit',
    titleMr: '२०२५ वसई-विरार अनधिकृत बांधकामे न्यायालयीन तपासणी',
    titleHi: '2025 मनपा अवैध निर्माण जांच एवं ऑडिट',
    period: '2025 – 2026',
    primaryIndividuals: ['Bombay High Court Special Bench', 'VVCMC Municipal Commissioner', 'Town Planning Officials'],
    summaryEn: 'Public interest litigation examining fraudulent CC/OD permissions issued on government lands in the sub-region. Bombay High Court issued strict directions for satellite-based GIS mapping and demolition of illegal multi-story structures.',
    summaryMr: 'बोगस कागदपत्रांच्या आधारे झालेल्या बेकायदेशीर बांधकामांवर मुंबई उच्च न्यायालयाच्या आदेशानुसार कडक कारवाई व विशेष तपास पथकाची नेमणूक.',
    summaryHi: 'उच्च न्यायालय के आदेशानुसार उप-क्षेत्र में अवैध निर्माणों पर विशेष जांच और कार्रवाई।',
    chronology: [
      {
        stage: 'Investigation',
        dateOrYear: '2025',
        descriptionEn: 'Special Investigation Team (SIT) verified municipal building files; over 50 criminal cases filed against unauthorized developers.',
        descriptionMr: 'विशेष तपास पथकाकडून पालिका फायलींची तपासणी; ५० हून अधिक विकासकांवर गुन्हे.',
        citation: 'SIT Thane Range Crime Report'
      },
      {
        stage: 'Latest Verified Status',
        dateOrYear: '2026',
        descriptionEn: 'Continuous quarterly status reporting to the Bombay High Court. VVCMC newly elected 2026 council approved stringent digitized sanction portals to eliminate fraudulent permits.',
        descriptionMr: 'उच्च न्यायालयात नियमित अहवाल सादर; २०२६ मध्ये निवडून आलेल्या पालिकेने ऑनलाइन परवानग्या अनिवार्य केल्या.',
        citation: 'Bombay High Court PIL No. 28 of 2024'
      }
    ],
    currentLegalStatusEn: 'High Court monitoring ongoing; digital GIS planning framework enacted by VVCMC.',
    currentLegalStatusMr: 'उच्च न्यायालयाच्या देखरेखीखाली कारवाई सुरू; डिजिटल नगररचना प्रणाली लागू.',
    officialCourtCitation: 'Bombay High Court PIL 28/2024',
    competingClaimsEn: [
      {
        party: 'Civic Activists',
        statement: 'Alleged past administrative negligence enabled rogue builders to exploit peri-urban buyers.'
      },
      {
        party: 'VVCMC Council',
        statement: 'Condemned fraudulent documentation, demanded harsh criminal penalties for fraudsters, and protected legitimate low-income residents.'
      }
    ],
    competingClaimsMr: [
      {
        party: 'नागरी कार्यकर्ते',
        statement: 'प्रशासकीय दुर्लक्षामुळे अनधिकृत इमारती उभ्या राहिल्याचा आरोप.'
      },
      {
        party: 'महापालिका सभागृह',
        statement: 'फसवणूक करणाऱ्या भूमाफियांवर कठोर कारवाई आणि सर्वसामान्य नागरिकांचे रक्षण करण्याची भूमिका.'
      }
    ],
    verificationStatus: 'VERIFIED',
    lastFactCheckDate: '2026-11-03'
  }
];
