import React, { useState, useEffect } from 'react';
import {
  X,
  Plus,
  ShieldAlert,
  CheckCircle2,
  Clock,
  Trash2,
  Edit3,
  Eye,
  RotateCcw,
  Sparkles,
  Search,
  Check,
  AlertTriangle,
  Info,
  FileText,
  Calendar,
  Layers,
  Send
} from 'lucide-react';

interface AdminCMSModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: 'mr' | 'en' | 'hi';
}

export type CmsContentType =
  | 'news'
  | 'event'
  | 'leader_draft'
  | 'initiative'
  | 'document_ref'
  | 'announcement';

export type CmsItemStatus = 'draft' | 'published' | 'archived';

export interface CmsItem {
  id: string;
  type: CmsContentType;
  titleEn: string;
  titleMr: string;
  contentEn: string;
  contentMr: string;
  category: string;
  coverImage: string;
  publicationDate: string;
  status: CmsItemStatus;
  isSampleData: boolean;
  publishedLocallyAt?: string;
  lastModifiedAt: string;
  author: string;
}

export interface CmsLogEntry {
  id: string;
  timestamp: string;
  action: string;
  targetTitle: string;
  performedBy: string;
}

const STORAGE_KEY_ITEMS = 'bva-demo-cms-v1-items';
const STORAGE_KEY_LOGS = 'bva-demo-cms-v1-logs';

const APPROVED_ASSETS = [
  { label: 'Story 1: Public Samvaad (Virar)', path: '/bva_story_1.png' },
  { label: 'Story 2: Surya Water Project Inspection', path: '/bva_story_2.png' },
  { label: 'Story 3: Viva College Educational Campus', path: '/bva_story_3.png' },
  { label: 'Story 4: Suburban Commuter Meeting', path: '/bva_story_4.png' },
  { label: 'Story 5: Coastal Fisherfolk Welfare', path: '/bva_story_5.png' },
  { label: 'Story 6: Municipal Review Meeting', path: '/bva_story_6.png' },
  { label: 'Story 7: Youth Sports Championship', path: '/bva_story_7.png' },
  { label: 'Official Party Emblem / Logo', path: '/bva_logo.png' }
];

