# Quick Start Guide - Astro Portfolio

## 🎯 What's Been Converted

Your Next.js portfolio has been converted to Astro.js with:
- ✅ Bun as the runtime/package manager
- ✅ TypeScript for type safety
- ✅ TailwindCSS for styling
- ✅ React components (via Astro integration)
- ✅ Black & white globe integration

## 🚀 Get Started in 3 Steps

### 1. Install Bun (if you haven't)
```bash
curl -fsSL https://bun.sh/install | bash
```

### 2. Install Dependencies
```bash
cd astro-portfolio
bun install
```

### 3. Run Development Server
```bash
bun run dev
```

Your site will be at `http://localhost:4321`

## 🌍 Adding Your Globe Component

The globe is currently a placeholder. To add your real globe:

### Option A: Copy Your Globe File
```bash
# Copy your globe component
cp /path/to/your/globe.tsx src/components/Globe.tsx

# Update HeroSection.tsx to import it
# Replace the placeholder Globe component with your import
```

### Option B: Install Globe Package
```bash
bun add cobe  # or whatever package you use
```

Then update the import in `src/components/HeroSection.tsx`

## 📂 Project Structure

```
astro-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── HeroSection.tsx  # Hero with globe
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ContactSection.tsx
│   ├── layouts/
│   │   └── Layout.astro     # Main layout
│   ├── pages/
│   │   └── index.astro      # Home page
│   └── styles/
│       └── globals.css      # Global styles
├── public/                  # Static assets
├── astro.config.mjs        # Astro config
├── tailwind.config.mjs     # Tailwind config
├── tsconfig.json           # TypeScript config
└── package.json
```

## ⚡ Key Differences from Next.js

1. **File Structure**: Pages go in `src/pages/`
2. **Components**: React components need `client:load` or `client:visible` directives
3. **Routing**: File-based routing (same as Next.js)
4. **Build**: Astro generates static HTML by default
5. **Package Manager**: Using Bun instead of npm/pnpm/yarn

## 🎨 Customization

### Update Colors
Edit `src/styles/globals.css` - look for CSS variables under `:root`

### Update Content
- Hero: `src/components/HeroSection.tsx`
- Projects: `src/components/ProjectsSection.tsx`
- Experience: `src/components/ExperienceSection.tsx`
- Contact: `src/components/ContactSection.tsx`

### Add Project Images
Place images in `public/projects/`:
- aiwriter.jpg
- ecommerce.jpg
- analytics.jpg
- taskapp.jpg

## 🔧 Troubleshooting

**Port already in use?**
```bash
bun run dev -- --port 3000
```

**Type errors?**
Make sure you installed dependencies:
```bash
bun install
```

**Globe not showing?**
Replace the placeholder in `HeroSection.tsx` with your actual globe component

## 📦 Build & Deploy

### Build
```bash
bun run build
```

Output will be in `dist/`

### Preview
```bash
bun run preview
```

### Deploy
The `dist/` folder can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Any static hosting

## 💡 Tips

1. **Fast Refresh**: Astro has instant HMR
2. **TypeScript**: Full type checking included
3. **Performance**: Astro ships zero JS by default (only what you need)
4. **SEO**: Automatically optimized

## 🆘 Need Help?

Check the README.md for more detailed information!

---

**Ready to go!** Just run `bun run dev` and start customizing! 🚀
