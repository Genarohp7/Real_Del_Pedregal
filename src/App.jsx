import { useEffect, useRef, useState } from 'react';
import LogoMark from './components/LogoMark.jsx';
import SocialIcon from './components/SocialIcon.jsx';
import './styles/app.css';

const FACEBOOK_URL = 'https://www.facebook.com/EventosCharrosdelPedregal?locale=es_LA';
const INSTAGRAM_URL = 'https://www.instagram.com/realdelpedregalcdmx/';
const MAPS_URL = 'https://maps.app.goo.gl/yZ7QhdAafxdVwN1n9';
const WHATSAPP_PRIMARY_URL =
  'https://wa.me/525546037246?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20disponibilidad%20para%20realizar%20un%20evento%20en%20Real%20del%20Pedregal.';
const WHATSAPP_QUOTE_URL =
  'https://wa.me/525546037246?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20evento%20en%20Lienzo%20Charro%20del%20Pedregal.%20%C2%BFPodr%C3%ADan%20compartirme%20informaci%C3%B3n%3F';
const WHATSAPP_VISIT_URL =
  'https://wa.me/525546037246?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20visita%20para%20conocer%20Lienzo%20Charro%20del%20Pedregal.%20%C2%BFQu%C3%A9%20horarios%20tienen%20disponibles%3F';
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;
const SITE_URL = 'https://realdelpedregal.com.mx';
const DEFAULT_PAGE_METADATA = {
  title: 'Real del Pedregal | Eventos en el Lienzo Charro del Pedregal',
  description:
    'Venue para bodas, XV años, eventos sociales y corporativos en el Lienzo Charro del Pedregal, al sur de la Ciudad de México. Conoce Real del Pedregal y sus espacios para celebrar.',
  canonical: `${SITE_URL}/`,
  ogTitle: 'Real del Pedregal | Venue para eventos en el sur de la CDMX',
  ogDescription:
    'Espacios para bodas, XV años, eventos sociales y corporativos dentro del Lienzo Charro del Pedregal. Conoce Real del Pedregal.',
  twitterTitle: 'Real del Pedregal | Eventos en el Lienzo Charro del Pedregal',
  twitterDescription:
    'Un venue con espacios versátiles para celebraciones sociales y eventos corporativos en el sur de la Ciudad de México.',
};
const PAGE_METADATA = {
  '/nosotros': {
    title: 'Nosotros y Clientes | Real del Pedregal',
    description:
      'Conoce Real del Pedregal, recinto para eventos dentro del Lienzo Charro del Pedregal en el sur de la CDMX, y algunos clientes que han realizado eventos sociales y corporativos en el venue.',
    canonical: `${SITE_URL}/nosotros/`,
    ogTitle: 'Real del Pedregal | Nosotros y Clientes',
    ogDescription:
      'Un recinto para eventos sociales y corporativos dentro del Lienzo Charro del Pedregal, con espacios versátiles y trayectoria en celebraciones privadas e institucionales.',
    twitterTitle: 'Nosotros y Clientes | Real del Pedregal',
    twitterDescription:
      'Conoce Real del Pedregal y algunos clientes que han elegido el recinto para eventos sociales, corporativos e institucionales en el sur de la CDMX.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          '@id': `${SITE_URL}/nosotros/#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Nosotros', item: `${SITE_URL}/nosotros/` },
          ],
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/nosotros/#webpage`,
          name: 'Nosotros y Clientes | Real del Pedregal',
          url: `${SITE_URL}/nosotros/`,
          description:
            'Conoce Real del Pedregal, recinto para eventos dentro del Lienzo Charro del Pedregal en el sur de la CDMX, y algunos clientes que han realizado eventos sociales y corporativos en el venue.',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#venue` },
          inLanguage: 'es-MX',
        },
        {
          '@type': 'EventVenue',
          '@id': `${SITE_URL}/#venue`,
          name: 'Real del Pedregal',
          alternateName: 'Lienzo Charro del Pedregal',
          url: `${SITE_URL}/`,
          image: `${SITE_URL}/assets/optimized/nosotros-video-poster-real-del-pedregal.webp`,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Camino Sta. Teresa 305',
            addressLocality: 'Tlalpan',
            addressRegion: 'Ciudad de México',
            addressCountry: 'MX',
          },
          sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
          telephone: '+52 55 4603 7246',
        },
      ],
    },
  },
  '/contacto': {
    title: 'Contacto | Real del Pedregal',
    description:
      'Contacta a Real del Pedregal para consultar disponibilidad, agendar una visita o cotizar eventos sociales y corporativos dentro del Lienzo Charro del Pedregal, en Tlalpan CDMX.',
    canonical: `${SITE_URL}/contacto/`,
    ogTitle: 'Contacto | Real del Pedregal',
    ogDescription:
      'Consulta disponibilidad o agenda una visita a Real del Pedregal, recinto para eventos sociales y corporativos en el Lienzo Charro del Pedregal.',
    twitterTitle: 'Contacto | Real del Pedregal',
    twitterDescription:
      'Agenda una visita o solicita información para tu evento en Real del Pedregal, al sur de la Ciudad de México.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          '@id': `${SITE_URL}/contacto/#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Contacto', item: `${SITE_URL}/contacto/` },
          ],
        },
        {
          '@type': 'ContactPage',
          '@id': `${SITE_URL}/contacto/#webpage`,
          name: 'Contacto | Real del Pedregal',
          url: `${SITE_URL}/contacto/`,
          description:
            'Contacta a Real del Pedregal para consultar disponibilidad, agendar una visita o cotizar eventos sociales y corporativos dentro del Lienzo Charro del Pedregal, en Tlalpan CDMX.',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#venue` },
          inLanguage: 'es-MX',
        },
        {
          '@type': 'EventVenue',
          '@id': `${SITE_URL}/#venue`,
          name: 'Real del Pedregal',
          alternateName: 'Lienzo Charro del Pedregal',
          url: `${SITE_URL}/`,
          image: `${SITE_URL}/assets/optimized/contacto-real-del-pedregal.jpg`,
          telephone: '+52 55 4603 7246',
          hasMap: MAPS_URL,
          areaServed: ['Tlalpan', 'Sur de la Ciudad de México', 'CDMX'],
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '10:00',
              closes: '18:00',
            },
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Camino Santa Teresa 305',
            addressLocality: 'Tlalpan',
            addressRegion: 'Ciudad de México',
            addressCountry: 'MX',
          },
          sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
        },
      ],
    },
  },
  '/espacios': {
    title: 'Espacios para Eventos | Real del Pedregal',
    description:
      'Conoce los espacios de Real del Pedregal dentro del Lienzo Charro del Pedregal: jardines, hacienda, áreas abiertas y ambientes versátiles para eventos de 100 a 500 personas en el sur de la CDMX.',
    canonical: `${SITE_URL}/espacios/`,
    ogTitle: 'Espacios para eventos en Real del Pedregal',
    ogDescription:
      'Jardines, hacienda, áreas abiertas y espacios versátiles dentro del Lienzo Charro del Pedregal para celebraciones sociales y eventos corporativos.',
    twitterTitle: 'Espacios para Eventos | Real del Pedregal',
    twitterDescription:
      'Ambientes versátiles para bodas, XV años, bautizos, graduaciones y eventos corporativos en Real del Pedregal.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          '@id': `${SITE_URL}/espacios/#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Espacios', item: `${SITE_URL}/espacios/` },
          ],
        },
        {
          '@type': 'CollectionPage',
          '@id': `${SITE_URL}/espacios/#collection`,
          name: 'Espacios para eventos en Real del Pedregal',
          url: `${SITE_URL}/espacios/`,
          description:
            'Jardines, hacienda, áreas abiertas y espacios versátiles dentro del Lienzo Charro del Pedregal para celebraciones sociales y eventos corporativos.',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#venue` },
          inLanguage: 'es-MX',
        },
        {
          '@type': 'ItemList',
          '@id': `${SITE_URL}/espacios/#itemlist`,
          name: 'Espacios de Real del Pedregal',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Jardín Parián', item: `${SITE_URL}/espacios/#showcase-space-1` },
            { '@type': 'ListItem', position: 2, name: 'Hacienda Luminares', item: `${SITE_URL}/espacios/#showcase-space-2` },
            { '@type': 'ListItem', position: 3, name: 'Jardín Bosque del Pedregal', item: `${SITE_URL}/espacios/#showcase-space-3` },
          ],
        },
      ],
    },
  },
};
PAGE_METADATA['/clientes'] = PAGE_METADATA['/nosotros'];

