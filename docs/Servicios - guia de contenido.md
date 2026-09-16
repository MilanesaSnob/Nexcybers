# Servicios — guía de contenido

Cómo agregar un servicio nuevo para que su vista de detalle replique el diseño actual. Todo el contenido vive en dos archivos; no hay que tocar `services.html` ni `styles.css`.

## Archivos

| Archivo | Qué contiene |
|---|---|
| `assets/content.js` | La tarjeta del servicio (`NX_CONTENT[lang].services`): icono, título y bajada. |
| `assets/service-pages.js` | El slug, las etiquetas globales y el contenido del detalle (`NX_SERVICE_SLUGS`, `NX_SERVICE_LABELS`, `NX_SERVICE_PAGES`). |

Al editar, aplicar el mismo cambio en `dist/assets/` para que la copia de despliegue quede sincronizada.

**Importante:** el vínculo entre tarjeta y detalle es **posicional**. El servicio en la posición 3 de `services` usa el slug en la posición 3 de `NX_SERVICE_SLUGS`. Si se agrega uno al medio de un array hay que agregarlo en la misma posición del otro.

## Paso 1 — La tarjeta

En `assets/content.js`, dentro de `services`, en **ambos idiomas** y en el mismo orden:

```js
{ ico: 'shield', t: "Título del servicio", d: "Bajada de 1–2 oraciones." },
```

`ico` acepta solo estos seis valores, definidos en `assets/services.js`:

| Valor | Icono |
|---|---|
| `shield` | Escudo con check |
| `pulse` | Línea de pulso / actividad |
| `scan` | Marco de escaneo con punto central |
| `lock` | Candado cerrado |
| `balance` | Balanza |
| `people` | Grupo de personas |

El mismo icono aparece en tres lugares: la tarjeta de la grilla, la tarjeta del home y el hero de la vista de detalle. No hace falta declararlo tres veces.

Para agregar un icono nuevo hay que sumarlo al objeto `ICONS` de `assets/services.js` **y** al de `assets/main.js` (el home tiene su propia copia). Debe ser un SVG de trazo, `viewBox="0 0 24 24"`, sin relleno, para que herede el estilo del resto.

## Paso 2 — El slug

En `assets/service-pages.js`, agregar el slug a `NX_SERVICE_SLUGS` en la posición que corresponde:

```js
window.NX_SERVICE_SLUGS = [
  'cybersecurity-for-startups-smes',
  …
  'mi-servicio-nuevo'
];
```

El slug es en inglés, en minúsculas, con guiones. Es lo que aparece en la URL (`services.html#s=mi-servicio-nuevo`), así que conviene no cambiarlo una vez publicado.

## Paso 3 — El contenido del detalle

En el mismo archivo, dentro de `NX_SERVICE_PAGES`:

```js
'mi-servicio-nuevo': {
  en: {
    intro: 'Párrafo de apertura.',
    items: [
      { t: 'Título del punto', d: 'Descripción del punto.' }
    ],
    goal: 'Frase de objetivo.'
  },
  es: { intro: '…', items: [ … ], goal: '…' }
}
```

Los tres campos son obligatorios en ambos idiomas.

| Campo | Se renderiza como | Reglas |
|---|---|---|
| `intro` | Párrafo bajo el hero | Un solo párrafo. Sin HTML. |
| `items` | Grilla de fichas numeradas con check | **6 ítems** es el estándar (todos los servicios actuales lo son). La grilla es de 2 columnas: usar un número par. Cada `t` de una línea, cada `d` de 2–4 líneas. |
| `goal` | Card oscura "Our objective" al cierre | Una o dos oraciones. La card trae sola el botón que va a la página de contacto. |

Si el slug no existe en `NX_SERVICE_PAGES`, la tarjeta queda sin enlace: se muestra en la grilla pero no abre detalle. No rompe nada.

## Lo que se genera solo

Estos elementos no se escriben: la vista de detalle los arma a partir de lo anterior.

- El icono del servicio en el hero, con su halo.
- El kicker "Service" y el título tomado de la tarjeta.
- La numeración `01`–`06` de las fichas y el check de cada una.
- El encabezado "Our services include:".
- El botón de la card de objetivo y el botón "Back to services" centrado al pie.
- El botón flotante "Back to top" al hacer scroll.
- El ruteo por hash y el scroll de retorno a la grilla.

Las etiquetas de todo eso viven en `NX_SERVICE_LABELS` de `assets/service-pages.js` y son globales: al cambiar una cambia en todos los servicios.

## Convenciones de escritura

- **Paridad EN/ES.** Mismo `ico`, misma cantidad de `items` y mismo orden en los dos idiomas. El sitio alterna idioma sin recargar; una diferencia se ve como contenido faltante.
- **Texto verbatim.** El contenido sale de la página original del servicio. No reescribir ni resumir.
- **Sin HTML en los campos.** `intro`, `t`, `d` y `goal` son texto plano; cualquier etiqueta se muestra literal.
- **Longitud parecida entre `d`.** Las fichas de una fila comparten alto; descripciones muy desparejas dejan huecos.
- **Comillas tipográficas** (`’` `“ ”`), no rectas.

## Checklist antes de publicar

- [ ] Misma posición en `services` (ambos idiomas) y en `NX_SERVICE_SLUGS`.
- [ ] `ico` es uno de los seis valores válidos.
- [ ] Slug en minúsculas con guiones, en inglés.
- [ ] `intro`, `items` y `goal` completos en EN y ES.
- [ ] Cantidad par de `items`, idealmente 6.
- [ ] Enlace verificado desde la grilla de servicios y desde la tarjeta del home.
- [ ] Cambios espejados en `dist/assets/`.
- [ ] Revisado en modo claro y oscuro, y en ambos idiomas.
