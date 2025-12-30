---
title: "Debugging"
chapter: 14
summary: "Methodology for finding and fixing problems."
---

> Methodology for finding and fixing problems.

---

## The Nature of Bugs

Something isn't working. The code is doing something you didn't expect. There's a gap between what should happen and what does happen.

That gap is the bug. Your job is to find it, understand it, and close it.

Most developers debug by intuition, change things until it works. This is slow, unreliable, and doesn't teach you anything. There's a better way.

I learned debugging on the flight line before I ever touched a codebase. Aircraft maintenance is troubleshooting with higher stakes: hydraulic systems, electrical faults, mechanical failures. You don't guess. You follow the technical order. You isolate the system. You test components. You verify the fix before the aircraft goes back on the line.

The methodology is the same whether you're tracing hydraulic pressure or data flow. Gather information. Form hypotheses. Test. Isolate. Fix. Verify. Debugging is the scientific method applied to code.

---

## The Methodology

1. **Reproduce it.** If you can't reproduce it, you can't fix it with confidence.
2. **Isolate it.** Narrow down where the problem is.
3. **Understand it.** Know why it's happening before you fix it.
4. **Fix it.** Make the smallest change that addresses the root cause.
5. **Verify it.** Confirm the fix works and doesn't break other things.
6. **Learn from it.** What does this bug teach you?

Each step matters. Skip one and you're guessing.

---

## Step 1: Reproduce It

If you can't reproduce the bug, you can't know if you've fixed it. Reproduction is the foundation.

### What You Need

**Exact steps.** What sequence of actions triggers the bug? Write them down. Be specific.

**Environment.** What OS? What browser? What version? What data? Production vs. staging vs. local?

**Consistency.** Does it happen every time or intermittently? Intermittent bugs are harder; you need more information.

### How to Reproduce

**Start with the report.** What did the user or monitoring say happened? Follow those steps exactly.

**Simplify.** Can you get the same bug with fewer steps? Simpler reproduction = easier debugging.

**Write a failing test.** If you can write a test that fails because of the bug, you've reproduced it reliably. The test also tells you when you've fixed it.

### When You Can't Reproduce

**Gather more data.** Logs. Metrics. User reports. Screenshots. Stack traces. Whatever exists.

**Check environment differences.** Your local setup differs from production. What's different?

**Look for race conditions.** Intermittent bugs often involve timing. Concurrency. Network latency. Garbage collection.

**Increase logging.** If you can deploy, add logging around the suspected area. Then wait for it to happen again.

Don't try to fix what you can't reproduce. You'll just be guessing.

---

## Step 2: Isolate It

You know the bug exists. Now narrow down where.

### The Questions

**Where in the stack?** Frontend? Backend? Database? Network? External service?

**Where in the code?** Which file? Which function? Which line?

**Where in time?** Did this always happen? When did it start? What changed?

### Techniques

**Divide and conquer.** Cut the system in half. Is the bug in this half or that half? Repeat until you've found it.

**Comment out code.** Remove pieces until the bug disappears. The last thing you removed is involved.

**Add logging.** Print statements are crude but effective. Log before and after suspicious code. See where things go wrong.

**Use a debugger.** Step through the code. Watch variables change. See what actually happens, not what you think happens.

**Check the boundaries.** Problems often live at interfaces, between systems, between functions, between assumptions.

### Binary Search in Time

If it used to work and now it doesn't, the bug was introduced sometime between then and now.

**Git bisect.** Find the commit that introduced the bug. Automated binary search through history.

**Check recent changes.** What changed since it last worked? Start there.

---

## Step 3: Understand It

You know where the bug is. Now understand why it happens.

### The Danger of Premature Fixing

You see the bug. You see an obvious fix. You apply the fix.

But you didn't understand why the bug existed. So your fix might not actually solve the problem. Or it might cause new problems. Or the bug might come back.

**Understand before you fix.**

### What to Understand

**What is actually happening?** Not what should happen. What is happening. Trace through the execution.

**What was supposed to happen?** What's the expected behavior? Be specific.

**Why is there a gap?** What assumption was violated? What case wasn't handled? What interaction was missed?

**What's the root cause?** Not just the proximate cause. Why did the wrong thing happen in the first place?

### Techniques

**Read the code.** Actually read it. Line by line. What does it do? (Not what you think it does, what it actually does.)

**Trace the data.** Follow the data through the system. Where does it come from? Where does it go? Where does it change?

**Question assumptions.** What are you assuming is true? Verify each assumption. The bug often hides behind a false assumption.

**Explain it to someone.** Rubber duck debugging.[^3] The act of explaining often reveals what you're missing.

[^3]: The term comes from *The Pragmatic Programmer* (1999) by Hunt and Thomas, inspired by a story of a developer who would explain code line-by-line to a rubber duck on his desk.

---

## Step 4: Fix It

You understand the bug. Now fix it.

### Principles

**Fix the root cause.** Not the symptom. If a null check would prevent the crash, ask why the value is null in the first place.

**Make the smallest change.** Don't refactor while fixing. Don't add features while fixing. Fix the bug. That's it.

**Don't introduce new bugs.** This is why you write tests first. The fix should break nothing else.

### The Process

