# Recursos — guía de contenido

Cómo agregar un recurso nuevo a la sección Resources sin romper el diseño. Todo el contenido vive en dos archivos; no hay que tocar `resources.html` ni `styles.css`.

## Archivos

| Archivo | Qué contiene |
|---|---|
| `assets/resources.js` | La lista de tarjetas (`RES`): categoría, URL de origen, título y bajada en EN/ES. |
| `assets/resource-articles.js` | El cuerpo largo de cada artículo (`window.NX_ARTICLES`), en EN/ES. |

Al editar, aplicar el mismo cambio en `dist/assets/` para que la copia de despliegue quede sincronizada.

## Paso 1 — Agregar la tarjeta

En `assets/resources.js`, dentro del array `RES`, agregar una entrada:

```js
{ cat: 'guide', url: 'https://nexcybers.com/en/recursos/<slug>/',
  en: { t: "Título en inglés", d: "Bajada en inglés, 1–2 oraciones." },
  es: { t: "Título en español", d: "Bajada en español, 1–2 oraciones." } },
```

**Reglas**

- `cat` acepta solo dos valores: `guide` (Guides & Tools) o `reg` (Regulatory Frameworks). No inventar categorías nuevas: los filtros de la barra están fijados a esas dos más "All Resources".
- `url` debe ser la URL en inglés del sitio original. El **slug** es el último segmento de esa URL y es la clave que une la tarjeta con su artículo.
- `t` y `d` obligatorios en ambos idiomas. La bajada se muestra en la tarjeta; conviene entre 150 y 280 caracteres para que las tarjetas mantengan alturas parejas.
- El orden del array es el orden de aparición en la grilla.

## Paso 2 — Agregar el cuerpo del artículo

En `assets/resource-articles.js`, agregar una entrada con el mismo slug:

```js
'<slug>': {
  en: `<p class="ra-lead">Párrafo de apertura.</p>
<h3>1. Título de sección</h3>
<p>Texto.</p>`,
  es: `<p class="ra-lead">Párrafo de apertura.</p>
<h3>1. Título de sección</h3>
<p>Texto.</p>`
},
```

Si el slug no existe en este archivo, la vista de detalle muestra la bajada más un aviso de "texto completo no cargado". No rompe nada, pero conviene no dejarlo así.

## Paso 3 — Formulario de descarga (opcional)

Algunos recursos cierran con una descarga gratuita (guía, checklist). Para sumarla, agregar el campo opcional `dl` a la entrada de `RES` en `assets/resources.js`:

```js
{ cat: 'guide', url: '…',
  dl: { en: "Download our free <X> guide:", es: "Descargá nuestra guía gratuita de <X>:" },
  en: { … }, es: { … } },
```

