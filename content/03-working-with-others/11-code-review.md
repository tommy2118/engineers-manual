---
title: "Code Review"
chapter: 11
summary: "Giving and receiving feedback on code."
---

> Giving and receiving feedback on code.

---

## Why Code Review

Code review isn't about finding bugs. Well, it is, but that's not the main point.

Code review is about:
- **Shared ownership.** More than one person knows how the code works.
- **Knowledge transfer.** The reviewer learns something. The author learns something.
- **Catching blind spots.** Fresh eyes see what tired eyes miss.
- **Maintaining standards.** The team agrees on what good looks like.

A codebase without code review becomes a collection of individual styles and private knowledge. A codebase with good code review stays coherent.

---

## Giving Reviews

You're not just looking for bugs. You're trying to make the code better and help the author grow.

### What to Look For

**Does it work?**
- Does it meet the acceptance criteria?
- Does it handle edge cases?
- Are there obvious bugs?

**Is it correct?**
- Is the logic sound?
- Are the assumptions valid?
- Will it behave correctly under load, concurrency, failure?

**Is it maintainable?**
- Will the next person understand it?
- Is it tested?
- Does it follow the patterns established in this codebase?

**Is it appropriate?**
- Is this the right level of complexity for the problem?
- Are the tradeoffs reasonable?
- Is it over-engineered? Under-engineered?

**Is it load-bearing?**
- Architectural decisions get extra scrutiny
- Is this creating constraints we'll regret?
- Are the implications understood?

### What Not to Look For

**Style issues the linter should catch.** If it passes the linter, don't nitpick formatting. Automate that.

**Personal preferences that don't matter.** "I would have done it differently" isn't feedback unless the different way is actually better.

**Perfection.** Good enough is good enough. Don't block a PR for marginal improvements.

### How to Give Feedback

**Be specific.** Point to the line. Name the concern. Don't say "this is confusing"; say "I don't understand what happens when X is null."

**Explain why.** Not just "don't do this" but "this could cause Y because Z."

**Suggest alternatives.** If you're pointing out a problem, offer a solution. Or at least a direction.

**Ask questions instead of making demands.** "What happens if X?" invites dialogue. "Change this to Y" shuts it down. Questions assume you might be missing context. Demands assume you're right.

**Distinguish severity.** Not all comments are equal:
- **Blocking:** Must fix before merge. Bugs, security issues, architectural problems.
- **Should fix:** Strong suggestion. Will improve the code. But not a blocker.
- **Nit:** Minor. Take it or leave it. Stylistic preferences.

Label them. "Nit: could rename this for clarity" is different from "Bug: this will crash when..."

**Praise good work.** If something is well done, say so. "Nice abstraction here" costs nothing and reinforces good patterns.

### The Tone

**Assume the author is competent.** They made choices for reasons. Maybe good reasons. Ask before assuming bad.

**Be kind, not nice.** Kind means honest feedback that helps them grow. Nice means avoiding hard truths. Be kind.

**Review the code, not the person.** "This function is hard to follow" not "You wrote confusing code."

**Remember the goal.** Ship better software. Help the team. Not prove you're smart.

---

## Receiving Reviews

Getting feedback on your code can feel personal. It isn't. Learning to receive reviews well is a skill.

### The Mindset

**The code is not you.**[^1] Criticism of the code is not criticism of you as a person or engineer.

[^1]: Gerald Weinberg introduced "egoless programming" in *The Psychology of Computer Programming* (1971). Separating your identity from your code is foundational to receiving feedback well.

**The reviewer is trying to help.** Assume good intent. They're spending their time to make your code better.

**You're going to learn something.** Maybe they're right and you'll improve. Maybe they're wrong and you'll clarify your thinking. Either way, value.

### How to Receive

**Read carefully.** Don't skim. Don't get defensive. Actually understand what they're saying.

**Ask for clarification.** If you don't understand the feedback, say so. "Can you explain what you mean by X?" is always valid.

**Respond to everything.** Even if just "Done" or "Good point." Don't leave comments hanging.

**Thank the reviewer.** They spent time on your code. Acknowledge it.

### When to Push Back

You don't have to accept every piece of feedback. Sometimes the reviewer is wrong. Sometimes they're missing context.

**Explain your reasoning.** "I did it this way because X. Does that change your thinking?"

**Provide context they might not have.** "This is intentional because of the constraint from Y."

**Propose alternatives.** "I see your concern. What about Z instead?"

**Know when to defer.** If it's a matter of preference and the reviewer feels strongly, sometimes it's not worth the fight. Pick your battles.

**Know when to escalate.** If you fundamentally disagree on something important, get another opinion. Don't let it fester.

### What Not to Do

**Don't take it personally.** Even if the feedback is blunt. Focus on the code.

**Don't get defensive.** "But it works" isn't a response to "this is hard to understand."

**Don't ignore feedback.** If you disagree, say why. Don't just not do it and hope no one notices.

**Don't rush to resolve.** Take time to think about the feedback. Maybe sleep on it.

---

## The Review Process

### Before You Submit

**Self-review first.** Read your own diff. Catch the obvious stuff before someone else has to.

**Keep it small.** Smaller PRs get better reviews. Hundreds of lines of changes? No one can review that well. Break it up.

**Provide context.** What does this change? Why? What should the reviewer focus on? Make their job easier.

**Make sure it's ready.** Tests pass. Lint passes. You've addressed known issues. Don't waste reviewer time on unfinished work.

### The Review Itself

**Timely reviews matter.** Don't let PRs sit. Blocked PRs block people. Review within a day if possible.

**One pass isn't always enough.** Big changes might need multiple rounds. That's fine.

**Don't approve what you don't understand.** If you can't follow the code, say so. "I don't understand this well enough to approve" is valid.

**LGTM means something.** "Looks Good To Me" means you've actually reviewed it and believe it's ready to merge. Not "I glanced at it."

**Approval means you can maintain it.** When you approve, you're saying: "I understand this well enough that I could own it if the author were unavailable." If you couldn't debug this at 2 AM, don't approve it.

### After the Review

**Merge promptly once approved.** Don't let approved PRs sit. Merge conflicts accumulate.

**Follow up on learnings.** If the review revealed a knowledge gap, fill it. If it revealed a process problem, fix it.

---

## Common Patterns

### The Drive-By Review

Comments on one file while ignoring the rest. Not helpful. If you're reviewing, review the whole thing.

### The Style Police

Nitpicking formatting and naming while missing actual issues. Get a linter. Focus on substance.

### The Silent Approval

"LGTM" with no comments. Did you actually review it? Some PRs are genuinely fine as-is. Many aren't.

### The Nitpick Storm

Dozens of minor comments, none of them blocking. Overwhelming. Group minor feedback. Focus on what matters.

### The Rewrite Request

"I would have done this completely differently." Maybe, but that's not what's being reviewed. Is this code acceptable? Can it ship?

### The Ghost Reviewer

Assigned but never reviews. Holding up the team. If you can't review, say so. Unassign yourself.

---

## Making It Work

**Agree on standards.** What does your team look for? What's blocking vs. non-blocking? Write it down.

**Automate what you can.** Linting, formatting, basic checks. Don't waste human attention on what machines can catch.

**Rotate reviewers.** Don't let knowledge concentrate. Everyone should review everything sometimes.

**Review promptly.** Reviews that take days break flow and create merge conflicts.

**Keep it constructive.** The goal is better code and better engineers. Everything else is secondary.

---

*Review to help, not to prove. Receive to learn, not to defend. The goal is better code, shipped.*
