---
title: "Incidents"
chapter: 14
summary: "When production is on fire. Triage, communicate, learn."
---

> When production is on fire.

---

## The Nature of Incidents

Production is broken. Users are affected. The pager goes off. Your heart rate spikes.

This is an incident. Not a bug to fix at your leisure. Not a task for the backlog. An emergency requiring immediate response.

How you handle incidents defines you as an engineer. Not because heroics matter, but because incidents reveal your training, your systems, and your character under pressure.

---

## When It Hits

The alert fires. Something is wrong.

### First Response

**Don't panic.** Panic makes you stupid. Take a breath. You've trained for this.

**Assess quickly.** What's the signal? What's affected? How bad is it?

**Declare if needed.** If it's real, say so. "We have an incident. [Brief description]. I'm investigating."

**Get the right people.** Who needs to know? Who can help? Don't be a hero; get help if you need it.

### The First Ten Minutes

The first ten minutes set the trajectory. They're the most important.

**Understand scope.** How many users? Which features? Which regions?

**Check the obvious.** Recent deploys? Infrastructure changes? Upstream dependencies?

**Communicate early.** Even "we're aware and investigating" is better than silence.

---

## Triage

Triage is battlefield medicine. Limited resources, urgent decisions, imperfect information.

### The Priority Order

1. **Assess impact.** Who's affected? How badly? Is it getting worse?

2. **Stabilize.** Stop the bleeding. Rollback if you can. Mitigate if you can't.

3. **Communicate.** Tell stakeholders what's happening. Set expectations.

4. **Diagnose.** Now find the root cause.

5. **Resolve.** Fix it properly.

### Stabilize Before You Diagnose

This is counterintuitive but critical.

Your instinct is to understand what went wrong. To find the root cause. To fix it properly.

But users are suffering now. Every minute you spend diagnosing is a minute they're down.

**Get users back to a working state first.** Roll back the bad deploy. Switch to the backup. Turn off the broken feature. Mitigate.

Then, with users stable, figure out what happened.

### The Rollback Decision

If a recent change caused the problem, rolling back is often the fastest fix.

**Roll back if:**
- You can identify a recent change as the likely cause
- Rolling back is low-risk
- You can verify the rollback fixes the issue

**Don't roll back if:**
- The change included data migrations that can't be undone
- Rolling back would cause data loss or corruption
- There are irreversible side effects (payments processed, emails sent, external state changed)
- Rolling back would cause a different outage
- You're not sure the change is the cause and rollback itself is risky

**The principle:** When in doubt, choose the fastest *reversible* mitigation. Rollback is often that, but not always.

Before rolling back, verify:
- [ ] No irreversible migrations ran
- [ ] No side effects that can't be undone
- [ ] Rollback target is a known-good state

---

## Communication Under Fire

Silence during an incident is terrifying. People imagine the worst. They start poking around, making things worse. They escalate unnecessarily.

**Communicate constantly.** Even when you don't know much.

### What to Communicate

**To your team:**
- What we know
- What we're doing
- What we need help with
- When we'll update next

**To stakeholders:**
- Impact: who's affected, how badly
- Status: what we're doing about it
- Timeline: when we expect updates, resolution
- Actions: what they should tell customers, if anything

**To users (if applicable):**
- Acknowledgment: we know there's a problem
- Impact: what's affected
- Timeline: when we expect it fixed
- Updates: where to watch for news

### How to Communicate

**Be clear.** No jargon. No ambiguity. Say exactly what you mean.

**Be brief.** People are stressed. Get to the point. Details later.

**Be honest.** If you don't know, say so. "We're investigating" is fine. Speculation is not.

