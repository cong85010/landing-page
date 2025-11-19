# 🔥 Thành Công Gear - Landing Page

A distinctive, SEO-optimized landing page for Thành Công Gear gaming PCs built with Astro.

## ✨ Design Concept: Neo-Vietnamese Industrial Luxe

This landing page breaks away from generic gaming PC websites with a bold aesthetic that combines:

- **Vietnamese Heritage**: Red and gold color palette inspired by Vietnamese culture
- **Industrial Brutalism**: Dark, steel-like backgrounds with geometric patterns
- **Luxury Craftsmanship**: Premium typography and sophisticated animations
- **Vertical Typography**: Inspired by Vietnamese street signage
- **Asymmetric Layouts**: Breaking traditional grid conventions

### Key Visual Features

- Animated grid background with noise overlay
- Glitch text effects on hero title
- 3D-like product showcases with parallax effects
- Rotating circular badges with curved text
- Smooth scroll animations and micro-interactions
- Custom color scheme: Vietnamese Red (#C8102E) & Gold (#FFD700)

## 🚀 Tech Stack

- **Astro** - Static Site Generator for optimal SEO and performance
- **Vanilla CSS** - Custom-crafted styles without framework overhead
- **TypeScript** - Type-safe development
- **Sitemap Integration** - Automatic sitemap generation for SEO

## 📦 Project Structure

```
/
├── public/
│   ├── favicon.svg         # Custom brand favicon
│   └── robots.txt          # SEO crawler instructions
├── src/
│   ├── components/
│   │   ├── Hero.astro      # Hero section with glitch effects
│   │   ├── Philosophy.astro # Brand philosophy section
│   │   ├── Arsenal.astro   # Product showcase cards
│   │   ├── Testimonials.astro # Infinite scrolling testimonials
│   │   └── CTA.astro       # Call-to-action section
│   ├── layouts/
│   │   └── Layout.astro    # SEO-optimized base layout
│   ├── pages/
│   │   └── index.astro     # Homepage
│   └── styles/
│       └── global.css      # Complete custom styling
└── astro.config.mjs        # Astro configuration with SEO optimizations
```

## 🎨 Typography

- **Display**: Antonio (Bold Vietnamese headings)
- **Titles**: Bebas Neue (Section titles)
- **Body**: Crimson Pro (Readable body text)
- **Mono**: JetBrains Mono (Technical specs, labels)

## 🔧 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

## 🎯 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ Automatic sitemap generation
- ✅ robots.txt configuration
- ✅ Canonical URLs
- ✅ Optimized image loading
- ✅ Compressed HTML/CSS/JS

## 🌐 Performance Optimizations

- Static site generation with Astro
- CSS minification and inlining
- Zero JavaScript framework overhead
- Lazy loading for images (when added)
- Preconnect to Google Fonts
- Compressed assets

## 🎭 Color Palette

```css
--red-primary: #C8102E    /* Vietnamese Red */
--gold: #FFD700           /* Luxury Gold */
--black: #0A0A0A          /* Deep Black */
--charcoal: #1A1A1A       /* Industrial Charcoal */
--steel: #2A2A2A          /* Steel Gray */
```

## 📱 Responsive Design

Fully responsive with breakpoints at:
- Desktop: 1024px+
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🚀 Deployment

Build the site:
```bash
npm run build
```

The static site will be generated in `./dist/` and can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📄 License

Copyright © 2025 Thành Công Gear. All rights reserved.
