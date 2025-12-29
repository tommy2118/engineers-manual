---
title: "Operability"
chapter: 10
summary: "Building systems that run well. SLOs, alerts, deploys, observability."
---

> Build it so you can run it.

---

## Why Operability Matters

You don't just ship code. You ship a system that will run in production, probably at 2 AM, possibly while you're on vacation.

Operability is the quality of a system that makes it easy to run, monitor, and fix when things go wrong. It's not an afterthought. It's part of the design.

**Operability means:**
- You know when something is wrong before users tell you
- You can understand what's happening inside the system
- You can deploy changes safely
- You can recover quickly when things break
- You're not dependent on heroics to keep things running

If you can't operate it, you didn't really ship it.

---

## Service Level Objectives (SLOs)

An SLO is a target for how well your service should perform.[^1]

[^1]: SLOs were formalized by Google's Site Reliability Engineering practice. See *Site Reliability Engineering* (2016) and *The Site Reliability Workbook* (2018) for comprehensive treatment.

### The Basics

**SLI (Service Level Indicator):** What you measure. Request latency, error rate, availability.

**SLO (Service Level Objective):** The target for that measurement. "99.9% of requests complete in under 200ms."

**Error Budget:** How much failure is acceptable. If your SLO is 99.9%, your error budget is 0.1%.

### Why SLOs Matter

Without SLOs, you're flying blind. Every incident feels equally urgent. Every performance regression is a crisis.

With SLOs:
- You know when you're at risk versus when you're fine
- You can make rational tradeoffs about reliability vs. features
- You have a shared language with stakeholders about "good enough"

### Setting SLOs

**Start with user expectations.** What does the user actually need? Not "as fast as possible" but "fast enough that they don't notice."

**Be realistic.** 100% is not achievable. Even 99.99% is extremely hard. Start with something achievable.

**Measure what matters.** Latency at the 50th percentile is less useful than the 99th. The median user is fine; it's the tail that hurts.

**Common SLOs:**

| Type | What It Measures | Example |
|------|------------------|---------|
| Availability | Is it up? | 99.9% of requests succeed |
| Latency | Is it fast? | 95% of requests < 200ms, 99% < 500ms |
| Throughput | Can it handle load? | Sustain 10k requests/second |
| Error rate | Is it correct? | < 0.1% error rate |

### Using Error Budgets

If you're within budget, you can take risks. Ship features. Experiment.

If you're burning budget, slow down. Focus on reliability. Pay down operational debt.

The error budget makes tradeoffs explicit. "We can't ship this feature because we've burned 80% of our error budget this month" is a clear, defensible statement.

---

## Alerting

Alerts tell you when something is wrong. Bad alerts tell you constantly, about nothing.

### Good Alert Characteristics

**Actionable.** If the alert fires, there's something a human needs to do. If there's nothing to do, it shouldn't be an alert.

**Specific.** The alert tells you what's wrong and where to start looking. "Error rate elevated" is better than "something is wrong."

**Urgent.** It requires attention now. If it can wait until morning, it's not an alert; it's a ticket.

**Rare.** Alert fatigue is real. If you're woken up every night, you'll start ignoring pages.

### The Alert Checklist

Before adding an alert, answer:

