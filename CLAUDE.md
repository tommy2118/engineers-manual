# CLAUDE.md -  The Engineer's Manual

> Context document for AI pairing. Read this first.

---

## Project Overview

**What:** A field manual for software engineers. Practical, reference-oriented, available when you need it.

**Why:** Engineers at any point in their journey need guidance that's actionable, not academic. This manual captures hard-won lessons, mental models, and best practices in a format that works under pressure.

**Tone:** The voice in your ear. Bullets flying, ammo is low. Night is coming. You need an answer. Grab the manual.

**Inspiration:** The USAF Airman's Manual -  spiral-bound, fits in your cargo pocket, answers the questions a deployed Airman actually has.

**Author:** Tommy A. Caruso Sr.

---

## The Core Frameworks

### Principle 1: Define Done

Most people don't define "done" before they start. This causes shipping too fast (dopamine-driven) or too slow (undefined finish line).

**The fix:** Write it down. One sentence. "This is done when ___." Check criteria, not feelings.

### Principle 2: Know What's Load-Bearing

**Architecture** = structure of a building (foundation, plumbing, electrical). Hard to change.
**Design** = decoration (wall color, fixtures). Easier to change.

There are no "best practices" for architecture. Each situation is novel. Architecture is about **choosing tradeoffs you can live with**, not finding the right answer.

### Levels of Work

| Level | Size | Job |
|-------|------|-----|
| Problem | Undefined | Discovery → Define Initiative |
| Initiative | Weeks/Months | Decompose → Define Epics |
| Epic | Days/Weeks | P-Cubed → Produce Tasks |
| Task | 1-2 Days | Execute → Ship |

Always identify what level you're working at before you start.

### P-Cubed: Prepare → Prove → Produce

The cycle for executing an Epic.

**Prepare:**
- Discovery: Ask questions, explore, track unknowns
- Surface tradeoffs for architectural decisions
- Plan: Break into 1-2 day Tasks with clear acceptance criteria
- Sequence architectural work first

**Prove:**
- Required for load-bearing decisions, optional for design
- Spike the riskiest assumptions
- Validate tradeoffs in practice

**Produce:**
- Execute tasks: Build → Test → Ship
- Learnings flow up
- Adjust plan as needed

---

## Foundational Beliefs

These inform the content and structure of the manual:

1. **Master your gear.** Know your tools. Maintain them. Know when to use each one.

2. **Find your own answers.** Understand the hierarchy of truth (Specs → Docs → Conventions → Opinions). Know when to ask, when to dig.

3. **Learn from those who came before.** Steel sharpens steel. Don't reinvent the wheel. The veterans have wisdom.

4. **Train the way you fight.** You don't rise to your aspirations, you fall to your training. Your habits ARE your crisis response.

5. **Know yourself.** Your pattern follows you across domains. Know your failure modes. Build guardrails.

---

## Project Requirements

### Hosting
- GitHub Pages
- Static site (no server-side)
- Custom domain ready (future)

### Design Principles (Steve Schoger / Refactoring UI)

- **Hierarchy through spacing and typography**, not just color
- **Make it obvious, not clever** -  this is a reference tool
- **Readability and scannability** -  people grab this under pressure
- **Limit color palette** -  use sparingly for emphasis
- **Generous whitespace** -  let content breathe
- **Strong visual hierarchy** -  clear distinction between levels
- **Mobile-first** -  accessible anywhere

### UX/UI Requirements

This is a **reference tool**. Design for:

1. **Quick lookup** -  find what you need fast
2. **Scannable structure** -  headers, bullets, tables work
3. **Progressive disclosure** -  summary first, details available
4. **Offline-capable** (future) -  PWA consideration
5. **Searchable** -  find by keyword
6. **Bookmarkable** -  deep links to sections
7. **Print-friendly** (future) -  actual manual output

### Aesthetic

- Clean, utilitarian, professional
- Military-inspired without being tacky
- Monospace accents for code/technical content
- Muted color palette with one accent color
- No decoration for decoration's sake

### Modularity

- Easy to add new chapters
- Easy to update existing content
- Content lives in markdown (source of truth)
- Build process transforms markdown → site
- Separation of content and presentation

### Analytics Ready

- Google Analytics or Plausible (privacy-friendly)
- Event tracking capability
- Ready for future monetization consideration
- Newsletter signup capability (future)

---

## Technical Decisions

### Stack
- **Static Site Generator:** 11ty (Eleventy) or Astro
  - Markdown-first
  - Fast builds
  - GitHub Pages compatible
  - Flexible templating
- **CSS:** Tailwind CSS
  - Utility-first matches Schoger's approach
  - Easy to maintain
  - Consistent spacing/typography system
