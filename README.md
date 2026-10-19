# Aster — Skin Clinic Website

**Live site: [https://ziahgg.github.io/aster/](https://ziahgg.github.io/aster/)**

Responsive one-page website for **Aster**, a consultation-first skin clinic, built from the Figma design
(`ziahdesign` → Skin Clinic → *Skin Clinic Homepage — Desktop*, node `116:44772`, plus the 390px Mobile frame).

Built with Vite, React, TypeScript and Tailwind CSS v4. Fonts: Geist (self-hosted via `@fontsource/geist-sans`).
Images and icons are the original assets exported from the Figma file.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build     # type-check + production build into dist/
npm run lint
npm run preview   # serve the production build locally
```

## Structure

- `src/sections/` — one component per page section (Header, Hero, TrustBar, Treatments, Concerns, About,
  Specialists, Journey, Clinic, Results, Faq, Booking, Footer)
- `src/components/` — shared UI (`Icon`, `Button`, `Eyebrow`, `SectionHeader`, `Logo`, …)
- `src/index.css` — design tokens (colours, type scale) from the Figma file
- `src/assets/images/` — original design imagery

Bracketed text such as `[Clinic phone number]` is placeholder copy from the design. Replace it with verified
clinic details before launch. The booking widget is an interactive preview and is not connected to a booking system.

## Deploy to GitHub Pages

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. The base path is taken from the
repository name at build time (`BASE_PATH=/<repo>/`), so it does not need to be hard-coded.

1. Create the GitHub repository and push this project to its `main` branch.
2. In the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. The site is published at `https://<owner>.github.io/<repo>/`.
