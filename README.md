# Thép Ngũ Phúc — Website

Modern B2B website for **Ngu Phuc Steel** (Công ty Cổ phần Thép Ngũ Phúc), Hai Phong, Vietnam.

**Tech stack:** Next.js 16 · TypeScript · Tailwind CSS · shadcn/ui · next-intl (VI + EN)

---

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

---

## Deployment (Vercel — Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Import Project**
3. Select the repo → click **Deploy**
4. No environment variables needed for the base site

Custom domain: Vercel dashboard → **Settings → Domains** → add `nguphucsteel.com.vn`

---

## Project Structure

```
app/
  [locale]/            ← All pages (supports VI and EN)
    page.tsx           ← Home
    gioi-thieu/        ← About
    san-pham/          ← Products
    dich-vu/           ← Services
    du-an/             ← Projects
    lien-he/           ← Contact
  globals.css
  layout.tsx

components/
  Header.tsx           ← Navigation + VI/EN toggle
  Footer.tsx           ← Footer with addresses and partners
  ui/                  ← shadcn/ui components

lib/
  data.ts              ← ALL content: company info, products, services, projects

messages/
  vi.json              ← Vietnamese UI strings
  en.json              ← English UI strings
```

---

## Editing Content (No coding required)

### Company info (phone, address, email)

Open `lib/data.ts` → find the `COMPANY` object at the top.

### Products

In `lib/data.ts`, find the `PRODUCTS` array. Each product:

```ts
{
  id: "thep-tam",                  // URL anchor — do not change
  nameVi: "Thép Tấm",
  nameEn: "Steel Plates",
  descVi: "...",
  descEn: "...",
  specs: [
    { labelVi: "Độ dày", labelEn: "Thickness", value: "1.5 – 100 mm" },
  ],
},
```

### Projects / Case Studies

In `lib/data.ts`, find `PROJECTS` and add:

```ts
{
  client: "Company Name",
  category: { vi: "Ngành", en: "Industry" },
  descVi: "Mô tả...",
  descEn: "Description...",
  partner: "Partner Name",
},
```

### UI text (button labels, page titles)

Edit `messages/vi.json` (Vietnamese) or `messages/en.json` (English).

### Adding real photos

Find comments with `Image placeholder` or `Ảnh minh họa` in page files.
Replace the placeholder `<div>` with:

```tsx
import Image from "next/image";

<div className="relative aspect-video rounded overflow-hidden">
  <Image
    src="/images/slitting-line.jpg"  // place files in /public/images/
    alt="Dây chuyền xả băng"
    fill
    className="object-cover"
  />
</div>
```

---

## Languages

- `/` → Vietnamese (default)
- `/en/...` → English

Language toggle is in the top navigation bar.

---

## Security Headers (configured in `next.config.ts`)

- `Strict-Transport-Security` (HSTS)
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Content-Security-Policy`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- Server version headers hidden (`poweredByHeader: false`)

---

## Contact Form

The form in `/lien-he` shows a success message client-side. To wire up real email sending:

1. Create `app/api/contact/route.ts`
2. Use [Resend](https://resend.com) or [Formspree](https://formspree.io)
3. Update `handleSubmit` in `app/[locale]/lien-he/page.tsx` to POST to your API

---

*Built for FDI-grade B2B credibility. Designed to match Nippon Steel, POSCO, ArcelorMittal corporate site standards.*