- **Search:** Pagefind or Lunr.js (client-side)
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions (build on push)

### File Structure (Proposed)
```
engineers-manual/
├── CLAUDE.md              # This file
├── README.md              # Project overview
├── content/               # Markdown source files
│   ├── 00-preamble/
│   ├── 01-foundations/
│   ├── 02-the-work/
│   ├── 03-working-with-others/
│   ├── 04-when-things-go-wrong/
│   ├── 05-the-long-game/
│   └── appendices/
├── src/                   # Site source
│   ├── _includes/         # Templates/partials
│   ├── _layouts/          # Page layouts
│   ├── assets/
│   │   ├── css/
│   │   └── js/
│   └── pages/             # Static pages (home, about)
├── public/                # Static assets (images, fonts)
├── .github/
│   └── workflows/         # GitHub Actions
├── package.json
├── tailwind.config.js
└── eleventy.config.js     # or astro.config.mjs
```

### Content Format

Each chapter markdown file:
```markdown
---
title: "Chapter Title"
chapter: 7
part: 2
status: draft | review | published
summary: "One-line summary for navigation"
---

# Chapter Title

> Epigraph or key quote

---

## Section

Content...
```

---

## Coding Standards

### General
- Small, incremental commits
- Trunk-based development
- Every commit should be deployable

### CSS/Tailwind
- Mobile-first responsive
- Use Tailwind's spacing scale consistently
- Extract components when patterns repeat 3+ times
- Semantic class names for JS hooks (js-*)

### JavaScript
- Vanilla JS where possible
- Progressive enhancement
- No JS required for core reading experience

### HTML
- Semantic markup
- Accessible (WCAG AA minimum)
- Valid HTML5

### Markdown
- ATX-style headers (#)
- Reference-style links for repeated URLs
- Tables for structured data
- Fenced code blocks with language hints

---

## Content Guidelines

### Voice
- Direct, no fluff
- Second person ("You") or imperative
- Assume competence, don't over-explain
- Concrete over abstract
- Examples over theory

### Structure
- Lead with the actionable
- Hierarchy: Principle → Why → How → Example
- Quick reference format where applicable
- Cross-reference related sections

### What belongs
- Principles that transfer across contexts
- Mental models that aid decision-making
- Checklists for common situations
- Hard-won lessons (not theory)

### What doesn't belong
- Technology-specific tutorials
- Opinion presented as fact
- Content without a "so what"

---

## Current Status

**Phase:** Scaffolding / Initial Content
**Next:** Set up build system, create base templates, migrate existing content

### Content Status

| Section | Status |
|---------|--------|
| Preamble | Stub |
| Ch 1-5 Foundations | Stub |
| Ch 6 Levels of Work | Draft |
| Ch 7 P-Cubed | Draft (developed) |
| Ch 8 Architecture | Draft (developed) |
| Ch 9 Writing Code | Stub |
| Ch 10-12 Working With Others | Stub |
| Ch 13-15 When Things Go Wrong | Stub |
| Ch 16-17 Long Game | Stub |
| Appendices | Draft |

---

## Commands

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## AI Pairing Notes

When working on this project:

1. **Check what level we're at.** Is this a Problem, Initiative, Epic, or Task?

2. **Define done before starting.** "What does done look like?"

3. **Identify load-bearing decisions.** If it's architectural (site structure, build system, data format), surface tradeoffs and prove before committing.

4. **Follow Schoger's principles** for any design work. Hierarchy through spacing/typography. Obvious over clever.

5. **Content is source of truth.** Markdown files drive everything. The build system transforms them.

6. **Keep it modular.** Easy to add chapters. Easy to update. Separation of concerns.

7. **This is a reference tool.** UX optimizes for quick lookup under pressure, not leisurely reading.

8. **Tommy's pattern:** He builds mental models through doing. Give him room to explore in discovery. Help him define done before execution. Check criteria, not feelings.

---

## Questions to Ask

Before starting work:
- What level is this? (Problem/Initiative/Epic/Task)
- What does done look like?
- Is this load-bearing?
- What are we trading off?

Before shipping:
- Does it meet the acceptance criteria?
- Is it modular/maintainable?
- Does it follow Schoger's principles?
- Is the content voice consistent?

---

## Resources

- [Refactoring UI](https://www.refactoringui.com/) -  Schoger's design principles
- [Tailwind CSS](https://tailwindcss.com/)
- [Eleventy](https://www.11ty.dev/)
- [GitHub Pages](https://pages.github.com/)
- [Pagefind](https://pagefind.app/) -  Static search

---

*Last updated: Session where we built the framework from first principles, starting with Tommy's problem-solving pattern and evolving through P-Cubed to the full manual structure.*
