---
title: "Pairing and Collaboration"
chapter: 12
summary: "How to pair effectively. Working with AI."
---

> How to pair. Working with AI.

---

## Why Pair

Two people. One problem. One keyboard.

Pairing isn't about typing faster. It's about thinking together. Two brains catching errors one brain would miss. Shared context that doesn't need to be communicated later. Knowledge that doesn't live in one head.

Done well, pairing produces better code faster with fewer bugs and shared understanding. Done poorly, it's two people doing one person's work at half the speed.

The difference is how you do it.

---

## The Mechanics

### Driver and Navigator

**Driver:** Hands on keyboard. Writing the code. Focused on the immediate—syntax, implementation, the line in front of you.

**Navigator:** Watching. Thinking ahead. Focused on the bigger picture—where are we going, what are we missing, what's the next step.

Both are working. The navigator isn't passive. They're thinking at a different level.

### The Rhythm

**Swap regularly.** Every 15-30 minutes, or at natural breakpoints. Don't let one person drive all day.

**Think out loud.** The driver narrates what they're doing. The navigator voices concerns and ideas. Silence means someone's checked out.

**Stay engaged.** If the navigator is on their phone, you're not pairing. You're just sitting next to someone.

### The Dynamic

**Navigators suggest, don't dictate.** "What if we tried X?" not "Do X." The driver is in control of the keyboard.

**Drivers explain decisions.** "I'm doing it this way because Y." The navigator should understand, not just watch.

**Disagree productively.** If you see a problem, say it. But pick your battles. Not every disagreement is worth stopping for.

---

## When to Pair

Pairing isn't always the right answer. It's a tool. Use it when it helps.

**Complex problems.** Multiple valid approaches. Need to explore the solution space together.

**Architectural decisions.** Load-bearing choices benefit from two perspectives.

**Knowledge transfer.** Someone knows something another person needs to learn. Pairing is faster than documentation.

**When you're stuck.** Fresh eyes. Different thinking. Someone to explain the problem to (rubber duck debugging, but the duck talks back).

**Onboarding.** New team member learns the codebase. Existing member shares context.

**High-stakes code.** Security-critical. Performance-critical. Two sets of eyes, fewer mistakes.

---

## When to Solo

**Well-defined tasks.** Clear requirements, clear implementation. One person can do it faster.

**Deep focus work.** Some problems need uninterrupted concentration. Pairing can be distracting.

**Building mental models.** Sometimes you need to struggle with something yourself to understand it. Shortcuts bypass the learning.

**When exhausted.** Pairing takes energy. If you're drained, solo work might be more productive.

**When it's not working.** Some pairs don't click. That's fine. Try a different partner, or work alone.

---

## Making Pairing Work

### Before You Start

**Agree on the goal.** What are we trying to accomplish in this session?

**Align on approach.** Quick discussion of how you'll tackle it. Don't spend an hour planning.

**Set up the environment.** Both people should be comfortable. Screen visible to both. Second keyboard helps.

### During the Session

**Take breaks.** Pairing is intensive. Step away regularly.

**Stay focused.** Resist the urge to check email, Slack, phones. If you're pairing, be present.

**Switch drivers.** Don't let one person dominate. Rotation keeps both engaged.

**Voice discomfort.** If something's not working—pace, approach, dynamic—say so. Don't suffer in silence.

### Common Problems

**Backseat driving.** Navigator tells driver exactly what to type. This isn't pairing, it's dictation. Let the driver drive.

**Keyboard hogging.** One person never gives up the keyboard. Force the switch.

**Zone-out navigating.** Navigator stops paying attention. Stay engaged or take a break.

**Pace mismatch.** One person moves faster than the other can follow. Slow down. Explain. The point is shared understanding.

**Style conflicts.** Different preferences for how to write code. Agree on standards beforehand, or alternate whose style wins.

---

## Working With AI

AI is a junior pair programmer. Treat it that way.

### The Model

AI can:
- Generate code quickly
- Explain concepts
- Suggest approaches
- Find bugs
- Do tedious tasks

AI cannot:
- Guarantee correctness
- Understand your actual requirements
- Take responsibility for what ships
- Replace your judgment

### The Rule

**AI assists privately. What lands in shared spaces—PRs, Slack, docs—must be unmistakably yours.**

- Your voice
- Your judgment
- Your standards

If you can't defend it, don't ship it. "The AI wrote it" is not an excuse.

### Working Together

**Use AI for first drafts.** Let it generate, then you refine. Faster than starting from blank.

**Use AI for exploration.** "What are some ways to do X?" Get options, then choose.

**Use AI for tedious tasks.** Boilerplate, test scaffolding, documentation drafts. The stuff that slows you down.

**Use AI for explanation.** "Explain what this code does." "Why might this approach fail?"

### Standards Still Apply

AI doesn't get a pass on quality. The code it generates must meet your standards:

- Sandi Metz's rules still apply
- TDD still applies
- Composition over inheritance still applies
- Clean, readable code still applies

If the AI generates something that doesn't meet standards, fix it or don't use it.

### Review Everything

AI makes confident mistakes. It will generate code that looks right but isn't. It will miss edge cases. It will misunderstand requirements.

**You are responsible for what ships.** Read every line. Test it. Understand it. If you can't explain it, you can't ship it.

### The Crutch Warning

AI can become a crutch. You ask it to solve problems instead of solving them yourself. You stop thinking and start prompting.

**Watch for:**
- Not understanding the code you're shipping
- Struggling without AI access
- Skills atrophying
- Losing the ability to debug AI-generated code

AI should accelerate you, not replace your thinking. If you're not growing as an engineer, something's wrong.

---

## Mob Programming

More than two people. One keyboard. The whole team.

**When it works:**
- Critical design decisions
- Onboarding multiple people at once
- Problems that benefit from many perspectives
- Building shared understanding across the team

**When it doesn't:**
- Most routine work
- When people zone out
- When one voice dominates
- When it becomes a meeting with a keyboard

**The rule:** If not everyone is engaged, it shouldn't be a mob.

---

## Remote Pairing

Same principles, different medium.

**What helps:**
- Good video quality (see facial expressions)
- Low-latency screen sharing
- Shared control of the codebase (VS Code Live Share, similar tools)
- Clear audio (headset, not laptop speakers)

**What's harder:**
- Reading body language
- Staying engaged when not driving
- The temptation to multitask

**The adjustment:** More explicit communication. More check-ins. More breaks.

---

## The Core Discipline

Whether pairing with humans or AI:

**Stay engaged.** Be present. Contribute.

**Think out loud.** Share your reasoning. Listen to theirs.

**Review everything.** Don't ship what you don't understand.

**Own the output.** Your name is on it. Take responsibility.

Collaboration multiplies capability. But only if you do it well.

---

*Two heads are better than one—if both are actually thinking. Pair with intention. AI is a tool, not a replacement. You're responsible for what ships.*

