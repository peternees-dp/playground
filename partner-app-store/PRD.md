# Product Requirements Document (PRD)
## Dialpad Partner App Store

**Version:** 1.0  
**Last Updated:** February 20, 2026  
**Status:** MVP Complete  
**Live URL:** https://moonlit-sprinkles-5e2e79.netlify.app

---

## 1. Executive Summary

The Dialpad Partner App Store is a modern integration marketplace that enables Dialpad customers to discover, explore, and install third-party and native integrations. The platform showcases Dialpad's ecosystem of partner applications with a strong emphasis on AI-powered integrations through DialpadGPT.

### Key Objectives
- Provide a centralized hub for discovering Dialpad integrations
- Highlight Agentic AI capabilities powered by DialpadGPT
- Enable partners to showcase their integrations
- Streamline the app discovery and installation process
- Support administrative management of marketplace listings

---

## 2. Technical Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 14.1.0 (App Router) |
| **Language** | TypeScript 5.3.3 |
| **UI Library** | React 18.2.0 |
| **Styling** | Tailwind CSS 3.4.1 |
| **Icons** | Lucide React 0.312.0 |
| **Deployment** | Netlify (Static Export) |
| **Build Tool** | Next.js Built-in |

### Architecture
- **Static Site Generation (SSG)** for optimal performance
- **Client Components** for interactive features (search, filters, tabs)
- **Server Components** for static content rendering
- **Responsive Design** supporting mobile, tablet, and desktop

---

## 3. Features & Functionality

### 3.1 Homepage (`/`)

#### Hero Section
- **Gradient mesh background** with animated blur effects
- **Search bar** with smart suggestions (DialpadGPT, CRM integrations, Helpdesk, Healthcare)
- **Tagline:** "Integration Marketplace - Connect Dialpad with your favorite tools"

#### Stats Section
| Metric | Value |
|--------|-------|
| Partner Apps | 500+ |
| Active Users | 50K+ |
| Partners | 200+ |
| Uptime | 99.9% |

#### Featured Apps Section
- Displays 4 hand-picked featured apps
- Card-based layout with hover effects
- Shows rating, reviews, pricing, and AI badges

#### Agentic AI Spotlight
- Purple gradient banner promoting DialpadGPT-powered integrations
- Grid-pattern overlay for visual depth
- CTA to explore AI apps

#### Category Navigation
- **Agentic AI** - AI-powered integrations
- **CRM** - Customer relationship management
- **Helpdesk** - Support and ticketing
- **Productivity** - Workflow and collaboration
- **Healthcare** - HIPAA-compliant EHR integrations

#### New Releases Section
- Showcases recently added integrations
- Highlights apps with "New" badge

#### Partner Benefits Section
- Massive Reach (50K+ customers)
- Easy Integration (APIs & SDKs)
- Marketing Support
- Trusted Platform (99.9% uptime)

---

### 3.2 Apps Listing (`/apps`)

#### Search & Filtering
- **Text search** across app names and descriptions
- **Category filter** dropdown
- **View toggle** (Grid/List)

#### App Cards
- Logo with fallback to initial letter
- App name and category
- Developer type badge (Native/Partner)
- AI-powered badge for relevant apps
- Star rating with review count
- Pricing indicator (Free/Paid)
- Hover effects with elevation

---

### 3.3 App Detail Page (`/apps/[id]`)

#### Header Section
- App logo (64x64px)
- App name with badges:
  - **DialpadGPT** (purple) for Agentic AI apps
  - **AI-Powered** for AI-enabled apps
  - **New** for recent releases
  - **Native Integration** for first-party apps
- Developer name and category
- Rating with review count
- Install count
- Pricing badge

#### Action Buttons
- **Install Now** - Primary CTA
- **Setup Guide** - Documentation link

#### Dialpad Everywhere Banner
- Conditional display for apps with Dialpad Everywhere support
- Highlights live transcription and AI coaching features

#### Tabbed Content
| Tab | Content |
|-----|---------|
| Overview | Full app description |
| Features | Feature list with checkmarks |
| Screenshots | App screenshots gallery |

#### Sidebar
- **Information Card:** Category, Developer, Type, Last Updated
- **Security & Compliance:** SOC 2, GDPR, SSO, Encryption
- **Support:** Documentation and Help links

---

### 3.4 Admin Dashboard (`/admin`)

#### Stats Overview
| Card | Metric |
|------|--------|
| Total Apps | Count of all apps |
| Published | Active listings |
| AI-Powered | DialpadGPT integrations |
| Total Installs | Aggregate install count |

#### Filtering & Search
- Text search by app name or developer
- Category dropdown filter
- Status filter (Published/Draft/Archived)
- View toggle (Table/Grid)

#### Table View
- Checkbox selection for bulk actions
- App info with logo, name, developer
- Category badge
- Star rating
- Install count
- Status badge (color-coded)
- Action buttons: View, Edit, Delete

#### Grid View
- Card-based layout
- Compact app information
- Quick action buttons

---

## 4. Data Model

### App Interface
```typescript
interface App {
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
```

### Categories
| ID | Name | Icon |
|----|------|------|
| Agentic AI | Agentic AI | Sparkles |
| CRM | CRM | Users |
| Helpdesk | Helpdesk | Headphones |
| Productivity | Productivity | Zap |
| Healthcare | Healthcare | Heart |

### Collections
| ID | Name | Description |
|----|------|-------------|
| agentic-ai | Agentic AI | Apps powered by DialpadGPT |
| customer-engagement | Customer Engagement | CRM integrations |
| productivity | Productivity & Collaboration | Workflow tools |
| healthcare | Healthcare & EHR | HIPAA-compliant apps |

