# Repository Guidelines

## Project Structure & Module Organization
Eleventy drives the site build, so authored Markdown with YAML front matter lives in numbered folders inside `content/`. Presentation templates, data, and partials sit under `src/` (`_data/` for global JSON data, `_includes/` for layouts, `pages/` for top-level routes, `assets/` for Tailwind inputs). Generated assets land in `_site/`; never edit files there because builds overwrite them, and statically served files that bypass Eleventy belong in `public/`.

## Build, Test, and Development Commands
- `npm install` – install Node 20 dependencies; run `nvm use` to match `.nvmrc`.
- `npm run dev` – concurrently watch Eleventy and Tailwind at `http://localhost:8080`.
- `npm run build` – run Tailwind minification, Eleventy compilation, and Pagefind indexing; this is what CI/CD should call.
- `npm run preview` – serve the contents of `_site/` to spot-check the production bundle locally.

## Coding Style & Naming Conventions
Markdown files should stay concise, use sentence-case headings, and prefer ordered lists for stepwise instructions. Follow kebab-case filenames with numeric prefixes (e.g., `01-foundations/mental-models.md`) to keep sections sorted. Tailwind lives in `src/assets/css/main.css`; keep utility-first classes and avoid ad-hoc CSS unless extracted into components. Eleventy data/layout files stay in ESM modules (`export default`).

## Testing Guidelines
The repo has no automated tests today, so treat `npm run build` as the gate—it surfaces Eleventy errors, broken includes, and Tailwind compilation issues. Before submitting, run `npm run preview` and manually exercise critical routes plus search output in `_site/pagefind/`. If you add custom collections or filters, add a sample page under `src/pages/` that references them so regressions are easy to spot visually.

## Commit & Pull Request Guidelines
The distributed archive lacks Git history, but mirror the existing style: short, imperative subjects (`Add tailwind typography plugin`), optional body paragraphs wrapping at ~72 chars, and reference issues with `Refs #123` when applicable. Pull requests should describe the change, highlight impacted sections or assets, include screenshots for layout work, and note any manual verification steps (build, preview). Link to relevant manual chapters when altering shared guidance so reviewers understand the narrative impact.

## Security & Configuration Tips
Use the Node version pinned in `.nvmrc` to avoid Tailwind or Eleventy incompatibilities. Do not commit secrets; the site is static and should rely solely on checked-in content. When adding third-party scripts or fonts, route them through `public/` and document the rationale in the PR so future maintainers can audit external dependencies.
