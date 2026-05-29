# Real del Pedregal Eventos Sociales - Landing temporal

Landing page temporal para `realdelpedregal.com.mx`, creada con React + Vite.

## Logo

Coloca el logo PNG en:

```txt
public/brand/logo-real-del-pedregal.png
```

El nombre debe coincidir exactamente para que la pagina lo cargue.

## Comandos

Instalar dependencias:

```bash
npm install
```

Correr localmente:

```bash
npm run dev
```

Crear build de produccion:

```bash
npm run build
```

Previsualizar el build:

```bash
npm run preview
```

## Hosting

Despues de ejecutar `npm run build`, sube el contenido de la carpeta:

```txt
dist
```

No subas la carpeta completa del proyecto si tu hosting espera archivos estaticos; sube el contenido generado dentro de `dist`.

## Favicon y redes sociales

El mismo PNG del logo se usa como favicon temporal y como imagen Open Graph:

```txt
public/brand/logo-real-del-pedregal.png
```

## SEO

Incluye `title`, `meta description`, canonical, Open Graph basico, `robots.txt` y `sitemap.xml` apuntando a `https://realdelpedregal.com.mx/`.