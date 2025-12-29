---
title: "Quick Reference: Tradeoffs"
order: 11
type: quick-ref
---


> For architectural decisions. Ask before you commit.

---

## The Core Question

**"What are we giving up, and can we live with it?"**

---

## For Each Option

- [ ] What does this optimize for?
- [ ] What does this make harder?
- [ ] What are we giving up?
- [ ] What constraints does this create for future work?
- [ ] What's the cost to change this later if we're wrong?

---

## Identifying Load-Bearing Decisions

**Ask:**
- What's hard to change after we build on top of it?
- What are we committing to that constrains future options?
- Where are we choosing between fundamentally different approaches?

---

## Common Architectural Decisions

- Data model and schema design
- Service/module boundaries
- Authentication and authorization approach
- Third-party dependencies (deep integrations)
- Core abstractions other code will depend on
- Data flow and state management patterns

---

## Common Design Decisions (Easier to Change)

- API naming and shape
- UI components and styling
- Implementation details within a boundary
- Configuration and feature flags
- Tooling choices that don't affect the core

---

## Architectural "Done" Checklist

- [ ] Tradeoffs are understood
- [ ] Decision is defensible given constraints
- [ ] Reasoning is documented
- [ ] Team is aligned on what we're giving up

---

## Remember

There's no "right answer." There's no "best practice." There's only: **tradeoffs you can live with, chosen deliberately.**
