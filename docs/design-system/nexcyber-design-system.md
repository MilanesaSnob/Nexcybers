# Sistema de diseño — Nexcybers

Referencia general de tokens visuales (tipografía, tamaños, color, spacing, cards) usados en todo el sitio. Para agregar contenido a una sección existente ver las guías de Blog/Resources/Servicios en `docs/design-system/guides/`; para crear una sección nueva ver "Nueva sección — guía de estructura". Este documento es el de abajo de todo: de dónde salen los valores que esas guías asumen.

Todos los valores viven como custom properties en `assets/styles.css` (`:root` + `[data-theme="light"]`). No hardcodear un color o tamaño calcado a mano: usar la variable o la clase.

**Referencia cruzada:** cada token aquí corresponde a una entrada en `docs/design-system/nexcyber-design-tokens.json`. La estructura jerárquica del JSON (core → semantic → component → layout) es la fuente de verdad; este doc explica el USO y contexto.

## Tipografía

Dos familias, ninguna más:

| Variable | Familia | Uso |
|---|---|---|
| `--sans` | Manrope | Todo el texto de lectura: títulos, bajadas, párrafos, botones. |
| `--mono` | IBM Plex Mono | Solo elementos "técnicos": eyebrows/kickers, etiquetas de campo de formulario, citas legales, badges de estado. Nunca para párrafos largos. |

**Escala** (clases utilitarias, todas con `clamp()` — fluidas entre mobile y desktop):

| Clase | Tamaño | Peso | Uso |
|---|---|---|---|
| `.display` | `clamp(44px, 8.2vw, 116px)` | 800 | Titular de hero. `line-height:0.94`, `letter-spacing:-0.035em`. |
| `.h2` | `clamp(24px, 3vw, 36px)` | 700 (heredado de `h2`) | Título de sección. `.home .h2` sube a `clamp(28px, 3.6vw, 48px)`. |
| `.h3` | `clamp(24px, 2.6vw, 32px)` | 700 | Subtítulo dentro de una sección. |
| `.lead` | `clamp(20px, 2.1vw, 24px)` | 400 | Bajada bajo un título. Color `--fg-soft`, `line-height:1.5`. |
| `.eyebrow` | 14px | 400, mono | Kicker sobre un título: mayúsculas, `letter-spacing:0.22em`, con un guioncito de 24px antes del texto (`::before`). Color `--gold`. |
| body / párrafo | 16px | 400 | `line-height:1.6`, familia sans. |

`h1`–`h4` sin clase heredan `font-weight:700; line-height:1.04; letter-spacing:-0.02em` por defecto — las clases de arriba son las que fijan el tamaño real.

## Color por theme

El sitio es dark-first con variante light (`[data-theme="light"]` en `<html>`). Valores exactos en **`Nexcybers Color Palette.md`** (raíz del proyecto).

### Surfaces (Fondos)

| Variable | Dark | Light | Uso |
|---|---|---|---|
| `--bg` | #06080c | #dbe9f7 | Background general de página (`body`). Fondo de bandas "theme". Capa base del `.about-panel` (sin fondo propio, solo borde). |
| `--bg-1` | #090c12 | #cfe0f2 | Cards en reposo: `.trust-card`, `.svc`, `.pil-card`, `.team-photo`, `.team-face`, `.path`, inputs de formularios (`.contact-form input/textarea/select`, `.foot-news-form input`, `.sub-form input`). Gradiente de about (`linear-gradient(110deg, var(--bg-2), var(--bg-1))`). |
| `--bg-2` | #0d1118 | #c3d7ee | Parte del gradiente en about card (lado izquierdo). Raramente usado solo. |
| `--panel` | #11161f | #d6e6f6 | Estados hover/active: `.trust-card:hover`, `.svc:hover`, `.pil-card:hover`. Opciones de `select` (`.contact-form select option`). **Nuevo:** backgrounds de `.icon-thumb` (thumbs blancos de iconos, ajustado a --panel en dark). |
| `--panel-2` | #161c27 | #cadef2 | Actualmente sin uso en CSS. Reservado para expansiones futuras. |

