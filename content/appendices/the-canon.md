---
title: "The Canon"
order: 3
type: reference
status: living-document
---

# The Canon

> Books, patterns, principles, and hard-won lessons worth knowing. Steel sharpens steel. Don't reinvent the wheel.

---

## How to Use This

This is a reference, not a reading list. You don't read it cover to cover. You consult it when you need it.

- **Before starting a project:** Review relevant principles and patterns
- **When stuck:** Check mental models and anti-patterns
- **When mentoring:** Point to specific sections
- **When debating:** Ground the discussion in shared vocabulary

---

# Part I: The Books

## Foundational Reading

These shaped how we think about software. Read them. Re-read them.

### Design & Architecture

**_Practical Object-Oriented Design in Ruby_ by Sandi Metz (2012, 2nd ed. 2018)**
The clearest articulation of OO design principles. Language is Ruby, lessons are universal. Where "Sandi Metz's Rules" come from. Read this first if you write OO code.

**_A Philosophy of Software Design_ by John Ousterhout (2018)**
Complexity is the enemy. Deep modules beat shallow ones. Strategic vs. tactical programming. Short, opinionated, worth revisiting yearly.

**_Design Patterns_ by Gang of Four (1994)**
The shared vocabulary. You don't use all of them. You need to recognize all of them. Reference, not cover-to-cover.

**_Domain-Driven Design_ by Eric Evans (2003)**
For complex domains. Ubiquitous language. Bounded contexts. Aggregates. Heavy but essential when the domain is the hard part.

### Testing

**_Test Driven Development: By Example_ by Kent Beck (2002)**
The original. Red-Green-Refactor. Money example is worth working through by hand.

**_Growing Object-Oriented Software, Guided by Tests_ by Freeman & Pryce (2009)**
Outside-in TDD. Mockist style. Start from the user-facing behavior, work inward. The walking skeleton. This is how we test.

**_xUnit Test Patterns_ by Gerard Meszaros (2007)**
Reference for test smells and patterns. Consult when tests become painful.

### Refactoring

**_Refactoring_ by Martin Fowler (1999, 2nd ed. 2018)**
The catalog of refactorings. Name the moves. Small steps. Keep tests green. The discipline.

**_Working Effectively with Legacy Code_ by Michael Feathers (2004)**
When you inherit a mess. Characterization tests. Seams. How to get legacy code under test. Essential for real-world work.

### Software Engineering

**_The Pragmatic Programmer_ by Hunt & Thomas (1999, 2nd ed. 2019)**
Foundational mindset. DRY. Orthogonality. Tracer bullets. Good defaults for how to think.

**_Clean Code_ by Robert Martin (2008)**
Contentious but useful. Take the naming and function size lessons. Leave the dogma.

**_Code Complete_ by Steve McConnell (1993, 2nd ed. 2004)**
Comprehensive. Dense. Construction-focused. Reference when you want the thorough answer.

### Systems & Scale

**_Designing Data-Intensive Applications_ by Martin Kleppmann (2017)**
The modern systems book. Replication. Partitioning. Consistency. Stream processing. Required reading for backend engineers.

**_Release It!_ by Michael Nygard (2007, 2nd ed. 2018)**
Stability patterns. Bulkheads. Circuit breakers. Timeouts. How to build systems that survive production.

**_Site Reliability Engineering_ by Google (2016)**
SRE philosophy. Error budgets. Toil. Postmortems. The operational mindset.

### Process & Teams

**_Extreme Programming Explained_ by Kent Beck (1999, 2nd ed. 2004)**
The XP values and practices. Pair programming. Continuous integration. Small releases. The source.

**_Accelerate_ by Forsgren, Humble, Kim (2018)**
The data on what makes teams effective. Lead time. Deployment frequency. Change failure rate. MTTR. Cite this when justifying practices.

**_The Phoenix Project_ by Kim, Behr, Spafford (2013)**
DevOps as narrative. The Three Ways. Good for convincing non-engineers.

### Design (Visual)

**_Refactoring UI_ by Adam Wathan & Steve Schoger (2018)**
Practical visual design for developers. Hierarchy. Spacing. Typography. The cheat codes.

**_Don't Make Me Think_ by Steve Krug (2000, 3rd ed. 2014)**
Web usability fundamentals. Short, accessible, timeless. The first UX book every developer should read.

