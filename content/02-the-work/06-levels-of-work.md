---
title: "Levels of Work"
chapter: 6
summary: "Problem, Initiative, Epic, Task. Know what you've been handed."
---

> Know what you've been handed before you start working.

---

## Why This Matters

Someone hands you work. You start working. Three days later, you realize you're solving the wrong problem at the wrong level.

This happens constantly. Someone says "fix the performance issue" and you start optimizing queries. But the actual problem was architectural—no amount of query optimization will fix it. You were handed a Problem and treated it like a Task.

Or the reverse: someone hands you a Task—"add a loading spinner here"—and you redesign the entire state management system. You were handed a Task and treated it like an Epic.

**Before you start working, know what you've been handed.**

---

## The Levels

| Level | Size | Your Job |
|-------|------|----------|
| Problem | Undefined | Discovery → Define Initiative |
| Initiative | Weeks/Months | Decompose → Define Epics |
| Epic | Days/Weeks | P-Cubed → Produce Tasks |
| Task | 1-2 Days | Execute → Ship |

Work flows down. Learnings flow up.

---

## Problem

*"Conversion is dropping." "The system can't scale." "We're losing to competitors."*

You've been handed a problem to solve. No defined solution. No clear objective yet. You need to figure out what success looks like before you can plan anything.

**Your job:** Discovery. Understand the problem. Define what winning looks like. Then you have an Initiative.

**Signs you're at this level:**
- No one has defined what "solved" looks like
- Multiple possible approaches exist
- You're not sure what to build yet
- The request is a symptom, not a solution

**What to do:**
- Ask questions. Lots of them.
- Understand the real problem, not just the presented symptom
- Define success criteria
- Explore the solution space before committing
- Output: a clear Initiative with defined objectives

**The trap:** Jumping straight to solutions. "Conversion is dropping" doesn't mean "rebuild the checkout flow." It means figure out why conversion is dropping, then decide what to do about it.

---

## Initiative

*"Migrate to the new platform by Q1." "Launch self-serve onboarding." "Reduce churn by 30%."*

The objective is defined. This is your thesis on how to solve the Problem. It's too big to execute directly—weeks or months of work.

**Your job:** Break it into Epics. Each Epic advances the Initiative. Together, they achieve the objective.

**Signs you're at this level:**
- Clear objective, but multiple major workstreams
- Weeks or months of work
- Requires coordination across teams or systems
- Success depends on multiple things going right

**What to do:**
- Identify the major milestones
- Sequence them (what depends on what?)
- Define Epics that deliver meaningful progress
- Each Epic should be independently valuable if possible
- Output: a set of Epics with clear dependencies

**The trap:** Treating it like one big Epic. Initiatives are too big to plan in detail. Break them down first.

---

## Epic

*"Build the authentication system." "Complete the data migration." "Launch the pilot program."*

A major phase of the Initiative. Delivers a meaningful milestone. Still too big for a single work cycle, but small enough to plan.

**Your job:** Run P-Cubed. Prepare, Prove, Produce. Your planning phase produces Tasks.

**Signs you're at this level:**
- Days to weeks of work
- Delivers a complete, usable capability
- Can be planned in detail
- Has clear acceptance criteria

**What to do:**
- Run discovery (Prepare)
- Validate load-bearing decisions (Prove)
- Break into Tasks and execute (Produce)
- Output: shipped capability, learnings for the Initiative

**The trap:** Skipping Prepare and Prove. Epics are big enough that mistakes are expensive. Do the upfront work.

---

## Task

*"Map the user data schema." "Build the import script." "Fix the SSO redirect bug."*

A specific action. 1-2 days of focused work. Clear acceptance criteria. This is where the work happens.

**Your job:** Execute. Ship.

**Signs you're at this level:**
- Clear, specific action
- 1-2 days maximum
- You know what "done" looks like
- Minimal unknowns

**What to do:**
- Confirm acceptance criteria before starting
- Do the work
- Ship it
- Move to the next Task

**The trap:** Gold-plating. Tasks are small. Do the thing and move on. If you find yourself expanding scope, you've discovered a new Task—write it down and finish this one first.

---

## Identifying What You've Been Handed

When work lands on your desk, ask:

1. **Is the objective defined?** If not, you have a Problem.
2. **Is it weeks/months of work?** You have an Initiative.
3. **Is it days/weeks with multiple parts?** You have an Epic.
4. **Is it 1-2 days with clear criteria?** You have a Task.

**The confusion happens when:**
- A Problem is presented as a Task ("just fix the performance")
- An Epic is presented as a Task ("add user authentication")
- A Task is expanded into an Epic ("while you're in there, maybe we should...")

**Clarify before you start.** "What does done look like?" gets you 80% of the way there.

---

## Work Flows Down, Learnings Flow Up

The hierarchy isn't just for planning. It's for learning.

**Down:** Problems become Initiatives. Initiatives become Epics. Epics become Tasks. Each level adds detail and specificity.

**Up:** Tasks produce learnings. Learnings inform Epics. Epics validate or invalidate Initiative assumptions. Initiative outcomes reveal whether you solved the Problem.

**This means:**
- Don't wait until the Initiative is done to learn. Learn at every level.
- A failed Task might reveal a flaw in the Epic plan.
- A completed Epic might show the Initiative thesis was wrong.
- That's fine. Adjust. The goal is solving the Problem, not executing the plan.

---

## Decomposition

Breaking big things into small things is a skill. It's also where most planning goes wrong.

**Good decomposition:**
- Each piece is independently valuable (when possible)
- Each piece has clear acceptance criteria
- Dependencies are explicit
- Pieces are roughly similar in size

**Bad decomposition:**
- Pieces that can't be shipped independently
- Vague criteria ("make it better")
- Hidden dependencies that block everything
- One huge piece and several trivial ones

**The test:** Can you explain each piece to someone else and have them execute it? If not, decompose further.

---

## The Anti-Patterns

**Premature decomposition:** Breaking things down before you understand them. You end up with a beautiful plan for the wrong thing.

**Infinite decomposition:** Breaking Tasks into sub-Tasks into sub-sub-Tasks. If a Task is more than 2 days, it's an Epic. If it's less than a few hours, it's a step—just do it.

**Level confusion:** Executing at the wrong level. Treating a Problem like a Task (jumping to solutions). Treating a Task like a Problem (over-analyzing).

**Skipping levels:** Going from Problem straight to Tasks without defining the Initiative or Epics. You'll ship a lot of code that doesn't solve the problem.

---

## The First Question

Before you start any work, ask: **"What level is this?"**

Then work at that level. Not the level above. Not the level below. That level.

Problems need discovery. Initiatives need decomposition. Epics need P-Cubed. Tasks need execution.

Match the work to the level. Everything else follows.

---

*Know what you've been handed. Work at the right level. Break it down until it's small enough to ship.*

