# Dr. Khandakar Hafijur Rahman — Official Portfolio & Chamber Website

Official personal website and clinical portal for **Dr. Khandakar Hafijur Rahman** — Associate Professor (Sports Medicine & Arthroscopy, Dept. of Orthopaedic Surgery, Mymensingh Medical College & Hospital) and Fellow of the American College of Surgeons (FACS, USA).

---

## 🌟 Overview & Highlights

- **Bilingual Experience:** Seamless instant toggle between Bengali (বাংলা) and English (EN).
- **Theme Modes:** Built-in Light and Dark modes with automatic preference persistence.
- **Specialties Highlighted:**
  - Arthroscopy (Keyhole Joint Surgery — ACL, PCL, Meniscus, Rotator Cuff)
  - Arthroplasty (Joint Replacement — Total Knee & Hip Replacement)
  - Sports Medicine & Athletic Injury Rehabilitation
  - Interventional Pain Management (FIPM India — Non-surgical targeted pain relief)
  - Complex Orthopaedic Trauma & Fracture Surgery
- **Chamber & Appointment Details:**
  - **Chamber:** Memorial Diagnostic Centre (Room 229, 2nd Floor, Opposite MMC Hospital Gate, Charpara, Mymensingh)
  - **Serial Booking Lines:** `01949-446432` / `01747-750114`
  - **Visiting Hours:** 3:00 PM – 9:00 PM (Friday closed)
  - **Serial Booking Time:** Every day from 9:00 PM
  - Direct one-click calling, Google Maps direction, and responsive mobile navigation.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **Language:** TypeScript 5.7+ (Strict mode)
- **Styling:** Tailwind CSS v4 with modern CSS custom properties and dark mode tokens
- **Typography:** Google Fonts (`Hind Siliguri` for Bengali, `Inter` for English & Latin)
- **Deployment Ready:** Optimized for GitHub and Vercel

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.0.0
- pnpm >= 9.0.0 (or npm)

### Installation

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Checks

```bash
# Type check TypeScript codebase
pnpm typecheck

# Lint check with ESLint
pnpm lint

# Build production bundle
pnpm build
```

---

## 🌐 Deploy to Vercel

1. Push this repository to **GitHub**.
2. Go to **[vercel.com](https://vercel.com)** and log in.
3. Click **"Add New..."** → **"Project"**.
4. Import your GitHub repository.
5. Vercel automatically detects Next.js settings. Click **"Deploy"**.

Your website will be live worldwide in seconds with automatic SSL and fast edge CDN.

---

## 📁 Project Architecture

```
├── app/
│   ├── globals.css          # Design system tokens, light/dark variables & base utilities
│   ├── icon.svg             # Circular "Dr." browser tab favicon
│   ├── layout.tsx           # Root HTML layout, font preconnects, SEO metadata & Schema.org JSON-LD
│   ├── opengraph-image.tsx  # Dynamic OG preview card generator
│   └── page.tsx             # Master page assembling modular components
├── components/
│   ├── navbar.tsx           # Floating responsive navbar with language & theme toggles
│   ├── hero.tsx             # Hero introduction, credentials badges, quick call CTAs
│   ├── about.tsx            # Academic rank, MMCH department, surgical philosophy
│   ├── qualifications.tsx   # Degree, fellowship & international credential cards
│   ├── services.tsx         # Specialized clinical treatments & procedures
│   ├── chamber.tsx          # Memorial Diagnostic Centre location, schedule & map
│   ├── contact.tsx          # Serial booking lines & visiting guidelines
│   ├── faq.tsx              # Frequently asked questions accordion
│   ├── footer.tsx           # Responsive footer with light/dark theme support
│   ├── language-toggle.tsx  # Bengali / English switch button
│   └── theme-toggle.tsx     # Light / Dark mode toggle button
├── lib/
│   ├── doctor.ts            # Complete bilingual content schema (Bangla & English)
│   ├── context.tsx          # Language (BN/EN) and Theme (light/dark) React state provider
│   └── types.ts             # TypeScript definitions
└── public/
    ├── photo.jpg            # Doctor portrait photograph
    ├── robots.txt           # Search engine crawler directives
    └── sitemap.xml          # XML sitemap
```

---

## 📄 License

Proprietary — All rights reserved © Dr. Khandakar Hafijur Rahman.
