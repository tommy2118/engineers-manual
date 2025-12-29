---
title: "Architecture vs Design"
chapter: 8
summary: "Know what's load-bearing. Choose tradeoffs you can live with."
---

> Know what's load-bearing.

---

## Why This Matters

Not all decisions are equal. Some you can change tomorrow. Some you'll live with for years.

Treating every decision the same leads to two failure modes:
- **Over-engineering design decisions.** Endless debates about variable names while the schema is a mess.
- **Under-engineering architectural decisions.** "We'll fix it later" for things that can't be fixed later.

Know the difference. Invest accordingly.

---

## The Core Distinction

**Architecture** is like the structure of a building, the foundation, the plumbing, the electrical, the wall layout. Changing it after the fact is expensive or impossible. Everything else depends on it.

**Design** is like the decoration, wall color, flooring, fixtures. Easier to change at later stages. Important, but not load-bearing.

The question to ask: **"What's the cost if this is wrong?"**

- High cost, hard to change → Architecture
- Lower cost, easier to change → Design

---

## Architectural Decisions (Hard to Change)

These are load-bearing. Get them wrong and you'll pay for it, either in expensive rework or in living with the consequences.

**Database schema and data model.** How you structure your data shapes everything built on top of it. Migrations are possible but painful. The wrong model creates friction in every feature.

**Service boundaries.** Where you draw the lines between systems. Too many services, too few, or wrong boundaries each creates its own pain. Changing boundaries means changing contracts, deployments, and team structures.

**Authentication and authorization strategy.** How users prove who they are and what they can do. Fundamental to security. Changing this later touches everything.

**Core abstractions.** The concepts that other code depends on. Once code is built on an abstraction, changing the abstraction means changing everything that uses it.

**Third-party dependencies you'll build on.** Deep integrations create coupling. If you build your workflow around a vendor's API, switching vendors means rewriting the workflow.

**Data flow and state management patterns.** How data moves through your system. Once established, this pattern propagates. Changing it requires changing everything that assumes the old pattern.

---

## Design Decisions (Easier to Change)

These matter, but they're not load-bearing. You can iterate.

**API naming and shape.** Rename an endpoint. Add a field. Deprecate a parameter. Annoying but doable.

**UI components and styling.** Redesign the button. Change the layout. Swap the color scheme. The backend doesn't care.

**Implementation details within a boundary.** How a function works internally. As long as the interface stays stable, refactor freely.

**Configuration and feature flags.** Toggle behavior. Tune parameters. This is designed to change.

**Tooling choices that don't affect the core.** Linters, formatters, CI configuration. Swap them out. Your application won't notice.

---

## There Are No Best Practices

This is important enough to say plainly: **there are no best practices for architecture.**

The phrase "best practice" implies a right answer that applies universally. Architecture doesn't work that way. The variety of constraints makes each situation novel:

- **Team skills and capacity.** A pattern that works for a team of 50 is wrong for a team of 3.
- **Existing technical debt.** What you already have constrains what you can build next.
- **Business timeline.** "Right" at 3 months is different from "right" at 3 years.
- **Scale requirements.** A solution for 100 users is different from one for 10 million.
- **Integration constraints.** What you must connect to limits your options.
- **What you're optimizing for.** Speed to market? Maintainability? Performance? You can't have all three at maximum.

Architecture isn't about finding the right answer. It's about **choosing the tradeoffs you can live with.**

I learned this as a recruiter before I ever wrote code. Matching a candidate to a role isn't finding the perfect fit; it's choosing which constraints matter most.

This candidate has the aptitude but not the timeline. That one has the timeline but needs a waiver. The unit needs the slot filled by end of fiscal year, but the candidate needs six months to finish their degree. There's no right answer. There's only: given these constraints, which tradeoffs can we live with?

The pattern transferred directly to software architecture. Anyone who tells you there's a "best practice" for your architecture either doesn't understand your constraints or is selling something.

---

## Surfacing Tradeoffs

For each architectural option, make the tradeoffs explicit.

**Ask:**
- What does this optimize for?
- What does this make harder?
- What are we giving up?
- What constraints does this create for future work?
- What's the cost to change this later if we're wrong?

**Document the answers.** Not for bureaucracy, for clarity. When someone asks "why did we do it this way?" the answer should be findable.

**Example:**

