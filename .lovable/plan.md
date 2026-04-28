## Goal
Remove every em-dash (—) from user-facing copy across the website (45 files, ~214 occurrences).

## Approach
Run a single project-wide find/replace via `sed` across `src/` to swap each em-dash for a comma + space (`, `), which preserves readable phrasing in titles, descriptions, and meta tags. Where an em-dash sits next to existing punctuation or whitespace, normalize doubled spaces/commas in a follow-up pass.

Steps:
1. Replace `—` with `, ` across every file under `src/` (routes, components, data).
2. Clean up artifacts: collapse `,  ` → `, `, fix ` , ` → `, `, and trim stray leading `, ` after tags/quotes.
3. Spot-check key files (`__root.tsx`, `index.tsx`, `Header.tsx`, `vet-application.tsx`, `blogs.ts`) to confirm titles, meta `description`, and hero copy still read naturally; hand-tune any awkward cases (e.g. where `—` was used as a bullet separator, switch to `·` or split into two sentences).
4. Run `bun run build` to confirm no syntax regressions.

## Scope
- All 45 files reported by ripgrep, including route `head()` metadata, hero sections, club pages, registration wizards, blog data, FAQ, terms/privacy.
- Does not touch the lime/charcoal branding, layouts, or component structure.

## Out of scope
- En-dashes (`–`) and hyphens (`-`) are left untouched.
- No copy rewrites beyond what's needed to keep sentences grammatical after dash removal.
