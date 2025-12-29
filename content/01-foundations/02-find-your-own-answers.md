---
title: "Find Your Own Answers"
chapter: 2
part: 1
status: draft
summary: "The hierarchy of truth. How to search. When to ask."
---

# Find Your Own Answers

> Service members understand how to find their own answers. They understand the governing guidance and how to interpret it. Law, regulation, guidance. They understand how to apply and what the differences are.

---

## The Principle

In the military, you learn the chain of authority for information: law supersedes regulation, regulation supersedes guidance, guidance supersedes opinion. You learn to find the source, interpret it, and apply it to your situation.

Engineering is the same. There's a hierarchy of truth. There's a skill to finding answers. There's a judgment call about when to dig and when to ask.

**The goal is not to know everything. The goal is to know how to find anything.**

A senior engineer isn't someone who has memorized the docs. They're someone who can find the right answer quickly, evaluate its reliability, and apply it correctly.

This is a skill. It can be learned. It must be practiced.

---

## The Hierarchy of Truth

Not all sources are equal. Know the hierarchy.

### 1. The Specification (Law)

The spec is the ultimate authority. It defines what *must* be true.

- Language specifications (ECMAScript, Ruby spec, SQL standard)
- Protocol specifications (HTTP, WebSocket, OAuth)
- API contracts (OpenAPI, GraphQL schema)
- Your own system's defined behavior (tests that document intent)

**When it matters:** Edge cases, undefined behavior, "what should happen when..."

**Example:** "Does JavaScript guarantee object property order?" The ECMAScript spec says yes, as of ES2015, for string keys in insertion order. That's law. Blog posts saying otherwise are outdated.

### 2. Official Documentation (Regulation)

The docs are the authoritative guide to how something works. Written by the people who built it.

- Language documentation (ruby-doc.org, MDN)
- Framework documentation (Rails Guides, React docs)
- Library documentation (README, API docs)
- Cloud provider documentation (AWS docs, Terraform registry)

**When it matters:** How to use something. What options are available. What the expected behavior is.

**Read the docs first.** Before Stack Overflow. Before asking a coworker. The answer is often right there.

### 3. Official Examples and Tutorials (Guidance)

Examples from the source. How the authors intended it to be used.

- Getting started guides
- Official tutorials
- Example repositories
- Reference implementations

**When it matters:** Best practices. Idiomatic usage. "How should I structure this?"

**Caution:** Examples are often simplified. They show the happy path. Real code has more edge cases.

### 4. Source Code (Ground Truth)

When the docs are wrong or incomplete, the source code is the truth.

```ruby
# The docs say it does X.
# The code does Y.
# The code wins.
```

**When it matters:** Debugging. Understanding internals. Verifying behavior.

**The source never lies.** It might be confusing. It might be poorly written. But it's what actually happens.

### 5. Community Resources (Convention)

Blog posts, Stack Overflow, tutorials, conference talks. Written by users, not authors.

- Stack Overflow answers
- Blog posts and articles
- Conference talks
- Community forums

**When it matters:** Common problems. Workarounds. "Has anyone else seen this?"

**Caution:** Quality varies wildly. Answers may be outdated. The top-voted answer isn't always right. Check the date. Check the version. Verify against the docs.

### 6. AI Assistants and Generated Content (Opinion)

Claude, ChatGPT, Copilot. Fast answers, variable reliability.

**When it matters:** Exploration. Boilerplate. Getting unstuck.

**Caution:** AI hallucinates confidently. It invents plausible-sounding APIs that don't exist. Always verify against the docs. Never trust generated code without review.

### 7. Opinions and Folklore (Hearsay)

"I heard that..." "Someone told me..." "Everyone knows that..."

**Trust level:** Verify before applying. Often outdated or context-specific.

---

## How to Read Documentation

Most engineers skim docs. Skimming is fine for exploration. But when you need the answer, you need to read.

### The Structure

Most documentation follows a pattern:

1. **Overview/Introduction:** What it is, why it exists
2. **Getting Started:** Minimal example to get running
3. **Guides:** Task-oriented walkthroughs
4. **API Reference:** Detailed specification of every function, class, option
5. **Examples:** Code samples
6. **Changelog:** What changed between versions

Know what you're looking for. Go to the right section.

### The Skills

**Read the whole page.** The answer to your question is often in the next paragraph. Don't just read the first sentence and bounce.

**Read the method signature.** Arguments, return type, exceptions. It tells you most of what you need to know.

