# Stepad

AI-powered student productivity app landing page.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Sections

- **Navbar** — Logo, navigation links, Login & Open app CTAs
- **Hero** — Headline, subheading, CTA, trust badges, app preview mockup
- **Features** — 9-feature grid
- **How it works** — 3-step workflow
- **Pricing** — Free, Student, Pro, Pro Annual plans
- **Footer** — Links and social

## Design

- Background: `#0A0A0F`
- Gradient: `#6366F1` → `#3B82F6`
- Font: Inter (via next/font)

## Deploy to Vercel

### Prerequisites

1. Add your logo to `public/logo.png` before deploying.
2. Push this project to a GitHub, GitLab, or Bitbucket repository.

### Option A — Vercel Dashboard (recommended)

1. Go to [vercel.com/new](https://vercel.com/new).
2. Import your repository.
3. Vercel auto-detects Next.js — no extra build settings needed.
4. Click **Deploy**.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

For production:

```bash
vercel --prod
```

### Production config

- `vercel.json` — framework, region, and security/cache headers
- `next.config.mjs` — image optimization, compression, `poweredByHeader` disabled
- `.vercelignore` — excludes dev artifacts from upload

### Environment variables

This landing page does not require environment variables. Add any in the Vercel dashboard under **Project → Settings → Environment Variables** if you extend the app later.

