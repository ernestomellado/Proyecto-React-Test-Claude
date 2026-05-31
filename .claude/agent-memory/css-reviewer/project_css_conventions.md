---
name: project-css-conventions
description: CSS architecture patterns, design tokens, naming conventions, and responsive strategy for the GatitoWorld React+Vite project
metadata:
  type: project
---

Project is a single-page React 19 + Vite app ("GatitoWorld"). CSS split into two files:

- `src/index.css` — global resets, CSS custom properties (design tokens), base typography, dark mode via `prefers-color-scheme`. Uses nested media queries inside `:root` and element rules (modern CSS nesting, requires modern browsers).
- `src/App.css` — all component/page styles. Manually scoped with flat BEM-ish class names (no preprocessor). No CSS Modules.

**Design tokens defined in index.css:**
- Colors: `--text`, `--text-h`, `--bg`, `--border`, `--code-bg`, `--accent`, `--accent-bg`, `--accent-border`, `--social-bg`
- Shadow: `--shadow`
- Fonts: `--sans`, `--heading`, `--mono`

**App.css uses zero CSS custom properties** — all values are raw hex literals duplicated throughout.

**Breakpoints:**
- index.css uses `max-width: 1024px` (nested inside rules)
- App.css uses `max-width: 700px` (single media block at bottom)
- No shared breakpoint tokens; inconsistent thresholds between files.

**Responsive strategy:** Desktop-first (max-width media queries).

**Naming convention:** Flat class names with semantic meaning (`.header`, `.hero`, `.cards`, `.card`, `.footer`, `.logo`, `.header-inner`, `.page`). No BEM modifiers pattern in use yet.

**Known conflicts between files:**
- index.css sets `body { margin: 0 }` and `#root` layout (flex column, centered, 1126px max)
- App.css sets `body { font-family, background, color }` and `.page` as a second flex-column min-height container — these two layout roots may conflict
- index.css sets `h1 { font-size: 56px }` globally; App.css overrides `.hero h1 { font-size: 42px }` and the mobile breakpoint overrides it again to 28px — specificity chain is fragile
- index.css has `p { margin: 0 }` globally; App.css sets margins on `.hero p` and `.card p` — these work but rely on cascade order

**Why:** First review session, 2026-05-30.
**How to apply:** When reviewing future CSS changes, flag any new raw hex values that duplicate existing tokens, any new breakpoints that don't align with the established ones, and any additions to App.css that duplicate logic already in index.css.