| Option | Optimizes for | Makes harder | Giving up | Future constraints | Change cost |
|--------|---------------|--------------|-----------|-------------------|-------------|
| Microservices | Team independence, scaling individual components | Local development, debugging, consistency | Simplicity, easy transactions | Must handle distributed systems complexity | High (boundaries are contracts) |
| Monolith | Simplicity, easy refactoring, consistency | Independent scaling, team independence | Flexibility in deployment | Must scale everything together | Medium (can extract services later) |

Neither is "right." Each is a set of tradeoffs.

---

## The Tradeoff Conversation

When you're making an architectural decision, have this conversation:

1. **"What are our options?"** List them. Usually there are 2-4 realistic choices.

2. **"What does each optimize for?"** Be specific. "Flexibility" means nothing. "Ability to swap payment providers without code changes" means something.

3. **"What are we giving up with each?"** This is the hard part. Every choice has a cost. Name it.

4. **"Given our constraints, which tradeoffs can we live with?"** This is the decision. Not "which is best" but "which downsides are acceptable."

5. **"Are we aligned?"** Everyone who'll live with this decision should understand and accept the tradeoffs.

---

## When to Decide

| Aspect | Design Decisions | Architectural Decisions |
|--------|------------------|------------------------|
| **Cost to change** | Low | High |
| **When to decide** | Can defer | Decide early |
| **In Prepare** | Identify patterns | Surface tradeoffs |
| **In Prove** | Optional | Required |
| **In Produce** | Iterate as needed | Commit and build on |

**Defer design decisions.** You'll know more later. Keep options open.

**Make architectural decisions early.** Once you start building on them, they're locked in. Get them right, or at least, get them consciously chosen.

---

## Reversible vs. Irreversible

A useful mental model: **reversible vs. irreversible decisions.**[^1]

[^1]: Jeff Bezos popularized this as "one-way door vs. two-way door" decisions in his 2015 Amazon shareholder letter. Two-way doors (reversible) should be made quickly by individuals; one-way doors (irreversible) deserve careful deliberation.

**Reversible:** You can undo it. Change your mind. Try something else. These should be made quickly. Speed matters more than perfection.

**Irreversible:** You're stuck with it. Or changing it costs so much that you're effectively stuck. These deserve careful thought. Slow down. Validate.

Most decisions are more reversible than they feel. But the architectural ones often aren't.

**Ask:** "If this turns out to be wrong, can we fix it in a week? A month? A quarter? Never?"

That answer tells you how much investment the decision deserves.

---

## Documenting Architectural Decisions

Write it down. Not a novel, a record.

**Architecture Decision Record (ADR):**[^2]

[^2]: ADRs were formalized by Michael Nygard in his blog post "Documenting Architecture Decisions" (2011). The format captures context, decision, and consequences in a lightweight, sustainable way.
- **Context:** What situation are we in?
- **Options considered:** What were the alternatives?
- **Decision:** What did we choose?
- **Tradeoffs:** What are we giving up?
- **Consequences:** What does this mean for future work?

Keep these. When someone asks "why is it like this?" point to the ADR. When you're considering a change, read what past-you was thinking.

---

## Architectural "Done"

Architectural "done" isn't "found the perfect solution." Perfect doesn't exist.

Architectural done is:
- **Tradeoffs are understood.** You know what you're giving up.
- **Decision is defensible given constraints.** You can explain why this choice makes sense for your situation.
- **Reasoning is documented.** Future-you can understand past-you's thinking.
- **Team is aligned on what we're giving up.** No surprises. Everyone knows the downsides.

That's it. You don't need certainty. You need clarity.

---

## Common Mistakes

**Treating design like architecture.** Spending weeks debating API naming conventions while the data model is a guess. Invert the investment.

**Treating architecture like design.** "We'll figure out the auth strategy later." Then building three features that each assume a different auth model. Now you have three problems.

**Seeking the right answer.** There isn't one. There are tradeoffs. Pick ones you can live with.

**Deciding without documenting.** Six months later, no one remembers why. Someone proposes changing it. No one can explain why that's a bad idea. Or a good one.

**Deciding without alignment.** You think the tradeoff is acceptable. Your teammate doesn't. You find out when they're maintaining the consequences.

---

## The Test

Before you finalize an architectural decision, answer:

1. What are we optimizing for?
2. What are we giving up?
3. What's the cost if we're wrong?
4. Is the team aligned?
5. Is the reasoning documented?

If you can answer all five, decide and move on. If you can't, you're not ready.

---

*Know what's load-bearing. Surface the tradeoffs. Choose deliberately. Document why. There are no best practices; only tradeoffs you can live with.*