```ruby
# ActiveRecord::Base.find
# find(id) → Object
# find(array_of_ids) → Array
# Raises ActiveRecord::RecordNotFound if not found
```

That signature tells you: it takes an ID or array, returns an object or array, and raises on not found. That's the behavior.

**Read the examples.** Then modify them. See what breaks.

**Read the caveats.** The "Note:" and "Warning:" sections exist for a reason. They're where the edge cases live.

**Check the version.** Documentation often lags. Make sure you're reading docs for the version you're using.

### When Docs Fail

Sometimes the docs are wrong, incomplete, or confusing. Then:

1. **Check the source.** The code is the truth.
2. **Check the tests.** Tests often document intended behavior.
3. **Check the changelog.** Maybe the behavior changed.
4. **Check the issues.** Someone else may have hit this.
5. **Ask.** But you've now done your homework.

---

## How to Search Effectively

Searching is a skill. The quality of your query determines the quality of your results.

### General Principles

**Be specific.** "rails error" gets noise. "rails ActiveRecord::RecordNotFound rescue" gets answers.

**Include version numbers.** "ruby 3.2 pattern matching" beats "ruby pattern matching" for current work.

**Use exact error messages.** Copy-paste the error. That's what others searched for.

**Include the stack.** "docker nginx 502" is better than just "502 error."

**Exclude noise.** Use `-` to remove irrelevant results. "rails routes -react" if you're not using React.

### Searching Code

**GitHub search:**
- `language:ruby filename:Gemfile`: find Ruby projects
- `org:rails path:activerecord`: search within a repo or org
- `"def find_by"`: exact phrase matching
- Search in a specific repo for usage examples

**Your codebase:**
- `grep -r "pattern" .`: simple but effective
- IDE search with regex: more powerful
- `git log -S "function_name"`: when was this added or changed?
- `git log --all --full-history -- "**/filename.*"`: file history

**Reading others' code:**
- Find popular repos that use the library
- See how they solved similar problems
- Learn idioms from real usage

### Evaluating Results

**Check the date.** A 2018 answer about React may be obsolete.

**Check the version.** "Works in Rails 5" may not work in Rails 7.

**Check the score/acceptance.** But don't trust blindly. Highest-voted can be wrong.

**Check the comments.** Often contain corrections and updates.

**Verify against docs.** Stack Overflow is a starting point, not the end.

### When Search Fails

1. **Rephrase.** Different terms, different angle.
2. **Broaden.** Remove constraints. Search the concept, not the specific.
3. **Narrow.** Add constraints. Include version, framework, context.
4. **Go to the source.** Read the docs, read the code.
5. **Ask a human.** But bring what you've tried.

---

## When to Ask, When to Dig

There's a balance. Digging too long wastes your time. Asking too quickly wastes others' time and stunts your growth.

### The 15-Minute Rule

When you're stuck:

1. **Spend 15 minutes trying to solve it yourself.**
   - Read the error message carefully
   - Search for the error message
   - Check the docs
   - Try the obvious things

2. **If still stuck, prepare to ask.**
   - Document what you tried
   - Document what you expected vs. what happened
   - Have a minimal reproduction if possible

3. **Ask with context.**
   - "I'm trying to X. I expected Y. I got Z. I tried A, B, and C."

The 15 minutes isn't a hard rule. Adjust based on:
- Urgency (production down = ask immediately)
- Likelihood you'll find it (obscure problem = ask sooner)
- Learning value (new territory = dig longer)

### How to Ask Well

**Bad:** "It doesn't work."

**Good:** "I'm getting a 'ConnectionRefused' error when my Rails app tries to connect to the MySQL container. I've verified the container is running with `docker ps`. The DATABASE_URL is set to `mysql2://root:password@db:3306/myapp`. The error happens on the first database query after startup. I've tried restarting both containers."

A good question includes:
- What you're trying to do
- What you expected
- What actually happened
- What you've already tried
- Relevant details (versions, config, error messages)

**Respect their time.** The better your question, the faster the answer.

### When to Dig Longer

- You'll encounter this again (invest now, save later)
- It's a learning opportunity (new concept worth understanding)
- No one else knows either (novel problem)
- The answer will help others (document when you find it)

### When to Ask Sooner

