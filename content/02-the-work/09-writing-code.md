---
title: "Writing Code"
chapter: 9
summary: "TDD, refactoring, Metz's rules. The craft of implementation."
---

> The craft of implementation.

---

## The Craft

Writing code is a craft. Like any craft, it has techniques that can be learned, practiced, and refined.

This chapter covers the techniques that work. Not theory, practice. The moves that let you write code that works, that you can change, that others can read.

The masters have already figured this out. Metz. Beck. Fowler. Freeman and Pryce. Learn from them.

---

## Test-Driven Development

Write the test first. Then write the code to make it pass. Then clean up.

**Red → Green → Refactor.**

This isn't bureaucracy. It's a discipline that produces better code and fewer bugs.

### Why TDD Works

**It forces clarity.** You can't write a test for something you don't understand. The test makes you define what "working" means before you write the code.

**It catches bugs early.** A bug found while writing is cheaper than a bug found in production. By orders of magnitude.

**It enables refactoring.** Without tests, changing code is terrifying. With tests, you can refactor confidently. The tests tell you if you broke something.

**It produces better design.** Code that's hard to test is usually hard to use. TDD pushes you toward smaller, more focused, more composable units.

### The Cycle

1. **Red.** Write a failing test. Just one. It should fail for the right reason.

2. **Green.** Write the simplest code that makes the test pass. Not the clever code. Not the complete code. The simplest code.

3. **Refactor.** Clean up. Remove duplication. Improve names. Make it readable. The tests protect you.

4. **Repeat.** Next test. Next tiny piece of functionality.

The cycle should be fast. Minutes, not hours. If you're spending an hour in Red, the test is too big.

### Outside-In TDD (GOOS Style)

Start from user-facing behavior. Work inward to collaborators.

**The process:**
1. Write an acceptance test that describes the feature from the outside
2. Watch it fail
3. Write unit tests for the components you need
4. Implement until the acceptance test passes
5. Refactor

This style uses mocks and stubs to define interfaces before implementations exist. You're designing the conversation between objects as you go.

**The benefit:** You build what you need, not what you think you might need. The outside-in pressure keeps you focused on actual requirements.

### What to Test

**Incoming query messages:** Assert the result. The method returns something; verify it's correct.

**Incoming command messages:** Assert the side effects. The method changes state; verify the change happened.

**Outgoing command messages:** Expect the send. The method tells a collaborator to do something; verify it sent the message.

**Don't test:**
- Private methods (test the public interface)
- Outgoing query messages (trust your collaborators)
- Implementation details (test behavior, not structure)

---

## Sandi Metz's Rules

These rules come from decades of experience. They're not arbitrary; they're guidelines for code that stays maintainable.

### The Rules

1. **Classes under 100 lines**
2. **Methods under 5 lines**
3. **Pass 4 parameters max** (hash options count as 1)
4. **Controllers instantiate one object**

### Why These Numbers

They're not magic. They're forcing functions.

**100 lines per class** means a class has one job. If you're hitting 100 lines, the class is probably doing too much. Extract.

**5 lines per method** means a method does one thing. If you need more lines, you're probably doing multiple things. Extract.

**4 parameters max** means the method isn't asking for too much context. More parameters usually means the method knows too much or is doing too much.

**One object per controller** means the controller isn't doing business logic. It coordinates. It doesn't compute.

### Breaking the Rules

You can break them. But know that you're breaking them.

Ask: "What would it take to follow this rule?" If the answer is "significant complexity," maybe the rule isn't the right fit here. If the answer is "some refactoring," do the refactoring.

The rules create pressure toward better design. Use the pressure.

---

## Kent Beck's Simple Design

Four rules, in priority order:

1. **Passes the tests.** It works. This is non-negotiable.
2. **Reveals intention.** Someone reading it understands what it does.
3. **No duplication.** DRY. But only after #1 and #2.
4. **Fewest elements.** No unnecessary classes, methods, variables.

