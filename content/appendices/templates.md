---
title: "Templates"
order: 2
type: reference
---

# Templates

> Copy. Paste. Adapt. Ship.

These templates encode best practices into reusable formats. They're intentionally minimal. Add what you need; remove what you don't.

---

## Pull Request Description

```markdown
## Summary

[1-2 sentences: What does this PR do and why?]

## Changes

- [Bullet list of key changes]

## Testing

- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] [Other relevant checks]

## Notes for Reviewers

[Anything reviewers should know: areas of uncertainty,
specific feedback requested, context that's not obvious]

## Related

- Closes #[issue]
- Depends on #[PR] (if applicable)
- ADR: [link] (if applicable)
```

---

## Architecture Decision Record (ADR)

```markdown
# ADR-[number]: [Title]

**Status:** [Proposed | Accepted | Deprecated | Superseded by ADR-X]
**Date:** [YYYY-MM-DD]
**Deciders:** [List of people involved]

## Context

[What is the situation? What problem are we solving?
What constraints exist? 2-4 sentences.]

## Decision

[What did we decide? State it clearly in 1-2 sentences.]

## Options Considered

### Option A: [Name]
- **Optimizes for:** [What this does well]
- **Makes harder:** [What this costs]
- **Change cost:** [Low/Medium/High]

### Option B: [Name]
- **Optimizes for:** [What this does well]
- **Makes harder:** [What this costs]
- **Change cost:** [Low/Medium/High]

[Add more options as needed]

## Consequences

**What we gain:**
- [Benefit 1]
- [Benefit 2]

**What we give up:**
- [Tradeoff 1]
- [Tradeoff 2]

**What this means for future work:**
- [Constraint or implication]

## References

- [Links to related docs, research, prior art]
```

---

## Incident Update

Use this template for communicating during an active incident. Post every 30 minutes (or at significant changes).

```markdown
## Incident Update — [Timestamp]

**Status:** [Investigating | Identified | Monitoring | Resolved]
**Severity:** [P1/P2/P3]
**Duration:** [X minutes/hours since first alert]

### Current State
[1-2 sentences: What is happening right now? What's the user impact?]

### What We Know
- [Fact 1]
- [Fact 2]

### What We're Doing
- [Current action 1]
- [Current action 2]

### Next Update
[Time of next update, or "when status changes"]

---
Incident Commander: [Name]
Technical Lead: [Name]
```

---

## Postmortem

```markdown
# Postmortem: [Incident Title]

**Date of Incident:** [YYYY-MM-DD]
**Duration:** [Start time - End time, total duration]
**Severity:** [P1/P2/P3]
**Author:** [Name]
**Status:** [Draft | In Review | Complete]

## Summary

[2-3 sentences: What happened? What was the impact?]

## Timeline

All times in [timezone].

| Time | Event |
|------|-------|
| HH:MM | [First alert / symptom] |
| HH:MM | [Key event] |
| HH:MM | [Mitigation applied] |
| HH:MM | [Resolved] |

## Impact

- **Users affected:** [Number or percentage]
- **Duration of impact:** [Time]
- **Business impact:** [Revenue, reputation, SLA, etc.]

## Root Cause

[What actually caused the incident? Be specific.
This is not "human error" — dig deeper.]

## Contributing Factors

- [Factor 1: What made this possible or worse?]
- [Factor 2]

## What Went Well

- [Thing that worked 1]
- [Thing that worked 2]

## What Went Poorly

- [Thing that didn't work 1]
- [Thing that didn't work 2]

## Action Items

| Action | Owner | Priority | Due Date | Status |
|--------|-------|----------|----------|--------|
| [Specific action] | [Name] | [P1/P2/P3] | [Date] | [Open/Done] |

## Lessons Learned

[What did we learn that applies beyond this incident?]

## References

- [Link to incident channel]
- [Link to relevant dashboards]
- [Link to related ADRs or docs]
```

---

## Runbook