const INITIAL_SAMPLE_ITEMS: CmsItem[] = [
  {
    id: 'cms-sample-1',
    type: 'news',
    titleEn: '[SAMPLE DATA] Press Briefing on Suburban Local Train Quadrupling',
    titleMr: '[नमुना माहिती] उपनगरीय रेल्वे ४ मार्गीकरणावर पत्रकार परिषद',
    contentEn: 'Senior delegation to submit memorandum to Western Railway authorities regarding platform safety and 15-coach rakes.',
    contentMr: 'पश्चिम रेल्वेच्या अधिकाऱ्यांना फलाट सुरक्षा आणि १५ डब्यांच्या लोकल फेऱ्या वाढवण्यासाठी निवेदन दिले जाईल.',
    category: 'Railway & Commuter Welfare',
    coverImage: '/bva_story_4.png',
    publicationDate: '2026-11-05',
    status: 'published',
    isSampleData: true,
    publishedLocallyAt: '2026-11-05 11:30 AM',
    lastModifiedAt: '2026-11-05 11:30 AM',
    author: 'Editorial Desk (Demo)'
  },
  {
    id: 'cms-sample-2',
    type: 'event',
    titleEn: '[SAMPLE DATA] Annual Coastal Fisherfolk Samvaad at Arnala Bunder',
    titleMr: '[नमुना माहिती] अर्नाळा बंदरावर पारंपरिक कोळी बांधव जनसंवाद',
    contentEn: 'Open interaction with traditional fishing cooperative representatives regarding coastal CRZ conservation and cold storage.',
    contentMr: 'पारंपरिक कोळी बांधवांच्या सीआरझेड हक्क आणि मासळी साठवणूक सोयींवर खुली चर्चा.',
    category: 'Coastal Community',
    coverImage: '/bva_story_5.png',
    publicationDate: '2026-11-12',
    status: 'draft',
    isSampleData: true,
    lastModifiedAt: '2026-11-06 02:15 PM',
    author: 'Palghar Rural Desk'
  },
  {
    id: 'cms-sample-3',
    type: 'leader_draft',
    titleEn: '[SAMPLE DATA] Candidate Profile Draft: Ward 1 Virar North Representative',
    titleMr: '[नमुना माहिती] उमेदवार परिचय मसुदा: प्रभाग १ विरार उत्तर प्रतिनिधी',
    contentEn: 'Biographical notes and 2-decade civic follow-up dossier drafted for internal editorial review.',
    contentMr: 'दोन दशकांच्या नागरी विकासकामांचा लेखाजोखा आणि बायो-डेटा अंतर्गत पडताळणीसाठी तयार.',
    category: 'Civic Governance',
    coverImage: '/bva_story_1.png',
    publicationDate: '2026-11-07',
    status: 'draft',
    isSampleData: true,
    lastModifiedAt: '2026-11-07 09:00 AM',
    author: 'Internal Research Cell'
  },
  {
    id: 'cms-sample-4',
    type: 'initiative',
    titleEn: '[SAMPLE DATA] Pelhar Pipeline Pressure Boosting Review',
    titleMr: '[नमुना माहिती] पेल्हार जलवाहिनी दाब चाचणी आढावा',
    contentEn: 'Follow-up inspection by local representatives to ensure Surya bulk water reaches elevated reservoirs in eastern industrial sector.',
    contentMr: 'सूर्य पाण्याचे वितरण पूर्वेकडील औद्योगिक पट्ट्यातील जलकुंभांपर्यंत सुरळीत पोहोचण्यासाठी पाहणी.',
    category: 'Drinking Water Grid',
    coverImage: '/bva_story_2.png',
    publicationDate: '2026-11-04',
    status: 'published',
    isSampleData: true,
    publishedLocallyAt: '2026-11-04 04:00 PM',
    lastModifiedAt: '2026-11-04 04:00 PM',
    author: 'Civic Works Desk'
  },
  {
    id: 'cms-sample-5',
    type: 'document_ref',
    titleEn: '[SAMPLE DATA] Reference Index: Assembly Hansard Starred Question No. 118',
    titleMr: '[नमुना माहिती] संदर्भ नोंद: विधानसभा तारांकित प्रश्न क्रमांक ११८',
    contentEn: 'Record of legislative question tabled in Maharashtra Legislative Assembly regarding Western Railway commuter medical rooms.',
    contentMr: 'उपनगरीय रेल्वे स्थानकांत आपत्कालीन वैद्यकीय कक्ष सुरू करण्याबाबत विधीमंडळात विचारलेला प्रश्न.',
    category: 'Legislative Hansard',
    coverImage: '/bva_logo.png',
    publicationDate: '2024-03-14',
    status: 'published',
    isSampleData: true,
    publishedLocallyAt: '2024-03-14 10:00 AM',
    lastModifiedAt: '2024-03-14 10:00 AM',
    author: 'Legislative Secretariat Cell'
  },
  {
    id: 'cms-sample-6',
    type: 'announcement',
    titleEn: '[SAMPLE DATA] Daily Public Samvaad Morning Hours Reminder',
    titleMr: '[नमुना माहिती] दैनिक जनसंवाद सकाळ वेळ सूचना',
    contentEn: 'Daily citizen walk-in hours continue from 9:00 AM to 1:30 PM at the Virar Central Secretariat for grievance submissions.',
    contentMr: 'नागरिकांच्या तक्रारी व निवेदनांसाठी दररोज सकाळी ९ ते दुपारी १:३० या वेळेत विरार मध्यवर्ती कार्यालयात संपर्क साधता येईल.',
    category: 'Public Notice',
    coverImage: '/bva_story_1.png',
    publicationDate: '2026-11-01',
    status: 'published',
    isSampleData: true,
    publishedLocallyAt: '2026-11-01 08:30 AM',
    lastModifiedAt: '2026-11-01 08:30 AM',
    author: 'Central Secretariat'
  }
];

