---
title: "Know Yourself"
chapter: 5
summary: "Your pattern follows you. Know your failure modes."
---

> Your pattern follows you. It doesn't care what domain you're in.

---

## The Pattern That Follows You

You have a way of approaching problems. A pattern. It's been with you longer than you realize.

The way you debug code is the way you troubleshoot a car. The way you plan a project is the way you plan a trip. The way you learn a new framework is the way you learn anything.

This pattern transferred from domain to domain before you were an engineer. It will follow you to whatever comes next.

**Know your pattern.** It's your most valuable asset and your most persistent liability.

---

## Model-Builders vs. Fast Executors

Some people receive a briefing and start executing immediately. They trust the information, accept the constraints, and move. Fast. Efficient. Decisive.

Others need to build their own mental model first. They poke at the problem. Test hypotheses. Be wrong a few times. Only then do they move, but when they move, they move with understanding.

Neither is better. Both have costs.

**Fast executors** risk building on shaky foundations. They might ship something that works but doesn't fit. They might solve the wrong problem efficiently.

**Model-builders** risk spinning too long. Analysis paralysis. Waiting for certainty that will never come. Perfecting the plan while the window closes.

Which are you? Not which do you want to be. Which are you actually, when you're tired, when you're pressured, when no one's watching?

---

## Your Failure Mode

Everyone has a default failure mode. The thing that goes wrong when things go wrong.

### The Core Patterns

**Ship too fast:** You skip preparation. You don't fully understand the problem before you start solving it. You ship, then discover you built the wrong thing. Your PRs get sent back. You create more work than you save.

*Example: Dev picks up a ticket, starts coding immediately. Three hours later, ships a PR. Review reveals they solved the wrong problem—the ticket description was ambiguous and they assumed instead of asking. Now they rewrite from scratch.*

**Ship too slow:** You can't define done, so you never get there. You're waiting for confidence that won't come. You over-prepare, over-research, over-think. The work expands to fill whatever time is available.

*Example: Dev spends two days researching the "right" way to implement a feature. Reads blog posts. Compares libraries. Sketches architectures. The feature is a simple form. They could have shipped in four hours.*

**Oscillate:** You swing between the two. Ship too fast, get burned, over-correct to shipping too slow. Then miss a deadline, panic, ship too fast again. The pendulum never settles.

### Other Failure Modes

**The Gold Plater:** You can't ship without improving everything you touch. A bug fix becomes a refactor. A refactor becomes a rewrite. You're not working on what was asked; you're working on what you think should be asked.

*Example: Ticket says "fix the null pointer exception." You fix it, but then notice the class is messy. You refactor it. Then the tests need updating. Then the related classes look inconsistent. A two-hour fix becomes a two-week project.*

**The Hero:** You must do it all yourself. Asking for help feels like failure. You work nights and weekends to avoid admitting you're stuck. You burn out. Your team doesn't learn.

*Example: On-call page comes in. You could escalate to the database team, but you dig in yourself. Four hours later, you've fixed it—sort of. You didn't sleep. The actual fix required knowledge you didn't have; the database team would have resolved it in thirty minutes.*

**The Yes-Person:** You say yes to everything. You can't disappoint anyone. Your calendar is packed. Your commitments exceed your capacity. You miss deadlines, or deliver everything at low quality.

*Example: You're already behind on two projects. PM asks if you can take on "a quick feature." You say yes because it's awkward to say no. Now you're behind on three projects.*

**The Conflict Avoider:** You don't push back. You see problems but don't raise them. You disagree but don't say so. The team makes bad decisions because you stayed silent. Later, you're resentful, or the project fails.

*Example: Architecture review. You have concerns about the data model. Someone senior proposed it. You stay quiet. Six months later, the concerns you didn't raise become production incidents.*

**The Rewriter:** You can't work in someone else's code. Everything needs to be rewritten. You don't trust what exists. You'd rather start fresh than understand what's there.

*Example: Inherited a legacy service. Could have learned the existing codebase in a week. Instead, you spend two months rewriting it. The rewrite has its own bugs. You didn't actually understand the business logic the old code handled.*

**The common thread:** You're checking feelings instead of criteria. "Does this feel done?" is the wrong question. "Does this meet the acceptance criteria?" is the right one.

---

## The Feelings Trap

Feelings lie.

When you're excited about a solution, it feels done. It isn't. You're high on the dopamine of solving the puzzle. You haven't checked if it actually works.

When you're uncertain about a solution, it feels not done. It might be. Uncertainty is not evidence of incompleteness. Sometimes the uncertainty is just... uncertainty.

**The fix:** Define done before you start.[^1] Write it down. One sentence. "This is done when ___."

[^1]: Goal-setting research consistently shows that specific, written goals improve completion rates. See Edwin Locke and Gary Latham's goal-setting theory, foundational work in *A Theory of Goal Setting & Task Performance* (1990).

Then check the criteria, not your feelings. Does it meet the criteria? Ship it. Does it not? Keep working. Your feelings are not invited to this decision.

---

## Permission to Work Your Way

Here's something that took too long to learn: you're allowed to work the way you work.

If you need to build a mental model before you can execute, that's not a weakness to fix. That's how you work. Build the model. Just don't let it become an excuse for not shipping.

If you work in bursts, with intense focus followed by recovery, that's not a discipline problem. That's how you work. Arrange your schedule around it instead of fighting it.

