# Design

## 1. Visual Direction

Real del Pedregal debe sentirse como una pieza cinematografica de arquitectura mexicana: escala, piedra, sombra, vegetacion, recorrido, silencio y celebracion. La primera lectura no es "salon de eventos", sino "lugar con presencia".

La direccion visual parte de una tension controlada: blanco y negro institucional, imagenes amplias, composicion editorial con mucho aire, acentos minimos de materialidad y movimiento lento. La estetica debe ser distinta a proyectos previos y evitar la respuesta obvia de lujo dorado o editorial beige.

## 2. Experience Principles

- La imagen manda: video y fotografia deben ocupar los momentos de mayor jerarquia.
- La interfaz se retira: navegacion, CTAs y enlaces deben sentirse precisos, no protagonistas.
- Cada pagina tiene una funcion: home, nosotros, creaciones, expertos, contacto, eventos sociales y corporativos deben existir como superficies separadas.
- El movimiento debe abrir el espacio, no llamar la atencion sobre si mismo.
- El SEO vive en la estructura: copy visible minimo, metadata fuerte, schema, rutas limpias y contenido local estrategico.

## 3. Color System

Usar OKLCH en la implementacion.

- Ink: `oklch(13% 0.01 80)` para negros con calidez minima.
- Paper: `oklch(96% 0.01 86)` para blancos ligeramente minerales.
- Bone: `oklch(90% 0.018 83)` para texto secundario sobre negro.
- Stone: `oklch(57% 0.025 78)` para lineas, bordes y detalles sobrios.
- Deep Charcoal: `oklch(18% 0.012 72)` para paneles o cortinas de navegacion.
- Accent Clay: `oklch(49% 0.07 48)` como acento minimo, terroso y arquitectonico, no dorado.

La paleta no debe leerse como crema, cafe, dorado o slate. Los acentos deben aparecer con moderacion y estar subordinados a fotografia, blanco, negro y espacio.

## 4. Typography

La tipografia debe sentirse editorial sin caer en la formula saturada de display serif italiana + mono labels. Evitar por defecto: Playfair, Cormorant, Lora, Newsreader, Fraunces, DM Serif, Instrument Serif, Inter, DM Sans, Outfit y similares de uso reflejo.

Direccion recomendada:

- Display: una serif o romana de alto contraste con presencia arquitectonica, sobria y menos comun, o una familia display con raices editoriales pero no romantica.
- Text/UI: una sans humanista o grotesca contenida, con buena lectura en espanol y pesos suficientes.
- Maximo dos familias en la primera version.

Reglas:

- Un solo H1 por pagina.
- H1 con texto SEO natural, no forzado.
- Headings con `text-wrap: balance`.
- Prosa corta, lineas de 65 a 75 caracteres maximo.
- No usar mayusculas sostenidas en cuerpo de texto.
- Letter-spacing en display nunca menor a `-0.04em`.

## 5. Layout

La composicion debe ser arquitectonica: ejes claros, simetria cuando aporte solemnidad, asimetria cuando cree recorrido visual. Evitar cards repetitivas como estructura principal.

Home inicial:

- Hero fullscreen con video, overlay sobrio, poco texto y CTA discreto.
- Segunda seccion blanco/negro con H1 cargado a la izquierda, logo grande central y enlaces laterales a Eventos Sociales y Corporativos.
- Hover de enlaces con revelado de imagen cinematografico, sin parecer dropdown ni card.

Paginas principales:

- Nosotros: historia, lugar, reputacion y ubicacion con narrativa contenida.
- Creaciones: eventos, montajes y momentos, guiados por imagen.
- Expertos: equipo, servicio, catering y acompanamiento.
- Contacto: disponibilidad, visita privada, telefono, redes, ubicacion y mapa.
- Eventos Sociales / Corporativos: paginas de detalle enfocadas en conversion.

## 6. Navigation

Desktop:

- Header oculto inicialmente.
- Trigger superior minimalista, por ejemplo una flecha o indicador.
- Al hacer hover o foco sobre el trigger, el header cae como cortina editorial.
- Mientras el cursor o foco este dentro del header, permanece visible.
- Al salir, vuelve a ocultarse lentamente.
- Debe ser navegable por teclado y no depender solo de hover.

Mobile:

- Navegacion siempre accesible por tacto.
- Menu compacto o panel fullscreen sobrio.
- Targets tactiles claros.
- Sin sacrificar usabilidad por atmosfera.

Items principales: Logo, Nosotros, Creaciones, Expertos, Contacto, Facebook, Instagram.

## 7. Motion

Movimiento lento, suave y cinematografico. Usar curvas tipo ease-out-quart/quint/expo. Evitar rebotes, elasticidad, parallax agresivo y animaciones decorativas.

Requisitos:

- Respetar `prefers-reduced-motion`.
- El contenido nunca debe depender de animacion para ser visible.
- El video hero debe tener fallback estatico.
- La cortina de navegacion debe sentirse editorial, no dropdown comun.

## 8. Imagery And Assets

No solicitar todos los assets de golpe. Pedirlos conforme se necesiten.

Primeros assets necesarios para construir home:

- Logo principal en SVG o PNG transparente, idealmente tambien version monocromatica.
- Video hero horizontal, 16:9 o mas amplio, minimo 1920px de ancho, tomas de arquitectura, vegetacion, recorrido, luz y escala, sin texto incrustado.
- Poster del video en WebP o JPG, 1920px de ancho.
- Imagen horizontal para hover de Eventos Sociales, ideal 2400px de ancho, con espacio negativo.
- Imagen horizontal para hover de Corporativos, ideal 2400px de ancho, con espacio negativo.

Estructura futura:

- Mantener originales en `public/assets/originals/` o carpeta equivalente no servida si el hosting lo permite.
- Servir versiones optimizadas desde `public/assets/optimized/`.
- Preferir WebP o AVIF para imagenes finales.
- Usar `loading="lazy"` fuera del hero.
- Definir `alt` y `title` descriptivos.

## 9. SEO Foundation

Dominio canonico: `https://realdelpedregal.com.mx/`.

Base obligatoria:

- `index.html` semantico y limpio.
- Title y meta description por pagina.
- Canonical por ruta.
- Open Graph y Twitter/X Cards.
- `robots.txt`.
- `sitemap.xml`.
- Manifest y favicons cuando existan assets finales.
- Schema.org: `LocalBusiness`, `Organization`, `EventVenue` cuando aplique y `BreadcrumbList` en paginas internas.
- SEO local: Real del Pedregal, Lienzo Charro del Pedregal, Tlalpan, CDMX, Camino Sta. Teresa 305, bodas, eventos sociales, eventos corporativos, jardin para eventos, salon para eventos, catering.

La interfaz visible no debe saturarse de keywords.

## 10. Analytics, Ads And Consent

Preparar arquitectura para consentimiento sin cargar tracking real hasta tener IDs y consentimiento.

- Cookie consent con categorias: necesarias, analytics, ads.
- Carga condicional de GA4.
- Preparacion para Google Ads y conversion tracking.
- Eventos internos para: solicitar disponibilidad, agendar visita, contacto por telefono, WhatsApp, Facebook, Instagram y envio de formulario.
- No rastrear antes del consentimiento.

## 11. Quality Bar

Antes de aprobar una fase visual:

- Verificar desktop y mobile.
- Revisar contraste y foco.
- Revisar `prefers-reduced-motion`.
- Confirmar que no hay cards genericas, gradientes de template, dorados falsos ni copy comun.
- Confirmar que cada pagina tiene un solo H1.
- Ejecutar build.
- Revisar con criterio `impeccable` antes de cerrar la fase.
