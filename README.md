# MyUVCE

Originally hosted on Blogger, [myuvce.in](https://myuvce.in) has been rebuilt from the ground up and is now hosted on Cloudflare as a digital infrastructure for UVCE students. Designed for speed and reliability, this platform utilizes a static MDX architecture and edge caching to deliver campus utilities and updates, even on a spotty BMTC bus connection.

## The Origin Story

The journey of MyUVCE began with a simple need: navigating the historic, maze-like corridors of the K.R. Circle campus. A friend and I decided to take matters into our own hands. We walked through every corridor, lab, and department building, manually surveying the college to map it out completely.

As we mapped the campus, we realized there was a bigger need for organized information. We joined hands with other passionate students to gather articles, club information, and other crucial data about college life. Soon after, we started compiling study materials, previous year question papers, and scheme notes. What started as a simple campus map evolved into a comprehensive digital platform, and that's how the MyUVCE Hub was born.

## What You Can Contribute To

MyUVCE is an open platform built by students, for students. Anyone is highly encouraged to contribute and help improve the hub. You can contribute to:

* **Articles & Blog Posts**: Write about your experiences, tech trends, campus events, or guides for juniors.
* **Campus Map Updates**: Notice a relocated lab or a renamed staff cabin? Help keep the map accurate.
* **Club Updates & Events**: Add details about upcoming hackathons, fests, and workshops.
* **Code & UI Improvements**: If you're a developer, submit PRs to fix bugs, optimize performance, or add new components.

*(Note: Study materials like notes, previous year question papers, and scheme notes have now been moved to the dedicated **MyUVCE Hub**. If you have academic materials you'd like to share, you can upload them directly from within the platform!)*

For detailed instructions on how to write and format articles with the custom components, please check out the **[Article Writing Guide](article-writing-guide.md)**.

## Architecture & Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Styling:** Tailwind CSS v3 & `next-themes` (Dark Mode)
* **PWA & Offline:** `@ducanh2912/next-pwa` (Stale-While-Revalidate caching)
* **Icons:** Lucide React
* **Deployment:** Cloudflare Pages (Edge Runtime)
* **Content Delivery:** Pure `.mdx` local architecture
* **Analytics:** Google Analytics 4 (Async Injected)

## Core Features

* **Offline-First Map:** The campus directory and UI shell are cached via Service Workers for zero-network availability.
* **Zero-Download Document Viewer:** Custom React components routing Google Drive streams via native secure iframes.
* **Markdown CMS:** Fast, statically generated blog and resource pages using modern `.mdx` parsing.
* **Edge Routing:** Cloudflare `_redirects` and Next.js `next.config.ts` mapping to preserve legacy SEO.

## Getting Started

1. **Clone the repo:**
```bash
git clone https://github.com/mrmak419/myuvce.git
cd myuvce
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run Development Server:**
```bash
npm run dev
```

## Project Structure

* `/app`: App router pages, layouts, SEO metadata, and PWA manifest injection.
* `/components`: Reusable Tailwind UI components.
* `/content`: Local `.mdx` files for campus updates, posts, and guides.
* `/lib`: MDX parsing logic and core utilities.
* `/public`: Static assets, PWA icons, offline fallback UI, and `robots.txt`.

---

Built with ❤️ by the **[MyUVCE Team](https://myuvce.in/about)**.
