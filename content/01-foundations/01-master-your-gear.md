---
title: "Master Your Gear"
chapter: 1
part: 1
status: draft
summary: "Know your tools. Maintain them. Know when to use each one."
---

# Master Your Gear

> A military member relies on their gear. They are masters of it. They understand it and maintain it. Whether it is a weapon or a flashlight, they know where it is and how and when to use it.

---

## The Principle

Your tools are extensions of you. In combat, a jammed weapon is a death sentence. In engineering, a broken environment is hours lost. A tool you don't understand is a tool that will fail you when it matters most.

Mastery isn't optional. It's foundational.

This means:
- **Know what you have.** Every tool in your kit, what it does, where it is.
- **Know how to use it.** Not just the basics; the advanced features that save you when things go wrong.
- **Know when to use it.** The right tool for the right job. Don't use a hammer on screws.
- **Maintain it.** A dull blade is worse than no blade. Keep your tools sharp.

---

## The Toolkit

Every engineer's kit is different. But the categories are the same.

### The Editor/IDE

This is your primary weapon. You'll spend more time here than anywhere else.

**Know it cold:**
- Navigation: Jump to definition, find references, go to file
- Editing: Multi-cursor, find/replace with regex, code folding
- Refactoring: Rename, extract method, inline, move
- Debugging: Breakpoints, step through, watch expressions, conditional breaks
- Integration: Git, terminal, test runner, linter

**Pick one. Master it.**[^1] VS Code, Vim, Emacs, RubyMine; it doesn't matter which. What matters is you're not fumbling when you need to move fast.

[^1]: "Use a Single Editor Well" — Tip #22 from Hunt & Thomas, *The Pragmatic Programmer* (1999).

If you're reaching for the mouse for common operations, you're not there yet.

### The Terminal

The terminal is your direct line to the machine. GUI tools come and go. The terminal endures.

**Core competencies:**
- Navigation: `cd`, `ls`, `pwd`, `find`, `locate`
- File operations: `cat`, `less`, `head`, `tail`, `grep`, `awk`, `sed`
- Process management: `ps`, `top`, `kill`, `jobs`, `bg`, `fg`
- Networking: `curl`, `wget`, `ssh`, `scp`, `netstat`, `dig`
- Text processing: pipes, redirects, xargs

**Know your shell.** Bash, Zsh, or Fish. Pick one. Configure it. Aliases for common commands. Custom prompt that tells you what you need.

```bash
# Examples of aliases that pay dividends
alias gs='git status'
alias gd='git diff'
alias gc='git commit'
alias gp='git push'
alias be='bundle exec'
alias dc='docker-compose'
```

**Keyboard shortcuts matter:**
- `Ctrl+R`: Reverse search history
- `Ctrl+A`/`Ctrl+E`: Beginning/end of line
- `Ctrl+W`: Delete word backward
- `Ctrl+U`: Delete to beginning of line
- `!!`: Repeat last command
- `!$`: Last argument of previous command

### The Debugger

Print statements are fine. A real debugger is better.

**When to reach for the debugger:**
- The bug is in logic, not data
- You need to understand flow, not just state
- You're in unfamiliar code
- Print statements aren't cutting it

**Debugger essentials:**
- Set breakpoints (including conditional)
- Step over, step into, step out
- Inspect variables and call stack
- Evaluate expressions mid-execution
- Continue to next breakpoint

For Ruby: `binding.pry`, `byebug`, or IDE debugger
For JavaScript: Browser DevTools, VS Code debugger
For systems: `gdb`, `lldb`

**Don't guess. Inspect.** The debugger shows you what's actually happening, not what you think is happening.

### The Profiler

When it's slow, don't guess. Measure.

**Know how to profile:**
- CPU: Where is time being spent?
- Memory: What's allocating? What's leaking?
- I/O: What's waiting on disk or network?
- Database: Which queries are slow?

**Tools by context:**
- Ruby: `ruby-prof`, `stackprof`, `rack-mini-profiler`
- Browser: DevTools Performance tab, Lighthouse
- Database: `EXPLAIN ANALYZE`, slow query logs
- System: `htop`, `iotop`, `strace`

**The profiler tells the truth.** Your intuition about performance is usually wrong.[^2] Measure first. Optimize second.

[^2]: "Programmers waste enormous amounts of time thinking about... the speed of noncritical parts of their programs." — Donald Knuth, "Structured Programming with go to Statements" (1974). Often paraphrased as "premature optimization is the root of all evil."

### Version Control (Git)

Git is not optional. Git mastery is not optional.

**Beyond the basics:**
- `git rebase -i`: Clean up commits before pushing
- `git bisect`: Binary search for the commit that broke things
- `git stash`: Set aside work temporarily
- `git reflog`: Recover from mistakes
- `git cherry-pick`: Apply specific commits
- `git blame`: Who changed this line and when

**Understand the model:** Commits are snapshots. Branches are pointers. HEAD is where you are. The index is the staging area. Once you understand the model, the commands make sense.

**Commit discipline:**
- Small, focused commits
- Meaningful messages (why, not what)
- Main is always deployable
- Rebase to clean up before merge

### Containers (Docker)

Containers are the deployment unit. Know them.

**Essential commands:**
```bash
docker build -t myapp .
docker run -it --rm myapp
docker exec -it <container> /bin/bash
docker logs -f <container>
docker ps -a
docker system prune
```

**Understand the layers:** Each Dockerfile instruction creates a layer. Order matters for caching. Minimize layers. Understand what's in your base image.

**docker-compose for local dev:** Define your stack. Bring it up with one command. Tear it down cleanly. Reproducible environments.

