---
title: "Teaching"
chapter: 17
summary: "Mentoring others. Leaving breadcrumbs."
---

> Mentoring others. Leaving breadcrumbs.

---

## The Obligation

You didn't learn alone.

Someone answered your questions. Someone reviewed your code. Someone wrote the documentation you read. Someone gave the talk that shifted your thinking. Someone wrote the book that changed how you work.

The chain of knowledge passes from engineer to engineer. You received. Now you give.

This isn't optional. It's how the profession works. The veterans who came before you invested in passing on what they learned. You have the same obligation to those who come after.

---

## Why Teach

### For Others

**Accelerate growth.** What took you months of struggle could take them weeks with guidance. The mistakes you made don't need to be repeated.

**Build the team.** A team where knowledge flows is stronger than a team of isolated experts. Teaching builds collective capability.

**Raise the bar.** When you share standards and practices, the whole codebase improves. Good patterns spread.

### For Yourself

**Deepen understanding.** Teaching forces clarity. You can't explain what you don't understand. The preparation reveals gaps in your own knowledge.[^1]

**Solidify learning.** Explaining something cements it in your memory. Teaching is a form of practice.

[^1]: Research consistently shows that teaching others is one of the most effective ways to learn. The "protégé effect" (Chase et al., 2009) demonstrates that students who teach material to others retain it better than those who simply study it.

**Build reputation.** The engineer who teaches becomes the engineer others seek out. This compounds over a career.

**Create leverage.** Knowledge you share works while you sleep. Documentation you write answers questions when you're not there. Teaching scales you.

---

## Mentoring

Mentoring is teaching applied to a person over time. A relationship, not a transaction.

### Finding Mentees

You don't need to be assigned. Look around.

**The junior engineer struggling with something you know.** Offer help. Not condescendingly; genuinely.

**The new team member.** They need context. You have it. Share it.

**Anyone asking good questions.** Good questions signal someone ready to learn.

### How to Mentor

**Ask questions instead of giving answers.** "What have you tried?" "What do you think is happening?" "What would you do next?" Questions build thinking skills. Answers just solve the immediate problem.

**Let them struggle productively.** The struggle is where learning happens. Don't rescue too quickly. But don't let them drown either.

**Provide safety to fail.** Make it clear that mistakes are expected and welcomed. Fear kills learning. Create space for experimentation.

**Share the why, not just the what.** "Do it this way" is less valuable than "here's why we do it this way." The principle transfers; the specific instruction doesn't.

**Give feedback, not criticism.** "Here's what would make this better" not "this is wrong." Focus on the work, not the person.

**Be patient.** Remember what it was like to not know. What's obvious to you wasn't always obvious.

### What to Teach

**The things that aren't written down.** Every codebase has unwritten rules. Every team has hidden context. Share it.

**The patterns you've learned.** The debugging approach that always works. The architecture pattern that fits this kind of problem. The mental model that makes things click.

**The mistakes you made.** Your failures are valuable. They save others from the same pain.

**How to think about problems.** Not just solutions, the process of finding solutions. Teach the fishing, not just the fish.

### The Time Investment

Mentoring takes time. It's an investment.

**Short-term cost:** Hours spent explaining instead of doing.

**Long-term return:** A more capable team. Knowledge that spreads. Someone who can do what only you could do before.

Make the investment. It pays off.

---

## Writing Documentation

Code is read more than it's written. Documentation is read even more.

### Who You're Writing For

**The new team member.** They don't know the history. They don't have the context. They need to get up to speed.

**The on-call engineer at 2 AM.** Something's broken. They need to understand the system. Fast.

**Future you.** In six months, you won't remember why you did this. Leave yourself notes.

**The person who inherits your code.** You'll move on someday. They'll need to maintain what you built.

### What to Document

**How to get started.** Setup instructions. Getting the thing running. The first steps.

**How it works.** Architecture. Data flow. Key concepts. The mental model.

**Why it's this way.** Architectural decisions. Tradeoffs made. Context that informed choices.

**How to operate it.** Runbooks. Common tasks. Troubleshooting guides.

**Where to find things.** Code organization. Important files. Entry points.

### How to Write It

**Assume no context.** The reader doesn't know what you know. Start from where they are, not where you are.

**Lead with the practical.** People come to docs with problems. Help them solve the problem first. Theory can come later.

**Be specific.** Vague documentation is useless. Examples. Concrete steps. Exact commands.

**Keep it short.** Nobody reads walls of text. Get to the point. Use structure: headers, lists, code blocks.

**Keep it current.** Outdated documentation is worse than no documentation. Update or delete. Review periodically.