### Text (Texto)

| Variable | Dark | Light | Uso |
|---|---|---|---|
| `--fg` | #eef2f6 | #0d2238 | Texto principal: encabezados, párrafos, labels. Color por defecto de `body`. `.btn.btn-ghost` (borde y texto). Transiciones de color en `.res-tabs button` (hover/active). |
| `--fg-soft` | #aab3c0 | #3c5975 | Texto secundario: bajadas bajo títulos (`.lead`), descripciones, subtítulos. Etiquetas de formulario. Puntero radar (`.radar-figure`). |
| `--fg-mute` | #e6f7ff | #29597c | Etiquetas pequeñas, timestamps, texto muy suave. Labels de campo (`.contact-form label`). Acento claro para emfatizar. |

### Accents & Brand (Acentos de marca)

| Variable | Dark | Light | Uso |
|---|---|---|---|
| `--gold` | #00bffe | #0091c9 | **Acento principal (celeste).** CTAs, eyebrows, links activos, foco, hover de botones. Iconos en `.icon-thumb`. Nombre histórico (es celeste, no dorado). En `.btn.btn-primary` fondo; en `.svc:hover`, `.pil-card:hover` pasa el borde a dorado. Animaciones (anillo de progreso en `.pil-card`, puntos de radar). |
| `--gold-soft` | #5dd6ff | #007bab | Celeste suave: hover de `--gold`, acentos secundarios. Transiciones suave en estados interactivos. |
| `--blue` | #2f7bff | #2f6fdb | Azul técnico: gráficos, visualizaciones, datos. |
| `--blue-soft` | #6aa6ff | #1d54ad | Azul técnico suave: acentos secundarios en data. |
| `--cyan` | #6ff0ff | #0091c9 | Cian: chips de "activo", estado active en visualizaciones. Mismo valor que light `--gold`. |
| `--gold-bg` | #0091c9 | #0091c9 | **Fondo de banda celeste (fijo en ambos themes).** Fondos grandes de bandas (`.why-band`, `.proc-band`, `.res-band`, `.contact-info-card`). No cambia por theme. Ver guía de "Nueva sección". Texto sobre este fondo es siempre `#fff` o `#000` fijo (excepción a la regla de variables). |

### Glow & Effects

| Variable | Dark | Light | Uso |
|---|---|---|---|
| `--gold-glow` | rgba(0,191,254,0.45) | rgba(0,145,201,0.25) | Resplandor radial celeste: sombras en hover de cards, glow en bandas CTA. `.trust-card:hover` (`box-shadow`), `.team-face-back` (efecto de retroiluminación). |
| `--blue-glow` | rgba(47,123,255,0.42) | rgba(47,111,219,0.22) | Resplandor radial azul: alternativa de glow para elementos técnicos. |

### Borders (Bordes)

| Variable | Dark | Light | Uso |
|---|---|---|---|
| `--line` | rgba(255,255,255,0.08) | rgba(15,45,80,0.12) | Borde sutil: contornos de cards (`.trust-card`, `.svc`, `.pil-card`, `.team-photo`), separadores, líneas divisoras. Defecto en `border: 1px solid var(--line)`. |
| `--line-2` | rgba(255,255,255,0.14) | rgba(15,45,80,0.22) | Borde marcado: hover de cards (`.trust-card:hover`, `.svc:hover`), `.pil-card:hover`. Más visible que `--line`. |

### Special States & Overrides (Scopes)

**Book a session (`body.sec-green`):** Las páginas de agendar remplazan `--gold`, `--gold-soft`, `--cyan` por acentos propios:
- Dark: `--gold` → #06E094 (verde), `--gold-soft` → #3ef0b0, `--gold-bg` → #0A6B49
- Light: `--gold` → #C6185C (magenta), `--gold-soft` → #A5134C, `--gold-bg` → #C6185C

