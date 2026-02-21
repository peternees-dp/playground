export const INITIAL_MOCK_DATA = [
  {
    id: 'dialpadgpt', name: 'DialpadGPT', slug: 'dialpadgpt',
    logo: 'https://logo.clearbit.com/dialpad.com', category: 'Agentic AI',
    developer: 'Dialpad', developerType: 'native',
    shortDescription: 'AI-powered real-time coaching, automated summaries, and intelligent agent assist.',
    longDescription: 'DialpadGPT is the AI engine powering next-generation customer conversations. Get real-time coaching suggestions, automated post-call summaries, sentiment analysis, and intelligent knowledge base recommendations—all without lifting a finger. Built on proprietary AI trained on billions of minutes of business conversations.',
    features: ['Real-time AI coaching & suggestions', 'Automated call summaries & action items', 'Live sentiment analysis', 'Intelligent knowledge base lookup', 'Compliance monitoring & alerts', 'Custom AI playbooks', 'Multi-language support', 'CRM auto-population'],
    screenshots: ['https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop'],
    pricing: 'paid', rating: 4.9, reviews: 2341, installs: '100K+',
    featured: true, isNew: false, aiPowered: true, status: 'published',
    lastUpdated: '2024-01-20', supportUrl: '#', documentationUrl: '#',
    collection: 'agentic-ai'
  },
  {
    id: 'salesforce', name: 'Salesforce', slug: 'salesforce',
    logo: 'https://logo.clearbit.com/salesforce.com', category: 'CRM',
    developer: 'Dialpad', developerType: 'native',
    shortDescription: 'Sync calls, transcripts, and AI insights directly into Salesforce records.',
    longDescription: 'Transform your Salesforce workflow with Dialpad native integration. Every call, meeting, and message is automatically logged with AI-powered transcripts and sentiment analysis. Access live transcription and AI coaching directly within Salesforce using Dialpad Everywhere—the embedded widget that brings real-time AI assistance into your CRM.',
    features: ['Automatic call logging with transcripts', 'Real-time AI sentiment analysis', 'Click-to-call from Salesforce', 'Bi-directional contact sync', 'Custom disposition codes', 'Screen pop for incoming calls', 'Dialpad Everywhere widget', 'AI-powered call summaries'],
    screenshots: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop'],
    pricing: 'free', rating: 4.8, reviews: 1247, installs: '50K+',
    featured: true, isNew: false, aiPowered: true, status: 'published',
    lastUpdated: '2024-01-15', supportUrl: '#', documentationUrl: '#',
    collection: 'customer-engagement'
  },
  {
    id: 'slack', name: 'Slack', slug: 'slack',
    logo: 'https://logo.clearbit.com/slack.com', category: 'Productivity',
    developer: 'Dialpad', developerType: 'native',
    shortDescription: 'Bring Dialpad calling and messaging into your Slack workspace.',
    longDescription: 'Seamlessly integrate Dialpad with Slack to streamline your team communication. Start calls directly from Slack, receive call notifications, and share transcripts with your team. Use the Dialpad widget within Slack for quick access to your contacts.',
    features: ['Click-to-call from Slack', 'Real-time call notifications', 'AI call summary sharing', 'Voicemail alerts in channels', 'Presence synchronization', 'Slash commands for quick actions'],
    screenshots: ['https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop'],
    pricing: 'free', rating: 4.7, reviews: 892, installs: '100K+',
    featured: true, isNew: false, aiPowered: true, status: 'published',
    lastUpdated: '2024-01-10', supportUrl: '#', documentationUrl: '#'
  },
  {
    id: 'zendesk', name: 'Zendesk', slug: 'zendesk',
    logo: 'https://logo.clearbit.com/zendesk.com', category: 'Helpdesk',
    developer: 'Dialpad', developerType: 'native',
    shortDescription: 'Elevate customer support with AI-powered voice in Zendesk.',
    longDescription: 'Combine Dialpad AI-powered voice capabilities with Zendesk powerful ticketing system. Automatically create tickets from calls, access customer history during conversations, and leverage AI insights for better support. Get real-time AI suggestions during support calls.',
    features: ['Automatic ticket creation', 'Screen pop with customer info', 'Call recording in tickets', 'AI-powered suggestions', 'CSAT survey integration', 'Unified reporting dashboard'],
    screenshots: ['https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=450&fit=crop'],
    pricing: 'free', rating: 4.6, reviews: 634, installs: '25K+',
    featured: false, isNew: false, aiPowered: true, status: 'published',
    lastUpdated: '2024-01-08', supportUrl: '#', documentationUrl: '#'
  },
  {
    id: 'google-calendar', name: 'Google Calendar', slug: 'google-calendar',
    logo: 'https://logo.clearbit.com/google.com', category: 'Productivity',
    developer: 'Dialpad', developerType: 'native',
    shortDescription: 'Sync meetings and join calls directly from Google Calendar.',
    longDescription: 'Keep your schedule in sync with Dialpad and Google Calendar integration. Automatically add Dialpad meeting links to calendar events and join calls with a single click. Get meeting reminders with dial-in info.',
    features: ['Automatic meeting link insertion', 'One-click meeting join', 'Calendar-based presence', 'Meeting reminders', 'Recurring meeting support', 'Multi-calendar sync'],
    screenshots: ['https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=450&fit=crop'],
    pricing: 'free', rating: 4.9, reviews: 2103, installs: '200K+',
    featured: false, isNew: false, aiPowered: false, status: 'published',
    lastUpdated: '2024-01-12', supportUrl: '#', documentationUrl: '#'
  },
  {
    id: 'intercom', name: 'Intercom', slug: 'intercom',
    logo: 'https://logo.clearbit.com/intercom.com', category: 'Helpdesk',
    developer: 'Dialpad', developerType: 'native',
    shortDescription: 'Connect voice conversations with Intercom customer data.',
    longDescription: 'Bridge the gap between chat and voice support with Dialpad and Intercom. Access full customer conversation history during calls and log voice interactions alongside chat transcripts.',
    features: ['Unified conversation history', 'Click-to-call from Intercom', 'Voice transcript logging', 'Customer context popup', 'AI-powered insights', 'Cross-channel reporting'],
    screenshots: ['https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=450&fit=crop'],
    pricing: 'free', rating: 4.5, reviews: 412, installs: '15K+',
    featured: false, isNew: false, aiPowered: true, status: 'published',
    lastUpdated: '2024-01-05', supportUrl: '#', documentationUrl: '#'
  },
  {
    id: 'hubspot', name: 'HubSpot', slug: 'hubspot',
    logo: 'https://logo.clearbit.com/hubspot.com', category: 'CRM',
    developer: 'Dialpad', developerType: 'native',
    shortDescription: 'Power your sales pipeline with AI-enhanced calling in HubSpot.',
    longDescription: 'Supercharge your HubSpot CRM with Dialpad AI-powered calling. Log every interaction automatically, get real-time coaching during sales calls, and track deal progress with voice analytics.',
    features: ['Automatic activity logging', 'AI sales coaching', 'Deal intelligence insights', 'Click-to-call from HubSpot', 'Contact sync', 'Pipeline analytics'],
    screenshots: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop'],
    pricing: 'free', rating: 4.7, reviews: 756, installs: '40K+',
    featured: true, isNew: false, aiPowered: true, status: 'published',
    lastUpdated: '2024-01-14', supportUrl: '#', documentationUrl: '#'
  },
  {
    id: 'microsoft-teams', name: 'Microsoft Teams', slug: 'microsoft-teams',
    logo: 'https://logo.clearbit.com/microsoft.com', category: 'Productivity',
    developer: 'Dialpad', developerType: 'native',
    shortDescription: 'Unified communications with Dialpad inside Microsoft Teams.',
    longDescription: 'Bring enterprise-grade calling to Microsoft Teams with Dialpad integration. Make and receive calls, access AI features, all within Teams.',
    features: ['Native Teams calling', 'AI transcription in Teams', 'Presence sync', 'Contact integration', 'Meeting scheduling', 'Call analytics'],
    screenshots: ['https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=450&fit=crop'],
    pricing: 'free', rating: 4.6, reviews: 1089, installs: '75K+',
    featured: false, isNew: true, aiPowered: true, status: 'published',
    lastUpdated: '2024-01-18', supportUrl: '#', documentationUrl: '#'
  },
  {
    id: 'google-workspace', name: 'Google Workspace', slug: 'google-workspace',
    logo: 'https://logo.clearbit.com/google.com', category: 'Productivity',
    developer: 'Dialpad', developerType: 'native',
    shortDescription: 'Complete Google Workspace integration with Gmail, Drive, and Meet.',
    longDescription: 'Unify your communications with full Google Workspace integration. Click-to-call from Gmail, sync contacts from Google Contacts, store recordings in Drive, and seamlessly transition between Dialpad and Google Meet.',
    features: ['Gmail click-to-call', 'Google Contacts sync', 'Drive recording storage', 'Google Meet integration', 'Chrome extension', 'SSO with Google'],
    screenshots: ['https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=450&fit=crop'],
    pricing: 'free', rating: 4.8, reviews: 1567, installs: '150K+',
    featured: false, isNew: false, aiPowered: false, status: 'published',
    lastUpdated: '2024-01-16', supportUrl: '#', documentationUrl: '#',
    collection: 'productivity'
  },
  {
    id: 'epic', name: 'Epic EHR', slug: 'epic',
    logo: 'https://logo.clearbit.com/epic.com', category: 'Healthcare',
    developer: 'Dialpad', developerType: 'native',
    shortDescription: 'HIPAA-compliant voice integration for Epic electronic health records.',
    longDescription: 'Secure, HIPAA-compliant integration between Dialpad and Epic EHR. Enable click-to-call from patient records with automatic documentation.',
    features: ['HIPAA-compliant calling', 'Patient record integration', 'Automatic call documentation', 'Secure messaging', 'Appointment reminders', 'Care team coordination'],
    screenshots: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop'],
    pricing: 'paid', rating: 4.7, reviews: 234, installs: '10K+',
    featured: false, isNew: false, aiPowered: true, status: 'published',
    lastUpdated: '2024-01-11', supportUrl: '#', documentationUrl: '#'
  },
  {
    id: 'dynamics-365', name: 'Microsoft Dynamics 365', slug: 'dynamics-365',
    logo: 'https://logo.clearbit.com/microsoft.com', category: 'CRM',
    developer: 'Partner', developerType: 'partner',
    shortDescription: 'Enterprise CRM integration with Dynamics 365 and Dialpad.',
    longDescription: 'Connect Dialpad with Microsoft Dynamics 365 for seamless customer engagement. Log calls, access customer data, and leverage AI insights.',
    features: ['Call logging to Dynamics', 'Customer data sync', 'AI-powered insights', 'Click-to-call', 'Activity tracking', 'Custom workflows'],
    screenshots: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop'],
    pricing: 'free', rating: 4.4, reviews: 312, installs: '20K+',
    featured: false, isNew: false, aiPowered: true, status: 'published',
    lastUpdated: '2024-01-09', supportUrl: '#', documentationUrl: '#',
    collection: 'customer-engagement'
  },
  {
    id: 'athenahealth', name: 'AthenaHealth', slug: 'athenahealth',
    logo: 'https://logo.clearbit.com/athenahealth.com', category: 'Healthcare',
    developer: 'Dialpad', developerType: 'native',
    shortDescription: 'Streamline patient communications with AthenaHealth EHR integration.',
    longDescription: 'HIPAA-compliant integration connecting Dialpad with AthenaHealth electronic health records. Enable seamless patient outreach, appointment scheduling calls, and automatic documentation of all voice interactions.',
    features: ['HIPAA-compliant calling', 'Patient record lookup', 'Appointment scheduling', 'Call documentation', 'Secure voicemail', 'Care coordination'],
    screenshots: ['https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=450&fit=crop'],
    pricing: 'paid', rating: 4.6, reviews: 189, installs: '8K+',
    featured: false, isNew: true, aiPowered: true, status: 'published',
    lastUpdated: '2024-01-19', supportUrl: '#', documentationUrl: '#',
    collection: 'healthcare'
  },
  {
    id: 'ai-csat', name: 'AI CSAT Analysis', slug: 'ai-csat',
    logo: 'https://logo.clearbit.com/dialpad.com', category: 'Agentic AI',
    developer: 'Dialpad', developerType: 'native',
    shortDescription: 'Predict customer satisfaction scores using AI-powered conversation analysis.',
    longDescription: 'Leverage DialpadGPT to automatically predict CSAT scores from every conversation. Identify at-risk customers in real-time, surface coaching opportunities, and track satisfaction trends across your entire organization.',
    features: ['Predictive CSAT scoring', 'Real-time alerts', 'Trend analysis', 'Agent performance insights', 'Custom scoring models', 'API access'],
    screenshots: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop'],
    pricing: 'paid', rating: 4.8, reviews: 342, installs: '25K+',
    featured: true, isNew: true, aiPowered: true, status: 'published',
    lastUpdated: '2024-01-21', supportUrl: '#', documentationUrl: '#',
    collection: 'agentic-ai'
  }
]

