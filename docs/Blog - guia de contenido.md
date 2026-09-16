# Blog — guía de contenido

Cómo agregar un artículo nuevo a la sección Blog sin romper el diseño. Todo el contenido vive en dos archivos; no hay que tocar `blog.html` ni `styles.css`.

## Archivos

| Archivo | Qué contiene |
|---|---|
| `assets/blog.js` | La lista de tarjetas (`POSTS`): categoría, URL de origen, título y bajada en EN/ES. |
| `assets/blog-articles.js` | El cuerpo largo de cada artículo (`window.NX_POSTS_BODY`), en EN/ES. |

Al editar, aplicar el mismo cambio en `dist/assets/` para que la copia de despliegue quede sincronizada.

## Paso 1 — Agregar la tarjeta

En `assets/blog.js`, dentro del array `POSTS`, agregar una entrada:

```js
{ cat: 'risks',
  en: { u: 'https://nexcybers.com/en/blog-en/<slug-en>/', t: "Título en inglés", d: "Bajada en inglés, 1–2 oraciones." },
  es: { u: 'https://nexcybers.com/blog/<slug-es>/', t: "Título en español", d: "Bajada en español, 1–2 oraciones." } },
```

**Reglas**

- `cat` acepta cinco valores: `identity`, `phishing`, `privacy`, `risks`, `ai`. No inventar categorías: los filtros de la barra están fijados a esas cinco más "All articles", y cada una tiene color e imagen propios.
- A diferencia de Resources, acá **cada idioma tiene su propia URL** (`u`), porque los slugs del sitio original difieren. La URL en inglés es la canónica.
- El **slug** es el último segmento de la URL en inglés y es la clave que une la tarjeta con su artículo.
- `t` y `d` obligatorios en ambos idiomas. La bajada se muestra en la tarjeta al hacer hover; conviene entre 150 y 280 caracteres para que las tarjetas mantengan alturas parejas.
- El orden del array es el orden de aparición en la grilla. El más reciente arriba.

## Paso 2 — Agregar el cuerpo del artículo

En `assets/blog-articles.js`, agregar una entrada con el mismo slug en inglés:

```js
'<slug-en>': {
  en: `<p class="ra-lead">Párrafo de apertura.</p>
<h3>Título de sección</h3>
<p>Texto.</p>`,
  es: `<p class="ra-lead">Párrafo de apertura.</p>
<h3>Título de sección</h3>
<p>Texto.</p>`
},
```

Si el slug no existe en este archivo, la vista de detalle muestra la bajada más un aviso de "texto completo no cargado". No rompe nada, pero conviene no dejarlo así.

## Categorías: color e imagen

Cada categoría tiene un color de acento y una imagen de tarjeta. Las dos cosas se resuelven solas a partir de `cat`; no hay que declarar nada por artículo.

| `cat` | Etiqueta EN / ES | Color | Imagen |
|---|---|---|---|
| `identity` | Identity / Identidad | violeta `#b9a8ff` | `assets/cat/identity.png` |
| `phishing` | Phishing / Phishing | ocre `#ffc48c` | `assets/cat/phishing.png` |
| `privacy` | Privacy / Privacidad | celeste `#9ee6ff` | `assets/cat/privacy.png` |
| `risks` | Risks / Riesgos | rosa `#ff9ea8` | `assets/cat/risks.png` |
| `ai` | AI / IA | verde `#79f0c4` | `assets/cat/ai.png` |

Las imágenes son iconos lineales sobre fondo plano del color de la categoría, a 500×295 px. Si se reemplaza alguna, mantener nombre, proporción y peso (menos de 15 KB) para no ensuciar la carga de la grilla.

## Estructura HTML permitida

El artículo usa la misma lista corta y cerrada de etiquetas que Resources. La referencia visual es **The new era of industrialized cybercrime**.

