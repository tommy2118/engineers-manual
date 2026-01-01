# The Engineer's Manual

**[engineers-manual.com](https://engineers-manual.com)**

> A field manual for software engineers. Military metaphors throughout: the voice in your ear when things are going sideways. Take what helps. Leave what doesn't.

---

## What This Is

A decade in tech, reinforced by two decades of military experience, distilled into a field manual. Not theory. Tactics. The kind of guidance that helps you bootstrap, calibrate, and stay out of ditches you don't need to visit yourself.

Use it like a reference. Start where you are. Skip what you already know. Come back when you're stuck or when the stakes are high.

---

## Structure

| Part | Chapters |
|------|----------|
| **Preamble** | Foundation, The Profession |
| **Part 1: Foundations** | Master Your Gear, Find Your Own Answers, Learn From Veterans, You Fight How You Train, Know Yourself |
| **Part 2: The Work** | Levels of Work, P-Cubed, Architecture vs Design, Writing Code, Operability |
| **Part 3: Working With Others** | Communication, Code Review, Pairing |
| **Part 4: When Things Go Wrong** | Debugging, Incidents, Technical Debt |
| **Part 5: The Long Game** | Learning, Teaching |
| **Appendices** | Reading Routes, Templates, The Canon, Glossary, Quick References, Bibliography |

---

## Running Locally

```bash
# Install dependencies
npm install

# Run dev server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site runs at `http://localhost:8080` in development.

---

## Tech Stack

- **[Eleventy 3.0](https://www.11ty.dev/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Pagefind](https://pagefind.app/)** - Static search
- **[GitHub Pages](https://pages.github.com/)** - Hosting
- **markdown-it-anchor** - Heading anchors
- **markdown-it-footnote** - Footnote support

---

## Content

All content lives in `content/` as Markdown files. Each chapter has frontmatter:

```yaml
---
title: "Chapter Title"
chapter: 1
part: 1
summary: "One-line summary"
---
```

The build process transforms Markdown into the final site. Content is the source of truth.

---

## Key Concepts

**The Triptych**: Calibration (who to trust), Feedback (who tells you truth), Orientation (what you're aiming at).

**P-Cubed**: Prepare, Prove, Produce. The cycle for executing work.

**Architecture vs Design**: Load-bearing decisions (hard to change) vs decorative decisions (easy to change). There are no best practices for architecture. Only tradeoffs.

**Reading Routes**: Guided paths through the manual for different roles and situations.

---

## Contributing

This is a personal project, but suggestions are welcome. Open an issue for:
- Factual errors
- Broken links
- Unclear explanations
- Missing topics that fit the manual's scope

---

## Author

**Tommy A. Caruso Sr.**

MSgt, USAF (Ret.) turned software engineer. The frameworks here emerged from real projects, real failures, and the pattern recognition that comes from solving problems across domains.

---

## License

Content is copyright Tommy A. Caruso Sr. All rights reserved.

Code (templates, build configuration) is MIT licensed.
