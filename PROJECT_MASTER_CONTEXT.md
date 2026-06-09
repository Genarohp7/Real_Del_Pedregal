# Real del Pedregal - Master Project Context

Este archivo existe para continuar el proyecto en otro chat sin perder contexto. Si se abre una nueva conversacion, comparte este documento primero y pide que se respete como fuente de verdad del proyecto.

## 1. Proyecto

Nombre comercial: Real del Pedregal / Lienzo Charro del Pedregal.

Tipo de sitio: sitio web premium para venue de bodas, eventos sociales, eventos corporativos y experiencias privadas en CDMX.

Repositorio GitHub: `https://github.com/Genarohp7/Real_Del_Pedregal.git`

Ruta local principal del proyecto: `C:\dev\real-del-pedregal-landing`

Dominio previsto: `https://realdelpedregal.com.mx/`

GitHub Pages: el proyecto esta preparado para publicarse desde GitHub Pages. El build usa rutas relativas mediante `base: './'` en `vite.config.js`, para que funcione tanto en GitHub Pages como en dominio propio.

## 2. Stack Detectado

- Vite.
- React.
- CSS custom en `src/styles/app.css` y `src/styles/global.css`.
- Assets servidos desde `public/assets/`.
- Build con `npm run build`.
- Dev server habitual: `npm run dev -- --host 127.0.0.1 --port 5174`.

Archivos clave:

- `src/App.jsx`: estructura principal del sitio, hero, navegacion, seccion institucional y rutas base.
- `src/styles/app.css`: layout, header, hero, segunda seccion, interacciones y responsive.
- `src/styles/global.css`: base global y tipografia.
- `src/components/LogoMark.jsx`: componente de logo/monograma.
- `src/components/SocialIcon.jsx`: iconos sociales.
- `PRODUCT.md`: definicion de producto.
- `DESIGN.md`: direccion visual y criterios de diseno.
- `PROJECT_MASTER_CONTEXT.md`: este archivo maestro.

## 3. Proposito Del Sitio

Crear una experiencia web elegante, cinematografica, arquitectonica e inmersiva para presentar Real del Pedregal como un venue con presencia propia en Tlalpan, CDMX.

La pagina no debe sentirse como:

- salon de fiestas generico;
- catalogo de paquetes;
- invitacion digital de boda;
- landing SaaS;
- template de restaurante/eventos;
- lujo falso con dorados o decoracion obvia.

Debe sentirse como:

- arquitectura mexicana contemporanea;
- tradicion reinterpretada con sobriedad;
- espacio premium que habla por si mismo;
- experiencia visual editorial y cinematografica.

Concepto rector:

> Un espacio arquitectonico y natural que habla por si mismo.

Frase de intencion:

> Mexican architectural elegance.

## 4. Audiencia

El sitio debe funcionar para:

- parejas buscando venue premium para boda en CDMX;
- clientes de eventos sociales de alto perfil;
- empresas y organizadores de eventos corporativos;
- event planners;
- personas que necesitan un espacio elegante, amplio y confiable en Tlalpan.

La conversion principal es:

- solicitar disponibilidad;
- agendar visita privada;
- contactar al equipo de eventos.

## 5. Informacion Del Negocio

Nombre: Real del Pedregal / Lienzo Charro del Pedregal.

Ubicacion: Camino Sta. Teresa 305, Charra, Tlalpan, 14000 Ciudad de Mexico, CDMX.

Telefono: `55 4603 7246`.

Reputacion: 4.5 estrellas con mas de 2,500 opiniones en Google. Esto comunica legitimidad y prestigio, pero no debe saturar la interfaz.

Redes:

- Facebook: `https://www.facebook.com/EventosCharrosdelPedregal?locale=es_LA`
- Instagram: `https://www.instagram.com/realdelpedregalcdmx/?hl=es`

## 6. Direccion Visual

El criterio visual esta basado en lujo silencioso, fotografia protagonista, composicion editorial y movimiento sobrio.

Referencias de intencion:

