# Dialpad Integration Marketplace

A modern, high-converting Integration Marketplace for UCaaS/CCaaS platforms built with React, Vite, and TailwindCSS.

## Features

### User-Facing
- **Dynamic Hero Section** - Search bar with smart suggestions and gradient mesh background
- **Advanced Filtering** - Sidebar categories, pricing filters, developer type filters
- **App Cards** - Modern design with rounded corners, shadows, hover effects, and badges (Featured, New, AI-Powered)
- **App Detail Pages** - Breadcrumbs, Install/Setup Guide CTAs, tabs for Overview/Features/Screenshots
- **Grid/List View Toggle** - Switch between card grid and list views
- **Dark/Light Mode** - Full theme support

### Administrative
- **Admin Dashboard** - Overview with stats cards (Total, Published, Draft)
- **Listing Management Table** - Searchable, sortable, with status toggles
- **Add/Edit Integration Form** - Full form with dynamic features list, screenshots, settings
- **Status Management** - Publish/Unpublish, Edit, Delete actions

### Data & Persistence
- **Mock API Layer** - LocalStorage persistence for all data
- **10 Pre-loaded Integrations** - Salesforce, Slack, Zendesk, Google Calendar, Intercom, HubSpot, Microsoft Teams, DialpadGPT, Epic EHR, Dynamics 365

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: TailwindCSS with custom theme
- **Icons**: Lucide React
- **State**: React Hooks (useState, useEffect)
- **Storage**: LocalStorage (architected for Firestore/Supabase migration)

## Getting Started

```bash
# Navigate to project
cd integration-marketplace

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
integration-marketplace/
├── src/
│   ├── App.jsx              # Main app with routing logic
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global styles + Tailwind
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── AppLogo.jsx      # Logo with fallback
│   │   ├── AppCard.jsx      # Card components (Featured, Grid, List)
│   │   ├── Marketplace.jsx  # Main marketplace view
│   │   ├── AppDetail.jsx    # App detail page
│   │   ├── AdminDashboard.jsx   # Admin listing table
│   │   └── AdminEditForm.jsx    # Add/Edit form
│   └── data/
│       └── mockData.js      # Initial data + storage helpers
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Categories

- **CRM** - Salesforce, HubSpot, Dynamics 365
- **Helpdesk** - Zendesk, Intercom
- **AI & Automation** - DialpadGPT Agent Assist
- **Productivity** - Slack, Google Calendar, Microsoft Teams
- **Healthcare** - Epic EHR

## Key Dialpad Terminology

- **Dialpad Everywhere** - Widget for live transcription and AI coaching in other apps
- **Native Integrations** - Built by Dialpad
- **Partner Apps** - Built by third-party developers
- **DialpadGPT** - AI-powered features for real-time coaching and insights

## Customization

### Adding New Integrations

Edit `src/data/mockData.js` or use the Admin Dashboard to add new integrations with:
- Name, Slug, Logo URL
- Category, Developer, Developer Type
- Short/Long Description
- Features list
- Screenshots
- Pricing, Status, Badges

### Theming

Edit `tailwind.config.js` to customize:
- Primary/Accent colors
- Gradient mesh backgrounds
- Shadow styles

## License

MIT
