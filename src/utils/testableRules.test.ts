import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterInitiatives,
  filterNews,
  validateGrievanceForm,
  formatBvaDate,
  filterGalleryItems,
  type InitiativeItem,
  type NewsItem
} from './testableRules';

test('filterInitiatives correctly matches category and search string', () => {
  const sampleItems: InitiativeItem[] = [
    {
      id: 'init-1',
      titleEn: 'Surya Bulk Water Project',
      titleMr: 'सूर्य प्रादेशिक पाणीपुरवठा योजना',
      category: 'water',
      location: 'Vasai-Virar Sub-region',
      year: 2023,
      status: 'Ongoing',
      descriptionEn: 'Major water project.',
      descriptionMr: 'महत्त्वपूर्ण पाणी योजना.',
      verifiedSource: 'MMRDA & VVCMC Project Records',
      impactMetricEn: '185 MLD',
      impactMetricMr: '१८५ दशलक्ष लिटर'
    },
    {
      id: 'init-2',
      titleEn: 'Viva College Educational Hub',
      titleMr: 'विवा कॉलेज शैक्षणिक संकुल',
      category: 'education',
      location: 'Virar West',
      year: 2000,
      status: 'Maintained',
      descriptionEn: 'Educational campus.',
      descriptionMr: 'शैक्षणिक संकुल.',
      verifiedSource: 'University of Mumbai Affiliation',
      impactMetricEn: '35,000+ Students',
      impactMetricMr: '३५,०००+ विद्यार्थी'
    }
  ];

  // Test 1: Category filter
  const waterOnly = filterInitiatives(sampleItems, { category: 'water', searchQuery: '' });
  assert.equal(waterOnly.length, 1);
  assert.equal(waterOnly[0].id, 'init-1');

  // Test 2: Search in English
  const searchedEn = filterInitiatives(sampleItems, { category: 'all', searchQuery: 'surya' });
  assert.equal(searchedEn.length, 1);
  assert.equal(searchedEn[0].id, 'init-1');

  // Test 3: Search in Marathi
  const searchedMr = filterInitiatives(sampleItems, { category: 'all', searchQuery: 'विवा' });
  assert.equal(searchedMr.length, 1);
  assert.equal(searchedMr[0].id, 'init-2');

  // Test 4: No matches
  const noMatch = filterInitiatives(sampleItems, { category: 'all', searchQuery: 'xyznonexistent' });
  assert.equal(noMatch.length, 0);
});

test('filterNews correctly filters by category and search keyword', () => {
  const sampleNews: NewsItem[] = [
    {
      id: 'n-1',
      titleEn: 'Vidhan Sabha Debate on Dahanu-Virar Suburban Rail Frequency',
      titleMr: 'डहाणू-विरार उपनगरीय रेल्वे फेऱ्यांवर विधानसभेत आवाज',
      category: 'assembly',
      date: '2024-07-15',
      summaryEn: 'Summary of rail debate.',
      summaryMr: 'रेल्वे चर्चेचा सारांश.',
      source: 'Maharashtra Vidhan Sabha Archives',
      contentEn: 'Full speech content.',
      contentMr: 'भाषण तपशील.'
    },
    {
      id: 'n-2',
      titleEn: 'Public Samvaad at Arnala Koliwada on Coastal Jetty Upgrades',
      titleMr: 'अर्नाळा कोळीवाड्यात नागरिकांशी संवाद',
      category: 'civic',
      date: '2024-09-10',
      summaryEn: 'Summary of jetty meeting.',
      summaryMr: 'जेटी बैठकीचा सारांश.',
      source: 'Local Media Coverage',
      contentEn: 'Fisherfolk interaction.',
      contentMr: 'कोळी बांधव संवाद.'
    }
  ];

  const assemblyNews = filterNews(sampleNews, { category: 'assembly', searchQuery: '' });
  assert.equal(assemblyNews.length, 1);
  assert.equal(assemblyNews[0].id, 'n-1');

  const railNews = filterNews(sampleNews, { category: 'all', searchQuery: 'rail' });
  assert.equal(railNews.length, 1);
  assert.equal(railNews[0].id, 'n-1');
});

