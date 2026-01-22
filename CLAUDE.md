# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio site built with Next.js 15, React 19, TypeScript, shadcn/ui, TailwindCSS v4, and Magic UI. The site is deployed as a static export to GitHub Pages at `/portfolio` subpath.

**Key characteristics:**
- Static HTML export (`output: "export"`)
- GitHub Pages deployment with `/portfolio` basePath
- Content-driven architecture using Content Collections for MDX blog posts
- Single source of truth for portfolio data in `src/data/resume.tsx`

## Development Commands

```bash
# Local development server
npm run dev

# Production build (generates static HTML in ./out)
npm run build

# Serve production build locally
npm run start

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## Architecture

### Data Layer
- **`src/data/resume.tsx`**: Single configuration file containing all portfolio content (work experience, projects, education, skills, contact info). Edit this file to update portfolio content.
- **Content Collections**: MDX blog posts in `/content` directory are processed via `content-collections.ts` with Zod schema validation and MDX compilation.

### Static Export Configuration
- `next.config.mjs` configures `output: "export"` for static site generation
- `basePath: "/portfolio"` and `assetPrefix: "/portfolio"` for GitHub Pages deployment
- Images are unoptimized (`images.unoptimized: true`) for static export compatibility

### Component Structure
- **Magic UI components** (`src/components/magicui/`): Animated UI components (blur-fade, dock, flickering-grid)
- **shadcn/ui components** (`src/components/ui/`): Base UI primitives from shadcn/ui
- **Section components** (`src/components/section/`): Page sections (work, projects, contact)
- **Custom SVG icons** (`src/components/ui/svgs/`): Technology logos with light/dark variants

### Styling
- TailwindCSS v4 with custom configuration via `@tailwindcss/postcss`
- `components.json` configures shadcn/ui with "new-york" style, neutral base color, CSS variables
- Theme system using `next-themes` with dark mode default
- Geist and Geist Mono fonts from `next/font/google`

### Content Management
- MDX blog posts use Content Collections with:
  - Schema: `title`, `publishedAt`, `updatedAt`, `author`, `summary`, `image`, `content`
  - Plugins: `remark-gfm`, custom `remarkCodeMeta` for code block metadata
  - Compiled MDX output available via `content-collections` import alias

### Case Studies
- Static HTML files in `/case-studies` directory (e.g., `gemini-music-classifier.html`)
- Corresponding Next.js pages in `src/app/case-studies/[slug]/page.tsx`
- Linked from project cards via `DATA.projects` in `resume.tsx`

## Path Aliases
- `@/*` → `./src/*`
- `content-collections` → `./.content-collections/generated`

## Important Patterns

### Adding New Projects
Edit `src/data/resume.tsx` and add to `DATA.projects` array with:
- `title`, `href`, `dates`, `active`, `description`, `technologies[]`, `links[]`

### Adding Blog Posts
1. Create MDX file in `/content`
2. Include frontmatter: `title`, `publishedAt`, `summary`, `content`
3. Content Collections will auto-compile

### Theme-Aware Components
Many SVG components have light/dark variants (e.g., `reactLight.tsx`, `reactDark.tsx`). Use theme context when rendering.

### Static Export Considerations
- All pages must be statically renderable (no server-side runtime)
- Image optimization disabled - use standard `<img>` or unoptimized Next.js `<Image>`
- basePath `/portfolio` is prepended to all routes and assets

## ESLint Configuration
Uses Next.js core web vitals config with TypeScript support. Ignores `.next/`, `out/`, `build/`, and `next-env.d.ts`.