The order matters. Working code that's unclear is better than clear code that's broken. But unclear working code should become clear working code.

---

## Refactoring

Changing code structure without changing behavior.

### Beck's Approach

**"Make the change easy, then make the easy change."**

The first part is often harder. You look at the code and think "if only it was structured differently, this change would be trivial." Beck says: make it structured differently first.

**The discipline:**
- Small, incremental steps
- Run tests after each change
- Keep the code working at all times
- Never be more than a few minutes from green

### Common Refactorings

**Extract Method.** A chunk of code does something, so give it a name and make it a method.

**Extract Class.** A class has multiple responsibilities, so pull one out into its own class.

**Rename.** The name doesn't match what it does, so change the name.

**Inline.** The abstraction doesn't add value, so collapse it.

**Move Method.** The method uses another object's data more than its own, so move it to that object.

### When to Refactor

**During TDD.** The refactor step isn't optional. Every green is followed by cleanup.

**Before adding features.** If the code would be easier to change with a different structure, restructure first.

**When you see duplication.** The third time you write similar code, extract the pattern.

**When you can't understand it.** If you had to puzzle it out, make it clearer for the next person.

### When Not to Refactor

**When you don't have tests.** Refactoring without tests is just changing code and hoping. Write tests first.

**When you should be shipping.** Refactoring is investment. Sometimes you need to ship now and invest later.

**When it's working and you won't touch it again.** Leave it alone. Don't polish code for the sake of polish.

---

## Composition Over Inheritance

Inheritance creates tight coupling. The subclass depends on the parent's implementation. Change the parent, break the child.

Composition creates flexibility. Objects collaborate through interfaces. Swap implementations. Mix and match.

**Prefer composition.** Use inheritance only when there's a true "is-a" relationship and you want to share both interface and implementation.

**The smell:** Deep inheritance hierarchies. Multiple levels. "Where does this method come from?" If you're asking that, the design has problems.

**The fix:** Compose objects. Inject dependencies. Define interfaces.

---

## Code Smells

Signs that something might be wrong. Not errors, smells. They warrant investigation.

**Long Method.** More than 5-10 lines. What's it doing? Can you extract pieces?

**Large Class.** More than 100-200 lines. What are its responsibilities? Can you extract a class?

**Long Parameter List.** More than 4 parameters. Is this method doing too much? Is there a missing object?

**Feature Envy.** A method uses another object's data extensively. Should it live on that object instead?

**Shotgun Surgery.** One change requires editing many files. Is there missing cohesion?

**Primitive Obsession.** Using strings and integers for domain concepts. Should there be a value object?

**Duplicated Code.** Same code in multiple places. Can you extract it?

---

## Small, Shippable Increments

Every commit should be deployable. Every push should be safe.

**Trunk-based development.** Work on main. No long-lived branches. Integrate constantly.

**Why this works:**
- Small changes are easier to review
- Small changes are easier to debug
- Small changes are easier to revert
- Integration pain is distributed, not deferred

**The discipline:**
- Commit often. Multiple times per day.
- Each commit is a complete thought. It works.
- If a feature isn't done, use feature flags.
- Never check in broken code. If the tests don't pass, don't push.

---

## The Craft in Practice

**Before you write code:**
- What does done look like?
- How will I test this?
- What's the simplest thing that could work?

**While you write code:**
- Red → Green → Refactor
- Small steps. Stay close to green.
- When in doubt, write a test.

**After you write code:**
- Does it pass the tests?
- Does it reveal intention?
- Is there duplication to remove?
- Can anything be simplified?

---

## The Goal

Code that works. Code you can change. Code others can read.

Not clever code. Not impressive code. Not code that demonstrates your skills.

**Working, changeable, readable code.** That's the craft.

---

*Write the test first. Make it pass. Clean it up. Keep the code working. Keep it simple. Keep it clear. This is the craft of implementation.*