### The Test

Could someone new understand this without talking to you?

If no, it's not documentation; it's notes.

---

## Leaving Breadcrumbs

Every artifact you create is a message to the future. Make it useful.

### Commit Messages

**Explain intent.** Not just what changed, why. "Fixed bug" is useless. "Fixed race condition in payment processing that caused duplicate charges under high load" is useful.

**Include context.** What ticket is this for? What was the problem? What's the relevant background?

**Write for the person doing `git blame`.** They're trying to understand why this code exists. Help them.

### Code Comments

**Explain why, not what.** The code shows what. Comments should explain why it's this way instead of another way.

**Document the non-obvious.** If something looks wrong but is actually right, explain it. If there's a gotcha, warn about it.

**Link to context.** "See RFC 7231 section 6.5.4" tells someone where to learn more.

**Don't comment obvious code.** `i++; // increment i` helps no one.

### READMEs

**Every project needs one.** What is this? How do I run it? Where do I start?

**Keep it updated.** A stale README is a lie. Review it when things change.

**Include the getting started.** The first thing someone needs. Don't make them hunt.

### Architecture Decision Records

**Document significant decisions.** What was decided. What alternatives were considered. What tradeoffs were made. Why this option was chosen.

**Keep them.** Don't delete old ADRs. They're history. They explain how you got here.

**Reference them.** When someone asks "why is it like this?" point to the ADR.

---

## Scaling Knowledge

Teaching one person at a time doesn't scale. Build systems that teach.

### Writing

**Blog posts.** Share what you've learned. The post you wish existed when you were struggling.

**Internal documentation.** Team wiki. Runbooks. Architecture docs. The knowledge that shouldn't live in one head.

**Code comments and commit messages.** The breadcrumbs you leave in the code itself.

### Talks and Presentations

**Team presentations.** Share something you learned. A pattern. A tool. A technique.

**Broader audiences.** Meetups. Conferences. The thing you know that others would benefit from.

**Recorded content.** A presentation lives once. A recording lives forever.

### Code and Tools

**Example code.** Show how to do things right. Reference implementations.

**Templates and generators.** Encode best practices in tools. Make the right thing the easy thing.

**Linters and automated checks.** Teach through tooling. The computer enforces what you've learned.

### Culture

**Make asking questions safe.** If people are afraid to ask, knowledge stays siloed.

**Celebrate learning.** Share learnings in team meetings. Acknowledge when people level up.

**Normalize teaching.** It's not extra work; it's part of the job.

---

## Teaching Anti-Patterns

### The Knowledge Hoarder

Keeps information to themselves. Answers questions minimally. Maintains power through scarcity.

**The problem:** Single point of failure. Team can't function without them. Slows everyone down.

**The fix:** If this is you, stop. Your value isn't in what you know; it's in what you can do. Share freely.

### The Firehose

Dumps everything they know at once. No structure. No pacing. Overwhelms the learner.

**The problem:** Nobody absorbs information this way. It's showing off, not teaching.

**The fix:** Start where they are. One thing at a time. Check understanding before moving on.

### The Impatient Expert

Sighs at basic questions. Makes people feel stupid for not knowing. "How do you not know this?"

**The problem:** People stop asking questions. Learning stops. Mistakes happen in silence.

**The fix:** Remember when you didn't know. Everyone starts somewhere. Create safety.

### The Absentee Mentor

Agrees to mentor but never makes time. Always too busy. Good intentions, no follow-through.

**The problem:** Worse than no mentor; builds expectation then disappoints.

**The fix:** If you commit, commit. If you can't make time, be honest about it.

---

## Being One Step Ahead

You don't have to be an expert to teach. You just have to be one step ahead.

The thing you learned last month is exactly what someone needs to learn today. Your recent struggle is fresh; you remember the confusion, the breakthrough, the path through.

**Don't wait until you're an expert.** By then, you'll have forgotten what it was like to not know. Teach from the edge of your knowledge.

**Share your learning journey.** "Here's what I just figured out" is valuable. Others are on the same path.

---

## The Chain Continues

Someone helped you. Now you help someone else. They'll help someone after.

This is how the profession renews itself. This is how knowledge survives the individuals who discover it. This is how each generation stands on the shoulders of the last.

**Be the steel that sharpens steel.** Pass on what you've learned. Leave the codebase better than you found it. Leave the team stronger than you found it. Leave breadcrumbs for those who follow.

The chain continues through you.

---

*Teach what you know. Mentor those behind you. Document for those who follow. Leave breadcrumbs everywhere. The knowledge you share is your legacy.*