- Gonzalez Helfon: elegancia boutique, limpieza editorial, fotografia protagonista, sensibilidad emocional.
- La Puta Suegra: hero inmersivo, narrativa cinematografica, produccion visual premium.

No copiar esas referencias. Solo tomar el nivel de pulido, presencia fotografica y ritmo visual.

Paleta base:

- blanco mineral;
- negro calido;
- neutros sobrios;
- acento terroso minimo si hace falta.

Evitar:

- glassmorphism;
- gradientes modernos genericos;
- tarjetas repetitivas;
- UI cargada;
- exceso de iconos;
- dorados falsos;
- sombras pesadas;
- sliders comunes;
- recursos visuales tipo template.

Favorecer:

- tipografia editorial;
- imagenes grandes;
- composicion con aire;
- ritmo cinematografico;
- transiciones lentas;
- detalles sutiles;
- navegacion silenciosa;
- layouts arquitectonicos;
- contraste controlado.

## 7. Copy Y Tono

El texto visible debe ser minimo, preciso y elegante.

Evitar frases genericas como:

- "momentos inolvidables";
- "haz realidad tu sueno";
- "eventos unicos";
- "somos tu mejor opcion";
- "paquetes a tu medida" si suena comun.

Tono correcto:

- "Espacios concebidos para celebraciones memorables."
- "Arquitectura, tradicion y celebracion en un mismo lugar."
- "El espacio donde las celebraciones toman forma."
- "Escenarios para experiencias extraordinarias."
- "Celebraciones disenadas a gran escala."

Actualmente se usa en la segunda seccion:

> El espacio donde la celebracion toma escala.

No cambiarlo sin confirmacion del usuario.

## 8. Home Actual Construida

### Hero

El hero inicial debe ser fullscreen con video.

Estado actual:

- El video `lienzo-charro-hero.mp4` corre desde que carga la pagina.
- No debe mostrarse imagen estatica encima del video.
- No debe haber texto sobre el video.
- El header se mantiene oculto y aparece solo con movimiento/interaccion.
- El video queda en su ultimo frame; se elimino la imagen final/fallback visible para que no reemplace el cierre del video.

Asset de video actual:

- `public/assets/video/lienzo-charro-hero.mp4`

### Header Desktop

El header se rompio intencionalmente respecto al patron tradicional.

Comportamiento aprobado:

- Logo en la esquina superior izquierda.
- Links principales en columna del lado izquierdo: Nosotros, Creaciones, Expertos, Contacto.
- Redes sociales en columna del lado derecho.
- No hay trigger/flecha superior.
- Los elementos aparecen cuando el mouse se mueve.
- Si el mouse queda quieto, los elementos se esconden.
- Los elementos de la columna izquierda aparecen uno a uno con retraso, como efecto de escalera temporal, pero terminan alineados verticalmente.

Estilo aprobado:

- En video/hero, elementos negros con un degradado blanco sutil detras.
- El degradado debe ser moderado y no invadir demasiado la pantalla; no debe llegar mas alla de la zona donde viven los botones.
- Los links del lado izquierdo son pequenos, separados y sobrios.
- Hover de links: subrayado visible y elegante.
- Botones sociales: mas grandes que la version inicial, con caja sobria.

### Header Mobile

En mobile no debe depender de hover.

Estado actual:

- Header movil fijo y usable.
- Logo visible.
- Boton "Menu".
- La segunda seccion ya contempla padding superior para que el header fijo no tape el H1.

Si se ajusta mobile, revisar que no haya solapes con el header.

### Segunda Seccion / Seccion Institucional

Estructura actual:

- H1 arriba/izquierda: "El espacio donde la celebracion toma escala."
- Logo/monograma grande al centro.
- Dos tarjetas visuales laterales:
  - Eventos Sociales.
  - Corporativos.

La seccion tiene fondo claro con lineas verticales sutiles, estilo editorial/arquitectonico.

Interaccion desktop actual:

