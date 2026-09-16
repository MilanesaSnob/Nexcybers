/* Si las librerías locales de assets/vendor/ no están, las trae del CDN.
   Corre en la cola de scripts diferidos, antes de content.js y main.js. */
(function(){var CDN={three:'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',gsap:'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',st:'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'};
function has(n){return !!document.querySelector('script[src*="vendor/'+n+'"]')}
function load(u){try{var x=new XMLHttpRequest();x.open('GET',u,false);x.send();if(x.status>=200&&x.status<300){var s=document.createElement('script');s.text=x.responseText;document.head.appendChild(s)}}catch(e){}}
if(has('three')&&!window.THREE)load(CDN.three);
if(has('gsap')&&!window.gsap)load(CDN.gsap);
if(has('ScrollTrigger')&&window.gsap&&!window.ScrollTrigger)load(CDN.st);})();