**Regla de contraste:** Texto sobre banda celeste (`--gold-bg`) es siempre `#fff` o `#000` fijo, nunca variables (`--fg`/`--fg-soft`). Es la **única excepción** a "todo color vía variable" porque el fondo celeste es idéntico en ambos themes y necesita contraste correcto en ambos.

**Todos los colores cumplen AA (mínimo 4.5:1 cuerpo, 3:1 títulos) contra su fondo real.** No usar tonos "suavizados" a mano para bajar peso visual — usar `font-weight` o tamaño en su lugar.

### Category Tints (Colores de categoría)

Cada categoría de Blog, Resources y Product tiene dos tints: uno para dark (`--tint`) y otro para light (`--tint-ink`). Se usan en etiquetas, accents de tarjetas y líneas de listas dentro de artículos.

| Categoría | Variable | Dark | Light | Uso |
|---|---|---|---|---|
| **AI / IA** | `[data-cat="ai"]` | #79f0c4 | #0A6B49 | Blog AI, Resources regulatory frameworks, Product compliance. |
| **Identity** | `[data-cat="identity"]` | #b9a8ff | #5B45C7 | Blog identidad, Product technical. |
| **Phishing** | `[data-cat="phishing"]` | #ffc48c | #8A4A07 | Blog phishing. |
| **Privacy** | `[data-cat="privacy"]` | #9ee6ff | #0F5F87 | Blog privacy, Product awareness. |
| **Risks** | `[data-cat="risks"]` | #ff9ea8 | #B02535 | Blog risks. |
| **Regulatory** | `[data-cat="reg"]` | #79f0c4 | #0A6B49 | Resources regulatory frameworks (mismo que AI). |
| **Default** (ninguna categoría) | (ninguna) | #7fd8ff | #076A8E | Fallback si no hay `data-cat`. |

**Dónde aparecen:**
- `.rcard` (resource/blog cards): imagen de fondo (`.rc-img`), etiqueta de categoría (`.rc-tag`), hover del título
- `.res-article`, `.ra-article` (dentro del artículo): línea de listas (`li::before`), raya de separación
- `.pv-stat` (stats en fichas de Product): badge de color + ícono + número
- `.pm-active` (métrica con reveal): color principal de la métrica activada

**Cómo agregar categorías nuevas:** ver **Blog — guía de contenido** y **Recursos — guía de contenido** en `docs/design-system/guides/`. Las categorías válidas son cerradas (no se inventan) y cada categoría tiene su color fijo en CSS (`[data-cat="nombre"]`).

## Spacing y layout

**Escala base:** todos los valores de spacing, tamaños y radios usan múltiplos de 4px: `4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 120, 160px`, etc. Excepción: tamaños de fuente (usan `clamp()` fluido).

| Token | Valor | Uso |
|---|---|---|
| `--maxw` | 1280px | Ancho máximo de `.wrap` (contenedor central de toda la página). |
| `--gutter` | `clamp(20px, 5vw, 64px)` | Padding lateral de `.wrap`. |
| `.section-pad` | `padding-block: clamp(80px, 12vh, 160px)` | Padding vertical estándar de una sección — sin excepciones salvo bandas con su propio padding (`.res-band`, `.band-section`). |
| `--radius` | 12px | Radio estándar de card (trust-card, contact-info-card, etc). |
| Radio de banda CTA | 16px | Solo `.band` (la banda de cierre). |
| Radio de botón | 100px (pill) en reposo, **0 en hover/focus** | Ver botones abajo. |
| `--ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Easing estándar de toda transición/animación del sitio. |

Grillas de card usan `gap: 0` con bordes internos compartidos (`.svc-grid`) cuando las celdas deben leerse como una sola pieza, o `gap` explícito (16–28px) cuando cada card es una unidad separada (`.trust-cards`, `.res-grid`, `.bene-panels`).

**Gap entre componentes dentro de una misma subsección (`.p-pair`, tabnav, panel, etc encadenados uno debajo del otro dentro de un mismo `<section>`):** `clamp(32px, 4vw, 48px)` — exactamente la mitad de `.section-pad`'s `clamp(80px, 12vh, 160px)` visual entre subsecciones (top/bottom de sección). No usar el valor completo de sección (`clamp(56px,7vw,96px)` o similar) para separar contenidos que pertenecen a la misma subsección — ese salto mayor se reserva para separar una subsección de la siguiente. Ver Product → Specialized (tabnav → "One common baseline…" → "A program, not a capsule").

## Botones

Un solo componente, dos variantes:

- **`.btn.btn-primary`** — fondo `--gold`, texto `#04222e` (dark) / `#fff` (light). Uso: la acción principal de la página (una por vista).
- **`.btn.btn-ghost`** — fondo casi transparente, borde `--line-2`, texto `--fg`. Uso: acción secundaria junto a un primary.

