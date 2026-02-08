# Astro Portfolio with Globe

A modern, minimalist portfolio built with Astro.js, Bun, TypeScript, and TailwindCSS featuring an interactive 3D globe.

## 🚀 Tech Stack

- **Astro.js** - Static site generator
- **Bun** - Fast JavaScript runtime and package manager
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **React** - UI components (via Astro integration)
- **Motion** - Animation library

## 📦 Installation

### Prerequisites
- [Bun](https://bun.sh) installed on your system

### Setup

1. Install dependencies:
```bash
bun install
```

2. Run development server:
```bash
bun run dev
```

3. Build for production:
```bash
bun run build
```

4. Preview production build:
```bash
bun run preview
```

## 🎨 Features

- ✅ Black & white globe visualization
- ✅ Smooth animations with Motion
- ✅ Fully responsive design
- ✅ Dark mode optimized
- ✅ Type-safe with TypeScript
- ✅ Optimized for performance
- ✅ SEO-friendly

## 🌍 Globe Integration

The globe component is located at `src/components/HeroSection.tsx`. Currently, it uses a placeholder implementation.

### To add your actual globe:

1. **If you have a globe component file:**
   - Copy your globe component to `src/components/Globe.tsx`
   - Update the import in `HeroSection.tsx`

2. **If using a package:**
   ```bash
   bun add [your-globe-package]
   ```
   Then import it in `HeroSection.tsx`

### Globe Configuration

The globe is configured with a black & white theme:

```typescript
{
  globeColor: "#1a1a1a",           // Dark gray globe
  atmosphereColor: "#ffffff",       // White glow
  polygonColor: "rgba(255,255,255,0.7)", // White continents
  arcColors: ["#ffffff", "#e5e5e5", "#cccccc"] // White to gray arcs
}
```

## 📁 Project Structure

```
/
├── public/
│   └── projects/         # Project images
├── src/
│   ├── components/       # React components
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ContactSection.tsx
│   ├── layouts/
│   │   └── Layout.astro  # Base layout
│   ├── pages/
│   │   └── index.astro   # Home page
│   └── styles/
│       └── globals.css   # Global styles
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## 🎯 Layout Overview

The portfolio follows this structure based on your sketch:

```
┌─────────────────────────────┐
│    NAVBAR                   │
├─────────────────────────────┤
│      CREATIVE               │
│      DEVELOPER              │
│                             │
│         ╭───╮              │
│        │ 🌍 │  ← Globe     │
│         ╰───╯              │
│                             │
│   Tagline & CTA buttons    │
├─────────────────────────────┤
│    EXPERIENCE SECTION       │
├─────────────────────────────┤
│    PROJECTS SECTION         │
├─────────────────────────────┤
│    CONTACT SECTION          │
└─────────────────────────────┘
```

## ✏️ Customization

### Update Content

1. **Hero Section**: Edit `src/components/HeroSection.tsx`
2. **Experience**: Modify the `experiences` array in `src/components/ExperienceSection.tsx`
3. **Projects**: Update the `projects` array in `src/components/ProjectsSection.tsx`
4. **Contact**: Edit `src/components/ContactSection.tsx`

### Update Colors

Modify the CSS variables in `src/styles/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  /* ... */
}
```

## 🚢 Deployment

### Vercel
```bash
bun run build
# Deploy the dist/ folder
```

### Netlify
```bash
bun run build
# Deploy the dist/ folder
```

### GitHub Pages
Update `astro.config.mjs` with your site URL, then:
```bash
bun run build
```

## 📝 Notes

- The globe is positioned in the hero section as per your sketch
- All components use the `client:load` or `client:visible` directive for hydration
- Dark mode is enabled by default (can be toggled in Layout.astro)
- Project images should be placed in `public/projects/`

## 🤝 Contributing

Feel free to customize and make it your own!

## 📄 License

MIT License - feel free to use this for your portfolio!