- [ ] What specific condition triggers this?
- [ ] What's the user impact?
- [ ] What should the on-call engineer do when this fires?
- [ ] Is there a runbook? (There should be. See [Runbook template](/appendices/templates/#runbook).)
- [ ] Is this urgent enough to wake someone up?
- [ ] Will this alert frequently enough to cause fatigue?

### Paging vs. Ticketing

**Page (wake someone up) when:**
- Users are currently affected
- The problem is getting worse
- Intervention is required to prevent data loss or extended outage

**Create a ticket (handle during business hours) when:**
- The system is degraded but functional
- There's no immediate user impact
- It can wait until someone is available

**Don't alert at all when:**
- It's informational
- It resolves on its own
- There's nothing a human can do

### Alert Hygiene

**Review alerts regularly.** If an alert never fires, is it needed? If it fires constantly, is it tuned correctly?

**Tune thresholds.** Too sensitive = noise. Too lax = missed incidents.

**Delete noisy alerts.** An ignored alert is worse than no alert. It trains people to ignore pages.

**Update runbooks.** When you learn something new from an alert, update the runbook.

---

## Observability

Observability is how well you can understand what's happening inside your system from its outputs.[^2]

[^2]: The term "observability" was introduced to software from control theory by Charity Majors and others at Honeycomb. See *Observability Engineering* (2022) by Majors, Fong-Jones, and Miranda.

### The Three Pillars

**Logs:** What happened. Discrete events with context.

**Metrics:** How much is happening. Aggregated measurements over time.

**Traces:** How requests flow through the system. The path from start to finish.

Each serves a different purpose:

| Question | Use |
|----------|-----|
| "Did this happen?" | Logs |
| "How often does this happen?" | Metrics |
| "Where is time spent in this request?" | Traces |

### Good Logging

**Log at the right level:**
- ERROR: Something broke
- WARN: Something concerning that should be investigated
- INFO: Significant business events
- DEBUG: Details for troubleshooting (off in production by default)

**Include context:** Request ID, user ID, relevant parameters. You'll need this when debugging.

**Structure your logs:** JSON or structured format. Makes searching and aggregating possible.

**Don't log secrets:** No passwords, tokens, PII in logs. Ever.

### Good Metrics

**Focus on the four golden signals:**[^3]
- Latency: How long things take
- Traffic: How much demand exists
- Errors: How often things fail
- Saturation: How full your resources are

[^3]: The four golden signals are from Google's *Site Reliability Engineering* book (2016), Chapter 6: "Monitoring Distributed Systems."

**Label appropriately:** Endpoint, status code, service, region. Enough to slice the data meaningfully.

**Watch cardinality:** Too many unique label values = expensive and slow.

### Good Tracing

**Trace at boundaries:** Service-to-service calls, database queries, external API calls.

**Propagate context:** Pass trace IDs across service boundaries so you can follow a request end-to-end.

**Sample intelligently:** You don't need every trace. Sample a percentage, but keep all traces that represent errors or high latency.

---

## Safe Deployments

Deploying is the most common way to break production. Do it safely.

### Before You Deploy

**The checklist:**
- [ ] Tests pass (unit, integration, E2E as appropriate)
- [ ] Code reviewed and approved
- [ ] Migrations are safe (reversible or tested at scale)
- [ ] Feature flags in place for risky changes
- [ ] Rollback plan documented
- [ ] On-call aware
- [ ] Monitoring ready to detect problems

### Deployment Strategies

**Rolling deploy:** Replace instances gradually. If something's wrong, stop the rollout.

**Blue-green:** Run two environments. Switch traffic from old to new. Easy rollback.

**Canary:** Send a small percentage of traffic to the new version. Watch for problems. Expand gradually.

**Feature flags:** Deploy the code, but keep the feature off. Turn it on gradually. Turn it off instantly if problems occur.

### Migration Safety

Migrations are often irreversible. Treat them with care.

**Before migrating:**
- [ ] Migration is backwards-compatible with current code
- [ ] Migration has been tested on production-like data
- [ ] Rollback strategy is documented (even if it's "restore from backup")
- [ ] Estimated runtime is acceptable for production

**Patterns for safe migrations:**
1. **Add new column/table** (backwards-compatible)
2. **Deploy code that writes to both old and new**
3. **Backfill new column/table**
4. **Deploy code that reads from new**
5. **Remove old column/table** (now safe)

This multi-step approach keeps each deploy reversible.

### Backfills

Backfilling data at scale can be dangerous.

**Make backfills:**
- **Idempotent:** Running twice produces the same result
- **Throttled:** Don't overwhelm the database
- **Resumable:** Can pick up where you left off if interrupted
- **Monitored:** You know how far along you are

### Feature Flags

Feature flags are your safety net.

**Use flags for:**
- New features being tested
- Risky changes that might need quick rollback
- Gradual rollouts to subset of users
- A/B testing

**Flag hygiene:**
- Remove flags once the feature is stable
- Document what each flag does
- Have a kill switch (flag that turns off everything new)

---

## On-Call

Someone has to be responsible when production breaks. Do it sustainably.

### On-Call Hygiene

**Runbooks exist and are current.** You shouldn't need tribal knowledge to respond.

**Escalation paths are clear.** Who do you call when you're stuck?

**Handoffs are real.** Brief the next person. Don't just throw them the pager.

**Load is sustainable.** If you're woken up every night, something is broken.

**Follow-up happens.** If an alert fires, there should be action to prevent it from recurring.

### The On-Call Rotation

**Rotate fairly.** Everyone takes a turn. Seniority doesn't exempt you.

**Compensate appropriately.** On-call is work. Treat it that way.

**Protected time after incidents.** If you were up until 3 AM, you're not at your desk at 9 AM.

**Post-incident review.** Every significant incident gets a post-mortem. Learn and improve.

---

## Operational Excellence Checklist

Before shipping a new service (or auditing an existing one):

### Monitoring
- [ ] Key metrics are tracked (latency, errors, saturation)
- [ ] Dashboards exist and are useful
- [ ] SLOs are defined
- [ ] Alerts are configured and tested
- [ ] Runbooks exist for each alert

### Deployment
- [ ] Deployment is automated
- [ ] Rollback is tested and documented
- [ ] Canary or staged rollout is possible
- [ ] Feature flags are in place for risky changes

### Reliability
- [ ] Single points of failure are identified and mitigated
- [ ] Graceful degradation is implemented where possible
- [ ] Rate limiting protects against overload
- [ ] Circuit breakers prevent cascade failures

### Documentation
- [ ] Architecture is documented
- [ ] Dependencies are documented
- [ ] On-call runbook exists
- [ ] Incident response process is documented

---

## Anti-Patterns

### "We'll Add Monitoring Later"

You won't. And when the system breaks, you'll wish you had.

**Fix:** Monitoring is part of "done." No deploy without observability.

### Alert on Everything

If everything alerts, nothing alerts. Alert fatigue leads to ignored pages leads to missed incidents.

**Fix:** Every alert must be actionable and urgent. Audit and prune regularly.

### Manual Deploys

If deploys require special knowledge or manual steps, they'll go wrong. And the one person who knows how is on vacation.

**Fix:** Automate deployments completely. Anyone on the team can deploy.

### Hero Operations

One person who knows all the systems and saves every incident. Single point of failure. Burnout waiting to happen.

**Fix:** Document everything. Rotate on-call. Cross-train deliberately.

---

*Build it so you can run it. Monitor so you know when it's broken. Deploy so you can fix it fast. Operability is part of the craft.*