const ensureMetaTag = (selector, createTag, valueAttribute, value) => {
  if (!value) {
    return;
  }

  let element = document.head.querySelector(selector);

  if (!element) {
    element = createTag();
    document.head.appendChild(element);
  }

  element.setAttribute(valueAttribute, value);
};

const applyPageMetadata = (path) => {
  const metadata = PAGE_METADATA[path] || DEFAULT_PAGE_METADATA;

  document.title = metadata.title;
  ensureMetaTag('meta[name="description"]', () => {
    const tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    return tag;
  }, 'content', metadata.description);
  ensureMetaTag('link[rel="canonical"]', () => {
    const tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    return tag;
  }, 'href', metadata.canonical);
  ensureMetaTag('meta[property="og:title"]', () => {
    const tag = document.createElement('meta');
    tag.setAttribute('property', 'og:title');
    return tag;
  }, 'content', metadata.ogTitle);
  ensureMetaTag('meta[property="og:description"]', () => {
    const tag = document.createElement('meta');
    tag.setAttribute('property', 'og:description');
    return tag;
  }, 'content', metadata.ogDescription);
  ensureMetaTag('meta[property="og:url"]', () => {
    const tag = document.createElement('meta');
    tag.setAttribute('property', 'og:url');
    return tag;
  }, 'content', metadata.canonical);
  ensureMetaTag('meta[name="twitter:title"]', () => {
    const tag = document.createElement('meta');
    tag.setAttribute('name', 'twitter:title');
    return tag;
  }, 'content', metadata.twitterTitle);
  ensureMetaTag('meta[name="twitter:description"]', () => {
    const tag = document.createElement('meta');
    tag.setAttribute('name', 'twitter:description');
    return tag;
  }, 'content', metadata.twitterDescription);

  const routeJsonLdId = 'route-json-ld';
  const existingJsonLd = document.getElementById(routeJsonLdId);

  if (!metadata.jsonLd) {
    existingJsonLd?.remove();
    return;
  }

  const jsonLdScript = existingJsonLd || document.createElement('script');
  jsonLdScript.id = routeJsonLdId;
  jsonLdScript.type = 'application/ld+json';
  jsonLdScript.textContent = JSON.stringify(metadata.jsonLd);

  if (!existingJsonLd) {
    document.head.appendChild(jsonLdScript);
  }
};
const pageUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
const internalPagePaths = ['/nosotros', '/espacios', '/clientes', '/contacto', '/eventos', '/eventos-sociales', '/corporativos'];
const navItems = [
  { label: 'Espacios', href: '/espacios' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Clientes', href: '/clientes' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

const homeEventMosaic = [
  {
    title: 'Eventos',
    href: '/eventos',
    linkTitle: 'Eventos sociales y corporativos en Real del Pedregal',
    ariaLabel: 'Ver tipos de eventos en Real del Pedregal',
    src: 'assets/optimized/eventos-sociales-bodas-galeria-12.jpg',
    alt: 'Eventos sociales, bodas y celebraciones en Real del Pedregal',
    className: 'mosaic-tile-events',
    loading: 'eager',
  },
  {
    title: 'Espacios',
    href: '/espacios',
    linkTitle: 'Espacios para eventos en el Lienzo Charro del Pedregal',
    ariaLabel: 'Ver espacios para eventos en Real del Pedregal',
    src: 'assets/optimized/eventos-corporativos-real-del-pedregal.webp',
    alt: 'Espacios para bodas y eventos en Real del Pedregal',
    className: 'mosaic-tile-spaces',
    loading: 'eager',
  },
];

const eventsShowcase = [
  {
    name: 'XV Años',
    title: 'XV Años en Real del Pedregal',
    ariaLabel: 'Galería de imágenes de XV Años en Real del Pedregal',
    direction: 'right',
    images: [
      {
        src: 'assets/optimized/evento-xv-anos-showcase-01.jpg',
        alt: 'Vals de XV años sobre pista iluminada en Real del Pedregal',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/evento-xv-anos-showcase-02.jpg',
        alt: 'Invitadas durante una celebración de XV años con iluminación violeta',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/evento-xv-anos-showcase-03.png',
        alt: 'Montaje de salón para XV años con luces decorativas y pista de baile',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/evento-xv-anos-showcase-04.png',
        alt: 'Pista de baile y decoración aérea para celebración de XV años',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/evento-xv-anos-showcase-05.png',
        alt: 'Quinceañera bailando con su padre entre luces y confeti',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/evento-xv-anos-showcase-06.png',
        alt: 'Pista principal decorada para XV años bajo techo iluminado',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/evento-xv-anos-showcase-07.png',
        alt: 'Presentación musical en vivo durante fiesta de XV años',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/evento-xv-anos-showcase-08.png',
        alt: 'Entrada decorativa con luces para fiesta de XV años',
        className: 'spaces-showcase-portrait',
      },
    ],
  },
  {
    name: 'Boda',
    title: 'Boda en Real del Pedregal',
    ariaLabel: 'Galería de imágenes de boda en Real del Pedregal',
    direction: 'right',
    images: [
      {
        src: 'assets/optimized/evento-boda-showcase-01.png',
        alt: 'Detalle de asiento reservado para boda en Real del Pedregal',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/evento-boda-showcase-02.png',
        alt: 'Pareja de boda bailando entre humo escénico en Real del Pedregal',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/evento-boda-showcase-03.png',
        alt: 'Detalle de mesa de boda con cristalería y vajilla elegante',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/evento-boda-showcase-04.png',
        alt: 'Ceremonia de boda al aire libre entre vegetación en Real del Pedregal',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/evento-boda-showcase-05.png',
        alt: 'Montaje aéreo de ceremonia de boda en jardín con sombrillas blancas',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/evento-boda-showcase-06.png',
        alt: 'Mesa de boda con vajilla, copas y sillas de madera',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/evento-boda-showcase-07.png',
        alt: 'Novios durante ceremonia de boda rodeados de flores y vegetación',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/evento-boda-showcase-08.png',
        alt: 'Servicio de mesa para boda con plato, copa ámbar y menú personalizado',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/evento-boda-showcase-09.jpeg',
        alt: 'Menú personalizado y servilleta en montaje de boda',
        className: 'spaces-showcase-portrait',
      },
    ],
  },
  {
    name: 'Bautizos / Primera Comunión',
    title: 'Bautizos y primeras comuniones en Real del Pedregal',
    ariaLabel: 'Galería de imágenes de bautizos y primeras comuniones en Real del Pedregal',
    direction: 'right',
    images: [
      {
        src: 'assets/optimized/eventos-sociales-bautizo.jpg',
        alt: 'Mesa decorada para bautizo o primera comunión en Real del Pedregal',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/eventos-sociales-bautizo-galeria-1.jpg',
        alt: 'Detalle de montaje floral para bautizo en Real del Pedregal',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/eventos-sociales-bautizo-galeria-3.jpg',
        alt: 'Ceremonia de primera comunión en capilla del Pedregal',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/eventos-sociales-bautizo-galeria-4.jpg',
        alt: 'Decoración con globos para bautizo y primera comunión',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/eventos-sociales-bautizo-galeria-5.jpg',
        alt: 'Centro de mesa colorido para bautizo en Real del Pedregal',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/eventos-sociales-bautizo-galeria-7.jpg',
        alt: 'Montaje de globos y flores para celebración infantil en Real del Pedregal',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/eventos-sociales-bautizo-galeria-8.jpg',
        alt: 'Mesa pastel con decoración floral para bautizo o primera comunión',
        className: 'spaces-showcase-landscape',
      },
    ],
  },
];

const spacesShowcase = [
  {
    name: 'Jardín Parián',
    title: 'Jardín Parián, espacio para eventos en Real del Pedregal',
    ariaLabel: 'Galería de imágenes del Jardín Parián en Real del Pedregal',
    direction: 'right',
    images: [
      {
        src: 'assets/optimized/jardin-parian-showcase-01.png',
        alt: 'Jardín Parián en Real del Pedregal para eventos sociales',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/jardin-parian-showcase-02.png',
        alt: 'Montaje en Jardín Parián dentro del Lienzo Charro del Pedregal',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/jardin-parian-showcase-03.png',
        alt: 'Jardín Parián preparado para bodas y celebraciones privadas',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/jardin-parian-showcase-04.png',
        alt: 'Montaje en Jardín Parián dentro del Lienzo Charro del Pedregal',
        className: 'spaces-showcase-wide',
      },
      {
        src: 'assets/optimized/jardin-parian-showcase-05.png',
        alt: 'Jardín Parián preparado para bodas y celebraciones privadas',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/jardin-parian-showcase-06.png',
        alt: 'Jardín Parián en Real del Pedregal para eventos sociales',
        className: 'spaces-showcase-portrait',
      },
    ],
  },
  {
    name: 'Hacienda Luminares',
    title: 'Hacienda Luminares, espacio para eventos en Real del Pedregal',
    ariaLabel: 'Galería de imágenes de Hacienda Luminares en Real del Pedregal',
    direction: 'right',
    images: [
      {
        src: 'assets/optimized/hacienda-luminares-showcase-01.png',
        alt: 'Hacienda Luminares en Real del Pedregal para eventos privados',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/hacienda-luminares-showcase-02.png',
        alt: 'Montaje de evento en Hacienda Luminares',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/hacienda-luminares-showcase-03.png',
        alt: 'Hacienda Luminares dentro del Lienzo Charro del Pedregal',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/hacienda-luminares-showcase-04.png',
        alt: 'Hacienda Luminares en Real del Pedregal para eventos privados',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/hacienda-luminares-showcase-05.png',
        alt: 'Montaje de evento en Hacienda Luminares',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/hacienda-luminares-showcase-06.png',
        alt: 'Hacienda Luminares dentro del Lienzo Charro del Pedregal',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/hacienda-luminares-showcase-07.png',
        alt: 'Hacienda Luminares en Real del Pedregal para eventos privados',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/hacienda-luminares-showcase-08.png',
        alt: 'Montaje de evento en Hacienda Luminares',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/hacienda-luminares-showcase-09.png',
        alt: 'Hacienda Luminares dentro del Lienzo Charro del Pedregal',
        className: 'spaces-showcase-landscape',
      },
    ],
  },
  {
    name: 'Jardín Bosque del Pedregal',
    title: 'Jardín Bosque del Pedregal, espacio para eventos en Real del Pedregal',
    ariaLabel: 'Galería de imágenes del Jardín Bosque del Pedregal en Real del Pedregal',
    direction: 'right',
    images: [
      {
        src: 'assets/optimized/bosque-pedregal-showcase-01.jpeg',
        alt: 'Montaje de Jardín Bosque del Pedregal con mesas y cielo decorativo amarillo',
        className: 'spaces-showcase-landscape',
      },
      {
        src: 'assets/optimized/bosque-pedregal-showcase-02.jpg',
        alt: 'Explanada techada de Jardín Bosque del Pedregal para eventos amplios',
        className: 'spaces-showcase-wide',
      },
      {
        src: 'assets/optimized/bosque-pedregal-showcase-03.jpg',
        alt: 'Vista lateral de la explanada techada en Jardín Bosque del Pedregal',
        className: 'spaces-showcase-wide',
      },
      {
        src: 'assets/optimized/bosque-pedregal-showcase-04.jpg',
        alt: 'Jardín Bosque del Pedregal con montaje floral y mesas para celebración',
        className: 'spaces-showcase-wide',
      },
      {
        src: 'assets/optimized/bosque-pedregal-showcase-05.jpg',
        alt: 'Montaje panorámico con flores y mesas en Jardín Bosque del Pedregal',
        className: 'spaces-showcase-wide',
      },
      {
        src: 'assets/optimized/bosque-pedregal-showcase-06.png',
        alt: 'Montaje elegante en Jardín Bosque del Pedregal con centros de mesa verdes',
        className: 'spaces-showcase-portrait',
      },
      {
        src: 'assets/optimized/bosque-pedregal-showcase-07.jpg',
        alt: 'Jardín Bosque del Pedregal con mesas de madera bajo iluminación cálida',
        className: 'spaces-showcase-wide',
      },
      {
        src: 'assets/optimized/bosque-pedregal-showcase-08.jpg',
        alt: 'Decoración floral elevada en Jardín Bosque del Pedregal para evento social',
        className: 'spaces-showcase-wide',
      },
    ],
  },
];

function SpacesShowcaseTrack({ images, spaceName, spaceTitle, ariaLabel }) {
  const trackRef = useRef(null);
  const dragStateRef = useRef({
    active: false,
    pointerId: null,
    startX: 0,
    scrollLeft: 0,
  });

  const stopDrag = () => {
    const track = trackRef.current;

    dragStateRef.current.active = false;
    dragStateRef.current.pointerId = null;
    track?.classList.remove('is-dragging');
  };

  const pauseTrack = () => {
    const track = trackRef.current;

    track?.classList.add('is-paused');
    track
      ?.querySelector('.spaces-showcase-rail')
      ?.style.setProperty('animation-play-state', 'paused', 'important');
  };

  const resumeTrack = () => {
    const track = trackRef.current;

    track?.classList.remove('is-paused');
    track?.querySelector('.spaces-showcase-rail')?.style.removeProperty('animation-play-state');
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }

    const track = trackRef.current;

    if (!track) {
      return;
    }

    dragStateRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
    };
    track.classList.add('is-dragging');
    pauseTrack();
    track.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const track = trackRef.current;
    const dragState = dragStateRef.current;

    if (!track || !dragState.active || dragState.pointerId !== event.pointerId) {
      return;
    }

    event.preventDefault();
    track.scrollLeft = dragState.scrollLeft - (event.clientX - dragState.startX);
  };

  const handlePointerUp = (event) => {
    const track = trackRef.current;
    const dragState = dragStateRef.current;

    if (track && dragState.pointerId === event.pointerId) {
      track.releasePointerCapture?.(event.pointerId);
    }

    stopDrag();

    if (event.pointerType !== 'mouse') {
      resumeTrack();
    }
  };

  return (
    <div
      className="spaces-showcase-track"
      ref={trackRef}
      tabIndex={0}
      aria-label={ariaLabel || `Galería de imágenes de ${spaceName} en Real del Pedregal`}
      onPointerEnter={pauseTrack}
      onPointerLeave={resumeTrack}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onLostPointerCapture={stopDrag}
    >
      <div className="spaces-showcase-rail">
        {[...images, ...images].map((image, imageIndex) => {
          const isLoopCopy = imageIndex >= images.length;
          const imageDimensions = image.className === 'spaces-showcase-portrait'
            ? { width: 1024, height: 1536 }
            : { width: 1536, height: 864 };

          return (
            <figure
              className={`spaces-showcase-card ${image.className}`}
              key={`${image.src}-${imageIndex}`}
              aria-hidden={isLoopCopy}
            >
              <img
                src={assetUrl(image.src)}
                alt={isLoopCopy ? '' : image.alt}
                title={isLoopCopy ? undefined : image.title || spaceTitle}
                loading="lazy"
                decoding="async"
                width={imageDimensions.width}
                height={imageDimensions.height}
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
}

const contactInfoItems = [
  {
    icon: 'pin',
    title: 'Ubicación',
    content: (
      <address>
        Lienzo Charro del Pedregal
        <br />
        Camino Santa Teresa 305, Tlalpan, CDMX
      </address>
    ),
  },
  {
    icon: 'calendar',
    title: 'Visitas',
    content: <p>Con cita previa</p>,
  },
  {
    icon: 'clock',
    title: 'Horario de atención',
    content: <p>Lunes a sábado · 10:00 a 18:00</p>,
  },
];

const normalizePath = () => {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  const matchedPath = internalPagePaths.find((path) => pathname.endsWith(path));

  if (matchedPath) {
    return matchedPath;
  }

  return '/';
};


const eventSpaces = [
  {
    name: 'Terraza Alzán',
    slug: 'terraza-alzan',
    capacity: '30 a 90 personas',
    type: 'Espacio abierto',
    description:
      'Terraza Alzán es un espacio abierto ideal para celebraciones íntimas y eventos sociales con un montaje elegante. Su formato permite realizar reuniones, comidas, festejos y experiencias privadas en un entorno acogedor y versátil.',
    image: 'assets/optimized/espacio-terraza-alzan.webp',
    imageAlt:
      'Terraza Alzán en Lienzo Charro del Pedregal, espacio abierto para eventos de 30 a 90 personas',
    imageTitle: 'Terraza Alzán | Espacio para eventos en Lienzo Charro del Pedregal',
    optionalGallery: [],
  },
  {
    name: 'Patio Pirul',
    slug: 'patio-pirul',
    capacity: '80 a 220 personas',
    type: 'Patio al aire libre',
    description:
      'Patio Pirul es un espacio al aire libre que destaca por la presencia de un pirul como escenografía natural, elemento que da identidad a esta área. Es ideal para eventos sociales con un ambiente fresco, amplio y con carácter.',
    image: 'assets/optimized/espacio-patio-pirul.webp',
    imageAlt:
      'Patio Pirul en Lienzo Charro del Pedregal, patio al aire libre para eventos de 80 a 220 personas',
    imageTitle: 'Patio Pirul | Patio al aire libre para eventos en Lienzo Charro del Pedregal',
    optionalGallery: [],
  },
  {
    name: 'Jardín Parián',
    slug: 'jardin-parian',
    capacity: '80 a 300 personas',
    type: 'Jardín al aire libre',
    description:
      'Jardín Parián es un jardín al aire libre pensado para celebraciones sociales, recepciones y eventos con montaje flexible. Su amplitud permite adaptar la distribución del evento con elegancia y comodidad.',
    image: 'assets/optimized/espacio-jardin-parian.webp',
    imageAlt:
      'Jardín Parián en Lienzo Charro del Pedregal, jardín al aire libre para eventos de 80 a 300 personas',
    imageTitle: 'Jardín Parián | Jardín para eventos en Lienzo Charro del Pedregal',
    optionalGallery: [],
  },
  {
    name: 'Hacienda Luminsres',
    slug: 'hacienda-luminsres',
    capacity: '80 a 400 personas',
    type: 'Salón cerrado',
    description:
      'Hacienda Luminsres es un salón interior de estilo elegante, ideal para eventos que buscan una atmósfera más formal y sofisticada. Su configuración permite desarrollar celebraciones amplias con gran presencia visual.',
    image: 'assets/optimized/espacio-hacienda-luminsres.webp',
    imageAlt:
      'Hacienda Luminsres en Lienzo Charro del Pedregal, salón cerrado para eventos de 80 a 400 personas',
    imageTitle: 'Hacienda Luminsres | Salón para eventos en Lienzo Charro del Pedregal',
    optionalGallery: [],
  },
  {
    name: 'Capilla',
    slug: 'capilla',
    capacity: 'Hasta 100 personas',
    type: 'Recinto consagrado',
    description:
      'La Capilla es un recinto consagrado por el Papa Juan Pablo II, pensado para ceremonias con un sentido especial y solemne. Es un espacio íntimo y significativo dentro del venue, ideal para celebraciones religiosas.',
    image: 'assets/optimized/espacio-capilla.webp',
    imageAlt:
      'Capilla en Lienzo Charro del Pedregal, recinto consagrado para ceremonias de hasta 100 personas',
    imageTitle: 'Capilla | Recinto consagrado en Lienzo Charro del Pedregal',
    optionalGallery: [],
  },
  {
    name: 'Bosque Pedregal',
    slug: 'bosque-pedregal',
    capacity: '100 a 650 personas',
    type: 'Jardín con área principal techada y conexión a espacios abiertos',
    description:
      'Bosque Pedregal es un jardín de gran capacidad con conexión a áreas abiertas y una zona principal techada. Su amplitud y versatilidad lo convierten en una excelente opción para eventos de mayor formato, conservando una experiencia abierta y funcional.',
    image: 'assets/optimized/espacio-bosque-pedregal.webp',
    imageAlt:
      'Bosque Pedregal en Lienzo Charro del Pedregal, jardín con área techada para eventos de 100 a 650 personas',
    imageTitle: 'Bosque Pedregal | Jardín para eventos de gran formato en Lienzo Charro del Pedregal',
    optionalGallery: [],
  },
];

const socialEventSpaces = [
  {
    name: 'XV años',
    src: 'assets/optimized/eventos-sociales-xv-anos.jpg',
    gallery: [
      {
        src: 'assets/optimized/eventos-sociales-xv-anos.jpg',
        alt: 'Montaje amplio de XV años con pista central y luces suspendidas en Real del Pedregal',
      },
      {
        src: 'assets/optimized/eventos-sociales-xv-anos-galeria-1.jpg',
        alt: 'Montaje de XV años con mesas, pista central y decoración luminosa suspendida',
      },
      {
        src: 'assets/optimized/eventos-sociales-xv-anos-galeria-3.jpg',
        alt: 'Mesa montada para XV años con iluminación suspendida y pista al fondo',
      },
      {
        src: 'assets/optimized/eventos-sociales-xv-anos-galeria-4.jpg',
        alt: 'Celebración de XV años con ambientación nocturna e iluminación escénica',
      },
      {
        src: 'assets/optimized/eventos-sociales-xv-anos-galeria-5.jpg',
        alt: 'Montaje dorado para XV años con mesas espejo, sillas circulares y vegetación',
      },
      {
        src: 'assets/optimized/eventos-sociales-xv-anos-galeria-6.jpg',
        alt: 'Mesas doradas para XV años con arreglos altos y luz ambiental azul',
      },
      {
        src: 'assets/optimized/eventos-sociales-xv-anos-galeria-7.jpg',
        alt: 'Detalle de mesa dorada para XV años con iluminación colorida y candiles',
      },
    ],
  },
  {
    name: 'Bautizo',
    src: 'assets/optimized/eventos-sociales-bautizo.jpg',
    gallery: [
      {
        src: 'assets/optimized/eventos-sociales-bautizo.jpg',
        alt: 'Montaje amplio de bautizo con globos de colores, mesas florales y pista central',
      },
      {
        src: 'assets/optimized/eventos-sociales-bautizo-galeria-1.jpg',
        alt: 'Montaje de bautizo con mesas blancas, flores y detalles en azul',
      },
      {
        src: 'assets/optimized/eventos-sociales-bautizo-galeria-3.jpg',
        alt: 'Mesa larga de bautizo con arreglos florales en tonos pastel',
      },
      {
        src: 'assets/optimized/eventos-sociales-bautizo-galeria-4.jpg',
        alt: 'Montaje de bautizo con mesas blancas, centro floral alto y arco de globos',
      },
      {
        src: 'assets/optimized/eventos-sociales-bautizo-galeria-5.jpg',
        alt: 'Mesa de bautizo con globos pastel y arreglos florales suspendidos',
      },
      {
        src: 'assets/optimized/eventos-sociales-bautizo-galeria-7.jpg',
        alt: 'Mesa de dulces temática para bautizo con decoración infantil de colores',
      },
      {
        src: 'assets/optimized/eventos-sociales-bautizo-galeria-8.jpg',
        alt: 'Detalle vertical de mesa de bautizo con sillas blancas, flores y acentos azules',
      },
      {
        src: 'assets/optimized/eventos-sociales-bautizo-galeria-9.jpg',
        alt: 'Mesa de dulces de bautizo con decoración temática y personajes infantiles',
      },
    ],
  },
  {
    name: 'Graduaciones',
    src: 'assets/optimized/eventos-sociales-graduaciones.jpg',
    gallery: [
      {
        src: 'assets/optimized/eventos-sociales-graduaciones.jpg',
        alt: 'Montaje amplio de graduación con mesas, pista central e iluminación escénica',
      },
      {
        src: 'assets/optimized/eventos-sociales-graduaciones-galeria-1.jpg',
        alt: 'Mesa redonda de graduación con mantel azul, sillas de madera y pista al fondo',
      },
      {
        src: 'assets/optimized/eventos-sociales-graduaciones-galeria-2.jpg',
        alt: 'Mesa larga de graduación con mantel azul, vajilla blanca y centros verdes',
      },
      {
        src: 'assets/optimized/eventos-sociales-graduaciones-galeria-3.jpg',
        alt: 'Graduación con pista central, mesas largas y luces de colores bajo cubierta',
      },
      {
        src: 'assets/optimized/eventos-sociales-graduaciones-galeria-5.jpg',
        alt: 'Montaje de graduación en jardín con mesas largas y banderines decorativos',
      },
      {
        src: 'assets/optimized/eventos-sociales-graduaciones-galeria-6.jpg',
        alt: 'Vista aérea de graduación con dinámicas al aire libre y carpas rojas',
      },
    ],
  },
  {
    name: 'Bodas',
    src: 'assets/optimized/eventos-sociales-bodas.jpg',
    gallery: [
      {
        src: 'assets/optimized/eventos-sociales-bodas.jpg',
        alt: 'Montaje de boda con mesas elegantes, arreglos florales y plafon textil en Real del Pedregal',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-1.jpg',
        alt: 'Detalle de mesa de boda con cristaleria verde, vajilla blanca y menu personalizado',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-2.jpg',
        alt: 'Mesa redonda de boda con centro floral alto y montaje en tonos neutros',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-3.jpg',
        alt: 'Vista amplia de boda con arreglos florales altos, mesas montadas y cubierta textil',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-4.jpg',
        alt: 'Mesa larga de boda con cristaleria verde, bajoplatos de madera y guirnalda floral',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-5.jpg',
        alt: 'Montaje nocturno de boda con mesas de madera, arreglos de nube y escenario iluminado',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-6.jpg',
        alt: 'Mesa redonda de boda con centro floral, cristaleria y sillas de madera',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-7.jpg',
        alt: 'Mesa larga de boda con copas verdes, vajilla blanca y arreglo floral continuo',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-8.jpg',
        alt: 'Boda con mesas de madera, arreglos florales altos y ambientacion calida',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-10.jpg',
        alt: 'Mesa larga de boda con sillas tapizadas, cristaleria verde y flores en tonos naturales',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-11.jpg',
        alt: 'Montaje nocturno de boda con arbol de nube, pista y plafon ondulado',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-12.jpg',
        alt: 'Mesa principal de boda con arbol de nube, sillas de madera y techo textil',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-13.jpg',
        alt: 'Coctel al aire libre con sombrillas, salas altas y jardines en Real del Pedregal',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-15.jpg',
        alt: 'Montaje amplio de boda con mesas de madera, arreglos florales y luz natural',
      },
      {
        src: 'assets/optimized/eventos-sociales-bodas-galeria-16.jpg',
        alt: 'Mesa de boda con muro floral, lamparas colgantes y montaje en tonos neutros',
      },
    ],
  },
  {
    name: 'Eventos',
    src: 'assets/optimized/eventos-sociales-hacienda.jpg',
    gallery: [
      {
        src: 'assets/optimized/eventos-sociales-hacienda.jpg',
        alt: 'Salón Hacienda con mesas montadas, columnas y candiles en Real del Pedregal',
      },
      {
        src: 'assets/optimized/eventos-sociales-hacienda-galeria-1.jpg',
        alt: 'Vista panorámica del Salón Hacienda con mesas montadas, columnas y candiles',
      },
      {
        src: 'assets/optimized/eventos-sociales-hacienda-galeria-2.jpg',
        alt: 'Montaje en Hacienda con mesas doradas, arreglos de pampas y columnas interiores',
      },
      {
        src: 'assets/optimized/eventos-sociales-hacienda-galeria-3.jpg',
        alt: 'Mesa montada en Hacienda con sillas doradas y centro de mesa alto',
      },
      {
        src: 'assets/optimized/eventos-sociales-hacienda-galeria-4.jpg',
        alt: 'Vista interior de Hacienda con pista central, candil y arreglos secos',
      },
      {
        src: 'assets/optimized/eventos-sociales-hacienda-galeria-5.jpg',
        alt: 'Montaje amplio de Hacienda con mesas, arcos interiores y luz cálida',
      },
      {
        src: 'assets/optimized/eventos-sociales-hacienda-galeria-6.jpg',
        alt: 'Mesa elegante en Hacienda con cristalería, sillas doradas y arreglo de pampas',
      },
      {
        src: 'assets/optimized/eventos-sociales-capilla.jpg',
        alt: 'Capilla de Real del Pedregal con bancas de madera y bóveda de ladrillo',
      },
      {
        src: 'assets/optimized/eventos-sociales-capilla-galeria-1.jpg',
        alt: 'Interior de la Capilla con bancas de madera, bóveda de ladrillo y vista al jardín',
      },
      {
        src: 'assets/optimized/eventos-sociales-capilla-galeria-2.jpg',
        alt: 'Vista lateral de la Capilla con bancas de madera y muros abiertos al jardín',
      },
      {
        src: 'assets/optimized/eventos-sociales-capilla-galeria-3.jpg',
        alt: 'Pasillo central de la Capilla con altar, bancas y techo abovedado de ladrillo',
      },
      {
        src: 'assets/optimized/eventos-sociales-capilla-galeria-4.jpg',
        alt: 'Altar de la Capilla con crucifijo, mesa de piedra y luz natural',
      },
      {
        src: 'assets/optimized/eventos-sociales-terraza-alzan.jpg',
        alt: 'Montaje de Terraza Alzán con mesas altas y vegetación en Real del Pedregal',
      },
      {
        src: 'assets/optimized/eventos-sociales-terraza-alzan-galeria-1.jpg',
        alt: 'Vista amplia de Terraza Alzán con sombrillas, salas lounge y mesas para evento',
      },
      {
        src: 'assets/optimized/eventos-sociales-terraza-alzan-galeria-2.jpg',
        alt: 'Mesa montada en Terraza Alzán con flores, cristalería y vajilla',
      },
      {
        src: 'assets/optimized/eventos-sociales-terraza-alzan-galeria-3.jpg',
        alt: 'Detalle de lugar de mesa con vajilla y cristalería en Terraza Alzán',
      },
      {
        src: 'assets/optimized/eventos-sociales-jardin-parian.jpg',
        alt: 'Montaje de Jardín Parián con mesas bajo cubierta transparente en Real del Pedregal',
      },
      {
        src: 'assets/optimized/eventos-sociales-jardin-parian-galeria-1.jpg',
        alt: 'Vista de Jardín Parián con montaje social bajo estructura transparente',
      },
      {
        src: 'assets/optimized/eventos-sociales-jardin-parian-galeria-2.jpg',
        alt: 'Mesa montada en Jardín Parián con centro floral y vajilla para evento',
      },
      {
        src: 'assets/optimized/eventos-sociales-jardin-parian-galeria-3.jpg',
        alt: 'Vista panorámica de Jardín Parián con mesas y pista bajo cubierta',
      },
      {
        src: 'assets/optimized/eventos-sociales-jardin-parian-galeria-4.jpg',
        alt: 'Instalación floral suspendida en Jardín Parián durante montaje social',
      },
      {
        src: 'assets/optimized/eventos-sociales-jardin-parian-galeria-5.jpg',
        alt: 'Arreglo floral suspendido y mesas preparadas en Jardín Parián',
      },
      {
        src: 'assets/optimized/eventos-sociales-jardin-parian-galeria-6.jpg',
        alt: 'Detalle de mesa y arreglo floral en Jardín Parián durante celebración',
      },
      {
        src: 'assets/optimized/eventos-sociales-jardin-parian-galeria-7.jpg',
        alt: 'Montaje amplio de Jardín Parián con cubierta, mesas y decoración floral',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque.jpg',
        alt: 'Montaje de Bosque con mesas y ambientación para evento social en Real del Pedregal',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-1.jpg',
        alt: 'Montaje nocturno de Bosque con iluminación de colores, mesa espejo y sillas doradas',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-2.jpg',
        alt: 'Recepción nocturna en Bosque con velas, papel picado y mesas iluminadas',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-3.jpg',
        alt: 'Mesa larga montada en Bosque con letras iluminadas al fondo',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-4.jpg',
        alt: 'Montaje de Bosque con plafón textil, mesas redondas y sillas doradas',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-5.jpg',
        alt: 'Mesa de Bosque con centro floral y ambiente cálido de noche',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-6.jpg',
        alt: 'Montaje de Bosque con mesa dorada, pista iluminada y bolas espejo',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-7.jpg',
        alt: 'Vista amplia de Bosque con mesas redondas, plafón textil y pista central',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-8.jpg',
        alt: 'Mesa de dulces iluminada con flores y cortinas brillantes en Bosque',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-9.jpg',
        alt: 'Montaje amplio de Bosque con iluminación morada y arreglos florales altos',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-10.jpg',
        alt: 'Pista iluminada y arreglo floral suspendido en Bosque',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-11.jpg',
        alt: 'Recepción colorida en Bosque con mesas largas, velas y decoración colgante',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-12.jpg',
        alt: 'Montaje nocturno de Bosque con mesas, sillas doradas y ambientación azul',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-13.jpg',
        alt: 'Vista general de Bosque con mesas preparadas y muros verdes iluminados',
      },
      {
        src: 'assets/optimized/eventos-sociales-bosque-galeria-14.jpg',
        alt: 'Montaje panorámico de Bosque con flores abundantes y mesas para celebración',
      },
      {
        src: 'assets/optimized/eventos-sociales-pirul.jpg',
        alt: 'Montaje de Pirul con mesas bajo estructura transparente y vegetacion en Real del Pedregal',
      },
      {
        src: 'assets/optimized/eventos-sociales-pirul-galeria-1.jpg',
        alt: 'Vista de Pirul con mesa principal, pista y montaje social al aire libre',
      },
      {
        src: 'assets/optimized/eventos-sociales-pirul-galeria-2.jpg',
        alt: 'Mesa larga montada bajo el arbol de Pirul con vajilla ambar y flores',
      },
      {
        src: 'assets/optimized/eventos-sociales-pirul-galeria-3.jpg',
        alt: 'Montaje de mesas en Pirul con cubierta transparente, sillas doradas y pista central',
      },
    ],
  },
];

const corporateVideos = [
  {
    src: 'assets/video/corporativos-biulu.mov',
    kicker: 'Corporativo',
    title: 'LOREM',
    description:
      'Un montaje corporativo de ambiente nocturno, diseñado con iluminación escénica, detalles de barra y elementos visuales que transformaron el espacio en una experiencia sofisticada para convivencia, networking y activación de marca.',
  },
  {
    src: 'assets/video/corporativos-exterior.mov',
    kicker: 'Montaje',
    title: 'LOREM',
    description:
      'Un montaje corporativo en exterior, diseñado para integrar exhibición de producto, señalética y dinámicas de interacción dentro de un ambiente abierto, verde y funcional para recibir a los asistentes con fluidez.',
  },
  {
    src: 'assets/video/corporativos-september.mov',
    kicker: 'Experiencia',
    title: 'LOREM',
    description:
      'Un montaje corporativo formal con recepción, señalética, mesas vestidas e iluminación escénica, pensado para crear una experiencia elegante desde el primer contacto hasta el momento principal del evento.',
  },
  {
    src: 'assets/video/corporativos-tematico.mov',
    kicker: 'Producción',
    title: 'LOREM',
    description:
      'Un montaje temático nocturno con iluminación dramática, acceso escénico, pantalla LED y áreas lounge, pensado para transformar el venue en una experiencia envolvente y personalizada.',
  },
  {
    src: 'assets/video/corporativos-gran-formato.mov',
    kicker: 'Real del Pedregal',
    title: 'LOREM',
    description:
      'Un montaje corporativo de gran formato con acceso organizado, escenario, mesas para convivencia y detalles personalizados, pensado para ofrecer una experiencia elegante y visualmente sólida de principio a fin.',
  },
];

const clientLogos = [
  { name: 'Sony', src: 'assets/optimized/client-logos/sony.png' },
  { name: 'Italika', src: 'assets/optimized/client-logos/italika.png' },
  { name: 'Gentera', src: 'assets/optimized/client-logos/gentera.png' },
  { name: 'Cruz Azul', src: 'assets/optimized/client-logos/cruz-azul.png' },
  { name: 'Grupo Salinas', src: 'assets/optimized/client-logos/grupo-salinas.png' },
  { name: 'Pétalo', src: 'assets/optimized/client-logos/petalo.png' },
  { name: 'Grisi', src: 'assets/optimized/client-logos/grisi.png' },
  { name: "L'Oréal Paris", src: 'assets/optimized/client-logos/loreal.png' },
  { name: 'MetLife', src: 'assets/optimized/client-logos/metlife.png' },
  { name: 'El Palacio de Hierro', src: 'assets/optimized/client-logos/palacio-de-hierro.png' },
  { name: 'TV Azteca', src: 'assets/optimized/client-logos/tv-azteca.png' },
  { name: 'Nestlé', src: 'assets/optimized/client-logos/nestle.png' },
  { name: 'Tesla', src: 'assets/optimized/client-logos/tesla.png' },
  { name: 'American Express', src: 'assets/optimized/client-logos/american-express.webp' },
  { name: 'Banco Azteca', src: 'assets/optimized/client-logos/banco-azteca.png' },
  { name: 'Elektra', src: 'assets/optimized/client-logos/elektra.png' },
  { name: 'Inbursa', src: 'assets/optimized/client-logos/inbursa.png' },
];

function AboutClientsPage() {
  return (
    <div className="about-clients-page">
      <section className="about-section about-page" id="nosotros" aria-labelledby="about-title">
        <div className="about-inner">
          <div className="about-copy">
            <h1 id="about-title">Nosotros</h1>
            <p>
              Real del Pedregal es un recinto para eventos ubicado dentro del Lienzo Charro del
              Pedregal, en el sur de la Ciudad de México. Su propuesta reúne jardines, terrazas,
              patios y espacios con historia para recibir bodas, XV años, bautizos, graduaciones,
              celebraciones privadas y encuentros corporativos en un entorno amplio, sobrio y versátil.
            </p>
            <p>
              Cada área del venue conserva una personalidad propia: ambientes al aire libre,
              arquitectura con carácter, vegetación y recorridos que permiten desarrollar montajes de
              distintas escalas con naturalidad, presencia y equilibrio visual.
            </p>
          </div>

          <figure
            className="about-video-frame about-image-frame"
            aria-label="Mesa montada para evento en Real del Pedregal"
          >
            <img
              className="about-video about-image"
              src={assetUrl('assets/optimized/nosotros-mesa-real-del-pedregal.jpg')}
              alt="Mesa montada con cristaleria y flores blancas en Real del Pedregal"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="clients-section" id="clientes" aria-labelledby="clients-title">
        <div
          className="clients-logo-marquee"
          aria-label="Empresas que han realizado eventos en Real del Pedregal"
        >
          <div className="clients-logo-rail">
            {[0, 1].map((groupIndex) => (
              <div className="clients-logo-group" key={groupIndex} aria-hidden={groupIndex === 1}>
                {clientLogos.map((logo) => {
                  const className = `client-logo-item ${logo.tone === 'invert' ? 'is-inverted' : ''}`.trim();

                  return (
                    <figure className={className} key={`${logo.src}-${groupIndex}`}>
                      <img
                        src={assetUrl(logo.src)}
                        alt={groupIndex === 0 ? `Logo de ${logo.name}` : ''}
                        loading="lazy"
                        decoding="async"
                        width={228}
                        height={258}
                      />
                    </figure>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="clients-copy">
          <h2 id="clients-title">Clientes que han realizado eventos en Real del Pedregal</h2>
          <p>
            Real del Pedregal ha sido sede de eventos corporativos, encuentros institucionales,
            celebraciones privadas y experiencias de marca para empresas de distintos sectores. Esta
            sección reúne algunos de los clientes que han elegido el recinto por su amplitud,
            ubicación en el sur de la Ciudad de México y capacidad para adaptarse a formatos sociales
            y empresariales dentro del Lienzo Charro del Pedregal.
          </p>
        </div>
      </section>
    </div>
  );
}

function SpacesPage() {
  return (
    <section className="spaces-section spaces-showcase-section" id="espacios" aria-labelledby="spaces-title">
      <div className="spaces-showcase-intro">
        <h1 id="spaces-title">Espacios para eventos en Real del Pedregal</h1>
        <p>
          Real del Pedregal reúne distintos ambientes dentro del Lienzo Charro del Pedregal, con áreas
          abiertas, jardines, hacienda, rincones con carácter y espacios versátiles para celebraciones
          sociales y eventos corporativos. Su amplitud permite crear montajes para reuniones desde 100
          hasta 500 personas, según el formato del evento, integrando escenarios naturales, arquitectura
          con presencia y una capilla de valor histórico dentro del recinto.
        </p>
      </div>

      <div className="spaces-showcase-list">
        {spacesShowcase.map((space, index) => {
          const rowClassName = `spaces-showcase-row ${space.direction === 'right' ? 'is-reverse' : ''}`.trim();

          return (
            <section className={rowClassName} key={space.name} aria-labelledby={`showcase-space-${index + 1}`}>
              <h2 id={`showcase-space-${index + 1}`}>{space.name}</h2>
              <SpacesShowcaseTrack images={space.images} spaceName={space.name} spaceTitle={space.title} ariaLabel={space.ariaLabel} />
            </section>
          );
        })}
      </div>
    </section>
  );

  const [activeSpaceSlug, setActiveSpaceSlug] = useState(eventSpaces[0].slug);
  const pendingSpaceTimerRef = useRef(null);
  const activeSpace = eventSpaces.find((space) => space.slug === activeSpaceSlug) ?? eventSpaces[0];
  const activateSpace = (spaceSlug) => {
    window.clearTimeout(pendingSpaceTimerRef.current);
    setActiveSpaceSlug((currentSlug) => (currentSlug === spaceSlug ? currentSlug : spaceSlug));
  };
  const queueSpaceActivation = (spaceSlug) => {
    window.clearTimeout(pendingSpaceTimerRef.current);
    pendingSpaceTimerRef.current = window.setTimeout(() => {
      activateSpace(spaceSlug);
    }, 55);
  };

  useEffect(() => {
    return () => window.clearTimeout(pendingSpaceTimerRef.current);
  }, []);

  const quoteSpaceUrl = (spaceName) =>
    `https://wa.me/525546037246?text=${encodeURIComponent(
      `Hola, me gustaría cotizar ${spaceName} para un evento en Lienzo Charro del Pedregal. ¿Podrían compartirme información?`,
    )}`;

  return (
    <section className="spaces-section" id="espacios" aria-labelledby="spaces-title">
      <div className="spaces-inner">
        <div className="spaces-explorer">
          <div className="spaces-copy-column">
            <header className="spaces-header">
              <p>Recorrido de espacios</p>
              <h2 id="spaces-title">Espacios para eventos</h2>
              <span>
                Conoce las áreas del Lienzo Charro del Pedregal y descubre qué espacio se adapta mejor
                al estilo, tamaño y tipo de celebración que deseas realizar.
              </span>
            </header>

            <div className="spaces-list" aria-label="Lista de espacios para eventos">
              {eventSpaces.map((space) => {
                const isActive = space.slug === activeSpace.slug;

                return (
                  <article
                    className={`space-option ${isActive ? 'is-active' : ''}`}
                    key={space.slug}
                  >
                    <span className="space-option-index" aria-hidden="true">
                      {String(eventSpaces.indexOf(space) + 1).padStart(2, '0')}
                    </span>
                    <div className="space-option-copy">
                      <h3 id={`space-title-${space.slug}`}>{space.name}</h3>
                      <span>{space.capacity}</span>
                    </div>
                    <span className="space-option-type">{space.type}</span>
                    <button
                      type="button"
                      onPointerEnter={() => queueSpaceActivation(space.slug)}
                      onPointerLeave={() => window.clearTimeout(pendingSpaceTimerRef.current)}
                      onFocus={() => activateSpace(space.slug)}
                      onClick={() => activateSpace(space.slug)}
                      aria-pressed={isActive}
                      aria-controls="space-active-panel"
                      aria-labelledby={`space-title-${space.slug}`}
                    />
                  </article>
                );
              })}
            </div>
          </div>

          <article className="space-active-panel" id="space-active-panel" aria-live="polite">
            <figure className="space-active-image">
              {eventSpaces.map((space) => {
                const isActive = space.slug === activeSpace.slug;

                return (
                  <img
                    className={isActive ? 'is-active' : ''}
                    key={space.image}
                    src={assetUrl(space.image)}
                    alt={isActive ? space.imageAlt : ''}
                    title={space.imageTitle}
                    loading="eager"
                    decoding="async"
                    aria-hidden={!isActive}
                  />
                );
              })}
            </figure>

            <div className="space-active-content">
              <div className="space-active-meta">
                <span>{activeSpace.capacity}</span>
                <span>{activeSpace.type}</span>
              </div>
              <p>{activeSpace.description}</p>
              <div className="space-active-actions">
                <a
                  className="space-action-primary"
                  href={quoteSpaceUrl(activeSpace.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cotizar ${activeSpace.name} por WhatsApp`}
                >
                  Cotizar este espacio
                </a>
                <a
                  className="space-action-secondary"
                  href={pageUrl('/contacto')}
                  onClick={(event) => onNavigate(event, '/contacto')}
                >
                  Agendar visita
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ContactIcon({ name }) {
  const icons = {
    leaf: (
      <>
        <path d="M12 21V8" />
        <path d="M12 8C8.2 8.5 5 11.6 4.5 16.4C9.4 15.9 12.5 12.8 12 8Z" />
        <path d="M12 8C15.8 8.5 19 11.6 19.5 16.4C14.6 15.9 11.5 12.8 12 8Z" />
        <path d="M12 8V3" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M5.3 19.2 6.6 15.6A7.1 7.1 0 1 1 9.1 18L5.3 19.2Z" />
        <path d="M9.3 8.8c.2 3 2.8 5.4 5.6 5.9" />
        <path d="M9.3 8.8c.3-.5.7-.9 1-.8l.8 1.3c.1.2 0 .5-.3.8" />
        <path d="M14.9 14.7c.4-.2.7-.3.9-.1l1.2.8c.2.2-.1.8-.5 1.1" />
      </>
    ),
    document: (
      <>
        <path d="M7 4h7l3 3v13H7Z" />
        <path d="M14 4v4h4" />
        <path d="M10 12h5" />
        <path d="M10 16h5" />
      </>
    ),
    calendar: (
      <>
        <path d="M5 7h14v13H5Z" />
        <path d="M5 10h14" />
        <path d="M8 4v4" />
        <path d="M16 4v4" />
      </>
    ),
    headset: (
      <>
        <path d="M5 13a7 7 0 0 1 14 0" />
        <path d="M5 13v4h3v-4Z" />
        <path d="M16 13v4h3v-4Z" />
        <path d="M16 19c-1 .9-2.2 1.3-3.7 1.3" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
        <path d="M12 12.4a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
      </>
    ),
    clock: (
      <>
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  };

  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {icons[name]}
    </svg>
  );
}

function ContactMapGraphic() {
  return (
    <figure className="contact-map">
      <img
        src={assetUrl('assets/optimized/mapa-contacto-lienzo-charro.png')}
        alt="Mapa de ubicación de Real del Pedregal dentro del Lienzo Charro del Pedregal, en Camino Santa Teresa, Tlalpan"
        title="Ubicación de Real del Pedregal en Tlalpan"
        width="468"
        height="333"
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}

function ContactPage() {
  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-copy">
          <h1 id="contact-title">Hablemos de tu evento</h1>
          <span className="contact-title-rule" aria-hidden="true" />
          <p className="contact-intro">
            Escríbenos para consultar disponibilidad, resolver dudas o agendar una visita personalizada a Real del Pedregal, recinto para eventos sociales y corporativos dentro del Lienzo Charro del Pedregal, en el sur de la Ciudad de México.
          </p>

          <div className="contact-actions" aria-label="Opciones de contacto por WhatsApp">
            <a className="contact-button contact-button-primary" href={WHATSAPP_PRIMARY_URL} target="_blank" rel="noopener noreferrer" aria-label="Enviar mensaje por WhatsApp a Real del Pedregal" title="Contactar a Real del Pedregal por WhatsApp">
              <ContactIcon name="whatsapp" />
              <span>Enviar WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="contact-visual">
          <figure className="contact-image-frame">
            <img
              src={assetUrl('assets/optimized/contacto-real-del-pedregal.jpg')}
              alt="Mesa montada con cristaleria y flores blancas en Real del Pedregal"
              title="Mesa de evento en Real del Pedregal"
              width="1920"
              height="1080"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="contact-details">
            <div className="contact-detail-panel">
              {contactInfoItems.map((item) => (
                <div className="contact-detail-item" key={item.title}>
                  <ContactIcon name={item.icon} />
                  <div>
                    <h2>{item.title}</h2>
                    {item.content}
                  </div>
                </div>
              ))}

              <a className="contact-map-link" href={MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label="Cómo llegar a Real del Pedregal en el Lienzo Charro del Pedregal" title="Ver ubicación de Real del Pedregal en el mapa">
                <ContactIcon name="pin" />
                <span>Cómo llegar</span>
              </a>
            </div>

            <ContactMapGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialEventsPage() {
  return (
    <section className="social-events-section events-showcase-section" aria-labelledby="events-title">
      <div className="spaces-showcase-intro events-showcase-intro">
        <h1 id="events-title">titulo</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lectus a libero
          dignissim luctus. Sed non magna at nunc viverra facilisis. Praesent commodo, justo vel
          dictum tempor, mi sapien aliquet erat, vitae consequat sem ipsum at nulla.
        </p>
      </div>

      <div className="spaces-showcase-list events-showcase-list">
        {eventsShowcase.map((event, index) => {
          const eventId = 'event-showcase-' + (index + 1);
          const rowClassName = [
            'spaces-showcase-row',
            'events-showcase-row',
            event.direction === 'right' ? 'is-reverse' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <section className={rowClassName} key={event.name} aria-labelledby={eventId}>
              <h2 id={eventId}>{event.name}</h2>
              <SpacesShowcaseTrack
                images={event.images}
                spaceName={event.name}
                spaceTitle={event.title}
                ariaLabel={event.ariaLabel}
              />
            </section>
          );
        })}
      </div>
    </section>
  );
}

function CorporateVideo({ src, label }) {
  const videoRef = useRef(null);
  const startOffset = 1.5;

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    const playVideo = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      if (video.readyState > 0 && video.currentTime < 0.2) {
        video.currentTime = Math.min(startOffset, video.duration || startOffset);
      }

      video.play().catch(() => undefined);
    };

    const skipIntroFrame = () => {
      if (video.currentTime < 0.2) {
        video.currentTime = Math.min(startOffset, video.duration || startOffset);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          video.pause();
        }
      },
      { rootMargin: '180px 0px', threshold: 0.18 },
    );

    observer.observe(video);
    video.addEventListener('loadedmetadata', skipIntroFrame);
    video.addEventListener('loadeddata', playVideo);
    video.addEventListener('canplay', playVideo);
    video.addEventListener('timeupdate', skipIntroFrame);
    document.addEventListener('visibilitychange', playVideo);
    playVideo();

    return () => {
      observer.disconnect();
      video.removeEventListener('loadedmetadata', skipIntroFrame);
      video.removeEventListener('loadeddata', playVideo);
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('timeupdate', skipIntroFrame);
      document.removeEventListener('visibilitychange', playVideo);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-label={label}
    >
      <source src={assetUrl(src)} />
      Tu navegador no puede reproducir este video.
    </video>
  );
}

function CorporateEventsPage() {
  return (
    <section className="corporate-events-section" aria-labelledby="corporate-events-title">
      <div className="corporate-events-inner">
        <header className="corporate-events-header">
          <p>Eventos corporativos</p>
          <h1 id="corporate-events-title">Espacios que se transforman para cada experiencia</h1>
          <span>
            Cada evento encuentra una forma distinta de habitar Real del Pedregal. Desde activaciones al aire libre
            hasta cenas corporativas, lanzamientos y celebraciones de gran formato, nuestros espacios se adaptan para
            crear experiencias memorables.
          </span>
        </header>

        <div className="corporate-video-list" aria-label="Galería de videos corporativos">
          {corporateVideos.map((video, index) => {
            const itemNumber = String(index + 1).padStart(2, '0');
            const isReverse = index % 2 === 1;

            return (
              <article
                className={`corporate-video-item ${isReverse ? 'is-reverse' : ''}`}
                key={video.src}
                aria-labelledby={`corporate-video-title-${itemNumber}`}
              >
                <div className="corporate-video-copy">
                  <span className="corporate-video-kicker">{video.kicker}</span>
                  <h2 id={`corporate-video-title-${itemNumber}`}>{video.title}</h2>
                  <p>{video.description}</p>
                </div>

                <div className="corporate-video-frame">
                  <CorporateVideo
                    src={video.src}
                    label={`Video ${itemNumber} de eventos corporativos en Real del Pedregal`}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HomePage({ onNavigate }) {
  return (
    <>
      <section className="hero-film" aria-label="Video de Real del Pedregal">
        <video
          className="hero-video"
          poster={assetUrl('assets/optimized/hero-poster-real-del-pedregal.webp')}
          autoPlay
          muted
          playsInline
          preload="metadata"
          aria-label="Recorrido visual por Real del Pedregal"
          title="Video de presentación de Real del Pedregal"
        >
          <source src={`${assetUrl('assets/video/lienzo-charro-hero.mp4')}?v=20260528-architectural`} type="video/mp4" />
        </video>
      </section>

      <section className="home-intro-section" aria-labelledby="home-intro-title">
        <div className="home-intro-copy">
          <h1 id="home-intro-title">Real del Pedregal, eventos con carácter en el Lienzo Charro del Pedregal</h1>
          <p>
            En el sur de la Ciudad de México, Real del Pedregal reúne amplitud, tradición y espacios
            versátiles para celebrar bodas, XV años, bautizos, graduaciones, encuentros privados y
            eventos corporativos. Un venue dentro del Lienzo Charro del Pedregal diseñado para adaptarse
            a distintos formatos de celebración, con áreas abiertas, escenarios con presencia y una
            atmósfera que distingue cada evento.
          </p>
        </div>
      </section>

      <section className="institutional-section" aria-label="Tipos de eventos en Real del Pedregal">
        <div className="event-mosaic-grid">
          {homeEventMosaic.map((item) => (
            <a
              className={`event-mosaic-tile ${item.className}`}
              href={pageUrl(item.href)}
              key={item.title}
              onClick={(event) => onNavigate(event, item.href)}
              title={item.linkTitle}
              aria-label={item.ariaLabel}
            >
              <img
                src={assetUrl(item.src)}
                alt={item.alt}
                title={item.linkTitle}
                loading={item.loading || 'lazy'}
                decoding="async"
              />
              <div className="event-mosaic-copy">
                <h2 className="event-mosaic-title">{item.title}</h2>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={WHATSAPP_PRIMARY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar WhatsApp a Real del Pedregal"
    >
      <span className="floating-whatsapp-icon" aria-hidden="true">
        <SocialIcon name="whatsapp" />
      </span>
      <span className="floating-whatsapp-label">WhatsApp</span>
    </a>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(normalizePath);
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerScrollTimerRef = useRef(null);

  useEffect(() => {
    applyPageMetadata(currentPath);
  }, [currentPath]);

  const navigateTo = (event, path) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', pageUrl(path));
    setCurrentPath(path);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath());
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    if (currentPath === '/clientes') {
      window.requestAnimationFrame(() => {
        document.getElementById('clientes')?.scrollIntoView({ block: 'start', behavior: 'auto' });
      });
      return;
    }

    if (currentPath === '/nosotros') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [currentPath]);

  useEffect(() => {
    const revealHeaderOnScroll = () => {
      setHeaderVisible(true);
      window.clearTimeout(headerScrollTimerRef.current);
      headerScrollTimerRef.current = window.setTimeout(() => {
        setHeaderVisible(false);
      }, 1100);
    };

    window.addEventListener('scroll', revealHeaderOnScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', revealHeaderOnScroll);
      window.clearTimeout(headerScrollTimerRef.current);
    };
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-header ${headerVisible ? 'is-visible' : ''}`} aria-label="Navegacion principal">
        <a
          className="brand-wordmark"
          href={pageUrl('/')}
          aria-label="Real del Pedregal, inicio"
          onClick={(event) => navigateTo(event, '/')}
        >
          Real del Pedregal
        </a>

        <nav className="desktop-nav" aria-label="Paginas principales">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={pageUrl(item.href)}
              aria-current={currentPath === item.href ? 'page' : undefined}
              onClick={internalPagePaths.includes(item.href) ? (event) => navigateTo(event, item.href) : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-social" aria-label="Redes sociales">
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook de Real del Pedregal">
            <SocialIcon name="facebook" />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram de Real del Pedregal">
            <SocialIcon name="instagram" />
          </a>
        </div>
      </header>

      <main>
        {(currentPath === '/nosotros' || currentPath === '/clientes') && <AboutClientsPage />}
        {currentPath === '/espacios' && <SpacesPage onNavigate={navigateTo} />}
        {currentPath === '/contacto' && <ContactPage />}
        {(currentPath === '/eventos' || currentPath === '/eventos-sociales') && <SocialEventsPage />}
        {currentPath === '/corporativos' && <CorporateEventsPage />}
        {currentPath === '/' && <HomePage onNavigate={navigateTo} />}
      </main>

      <FloatingWhatsApp />
    </div>
  );
}

export default App;