export const CATEGORIES = [
  { id: 'all', name: 'All Integrations', icon: 'Grid3X3' },
  { id: 'Agentic AI', name: 'Agentic AI', icon: 'Sparkles' },
  { id: 'CRM', name: 'CRM', icon: 'Users' },
  { id: 'Helpdesk', name: 'Helpdesk', icon: 'Headphones' },
  { id: 'Productivity', name: 'Productivity', icon: 'Zap' },
  { id: 'Healthcare', name: 'Healthcare', icon: 'Heart' },
]

export const COLLECTIONS = [
  { id: 'agentic-ai', name: 'Agentic AI', description: 'Apps powered by DialpadGPT and AI-driven outcomes' },
  { id: 'customer-engagement', name: 'Customer Engagement', description: 'CRM giants like Salesforce, HubSpot, and Dynamics 365' },
  { id: 'productivity', name: 'Productivity & Collaboration', description: 'Slack, Google Workspace, and Microsoft Teams' },
  { id: 'healthcare', name: 'Healthcare & EHR', description: 'Epic, AthenaHealth, and HIPAA-compliant integrations' },
]

export const STORAGE_KEY = 'dialpad_marketplace_data'

export const loadFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : INITIAL_MOCK_DATA
  } catch {
    return INITIAL_MOCK_DATA
  }
}

export const saveToStorage = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.error('Failed to save:', e)
  }
}