- Production is down (urgency trumps learning)
- You're blocked and blocking others (coordination cost)
- Someone else has context you lack (don't reinvent their knowledge)
- It's a decision, not a fact (you need input, not just information)

---

## Rules vs. Guidelines

Not all guidance is equal. Know the difference.

### Rules (Must)

Hard constraints. Breaking them causes failures.

- **Language rules:** Syntax errors won't compile/run
- **Protocol rules:** Violate HTTP spec, clients break
- **Security rules:** Skip auth, get breached
- **Data integrity rules:** Violate constraints, corrupt data

You can't negotiate with rules. You follow them or you fail.

### Conventions (Should)

Community standards. Breaking them causes friction.

- **Style guides:** Consistent formatting
- **Naming patterns:** `user_id`, not `userId` in Ruby
- **Project structure:** Rails conventions
- **Commit message formats:** Conventional commits

You can break conventions, but have a reason. The cost is friction and confusion.

### Guidelines (Consider)

Best practices. Recommendations based on experience.

- **Design patterns:** Often good, not always applicable
- **Performance tips:** Measure first, they may not apply
- **"Always do X":** Usually means "often do X"

Guidelines are defaults, not mandates. Override them when context demands.

### How to Tell the Difference

Ask:
- **What happens if I break this?** (Failure = rule. Friction = convention. Suboptimal = guideline.)
- **Who says so?** (Spec = rule. Community = convention. Blog post = guideline.)
- **Does context change it?** (Never changes = rule. Sometimes changes = convention/guideline.)

---

## Interpreting Guidance in Context

Knowing the rule isn't enough. You need to apply it to your situation.

### The Context Matters

"Don't use global state."

In general, yes. But:
- Rails uses `Current` for request-scoped globals
- Configuration often lives in globals
- Some frameworks rely on global state

The guideline is real. But so is your context. Understand both.

### The Intent Behind the Rule

Rules exist for reasons. Understand the reason.

"Keep methods under 5 lines."

The reason: Short methods are easier to understand, test, and reuse.

If your 7-line method is clear, testable, and any split would obscure meaning, you've honored the intent while breaking the letter.

**Know the intent. Then decide.**

### When Guidance Conflicts

Sometimes best practices contradict:
- "Don't repeat yourself" vs. "Duplication is better than the wrong abstraction"[^1]
- "Move fast" vs. "Don't ship bugs"
- "Keep it simple" vs. "Make it extensible"

These aren't contradictions. They're tensions to balance. Context determines which way to lean.

[^1]: Sandi Metz, "The Wrong Abstraction," blog post, January 2016. "Prefer duplication over the wrong abstraction."

### When to Break Rules

You can break rules if:
1. You understand the rule and why it exists
2. You understand the cost of breaking it
3. The benefit outweighs the cost
4. You document the decision

"We're breaking X because Y. The tradeoff is Z."

**Don't break rules you don't understand.** That's not judgment; it's ignorance.

---

## Building the Skill

Finding your own answers is a skill. It improves with practice.

### Habits to Build

**Docs first.** Before every Stack Overflow search, check the official docs.

**Source when confused.** When the docs don't make sense, read the code.

**Note your searches.** What worked? What didn't? Refine your queries.

**Document your findings.** When you solve something hard, write it down. For yourself. For others.

**Verify always.** AI, Stack Overflow, and blog posts all need verification. Trust but verify.

### The Compound Effect

Every time you find an answer yourself:
- You learn the answer
- You learn where to find similar answers
- You build confidence in your ability to figure things out
- You reduce your dependency on others

This compounds. The engineer who can find their own answers moves faster, learns more, and becomes the person others ask.

---

## Red Flags

You're not finding your own answers if:

- You ask before searching
- You don't read error messages
- You don't know where to find your language's documentation
- You trust Stack Overflow answers without verification
- You copy-paste code you don't understand
- You can't explain why something works
- You don't know the difference between rules and guidelines

---

## The Standard

A professional engineer:

1. **Knows the hierarchy of truth.** Spec > Docs > Examples > Community > Opinion.

2. **Reads documentation effectively.** Not skimming, reading.

3. **Searches skillfully.** Specific queries, version numbers, error messages.

4. **Reads source code when needed.** Not afraid to look under the hood.

5. **Asks well when stuck.** Context, expected, actual, tried.

6. **Knows rules from guidelines.** And when to break each.

7. **Verifies before applying.** Especially community content and AI output.

---

## Before You Continue

Reflect:

- Where do you go first when you're stuck?
- When did you last read the actual docs (not Stack Overflow)?
- Can you find the source code for your dependencies?
- Do you verify AI-generated answers?
- Do you know the difference between rules and guidelines in your stack?

If any of these are weak, that's your next investment.

---

*The goal is not to memorize answers. The goal is to know how to find them, evaluate them, and apply them. That skill outlasts any specific technology.*