Ambos: `padding:16px 28px`, `border-radius:100px` en reposo que colapsa a `0` en hover/focus (el "corte" cuadrado es la firma de interacción de todo botón del sitio, no un detalle opcional). Ícono de flecha `→` dentro de `.arw` se desliza 4px a la derecha en hover. Nunca crear un tercer color de botón sin necesidad real.

## Catálogo de cards

| Card | Clase | Fondo | Radio | Estructura | Uso |
|---|---|---|---|---|---|
| Trust card | `.trust-card` | `--bg-1`, hover `--panel` | `--radius` (14px) | Ícono + número grande (`.tc-n`) + label. Glow radial en hover, barra superior que crece de 0 a 100%. | Métricas/stats destacados. |
| Service tile | `.svc` | `--bg-1` | — (celdas dentro de `.svc-grid`, borde compartido) | Ícono + título + bajada, sin separación entre celdas salvo el borde. | Grilla de 3 ítems cortos. |
| Panel oblicuo | `.bene-panel` | tono sólido por `data-tone` (1–4, incluye `--gold-bg` en el tono 4) | — | Contenido centrado, todo el panel `skewX(-18deg)`. | Beneficios/diferenciadores de alto contraste. |
| Resource/blog card | `.rcard` | `#1C1F25` fijo (no seguimos theme en dark; en light `var(--bg)`) con acento `--tint`/`--tint-ink` por categoría | 16px en reposo, **0 en hover/focus** (el "corte" de esquina) | Altura fija 432px, imagen de categoría + texto. En hover: la imagen colapsa (`height:0`), el título sube y cambia a `--tint`, la descripción se expande desde `max-height:0`. **Sin** glow radial ni elevación (`translateY`) — esos efectos son de `.p-card` genérico (trust-card, step, etc), no de esta familia. | Grilla filtrable (Resources, Blog) y cualquier card de este lenguaje (ver `.p-met` en Product → Measured). |
| Contact info card | `.contact-info-card` | `--gold-bg` | `--radius` | Filas de contacto, texto en negro fijo (ver regla de contraste arriba). | Página de contacto. |
| Fichero/tabnav | `.pv-tabs` + `.pv-panel` | tabs en `--bg-1`; panel activo en `--gold-bg` | tabs `12px 12px 0 0`; panel `0 var(--radius) var(--radius) var(--radius)` | Tabs tipo carpeta (uno activo por vez) + panel único con tag, título grande, descripción y `.pv-stats`: chips blancos elevados, uno por dato (icono en badge de color + número mono grande + label), con tinte por tipo de dato (`--tint`/`--tint-ink` igual criterio que `.rcard` de Blog/Resources — violeta para conteos, ocre para vídeo, cian para duración, verde para el dato de cierre). | Mostrar de a uno varios ítems con texto largo + métricas cortas que necesitan destacarse (ficha de curso/programa). Ver Product → Specialized. |
| Par texto+visual | `.p-pair` (`.p-pair-text` + `.p-pair-visual`) | `--bg-1`, borde compartido | `--radius` | Texto y su card visual (`.p-panel`/`.p-fig`) dentro de un único contenedor bordeado con divisor interno, siempre texto a la izquierda y visual a la derecha (nunca alternado) — evita la lectura en Z al dejar claro qué visual pertenece a qué texto. | Explicar un concepto con apoyo visual (panel de datos, figura animada). Ver Product → Specialized/Verifiable. |
| Stepper con número grande | `.proc-band` (`.proc-head-txt` + `.proc-num` + `.proc-item`/`.proc-tab`/`.proc-panel`) | banda celeste | — | Encabezado con texto a la izquierda y número de paso gigante (`clamp(72px,9vw,132px)`) a la derecha. **`.proc-head-txt` lleva `max-width:65%` fijo** — nunca `flex:1` a secas: el ancho del número varía levemente según qué dígitos muestra ("01" vs "05"), y sin un tope fijo el párrafo de al lado se reflowea (deforma) cada vez que cambia el paso activo. Tabs verticales a la izquierda, panel de contenido a la derecha (ver Services → Our process, Product → The starting point). | Cualquier sección de pasos/proceso con numeración destacada. |
| Línea de tiempo animada | `.pf-flow` (`.pf-flow-step` + `.pf-flow-dot` + `.pf-flow-fill`) | dentro de `.p-fig` | — | 3–4 nodos circulares conectados por una línea que se rellena en loop (mismo lenguaje que `.pf-bar`/`.pf-pulse` ya usado en las figuras animadas del producto). | Visualizar un proceso corto de pocos pasos como apoyo visual de un `.p-pair`. Ver Product → Custom-built. |
| Métrica con reveal en hover | `.p-met` (`.pm-idle` > `.pm-num` ; `.pm-active` > `.pm-head`(`.pm-title`+`.pc-ico`) + `.pm-val` + `.pm-desc`) | fondo fijo `#1C1F25` (dark) / `var(--bg)` (light) — mismo criterio que `.rcard`, no sigue `--bg-1` | 16px en reposo, **0 en hover/focus/tap** (mismo "corte" de esquina que usa todo botón del sitio) | Dos capas superpuestas (`position:absolute;inset:0` sobre el mismo `.p-met`, cross-fade por opacity): en reposo solo `.pm-idle` con el número de índice grande centrado; en hover/focus/tap aparece `.pm-active` — título (arriba-izq, hasta 2 líneas) + ícono (arriba-der), valor grande centrado, descripción abajo — todo en color `--tint` de la métrica. Tint por métrica vía clase `.t0`-`.t4` (mismas paletas que `.rcard`/`.pv-stat`: cian, violeta, verde, rojo, ocre). Click/tap togglea `.is-open` para touch. | Grillas de 4–5 métricas donde se quiere jerarquizar "hay data acá" antes de mostrar el detalle. Ver Product → Measured. |
| Filas versus | `.p-cmp` (`.cmp-head` + `.cmp-row` > `.cmp-side.us` + `.cmp-key` + `.cmp-side.them`) | lado *us* en `--gold-bg` al 84% (pleno en hover), lado *them* en `--bg-1` con borde `--line` | píldora: `999px 0 0 999px` / `0 999px 999px 0` | Encabezado con los dos nombres y un "VS" mono al centro, y una fila por atributo comparado: nuestra respuesta a la izquierda, la clave del atributo en mono al centro, la del competidor a la derecha (alineada a la derecha). En hover de la fila: el lado *us* llega al celeste pleno, los dos lados se acercan 5px, la clave central pasa a `--fg` y crece una línea celeste debajo; el "VS" del encabezado abre el tracking. `cursor:pointer`. | Comparar dos alternativas atributo por atributo sin caer en una tabla. Ver Product → Comparison. |
| Altímetro HUD | `.alti` (`.alti-horizon` + `#alti-tape` + `.alti-ptr` + `.alti-read` + `.alti-mode`) | dentro del hero, sin fondo propio | — | Retícula con horizonte curvo que se inclina según la velocidad del cambio, cinta vertical de valores (generada en `assets/alti.js`, tick cada 25 y label cada 50), puntero fijo al centro, readout mono grande y chip de modo. Arrastre vertical o flechas ↑/↓ cambian la lectura y el chip pasa a `MANUAL`; a los ~3s sin tocarlo vuelve a `AUTO` y retoma la deriva lenta. | Visual de hero. Ver Blog. El diafragma de cámara anterior (`.iris`, `#blog-hero-iris`) queda en el HTML con `hidden` por si se vuelve atrás. |
| Sistema orbital | `.solar` (`#sys-orbits` + `#sys-back` + `.sys-sun`/`.sys-glow` + `#sys-front` + `.sys-read`/`.sys-val`) | dentro del hero, sin fondo propio | — | Un planeta por servicio, generado en `assets/solar.js` a partir de `d.services` (los nombres llegan vía `window.NX_solarLabels(list)` desde `services.js`, así que siguen el idioma activo). Arrastrar rota el sistema (eje X → azimut) e inclina el plano (eje Y → `INC`, órbitas elípticas); en pointers *coarse* solo rota y el tap cicla la inclinación. Hover/focus de un planeta lo resalta con anillo, enciende su órbita y escribe su etiqueta corta en el readout mono (`svc_short` en `content.js`: 2–3 palabras por servicio, largos parejos para que todas entren al mismo tamaño de fuente); sin selección el readout muestra telemetría `AZ ___° INC __°`. Los planetas detrás del sol se reordenan al grupo `#sys-back` y bajan opacidad/escala. Flechas del teclado rotan e inclinan; click no navega. | Visual de hero donde los ítems orbitando representan el contenido de la página. Ver Services. |
| Panel de copy en banda celeste | `.about-copy.about-panel` (`.ac-lead` + `.ac-grid` > `p`) | **sin fondo propio** — solo borde `rgba(255,255,255,.55)`, el celeste de la banda se ve a través | `var(--radius)` | Encierra un bloque largo de copy: el primer párrafo sube a lead (`clamp(20px,1.6vw,23px)`, `#000` en 700) separado por una regla blanca, y los párrafos restantes van en `.ac-grid` a 17px, siempre en una sola columna (se probó a dos: las medidas quedan demasiado angostas). Ningún rótulo extra: la jerarquía la da el tamaño. | Un bloque de 4–6 párrafos que sin contención se lee como muro. Ver About → Why choose us. |
| Pilar con medallón animado | `.principle.pil-card` (`.pil-ico` > `svg`(`.pil-track`+`.pil-arc`) + `.material-symbols-outlined` ; `.pil-txt` > `.k` + `p`) | fondo `var(--bg-1)` + borde `var(--line)` (mismo lenguaje que `.svc`) | `var(--radius)` | Card horizontal: medallón circular a la izquierda con anillo de progreso que gira en loop (`pil-spin`, 3.6s, desfasado por card vía `--pd`) y el ícono latiendo suave (`pil-beat`), ambos en `var(--gold)`; a la derecha la clave (16px, `var(--gold)`) y el párrafo. El ícono llega por `ico` en `pillars` (`content.js`) y usa **Material Symbols Outlined** — la familia que carga `about.html` (Services carga Rounded). Las animaciones arrancan en `animation-play-state:paused`: el gráfico está quieto en reposo y solo gira/late en hover o focus. En hover además el fondo pasa a `var(--panel)` y el borde a `var(--line-2)` (sin barra dorada). Es una card oscura sobre banda celeste: **excepción pedida a la regla de "sin fondo propio en banda celeste"**. | Listas cortas de 3–5 pilares/atributos donde cada ítem gana un ícono. Ver About → Why choose us. |
| Compás interactivo | `.cmps` (`.cmps-needle` + `.cmps-read`) | dentro del hero, sin fondo propio | — | SVG de rosa de los vientos: la aguja sigue el puntero, el rumbo se lee en `.cmps-read`, y sin puntero entra en oscilación de reposo (`is-idle`). | Visual de hero para una página que habla de dirección/criterio. Ver Product. |