test('validateGrievanceForm validates phone, name, and mandatory inputs', () => {
  const invalidResult = validateGrievanceForm({
    fullName: '',
    phone: '12345',
    constituency: '',
    category: '',
    message: 'short'
  });

  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.phone);
  assert.ok(invalidResult.errors.constituency);
  assert.ok(invalidResult.errors.message);

  const validResult = validateGrievanceForm({
    fullName: 'Ramesh Patil',
    phone: '9820123456',
    constituency: '133-Vasai',
    category: 'water',
    message: 'Regarding local water distribution pressure in Papdy area.'
  });

  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('formatBvaDate outputs localized strings for Marathi, Hindi, and English', () => {
  const testDate = '2024-05-18';
  const enFormatted = formatBvaDate(testDate, 'en');
  const mrFormatted = formatBvaDate(testDate, 'mr');
  const hiFormatted = formatBvaDate(testDate, 'hi');

  assert.ok(enFormatted.includes('2024'));
  assert.ok(mrFormatted.includes('मे') && mrFormatted.includes('2024'));
  assert.ok(hiFormatted.includes('मई') && hiFormatted.includes('2024'));
});

test('filterGalleryItems filters by category and returns all items on all category', () => {
  const sampleGallery = [
    { id: '1', titleEn: 'A', titleMr: 'अ', category: 'samvaad', imageSrc: '/bva_story_1.png' },
    { id: '2', titleEn: 'B', titleMr: 'ब', category: 'initiatives', imageSrc: '/bva_story_2.png' },
    { id: '3', titleEn: 'C', titleMr: 'क', category: 'cultural', imageSrc: '/bva_story_3.png' }
  ];

  const all = filterGalleryItems(sampleGallery, 'all');
  assert.equal(all.length, 3);

  const samvaadOnly = filterGalleryItems(sampleGallery, 'samvaad');
  assert.equal(samvaadOnly.length, 1);
  assert.equal(samvaadOnly[0].id, '1');

  const emptyCategory = filterGalleryItems(sampleGallery, 'nonexistent');
  assert.equal(emptyCategory.length, 0);
});

test('canRoleVerify enforces role-based verification authority', async () => {
  const { canRoleVerify } = await import('./testableRules');
  assert.equal(canRoleVerify('Verification Auditor'), true);
  assert.equal(canRoleVerify('Chief Administrator'), true);
  assert.equal(canRoleVerify('Editor'), false);
});

test('filterByVerificationStatus correctly isolates verified items', async () => {
  const { filterByVerificationStatus } = await import('./testableRules');
  const items = [
    { id: '1', title: 'A', verificationStatus: 'VERIFIED' as const },
    { id: '2', title: 'B', verificationStatus: 'AWAITING_VERIFICATION' as const },
    { id: '3', title: 'C', verificationStatus: 'ARCHIVED' as const }
  ];

  const verified = filterByVerificationStatus(items, 'VERIFIED');
  assert.equal(verified.length, 1);
  assert.equal(verified[0].id, '1');

  const all = filterByVerificationStatus(items, 'ALL');
  assert.equal(all.length, 3);
});

test('filterMembers accurately filters by category, status, ward, and bilingual queries', async () => {
  const { filterMembers } = await import('./testableRules');
  const sampleMembers = [
    {
      id: 'hitendra',
      nameEn: 'Hitendra Vishnu Thakur',
      nameMr: 'हितेंद्र विष्णू ठाकूर',
      category: 'core_leader',
      status: 'ACTIVE',
      wardOrConstituencyEn: 'Vasai Assembly (133)',
      wardOrConstituencyMr: 'वसई विधानसभा मतदारसंघ (१३३)',
      currentAffiliation: 'Bahujan Vikas Aaghadi'
    },
    {
      id: 'sadanand',
      nameEn: 'Sadanand Gajanan Patil',
      nameMr: 'सदानंद गजानन पाटील',
      category: 'corporator',
      status: 'ACTIVE',
      wardOrConstituencyEn: 'VVCMC Electoral Ward 1D',
      wardOrConstituencyMr: 'वसई-विरार महापालिका प्रभाग १-ड',
      currentAffiliation: 'Bahujan Vikas Aaghadi'
    },
    {
      id: 'rajeev',
      nameEn: 'Rajeev Patil (Nana)',
      nameMr: 'राजीव पाटील',
      category: 'former_member',
      status: 'FORMER_PARTY_MEMBER',
      wardOrConstituencyEn: 'Vasai West',
      wardOrConstituencyMr: 'वसई पश्चिम',
      currentAffiliation: 'Shiv Sena'
    }
  ];

  // 1. Filter by category
  const corporators = filterMembers(sampleMembers, { category: 'corporator' });
  assert.equal(corporators.length, 1);
  assert.equal(corporators[0].id, 'sadanand');

  // 2. Filter by status
  const former = filterMembers(sampleMembers, { status: 'FORMER_PARTY_MEMBER' });
  assert.equal(former.length, 1);
  assert.equal(former[0].id, 'rajeev');

  // 3. Search in Marathi for Sadanand
  const searchSadanandMr = filterMembers(sampleMembers, { query: 'सदानंद' });
  assert.equal(searchSadanandMr.length, 1);
  assert.equal(searchSadanandMr[0].id, 'sadanand');

  // 4. Ward filter for 1D
  const ward1D = filterMembers(sampleMembers, { wardOrConstituency: '1D' });
  assert.equal(ward1D.length, 1);
  assert.equal(ward1D[0].id, 'sadanand');
});

test('calculateSeatSharePct computes correct percentages', async () => {
  const { calculateSeatSharePct } = await import('./testableRules');
  // 2026 VVCMC: 71 / 115
  assert.equal(calculateSeatSharePct(71, 115), 61.7);
  // 2015 VVCMC: 106 / 115
  assert.equal(calculateSeatSharePct(106, 115), 92.2);
  // 2010 VVCMC: 55 / 89
  assert.equal(calculateSeatSharePct(55, 89), 61.8);
  // Edge case
  assert.equal(calculateSeatSharePct(0, 0), 0);
});

test('filterTimelineEvents filters by decade and category', async () => {
  const { filterTimelineEvents } = await import('./testableRules');
  const sampleEvents = [
    { id: '1', decade: '1990s', category: 'election', titleEn: '1990 Assembly', titleMr: '१९९० निवडणूक' },
    { id: '2', decade: '2000s', category: 'governance', titleEn: '2009 VVCMC Gazette', titleMr: '२००९ मनपा' },
    { id: '3', decade: '2020s', category: 'election', titleEn: '2026 VVCMC Comeback', titleMr: '२०२६ विजय' }
  ];

  const electionsOnly = filterTimelineEvents(sampleEvents, { category: 'election' });
  assert.equal(electionsOnly.length, 2);

  const decade2020s = filterTimelineEvents(sampleEvents, { decade: '2020s' });
  assert.equal(decade2020s.length, 1);
  assert.equal(decade2020s[0].id, '3');
});


