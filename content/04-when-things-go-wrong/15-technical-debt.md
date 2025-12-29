---
title: "Technical Debt"
chapter: 15
summary: "Recognizing it, paying it down, living with it."
---

> Recognizing it, paying it down, living with it.

---

## The Metaphor

Ward Cunningham coined the term.[^1] Like financial debt, technical debt lets you move faster now at the cost of paying interest later.

[^1]: Ward Cunningham first described the debt metaphor in his 1992 OOPSLA paper "The WyCash Portfolio Management System." He later clarified that he meant the debt of shipping code before fully understanding the domain, not the debt of writing bad code intentionally.

Take out a loan to buy a house, you can move in today instead of saving for years. But you'll pay interest on that loan for decades.

Ship a quick solution to meet a deadline, you move faster now. But you'll pay interest every time you touch that code; slower changes, more bugs, more friction.

**The metaphor is useful but imperfect.** Financial debt is precise; you know exactly what you owe. Technical debt is fuzzy. You don't always know you have it until it hurts.

---

## What Is Technical Debt

The implied cost of future rework caused by choosing an expedient solution now instead of a better approach that would take longer.

**It's the gap between what you built and what you should have built.**

Some examples:
- A workaround that got the feature out the door
- Missing tests that make changes risky
- Copy-pasted code instead of a proper abstraction
- A schema that doesn't quite fit the domain
- Documentation that doesn't exist
- Dependencies that haven't been updated

**Not all debt is bad.** Sometimes taking on debt is exactly the right call. Ship the MVP. Learn what users actually need. Then build it right.

The problem isn't debt itself. The problem is unmanaged debt that compounds until the system becomes unmaintainable.

---

## Types of Debt

### Deliberate vs. Accidental

**Deliberate debt:** You know you're taking on debt. You make a conscious choice. "We're skipping these tests to hit the deadline. We'll add them next sprint."

**Accidental debt:** You didn't know you were creating debt. You thought it was fine. Later you realize it wasn't.

Deliberate debt is manageable. Accidental debt is dangerous; it accumulates invisibly until it becomes a crisis.

### Prudent vs. Reckless

**Prudent debt:** Reasonable tradeoff given constraints. "We don't have time to build the ideal solution. This approach is good enough for now and we can improve it later."

**Reckless debt:** No good reason. Just didn't do it right. "I know how to do this properly but I can't be bothered."

Prudent debt is strategic. Reckless debt is just mess.

### The Quadrant

Martin Fowler's technical debt quadrant[^2] classifies debt along two dimensions:

|  | Deliberate | Accidental |
|--|-----------|------------|
| **Prudent** | "We're shipping now, we'll fix it later" | "Now we know how we should have done it" |
| **Reckless** | "We don't have time for tests" | "What's a design pattern?" |

Aim for prudent-deliberate. Learn from prudent-accidental. Avoid reckless entirely.

[^2]: Martin Fowler, "Technical Debt Quadrant," blog post, October 2009. The quadrant helps distinguish between strategic debt and simple negligence.

---

## Recognizing It

Debt hides. It accumulates in dark corners. You don't see it until you step on it.

### The Signs

**"Don't touch that, it'll break."** Areas of the codebase that everyone avoids. Tribal knowledge about what's fragile.

**Simple changes take days.** Something that should be trivial requires understanding five interconnected systems and touching twelve files.

**Fear of modification.** Engineers are scared to change certain code. They work around it instead of through it.

**Copy-paste everywhere.** The same logic duplicated across the codebase because no one has time to extract a proper abstraction.

**Slow, flaky, or missing tests.** The test suite takes hours. Or tests randomly fail. Or large areas have no tests at all.

**Onboarding takes forever.** New engineers need months to be productive because nothing is documented and everything is a special case.

**"We'll fix it later" tickets that never get fixed.** A backlog full of cleanup work that never gets prioritized.

### The Cost

Debt has costs, even when you're not paying it down:

**Velocity tax.** Everything takes longer than it should. New features drag because you're working around old problems.

**Bug rate.** Debt-laden code produces more bugs. Missing tests mean bugs ship. Complex code means bugs hide.

**Onboarding cost.** New engineers spend time learning workarounds instead of building features.

**Morale cost.** Engineers don't want to work in a mess. The best ones leave. The ones who stay get frustrated.

**Opportunity cost.** Time spent fighting debt is time not spent building value.

---

## The Debt Register

You can't manage what you don't track.

### Making It Visible

**Create a debt register.** A list of known technical debt with descriptions, locations, and estimated cost to fix.

**Tag it in code.** `# TODO(tech-debt): ...` comments that can be searched. Make the debt findable.

**Track it in your backlog.** Tickets for debt work, even if they're not prioritized yet. At least it's visible.

**Include it in estimates.** When estimating feature work, account for the debt tax. "This would take 2 days if the code was clean. It'll take 5 because of the state of the authentication module."

### Categorizing Debt

**By severity:**
- **Critical:** Actively causing problems. Security issues. Production incidents.
- **High:** Slowing us down significantly. Major velocity tax.
- **Medium:** Annoyance but manageable. Localized mess.
- **Low:** Cosmetic. Nice to fix but not urgent.