1. Write a test that fails because of the bug (if you haven't already)
2. Make the fix
3. Verify the test passes
4. Run all tests to ensure nothing else broke
5. Consider edge cases; does your fix handle them?

### What About Quick Fixes?

Sometimes you need to stop the bleeding. A hotfix to get production working. That's fine.

But come back. Understand the root cause. Fix it properly. A quick fix that becomes permanent is technical debt accruing interest.

---

## Step 5: Verify It

The fix is in. Does it actually work?

### Verification Checklist

- [ ] The failing test now passes
- [ ] All other tests still pass
- [ ] You can no longer reproduce the original bug
- [ ] You've tested related functionality
- [ ] You've tested edge cases

### In Production

**Deploy carefully.** If the bug was in production, verify the fix in staging first.

**Monitor after deploy.** Does the error stop appearing? Do metrics improve? Watch for new problems.

**Close the loop.** If a user reported it, tell them it's fixed. If monitoring caught it, verify the alerts stop.

---

## Step 6: Learn From It

Every bug is a lesson. Don't waste it.

### Questions to Ask

**How did this bug get introduced?** What process failed? What could have caught it earlier?

**Why didn't tests catch it?** Is there a missing test? A gap in coverage?

**Is this bug pattern elsewhere?** If you made this mistake once, you might have made it again.

**What can be improved?** Process? Tooling? Code structure? Knowledge?

### Systemic Fixes

The best debugging prevents future bugs.

**Add a test.** Make sure this specific bug can never recur.

**Improve logging.** If you needed more information, add it for next time.

**Update documentation.** If the behavior was surprising, document it.

**Share the learning.** Tell your team. Write it up. Help others avoid the same mistake.

---

## Binary Search Your Assumptions

When you're stuck, you're holding an incorrect assumption. One of your beliefs about the system is wrong. Find it.

### The Process

1. **List your assumptions.** What do you believe is true? Write them down.
2. **Verify each one.** Don't assume; prove. Check with logs, debugger, tests.
3. **Find the false belief.** The bug lives behind the wrong assumption.

### Common False Assumptions

- "This variable has the value I expect"
- "This function is being called"
- "This code path is being executed"
- "The data is in the format I expect"
- "The external service is behaving correctly"
- "The cache is being invalidated"
- "The configuration is what I think it is"

Any of these could be wrong. Verify.

---

## The Debugging Mindset

### Read the Error Message

All of it. Slowly.

Developers skim error messages. They see "error" and start guessing. But the message often tells you exactly what's wrong and where.

Read it. Read it again. What is it actually saying?

### Assume Nothing

Everything you think you know could be wrong. Verify.

- "This code definitely runs." Does it?
- "This variable is definitely set." Is it?
- "This can never be null." Can't it?

Check everything. Trust nothing until you've verified it.

### Change One Thing at a Time

You make three changes. The bug disappears. Which change fixed it?

You don't know. Now you can't understand the bug. You might have just hidden it.

**One change at a time.** Test after each change. Know what you're doing.

### Take a Break

When you're stuck, your brain needs to reset. Step away. Get coffee. Go for a walk.

You'll often return with fresh eyes and immediately see what you were missing.

### Ask for Help

Fresh eyes see what tired eyes miss. Explain the problem to someone. Often you'll figure it out while explaining.

If not, they might see what you're missing. There's no shame in asking. It's not a sign of weakness. It's efficient debugging.

### It's Almost Never the Framework

Before you blame the framework, the library, the compiler, or the hardware, check your code again.

It's almost always your code. The tools have been tested by millions of users. Your code has been tested by you.

The bug is in the last place you'd look. So look there first.

---

## Tools

### Print Statements

Crude. Effective. The oldest debugging tool.

Add logging. See what's happening. Remove when done (or use a proper logging framework).

### Debuggers

Set breakpoints. Step through code. Inspect variables. Watch execution flow.

Every language has one. Learn yours.

### Stack Traces

Read them. They tell you exactly what called what, and where things went wrong.

Start at the bottom (or top, depending on format). Trace up to your code.

### Git Bisect

Binary search through history. Find the exact commit that introduced the bug.

Automated regression finding. Powerful when "it used to work."

### Monitoring and Observability

Logs. Metrics. Traces.

For production bugs, this is often all you have. Make sure you're collecting enough data.

---

## Common Bug Patterns

### Off-By-One

Arrays start at 0. Loops that should run n times run n-1 or n+1.

Check your bounds. Carefully.

### Null/Undefined

The billion-dollar mistake.[^1] Something is null that you assumed wasn't.

[^1]: Tony Hoare, who invented the null reference in 1965, called it his "billion-dollar mistake" in a 2009 QCon presentation: "It has led to innumerable errors, vulnerabilities, and system crashes, which have probably caused a billion dollars of pain and damage in the last forty years."

Handle the null case or prevent it from happening.

### Race Conditions

Two things happening at once, interfering with each other.

Hard to reproduce. Hard to fix. Often needs architectural changes.

### State Mutation

Shared state being modified unexpectedly.

Minimize mutable state. Be explicit about who can change what.

### Caching

The data is stale. The cache wasn't invalidated. You're looking at old information.

There are only two hard problems: cache invalidation and naming things.[^2]

[^2]: Attributed to Phil Karlton (Netscape engineer). Often extended to: "There are only two hard things in computer science: cache invalidation, naming things, and off-by-one errors."

### Environment Differences

Works on my machine. Doesn't work in production.

Different config. Different versions. Different data. Different resources.

---

*Reproduce. Isolate. Understand. Fix. Verify. Learn. This is the methodology. Everything else is guessing.*