No crear una card nueva si el contenido encaja en alguna de estas. Si el contenido es realmente distinto (por ejemplo, un tipo de dato que ninguna cubre), definir la nueva card documentándola acá antes de reusarla en otra página.

**Ícono/texto sobre fondo `--gold` sólido:** usar `var(--ink-on-gold)`, nunca un hex fijo. `--gold` es claro en dark theme y oscuro en light theme, así que el color de tinta que da contraste cambia de lado según el theme (`--ink-on-gold` resuelve a oscuro en dark, blanco en light). Esto aplica a cualquier estado "activo/hot" que rellene un dot o chip con `--gold` (ver `.pf-flow-dot` en la línea de tiempo).

**Encabezado con punto destacado (`.pf-head`/`.p-panel-h`):** todo header de figura o panel (`.pf-head`, `.p-panel-h`) lleva un punto dorado de 6px con pulso (`animation:pf-pulse`, keyframe ya definido) antes del texto — es la firma visual de "este bloque está vivo/es data en vivo", no un detalle decorativo opcional. En `.p-panel-h` el punto se agrega vía `::before` (sin tocar el HTML, aplica parejo a todas las instancias existentes y futuras); en `.pf-head` va como `<span class="dot">` explícito dentro de `.pf-head-l` porque ese header también tiene contenido a la derecha. Cualquier header nuevo de este tipo de componente (figura, panel, card de datos) debe llevar el punto — no agregarlo caso por caso a mano.