**By area:**
- Where in the codebase?
- Which team owns it?
- What features does it affect?

**By age:**
- How long has it been there?
- Is it getting worse?

---

## Paying It Down

Debt doesn't pay itself. You have to allocate time and attention.

### Interest Payments

Small improvements alongside feature work. The campsite rule: leave the code better than you found it.

**When you touch the code:**
- Fix the small thing while you're there
- Add the missing test for the code you're modifying
- Rename the confusing variable
- Extract the duplicate code

**The rule:** If you can fix it in less than 15 minutes, fix it now. If it takes longer, add it to the register.

### Principal Payments

Dedicated time to address larger debt. This requires prioritization and commitment.

**Approaches:**

**Percentage of capacity.** Reserve 20% of each sprint for debt work. Non-negotiable.

**Dedicated sprints.** Periodically, an entire sprint focused on debt reduction. "Tech debt week."

**Debt-first features.** When building new features, budget time to clean up the areas you'll touch first.

**The strangler pattern.**[^3] Build new, clean implementations alongside old ones. Gradually migrate. Eventually remove the old.

[^3]: Martin Fowler named the Strangler Fig Application pattern after the strangler fig tree, which grows around a host tree and eventually replaces it. See "Strangler Fig Application," martinfowler.com, 2004.

### Prioritizing

You can't fix everything. Prioritize ruthlessly.

**By impact:** What debt is costing you the most? Fix that first.

**By risk:** What debt is most likely to cause an incident? What has security implications?

**By leverage:** What debt, if fixed, would unblock other improvements?

**By proximity:** What debt is in areas you're actively working on anyway?

The worst debt to fix is debt in code you never touch. It has no impact. Leave it alone.

---

## Living With It

You will never have zero debt. The goal isn't elimination; it's management.

### Accepting Reality

**Some debt isn't worth fixing.** If you're not touching that code, the debt isn't costing you much. Leave it.

**Some debt is fine.** The quick solution that shipped on time and hasn't caused problems? Maybe that was the right call.

**Perfection isn't the goal.** Working software that ships is better than perfect software that doesn't exist.

### Managing, Not Eliminating

**Know where the debt is.** Map it. Understand it. Don't let it surprise you.

**Know what it's costing you.** Quantify when you can. "This area adds 2 days to any feature that touches it."

**Make deliberate choices.** Don't ignore debt. Decide: fix it now, fix it later, or live with it. A conscious choice is fine. Drift is not.

**Don't let it block critical work.** If debt is preventing you from shipping important features or responding to incidents, that debt just became critical.

### Containing Debt

When you can't eliminate debt, contain it.

**Wrapper interfaces.** Put a clean interface around messy code. The mess is still there, but it's isolated.

**Clear boundaries.** Document what's clean and what's not. New code stays clean.

**Avoid spreading it.** Don't let debt patterns propagate. When you add new code, don't copy the bad patterns.

---

## Deliberate Debt

Sometimes taking on debt is the right strategic choice.

### When to Take On Debt

**Time-sensitive opportunity.** There's a window. If you miss it, the opportunity is gone. Ship now, fix later.

**Learning and discovery.** You don't know what you need yet. Build something quick. Learn. Throw it away and build it right.

**Throwaway code.** A demo. A prototype. A spike. Code that genuinely won't ship to production.

**Survival mode.** The company will die if you don't ship. Ship. Survive. Fix later.

### The Discipline

**Be explicit.** Say out loud: "We are taking on debt here. This is what we're trading off."

**Document it.** Write it down. In the code. In the ticket. In the debt register. Don't let it become invisible.

**Plan to pay it back.** When will you fix this? What's the trigger? Don't just say "later"; say when.

**Actually pay it back.** This is where most teams fail. The debt gets taken on, never paid back. Follow through.

### The Warning Signs

**"We'll fix it later" never happens.** If your team has a pattern of taking on debt and never paying it back, stop taking on debt.

**Debt is your default.** You're always taking shortcuts. That's not strategic debt; that's reckless development.

**You've lost track.** You don't know how much debt you have or where it is. Time to stop and assess.

---

## Talking About Debt

Technical debt is a useful metaphor for communicating with non-technical stakeholders.

### For Product Managers

"If we ship it this way, we're taking on technical debt. That means future features in this area will take longer. Is the speed now worth the slower velocity later?"

### For Executives

"We have accumulated technical debt that's slowing us down by approximately 30%. If we don't address it, that number will grow. I recommend we invest 20% of our capacity in paying it down."

### For Your Team

"This area has significant debt. Before we build the new feature, let's spend a day cleaning up. It'll make the feature work go faster and improve the codebase."

---

## The Balance

Debt is a tool. Like any tool, it can be used well or poorly.

**Too much debt:** The codebase becomes unmaintainable. Velocity drops to near zero. Good engineers leave. Eventually you rewrite or die.

**Too little debt:** You over-engineer everything. You never ship. Competitors beat you to market. Perfect code that no one uses.

**The balance:** Deliberate debt, taken on strategically, paid back consistently, tracked and managed like the liability it is.

---

*Recognize it. Track it. Pay it down deliberately. Live with what you must. Technical debt is not inherently bad; unmanaged technical debt is. Manage yours.*
