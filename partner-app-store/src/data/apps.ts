export interface App {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  logo: string
  category: string
  developer: string
  developerType: 'native' | 'partner'
  rating: number
  reviews: number
  installs: string
  pricing: 'free' | 'paid'
  featured: boolean
  isNew: boolean
  aiPowered: boolean
  status: 'published' | 'draft' | 'archived'
  features: string[]
  screenshots: string[]
  collection?: string
  lastUpdated: string
  supportUrl: string
  documentationUrl: string
}

export const categories = [
  { id: 'all', name: 'All Integrations', icon: 'Grid3X3', count: 0 },
  { id: 'Agentic AI', name: 'Agentic AI', icon: 'Sparkles', count: 0 },
  { id: 'CRM', name: 'CRM', icon: 'Users', count: 0 },
  { id: 'Helpdesk', name: 'Helpdesk', icon: 'Headphones', count: 0 },
  { id: 'Productivity', name: 'Productivity', icon: 'Zap', count: 0 },
  { id: 'Healthcare', name: 'Healthcare', icon: 'Heart', count: 0 },
]

export const collections = [
  { id: 'agentic-ai', name: 'Agentic AI', description: 'Apps powered by DialpadGPT and AI-driven outcomes' },
  { id: 'customer-engagement', name: 'Customer Engagement', description: 'CRM giants like Salesforce, HubSpot, and Dynamics 365' },
  { id: 'productivity', name: 'Productivity & Collaboration', description: 'Slack, Google Workspace, and Microsoft Teams' },
  { id: 'healthcare', name: 'Healthcare & EHR', description: 'Epic, AthenaHealth, and HIPAA-compliant integrations' },
]

