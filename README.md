# 📷 High-End Mobile-First Photography Portfolio

A blazingly fast, Instagram-style photography portfolio engineered with **Astro**, **Tailwind CSS**, and **Cloudinary**. Built with a **zero-JS frontend** philosophy and **pure CSS Scroll Snap** for native-feeling mobile swiping on any screen.

---

## 🌟 Key Features

- 📱 **Permanently Constrained Mobile Frame**: Strictly bound within a centered `470px` mobile container (`max-w-[470px]`) with a subtle ambient radial backdrop for desktop viewers.
- ⚡ **Zero-JS Performance**: Powered by Astro static site generation. Zero client-side framework overhead (no React/Vue runtime).
- 🎠 **Pure CSS Scroll Snap Carousels**: Frictionless horizontal touch swiping using `scroll-snap-type: x mandatory` and `scroll-snap-align: center`. Zero third-party slider libraries.
- ☁️ **Dynamic Cloudinary Ingestion**: Zero raw image files stored in git. Images are delivered on the fly via Cloudinary CDN with automatic next-gen formatting (`f_auto,q_auto,w_1080,c_limit`).
- 🌐 **Bilingual Captions (EN / RU)**: Full schema support for English and Russian captions, with an instant toggle pinned to the mobile bottom bar.
- 📍 **Editorial Metadata**: Photoshoot title, location pin badge, camera/film stock tag, and dynamic slide indicators.

---

## 🚀 Quick Start

### Prerequisites
- Node.js `v18.14.1` or higher (tested on Node v22)
- npm `v9+`

### Installation & Development

```bash
# 1. Clone the repository
git clone <repository-url>
cd photography-portfolio

# 2. Install dependencies
npm install

# 3. Configure environment variables (optional for local demo)
cp .env.example .env

# 4. Start the local development server
npm run dev

# 5. Build for production
npm run build

# 6. Preview the production build locally
npm run preview
```

---

## ☁️ Cloudinary Workflow: Uploading Media

Raw image binaries (`.jpg`, `.png`, `.webp`, `.raw`, etc.) are strictly prohibited from being committed to this repository. All media is hosted on Cloudinary and dynamically transformed at request time.

### 1. Upload Images to Cloudinary
1. Log into your [Cloudinary Console](https://cloudinary.com/console).
2. Go to **Media Library** and create a folder (e.g. `portfolio/kyoto`).
3. Upload your high-resolution photographs into this folder.

### 2. Retrieve Public IDs
Each uploaded image will have a **Public ID** (for example: `portfolio/kyoto/street-lanterns`).
- Cloudinary will automatically optimize resolution, compression, and delivery format (`WebP`/`AVIF`) dynamically using the URL parameters `/f_auto,q_auto,w_1080,c_limit/`.

### 3. Configure Your Cloud Name
Add your Cloudinary cloud name to `.env`:
```env
PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
```
*(If left unset, the project safely defaults to `'demo'`, which loads high-quality built-in Cloudinary sample images for testing).*

---

## 📝 Adding New Photoshoots to `data/feed.json`

To publish a new photoshoot, open [`data/feed.json`](data/feed.json) (or [`src/data/feed.json`](src/data/feed.json)) and add an entry to the top of the array:

```json
{
  "id": "my-photoshoot-id",
  "title": "Autumn in Hokkaido",
  "location": "Biei, Japan",
  "camera": "Mamiya 7II · Fuji Pro 400H",
  "date": "November 2026",
  "images": [
    "portfolio/hokkaido/rolling-hills",
    "portfolio/hokkaido/lone-tree",
    "portfolio/hokkaido/misty-ridge"
  ],
  "captions": {
    "en": "First snowfall descending over the rolling agricultural patchwork of Biei hills.",
    "ru": "Первый снег, опускающийся на холмистые лоскутные поля Биэй."
  }
}
```

### Schema Properties:
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Unique identifier used for DOM anchors |
| `title` | `string` | Photoshoot title displayed in post header |
| `location` | `string` | City and country shown next to location pin |
| `camera` | `string` | Camera and film stock metadata tag |
| `date` | `string` | Shooting date or season |
| `images` | `string[]` | Array of Cloudinary Public IDs (at least 1 image) |
| `captions.en` | `string` | English caption |
| `captions.ru` | `string` | Russian caption |

---

## 🚢 Vercel Deployment Guide

This project is zero-config ready for deployment on **Vercel**:

### Option 1: Deploy with Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via Vercel Web Dashboard
1. Push your repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel automatically detects **Astro**:
   - **Framework Preset**: `Astro`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Under **Environment Variables**, add:
   - `PUBLIC_CLOUDINARY_CLOUD_NAME` = your Cloudinary cloud name
5. Click **Deploy**. Your portfolio will be live worldwide on Vercel's Edge Network!

---

## 🤖 Agentic Development Roster

This portfolio was designed and built utilizing specialized Antigravity subagents:

- **Lead Agent Architect (AAA v2.0)**: End-to-end orchestration and constraint governance.
- **Prompt Engineer (PEA v2.0)**: Strict UI specifications (`FeedPost.astro`, pure CSS snap rules).
- **Astro Frontend Specialist**: Component implementation, zero-JS markup, mobile layout.
- **Code Critic (CCS v1.0)**: Parallel read-only stability and anti-bloat auditor.
- **GitHub Pusher (GPA v2.0)**: Clean conventional commits and git branch hygiene.

All architectural blueprints and audit logs are archived under [`docs/`](docs/).
