---
title: "P-Cubed"
chapter: 7
summary: "Prepare, Prove, Produce. The cycle for executing an Epic."
---

> Prepare → Prove → Produce

---

## The Problem P-Cubed Solves

You've got an Epic. It's too big to just start coding. But you can't plan forever either. You need a way to move from "I've been handed this objective" to "I shipped it."

Most failures happen because people skip phases:
- **Skip Prepare:** Build the wrong thing. Discover problems mid-flight.
- **Skip Prove:** Commit to architecture that doesn't work. Expensive rework.
- **Skip Produce:** Plan forever. Never ship.

P-Cubed is the cycle that prevents these failures.

---

## The Framework

| Phase | Purpose | Exit Criteria |
|-------|---------|---------------|
| **Prepare** | Understand the problem space, surface tradeoffs, define tasks | Can explain it, tradeoffs documented, tasks scoped to 1-2 days |
| **Prove** | Validate load-bearing decisions before committing | Architectural assumptions tested, approach survives scrutiny |
| **Produce** | Build, test, ship | Criteria met, shipped |

Each phase has a purpose. Each phase has exit criteria. Move through them in order.

---

## Phase 1: Prepare

**Purpose:** Build understanding. Surface tradeoffs. Plan the work.

Prepare has three parts: Discovery, Tradeoffs, and Planning.

### Discovery

You don't fully understand the terrain yet. That's expected. Discovery is the work.

**What to do:**
- Ask questions. You're not supposed to have all the answers yet.
- Explore the system. Read the code. See how it behaves.
- Write down your unknowns. Track open questions explicitly.
- Talk to people who have context. They know things you don't.
- Map the landscape. What exists? What's missing? What's broken?

**Communicate your status.** Tell stakeholders: *"I'm in discovery on this. I'll have questions. Once I understand it, I'll come back with a plan."*

This sets expectations. No one should expect a timeline yet. No one should expect you to be building yet. You're learning.

**Discovery isn't delay—it's investment.** Every hour in discovery saves multiple hours of building the wrong thing.

**Exit when:**
- You can explain the problem space clearly to someone else
- You're not getting surprised anymore
- Your open questions are resolved or explicitly deferred

### Surface Tradeoffs

For each significant decision, articulate the tradeoffs.

**Ask:**
- What are our options?
- What does each option optimize for?
- What does each option make harder?
- What are we giving up with each choice?
- What's the cost to change this later?

There's no "right answer." There's no "best practice." There's only: **"What are we giving up, and can we live with it?"**

Document the tradeoffs. Not for bureaucracy—for clarity. When someone asks "why did you do it this way?" the answer is in the document.

### Planning

Break the Epic into Tasks.

**For each Task:**
- Write: "This is done when ___." One sentence. Specific.
- Scope to 1-2 days of focused work. If bigger, break it down.
- Identify what it depends on.
- Identify what depends on it.

**Sequence matters:**
- Architectural tasks first. They're load-bearing.
- Design tasks after. They can flex.
- Dependencies explicit. No hidden blockers.

**A good plan:**
- Can be explained to someone else
- Has clear acceptance criteria for each Task
- Surfaces the risky parts early
- Is small enough to adjust when you learn things

---

## Phase 2: Prove

**Purpose:** Validate load-bearing decisions before you commit.

Prove is where you test your assumptions. Not all of them—just the ones that matter.

### When Prove is Required

**Required for architecture:**
- Data model decisions
- Service boundaries
- Third-party integrations
- Core abstractions others will depend on
- Anything expensive to change later

**Optional for design:**
- API shape (can be refactored)
- UI details (can be iterated)
- Implementation details within a boundary
- Anything cheap to change later

If you're not sure, ask: "What's the cost if this is wrong?" High cost = prove it first.

### The Spike

A spike is a focused experiment to validate an assumption.