export const apps: App[] = [
  {
    id: 'dialpadgpt',
    name: 'DialpadGPT',
    slug: 'dialpadgpt',
    logo: 'https://logo.clearbit.com/dialpad.com',
    category: 'Agentic AI',
    developer: 'Dialpad',
    developerType: 'native',
    shortDescription: 'AI-powered real-time coaching, automated summaries, and intelligent agent assist.',
    description: 'DialpadGPT is the AI engine powering next-generation customer conversations. Get real-time coaching suggestions, automated post-call summaries, sentiment analysis, and intelligent knowledge base recommendations—all without lifting a finger. Built on proprietary AI trained on billions of minutes of business conversations.',
    features: ['Real-time AI coaching & suggestions', 'Automated call summaries & action items', 'Live sentiment analysis', 'Intelligent knowledge base lookup', 'Compliance monitoring & alerts', 'Custom AI playbooks', 'Multi-language support', 'CRM auto-population'],
    screenshots: ['https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop'],
    pricing: 'paid',
    rating: 4.9,
    reviews: 2341,
    installs: '100K+',
    featured: true,
    isNew: false,
    aiPowered: true,
    status: 'published',
    lastUpdated: '2024-01-20',
    supportUrl: '#',
    documentationUrl: '#',
    collection: 'agentic-ai'
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    slug: 'salesforce',
    logo: 'https://logo.clearbit.com/salesforce.com',
    category: 'CRM',
    developer: 'Dialpad',
    developerType: 'native',
    shortDescription: 'Seamlessly sync calls, contacts, and AI insights with Salesforce CRM.',
    description: 'The Salesforce integration brings the power of Dialpad directly into your CRM workflow. Automatically log calls, sync contacts, and leverage DialpadGPT insights to enrich your customer records. Features Dialpad Everywhere for click-to-call from any Salesforce record and real-time transcription overlay.',
    features: ['Automatic call logging', 'Contact sync', 'Click-to-call from Salesforce', 'AI-powered call summaries in CRM', 'Real-time transcription', 'Dialpad Everywhere widget', 'Custom field mapping', 'Activity timeline sync'],
    screenshots: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop'],
    pricing: 'free',
    rating: 4.8,
    reviews: 1876,
    installs: '75K+',
    featured: true,
    isNew: false,
    aiPowered: true,
    status: 'published',
    lastUpdated: '2024-01-18',
    supportUrl: '#',
    documentationUrl: '#',
    collection: 'customer-engagement'
  },
  {
    id: 'zendesk',
    name: 'Zendesk',
    slug: 'zendesk',
    logo: 'https://logo.clearbit.com/zendesk.com',
    category: 'Helpdesk',
    developer: 'Dialpad',
    developerType: 'native',
    shortDescription: 'Unified customer support with Dialpad voice and Zendesk ticketing.',
    description: 'Transform your support operations by combining Dialpad\'s AI-powered voice with Zendesk\'s ticketing system. Agents see customer context instantly, calls are logged as tickets automatically, and DialpadGPT provides real-time suggestions based on ticket history.',
    features: ['Auto-ticket creation from calls', 'Customer context popup', 'Click-to-call from tickets', 'Call recording in tickets', 'AI-suggested responses', 'Unified agent desktop', 'SLA tracking', 'Custom workflows'],
    screenshots: ['https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=450&fit=crop'],
    pricing: 'free',
    rating: 4.7,
    reviews: 923,
    installs: '45K+',
    featured: true,
    isNew: false,
    aiPowered: true,
    status: 'published',
    lastUpdated: '2024-01-15',
    supportUrl: '#',
    documentationUrl: '#'
  },
  {
    id: 'slack',
    name: 'Slack',
    slug: 'slack',
    logo: 'https://logo.clearbit.com/slack.com',
    category: 'Productivity',
    developer: 'Dialpad',
    developerType: 'native',
    shortDescription: 'Start calls from Slack and get AI summaries posted to channels.',
    description: 'Bridge your team communication with the Dialpad + Slack integration. Start voice or video calls directly from Slack channels, receive call notifications, and automatically post AI-generated call summaries to relevant channels. Perfect for remote and hybrid teams.',
    features: ['Click-to-call from Slack', 'Call notifications in channels', 'AI summary posting', 'Voicemail notifications', 'Presence sync', 'Slash commands', 'Channel-based routing', 'Meeting scheduling'],
    screenshots: ['https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=450&fit=crop'],
    pricing: 'free',
    rating: 4.8,
    reviews: 2156,
    installs: '120K+',
    featured: false,
    isNew: false,
    aiPowered: true,
    status: 'published',
    lastUpdated: '2024-01-17',
    supportUrl: '#',
    documentationUrl: '#',
    collection: 'productivity'
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    slug: 'google-calendar',
    logo: 'https://logo.clearbit.com/google.com',
    category: 'Productivity',
    developer: 'Dialpad',
    developerType: 'native',
    shortDescription: 'Sync meetings and join calls directly from your calendar.',
    description: 'Keep your schedule and communications in perfect sync. The Google Calendar integration automatically adds Dialpad meeting links to events, syncs your availability for presence status, and provides one-click join for scheduled calls.',
    features: ['Auto meeting link insertion', 'Calendar presence sync', 'One-click join', 'Meeting reminders', 'Recurring meeting support', 'Room booking integration', 'Mobile calendar sync', 'Time zone handling'],
    screenshots: ['https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=450&fit=crop'],
    pricing: 'free',
    rating: 4.6,
    reviews: 1432,
    installs: '90K+',
    featured: false,
    isNew: false,
    aiPowered: false,
    status: 'published',
    lastUpdated: '2024-01-12',
    supportUrl: '#',
    documentationUrl: '#',
    collection: 'productivity'
  },
  {
    id: 'intercom',
    name: 'Intercom',
    slug: 'intercom',
    logo: 'https://logo.clearbit.com/intercom.com',
    category: 'Helpdesk',
    developer: 'Partner',
    developerType: 'partner',
    shortDescription: 'Connect Dialpad voice with Intercom\'s customer messaging platform.',
    description: 'Enhance your customer engagement by combining Intercom\'s messaging platform with Dialpad\'s voice capabilities. Escalate chats to calls seamlessly, maintain conversation context, and use AI to prioritize high-value interactions.',
    features: ['Chat-to-call escalation', 'Unified conversation history', 'Customer context sync', 'AI prioritization', 'Callback scheduling', 'Team inbox integration', 'Custom bot triggers', 'Analytics dashboard'],
    screenshots: ['https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=450&fit=crop'],
    pricing: 'paid',
    rating: 4.5,
    reviews: 567,
    installs: '25K+',
    featured: false,
    isNew: false,
    aiPowered: true,
    status: 'published',
    lastUpdated: '2024-01-14',
    supportUrl: '#',
    documentationUrl: '#'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    slug: 'hubspot',
    logo: 'https://logo.clearbit.com/hubspot.com',
    category: 'CRM',
    developer: 'Dialpad',
    developerType: 'native',
    shortDescription: 'Power your inbound sales with HubSpot CRM and Dialpad AI.',
    description: 'Supercharge your HubSpot CRM with Dialpad\'s AI-powered communications. Automatically log calls to contact records, trigger workflows based on call outcomes, and use DialpadGPT insights to score leads and prioritize follow-ups.',
    features: ['Automatic call logging', 'Lead scoring integration', 'Workflow triggers', 'Contact sync', 'Deal stage updates', 'Click-to-call', 'Call outcome tracking', 'AI-powered insights'],
    screenshots: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop'],
    pricing: 'free',
    rating: 4.7,
    reviews: 1234,
    installs: '55K+',
    featured: true,
    isNew: false,
    aiPowered: true,
    status: 'published',
    lastUpdated: '2024-01-16',
    supportUrl: '#',
    documentationUrl: '#',
    collection: 'customer-engagement'
  },
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    slug: 'microsoft-teams',
    logo: 'https://logo.clearbit.com/microsoft.com',
    category: 'Productivity',
    developer: 'Dialpad',
    developerType: 'native',
    shortDescription: 'Bring Dialpad calling and AI features into Microsoft Teams.',
    description: 'Unify your Microsoft 365 environment with Dialpad\'s enterprise voice and AI capabilities. Make and receive calls within Teams, access DialpadGPT features, and maintain a single communication hub for your organization.',
    features: ['Native Teams calling', 'Presence sync', 'Contact integration', 'Meeting scheduling', 'AI transcription', 'Voicemail in Teams', 'Direct routing', 'Admin controls'],
    screenshots: ['https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=450&fit=crop'],
    pricing: 'free',
    rating: 4.6,
    reviews: 876,
    installs: '60K+',
    featured: false,
    isNew: false,
    aiPowered: true,
    status: 'published',
    lastUpdated: '2024-01-11',
    supportUrl: '#',
    documentationUrl: '#',
    collection: 'productivity'
  },
  {
    id: 'epic-ehr',
    name: 'Epic EHR',
    slug: 'epic-ehr',
    logo: 'https://logo.clearbit.com/epic.com',
    category: 'Healthcare',
    developer: 'Dialpad',
    developerType: 'native',
    shortDescription: 'HIPAA-compliant voice integration for Epic electronic health records.',
    description: 'Purpose-built for healthcare organizations using Epic. This HIPAA-compliant integration enables click-to-call from patient records, automatic call documentation, and AI-powered clinical conversation summaries that integrate directly with Epic workflows.',
    features: ['HIPAA-compliant calling', 'Patient record lookup', 'Click-to-call from Epic', 'Auto call documentation', 'Clinical AI summaries', 'Appointment reminders', 'Secure voicemail', 'Audit logging'],
    screenshots: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop'],
    pricing: 'paid',
    rating: 4.8,
    reviews: 234,
    installs: '12K+',
    featured: false,
    isNew: false,
    aiPowered: true,
    status: 'published',
    lastUpdated: '2024-01-13',
    supportUrl: '#',
    documentationUrl: '#',
    collection: 'healthcare'
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    slug: 'google-workspace',
    logo: 'https://logo.clearbit.com/google.com',
    category: 'Productivity',
    developer: 'Dialpad',
    developerType: 'native',
    shortDescription: 'Complete Google Workspace integration with Gmail, Drive, and Meet.',
    description: 'Unify your communications with full Google Workspace integration. Click-to-call from Gmail, sync contacts from Google Contacts, store recordings in Drive, and seamlessly transition between Dialpad and Google Meet.',
    features: ['Gmail click-to-call', 'Google Contacts sync', 'Drive recording storage', 'Google Meet integration', 'Chrome extension', 'SSO with Google'],
    screenshots: ['https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=450&fit=crop'],
    pricing: 'free',
    rating: 4.8,
    reviews: 1567,
    installs: '150K+',
    featured: false,
    isNew: false,
    aiPowered: false,
    status: 'published',
    lastUpdated: '2024-01-16',
    supportUrl: '#',
    documentationUrl: '#',
    collection: 'productivity'
  },
  {
    id: 'dynamics-365',
    name: 'Microsoft Dynamics 365',
    slug: 'dynamics-365',
    logo: 'https://logo.clearbit.com/microsoft.com',
    category: 'CRM',
    developer: 'Partner',
    developerType: 'partner',
    shortDescription: 'Enterprise CRM integration with Dynamics 365 and Dialpad.',
    description: 'Connect Dialpad with Microsoft Dynamics 365 for seamless customer engagement. Log calls, access customer data, and leverage AI insights directly within your Dynamics environment.',
    features: ['Call logging to Dynamics', 'Customer data sync', 'AI-powered insights', 'Click-to-call', 'Activity tracking', 'Custom workflows'],
    screenshots: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop'],
    pricing: 'free',
    rating: 4.4,
    reviews: 312,
    installs: '20K+',
    featured: false,
    isNew: false,
    aiPowered: true,
    status: 'published',
    lastUpdated: '2024-01-09',
    supportUrl: '#',
    documentationUrl: '#',
    collection: 'customer-engagement'
  },
  {
    id: 'athenahealth',
    name: 'AthenaHealth',
    slug: 'athenahealth',
    logo: 'https://logo.clearbit.com/athenahealth.com',
    category: 'Healthcare',
    developer: 'Dialpad',
    developerType: 'native',
    shortDescription: 'Streamline patient communications with AthenaHealth EHR integration.',
    description: 'HIPAA-compliant integration connecting Dialpad with AthenaHealth electronic health records. Enable seamless patient outreach, appointment scheduling calls, and automatic documentation of all voice interactions.',
    features: ['HIPAA-compliant calling', 'Patient record lookup', 'Appointment scheduling', 'Call documentation', 'Secure voicemail', 'Care coordination'],
    screenshots: ['https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=450&fit=crop'],
    pricing: 'paid',
    rating: 4.6,
    reviews: 189,
    installs: '8K+',
    featured: false,
    isNew: true,
    aiPowered: true,
    status: 'published',
    lastUpdated: '2024-01-19',
    supportUrl: '#',
    documentationUrl: '#',
    collection: 'healthcare'
  },
  {
    id: 'ai-csat',
    name: 'AI CSAT Analysis',
    slug: 'ai-csat',
    logo: 'https://logo.clearbit.com/dialpad.com',
    category: 'Agentic AI',
    developer: 'Dialpad',
    developerType: 'native',
    shortDescription: 'Predict customer satisfaction scores using AI-powered conversation analysis.',
    description: 'Leverage DialpadGPT to automatically predict CSAT scores from every conversation. Identify at-risk customers in real-time, surface coaching opportunities, and track satisfaction trends across your entire organization.',
    features: ['Predictive CSAT scoring', 'Real-time alerts', 'Trend analysis', 'Agent performance insights', 'Custom scoring models', 'API access'],
    screenshots: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop'],
    pricing: 'paid',
    rating: 4.8,
    reviews: 342,
    installs: '25K+',
    featured: true,
    isNew: true,
    aiPowered: true,
    status: 'published',
    lastUpdated: '2024-01-21',
    supportUrl: '#',
    documentationUrl: '#',
    collection: 'agentic-ai'
  }
]

export function getAppById(id: string): App | undefined {
  return apps.find(app => app.id === id)
}

export function getAppsByCategory(category: string): App[] {
  return apps.filter(app => app.category === category)
}

export function getFeaturedApps(): App[] {
  return apps.filter(app => app.featured && app.status === 'published')
}

export function getNewApps(): App[] {
  return apps.filter(app => app.isNew && app.status === 'published')
}

export function getPublishedApps(): App[] {
  return apps.filter(app => app.status === 'published')
}

export function getAIApps(): App[] {
  return apps.filter(app => (app.aiPowered || app.category === 'Agentic AI') && app.status === 'published')
}
