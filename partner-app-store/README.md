# Partner App Store

A modern partner app store ecosystem site built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- **Homepage** - Hero section, featured apps, categories, and new releases
- **Browse Apps** - Search, filter by category, grid/list view toggle
- **App Details** - Full app information, screenshots, reviews, security info
- **Categories** - Browse apps by category
- **Partners Page** - Information for developers wanting to join the ecosystem
- **Submit App** - Form for partners to submit new apps for review

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd partner-app-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
partner-app-store/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   ├── apps/
│   │   │   ├── page.tsx          # Browse apps
│   │   │   └── [id]/page.tsx     # App detail page
│   │   ├── categories/
│   │   │   └── page.tsx          # Categories listing
│   │   ├── partners/
│   │   │   └── page.tsx          # Partners info page
│   │   └── submit/
│   │       └── page.tsx          # Submit app form
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── Footer.tsx            # Footer
│   │   ├── AppCard.tsx           # App card component
│   │   └── CategoryCard.tsx      # Category card component
│   └── data/
│       └── apps.ts               # Sample app data
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding New Apps

Edit `src/data/apps.ts` to add new apps to the store:

```typescript
{
  id: 'your-app-id',
  name: 'Your App Name',
  description: 'Full description...',
  shortDescription: 'Brief description',
  icon: '🚀',
  category: 'productivity',
  developer: 'Your Company',
  rating: 4.5,
  reviews: 100,
  installs: '10K+',
  price: 'Free',
  featured: false,
  new: true,
  tags: ['tag1', 'tag2'],
  screenshots: ['/screenshots/1.png'],
}
```

### Adding New Categories

Edit the `categories` array in `src/data/apps.ts`:

```typescript
{
  id: 'category-id',
  name: 'Category Name',
  icon: 'IconName', // Lucide icon name
  count: 10,
}
```

## License

MIT
