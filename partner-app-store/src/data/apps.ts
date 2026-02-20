export interface App {
  id: string
  name: string
  description: string
  shortDescription: string
  icon: string
  category: string
  developer: string
  rating: number
  reviews: number
  installs: string
  price: string
  featured: boolean
  new: boolean
  tags: string[]
  screenshots: string[]
}

export const categories = [
  { id: 'productivity', name: 'Productivity', icon: 'Briefcase', count: 45 },
  { id: 'analytics', name: 'Analytics', icon: 'BarChart3', count: 32 },
  { id: 'communication', name: 'Communication', icon: 'MessageSquare', count: 28 },
  { id: 'marketing', name: 'Marketing', icon: 'Megaphone', count: 24 },
  { id: 'finance', name: 'Finance', icon: 'DollarSign', count: 19 },
  { id: 'developer-tools', name: 'Developer Tools', icon: 'Code', count: 37 },
  { id: 'security', name: 'Security', icon: 'Shield', count: 15 },
  { id: 'design', name: 'Design', icon: 'Palette', count: 22 },
]

export const apps: App[] = [
  {
    id: 'workflow-pro',
    name: 'Workflow Pro',
    description: 'Streamline your business processes with our powerful workflow automation tool. Create custom workflows, automate repetitive tasks, and boost team productivity. Features include drag-and-drop workflow builder, conditional logic, integrations with 100+ apps, real-time analytics, and team collaboration tools.',
    shortDescription: 'Automate your workflows and boost productivity',
    icon: '🔄',
    category: 'productivity',
    developer: 'FlowTech Inc.',
    rating: 4.8,
    reviews: 1250,
    installs: '50K+',
    price: 'Free',
    featured: true,
    new: false,
    tags: ['automation', 'workflow', 'productivity'],
    screenshots: ['/screenshots/workflow-1.png', '/screenshots/workflow-2.png'],
  },
  {
    id: 'analytics-hub',
    name: 'Analytics Hub',
    description: 'Get deep insights into your business with comprehensive analytics dashboards. Track KPIs, visualize data trends, and make data-driven decisions. Includes customizable dashboards, real-time data sync, export capabilities, and AI-powered insights.',
    shortDescription: 'Comprehensive analytics and business intelligence',
    icon: '📊',
    category: 'analytics',
    developer: 'DataViz Solutions',
    rating: 4.7,
    reviews: 890,
    installs: '30K+',
    price: '$9.99/mo',
    featured: true,
    new: false,
    tags: ['analytics', 'dashboard', 'reporting'],
    screenshots: ['/screenshots/analytics-1.png', '/screenshots/analytics-2.png'],
  },
  {
    id: 'team-chat',
    name: 'Team Chat',
    description: 'Real-time messaging and collaboration for modern teams. Features channels, direct messages, file sharing, video calls, and integrations with your favorite tools. Keep your team connected and productive.',
    shortDescription: 'Real-time team messaging and collaboration',
    icon: '💬',
    category: 'communication',
    developer: 'ChatWorks',
    rating: 4.9,
    reviews: 2100,
    installs: '100K+',
    price: 'Free',
    featured: true,
    new: false,
    tags: ['chat', 'collaboration', 'messaging'],
    screenshots: ['/screenshots/chat-1.png', '/screenshots/chat-2.png'],
  },
  {
    id: 'email-campaigns',
    name: 'Email Campaigns',
    description: 'Create beautiful email campaigns that convert. Drag-and-drop editor, A/B testing, automation sequences, detailed analytics, and deliverability optimization. Perfect for marketing teams of all sizes.',
    shortDescription: 'Professional email marketing made easy',
    icon: '📧',
    category: 'marketing',
    developer: 'MailMaster',
    rating: 4.6,
    reviews: 756,
    installs: '25K+',
    price: '$19.99/mo',
    featured: false,
    new: true,
    tags: ['email', 'marketing', 'automation'],
    screenshots: ['/screenshots/email-1.png', '/screenshots/email-2.png'],
  },
  {
    id: 'invoice-ninja',
    name: 'Invoice Ninja',
    description: 'Professional invoicing and payment processing. Create invoices, track expenses, accept payments, and manage your finances all in one place. Supports multiple currencies and tax configurations.',
    shortDescription: 'Invoicing and payment processing simplified',
    icon: '💰',
    category: 'finance',
    developer: 'FinanceFlow',
    rating: 4.5,
    reviews: 432,
    installs: '15K+',
    price: 'Free',
    featured: false,
    new: true,
    tags: ['invoicing', 'payments', 'finance'],
    screenshots: ['/screenshots/invoice-1.png', '/screenshots/invoice-2.png'],
  },
  {
    id: 'code-review',
    name: 'Code Review',
    description: 'Streamline your code review process with automated checks, inline comments, and approval workflows. Integrates with GitHub, GitLab, and Bitbucket. Improve code quality and ship faster.',
    shortDescription: 'Automated code review and quality checks',
    icon: '👨‍💻',
    category: 'developer-tools',
    developer: 'DevTools Co.',
    rating: 4.8,
    reviews: 1890,
    installs: '40K+',
    price: '$14.99/mo',
    featured: true,
    new: false,
    tags: ['code-review', 'developer', 'git'],
    screenshots: ['/screenshots/code-1.png', '/screenshots/code-2.png'],
  },
  {
    id: 'secure-vault',
    name: 'Secure Vault',
    description: 'Enterprise-grade password management and secrets storage. Zero-knowledge encryption, team sharing, audit logs, and SSO integration. Keep your credentials safe and accessible.',
    shortDescription: 'Enterprise password and secrets management',
    icon: '🔐',
    category: 'security',
    developer: 'SecureFirst',
    rating: 4.9,
    reviews: 567,
    installs: '20K+',
    price: '$7.99/mo',
    featured: false,
    new: false,
    tags: ['security', 'passwords', 'encryption'],
    screenshots: ['/screenshots/vault-1.png', '/screenshots/vault-2.png'],
  },
  {
    id: 'design-system',
    name: 'Design System',
    description: 'Build and maintain consistent design systems across your organization. Component library, design tokens, documentation, and Figma integration. Create beautiful, consistent interfaces.',
    shortDescription: 'Build consistent design systems at scale',
    icon: '🎨',
    category: 'design',
    developer: 'DesignOps',
    rating: 4.7,
    reviews: 345,
    installs: '12K+',
    price: '$24.99/mo',
    featured: false,
    new: true,
    tags: ['design', 'ui', 'components'],
    screenshots: ['/screenshots/design-1.png', '/screenshots/design-2.png'],
  },
]

export function getAppById(id: string): App | undefined {
  return apps.find(app => app.id === id)
}

export function getAppsByCategory(category: string): App[] {
  return apps.filter(app => app.category === category)
}

export function getFeaturedApps(): App[] {
  return apps.filter(app => app.featured)
}

export function getNewApps(): App[] {
  return apps.filter(app => app.new)
}
