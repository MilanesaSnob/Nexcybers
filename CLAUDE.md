# Nexcybers — reglas de diseño del proyecto

**Duplicado de `nexcybers.mdc`** — mismo contenido exacto, para que cualquier asistente tenga acceso al mismo contexto de diseño sin importar el IDE o herramienta (Claude en Cursor, CLI, web, cualquier versión). Si se actualiza uno, **actualizar el otro**.

## LEER PRIMERO (en este orden)

1. **@docs/design-system/nexcyber-design-tokens.json** — Source of truth: cada token (color, spacing, tipografía, motion, componentes) con variantes dark/light y llmImplementationNotes. Referencia para entender estructura y constraints.
2. **@docs/design-system/nexcyber-design-system.md** — Guía completa: dónde se usa cada token, catálogo de cards, escala de spacing, escala de tipografía, comportamiento de themes, breakpoints mobile, checklist. Acá viven TODAS las decisiones visuales documentadas.
3. **@Nexcybers Color Palette.md** — Valores hex/rgba exactos de cada variable en dark y light. Verificación.
4. **@docs/Nueva sección - guía de estructura.md** — Esqueleto de página: header/footer, hero, sistema de bandas celeste/theme, librería de componentes.
5. **@docs/design-system/guides/** — Guías de contenido:
   - `blog-content.md` — Cómo agregar contenido blog
   - `resources-content.md` — Cómo agregar resources
   - `services-content.md` — Cómo agregar servicios
   (Todo sin tocar HTML/CSS)

Sitio estático multi-página en HTML + CSS + JS vanilla. Sin build step, sin framework, sin JSX.

## Flujo obligatorio antes de cualquier cambio visual

**PASO 1 — Leer las guías de diseño** (sin saltear):
- nexcyber-design-tokens.json (entender estructura de tokens)
- nexcyber-design-system.md (referencias con § apuntan a secciones acá)

**PASO 2 — Entender reglas core antes de escribir CSS:**
- **Escala de spacing/sizing:** múltiplos de 4px SOLO (4, 8, 12, 16, 20, 24, 32…). NUNCA 14px, 18px, 22px—rompen el sistema. Excepción: font-size usa clamp() fluidez; border-radius sigue 4px salvo botones (100px pill, 0 en hover).
- **Colores vía CSS variables SIEMPRE:** `var(--token)` nunca hex calculado. ÚNICA excepción: texto sobre banda celeste `--gold-bg` (fijo `#fff` o `#000`, nunca `var(--fg)`). Cada color en el JSON tiene variante dark/light—probar ambos themes antes de dar por hecho.
- **Themes:** `[data-theme="light"]` en `<html>` cambia todos los colores automáticamente. Tu trabajo: verificar contraste AA (4.5:1 cuerpo, 3:1 título) en dark Y light.
- **Cards:** Reusar catálogo de nexcyber-design-system.md (§ Catálogo de cards). NO inventar tipos nuevos. Si no encaja en ninguno, documentarlo acá PRIMERO.
- **Mobile:** Sin :hover en touch. Ofrecer equivalente keyboard/tap (toggle via click, o reveal por defecto ≤700px). Nunca esconder contenido detrás de hover.

**PASO 3 — Documentar decisiones en el mismo turno:**
- Cambio color/componente → nexcyber-design-system.md (agregar/actualizar sección)
- Card type nueva → agregar entrada a § Catálogo de cards + describir estructura, fondo, radius, uso
- Breakpoint mobile nuevo → agregar fila a § Comportamiento en mobile
- Patrón componente complejo → nexcyber-design-tokens.json llmImplementationNotes (si procede)

## Contrato de implementación: Bandas celeste/theme (§2, Nueva sección)

Cada página de nivel superior alterna **banda celeste / banda del theme** empezando en celeste tras hero:
1. **Estructura:** `background: var(--gold-bg)` + pseudo-elemento `::before` a `var(--bg)` con `opacity: 0` + clase `.band-lit` (la cual pone opacity a 0 cuando banda entra en viewport vía IntersectionObserver en `assets/main.js`).
2. **Actualizar IntersectionObserver:** Cuando se agrega banda celeste nueva, añadir su clase (`.why-band`, `.proc-band`, `.res-band`, `.p-band`, etc.) al selector en `assets/main.js` (alrededor línea 140), sino el fade no dispara.
3. **NUNCA background propio en hijos directos** de banda celeste—celeste debe verse a través del velo. `.pil-card` dentro de `.why-band` NO lleva bg propio (excepción: `.pil-card` está explícitamente overrideado en CSS, aprobado este caso; documentar si agregás otros).
4. **Texto sobre --gold-bg SIEMPRE fijo:** `#fff` o `#000`, nunca `var(--fg)` o `var(--fg-soft)`. EXCEPCIÓN DOCUMENTADA: texto de referencia/acento (`.p-src`) sobre banda celeste puede usar `var(--band-accent-text)` (que es `#00bffe` dark / `#00648c` light, exactamente las variantes dark/light de `--gold`) cuando WCAG AA contraste contra `--gold-bg` requiere mayor legibilidad que blanco/negro puro. Esto es permitido solo cuando se codifica como variable CSS con valores explícitamente documentados para ambos themes.

## Accesibilidad & jerarquía visual

**Contraste WCAG AA (sin excepciones):** 4.5:1 mínimo cuerpo, 3:1 títulos, contra fondo real (dark o light). Nunca subtileza tonal (ej: `--fg-soft` opacidad baja) para bajar peso. En su lugar: `font-weight` o `font-size`. Modular jerarquía con escala y peso, no tono.

**Párrafos sin saltos forzados:** NO `<br>` dentro de párrafos (.lead, .p-body, .svc p, descripciones). `<br>` solo en títulos/encabezados donde corte es decisión tipográfica. Todo párrafo cuerpo lleva `text-wrap: pretty` contra huérfanas. `max-width` en `ch` **SOLO tres lugares** (ver nexcyber-design-system.md): lead hero, banda CTA cierre, footer. Todo lo demás crece con contenedor.

## Patrones de código

**Preservar vanilla JS existente:** `assets/main.js`, `assets/content.js`, `.js` por página. Sin React, JSX, frameworks.

**Sin librerías nuevas:** Las existentes (GSAP/ScrollTrigger) cargan con fallback local (`assets/vendor/README.txt`). Ninguna CDN nueva sin pedido explícito.

**Sin estilos visuales nuevos:** Todos colores, tipografía, spacing, radios, sombras vienen de nexcyber-design-tokens.json. Clases (`.h2`, `.lead`, `.eyebrow`, `.btn-primary`, `.section-pad`) o `var(--token)`, nunca hex/px suelto.

**Header/footer verbatim:** Nunca reinterpretar markup entre páginas—copiar exacto.

**Todo texto visible vía data-i:** `data-i="key"` en HTML + entrada en `assets/content.js` (`NX_CONTENT[lang]`) para EN y ES. Nunca hardcodear copy.

**Scroll reveals & fade banda manejados por main.js:** `[data-reveal]`, `[data-reveal-dir]`, `[data-reveal-head]` y `.band-lit` opacity ya manejados. No escribir CSS/JS animación propia.

**Probar en dark y light, ambos idiomas, mobile ≤700px / ≤900px (ver breakpoints en nexcyber-design-system.md § Comportamiento en mobile).**

## Entregables / exportación

Cuando se prepara zip o deploy, incluir SOLO producción y contexto de diseño:

- Todos `.html`
- `assets/` (CSS, JS, vendor, fonts)
- `robots.txt`, `sitemap.xml`
- `docs/` (guías, incluyendo contenido y sistema)
- `CLAUDE.md`, `nexcybers.mdc`
- `Nexcybers Color Palette.md`
- `docs/design-system/nexcyber-design-tokens.json`
- `docs/design-system/nexcyber-design-system.md`

**EXCLUIR SIEMPRE:** `screenshots/`, `uploads/`, `dist/` (capturas verificación, refs chat, builds viejos—ninguno referenciado).

## Mantenimiento de documentos (crítico para consistencia IA)

**Cualquier decisión visual nueva o cambiada debe documentarse EN EL MISMO TURNO que se hace.** No opcional, no después. El código es implementación; los docs son el contrato. Sin documentación, próximo agente inventa inconsistente.

- **Token color nuevo o cambio color** → actualizar `Nexcybers Color Palette.md` y `nexcyber-design-tokens.json`
- **Card type nueva o variante** → agregar a `nexcyber-design-system.md` § Catálogo de cards ANTES de reusar
- **Valor spacing/sizing nuevo** → verificar 4px múltiplo; documentar en `nexcyber-design-tokens.json` si se reutiliza
- **Cambio botón o variante** → documentar en `nexcyber-design-system.md` § Botones
- **Breakpoint mobile nuevo o comportamiento responsive** → agregar fila a `nexcyber-design-system.md` § Comportamiento en mobile
- **Patrón componente nuevo (visuals, motion, interaction)** → documentar en `nexcyber-design-tokens.json` llmImplementationNotes + referencia acá si constraint
- **Tint categoría nuevo o lógica categoría** → actualizar `nexcyber-design-system.md` § Category Tints

## Constraints IA (vinculan todos los agentes)

- **Leer guías primero.** Sin cambio visual sin consultar nexcyber-design-tokens.json y nexcyber-design-system.md.
- **Nunca hardcodear colores o spacing.** Siempre variables CSS o clases del catálogo.
- **Spacing 4px múltiplos SOLO.** (4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64…). Nunca 14px, 18px, 22px.
- **Tipografía clase-driven.** .display, .h2, .h3, .lead significado semántico; nunca override font-size.
- **Un componente botón, dos variantes.** .btn-primary y .btn-ghost solo. Nunca tercer color.
- **Reusar card catálogo.** Usar existentes (.trust-card, .svc, .rcard, .pil-card, .p-pair, .proc-band, .contact-info-card, etc.). Documentar tipos nuevos en § Catálogo antes.
- **Sin variables en texto sobre --gold-bg.** Fijo #fff o #000 solo.
- **Probar dark y light.** Cada token color tiene dos valores; ambos deben funcionar.
- **Equivalencia :hover mobile.** Si reveal/state está en :hover desktop, toggle click o show-by-default ≤700px mobile.
- **Sin saltos línea forzados en párrafos.** `<br>` solo títulos. Párrafos cuerpo llevan `text-wrap: pretty`.
- **Contrato banda celeste:** background: var(--gold-bg) + pseudo-elemento ::before overlay + clase .band-lit + hook IntersectionObserver. Nunca background propio en hijos.
- **Documentar decisiones en turno.** NO opcional. Cada cambio visual → entrada guía correspondiente.
