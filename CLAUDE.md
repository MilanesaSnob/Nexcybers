# Nexcybers — reglas de diseño del proyecto

Duplicado de `nexcybers.mdc` (pensado para Cursor) — mismo contenido, para que cualquier asistente que lea `CLAUDE.md` tenga el mismo contexto. Si se actualiza uno, actualizar el otro.

Siempre usar como contexto de diseño:

- `docs/Sistema de diseño.md` (tipografía, color por theme, spacing, botones, catálogo de cards)
- `Nexcybers Color Palette.md` (valores hex/rgba exactos de cada variable, dark y light)
- `docs/Nueva sección - guía de estructura.md` (esqueleto de página: header/footer, hero, sistema de bandas celeste/theme, librería de componentes por sección)
- `docs/Blog - guia de contenido.md` / `docs/Resources - guia de contenido.md` / `docs/Servicios - guia de contenido.md` (cómo agregar contenido a esas secciones sin tocar HTML/CSS)

Sitio estático multi-página (`about.html`, `services.html`, `resources.html`, `blog.html`, `product.html`, `contact.html`, etc.) en HTML + CSS + JS vanilla. Sin build step, sin framework, sin JSX.

**Bandas celeste/theme (contrato de implementación):** toda página de nivel superior alterna banda celeste / banda del theme empezando en celeste justo después del hero, según §2 de `Nueva sección - guía de estructura.md`. Una banda celeste nueva se implementa con el armazón `background: var(--gold-bg)` + `::before` a `var(--bg)` + `.band-lit` en opacity 0, **y** se suma su clase al selector del `IntersectionObserver` de bandas en `assets/main.js` (`.why-band, .proc-band, .res-band, .p-band, …`). Nunca declarar `background` propio en los hijos directos de una banda celeste — el celeste tiene que verse a través del velo.

**Texto sobre banda celeste:** siempre `#fff` o `#000` fijo, nunca `var(--fg)`/`var(--fg-soft)` — es la única excepción documentada a "todo color por variable" (ver `Sistema de diseño.md`).

**Contraste AA obligatorio:** todo texto cumple AA (4.5:1 cuerpo, 3:1 título) contra su fondo real, salvo pedido explícito de lo contrario. Nunca bajar el peso visual de un párrafo con un hex intermedio a mano (ej. `#06283a` sobre celeste) — usar `font-weight`/tamaño en su lugar.

**Párrafos fluyen libremente:** sin `<br>` forzado (solo en títulos/encabezados) y sin `max-width` en `ch` salvo tres excepciones — lead de hero, banda CTA de cierre, footer. Todo párrafo de cuerpo lleva `text-wrap: pretty`. El resto del contenido crece según su contenedor.

**Cards:** reusar el catálogo de `Sistema de diseño.md` (`.trust-card`, `.svc`, `.bene-panel`, `.rcard`, `.contact-info-card`). No crear una variante de card nueva si el contenido encaja en alguna existente.

Reglas:
- Preservar los patrones vanilla-JS existentes (`assets/main.js`, `assets/content.js`, `.js` por página). No introducir React, JSX ni un framework de UI.
- No reescribir secciones o páginas completas salvo pedido explícito.
- No introducir librerías nuevas por CDN sin pedirlo explícitamente; las que ya están (GSAP/ScrollTrigger) cargan con fallback local — ver `assets/vendor/README.txt`.
- No introducir estilos visuales nuevos (colores, tipografías, radios, sombras) fuera de las variables y clases documentadas, salvo pedido explícito.
- Header y footer se copian verbatim entre páginas — nunca reinterpretar su markup.
- Todo texto visible va vía `data-i="clave"` + entrada en `assets/content.js` (`NX_CONTENT[lang]`), en EN y ES. Nunca hardcodear copy en el HTML.
- Reveals de scroll (`data-reveal`, `data-reveal-dir`, `data-reveal-head`) y el fade de bandas (`band-lit`) ya están manejados por `main.js` — no escribir animación CSS/JS propia para eso.
- Tokens de Nexcybers (colores, tipografía, spacing, radios) tienen precedencia sobre cualquier valor por defecto o calcado a mano. Usar siempre `var(--token)` o la clase (`.h2`, `.lead`, `.eyebrow`, `.btn-primary`, `.section-pad`…), nunca un hex o px suelto que ya tenga variable/clase equivalente.
- Revisar todo cambio visual en dark y light theme, y en ambos idiomas, antes de darlo por terminado.

## Entregables / exportación

Cuando se prepara un zip o export para subir al servidor, incluir solo lo que sirve al sitio y su contexto de LLM: los `.html`, `assets/`, `robots.txt`, `sitemap.xml`, más `docs/`, `CLAUDE.md`, `nexcybers.mdc` y `Nexcybers Color Palette.md`. **Excluir siempre `screenshots/`, `uploads/` y `dist/`** — son capturas de verificación, imágenes de referencia pegadas en el chat y una copia vieja del sitio; ninguna la referencia una página.

## Mantenimiento de estos documentos
A partir de ahora, cualquier decisión de diseño nueva o cambiada (color, componente, spacing, patrón de sección, convención de contenido) se refleja en el documento correspondiente (`Sistema de diseño.md`, `Nueva sección - guía de estructura.md`, las guías de contenido, `Nexcybers Color Palette.md`, o este archivo) en el mismo turno en que se hace el cambio — no queda solo en el código.
