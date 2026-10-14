# Taha Malik — Portfolio

A static, content-managed portfolio for Muhammad Taha Malik, focused on practical software projects, backend engineering, workflow automation, and AI-powered experiences.

## Features

- Responsive portfolio homepage, project archive, case studies, and writing page
- Accessible category filters and project search
- Centralized TypeScript content for profile, skills, projects, and articles
- Static Next.js export with page metadata, canonical URLs, Open Graph preview, sitemap, robots rules, and a custom 404 page
- CSS-built project visuals with no third-party image dependency

## Tech stack

- Next.js 16 App Router and React 19
- TypeScript
- Tailwind CSS 4 (with a small set of custom styles for the visual system)
- ESLint

## Local development

Install Node.js 20.9 or later, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` while the development server is running.

## Build and checks

```bash
npm run lint
npm run typecheck
npm run build
```

The production build is a static export in `out/`. The project does not need a continuously running Node.js server.

## Add or update a project

Edit `src/data/projects.ts` and add an item to the `projects` array. Provide a unique URL-friendly `slug`, name, description, technologies, category, featured flag, status, and one of the existing CSS preview `visual` types. Case-study sections are optional and should contain only documented project details. Add `githubUrl` or `liveUrl` only when a real destination is available; unprovided links are shown as unavailable labels.

Featured projects are selected from the same data by setting `featured: true`. The project archive, filters, search, case-study routes, and sitemap use the centralized list.

## Update site content

- `src/data/profile.ts`: name, location, contact details, social links, education, and work experience.
- `src/data/skills.ts`: editable skill groups.
- `src/data/projects.ts`: project cards and case-study information.
- `src/data/articles.ts`: add article metadata and paragraphs, then set `published: true` to list it on the writing page. Published notes expand inline; unpublished entries stay hidden.

The email and social links currently come from the supplied resume. Review them in `src/data/profile.ts` before publishing if you want different public details. The contact link uses email and does not submit data to a form service.

## Cloudflare Pages deployment

This portfolio uses Next.js static export (`output: "export"`). Cloudflare documents static Next.js exports for Pages with build command `npx next build` and output directory `out`. No server-side Next.js features or contact backend are required.

1. Create a GitHub repository and push this project (`git init`, add the GitHub remote, then commit and push the `main` branch).
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Import an existing Git repository** and authorize/select the GitHub repository.
3. Select the **Next.js (Static HTML Export)** framework preset. Confirm the build command is `npx next build` and the output directory is `out`.
4. Save and deploy. Cloudflare Pages will build the site on pushes and provide preview deployments for pull requests.
5. In the Pages project, open **Custom domains**, add `maliktaha.me`, and follow Cloudflare’s DNS activation instructions. If the domain is not already on Cloudflare, first add it to the Cloudflare account and update the domain’s nameservers at the registrar when prompted.
6. To make `www.maliktaha.me` point to the primary host, add `www.maliktaha.me` as a custom domain too, then create a Cloudflare Redirect Rule from `https://www.maliktaha.me/*` to `https://maliktaha.me/${1}` with a permanent (301) status and preserve the path and query string. Keep `maliktaha.me` as the only canonical host; page metadata already uses it.

Cloudflare documentation: [Deploy a static Next.js site to Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/) and [Next.js on Cloudflare](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/).

## GitHub connection

This folder is ready to initialize as a Git repository and push to GitHub. After the first push, connect the repository from the Cloudflare Pages dashboard as described above. This workspace did not contain an existing Git repository, so no remote or GitHub account is configured here.

## Customization notes

- Replace the existing CSS project compositions with local images in `public/` when real screenshots are ready. Keep descriptive alt text if an image conveys information.
- The social preview is `public/social-card.png` (editable source: `public/social-card.svg`); the favicon is `public/icon.svg`.
- Edit the typography, colors, and responsive layouts in `src/app/globals.css`.
- If a working contact form is needed later, connect a form provider or backend and add spam protection before replacing the current `mailto:` action.