export const AdminCMSModal: React.FC<AdminCMSModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const [items, setItems] = useState<CmsItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_ITEMS);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('Could not read CMS local items', e);
    }
    return INITIAL_SAMPLE_ITEMS;
  });

  const [logs, setLogs] = useState<CmsLogEntry[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_LOGS);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('Could not read CMS local logs', e);
    }
    return [
      {
        id: 'log-seed-1',
        timestamp: '2026-11-07 10:15 AM',
        action: 'Initialized Sample CMS Workspace',
        targetTitle: '6 Baseline Demonstration Records',
        performedBy: 'Demo System Admin'
      }
    ];
  });

  // UI state
  const [activeTab, setActiveTab] = useState<'manage' | 'editor' | 'logs' | 'architecture'>('manage');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');
  const [previewItem, setPreviewItem] = useState<CmsItem | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Form Editor state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formType, setFormType] = useState<CmsContentType>('news');
  const [formTitleEn, setFormTitleEn] = useState('');
  const [formTitleMr, setFormTitleMr] = useState('');
  const [formContentEn, setFormContentEn] = useState('');
  const [formContentMr, setFormContentMr] = useState('');
  const [formCategory, setFormCategory] = useState('Public Outreach');
  const [formCoverImage, setFormCoverImage] = useState('/bva_story_1.png');
  const [formPublicationDate, setFormPublicationDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ITEMS, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to sync CMS items to localStorage', e);
    }
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LOGS, JSON.stringify(logs));
    } catch (e) {
      console.error('Failed to sync CMS logs to localStorage', e);
    }
  }, [logs]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (previewItem) {
          setPreviewItem(null);
        } else if (showResetConfirm) {
          setShowResetConfirm(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, previewItem, showResetConfirm, onClose]);

  if (!isOpen) return null;

  const appendLog = (action: string, targetTitle: string) => {
    const newLog: CmsLogEntry = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toLocaleString(),
      action,
      targetTitle,
      performedBy: 'Local Demo Administrator'
    };
    setLogs((prev) => [newLog, ...prev.slice(0, 49)]);
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formTitleEn.trim() || formTitleEn.trim().length < 5) {
      errs.titleEn = 'English title is mandatory (min 5 characters).';
    }
    if (!formTitleMr.trim() || formTitleMr.trim().length < 5) {
      errs.titleMr = 'मराठी शीर्षक आवश्यक आहे (किमान ५ अक्षरे).';
    }
    if (!formContentEn.trim() || formContentEn.trim().length < 10) {
      errs.contentEn = 'English content description is mandatory (min 10 characters).';
    }
    if (!formContentMr.trim() || formContentMr.trim().length < 10) {
      errs.contentMr = 'मराठी तपशील आवश्यक आहे (किमान १० अक्षरे).';
    }
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const startCreateNew = () => {
    setEditingId(null);
    setFormType('news');
    setFormTitleEn('');
    setFormTitleMr('');
    setFormContentEn('');
    setFormContentMr('');
    setFormCategory('Public Outreach');
    setFormCoverImage('/bva_story_1.png');
    setFormPublicationDate(new Date().toISOString().split('T')[0]);
    setFormErrors({});
    setActiveTab('editor');
  };

  const startEdit = (item: CmsItem) => {
    setEditingId(item.id);
    setFormType(item.type);
    setFormTitleEn(item.titleEn);
    setFormTitleMr(item.titleMr);
    setFormContentEn(item.contentEn);
    setFormContentMr(item.contentMr);
    setFormCategory(item.category);
    setFormCoverImage(item.coverImage);
    setFormPublicationDate(item.publicationDate);
    setFormErrors({});
    setActiveTab('editor');
  };

  const handleSave = (status: 'draft' | 'published') => {
    if (!validateForm()) return;

    const nowStr = new Date().toLocaleString();
    if (editingId) {
      // Edit existing
      setItems((prev) =>
        prev.map((item) => {
          if (item.id === editingId) {
            return {
              ...item,
              type: formType,
              titleEn: formTitleEn.trim(),
              titleMr: formTitleMr.trim(),
              contentEn: formContentEn.trim(),
              contentMr: formContentMr.trim(),
              category: formCategory.trim(),
              coverImage: formCoverImage,
              publicationDate: formPublicationDate,
              status,
              publishedLocallyAt: status === 'published' ? nowStr : item.publishedLocallyAt,
              lastModifiedAt: nowStr
            };
          }
          return item;
        })
      );
      appendLog(
        status === 'published' ? 'Published Changes Locally' : 'Updated Draft',
        formTitleEn.trim()
      );
    } else {
      // Create new
      const newItem: CmsItem = {
        id: `cms-item-${Date.now()}`,
        type: formType,
        titleEn: formTitleEn.trim(),
        titleMr: formTitleMr.trim(),
        contentEn: formContentEn.trim(),
        contentMr: formContentMr.trim(),
        category: formCategory.trim(),
        coverImage: formCoverImage,
        publicationDate: formPublicationDate,
        status,
        isSampleData: true,
        publishedLocallyAt: status === 'published' ? nowStr : undefined,
        lastModifiedAt: nowStr,
        author: 'Demo Editor'
      };
      setItems((prev) => [newItem, ...prev]);
      appendLog(
        status === 'published' ? 'Created & Published Locally' : 'Created New Draft',
        formTitleEn.trim()
      );
    }

    setActiveTab('manage');
  };

  const handleDelete = (id: string, title: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    appendLog('Deleted Item Record', title);
  };

  const handleResetDemoData = () => {
    setItems(INITIAL_SAMPLE_ITEMS);
    setShowResetConfirm(false);
    appendLog('Reset Demo Data', 'Restored 6 Baseline Sample Records');
  };

  // Filter items
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.titleMr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedTypeFilter === 'all' || item.type === selectedTypeFilter;
    const matchesStatus = selectedStatusFilter === 'all' || item.status === selectedStatusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cms-modal-heading"
    >
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[94vh]">
        {/* =========================================================
            1. MANDATORY CONSPICUOUS DEMO CMS BANNER
            ========================================================= */}
        <div className="px-4 py-2 bg-amber-500 text-slate-950 text-xs font-bold flex items-center justify-between border-b border-amber-600">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-slate-950 shrink-0" />
            <span>
              <strong>DEMO CMS — Local Sample Data Only:</strong> All records are saved exclusively to your browser’s local storage (namespace:{' '}
              <code className="font-mono bg-amber-400/60 px-1 py-0.5 rounded text-[11px]">{STORAGE_KEY_ITEMS}</code>). No live server updates or party broadcasts occur.
            </span>
          </div>
          <button
            onClick={() => setShowResetConfirm(true)}
            className="text-[11px] font-mono underline hover:text-white shrink-0 ml-2 cursor-pointer font-bold"
          >
            Reset Demo Data
          </button>
        </div>

        {/* Modal Top Header in Royal Deep Blue */}
        <div className="p-3 sm:px-6 bg-[#0220A8] text-white flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-3">
            <img src="/bva_logo.png" alt="BVA Emblem" className="h-7 w-auto object-contain rounded" />
            <div>
              <h3 id="cms-modal-heading" className="text-sm sm:text-base font-extrabold tracking-wide font-display text-white">
                BVA Editorial CMS Portal (Demonstration Prototype)
              </h3>
              <p className="text-[11px] text-blue-200">
                Local Content Lifecycle, Draft Workflows &amp; Audit Logs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={startCreateNew}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FDF219] text-[#0220A8] rounded-xl text-xs font-bold hover:bg-yellow-300 transition-colors cursor-pointer shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create Item</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close CMS Console"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CMS Sub Navigation Tabs */}
        <div className="px-4 sm:px-6 py-2 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveTab('manage')}
              className={`py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'manage'
                  ? 'bg-[#0220A8] text-[#FDF219] shadow-xs'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              Content Roster ({items.length})
            </button>
            <button
              onClick={startCreateNew}
              className={`py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'editor'
                  ? 'bg-[#0220A8] text-[#FDF219] shadow-xs'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              {editingId ? 'Edit Entry' : '+ New Item'}
            </button>
            <button
              onClick={() => setActiveTab('logs')}
              className={`py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'logs'
                  ? 'bg-[#0220A8] text-[#FDF219] shadow-xs'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              Change Log ({logs.length})
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'architecture'
                  ? 'bg-[#0220A8] text-[#FDF219] shadow-xs'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              Production Specs
            </button>
          </div>

          <button
            onClick={startCreateNew}
            className="sm:hidden text-xs text-[#0220A8] font-bold underline"
          >
            + Create
          </button>
        </div>

        {/* Modal Scrollable Workspace Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-white">
          {/* =========================================================
              TAB 1: MANAGE CONTENT ROSTER (Search, Filter, List, Edit, Delete, Preview)
              ========================================================= */}
          {activeTab === 'manage' && (
            <div className="space-y-4">
              {/* Filter and Search Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pb-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by English or Marathi title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#0220A8]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={selectedTypeFilter}
                    onChange={(e) => setSelectedTypeFilter(e.target.value)}
                    aria-label="Filter by Content Type"
                    className="px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer"
                  >
                    <option value="all">All Types</option>
                    <option value="news">News Article</option>
                    <option value="event">Event</option>
                    <option value="leader_draft">Leader Draft</option>
                    <option value="initiative">Public Initiative</option>
                    <option value="document_ref">Document Reference</option>
                    <option value="announcement">Announcement</option>
                  </select>

                  <select
                    value={selectedStatusFilter}
                    onChange={(e) => setSelectedStatusFilter(e.target.value)}
                    aria-label="Filter by Publication Status"
                    className="px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer"
                  >
                    <option value="all">All Statuses</option>
                    <option value="draft">Drafts Only</option>
                    <option value="published">Published Locally</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              {/* Items Table / Cards */}
              {filteredItems.length === 0 ? (
                <div className="text-center py-12 text-slate-400 space-y-2 border-2 border-dashed border-slate-200 rounded-2xl">
                  <FileText className="w-8 h-8 mx-auto text-slate-300" />
                  <p className="text-xs font-bold">No entries found matching filters.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedTypeFilter('all');
                      setSelectedStatusFilter('all');
                    }}
                    className="text-xs text-[#0220A8] underline font-bold cursor-pointer"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-white border border-slate-200 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#0220A8] transition-all shadow-2xs"
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <img
                          src={item.coverImage}
                          alt={item.titleEn}
                          className="w-14 h-14 rounded-xl object-cover border border-slate-200 shrink-0 bg-slate-100"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono mb-1">
                            <span className="px-1.5 py-0.5 rounded bg-blue-50 text-[#0220A8] font-bold uppercase">
                              {item.type.replace('_', ' ')}
                            </span>
                            <span className="text-slate-400">·</span>
                            <span className="text-slate-500 font-semibold">{item.category}</span>
                            <span className="text-slate-400">·</span>
                            <span className="text-slate-500">{item.publicationDate}</span>
                            {item.isSampleData && (
                              <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-bold">
                                SAMPLE
                              </span>
                            )}
                          </div>

                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                            {item.titleEn}
                          </h4>
                          <p className="text-[11px] text-slate-500 font-marathi truncate mt-0.5">
                            {item.titleMr}
                          </p>

                          <div className="mt-1 text-[10px] text-slate-400 flex items-center gap-2">
                            <span>Author: {item.author}</span>
                            <span>·</span>
                            <span>Modified: {item.lastModifiedAt}</span>
                          </div>
                        </div>
                      </div>

                      {/* Status Pill & Action Buttons */}
                      <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase ${
                            item.status === 'published'
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                              : 'bg-amber-50 text-amber-800 border border-amber-300'
                          }`}
                        >
                          {item.status === 'published' ? 'Published Locally' : 'Draft'}
                        </span>

                        <button
                          onClick={() => setPreviewItem(item)}
                          className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-[#0220A8] hover:bg-slate-50 transition-colors cursor-pointer"
                          title="Preview Public Render"
                          aria-label="Preview Item"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => startEdit(item)}
                          className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-[#0220A8] hover:bg-slate-50 transition-colors cursor-pointer"
                          title="Edit Item"
                          aria-label="Edit Item"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleDelete(item.id, item.titleEn)}
                          className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Delete Record"
                          aria-label="Delete Item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* =========================================================
              TAB 2: EDITOR (Create / Edit Item with Full Validation)
              ========================================================= */}
          {activeTab === 'editor' && (
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="pb-3 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    {editingId ? 'Edit Content Record' : 'Create New Demo Entry'}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Bilingual entry form with inline validation and dual Marathi/English storage.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('manage')}
                  className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                >
                  Cancel &amp; Return
                </button>
              </div>

              <div className="space-y-4 text-xs font-sans">
                {/* Type & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Content Type *</label>
                    <select
                      value={formType}
                      onChange={(e) => setFormType(e.target.value as CmsContentType)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold"
                    >
                      <option value="news">News Article</option>
                      <option value="event">Event</option>
                      <option value="leader_draft">Leader Profile Draft</option>
                      <option value="initiative">Public Initiative</option>
                      <option value="document_ref">Document Reference</option>
                      <option value="announcement">Home Announcement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Category / Topic *</label>
                    <input
                      type="text"
                      placeholder="e.g. Drinking Water, Railways"
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Publication Date *</label>
                    <input
                      type="date"
                      value={formPublicationDate}
                      onChange={(e) => setFormPublicationDate(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium"
                    />
                  </div>
                </div>

                {/* English Title */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Title in English * {formErrors.titleEn && <span className="text-rose-600 font-normal ml-2">{formErrors.titleEn}</span>}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter official English title..."
                    value={formTitleEn}
                    onChange={(e) => {
                      setFormTitleEn(e.target.value);
                      if (formErrors.titleEn) setFormErrors({ ...formErrors, titleEn: '' });
                    }}
                    className={`w-full px-3 py-2 bg-white border rounded-xl text-xs font-medium focus:outline-none focus:ring-1 ${
                      formErrors.titleEn ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-[#0220A8]'
                    }`}
                  />
                </div>

                {/* Marathi Title */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Title in Marathi (मराठी शीर्षक) * {formErrors.titleMr && <span className="text-rose-600 font-normal ml-2">{formErrors.titleMr}</span>}
                  </label>
                  <input
                    type="text"
                    placeholder="मराठी मध्ये अचूक शीर्षक लिहा..."
                    value={formTitleMr}
                    onChange={(e) => {
                      setFormTitleMr(e.target.value);
                      if (formErrors.titleMr) setFormErrors({ ...formErrors, titleMr: '' });
                    }}
                    className={`w-full px-3 py-2 bg-white border rounded-xl text-xs font-medium font-marathi focus:outline-none focus:ring-1 ${
                      formErrors.titleMr ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-[#0220A8]'
                    }`}
                  />
                </div>

                {/* English Content */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Content / Description (English) * {formErrors.contentEn && <span className="text-rose-600 font-normal ml-2">{formErrors.contentEn}</span>}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Detailed explanation, background and official facts..."
                    value={formContentEn}
                    onChange={(e) => {
                      setFormContentEn(e.target.value);
                      if (formErrors.contentEn) setFormErrors({ ...formErrors, contentEn: '' });
                    }}
                    className={`w-full px-3 py-2 bg-white border rounded-xl text-xs font-medium focus:outline-none focus:ring-1 ${
                      formErrors.contentEn ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-[#0220A8]'
                    }`}
                  />
                </div>

                {/* Marathi Content */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Content / Description (मराठी तपशील) * {formErrors.contentMr && <span className="text-rose-600 font-normal ml-2">{formErrors.contentMr}</span>}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="नागरिकांसाठी मराठीत सविस्तर माहिती व तपशील..."
                    value={formContentMr}
                    onChange={(e) => {
                      setFormContentMr(e.target.value);
                      if (formErrors.contentMr) setFormErrors({ ...formErrors, contentMr: '' });
                    }}
                    className={`w-full px-3 py-2 bg-white border rounded-xl text-xs font-medium font-marathi focus:outline-none focus:ring-1 ${
                      formErrors.contentMr ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-[#0220A8]'
                    }`}
                  />
                </div>

                {/* Cover Asset Selection */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Approved Local Asset Cover *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {APPROVED_ASSETS.map((asset) => (
                      <button
                        type="button"
                        key={asset.path}
                        onClick={() => setFormCoverImage(asset.path)}
                        className={`p-2 rounded-xl border text-left flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                          formCoverImage === asset.path
                            ? 'border-[#0220A8] ring-2 ring-[#0220A8]/20 bg-blue-50/50'
                            : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                        }`}
                      >
                        <img src={asset.path} alt={asset.label} className="w-12 h-12 object-cover rounded-lg" />
                        <span className="text-[10px] text-slate-700 font-semibold line-clamp-2 text-center">
                          {asset.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500">
                    Drafts remain editable anytime in this browser session.
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleSave('draft')}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Save as Draft
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSave('published')}
                      className="px-5 py-2.5 rounded-xl bg-[#0220A8] hover:bg-[#00177A] text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-[#FDF219]" />
                      <span>Simulate Publish (Demo Only)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
              TAB 3: AUDIT & CHANGE LOG (Chronological activity history)
              ========================================================= */}
          {activeTab === 'logs' && (
            <div className="space-y-4">
              <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Immutable Audit &amp; Change Log
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Every modification, publish simulation, draft creation, and data reset is time-stamped.
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400">Total Events: {logs.length}</span>
              </div>

              <div className="space-y-2">
                {logs.map((log) => (
                  <div
                    key={log.id}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs gap-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#0220A8]/10 text-[#0220A8] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{log.action}</p>
                        <p className="text-[11px] text-slate-600 truncate max-w-md">{log.targetTitle}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0 text-[10px] font-mono text-slate-400">
                      <div>{log.performedBy}</div>
                      <div>{log.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================
              TAB 4: PRODUCTION REQUIREMENTS (Honest Architectural Spec)
              ========================================================= */}
          {activeTab === 'architecture' && (
            <div className="space-y-4 text-xs text-slate-700 leading-relaxed max-w-3xl">
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1">
                <h4 className="text-xs font-bold text-[#0220A8] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-[#0220A8]" />
                  <span>Production Implementation Architecture</span>
                </h4>
                <p className="text-xs text-slate-700">
                  This demo CMS demonstrates the editorial schema and lifecycle. The live enterprise production deployment will require the following hardened backend services:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <h5 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Real Authentication &amp; 2FA</span>
                  </h5>
                  <p className="text-[11px] text-slate-600">
                    SAML 2.0 / OAuth2 with Google Workspace or TOTP 2-factor authentication for party administrators.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <h5 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Role-Based Access Control (RBAC)</span>
                  </h5>
                  <p className="text-[11px] text-slate-600">
                    Granular roles: Senior Fact-Checker, Marathi Translator, Visual Editor, and Chief Spokesperson Approval Gate.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <h5 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>PostgreSQL &amp; Audit Logs</span>
                  </h5>
                  <p className="text-[11px] text-slate-600">
                    Relational Cloud SQL database with immutable append-only revision tables and automated daily snapshots.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <h5 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Asset Storage &amp; Anti-Virus</span>
                  </h5>
                  <p className="text-[11px] text-slate-600">
                    Signed upload URLs to Google Cloud Storage with automated ClamAV scanning and WebP image optimization.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-3.5 px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <span className="font-mono text-[11px]">
            Demo Environment · Local Namespace: <strong className="text-slate-900">{STORAGE_KEY_ITEMS}</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0220A8] hover:bg-[#00177A] text-white rounded-xl font-bold transition-colors cursor-pointer shadow-xs"
          >
            Close CMS
          </button>
        </div>
      </div>

      {/* =========================================================
          PREVIEW MODAL (Exact Public Rendering Simulation)
          ========================================================= */}
      {previewItem && (
        <div className="fixed inset-0 z-60 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-slate-200 shadow-2xl relative space-y-4">
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 text-[#0220A8] text-xs font-mono font-bold">
              <span>Public Card Preview Simulation</span>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
              <img src={previewItem.coverImage} alt={previewItem.titleEn} className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2 bg-white">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="text-[#0220A8] font-bold uppercase">{previewItem.category}</span>
                  <span>{previewItem.publicationDate}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{previewItem.titleEn}</h4>
                <p className="text-xs font-bold text-[#0220A8] font-marathi">{previewItem.titleMr}</p>
                <p className="text-xs text-slate-600 font-sans leading-relaxed pt-1">
                  {previewItem.contentEn}
                </p>
                <p className="text-xs text-slate-500 font-marathi leading-relaxed pt-0.5">
                  {previewItem.contentMr}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] font-mono text-slate-400">
                Status: {previewItem.status === 'published' ? 'Published Locally' : 'Draft'}
              </span>
              <button
                onClick={() => setPreviewItem(null)}
                className="px-4 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          RESET CONFIRMATION DIALOG
          ========================================================= */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-60 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 border border-slate-200 shadow-2xl space-y-4">
            <div className="flex items-center gap-2.5 text-amber-600">
              <AlertTriangle className="w-6 h-6" />
              <h4 className="text-sm font-bold text-slate-900">Reset Demo Data?</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              This will restore the 6 baseline sample records and clear any custom items saved in your local storage namespace.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleResetDemoData}
                className="px-4 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold cursor-pointer"
              >
                Confirm Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