```yaml
# docker-compose.yml basics
services:
  app:
    build: .
    volumes:
      - .:/app
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: secret
```

### Infrastructure Tools

Your stack: Terraform, Nomad, Vault, AWS.

**Terraform:**
- Infrastructure as code. Declarative.
- `terraform plan` before `terraform apply`. Always.
- State is sacred. Don't manually edit.
- Modules for reuse.

**Vault:**
- Secrets don't live in code. Ever.
- Dynamic secrets > static secrets
- Understand lease duration and renewal
- Know how to authenticate your app

**AWS:**
- Know the services you use deeply
- Understand IAM. Really understand it.
- Know the cost model. Surprises hurt.
- Use the CLI. `aws s3`, `aws ec2`, `aws logs`

---

## Maintain Your Environment

A cluttered workshop produces cluttered work.

### Keep It Clean

- **Dotfiles in version control.** Your shell config, editor config, git config, all versioned. Reproducible on any machine.
- **Prune regularly.** Old branches, stale containers, unused dependencies. Cruft accumulates.
- **Document your setup.** New machine? You should be productive in hours, not days.

### Keep It Updated

- **Dependencies:** Security patches matter. Update regularly, but not blindly. Test after updates.
- **Tools:** New versions bring improvements. But stability matters. Don't chase bleeding edge in production.
- **Knowledge:** The field moves. Your tools evolve. Schedule time to learn what's changed.

### Keep It Backed Up

- **Code:** It's in Git. That's your backup.
- **Config:** Dotfiles repo. Cloud sync for non-sensitive config.
- **Secrets:** In Vault or 1Password. Never local-only.
- **Data:** If it matters, it's backed up. Test your restores.

---

## Your Weapon Is Your Mind

Tools are extensions of your mind. But the mind is the weapon.

### Keep It Sharp

**Practice deliberately:**
- Katas and exercises:[^3] Small problems to build muscle memory
- Side projects: Apply new techniques in low-stakes environments
- Reading: The canon exists. The veterans wrote it down.

[^3]: The concept of "Code Kata" was introduced by Dave Thomas (co-author of *The Pragmatic Programmer*) in 2003, drawing parallels to martial arts practice. See codekata.com.

**Reflect regularly:**
- What slowed me down today?
- What tool did I reach for that didn't exist?
- What did I learn?

**Rest appropriately:**
- A tired mind makes mistakes
- Step away when stuck
- Sleep on hard problems

### Know Your Limitations

- You can't hold everything in working memory. Write it down.
- Your intuition is often wrong about performance. Measure.
- You're biased toward familiar tools. Challenge that.
- You'll forget how this works in six months. Document.

---

## Know When to Use What

The master knows which tool to reach for.

| Situation | Tool |
|-----------|------|
| Need to understand flow | Debugger |
| Need to understand state | Print/log statements |
| It's slow | Profiler first, then optimize |
| It's broken | Reproduce, then debugger |
| It's in production | Logs, metrics, traces |
| You're exploring | REPL |
| You're building | Editor |
| You're deploying | CI/CD pipeline |
| You're investigating history | `git log`, `git blame`, `git bisect` |

**Don't use a sledgehammer on a nail.** But also: don't be afraid of the sledgehammer when you need it.

---

## The Loadout

Here's a starting point. Adapt to your context.

### Daily Carry
- Editor (configured, not default)
- Terminal (customized shell)
- Git (muscle memory)
- Docker (local dev)
- Browser DevTools (frontend work)

### When Needed
- Debugger (logic problems)
- Profiler (performance problems)
- Database client (data problems)
- Network tools (integration problems)
- Log aggregator (production problems)

### Know Where to Find
- Language docs
- Framework docs
- Stack Overflow (with skepticism)
- Source code (the ultimate truth)

---

## Maintenance Schedule

Tools don't maintain themselves.

**Daily:**
- Commit your work
- Clean up dead branches locally
- Note any friction for later

**Weekly:**
- Update dependencies (dev environment)
- Clean up Docker (`docker system prune`)
- Review and clean up stashes

**Monthly:**
- Review and update dotfiles
- Check for tool updates
- Prune unused tools and configs

**Quarterly:**
- Deep clean: audit what you actually use
- Learning: pick up one new tool or deepen one existing skill
- Documentation: update your setup guide

---

## Red Flags

You're not mastering your gear if:

- You can't set up your environment from scratch
- You don't know the keyboard shortcuts for common operations
- You reach for the mouse constantly
- You can't explain what your build tool is doing
- You've never customized your shell or editor
- You debug only with print statements
- You don't know how to profile
- You fear the terminal
- You copy-paste commands without understanding them

---

## The Standard

A professional engineer:

1. **Can rebuild their environment in hours, not days.** Documented, scripted, reproducible.

2. **Moves through their editor without thinking.** The tool disappears. Only the work remains.

3. **Uses the terminal fluently.** Not afraid of the command line. Reaches for it naturally.

4. **Knows when to reach for the debugger.** And knows how to use it effectively.

5. **Profiles before optimizing.** Never guesses about performance.

6. **Maintains their tools.** Updates, cleans, sharpens. Regularly.

7. **Adapts their kit.** Adds what's needed. Removes what's not. The loadout evolves.

---

## Before You Continue

Take inventory:

- What's in your toolkit right now?
- What do you reach for but don't really understand?
- When did you last update your environment?
- Could you rebuild it from scratch today?
- What tool should you learn deeper?

If you can't answer these, you have work to do.

Your gear is your foundation. Master it.

---

*A warrior maintains their weapon not because inspection is coming, but because their life depends on it. Your career depends on your tools. Maintain them accordingly.*
