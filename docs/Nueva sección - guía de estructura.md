# Nueva sección — guía de estructura

Cómo armar una página de nivel superior nueva (tipo About Us, Services, Resources, Blog) para que replique el esqueleto visual del sitio. A diferencia de las guías de Blog/Resources/Servicios, esto no es agregar contenido a una sección existente: es crear la sección misma.

## Header y footer

Se copian **verbatim** de cualquier página existente (`about.html` es la referencia más simple). No se tocan ni se reinterpretan: mismo markup, mismos `data-i` de traducción, mismo logo dual (`logo-dark` / `logo-light`), mismos íconos de redes. Lo único que cambia entre páginas es qué link de `nav` lleva la clase `active`.

## Esqueleto de la página

Toda sección de nivel superior sigue el mismo patrón de tres piezas:

1. **Hero** — título, bajada y un gráfico animado.
2. **Bandas de contenido** alternando fondo celeste / fondo del theme.
3. **Banda de cierre** tipo CTA (opcional pero frecuente): newsletter, "book a session" o webinar.

## 1. El hero

```html
<section class="section-pad about-hero" style="overflow:hidden">
  <canvas class="mesh-bg"></canvas>
  <div class="wrap">
    <div class="mini-hero-grid">
      <div class="sec-head" data-reveal-head style="margin-bottom:0">
        <div>
          <span class="eyebrow" data-i="xxx_eyebrow">Kicker</span>
          <h1 class="display" style="font-size:clamp(30px,3.6vw,48px);margin-top:20px;line-height:1.1;letter-spacing:0" data-i="xxx_h2">Título<br>en dos líneas.</h1>
          <p class="lead" style="margin-top:20px;font-size:22px" data-i="xxx_lead"></p>
        </div>
      </div>
      <div class="mini-hero-visual">
        <!-- gráfico animado propio de la sección, ver abajo -->
      </div>
    </div>
  </div>
</section>
```

**Reglas**

- Clase base siempre `section-pad about-hero`. El fondo es el del theme (no celeste): el hero nunca lleva banda de color.
- `<canvas class="mesh-bg">` es obligatorio: es el gradiente animado de fondo que da vida al hero en toda página (se inicializa solo desde `main.js`, no requiere config por página).
- Además del `mesh-bg`, cada sección trae **un gráfico animado propio** en `.mini-hero-visual`, distinto según el tema de la página: el radar pentagonal de About, el gráfico de barras/líneas de Services, etc. Si la sección nueva no tiene un dato propio para graficar, pedir referencia antes de inventar una visualización — no rellenar con un gráfico decorativo sin sentido.
- `data-reveal-head` anima la entrada del bloque de texto (fade+up manejado por GSAP en `main.js`); no requiere JS adicional por página.
- El `h1` usa `class="display"` con el tamaño inline mostrado; la bajada usa `class="lead"`.

## 2. El sistema celeste / theme

Esto es la columna vertebral visual de estas páginas. Hay dos tipos de banda:

**Banda "theme"** — sin clase de color, hereda el fondo de la página (`var(--bg)`, oscuro o claro según el theme activo). Es una `<section class="section-pad">` simple.

**Banda "celeste"** — usa una clase de banda (`why-band`, `proc-band`, `res-band`, o una nueva `xxx-band` siguiendo el mismo patrón) con este armazón en CSS:

```css
.xxx-band { background: var(--gold-bg); position: relative; overflow: hidden; }
.xxx-band::before { content:""; position:absolute; inset:0; background:var(--bg); transition:opacity 1.1s var(--ease); pointer-events:none; z-index:0; }
.xxx-band.band-lit::before { opacity: 0; }
.xxx-band > * { position: relative; z-index: 1; }
```

`--gold-bg` es el celeste de marca (`#0091c9`, igual en ambos themes — no cambia con dark/light). El truco: la banda nace **tapada** por un velo del color del theme (`::before` a opacity 1, mismo tono que el fondo de la página, sin costura visible con la sección anterior) y cuando el usuario la scrollea a la vista, `main.js` le agrega la clase `.band-lit` y el velo se desvanece, revelando el celeste de fondo. Para que esto funcione hay que:

1. Sumar la clase de la banda nueva al selector del observer en `assets/main.js`: `document.querySelectorAll('.why-band, .proc-band, .res-band, .p-band')` → agregar `.xxx-band` a esa lista.
2. No declarar `background` propio en ningún hijo directo que deba mostrar el celeste — que se vea a través.