- Las dos imagenes funcionan como tarjetas promocionales direccionales.
- En estado normal ya tienen forma de flecha mediante `clip-path`.
- La tarjeta izquierda apunta hacia el centro/logo.
- La tarjeta derecha apunta hacia el centro/logo.
- Al hacer hover, la imagen vuelve a su forma rectangular normal.
- El hover tambien aplica overlay, movimiento suave y reaccion sutil del logo.
- La animacion debe sentirse premium, limpia y no caricaturesca.

Decision importante aprobada:

- Originalmente la tarjeta se volvia flecha en hover.
- Luego se invirtio: la forma de flecha queda activa por defecto y en hover vuelve a rectangulo.
- Esto ya fue aprobado visualmente por el usuario.

Textos dentro de tarjetas:

- "Eventos Sociales" debe estar desplazado para que no se corte con la forma de flecha.
- "Corporativos" tuvo ajustes finos porque la C se cortaba; actualmente esta corregido y aprobado.

Responsive actual:

- En mobile, las tarjetas no dependen del hover.
- Se apilan verticalmente.
- Las imagenes se muestran completas en formato rectangular para legibilidad.
- El logo queda centrado arriba de las tarjetas.
- No debe haber overflow horizontal en 360px/390px.

## 9. Assets Actuales

Assets entregados por el usuario:

- Video: `lienzo charro.mp4`
- Logo completo: `Logo_POSITIVOcompleto.png`
- Logo monograma: `Logo_POSITIVO I.png`
- Imagen social/corporativa: `pedregal8.jpg`
- Imagen social/corporativa: `pedregal5.jpg`

Assets optimizados actuales en proyecto:

- `public/assets/optimized/logo-real-del-pedregal-completo.png`
- `public/assets/optimized/logo-real-del-pedregal-monograma.png`
- `public/assets/optimized/eventos-sociales-real-del-pedregal.webp`
- `public/assets/optimized/eventos-corporativos-real-del-pedregal.webp`
- `public/assets/video/lienzo-charro-hero.mp4`

El usuario indico que de momento la asignacion entre imagen social/corporativa era indistinta; se eligio una distribucion segun criterio visual.

## 10. SEO Y Dominio

Requisitos SEO:

- Title optimizado.
- Meta description.
- Canonical URL con `https://realdelpedregal.com.mx/`.
- Open Graph.
- Twitter/X cards.
- `robots.txt`.
- `sitemap.xml`.
- Schema.org para `LocalBusiness`, `Organization`, `EventVenue` o equivalente.
- SEO local para Tlalpan, CDMX, bodas, eventos sociales, eventos corporativos, jardin para eventos, salon para eventos y catering.

Principio:

El SEO debe vivir en estructura, metadata, schema y contenido estrategico, no en saturar la interfaz con keywords.

Nota de hosting:

- Existe dominio propio: `https://realdelpedregal.com.mx/`.
- El repo debe mantenerse listo para GitHub Pages.
- Si GitHub Pages aparece en blanco, revisar primero rutas de assets y `vite.config.js`.
- Ya se corrigio una vez usando `base: './'`.

## 11. Consentimiento, Analytics Y Ads

El proyecto debe quedar preparado para:

- aviso de cookies;
- consentimiento de analytics;
- consentimiento de ads;
- carga condicional de GA4;
- Google Ads/conversion tracking futuro;
- eventos para CTAs.

No insertar IDs reales hasta que el usuario los proporcione.

No rastrear sin consentimiento.

## 12. Accesibilidad

Requisitos:

- Respetar `prefers-reduced-motion`.
- En mobile no depender de hover.
- Enlaces con foco visible.
- Navegacion usable por teclado y tacto.
- Imagenes con `alt` y `title` descriptivos.
- Un solo H1 por pagina.
- Evitar texto cortado o solapado.

Correccion importante ya aplicada:

- En la segunda seccion se quito `aria-hidden="true"` de los wrappers de las tarjetas para no ocultar los textos e imagenes de los enlaces.

## 13. Flujo De Trabajo Con El Usuario

El usuario prefiere trabajar visualmente, con iteraciones pequenas y capturas de pantalla.

