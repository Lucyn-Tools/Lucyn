# `.claude/rules/`

This directory is intentionally near-empty.

Authoritative docs for AI agents and contributors:

- **[`CLAUDE.md`](../../CLAUDE.md)** — repo layout, commands, architecture, deployment, privacy rules.
- **[`.claude/memory.md`](../memory.md)** — project memory: fixes, gotchas, strict rules, workflow notes.

## When to add a file here

Only add a `*.md` file in this directory if you need **path-gated context** loaded conditionally by Claude Code (via the `paths:` frontmatter) for a narrow part of the tree, AND the content is not already covered in `CLAUDE.md`.

Each file added here ships in every agent context that matches its `paths:` glob — so keep them small, current, and non-overlapping with `CLAUDE.md`. Stale rules actively mislead agents.
