// Pure logic utility functions for BVA portal
export interface FilterParams {
  category: string;
  searchQuery: string;
}

export interface InitiativeItem {
  id: string;
  titleEn: string;
  titleMr: string;
  category: 'water' | 'education' | 'transport' | 'healthcare' | 'infrastructure' | 'coastal';
  location: string;
  year: number;
  status: 'Completed' | 'Ongoing' | 'Maintained';
  descriptionEn: string;
  descriptionMr: string;
  verifiedSource: string;
  impactMetricEn: string;
  impactMetricMr: string;
}

export interface NewsItem {
  id: string;
  titleEn: string;
  titleMr: string;
  category: 'press' | 'assembly' | 'civic' | 'event';
  date: string;
  summaryEn: string;
  summaryMr: string;
  source: string;
  contentEn: string;
  contentMr: string;
}

/**
 * Filter initiatives by category and search query across English and Marathi
 */
export function filterInitiatives<T extends InitiativeItem>(items: T[], params: FilterParams): T[] {
  return items.filter(item => {
    const matchesCategory = params.category === 'all' || item.category === params.category;
    if (!matchesCategory) return false;

    if (!params.searchQuery.trim()) return true;
    const query = params.searchQuery.toLowerCase().trim();
    return (
      item.titleEn.toLowerCase().includes(query) ||
      item.titleMr.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.verifiedSource.toLowerCase().includes(query)
    );
  });
}

/**
 * Filter news items by category and search query
 */
export function filterNews<T extends NewsItem>(items: T[], params: FilterParams): T[] {
  return items.filter(item => {
    const matchesCategory = params.category === 'all' || item.category === params.category;
    if (!matchesCategory) return false;

    if (!params.searchQuery.trim()) return true;
    const query = params.searchQuery.toLowerCase().trim();
    return (
      item.titleEn.toLowerCase().includes(query) ||
      item.titleMr.toLowerCase().includes(query) ||
      item.source.toLowerCase().includes(query)
    );
  });
}

/**
 * Validates citizen grievance form input
 */
export interface GrievanceInput {
  fullName: string;
  phone: string;
  constituency: string;
  category: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof GrievanceInput, string>>;
}

export function validateGrievanceForm(input: GrievanceInput): ValidationResult {
  const errors: Partial<Record<keyof GrievanceInput, string>> = {};

  if (!input.fullName || input.fullName.trim().length < 3) {
    errors.fullName = 'Please enter your full name (minimum 3 characters).';
  }

  // Indian phone validation: 10 digits
  const cleanedPhone = input.phone.replace(/[\s\-+]/g, '');
  if (!cleanedPhone || !/^[6-9]\d{9}$/.test(cleanedPhone)) {
    errors.phone = 'Please enter a valid 10-digit Indian mobile number.';
  }

  if (!input.constituency) {
    errors.constituency = 'Please select your constituency or region.';
  }

  if (!input.category) {
    errors.category = 'Please select a grievance or inquiry topic.';
  }

  if (!input.message || input.message.trim().length < 10) {
    errors.message = 'Please provide details of your inquiry (minimum 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Formats dates for Marathi, Hindi, or English locale
 */
export function formatBvaDate(isoDate: string, lang: 'mr' | 'en' | 'hi'): string {
  const date = new Date(isoDate);
  if (isNaN(date.getTime())) return isoDate;

  if (lang === 'mr') {
    const monthsMr = [
      'जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून',
      'जुलै', 'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'
    ];
    return `${date.getDate()} ${monthsMr[date.getMonth()]} ${date.getFullYear()}`;
  }

  if (lang === 'hi') {
    const monthsHi = [
      'जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून',
      'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'
    ];
    return `${date.getDate()} ${monthsHi[date.getMonth()]} ${date.getFullYear()}`;
  }

  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

export interface GalleryRuleItem {
  id: string;
  titleEn: string;
  titleMr: string;
  category: string;
  imageSrc: string;
}

/**
 * Filter gallery items by category
 */
export function filterGalleryItems<T extends GalleryRuleItem>(items: T[], category: string): T[] {
  if (category === 'all') return items;
  return items.filter(item => item.category === category);
}

export type AdminRole = 'Editor' | 'Chief Administrator' | 'Verification Auditor';
export type VerificationState = 'VERIFIED' | 'AWAITING_VERIFICATION' | 'ARCHIVED';

/**
 * Validates whether an administrative role has authority to approve verification status
 */
export function canRoleVerify(role: AdminRole): boolean {
  return role === 'Verification Auditor' || role === 'Chief Administrator';
}

/**
 * Filter items by verification status
 */
export function filterByVerificationStatus<T extends { verificationStatus: VerificationState }>(
  items: T[],
  status: VerificationState | 'ALL'
): T[] {
  if (status === 'ALL') return items;
  return items.filter(item => item.verificationStatus === status);
}

/**
 * Filter political members by query, category, status, and ward
 */
export interface MemberFilterParams {
  query?: string;
  category?: string;
  status?: string;
  wardOrConstituency?: string;
}

export interface MinimalMember {
  id: string;
  nameEn: string;
  nameMr: string;
  category: string;
  status: string;
  wardOrConstituencyEn: string;
  wardOrConstituencyMr: string;
  currentAffiliation: string;
}

export function filterMembers<T extends MinimalMember>(members: T[], params: MemberFilterParams): T[] {
  return members.filter(member => {
    if (params.category && params.category !== 'all' && member.category !== params.category) {
      return false;
    }
    if (params.status && params.status !== 'all' && member.status !== params.status) {
      return false;
    }
    if (params.wardOrConstituency && params.wardOrConstituency !== 'all') {
      const matchWard =
        member.wardOrConstituencyEn.toLowerCase().includes(params.wardOrConstituency.toLowerCase()) ||
        member.wardOrConstituencyMr.toLowerCase().includes(params.wardOrConstituency.toLowerCase());
      if (!matchWard) return false;
    }
    if (params.query && params.query.trim()) {
      const q = params.query.toLowerCase().trim();
      const matchQuery =
        member.nameEn.toLowerCase().includes(q) ||
        member.nameMr.toLowerCase().includes(q) ||
        member.wardOrConstituencyEn.toLowerCase().includes(q) ||
        member.wardOrConstituencyMr.toLowerCase().includes(q) ||
        member.currentAffiliation.toLowerCase().includes(q);
      if (!matchQuery) return false;
    }
    return true;
  });
}

/**
 * Pure calculation for seat share percentage
 */
export function calculateSeatSharePct(seatsWon: number, totalSeats: number): number {
  if (totalSeats <= 0) return 0;
  return Number(((seatsWon / totalSeats) * 100).toFixed(1));
}

/**
 * Filter timeline events by decade and category
 */
export interface MinimalTimelineEvent {
  id: string;
  decade: string;
  category: string;
  titleEn: string;
  titleMr: string;
}

export function filterTimelineEvents<T extends MinimalTimelineEvent>(
  events: T[],
  filters: { decade?: string; category?: string; query?: string }
): T[] {
  return events.filter(evt => {
    if (filters.decade && filters.decade !== 'all' && evt.decade !== filters.decade) {
      return false;
    }
    if (filters.category && filters.category !== 'all' && evt.category !== filters.category) {
      return false;
    }
    if (filters.query && filters.query.trim()) {
      const q = filters.query.toLowerCase().trim();
      return evt.titleEn.toLowerCase().includes(q) || evt.titleMr.toLowerCase().includes(q);
    }
    return true;
  });
}