**El contenido crece según el contenedor: `max-width` en `ch` sobre párrafos solo en tres lugares.** Fuera de esos tres, ningún párrafo lleva un tope de ancho en caracteres — el texto ocupa el contenedor que le dieron layout y grid, no una medida propia. Los tres lugares donde sí se fija (control de largo de línea deliberado, no un accidente):
  - **Lead del hero** (`.about-hero .lead`, `hero_lead` de cada página).
  - **Banda CTA de cierre** (`.band p`, `.final .lead`) — el texto corto junto al botón antes del footer.
  - **Footer** (`.foot-desc`, `.foot-news-p`).

  Títulos (`h1`–`h3`, `.display`, `.h2`, `.h3`) quedan aparte de esta regla: ahí un `max-width` en `ch` es una decisión tipográfica de composición (dónde cae el salto de línea), no una restricción de lectura — se sigue usando con criterio.

**Los párrafos de cuerpo fluyen libremente, sin saltos de línea forzados.** `<br>` es solo para títulos/encabezados (`.display`, `.h2`, `.h3`) donde el corte de línea es una decisión tipográfica deliberada. En cualquier párrafo de cuerpo (`.lead`, `.p-body`, `.svc p`, descripciones de card, etc.) nunca insertar `<br>` para forzar dónde envuelve el texto — el wrap lo decide el ancho del contenedor. Si una oración necesita separarse visualmente de la anterior (un cierre, un llamado a la acción), eso se resuelve con una oración nueva dentro del mismo flujo, nunca con un salto manual. Todo párrafo de cuerpo lleva además `text-wrap: pretty` para que el navegador evite huérfanas feas (una palabra sola cortando el pensamiento a la mitad, como "Closes with Current" / "Profile, Target Profile…") — ya aplicado a `.lead`, `.p-body`, `.svc p`, `.about-copy p`, `.principle p`, `.pv-panel p` y equivalentes; sumarlo a cualquier párrafo nuevo.

