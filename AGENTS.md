# Repository Guidelines

## Project Structure & Module Organization
Eleventy owns the build, so source content lives in numbered folders under `content/` to preserve the reading order. Templates, layouts, and helpers stay under `src/` (`_data/` for global JSON, `_includes/` for layouts and shortcodes, `pages/` for routed entries, `assets/` for Tailwind inputs). Build artifacts land in `_site/`; treat it as disposable. Anything that should bypass Eleventy, like favicons or JS bundles from external tools, belongs in `public/`.

## Build, Test, and Development Commands
- `npm install`: install dependencies after running `nvm use` to honor `.nvmrc`.
- `npm run dev`: start Eleventy and Tailwind watchers at `http://localhost:8080` for live edits.
- `npm run build`: run Tailwind minification, Eleventy compilation, and Pagefind indexing; mirror what CI will do.
- `npm run preview`: serve `_site/` for a production-like audit before sharing changes.

## Coding Style & Naming Conventions
Write Markdown in a direct voice, keep headings in sentence case, and prefer ordered lists when describing procedures. File paths stay in kebab-case with numeric prefixes (`02-the-work/architecture.md`) so sections stay sorted. Tailwind lives in `src/assets/css/main.css`; favor utility classes over bespoke CSS unless you are extracting a reusable component. All Eleventy helpers stick with ESM (`export default`) and avoid implicit globals.

## Testing Guidelines
There is no formal test suite, so `npm run build` is the guardrail that reveals Eleventy template issues, missing data, or Tailwind conflicts. After a clean build, run `npm run preview` and click through the core sections plus search results to confirm `_site/pagefind/manifest.json` exists. When adding collections or filters, drop a representative page in `src/pages/` that exercises the new logic so regressions are obvious.

## Commit & Pull Request Guidelines
History is distributed, so keep commits short, imperative, and scoped (`Add incident checklist`). Wrap body text near 72 characters and call out related issues with `Refs #123` when needed. Pull requests should describe the intent, list affected sections or assets, link to any preview URLs or screenshots for visual work, and note the local commands you ran.

## Security & Configuration Tips
Stay on the Node version pinned in `.nvmrc` to avoid Eleventy or Tailwind surprises. Never commit secrets; the site is static and should only ship checked-in assets. If you must add a third-party script or font, route it through `public/`, document the dependency in the PR, and explain why it is worth the weight.
