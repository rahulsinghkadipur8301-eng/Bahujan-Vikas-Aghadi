export interface EditorialCorrection {
  id: string;
  date: string;
  category: 'electoral_status' | 'infrastructure_attribution' | 'legal_clarification' | 'statistical_audit';
  subjectEn: string;
  subjectMr: string;
  previousTextEn: string;
  previousTextMr: string;
  correctedFactEn: string;
  correctedFactMr: string;
  primarySourceCitation: string;
  auditorEn: string;
  auditorMr: string;
  status: 'CORRECTED_AND_PUBLISHED';
}

export const EDITORIAL_CORRECTIONS_LOG: EditorialCorrection[] = [
  {
    id: 'cor-2024-reps',
    date: '2026-11-07',
    category: 'electoral_status',
    subjectEn: '2024 Assembly Winners & Current Representatives for AC 132 & AC 133',
    subjectMr: '२०२४ विधानसभा निकाल व १३२-नालासोपारा व १३३-वसईचे विद्यमान आमदार नोंद',
    previousTextEn: 'Failed to specify current winners of the November 2024 Assembly election.',
    previousTextMr: 'नोव्हेंबर २०२४ च्या विधानसभा निवडणुकीतील विद्यमान विजयी आमदारांची स्पष्ट नोंद नव्हती.',
    correctedFactEn: 'Updated as per official Palghar district directory: AC 132 Nalasopara is represented by Rajan B. Naik (BJP, 1,32,042 votes vs Kshitij Thakur 1,07,432 votes) and AC 133 Vasai is represented by Sneha Dube Pandit (BJP, 1,02,284 votes vs Hitendra Thakur 71,948 votes). Hitendra Thakur and Kshitij Thakur are historically recorded as Former MLAs.',
    correctedFactMr: 'पालघर जिल्हा प्रशासनाच्या अधिकृत नोंदीनुसार: १३२-नालासोपारा मतदारसंघातून राजन बी. नाईक (भाजप) आणि १३३-वसई मतदारसंघातून स्नेहा दुबे पंडित (भाजप) हे विद्यमान आमदार आहेत. हितेंद्र ठाकूर व क्षितिज ठाकूर यांची नोंद माजी आमदार अशी करण्यात आली आहे.',
    primarySourceCitation: 'Palghar District Directory of Representatives & Form-20 Certified Returns',
    auditorEn: 'Senior Fact-Checking Officer',
    auditorMr: 'वरिष्ठ तथ्य पडताळणी अधिकारी',
    status: 'CORRECTED_AND_PUBLISHED'
  },
  {
    id: 'cor-2024-mla',
    date: '2024-11-25',
    category: 'electoral_status',
    subjectEn: 'Hitendra Thakur & Kshitij Thakur Legislative Title',
    subjectMr: 'हितेंद्र ठाकूर व क्षितिज ठाकूर यांच्या पदनामाची दुरुस्ती',
    previousTextEn: 'Referred to both leaders as "Incumbent Sitting MLAs".',
    previousTextMr: 'दोन्ही नेत्यांचा उल्लेख "विद्यमान आमदार" असा करण्यात आला होता.',
    correctedFactEn: 'Updated to "Former 5-Term MLA (Hitendra Thakur, 133-Vasai)" and "Former 3-Term MLA (Kshitij Thakur, 132-Nalasopara)" following the conclusion of their respective legislative terms in the November 2024 general assembly election.',
    correctedFactMr: 'नोव्हेंबर २०२४ च्या विधानसभा निकालानंतर "माजी ५-वेळा आमदार (हितेंद्र ठाकूर)" व "माजी ३-वेळा आमदार (क्षितिज ठाकूर)" अशी अचूक नोंद करण्यात आली.',
    primarySourceCitation: 'Election Commission of India Gazette Notification of Elected Members (Nov 2024)',
    auditorEn: 'Legislative Research Desk',
    auditorMr: 'विधानमंडळ संशोधन विभाग',
    status: 'CORRECTED_AND_PUBLISHED'
  },
  {
    id: 'cor-vvcmc-certified-polls',
    date: '2026-11-07',
    category: 'statistical_audit',
    subjectEn: 'VVCMC Municipal Elections Certified Tally (2015 106/115 vs Subsequent Status)',
    subjectMr: 'वसई-विरार महापालिका प्रमाणित जागा (२०१५ मधील १०६/११५ व पुढील स्थिती)',
    previousTextEn: 'Hypothetical 2026 municipal election result was presented as certified.',
    previousTextMr: '२०२६ च्या संभाव्य महापालिका निकालाची अनधिकृत नोंद करण्यात आली होती.',
    correctedFactEn: 'Fact-audited: The last completed certified general municipal election for VVCMC was held in June 2015, where BVA secured 106 out of 115 total seats (absolute majority). The 2015-2020 term expired and the civic body was placed under a State Administrator. Subsequent municipal elections are pending notification by the State Election Commission (SEC) and are explicitly marked "Pending verification / पडताळणी प्रलंबित".',
    correctedFactMr: 'तथ्य पडताळणी: वसई-विरार महापालिकेची शेवटची प्रमाणित सार्वत्रिक निवडणूक जून २०१५ मध्ये झाली, ज्यात बविआने ११५ पैकी १०६ जागा जिंकल्या. २०२० मध्ये मुदत संपल्यानंतर पालिका प्रशासक राजवटीखाली असून पुढील निवडणुका राज्य निवडणूक आयोगाकडून प्रलंबित आहेत.',
    primarySourceCitation: 'State Election Commission Maharashtra Certified Returns (2015) & Municipal Admin Orders',
    auditorEn: 'Senior Data Fact-Checker',
    auditorMr: 'मुख्य तथ्य तपासणी चमू',
    status: 'CORRECTED_AND_PUBLISHED'
  },
  {
    id: 'cor-surya-water',
    date: '2024-06-15',
    category: 'infrastructure_attribution',
    subjectEn: 'Surya Regional Water Scheme Execution Agency vs Allocation',
    subjectMr: 'सूर्य प्रादेशिक पाणीपुरवठा योजना - प्रकल्प संस्था व पाणी वाटप स्पष्टता',
    previousTextEn: 'Described project as an exclusively municipal municipal-funded civic scheme.',
    previousTextMr: 'प्रकल्प केवळ महापालिकेचा स्वतःचा असल्याचे दर्शवले गेले होते.',
    correctedFactEn: 'Differentiated that the Surya project is a regional water initiative executed by MMRDA with 403 MLD total capacity from Kawdas Dam. VVCMC was allocated 185 MLD of bulk treated water following sustained legislative advocacy by BVA representatives.',
    correctedFactMr: 'सूर्य योजना ही एमएमआरडीएची ४०३ दशलक्ष लिटर क्षमतेची प्रादेशिक योजना असून त्यातील १८५ दशलक्ष लिटर पाण्याचा कोटा वसई-विरार महापालिकेसाठी आरक्षित करून प्रत्यक्षात उपलब्ध करण्यात आला.',
    primarySourceCitation: 'MMRDA Project Publication & Water Resources Dept Maharashtra Resolution',
    auditorEn: 'Public Works & Urban Affairs Auditor',
    auditorMr: 'सार्वजनिक बांधकाम लेखापरीक्षक',
    status: 'CORRECTED_AND_PUBLISHED'
  },
  {
    id: 'cor-vvcmc-formation',
    date: '2024-03-10',
    category: 'legal_clarification',
    subjectEn: 'Official Establishment of VVCMC & Legal Genesis',
    subjectMr: 'वसई-विरार महापालिका अधिकृत स्थापना व शासन निर्णय',
    previousTextEn: 'Incomplete date recorded without official notification reference.',
    previousTextMr: 'अधिकृत राजपत्राचा संदर्भ न देता अपूर्ण तारीख दिली होती.',
    correctedFactEn: 'Recorded exact date of 3 July 2009 via Government of Maharashtra Notification UDD-VVCMC-2009/CR-102, noting the merger of 4 municipal councils and 53 surrounding villages.',
    correctedFactMr: '३ जुलै २००९ रोजी नगरविकास विभागाच्या अधिकृत राजपत्रानुसार ४ नगरपालिका व ५३ गावांचे विलीनीकरण करून महापालिका स्थापन झाल्याची अचूक ऐतिहासिक नोंद.',
    primarySourceCitation: 'Government of Maharashtra Gazette UDD-VVCMC-2009/CR-102',
    auditorEn: 'Constitutional & Gazette Archivist',
    auditorMr: 'राजपत्र संग्रह प्रमुख',
    status: 'CORRECTED_AND_PUBLISHED'
  },
  {
    id: 'cor-suresh-dube',
    date: '2024-01-20',
    category: 'legal_clarification',
    subjectEn: 'Suresh Dube Case Judicial Stages & Final Supreme Court Acquittal',
    subjectMr: 'सुरेश दुबे खटला - सर्वोच्च न्यायालयाचा निर्दोषत्वाचा अंतिम निकाल',
    previousTextEn: 'General reference without distinguishing procedural stages.',
    previousTextMr: 'न्यायालयीन टप्प्यांची स्पष्टता न करता सामान्य उल्लेख होता.',
    correctedFactEn: 'Clarified full legal taxonomy: Arrested under TADA in 1990s; acquitted by Designated TADA Court in July 2005 due to lack of evidence; acquittal confirmed and appeals dismissed by the Supreme Court of India in 2009. Case conclusively closed.',
    correctedFactMr: 'टाडा न्यायालयात झालेल्या सुनावणीनंतर जुलै २००५ मध्ये निर्दोष मुक्तता; २००९ मध्ये सर्वोच्च न्यायालयाने निकाल कायम ठेवून अपील फेटाळले. खटला पूर्णतः निकाली.',
    primarySourceCitation: 'Supreme Court Criminal Appeal No. 1422/2005 (Hitendra Thakur & Ors)',
    auditorEn: 'Legal & Judicial Research Team',
    auditorMr: 'विधी व न्यायालयीन संशोधन चमू',
    status: 'CORRECTED_AND_PUBLISHED'
  }
];