| Etiqueta | Uso |
|---|---|
| `<p class="ra-lead">` | Solo el primer párrafo. Uno por artículo. |
| `<h3>` | Título de sección. Numerar (`1.`, `2.`, …) solo si el original numera. Sin `<strong>` adentro, sin asteriscos. |
| `<p>` | Párrafo de cuerpo. |
| `<ul>` / `<li>` | Lista de puntos. Cada ítem lleva una raya de color a la izquierda. Para pares término–definición usar `<li><strong>Término:</strong> Definición.</li>`. |
| `<ul class="ra-num">` | Lista numerada: el número reemplaza la raya de color. Nunca las dos marcas juntas. El número va dentro del `<strong>`. |
| `<strong>` | Énfasis dentro de un `<li>` o `<p>`. No usarlo para títulos. |
| `<em>` | Itálica. Títulos de informes y publicaciones citadas (`<em>Cybersecurity Forecast 2026</em>`), ejemplos entre paréntesis, términos que el original matiza. |
| `<p class="ra-src">` | Último párrafo: la fuente. Abre con `<strong>Sources:</strong>` / `<strong>Fuentes:</strong>`. |
| `<a>` | Enlace externo a una fuente oficial. Formato exacto: `<a href="https://…" target="_blank" rel="noopener">texto</a>`. |

No usar: `<h1>`, `<h2>`, `<h4>`, `<div>`, `<table>`, `<img>`, `style=` en línea, ni clases propias. Cualquier clase nueva queda sin estilo.

## Convenciones de escritura

- **Cerrar siempre con la fuente.** Todo artículo del blog termina en un `<p class="ra-src">` con el informe o la publicación de origen. Si son varias, separarlas con punto y coma. Si la fuente tiene URL pública, enlazarla con el dominio limpio como texto visible (`services.google.com/…`, sin `https://`).
- **Numerar los `<h3>` solo si el original los numera.** Tycoon 2FA numera sus secciones; Cybersecurity Forecast 2026 no. Se respeta el original en cada caso.
- **Un `<h3>` por idea.** Si una sección tiene más de tres párrafos, probablemente sean dos secciones.
- **Paridad EN/ES.** Ambos idiomas deben tener la misma cantidad de secciones y el mismo orden. El sitio alterna idioma sin recargar; una diferencia se ve como contenido faltante.
- **Bajada del artículo ≠ bajada de la tarjeta.** El `ra-lead` sale del párrafo de apertura de la página original; el `d` de la tarjeta suele ser la meta-descripción. No unificarlos.
- **Texto verbatim.** El contenido sale de la web original. No reescribir ni resumir; solo aplicar la estructura de arriba. Lo único que se ajusta es el marcado: negritas de títulos que el CMS dejó dentro del `<h3>`, asteriscos sueltos, itálicas de nombres de informes.
- **`<strong>` vs `<em>`.** `<strong>` jerarquiza: nombra de qué habla el ítem. `<em>` baja el tono: material de apoyo, títulos de publicaciones. Nunca anidar una en la otra.
- **Comillas tipográficas** (`’` `“ ”`) en el cuerpo, no rectas.

## Checklist antes de publicar

- [ ] Slug EN idéntico en `blog.js` y `blog-articles.js`.
- [ ] `cat` es una de las cinco categorías válidas.
- [ ] URL propia por idioma en la tarjeta (`en.u` y `es.u`).
- [ ] Título y bajada en EN y ES.
- [ ] Cuerpo en EN y ES, misma cantidad de secciones.
- [ ] Un solo `<p class="ra-lead">`, al inicio.
- [ ] Un `<p class="ra-src">` al final, en los dos idiomas.
- [ ] Listas numeradas con `class="ra-num"`; listas con viñeta sin clase.
- [ ] Sin etiquetas ni clases fuera de la tabla de arriba.
- [ ] Cambios espejados en `dist/assets/`.
- [ ] Revisado en modo claro y oscuro, y en ambos idiomas.