---

## 5. Current App Inventory

| App | Category | Developer | Type | AI |
|-----|----------|-----------|------|-----|
| DialpadGPT | Agentic AI | Dialpad | Native | ✓ |
| Salesforce | CRM | Dialpad | Native | ✓ |
| Zendesk | Helpdesk | Dialpad | Native | ✓ |
| Slack | Productivity | Dialpad | Native | ✓ |
| Google Calendar | Productivity | Dialpad | Native | - |
| Intercom | Helpdesk | Partner | Partner | ✓ |
| HubSpot | CRM | Dialpad | Native | ✓ |
| Microsoft Teams | Productivity | Dialpad | Native | ✓ |
| Epic EHR | Healthcare | Dialpad | Native | ✓ |
| Google Workspace | Productivity | Dialpad | Native | - |
| Microsoft Dynamics 365 | CRM | Partner | Partner | ✓ |
| AthenaHealth | Healthcare | Dialpad | Native | ✓ |
| AI CSAT Analysis | Agentic AI | Dialpad | Native | ✓ |

---

## 6. Design System

### Color Palette
| Usage | Color | Hex |
|-------|-------|-----|
| Primary | Indigo | #4F46E5 |
| Agentic AI | Purple | #7C3AED |
| Success | Green | #10B981 |
| Warning | Yellow | #F59E0B |
| Danger | Red | #EF4444 |
| Background | Gray-50 | #F9FAFB |

### Typography
- **Headings:** Font-bold, tracking-tight
- **Body:** Text-gray-600
- **Labels:** Text-sm, font-medium

### Components
- **Cards:** Rounded-2xl, border, shadow-sm, hover:shadow-xl
- **Buttons:** Rounded-xl, font-semibold, transition-colors
- **Badges:** Rounded-full, px-2.5, py-1, text-xs
- **Inputs:** Rounded-xl, border, focus:ring-2

### Animations
- Hover lift: `hover:-translate-y-1`
- Transitions: `transition-all duration-300`
- Gradient pulse: `animate-pulse` on hero blobs

---

## 7. File Structure

```
partner-app-store/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout with Navbar/Footer
│   │   ├── globals.css           # Global styles
│   │   ├── admin/
│   │   │   └── page.tsx          # Admin dashboard
│   │   ├── apps/
│   │   │   ├── page.tsx          # Apps listing
│   │   │   └── [id]/
│   │   │       └── page.tsx      # App detail (SSG)
│   │   ├── categories/
│   │   │   └── page.tsx          # Categories page
│   │   ├── partners/
│   │   │   └── page.tsx          # Partner info page
│   │   └── submit/
│   │       └── page.tsx          # App submission page
│   ├── components/
│   │   ├── AppCard.tsx           # App card + FeaturedAppCard
│   │   ├── AppDetailClient.tsx   # App detail client component
│   │   ├── CategoryCard.tsx      # Category card
│   │   ├── Footer.tsx            # Site footer
│   │   └── Navbar.tsx            # Navigation bar
│   └── data/
│       └── apps.ts               # App data + types + helpers
├── public/                        # Static assets
├── next.config.js                 # Next.js config (static export)
├── tailwind.config.ts             # Tailwind configuration
├── netlify.toml                   # Netlify deployment config
└── package.json                   # Dependencies
```

---

## 8. Deployment

### Platform
- **Host:** Netlify
- **Build:** Static export (`output: 'export'`)
- **URL:** https://moonlit-sprinkles-5e2e79.netlify.app

### Build Configuration
```toml
[build]
  command = "npm run build"
  publish = "out"
```

### CI/CD
- GitHub repository: `peternees-dp/playground`
- Manual deployment via Netlify CLI
- Static assets served via Netlify CDN

---

## 9. Future Enhancements

### Phase 2 - Backend Integration
- [ ] API integration for real app data
- [ ] User authentication (SSO)
- [ ] App installation flow
- [ ] Usage analytics

### Phase 3 - Admin Features
- [ ] CRUD operations for apps
- [ ] App submission workflow
- [ ] Review/approval process
- [ ] Partner portal

### Phase 4 - Enhanced UX
- [ ] Dark mode support
- [ ] Advanced search (filters, sorting)
- [ ] App comparison feature
- [ ] User reviews and ratings
- [ ] Personalized recommendations

### Phase 5 - Dialtone Integration
- [ ] Migrate to Dialtone design system components
- [ ] Use Dialtone tokens for colors/spacing
- [ ] Integrate Dialtone icons
- [ ] Apply Dialtone patterns

---

## 10. Success Metrics

| Metric | Target |
|--------|--------|
| Page Load Time | < 2s |
| Lighthouse Score | > 90 |
| Mobile Responsiveness | 100% |
| Browser Support | Chrome, Firefox, Safari, Edge |
| Accessibility | WCAG 2.1 AA |

---

## 11. Stakeholders

| Role | Responsibility |
|------|----------------|
| Product Owner | Feature prioritization, roadmap |
| Engineering | Development, deployment |
| Design | UI/UX, Dialtone alignment |
| Partners | App submissions, integrations |
| Marketing | Promotion, featured apps |

---

## 12. Appendix

### A. Logo Sources
App logos are sourced from Dialpad's official marketplace CDN:
- Base URL: `https://images.ctfassets.net/r6vlh4dr9f5y/`
- Fallback: UI Avatars API for missing logos

### B. Related Documentation
- [Dialpad App Marketplace](https://www.dialpad.com/app-marketplace/)
- [Dialtone Design System](https://dialpad.design/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

*Document generated from codebase review on February 20, 2026*