**_The Design of Everyday Things_ by Don Norman (1988, revised 2013)**
Foundational design thinking. Affordances, signifiers, feedback. Why doors confuse people. Shapes how you think about user interfaces.

---

# Part II: The Principles

## Sandi Metz's Rules

Hard limits that force good design:

1. **Classes under 100 lines**
2. **Methods under 5 lines**
3. **Pass 4 parameters max** (hash options count as 1)
4. **Controllers instantiate one object**

Break them when you must. Know that you're breaking them.

## Kent Beck's Rules

### Simple Design (in priority order)
1. Passes the tests
2. Reveals intention
3. No duplication
4. Fewest elements

### Refactoring Approach
- Make the change easy (this might be hard), then make the easy change
- Small, incremental steps
- Run tests after each change
- Keep the code working at all times

## SOLID

| Principle | Meaning | Violation Smell |
|-----------|---------|-----------------|
| **Single Responsibility** | One reason to change | God classes, feature envy |
| **Open/Closed** | Open for extension, closed for modification | Shotgun surgery |
| **Liskov Substitution** | Subtypes must be substitutable | Type checking, refused bequest |
| **Interface Segregation** | Clients shouldn't depend on unused methods | Fat interfaces |
| **Dependency Inversion** | Depend on abstractions, not concretions | New in constructors, static calls |

## Other Core Principles

**Composition over Inheritance**
Inheritance creates coupling. Composition creates flexibility. Inherit for "is-a" only when it's truly is-a. Prefer "has-a" and delegation.

**Tell, Don't Ask**
Tell objects what to do. Don't ask for their data and make decisions for them. Push behavior to where the data is.

**Law of Demeter**
Only talk to your immediate friends. `a.b.c.d` is a violation. Each dot is a coupling.