## Comportamiento en mobile

Regla general: **ningún componente pierde función al pasar a mobile.** Si el layout de desktop no cabe, el componente cambia de forma (no se recorta ni se esconde). Dos patrones válidos, en este orden de preferencia: (1) el mismo contenido reordenado (grilla a columna única, fila a stack), (2) una presentación distinta y explícita para mobile, documentada acá — como `.why-band` de About, que en desktop es dos columnas con pilares al costado y en mobile se vuelve una lista de pilares separados por línea. Lo que **nunca** vale es `display:none` sobre algo que el usuario necesita para navegar o entender.

**Todo lo que depende de `:hover` necesita equivalente táctil.** En mobile no hay hover: o se agrega un toggle por `click` (como `.p-met` con `.is-open`, `.proc-tab`), o el estado "revelado" pasa a ser el estado por defecto en el breakpoint mobile.

| Componente | Desktop | Mobile | Breakpoint |
|---|---|---|---|
| `.pv-tabs` + `.pv-panel` | tabs tipo carpeta en fila, panel debajo | la fila de tabs se vuelve una tira con scroll horizontal y `scroll-snap` (todas las tabs siguen visibles y alcanzables); el panel toma `--radius` en las cuatro esquinas | ≤700px |
| `.p-met` (métricas) | número de índice en reposo, detalle en hover/focus/tap | sin capa de reposo: `.pm-idle` oculto y `.pm-active` en flujo normal, con el valor y la descripción alineados a la izquierda y altura automática | ≤700px |
| `.pf-flow` (línea de tiempo chica) | nodos en fila con la línea de progreso horizontal | corre vertical: línea de 2px a la izquierda (a la altura del centro de los nodos), nodo + label en fila; la animación de relleno pasa a `pf-flow-fill-v` (alto en vez de ancho) | ≤700px |
| `.pf-flow-lg` (rollout) | 4 nodos en fila, semana/título/copy debajo de cada uno | columna, sin línea conectora, contenido alineado a la izquierda | ≤820px |
| `.p-cmp` (filas versus) | 3 columnas (us / clave / them) | una columna por fila: clave arriba, nuestro lado, el del competidor; como el `.cmp-head` desaparece, **cada lado se nombra a sí mismo** con un micro-label mono desde `data-lbl` (`::before`) | ≤820px |
| `.p-pair` | texto + visual en dos columnas con divisor vertical | una columna, el divisor pasa a borde superior del visual | ≤900px |
| `.kc-body` (panel + dial) | panel de estados a la izquierda, dial a la derecha | columna, el dial se centra debajo y crece a `clamp(140px,40vw,180px)` | ≤780px |
| `.pf-trow` (tabla de reporte) | nombre / estado / fecha | se cae la columna de fecha (dato secundario, el estado es el que importa) | ≤560px |
| `.proc-band` | tabs verticales + panel al costado, número gigante | stack, número e ícono reducidos, `min-height` liberado | ≤900px |