Patron de trabajo:

1. Implementar cambio especifico.
2. Revisar visualmente.
3. Ajustar fino segun captura.
4. Cuando el usuario aprueba una seccion o hito importante, hacer commit y push.

El usuario pidio desde el inicio:

- hacer commits cuando se termina una seccion importante;
- hacer push a GitHub para guardar avance;
- mantener Pages usable para mostrar progreso.

Antes de cerrar un hito:

- correr `npm run build`;
- revisar desktop y mobile;
- confirmar `git status`;
- hacer commit con mensaje claro;
- hacer push a `origin main`.

## 14. Comandos Frecuentes

Instalar dependencias, si hiciera falta:

```bash
npm install
```

Servidor local:

```bash
npm run dev -- --host 127.0.0.1 --port 5174
```

Build:

```bash
npm run build
```

Estado Git:

```bash
git status --short
```

Commit:

```bash
git add <archivos>
git commit -m "mensaje claro"
git push origin main
```

## 15. Commits Importantes Ya Realizados

Algunos hitos recientes:

- `5c62a6f feat: refine motion header styling`
- `c3f0882 fix: support github pages asset paths`
- `9739877 feat: refine institutional section layout`
- `93f98bf feat: add curtain reveal for event previews`
- `250ac65 feat: add directional event cards`
- `a66e730 feat: improve mobile responsive layout`

## 16. Estado Actual Al Crear Este Archivo

Ultimo hito trabajado:

- Se dejo responsive funcional para mobile.
- Las tarjetas de la segunda seccion se apilan en mobile.
- El header movil no tapa el inicio de la segunda seccion.
- Se verifico build.
- Se hizo commit y push del responsive.

Siguiente trabajo probable:

- Crear o pulir una nueva seccion despues de la segunda seccion.
- No construir paginas internas completas sin confirmar primero la direccion de home.
- Mantener el estilo premium, editorial, cinematografico y sobrio.

## 17. Criterios Para La Siguiente Seccion

Si se continua con una nueva seccion, debe:

- sentirse conectada con el ritmo visual actual;
- no convertirse en una reticula de cards genericas;
- usar imagen, espacio y composicion como protagonistas;
- mantener copy minimo;
- ofrecer ruta clara hacia contacto/disponibilidad;
- funcionar en desktop y mobile;
- no romper la personalidad sobria del sitio.

Antes de implementar una nueva seccion, revisar:

- `PRODUCT.md`;
- `DESIGN.md`;
- `src/App.jsx`;
- `src/styles/app.css`;
- este `PROJECT_MASTER_CONTEXT.md`.

## 18. Instruccion Para Otro Chat

Al iniciar otro chat, usar este mensaje:

```text
Voy a continuar el proyecto Real del Pedregal. Lee primero PROJECT_MASTER_CONTEXT.md, PRODUCT.md y DESIGN.md. Respeta la direccion visual premium/editorial/cinematografica ya aprobada, no cambies el hero, header ni segunda seccion salvo que lo pida explicitamente. Antes de editar, revisa el estado actual del codigo. Si completas un hito importante, corre build, haz commit y push a origin main.
```

## 19. Reglas De Diseno Que No Deben Romperse

- No hacer landing generica.
- No usar estetica SaaS/startup.
- No meter secciones con cards repetitivas sin razon.
- No usar dorados falsos ni gradientes decorativos genericos.
- No saturar de texto.
- No depender de hover en mobile.
- No encimar textos, logos o imagenes.
- No sacrificar legibilidad por efecto visual.
- No modificar assets aprobados sin pedir confirmacion.
- No avanzar a paginas internas completas sin confirmar primero la home inicial.

## 20. Filosofia Del Proyecto

Este sitio debe vender el espacio sin gritar.

La web debe actuar como una direccion de arte sobria: retirar ruido, ordenar la mirada, dejar que la arquitectura, el jardin, el video y la marca construyan confianza.

La meta no es impresionar con efectos. La meta es que Real del Pedregal se sienta como un lugar con escala, historia, presencia y criterio.