**YAGNI (You Aren't Gonna Need It)**
Don't build for hypothetical futures. Build for now. Refactor when requirements change.

**DRY (Don't Repeat Yourself)**
Every piece of knowledge should have a single, unambiguous representation. But: duplication is better than the wrong abstraction.

**The Wrong Abstraction**
Prefer duplication over the wrong abstraction. It's easier to recover from duplication than from a bad abstraction that everything depends on.

**Separation of Concerns**
Each module/class/function should do one thing. Mixed concerns are hard to change.

**Principle of Least Surprise**
Code should do what the reader expects. Surprising behavior is a bug, even if it's "correct."

---

# Part III: The Patterns

## Structural Patterns

**Repository**
Abstracts data access. Your domain doesn't know about the database. Test with in-memory implementations.

**Service Object**
Encapsulates a business operation. Single public method (`call`). Takes inputs, returns result. No side effects on instance state.

**Value Object**
Immutable. Identity based on attributes, not pointer. Money, DateRange, Email. Comparable, hashable.

**Entity**
Identity based on ID, not attributes. Mutable over time. The "things" in your domain.

**Aggregate**
Cluster of entities with a root. All access through the root. Consistency boundary.

**Adapter**
Wraps an interface to make it compatible with another. Isolates third-party dependencies.

**Decorator**
Adds behavior without changing interface. Stackable. Transparent to clients.

**Facade**
Simplified interface to a complex subsystem. Reduces coupling to internals.

## Behavioral Patterns

**Strategy**
Encapsulate algorithms. Swap implementations at runtime. Prefer over conditionals.

**Command**
Encapsulate a request as an object. Enables queuing, undo, logging.

**Observer**
Notify dependents of state changes. Loose coupling between subject and observers.

**Null Object**
An object that does nothing, gracefully. Avoids nil checks.

**State Machine**
Explicit states and transitions. Better than boolean flags.

## Rails/Web Patterns

**Form Object**
Encapsulates form validation and processing. Keeps controllers thin. Not tied to a single model.

**Presenter/Decorator**
View logic attached to a model. Keeps views clean. Draper gem or plain Ruby.

**Query Object**
Encapsulates complex queries. Reusable. Testable. Chainable.

**Policy Object**
Encapsulates authorization logic. Pundit pattern. `UserPolicy#update?`

**Background Job**
Offload work from the request cycle. Sidekiq. Fail gracefully. Idempotent.

---

# Part IV: The Practices

## Test-Driven Development (GOOS Style)

### The Cycle
1. Write a failing acceptance test (outside-in)
2. Write a failing unit test for the first piece
3. Make it pass (simplest thing)
4. Refactor
5. Repeat until acceptance test passes

### Mockist vs. Classicist
We lean **mockist**. Mock collaborators. Test in isolation. Define interfaces through the tests. Trade-off: tests coupled to implementation.

### What to Test

| Layer | Test Type | Speed | Isolation |
|-------|-----------|-------|-----------|
| Unit | RSpec | Fast | High (mocked) |
| Integration | RSpec + DB | Medium | Medium |
| System/E2E | Capybara | Slow | Low |

### Test Pyramid
Many unit tests. Fewer integration tests. Few E2E tests. Invert this pyramid at your peril.

### Sandi Metz's Testing Rules
- Test the interface, not the implementation
- Don't test private methods
- Don't mock what you don't own (wrap it first)
- Incoming query messages: assert result
- Incoming command messages: assert side effects
- Outgoing query messages: don't test (trust collaborator)
- Outgoing command messages: expect the send

### RSpec Conventions
```ruby
# Prefer is_expected.to over expect(subject).to
it { is_expected.to be_valid }

# Avoid unnecessary let - inline when used once
# Use let for shared setup, not for single-use values

# Describe the behavior, not the implementation
describe "#activate" do
  context "when user is pending" do
    it "transitions to active" do
      # ...
    end
  end
end
```

## Trunk-Based Development

**The Practice:**
- Trunk is always deployable (main, master—the name varies)
- Short-lived feature branches (< 1 day ideal, < 3 days max)
- Merge to trunk frequently
- Feature flags for incomplete work
- No long-lived branches

**Why:**
- Reduces merge conflicts
- Forces small, incremental changes
- Enables continuous deployment
- Makes code review manageable

## Continuous Integration

- Run tests on every push
- Build must stay green
- Fix broken builds immediately (stop the line)
- Automate everything that can be automated

## Pair Programming

**Driver/Navigator:**
- Driver: types, focuses on syntax and implementation
- Navigator: watches, thinks ahead, catches issues
- Swap every 15-30 minutes

**When to Pair:**
- Complex problems
- Knowledge transfer
- Onboarding
- When stuck

**When to Solo:**
- Well-defined tasks
- Deep focus work
- Exploratory/research

## Code Review

**As Reviewer:**
- Focus on: correctness, maintainability, load-bearing decisions
- Don't nitpick style (linters do this)
- Ask questions, don't demand
- Approve when "good enough," not "perfect"

**As Author:**
- Small PRs (< 400 lines)
- Clear description of what and why
- Self-review before requesting
- Respond to all comments

## Commit Messages

```
<type>: <subject>

<body>

<footer>
```

**Types:** feat, fix, refactor, test, docs, chore

**Subject:** Imperative, present tense. "Add feature" not "Added feature"

**Body:** Why, not what. What is in the diff.

**Footer:** Issue references, breaking changes

---

# Part V: The Stack

## Infrastructure

| Tool | Purpose | Notes |
|------|---------|-------|
| **Docker** | Containerization | Consistent environments. Compose for local dev. |
| **Terraform** | Infrastructure as Code | Declarative. State management. Modules for reuse. |
| **Nomad** | Orchestration | Simpler than K8s. Good for most workloads. |
| **Vault** | Secrets Management | Dynamic secrets. Rotate regularly. Never commit secrets. |
| **AWS** | Cloud Provider | Prefer managed services. Understand the cost model. |

## CI/CD

**GitHub Actions**
- Workflow per concern (test, deploy, lint)
- Cache dependencies
- Fail fast
- Keep secrets in GitHub Secrets + Vault

## Security

**1Password / Vault**
- Team secrets in 1Password
- Application secrets in Vault
- Rotate credentials regularly
- Audit access

**Principles:**
- Least privilege
- Defense in depth
- Assume breach
- Encrypt in transit and at rest

## Database

**MySQL Preferred**
- Use `json` type, not `jsonb` (Postgres)
- Migrations are one-way in production
- Index foreign keys
- Avoid N+1 queries

## Ruby/Rails

**Style Guide:** Follow the Ruby Style Guide. RuboCop enforces.

**Commands:** Use `bin/rails` over `rails`. Binstubs are explicit.

**Service Layer:** Keep controllers thin. Business logic in service objects.

---

# Part VI: Mental Models

## For Problem-Solving

**Levels of Work**
| Level | Size | Job |
|-------|------|-----|
| Problem | Undefined | Discovery → Define Initiative |
| Initiative | Weeks/Months | Decompose → Define Epics |
| Epic | Days/Weeks | P-Cubed → Produce Tasks |
| Task | 1-2 Days | Execute → Ship |

Always identify what level you're at.

**P-Cubed: Prepare → Prove → Produce**
The cycle for executing an Epic. Discovery, then validation, then execution.

**Architecture vs. Design**
- Architecture: load-bearing, hard to change (schema, service boundaries, auth strategy)
- Design: decorative, easy to change (API shape, UI, implementation details)

Know which you're deciding. Prove architecture. Iterate design.

**Tradeoffs, Not Best Practices**
There's no right answer. There's only: "What are we giving up, and can we live with it?" Document the tradeoffs.

## For Decision-Making

**Reversible vs. Irreversible Decisions**
- Reversible: Decide fast, adjust later
- Irreversible: Take time, validate, get alignment

Most decisions are more reversible than they feel.

**Two-Way Door / One-Way Door (Bezos)**
- Two-way door: Walk through, walk back if wrong
- One-way door: Deliberate, you can't undo this

**First Principles**
When stuck, ask: "What do we know to be true?" Build up from there rather than reasoning by analogy.

**The Map Is Not the Territory**
Models are useful. Models are wrong. Don't confuse the abstraction with reality.

**Chesterton's Fence**
Don't remove something until you understand why it was put there. The previous person wasn't stupid.

## For Systems Thinking

**Conway's Law**
Organizations design systems that mirror their communication structure. If you want a different architecture, change the org.

**Gall's Law**
Complex systems that work evolved from simple systems that worked. Don't design complex systems from scratch.

**Hyrum's Law**
With enough users, every observable behavior of your system will be depended on. All bugs become features.

**Murphy's Law**
What can go wrong will go wrong. Design for failure.

**The Pareto Principle (80/20)**
80% of effects from 20% of causes. Focus on the 20% that matters.

---

# Part VII: Anti-Patterns

## Code Smells

| Smell | Symptom | Remedy |
|-------|---------|--------|
| **God Class** | Class does everything | Extract classes by responsibility |
| **Feature Envy** | Method uses another object's data extensively | Move method to that object |
| **Shotgun Surgery** | One change requires many small edits | Extract to single location |
| **Divergent Change** | Class changes for multiple reasons | Split by responsibility |
| **Primitive Obsession** | Using primitives instead of small objects | Extract value objects |
| **Long Method** | Method > 5 lines | Extract method |
| **Long Parameter List** | Method takes > 4 parameters | Introduce parameter object |
| **Data Clumps** | Same group of data appears together | Extract object |
| **Refused Bequest** | Subclass doesn't use inherited methods | Reconsider hierarchy, prefer composition |

## Process Smells

| Smell | Symptom | Remedy |
|-------|---------|--------|
| **Big Bang Release** | Months without deploying | Ship smaller, ship often |
| **Long-lived Branches** | Branches live for weeks | Trunk-based, feature flags |
| **Manual Deployment** | Humans run deploy scripts | Automate CI/CD |
| **Testing in Production** | No other environment works | Fix your environments |
| **Heroics** | One person knows/fixes everything | Cross-train, document |
| **Gold Plating** | Adding unrequested features | Define done, ship it |

## Architecture Smells

| Smell | Symptom | Remedy |
|-------|---------|--------|
| **Distributed Monolith** | Microservices that must deploy together | Actually decouple or embrace the monolith |
| **Shared Database** | Multiple services write to same tables | Define ownership, APIs |
| **Circular Dependencies** | A depends on B depends on A | Extract shared abstraction |
| **Leaky Abstraction** | Implementation details escape the boundary | Strengthen the interface |

---

# Part VIII: Hard-Won Lessons

## On Shipping

- **Done is better than perfect.** Ship when criteria are met, not when doubt lifts.
- **Define done before you start.** Check criteria, not feelings.
- **Scope to 1-2 days.** If it's bigger, decompose it.
- **Small commits, frequent merges.** Every commit deployable.
- **The best code is no code.** Solve the problem, not the hypothetical.

## On Code

- **Duplication is better than the wrong abstraction.** Recover from duplication is cheap.
- **Code is read more than written.** Optimize for the reader.
- **Delete code freely.** It's in version control. It's not precious.
- **Comments explain why, not what.** What is in the code.
- **Naming is hard because scoping is hard.** Good names come from good design.

## On Debugging

- **Read the error message.** All of it. Again.
- **Reproduce first.** If you can't reproduce it, you can't fix it with confidence.
- **Change one thing at a time.** Binary search your assumptions.
- **Fresh eyes help.** Take a break. Ask someone else.
- **The bug is in your code.** It's almost never the framework/language/compiler.

## On Working With Others

- **Asking questions is the work.** Not a delay to the work.
- **Declare your status.** "I'm in discovery" sets expectations.
- **Write it down.** If it's not written, it doesn't exist.
- **Assume good intent.** Your coworker isn't trying to make your life hard.
- **The code is not you.** Don't take review personally.

## On Learning

- **You fall to your training.** Practice under realistic conditions.
- **The veterans have wisdom.** Seek mentors. Learn the canon.
- **Experience without reflection is just time spent.** Retrospect.
- **Teach to learn.** Explaining reveals gaps.
- **Your pattern follows you.** Know your failure modes. Build guardrails.

## On Failure

- **Fail fast.** Learn early, learn cheap.
- **Blameless postmortems.** The goal is learning, not punishment.
- **Every outage is a gift.** It exposed a weakness. Now fix it.
- **You're not your mistakes.** You're what you do after them.

---

# Part IX: Checklists

## Before Starting Work

- [ ] What level is this? (Problem / Initiative / Epic / Task)
- [ ] What does done look like? (Written down)
- [ ] Is this load-bearing or decorative?
- [ ] What are we trading off?
- [ ] Is this 1-2 days? If not, decompose.

## Before Committing Code

- [ ] Tests pass
- [ ] Self-reviewed the diff
- [ ] Commit message explains why
- [ ] No commented-out code
- [ ] No debugging artifacts (puts, console.log)

## Before Shipping

- [ ] Acceptance criteria met
- [ ] Reviewed by another human
- [ ] No known regressions
- [ ] Monitoring in place
- [ ] Rollback plan exists

## Before Architectural Decisions

- [ ] Tradeoffs articulated for each option
- [ ] Irreversible aspects identified
- [ ] Spiked the riskiest assumption
- [ ] Team aligned on what we're giving up
- [ ] Decision documented

---

# Part X: The Vocabulary

Quick reference for terms used consistently:

| Term | Meaning |
|------|---------|
| **Load-bearing** | Hard to change after you build on it. Architectural. |
| **Spike** | Time-boxed experiment to validate an assumption. |
| **Done** | Acceptance criteria met. Not a feeling. |
| **Discovery** | The phase where you build understanding. Questions are the work. |
| **Tradeoff** | What you give up when you choose an option. No free lunch. |
| **Task** | 1-2 days of work. Clear acceptance criteria. |
| **Epic** | Days to weeks. Runs through P-Cubed. Produces tasks. |
| **Walking skeleton** | Thinnest end-to-end implementation. Proves architecture. |
| **Seam** | A place where you can alter behavior without changing code. |
| **Characterization test** | Test that captures existing behavior. For legacy code. |

---

# Appendix: The Reading Order

If you're starting from zero:

1. _Practical Object-Oriented Design in Ruby_ by Sandi Metz (2018)
2. _Test Driven Development: By Example_ by Kent Beck (2002)
3. _Refactoring_ by Martin Fowler (2018)
4. _Growing Object-Oriented Software, Guided by Tests_ by Freeman & Pryce (2009)
5. _A Philosophy of Software Design_ by John Ousterhout (2018)
6. _The Pragmatic Programmer_ by Hunt & Thomas (2019)
7. _Designing Data-Intensive Applications_ by Martin Kleppmann (2017)
8. _Working Effectively with Legacy Code_ by Michael Feathers (2004)
9. _Release It!_ by Michael Nygard (2018)

Read one. Apply it. Read the next. Don't rush.

---

*This is a living document. Add to it as you learn. Steel sharpens steel.*