**What makes a good spike:**
- Specific question to answer
- Timeboxed (hours, not days)
- Throwaway code (don't ship it)
- Clear success/failure criteria

**Example spikes:**
- "Can we get sub-100ms response times with this approach?"
- "Does the third-party API actually support this workflow?"
- "Will this data model handle the edge cases?"

The spike answers the question. Then you decide. Then you move on.

### Prove Checklist

- [ ] Walk through the task sequence. What could go wrong?
- [ ] Identify the riskiest assumptions
- [ ] Spike the ones that could sink the project
- [ ] Validate tradeoff assumptions in practice
- [ ] Refine the plan based on what you learned
- [ ] Get alignment on the approach

**Exit when:**
- High-risk assumptions are tested
- The task sequence is solid
- You're ready to commit to this approach

---

## Phase 3: Produce

**Purpose:** Execute the tasks. Ship the Epic.

You've done the preparation. You've validated the risks. Now build.

### The Rhythm

**Sequence matters.** Architectural tasks first. Design tasks after. This isn't arbitrary—it's risk management. Get the load-bearing stuff right before you build on top of it.

**For each Task:**

1. **Confirm criteria.** Before you start, confirm what done looks like. Don't assume.

2. **Build.** Do the work. Trust your prep. Stay focused on the scoped definition—not the thing you just thought of that would be cool.

3. **Test.** Verify against acceptance criteria, not intuition. The criteria are the criteria.

4. **Ship.** Complete the task. Mark it done. Communicate. Move to the next.

### Learning Loop

After each Task:
- What did you learn?
- Does it change the remaining tasks?
- Did you discover a new task that needs adding?
- Is the Epic still on track?

Adjust the plan if needed. The plan is a tool, not a prison. When reality diverges from the plan, update the plan.

### When Things Go Wrong

They will. Here's what to do:

**Blocked by something unexpected:**
- Document what's blocking you
- Can you work on something else in parallel?
- What would unblock it? Who can help?

**Task is bigger than expected:**
- Stop. Don't just keep going.
- Break it into smaller pieces
- Replan. Communicate the change.

**Approach isn't working:**
- Did you skip Prove?
- Is this a sunk cost situation? Don't throw good hours after bad.
- What's the minimum change to get back on track?

**Scope is creeping:**
- Write down the new scope as a separate Task or Epic
- Finish the current Task as originally scoped
- Then decide whether to add the new work

---

## The Mantra

**Define done before you start.**
**Check criteria, not feelings.**
**Ship when done means done.**

This is the heartbeat of P-Cubed. Every phase. Every task. Every decision.

---

## Common Failure Modes

**The Forever Prepare:**
Discovery that never ends. Always one more question. Always more to understand. The cure: timebox it. Set a deadline. Ship what you know.

**The Skipped Prove:**
Jumping from Prepare straight to Produce. "We don't have time to spike it." Then spending twice the time fixing what the spike would have caught. The cure: prove the risky stuff. It's faster.

**The Gold-Plated Produce:**
Tasks that expand. "While I'm in here..." The cure: finish the task as scoped. Write down the new idea. Finish the current thing. Then decide.

**The Feelings Check:**
"Does this feel done?" Wrong question. "Does this meet the criteria?" Right question. The cure: write down the criteria before you start.

---

## P-Cubed in Practice

**Day 1:** Start Prepare. Discovery. Ask questions. Explore.

**Day 2-3:** Continue Prepare. Surface tradeoffs. Draft the task list.

**Day 3-4:** Prove. Spike the risky parts. Validate assumptions.

**Day 4 onwards:** Produce. Execute tasks. Ship. Learn. Adjust.

The exact timing varies by Epic. Some need more Prepare. Some need more Prove. But the sequence is always: Prepare → Prove → Produce.

---

## The Exit Criteria Summary

| Phase | You're done when... |
|-------|---------------------|
| **Prepare** | You can explain it clearly, tradeoffs are documented, tasks are 1-2 days each |
| **Prove** | Risky assumptions are validated, approach survives scrutiny, ready to commit |
| **Produce** | All tasks ship, acceptance criteria met, Epic is done |

---

*Prepare to understand. Prove to validate. Produce to ship. This is the cycle.*