Eso es todo: la tarjeta se renderiza sola al final del artículo, con el mismo tratamiento visual que la card de Our Objective en el detalle de Servicios (fondo #04222e, radio 16px). El formulario trae Name y Email en una fila y el botón primario; al enviar se reemplaza por un mensaje de confirmación.

**Reglas**

- Solo el título va por recurso. Las etiquetas de los campos, el texto del botón y la confirmación son globales y viven en `LABELS` de `assets/resources.js` (`dl_name`, `dl_email`, `dl_go`, `dl_ok`).
- El título se copia verbatim del sitio original, con dos puntos al final:

| Recurso | `dl` EN |
|---|---|
| Implementation Plan: Incident Management | Download our free Incident Management guide: |
| Checklist for creating and managing a security baseline | Download our free checklist: |

- Si el recurso original no ofrece descarga, omitir `dl` por completo. El artículo termina en su última sección.
- No agregar el formulario dentro del cuerpo del artículo en `resource-articles.js`: ahí no tendría estilo.
- El envío hoy es solo de interfaz, sin backend. Al conectar el sitio a un servicio de correo hay que enganchar el `submit` de `.resd-dl-form`.

## Estructura HTML permitida

El artículo usa una lista corta y cerrada de etiquetas. La referencia visual es **Directive NIS2**: todo recurso nuevo debe verse igual.

| Etiqueta | Uso |
|---|---|
| `<p class="ra-lead">` | Solo el primer párrafo. Uno por artículo. |
| `<h3>` | Título de sección. Numerar (`1.`, `2.`, …) cuando el contenido es una secuencia o un plan. Sin `<strong>` adentro, sin asteriscos. |
| `<p>` | Párrafo de cuerpo. |
| `<ul>` / `<li>` | Lista de puntos. Cada ítem lleva una raya de color a la izquierda. Para pares término–definición usar `<li><strong>Término:</strong> Definición.</li>`. |
| `<ul class="ra-num">` | **Lista numerada.** Cuando los ítems van numerados (`1.`, `2.`, …), usar esta variante: el número reemplaza la raya de color. Nunca las dos marcas juntas. El número va dentro del `<strong>`: `<li><strong>1. Prepare:</strong> Texto.</li>`. |
| `<strong>` | Énfasis dentro de un `<li>` o `<p>`. No usarlo para títulos. |
| `<em>` | Itálica. Para material secundario dentro de un párrafo o ítem: paréntesis de ejemplos, títulos de publicaciones y normas citadas, y términos que el original destaca por matiz (“los <em>requisitos</em> que debe cumplir”). No usarla para énfasis de fuerza — eso es `<strong>`. |
| `<a>` | Enlace externo a una fuente oficial. Formato exacto: `<a href="https://…" target="_blank" rel="noopener">texto</a>`. |

No usar: `<h1>`, `<h2>`, `<h4>`, `<div>`, `<table>`, `<img>`, `style=` en línea, ni clases propias. Cualquier clase nueva queda sin estilo.

## Convenciones de escritura

- **Enlaces externos.** Solo a fuentes oficiales que el artículo original ya cita (NIST, ISO, CPPA, EUR-Lex). Siempre con `target="_blank" rel="noopener"`. El texto visible es el dominio limpio sin protocolo (`cppa.ca.gov`, no `https://cppa.ca.gov/`), aunque el `href` sí lleve la URL completa y canonizada. Nada de enlaces a la competencia, a blogs de terceros ni internos al propio sitio — la navegación interna se hace con las tarjetas y el breadcrumb.
- **`<strong>` vs `<em>`.** `<strong>` jerarquiza: nombra de qué habla el ítem (`<strong>Título:</strong> …`). `<em>` baja el tono: material de apoyo que el lector puede saltear sin perder el hilo — ejemplos entre paréntesis, títulos de publicaciones citadas. En un mismo ítem pueden convivir: `<strong>4. Controles tecnológicos:</strong> Medidas técnicas… <em>(Ejemplos: …)</em>`. Nunca anidar una en la otra.
- **Una sola marca por ítem.** Lista con viñeta → `<ul>` (raya de color). Lista numerada → `<ul class="ra-num">` (número, sin raya). Un ítem que empieza con "1." dentro de un `<ul>` normal muestra raya y número a la vez: está mal.
- **Un `<h3>` por idea.** Si una sección tiene más de tres párrafos, probablemente sean dos secciones.
- **Numerar solo cuando el orden importa.** Un plan de implementación se numera; un glosario de marcos regulatorios, no.
- **Paridad EN/ES.** Ambos idiomas deben tener la misma cantidad de secciones y el mismo orden. El sitio alterna idioma sin recargar; una diferencia se ve como contenido faltante.
- **Bajada del artículo ≠ bajada de la tarjeta.** El `ra-lead` sale del párrafo de apertura de la página original, que suele diferir del texto de la tarjeta en la grilla. No unificarlos.
- **Listas de checklist.** Cuando una sección es una lista de verificación, va como `<ul>` completo. Si tiene una frase introductoria, un `<p>` antes de la lista. Si una sección abre sublistas por entorno (Windows, cloud), alternar `<p>` de encabezado y `<ul>`.
- **Texto verbatim.** El contenido sale de la web original. No reescribir ni resumir; solo aplicar la estructura de arriba.
- **Comillas tipográficas** (`’` `“ ”`) en el cuerpo, no rectas.

## Checklist antes de publicar

- [ ] Slug idéntico en `resources.js` y `resource-articles.js`.
- [ ] `cat` es `guide` o `reg`.
- [ ] Título y bajada en EN y ES.
- [ ] Cuerpo en EN y ES, misma cantidad de secciones.
- [ ] Un solo `<p class="ra-lead">`, al inicio.
- [ ] Listas numeradas con `class="ra-num"`; listas con viñeta sin clase.
- [ ] Sin etiquetas ni clases fuera de la tabla de arriba.
- [ ] `dl` presente solo si el recurso tiene guía descargable.
- [ ] Cambios espejados en `dist/assets/`.
- [ ] Revisado en modo claro y oscuro, y en ambos idiomas.
