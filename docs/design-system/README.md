# Design System — Nexcybers

Complete design contract for consistency across all IDEs and AI agents.

## 📖 Read in this order

1. **nexcyber-design-tokens.json** — Source of truth
   - Hierarchical tokens (core → semantic → component → layout)
   - Dark/light variants for every color
   - `llmImplementationNotes`: complex patterns (spacing scale, theme behavior, card reuse, bandas celeste)
   - `aiConstraints`: explicit rules that bind all agents

2. **nexcyber-design-system.md** — Detailed guide
   - Where each token is used (specific `.class` names)
   - Card catalog (15+ types, when to use each)
   - Spacing scale (4px multiples only)
   - Typography scale (clamp() responsive sizing)
   - Mobile behavior (responsive breakpoints ≤700px, ≤900px, etc.)
   - Checklist (verify before committing)

3. **../Nexcybers Color Palette.md** — Hex verification only
   - Exact hex/rgba values per theme
   - For checking contrast or confirming values

4. **../Nueva sección - guía de estructura.md** — Page skeleton
   - Header/footer markup
   - Hero structure
   - Celeste band system
   - Component library by section

5. **guides/** — Content guides (no HTML/CSS edits)
   - `blog-content.md` — Add blog posts
   - `resources-content.md` — Add resources
   - `services-content.md` — Add services

---

## 🎯 Key contracts

### Spacing / Sizing
**4px multiples ONLY:** 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 120, 160px
- Exception: `font-size` uses `clamp()` for fluid scaling
- Exception: `border-radius` on buttons (100px → 0 on hover)

### Colors
**Variables ALWAYS:** `var(--token)`, never hardcoded hex
- Exception: text on `--gold-bg` celeste band (fixed `#fff` or `#000`)
- Every color has dark/light variant; test both themes

### Cards
**Reuse catalog from nexcyber-design-system.md § Catálogo de cards**
- 15+ documented types (trust-card, svc, rcard, contact-info-card, etc.)
- Never invent a new variant without real need
- Document new types in the guide FIRST

### Bands (Celeste / Theme)
**Implementation contract:** `background: var(--gold-bg)` + `::before` overlay + `.band-lit` class + IntersectionObserver hook
- See: nexcyber-design-system.md § Color por theme
- See: Nueva sección - guía de estructura.md § 2

---

## 👥 Who writes what

| Role | File | When |
|---|---|---|
| AI agent (Claude, any IDE) | `nexcyber-design-system.md` | When adding/changing visual decisions |
| AI agent | `guides/*` | When documenting content flows |
| Human owner | `nexcyber-design-tokens.json` | When refactoring token structure |

**Rule:** Any new visual decision gets documented in the corresponding guide in the SAME turn. No exceptions.

---

## 📋 Folder structure

```
docs/design-system/
├─ README.md (← you are here)
├─ nexcyber-design-tokens.json (tokens + constraints)
├─ nexcyber-design-system.md (usage guide + catalog)
└─ guides/
   ├─ blog-content.md
   ├─ resources-content.md
   └─ services-content.md
```

---

## 🔗 Quick links

- **CLAUDE.md** — Rules for any AI (top-level repo)
- **nexcybers.mdc** — Rules for Cursor (same content)
- **Nexcybers Color Palette.md** — Hex values (root)
- **Nueva sección - guía de estructura.md** — Page skeleton (docs/)
