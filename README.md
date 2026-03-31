# Williams Kitchens & Bathrooms Website

Production-ready Vite + React + TypeScript + Tailwind website for **Williams Kitchens & Bathrooms**.

## Tech stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- React Router

## Local setup

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push to `main`.
2. In GitHub repository settings, enable **Pages** and set source to **GitHub Actions**.
3. Workflow: `.github/workflows/deploy.yml` builds and deploys automatically.

## Editing business details

Most business content is centralised in:

- `src/data/site.ts`

Update here to edit:

- phone number
- services
- service areas
- trust signals
- reviews
- FAQs
- portfolio metadata

## Change phone number

Edit both:

- `phoneNumberDisplay`
- `phoneNumberHref`

in `src/data/site.ts`.

## Add portfolio images

1. Add images to `public/images/portfolio/`.
2. Add/update entries in `galleryItems` in `src/data/site.ts`.
3. Use descriptive `alt` text for SEO/accessibility.

## Update reviews

Edit the `reviews` array in `src/data/site.ts`.

## Update service areas

Edit the `areasCovered` array in `src/data/site.ts`.

## Form handling (GitHub Pages)

The quote form currently runs a frontend-only flow and redirects to `/thank-you`.
To make it live, connect a hosted endpoint such as:

- Formspree
- Basin
- Netlify Forms (if migrating hosting)

## SEO foundations included

- Optimised title/description
- Open Graph + Twitter tags
- Semantic section structure
- FAQ schema
- LocalBusiness schema
- robots.txt
- sitemap.xml

## Add a blog later

Recommended path:

1. Add route group under `src/pages/blog/`.
2. Store markdown or CMS JSON content in a new `src/data/blog/` directory.
3. Add a blog listing page and post template route.
4. Expand sitemap with blog URLs.

## Important note about images

Current portfolio assets are placeholders. Replace them with real project images before launch.
