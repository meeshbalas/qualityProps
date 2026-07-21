# qualityProps

Modern Next.js website scaffold for a sports props platform.

## Current status
- ✅ Frontend marketing + product display pages complete
- ✅ Responsive navigation and layout
- ✅ Styled pricing, picks, results, FAQ, auth, legal, and contact pages
- ⏳ Backend integrations (auth, payments, database, admin tools) not yet connected

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Run locally
```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build
```bash
npm run build
npm run start
```

## Deploy
Deploy to Vercel by importing this repository and accepting defaults.

## Project structure
- Global layout: `src/app/layout.tsx`
- Global styles/theme: `src/app/globals.css`
- Header/Footer: `src/components/layout/*`
- Home: `src/app/page.tsx`
- Pricing: `src/app/pricing/page.tsx`
- Picks: `src/app/picks/page.tsx`
- Results: `src/app/results/page.tsx`
- FAQ: `src/app/faq/page.tsx`
- Contact: `src/app/contact/page.tsx`
- Auth UI: `src/app/login/page.tsx`, `src/app/signup/page.tsx`
- Legal: `src/app/terms/page.tsx`, `src/app/privacy/page.tsx`
