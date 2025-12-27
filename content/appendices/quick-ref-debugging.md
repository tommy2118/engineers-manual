---
title: "Quick Reference: Debugging"
order: 3
type: quick-ref
---


> Find it. Fix it. Verify it.

---

## The Methodology

1. **Reproduce it.** If you can't reproduce it, you can't fix it with confidence.
2. **Isolate it.** Narrow down where the problem is.
3. **Understand it.** Know why it's happening before you fix it.
4. **Fix it.** Smallest change that addresses root cause.
5. **Verify it.** Confirm fix works. Confirm nothing else broke.

---

## Reproducing the Problem

- [ ] What are the exact steps?
- [ ] What's the environment?
- [ ] Is it consistent or intermittent?
- [ ] Can you write a failing test?
- [ ] What data/state is required?

---

## Isolating the Problem

- [ ] What changed recently?
- [ ] Where does it work? Where does it fail?
- [ ] Can you simplify the reproduction case?
- [ ] Binary search: eliminate half the possibilities at a time

---

## Before You Touch the Code

- [ ] Read the error message. All of it.
- [ ] Check the logs.
- [ ] Check recent changes (git log, deploy history).
- [ ] Search for similar issues.

---

## When You're Stuck

- [ ] What assumptions are you making?
- [ ] Can you verify each assumption?
- [ ] Take a break. Fresh eyes.
- [ ] Explain the problem out loud (rubber duck).
- [ ] Ask someone else to look.

---

## After You Fix It

- [ ] Does the fix address the root cause?
- [ ] Did you write a test for it?
- [ ] Are there other places this could happen?
- [ ] What can you do to prevent this class of bug?

---

## The Mindset

- Assume nothing
- Verify everything
- The bug is always in the last place you look, so look there first