Al agregar un componente nuevo: verificarlo a 360px, 390px, 768px y 1024px, y sumar su fila a esta tabla si necesita un tratamiento propio.

## Checklist rápida

- [ ] Texto de lectura en Manrope; mono solo para eyebrows/labels/citas.
- [ ] Tamaños de título por clase (`.display`/`.h2`/`.h3`), no por `font-size` a mano.
- [ ] Color por variable (`var(--fg)`, `var(--gold)`, etc.), nunca hex calcado, salvo texto sobre banda celeste (blanco/negro fijo).
- [ ] Padding vertical de sección = `.section-pad`, salvo banda con padding propio.
- [ ] Radio de card = `var(--radius)`; radio de botón = pill→0 en hover.
- [ ] Card elegida del catálogo de arriba; ninguna variante nueva sin necesidad real.
- [ ] Ningún `<br>` forzado dentro de un párrafo de cuerpo (solo en títulos/encabezados); todo párrafo de cuerpo lleva `text-wrap: pretty`.
- [ ] Ningún párrafo con `max-width` en `ch` salvo lead de hero, banda CTA de cierre o footer — el resto crece con el contenedor.
- [ ] Revisado en dark y light.
- [ ] Revisado a 360/390/768/1024px: nada se desborda, nada se esconde, y todo hover tiene equivalente táctil.
