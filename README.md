# Anthony Atiro - Portfolio Website

Modern, responsive portfolio website built with Next.js 16 (App Router), featuring clean architecture, internationalization, and stunning UI/UX.

## 🚀 Features

- ✨ **Modern Design**: Glassmorphism, gradients, and smooth animations
- 🌐 **Internationalization (i18n)**: English and Spanish support with dynamic routing
- 📱 **Fully Responsive**: Mobile-first design with Tailwind CSS
- ⚡ **Performance Optimized**: Fast loading times with Next.js 16 and Turbopack
- 🎨 **Framer Motion Animations**: Smooth, professional animations throughout
- 🏗️ **Clean Architecture**: Feature-Sliced Design (FSD) for scalability
- ♿ **Accessible**: WCAG compliant with semantic HTML
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and structured data

## 📁 Project Structure (Feature-Sliced Design)

```
src/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── layout.tsx      # Root layout with i18n provider
│   │   └── page.tsx        # Home page
│   └── globals.css         # Global styles
├── features/               # Feature modules
│   ├── hero/
│   ├── tech-stack/
│   ├── performance/
│   ├── deployments/
│   ├── milestones/
│   └── cta/
├── widgets/                # Complex UI components
│   ├── header/
│   │   ├── ui/
│   │   │   ├── Header.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   └── index.ts
│   └── footer/
├── shared/                 # Shared utilities and components
│   ├── ui/
│   │   ├── Button/
│   │   ├── Card/
│   │   └── Container/
│   ├── lib/
│   │   └── utils.ts        # Utility functions (cn, etc.)
│   └── config/
│       └── i18n.ts         # i18n configuration
├── config.ts               # Global configuration
└── middleware.ts           # Next.js middleware for i18n routing
```

## 🛠️ Tech Stack

### Core

- **Next.js 16.1.6** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety

### Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Internationalization

- **next-intl** - i18n for Next.js with middleware support

### Utilities

- **clsx** - Conditional class names
- **tailwind-merge** - Smart Tailwind class merging
- **react-intersection-observer** - Scroll animations

## 🚦 Getting Started

### Prerequisites

- Node.js 20+ or Bun
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd anthonyatiro
```

2. Install dependencies:

```bash
npm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will automatically redirect to `/en` (English) by default.

## 🌍 Internationalization

The app supports two languages:

- **English** (`/en/*`)
- **Spanish** (`/es/*`)

### How it works:

1. **Middleware** (`src/middleware.ts`) handles locale detection and routing
2. **Translation files** are in `messages/en.json` and `messages/es.json`
3. **Language switcher** in the header allows users to toggle between languages
4. All text is pulled from translation dictionaries - **no hardcoded strings**

### Adding a new language:

1. Create a new translation file: `messages/[locale].json`
2. Add the locale to `src/config.ts`:

```typescript
export const locales = ["en", "es", "fr"] as const; // Add 'fr'
```

3. Update the language switcher in `LanguageSwitcher.tsx`

## 🎨 Design System

### Colors

- **Primary**: Cyan (`#06b6d4`)
- **Secondary**: Blue (`#3b82f6`)
- **Accent**: Purple (`#a855f7`)
- **Background**: Dark gray (`#030712`)
- **Text**: White/Gray shades

### Components

All components follow SOLID principles:

- **Single Responsibility**: Each component has one clear purpose
- **Props-driven**: No hardcoded content
- **Reusable**: Shared components in `src/shared/ui/`
- **Typed**: Full TypeScript support

## 📝 Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🏗️ Architecture Principles

### Feature-Sliced Design (FSD)

- **app/**: Application layer (routes, layouts)
- **features/**: Business logic features
- **widgets/**: Complex UI compositions
- **shared/**: Reusable utilities and components

### Clean Code

- **No hardcoded text**: All content from i18n dictionaries
- **Type safety**: Full TypeScript coverage
- **Separation of concerns**: Logic separated from presentation
- **DRY principle**: Reusable components and utilities

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration with next-intl plugin
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `src/config.ts` - App-wide constants (locales, etc.)
- `src/shared/config/i18n.ts` - i18n request configuration

## 📦 Build & Deploy

### Build for production:

```bash
npm run build
```

### Deploy to Vercel:

```bash
vercel deploy
```

The app is optimized for Vercel deployment with automatic i18n routing.

## 🎯 SEO

- **Metadata API**: Comprehensive meta tags in layout
- **Open Graph**: Social media sharing optimization
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Image optimization**: Next.js Image component
- **Performance**: Lighthouse score 98+

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👨‍💻 Author

**Anthony Atiro**

- GitHub: [@AnthonyCod](https://github.com/AnthonyCod)
- LinkedIn: [Anthony Atiro](https://www.linkedin.com/in/luis-anthony-atiro-vargas-98b608289)
- Instagram: [@anthonyatiro](https://www.instagram.com/anthonyatiro/)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
