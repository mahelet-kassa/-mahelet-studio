# Mahelet Studio — Photography Portfolio

A personal photography portfolio for **Mahelet Studio**, showcasing graduation, portrait, and couples photography based in Boston.

**Live site:** [maheletstudio.com](https://maheletstudio.com)

---

## How to Run Locally

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:5173
npm run build      # build for production (output goes to dist/)
npm run preview    # preview the production build locally
```

---

## Project Structure

```
src/
├── main.jsx                 # App entry point — mounts React to the DOM
├── App.jsx                  # Defines all routes and wraps pages with Navbar/Footer
├── index.css                # Global styles (fonts, scrollbar, body defaults)
│
├── pages/                   # One file per page/route
│   ├── Home.jsx             # Landing page — hero image + featured photos
│   ├── Gallery.jsx          # Full photo gallery with category filters + lightbox
│   ├── Services.jsx         # What I offer (graduation, portraits, couples)
│   ├── About.jsx            # Bio / about me
│   └── Contact.jsx          # Contact form + info
│
├── components/              # Reusable UI pieces shared across pages
│   ├── Navbar.jsx           # Top navigation bar (desktop + mobile menu)
│   ├── Footer.jsx           # Site footer with links and social icons
│   ├── Logo.jsx             # Styled text logo component
│   ├── Lightbox.jsx         # Fullscreen image viewer (open from gallery)
│   ├── FadeIn.jsx           # Scroll-triggered fade animation wrapper
│   ├── PageTransition.jsx   # Page enter/exit animation wrapper
│   └── ScrollToTop.jsx      # Scrolls to top on route change
│
├── data/                    # Static data (no API, just JS arrays)
│   ├── photos.js            # All photo entries, categories, featured/hero selections
│   └── services.js          # Service names, descriptions, and feature lists
│
public/
├── images/                  # All optimized photo files (photo-01.jpg, etc.)
├── logo.png                 # Site logo / favicon image
└── favicon.svg              # SVG fallback favicon

index.html                   # HTML shell — Vite injects the app here
vercel.json                  # Vercel config — rewrites all routes to index.html for SPA
```

---

## Libraries & What They Do

| Library | What it does | Where it's used | Docs |
|---------|-------------|-----------------|------|
| **React** | UI framework — builds the interface with components | Everywhere | [react.dev](https://react.dev) |
| **React DOM** | Renders React components to the browser | `main.jsx` | [react.dev](https://react.dev) |
| **React Router DOM** | Client-side routing — handles page navigation without full page reloads | `main.jsx`, `App.jsx`, Navbar, Footer, all pages | [reactrouter.com](https://reactrouter.com) |
| **Framer Motion** | Animations — page transitions, fade-ins, hover effects, lightbox animations | `FadeIn.jsx`, `PageTransition.jsx`, `Navbar.jsx`, `Gallery.jsx`, `Lightbox.jsx`, `Services.jsx` | [motion.dev](https://motion.dev) |
| **Lucide React** | Icon library — provides all icons (arrows, menu, X, check, etc.) | Navbar, Footer, all pages | [lucide.dev](https://lucide.dev) |
| **Tailwind CSS** | Utility-first CSS — all styling is done with class names directly in JSX | Every component | [tailwindcss.com](https://tailwindcss.com) |
| **Vite** | Build tool & dev server — bundles the app for production, serves it in development | `package.json` scripts, `index.html` | [vite.dev](https://vite.dev) |

### Dev-only tools (not shipped to users)

| Tool | What it does |
|------|-------------|
| **Sharp** | Image compression — used in `scripts/optimize-images.mjs` to shrink photos | 
| **ESLint** | Code linting — catches common mistakes |

---

## Deployment

The site is deployed on **Vercel** and auto-deploys when you push to the `main` branch on GitHub.

- **GitHub repo:** [github.com/mahelet-kassa/-mahelet-studio](https://github.com/mahelet-kassa/-mahelet-studio)
- **Domain:** maheletstudio.com (DNS managed through GoDaddy)
- **DNS records:** A record `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`

### To deploy changes:
```bash
git add -A
git commit -m "describe your change"
git push
# Vercel auto-deploys in ~1 minute
```

---

## Adding / Removing Photos

1. Put new `.jpg` files in `public/images/` (name them `photo-XX.jpg`)
2. Open `src/data/photos.js` and add an entry to the `photos` array:
   ```js
   { id: 39, src: '/images/photo-39.jpg', thumb: '/images/photo-39.jpg', title: 'Photo Title', category: 'Graduation', aspect: 'landscape' },
   ```
3. To feature a photo on the homepage, add its `id` to the `featuredPhotos` filter
4. To optimize new images, run: `node scripts/optimize-images.mjs`

---

## Common Issues

| Problem | Fix |
|---------|-----|
| Images not showing | Check `src/data/photos.js` — make sure the file name matches what's in `public/images/` |
| Page is blank after deploy | Check the browser console (F12) for JavaScript errors |
| Route shows 404 on Vercel | Make sure `vercel.json` has the rewrite rule pointing to `index.html` |
| CSS not loading | Make sure `index.css` has `@import "tailwindcss";` at the top |