**Update regularly.** Every 15-30 minutes during active incidents. Even if nothing has changed, "Still investigating, no new information" is an update. (See [Incident Update template](/appendices/templates/#incident-update).)

**Document as you go.** You'll need this for the post-mortem. Write down what you did and when.

### The Status Page

If you have one, use it. If you don't, get one.

A status page gives users one place to look. It reduces support load. It builds trust.

---

## Roles During Incidents

Large incidents need coordination. Define roles.

### Incident Commander

**Owns the incident.** Makes decisions. Coordinates response. Doesn't necessarily do the technical work.

Responsibilities:
- Maintain situational awareness
- Assign tasks
- Make decisions when consensus isn't possible
- Manage communication cadence
- Declare when incident is over

### Technical Lead

**Owns the diagnosis and fix.** Does or directs the technical work.

Responsibilities:
- Investigate root cause
- Determine fix
- Implement or delegate implementation
- Verify fix works

### Communications Lead

**Owns stakeholder communication.** Keeps everyone informed.

Responsibilities:
- Update status page
- Communicate to stakeholders
- Manage customer communication
- Handle incoming questions

### Scribe

**Documents everything.** Creates the incident timeline.

Responsibilities:
- Record actions and timestamps
- Capture decisions and rationale
- Note who did what
- Prepare materials for post-mortem

For small incidents, one person wears all hats. For large incidents, separate them.

---

## The Investigation

Once users are stable, find the root cause.

### Gather Information

**Logs.** What do they show around the time of impact?

**Metrics.** What changed? Error rates, latency, throughput, resource usage.

**Changes.** What was deployed? What config changed? What external factors?

**Timeline.** When did it start? When did we notice? What happened in between?

### The Usual Suspects

**Recent deploys.** The most common cause. Check the deploy log.

**Configuration changes.** Someone changed something. Feature flags, environment variables, infrastructure config.

**Upstream dependencies.** Third-party service went down. DNS issues. Certificate expiry.

**Resource exhaustion.** Out of memory. Out of disk. Out of connections.

**Traffic spike.** More load than the system can handle.

**Data issues.** Bad data in the system. Migration problems. Schema issues.

### Follow the Evidence

Don't guess. Follow the data. Let the evidence lead you.

If you think you know what happened, verify. You might be wrong. Confirmation bias is real.

---

## Resolution

You know what's wrong. Now fix it.

### The Fix

**Prefer reversible actions.** Rollback over forward-fix if possible.

**Test if you can.** A broken fix on top of a broken system is worse.

**Communicate the fix.** "Deploying a fix now, will verify in 5 minutes."

**Verify it worked.** Don't declare victory until you've confirmed. Check metrics. Check logs. Check user reports.

### Declaring Resolved

The incident is resolved when:
- The immediate problem is fixed
- Users can work normally
- Metrics are back to baseline
- No further intervention is needed

"Resolved" doesn't mean "root cause found and fixed permanently." It means "users are no longer affected."

Follow-up work goes in the post-mortem.

---

## Post-Incident Learning

The incident is over. Now learn from it.

### The Blameless Post-Mortem

**The goal is learning, not punishment.**[^1] (See [Postmortem template](/appendices/templates/#postmortem).)

[^1]: The concept of blameless post-mortems was popularized by John Allspaw at Etsy and formalized in Google's *Site Reliability Engineering* book (2016). Sidney Dekker's *The Field Guide to Understanding Human Error* (2006) provides the theoretical foundation.

If people are afraid of blame, they'll hide information. They'll cover mistakes. You'll learn nothing.

**Focus on systems, not individuals.** The question isn't "who screwed up?" It's "what allowed this to happen? What can we change so it doesn't happen again?"

### The Questions

**What happened?**
- Timeline of events
- What broke
- Who was affected

**Why did it happen?**
- Root cause
- Contributing factors
- The "five whys"[^2]

[^2]: The Five Whys technique originated in the Toyota Production System, developed by Sakichi Toyoda. Asking "why" repeatedly (typically five times) helps move from symptoms to root causes.

**How did we detect it?**
- What alerted us
- How long until we knew
- Were the right people notified

**How did we respond?**
- What worked well
- What was slow or confusing
- Did we have the information we needed

**What can we do to prevent it?**
- Code changes
- Architecture changes
- Process changes

**What can we do to detect it faster?**
- Better monitoring
- Better alerts
- Better on-call practices

**What can we do to recover faster?**
- Better runbooks
- Better tools
- Better communication

### Follow-Through

A post-mortem without action items is a waste.

Create tickets for the follow-up work. Assign owners. Set deadlines. Track completion.

The same incident shouldn't happen twice. If it does, you didn't follow through.

---

## You Fall to Your Training

In a crisis, you won't rise to the occasion. You'll fall to the level of your training.

This is Chapter 4 applied to incidents.

### Before the Incident

**Know your systems.** How do they work? How do they fail? What does the monitoring show?

**Know your tools.** Dashboards. Logs. Runbooks. Where are they? How do you use them?

**Know your escalation paths.** Who do you call? When? How?

**Practice.** Game days. Chaos engineering. Simulated incidents. Practice until response is automatic.

### Building Muscle Memory

**Write runbooks.** Step-by-step guides for common incidents. Follow them during practice.

**Run drills.** Simulate incidents. Practice the response. Find the gaps.

**Review past incidents.** Learn from what happened. What would you do differently?

**Maintain on-call hygiene.** Keep escalation contacts current. Keep runbooks updated. Keep dashboards working.

### The Calm Under Fire

Calm is contagious. So is panic.

If you stay calm, others will too. If you panic, the incident gets worse.

The military drills this relentlessly. Emergency procedures, response protocols, communication standards: all practiced until they're automatic. Not because anyone enjoys repetition, but because in an actual emergency, you won't have time to think. You'll do whatever you've done a hundred times in training. The purpose of drilling is to make the right response feel boring. When the actual crisis hits, you execute the same steps you've executed in every drill. Nothing special. Just the process.

**Breathe.** Slow down. Think before you act.

**Speak slowly and clearly.** Even if your heart is racing.

**Follow the process.** The process exists for a reason. Trust it.

---

## Anti-Patterns

### Hero Culture

One person who always saves the day. Knows all the systems. Always on call.

**The problem:** Single point of failure. Burnout. Knowledge silos.

**The fix:** Distribute knowledge. Rotate on-call. Document everything.

### Blame

Finding someone to punish after incidents.

**The problem:** People hide mistakes. They fear reporting. You learn nothing.

**The fix:** Blameless post-mortems. Focus on systems. Celebrate learning.

### Skipping Post-Mortems

Too busy. Too tired. The incident is over, let's move on.

**The problem:** Same incidents repeat. No learning. Technical debt accumulates.

**The fix:** Make post-mortems mandatory. Schedule them immediately after resolution.

### Incomplete Follow-Through

Great post-mortem. Good action items. Never completed.

**The problem:** Incidents recur. Trust erodes. Post-mortems become theater.

**The fix:** Track action items. Assign owners. Hold people accountable. Review completion.

---

## The Incident Lifecycle

1. **Detect.** Something is wrong.
2. **Triage.** How bad is it? Who's affected?
3. **Stabilize.** Stop the bleeding.
4. **Communicate.** Keep everyone informed.
5. **Investigate.** Find the root cause.
6. **Resolve.** Fix it.
7. **Verify.** Confirm the fix worked.
8. **Learn.** Post-mortem. Action items. Follow-through.

Each step matters. Do them in order.

---

*Stay calm. Stabilize first. Communicate always. Learn from everything. You fall to your training, so train well.*