**Orden de alternancia:** la primera banda de contenido después del hero es siempre celeste. De ahí en adelante, alternar celeste → theme → celeste → theme… No hay una tercera variante de fondo salvo excepciones puntuales fuertemente contrastadas (ver `.bene-band` abajo), y esas también deben decidir explícitamente su comportamiento en cada theme.

**Excepción con nombre propio — `.bene-band`:** superficie oscura fija en dark theme, pero en light theme cae al `var(--bg)` de la página en vez de quedarse oscura:
```css
.bene-band { background: #081019; }
[data-theme="light"] .bene-band { background: var(--bg); }
```
Se usa cuando el contenido (paneles oblicuos, ver componente 4 abajo) necesita alto contraste y no tiene sentido en celeste. Tratarla como una tercera opción de fondo, a usar con moderación, no como reemplazo del alternado celeste/theme.

## 3. Encabezado de sección — `.sec-head`

Todo bloque de contenido (dentro de banda celeste o theme) arranca con el mismo encabezado:

```html
<div class="sec-head" data-reveal-head>
  <div>
    <span class="eyebrow" data-i="xxx_eyebrow">Kicker</span>
    <h2 class="h2" data-i="xxx_h2"></h2>
    <p class="lead" data-i="xxx_lead"></p>
  </div>
</div>
```

Por defecto es `justify-content: space-between` (para dejar un CTA o control a la derecha); agregar `sec-head-center` para centrarlo cuando no hay nada a la derecha. `data-reveal-head` es obligatorio, es el mismo mecanismo de reveal del hero.

## 4. Librería de componentes

Elegir el componente según el tipo de contenido; no mezclar más de dos tipos de card distintos por página.

| Componente | Clase | Uso | Dónde está de referencia |
|---|---|---|---|
| Grilla de tarjetas simples | `.svc-grid` + `.svc` | Ítems cortos en grilla de 3 (icono + título + bajada), bordes finos entre celdas | Home / Services |
| Paneles oblicuos (skew) | `.bene-panels` + `.bene-panel` | Beneficios/diferenciadores, alto contraste, hover expande el panel activo | About Us → Benefits |
| Tabs de filtro + grilla de cards | `.res-tabs` + `.res-grid` | Listados filtrables (posts, recursos, casos): barra de tabs sticky arriba, grilla de cards abajo, vista de detalle inline | Resources / Blog |
| Panel interactivo por pasos | `.proc-band` + `.proc-panel` | Proceso o metodología en pasos, con panel visual que cambia según el paso activo (hover/click) | Services → Our process |
| Banda CTA con glow | `.band.band-section` + `.band-glow` | Cierre de página: newsletter, agendar sesión, webinar. Dos blobs decorativos (`g1`/`g2`) detrás del contenido | Cierre de About/Services |

No inventar una variante de card nueva si alguna de estas cubre el caso. Si ninguna sirve, plantear la necesidad antes de crear una clase nueva.

## 5. Reveals e i18n — mecanismos que no se declaran a mano

- `data-reveal` (fade+up individual), `data-reveal-dir="left|up|right"` (staggered), `data-reveal-head` (encabezado) — GSAP los anima solos vía `main.js`, con fallback visible si GSAP no carga. No escribir animación CSS propia.
- `data-i="clave"` en cualquier texto — el contenido real vive en `assets/content.js` (`NX_CONTENT[lang]`), nunca hardcodeado en el HTML. Cada clave nueva necesita su entrada en **ambos** idiomas.
- El observer de bandas (`band-lit`) y el de reveals son globales y ya recorren toda página cargada; alcanza con poner las clases/atributos correctos en el HTML.

## Checklist antes de publicar

- [ ] Header y footer copiados verbatim, con el link de nav correcto marcado `active`.
- [ ] Hero con `mesh-bg` + gráfico animado propio (no genérico) + `sec-head` con `data-reveal-head`.
- [ ] Primera banda de contenido después del hero es celeste.
- [ ] Bandas siguientes alternan celeste/theme; ninguna banda celeste declara `background` en sus hijos directos.
- [ ] Clase de banda nueva sumada al observer de `main.js` si se creó una banda celeste con nombre propio.
- [ ] Cada `.sec-head` lleva `data-reveal-head`; cada card individual lleva `data-reveal` o `data-reveal-dir`.
- [ ] Componentes elegidos de la tabla de la sección 4, sin variantes nuevas sin necesidad real.
- [ ] Todo texto vía `data-i` + entrada en `assets/content.js`, en EN y ES.
- [ ] Revisado en modo claro y oscuro.
- [ ] Cambios espejados en `dist/assets/` si aplica.
