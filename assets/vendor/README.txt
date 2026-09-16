Librerías locales (para no depender de cdnjs)
==============================================

Descargá estos 3 archivos y guardalos en esta carpeta con ESTOS nombres exactos:

  three.min.js      -> https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js
  gsap.min.js       -> https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js
  ScrollTrigger.min.js -> https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js

Las páginas ya apuntan a assets/vendor/*.js con fallback automático al CDN:
si el archivo local no existe, se carga desde cdnjs y el sitio sigue funcionando.
Cuando los archivos estén acá, el sitio deja de pegarle al CDN.

Fuentes (Google Fonts): Manrope, IBM Plex Mono y Material Symbols Rounded se siguen
cargando desde fonts.googleapis.com. Para alojarlas también localmente hace falta
bajar los .woff2; decime y armo el @font-face.
