# Fuselage skills

Claude Code skills shipped from this repo. They are checked into source control here and
installed into Claude Code via symlink, so the repo stays the single source of truth and
edits apply live.

## fuselage-craft

Design and refine UI in products that **consume** `@rocket.chat/fuselage`, keeping the
result faithful to the design system. It treats the installed Fuselage packages as the
single source of truth and never copies a Fuselage value or name into product code.

Commands: `audit`, `migrate`, `polish`, `harden`, `critique`, `clarify`, `adapt`, `shape`,
`craft`. See [`fuselage-craft/SKILL.md`](./fuselage-craft/SKILL.md) and its
[`gate/`](./fuselage-craft/gate/README.md).

## Install into Claude Code (symlink)

Personal skills live in `~/.claude/skills/<name>/`. Symlink the skill there instead of
copying, so changes in this repo take effect immediately and nothing drifts out of sync.

From the repo root:

```sh
ln -s "$(pwd)/skills/fuselage-craft" ~/.claude/skills/fuselage-craft
```

Verify:

```sh
ls -l ~/.claude/skills/fuselage-craft   # should point at <repo>/skills/fuselage-craft
```

Claude Code discovers skills at startup, so **restart Claude Code** to pick it up. After
that, invoke it from any Fuselage-consuming repo:

```
/fuselage-craft audit src/**
/fuselage-craft migrate src/components/Legacy.tsx
```

### Gate dependencies

The gate needs `eslint` (9+) and `typescript-eslint`. It resolves them from the host repo
when present; otherwise install the gate's own deps once:

```sh
cd skills/fuselage-craft/gate && npm install
```

`gate/node_modules` is gitignored. The type gate also needs the consumer repo's
`typescript`.

## Uninstall

```sh
rm ~/.claude/skills/fuselage-craft   # removes only the symlink, not the repo files
```