```markdown
# Runbook: [Service/Process Name]

**Last Updated:** [Date]
**Owner:** [Team/Person]

## Overview

[1-2 sentences: What is this service/process? Why does it exist?]

## Common Symptoms

| Symptom | Likely Cause | Quick Action |
|---------|--------------|--------------|
| [What you see] | [Why it happens] | [What to try first] |

## Diagnostic Steps

### 1. Check Service Health
```bash
[command to check health]
```
Expected output: [what healthy looks like]

### 2. Check Logs
```bash
[command to check logs]
```
Look for: [what to look for]

### 3. Check Dependencies
- [Dependency 1]: [how to check]
- [Dependency 2]: [how to check]

## Mitigation Steps

### Restart Service
```bash
[restart command]
```
⚠️ **Safe?** [Yes / Yes with caveats / No — explain]

### Scale Up
```bash
[scale command]
```

### Rollback

⚠️ **Before rolling back, verify:**
- [ ] No irreversible migrations ran
- [ ] No side effects that can't be undone (payments, emails, etc.)
- [ ] Rollback target is known-good

```bash
[rollback command]
```

### Failover
[Steps for failover if applicable]

## Escalation

| Level | Contact | When |
|-------|---------|------|
| L1 | [Team/person] | [First response] |
| L2 | [Team/person] | [If L1 can't resolve in X minutes] |
| L3 | [Team/person] | [If major impact or data loss risk] |

## Related

- Dashboard: [link]
- Logs: [link]
- Alerts: [link]
- Architecture docs: [link]
```

---

## Technical Debt Register Entry

```markdown
## Debt: [Short Title]

**ID:** DEBT-[number]
**Created:** [Date]
**Owner:** [Team/Person]
**Status:** [Active | Scheduled | Paid | Accepted]

### Description

[What is the debt? Be specific. 2-4 sentences.]

### Type

- [ ] Deliberate (we chose this tradeoff knowingly)
- [ ] Accidental (we discovered it later)
- [ ] Bit rot (accumulated over time)
- [ ] Environmental (tooling, dependencies, etc.)

### Impact

**Current cost:**
- [How it hurts us now: slower development, operational burden, etc.]

**Risk if unpaid:**
- [What gets worse over time or what could go wrong]

### Payback Trigger

When should we pay this debt? (Check all that apply)

- [ ] Before we can [specific feature/capability]
- [ ] When [metric] reaches [threshold]
- [ ] If [risk event] occurs
- [ ] During [scheduled maintenance window]
- [ ] When touching [related area]

### Estimated Effort

[T-shirt size: S/M/L/XL, or story points, or time range]

### Payback Plan

[Brief description of how to fix it, or link to design doc]

### References

- [Link to code/area affected]
- [Link to related ADR if deliberate]
- [Link to incidents caused by this debt]
```

---

## Checklist: Safe Deploy

Use before deploying significant changes.

```markdown
## Pre-Deploy Checklist

### Code Ready
- [ ] PR approved
- [ ] Tests pass (unit, integration, E2E)
- [ ] No known regressions

### Migration Safety
- [ ] No irreversible migrations (or rollback plan documented)
- [ ] Backfills tested at scale (if applicable)
- [ ] Data migration is idempotent

### Observability
- [ ] Key metrics identified
- [ ] Alerts in place
- [ ] Dashboard ready for monitoring

### Rollback Ready
- [ ] Previous version is known-good
- [ ] Rollback command documented
- [ ] Rollback is safe (no migration conflicts)

### Feature Flags (if applicable)
- [ ] New code behind flag
- [ ] Flag defaults to off
- [ ] Kill switch tested

### Communication
- [ ] Team notified
- [ ] On-call aware
- [ ] Stakeholders informed (if user-facing)

## During Deploy
- [ ] Watch metrics during rollout
- [ ] Watch error rates
- [ ] Watch latency

## Post-Deploy
- [ ] Verify expected behavior
- [ ] Monitor for 15-30 minutes
- [ ] Close the loop with stakeholders
```

---

*Templates are starting points. Adapt them to your context. What matters is that you have a starting point at all.*