If you think by talking, find someone to talk to. If you think by writing, write first. If you need to see the code before you can design, write the code first.

**The caveat:** Understanding your pattern is not permission to skip the work. Model-builders still have to ship. Fast executors still have to prepare. You work with your pattern, not as its hostage.

---

## Other Working Styles

Beyond model-building vs. fast execution, know these about yourself:

**Deep focus vs. context switching.** Some people do their best work in long, uninterrupted blocks. Others thrive on variety and can switch between tasks fluidly. Neither is wrong, but you need to arrange your environment accordingly. The deep-focus person in a meeting-heavy culture will struggle. The context-switcher given a week of "focus time" might flounder.

**Solo vs. collaborative.** Some people think best alone. They need quiet to process. Others think by talking—the ideas come in conversation. Know which you are. The solo thinker forced into constant pairing will burn out. The collaborative thinker left alone will spin.

**Structured vs. exploratory.** Some people need a plan before they start. Others discover the plan by doing. Structured thinkers should front-load their planning. Exploratory thinkers should timebox their exploration so it doesn't become infinite.

**Morning vs. afternoon.** Your cognitive peak is real. Know when you do your best thinking. Protect that time. Don't waste your peak hours on email.

**How you handle stress.** Some people focus under pressure. Others fall apart. Some get quiet. Others get loud. Know your stress response. Build systems that account for it.

---

## Building Self-Awareness

Self-awareness isn't natural. It's built.

**After each project:**
- What went well? What patterns led to that?
- What didn't go well? What patterns led to that?
- Did I ship too fast, too slow, or about right?
- What would I do differently?

**Watch for triggers:**
- What makes you skip preparation?
- What makes you over-prepare?
- When do you check feelings instead of criteria?
- What kind of feedback do you resist hearing?

**Ask others:**
- "What's it like to work with me?"
- "Where do you see me getting stuck?"
- "What would you change about how we collaborate?"

Then listen. Actually listen. Don't defend. Don't explain. Take notes. Sit with it.

---

## Your Failure Mode Guardrails

Once you know your failure mode, build guardrails.

**If you ship too fast:**
- Force yourself to write down what done looks like before starting
- Add a review step. Not optional. Required.
- When you feel the urge to ship, pause. Check criteria.
- Ask: "What would a 10-minute preparation have caught?"

**If you ship too slow:**
- Timebox discovery. When the box ends, start building.
- Define "good enough" explicitly. Write it down.
- Ship earlier than comfortable. Learn from production.
- Ask: "What's the cost of waiting another day?"

**If you oscillate:**
- Notice which mode you're in right now
- Check criteria, not feelings
- Create a checklist for "ready to ship"
- Use it. Every time. No exceptions.

**If you gold plate:**
- Write down the scope before you start. Stick to it.
- Create a "later" list for improvements you notice.
- Ship the fix. File tickets for the rest.
- Ask: "Did anyone ask for this?"

**If you hero:**
- Set a timer. If stuck for 30 minutes, ask for help.
- Post in the team channel, not DMs. Make asking visible.
- Celebrate when others solve problems. It's not failure.
- Ask: "What would I tell a junior dev to do right now?"

**If you yes-person:**
- Before saying yes, say "Let me check my current commitments."
- Keep a visible list of what you've committed to.
- Practice: "I can do X or Y, but not both. Which is higher priority?"
- Ask: "If I say yes to this, what am I saying no to?"

**If you avoid conflict:**
- Write down your concerns before meetings. Read them aloud.
- Use phrases: "I have a concern about..." or "Can we discuss..."
- Remember: Silence is agreement. If you don't speak, you endorsed it.
- Ask: "What's the cost if I'm right and I didn't say anything?"

**If you rewrite:**
- Timebox learning the existing code before proposing changes.
- Articulate what's actually wrong, not just "it's messy."
- Ask: "Does this need to be rewritten, or do I just want to?"
- Remember: The old code has survived production. Yours hasn't.

The guardrails don't fix the pattern. They manage it. You're not trying to become a different person. You're trying to catch yourself before the pattern causes damage.

---

## The Pattern Across Domains

That aircraft maintainer troubleshooting a hydraulic failure is using the same pattern they'll use debugging code. Gather information. Form hypotheses. Test. Isolate. Fix. Verify.

That recruiter matching candidates to roles is using the same pattern they'll use in system design. Understand requirements. Understand options. Find the fit. Manage tradeoffs.

The domain changes. The tools change. The pattern doesn't.

This is why you can move between industries, between languages, between paradigms. The specific knowledge is learnable. The pattern is transferable.

It's also why your failure mode follows you. It doesn't care what language you're writing. It doesn't care what industry you're in. It's yours.

---

## The Work of Knowing Yourself

Knowing yourself is not a one-time revelation. It's ongoing work.

You'll discover new patterns. You'll find failure modes you didn't know you had. You'll think you've fixed something, only to watch it resurface under pressure.

This is normal. This is the work.

The goal isn't to become someone without patterns or failure modes. The goal is to know them well enough to work with them. To catch them before they catch you.

**Know your pattern.** It's been with you your whole life. It will be with you for the rest of it. You might as well understand it.

---

*Your pattern follows you. Your failure modes follow you. The question isn't whether they exist; it's whether you know them well enough to manage them.*
