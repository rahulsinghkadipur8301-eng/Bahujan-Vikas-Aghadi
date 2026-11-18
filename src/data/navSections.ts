/**
 * CENTRALIZED NAVIGATION REGISTRY (navSections.ts)
 * 7 Primary Minimalist Sections aligned with leadership demo brief:
 * Home | About | Leadership | Journey | Constituencies | Our Work | Contact
 */

export interface NavSection {
  id: string;
  labelEn: string;
  labelMr: string;
  labelHi?: string;
  isPrimaryNav: boolean;
  descriptionEn: string;
  descriptionMr: string;
}

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'hero',
    labelEn: 'HOME',
    labelMr: 'मुखपृष्ठ',
    labelHi: 'होम',
    isPrimaryNav: true,
    descriptionEn: 'Main leadership hero & regional introduction',
    descriptionMr: 'मुख्य नेतृत्व व प्रादेशिक ओळख'
  },
  {
    id: 'about',
    labelEn: 'ABOUT',
    labelMr: 'आमच्याविषयी',
    labelHi: 'परिचय',
    isPrimaryNav: true,
    descriptionEn: 'Essential BVA origins and regional heritage',
    descriptionMr: 'बविआची स्थापना आणि प्रादेशिक अस्मिता'
  },
  {
    id: 'leadership',
    labelEn: 'LEADERSHIP',
    labelMr: 'पक्ष नेतृत्व',
    labelHi: 'नेतृत्व',
    isPrimaryNav: true,
    descriptionEn: 'Hitendra Thakur & Kshitij Thakur verified profiles',
    descriptionMr: 'हितेंद्र ठाकूर व क्षितिज ठाकूर नेतृत्व परिचय'
  },
  {
    id: 'journey',
    labelEn: 'JOURNEY',
    labelMr: 'प्रवास',
    labelHi: 'सफर',
    isPrimaryNav: true,
    descriptionEn: 'Minimal animated historical milestones timeline',
    descriptionMr: 'ऐतिहासिक कालक्रम व लढा'
  },
  {
    id: 'constituencies',
    labelEn: 'CONSTITUENCIES',
    labelMr: 'मतदारसंघ',
    labelHi: 'भूगोल',
    isPrimaryNav: true,
    descriptionEn: '132-Nalasopara & 133-Vasai interactive explorer',
    descriptionMr: '१३२-नालासोपारा व १३३-वसई मतदारसंघ नकाशा'
  },
  {
    id: 'work',
    labelEn: 'OUR WORK',
    labelMr: 'विकासकामे',
    labelHi: 'विकास',
    isPrimaryNav: true,
    descriptionEn: 'Selected documented public initiatives and civic projects',
    descriptionMr: 'पाणी, रेल्वे, शिक्षण व नागरी विकासकामे'
  },
  {
    id: 'contact',
    labelEn: 'CONTACT',
    labelMr: 'संपर्क',
    labelHi: 'संपर्क',
    isPrimaryNav: true,
    descriptionEn: 'Central Secretariat and citizen grievance redressal',
    descriptionMr: 'मध्यवर्ती कार्यालय व नागरिक संपर्क कक्ष'
  }
];

export const PRIMARY_NAV_LINKS = NAV_SECTIONS.filter((s) => s.isPrimaryNav);
export const ALL_NAV_IDS = NAV_SECTIONS.map((s) => s.id);
