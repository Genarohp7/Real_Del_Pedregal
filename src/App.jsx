import { useEffect, useRef, useState } from 'react';
import LogoMark from './components/LogoMark.jsx';
import SocialIcon from './components/SocialIcon.jsx';
import './styles/app.css';

const FACEBOOK_URL = 'https://www.facebook.com/EventosCharrosdelPedregal?locale=es_LA';
const INSTAGRAM_URL = 'https://www.instagram.com/realdelpedregalcdmx/';
const MAPS_URL = 'https://maps.app.goo.gl/yZ7QhdAafxdVwN1n9';
const WHATSAPP_PRIMARY_URL =
  'https://wa.me/525546037246?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20lugar.%20%C2%BFPodr%C3%ADan%20ayudarme%3F';
const WHATSAPP_QUOTE_URL =
  'https://wa.me/525546037246?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20evento%20en%20Lienzo%20Charro%20del%20Pedregal.%20%C2%BFPodr%C3%ADan%20compartirme%20informaci%C3%B3n%3F';
const WHATSAPP_VISIT_URL =
  'https://wa.me/525546037246?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20visita%20para%20conocer%20Lienzo%20Charro%20del%20Pedregal.%20%C2%BFQu%C3%A9%20horarios%20tienen%20disponibles%3F';
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;
const pageUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
const internalPagePaths = ['/nosotros', '/espacios', '/contacto', '/eventos-sociales', '/corporativos'];
const navItems = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Espacios', href: '/espacios' },
  { label: 'Contacto', href: '/contacto' },
];

const contactInfoItems = [
  {
    icon: 'pin',
    title: 'Ubicación',
    content: (
      <address>
        Lienzo Charro del Pedregal
        <br />
        Camino Sta. Teresa, Tlalpan, CDMX
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

const aboutImages = [
  {
    src: 'assets/optimized/nosotros-real-del-pedregal-jardin.webp',
    alt: 'Jardin y arqueria de Real del Pedregal en Tlalpan',
  },
  {
    src: 'assets/optimized/nosotros-real-del-pedregal-arquitectura.webp',
    alt: 'Arquitectura y vegetacion de Real del Pedregal',
  },
  {
    src: 'assets/optimized/nosotros-real-del-pedregal-terraza.webp',
    alt: 'Terraza, jardines y detalles de piedra en Real del Pedregal',
  },
  {
    src: 'assets/optimized/nosotros-real-del-pedregal-recorrido.webp',
    alt: 'Recorrido exterior con jardines y terrazas en Real del Pedregal',
  },
  {
    src: 'assets/optimized/nosotros-real-del-pedregal-patio.webp',
    alt: 'Patio historico con jardines y arcos en Real del Pedregal',
  },
];

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

const ABOUT_SHOWCASE_REVEAL_DURATION = 4500;
const ABOUT_SHOWCASE_HOLD_DURATION = 6000;
const ABOUT_SHOWCASE_ROTATION_DURATION = ABOUT_SHOWCASE_REVEAL_DURATION + ABOUT_SHOWCASE_HOLD_DURATION;

function AboutPhotoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [revealRadius, setRevealRadius] = useState(64);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        setPreviousIndex(currentIndex);
        return (currentIndex + 1) % aboutImages.length;
      });
    }, ABOUT_SHOWCASE_ROTATION_DURATION);

    return () => window.clearInterval(rotation);
  }, []);

  useEffect(() => {
    let frameId;

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      setRevealRadius(64);
      return undefined;
    }

    const startTime = window.performance.now();
    const duration = ABOUT_SHOWCASE_REVEAL_DURATION;

    setRevealRadius(0);

    const growMask = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setRevealRadius(Math.round(easedProgress * 64));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(growMask);
      }
    };

    frameId = window.requestAnimationFrame(growMask);

    return () => window.cancelAnimationFrame(frameId);
  }, [activeIndex]);

  return (
    <figure
      className="about-photo-showcase"
      aria-label="Recorrido visual por los jardines, patios y arquitectura de Real del Pedregal"
    >
      {aboutImages.map((image, index) => (
        <img
          key={image.src}
          className={[
            index === activeIndex ? 'is-active' : '',
            index === activeIndex && previousIndex === null ? 'is-initial' : '',
            index === previousIndex ? 'is-previous' : '',
          ].filter(Boolean).join(' ')}
          src={assetUrl(image.src)}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          style={{ '--showcase-radius': index === activeIndex ? `${revealRadius}px` : '0px' }}
        />
      ))}
    </figure>
  );
}

function AboutPage() {
  const videoRef = useRef(null);
  const isVisibleRef = useRef(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    const playVideo = () => {
      video.play().catch(() => undefined);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          playVideo();
        } else {
          video.pause();
        }
      },
      { rootMargin: '260px 0px', threshold: 0.32 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  useEffect(() => {
    if (shouldLoadVideo && isVisibleRef.current && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => undefined);
    }
  }, [shouldLoadVideo]);

  return (
    <section className="about-section about-page" aria-labelledby="about-title">
      <div className="about-inner">
        <div className="about-copy">
          <h1 id="about-title">Nosotros</h1>
          <p>
            En Real del Pedregal, la naturaleza, la tradicion y la elegancia conviven en un mismo lugar
            para dar vida a experiencias memorables. El recinto reune jardines, terrazas, patios y espacios
            llenos de historia, pensados para adaptarse a distintos tipos de eventos y celebraciones.
          </p>
          <p>
            Cada rincon tiene una personalidad propia: ambientes al aire libre rodeados de vegetacion,
            arquitectura con caracter cultural y recorridos que acompanan la creacion de momentos unicos.
          </p>
        </div>

        <div className="about-video-frame" aria-hidden="true">
          <video
            ref={videoRef}
            className="about-video"
            muted
            loop
            playsInline
            preload="metadata"
            poster={assetUrl('assets/optimized/nosotros-video-poster-real-del-pedregal.webp')}
          >
            <source src={assetUrl('assets/video/nosotros-real-del-pedregal.mp4')} type="video/mp4" />
          </video>
        </div>

        <div className="about-gallery" aria-label="Espacios de Real del Pedregal">
          <AboutPhotoShowcase />
        </div>
      </div>
    </section>
  );
}

function SpacesPage({ onNavigate }) {
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
        alt="Mapa de referencia hacia Lienzo Charro del Pedregal, cerca de Perisur, Villa Olímpica y Camino Santa Teresa"
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
            Escríbenos para consultar disponibilidad, resolver dudas o agendar una visita personalizada.
          </p>

          <div className="contact-actions" aria-label="Opciones de contacto por WhatsApp">
            <a className="contact-button contact-button-primary" href={WHATSAPP_PRIMARY_URL} target="_blank" rel="noopener noreferrer">
              <ContactIcon name="whatsapp" />
              <span>Enviar WhatsApp</span>
            </a>
            <div className="contact-secondary-actions">
              <a className="contact-button contact-button-secondary" href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer">
                <ContactIcon name="document" />
                <span>Cotizar evento</span>
              </a>
              <a className="contact-button contact-button-secondary" href={WHATSAPP_VISIT_URL} target="_blank" rel="noopener noreferrer">
                <ContactIcon name="calendar" />
                <span>Agendar visita</span>
              </a>
            </div>
          </div>

          <div className="contact-direct">
            <span className="contact-direct-mark" aria-hidden="true">
              <ContactIcon name="headset" />
            </span>
            <span>Atención directa</span>
          </div>
        </div>

        <div className="contact-visual">
          <figure className="contact-image-frame">
            <img
              src={assetUrl('assets/optimized/contacto-real-del-pedregal.jpg')}
              alt="Montaje de evento al aire libre en Lienzo Charro del Pedregal"
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

              <a className="contact-map-link" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
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
  const [activeGalleryName, setActiveGalleryName] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const activeGallery = socialEventSpaces.find((space) => space.name === activeGalleryName);
  const activeGalleryImages = activeGallery
    ? activeGallery.gallery?.length
      ? activeGallery.gallery
      : [{ src: activeGallery.src, alt: `${activeGallery.name} en Real del Pedregal` }]
    : [];
  const activeGalleryImage = activeGalleryImages[activeGalleryIndex] ?? activeGalleryImages[0];
  const hasMultipleGalleryImages = activeGalleryImages.length > 1;

  useEffect(() => {
    if (!activeGallery) {
      return undefined;
    }

    const handleGalleryKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveGalleryName(null);
      }

      if (event.key === 'ArrowRight' && hasMultipleGalleryImages) {
        setActiveGalleryIndex((currentIndex) => (currentIndex + 1) % activeGalleryImages.length);
      }

      if (event.key === 'ArrowLeft' && hasMultipleGalleryImages) {
        setActiveGalleryIndex((currentIndex) =>
          currentIndex === 0 ? activeGalleryImages.length - 1 : currentIndex - 1,
        );
      }
    };

    window.addEventListener('keydown', handleGalleryKeyDown);

    return () => window.removeEventListener('keydown', handleGalleryKeyDown);
  }, [activeGallery, activeGalleryImages.length, hasMultipleGalleryImages]);

  const openSocialGallery = (spaceName) => {
    setActiveGalleryName(spaceName);
    setActiveGalleryIndex(0);
  };

  const closeSocialGallery = () => {
    setActiveGalleryName(null);
  };

  const showPreviousGalleryImage = () => {
    setActiveGalleryIndex((currentIndex) =>
      currentIndex === 0 ? activeGalleryImages.length - 1 : currentIndex - 1,
    );
  };

  const showNextGalleryImage = () => {
    setActiveGalleryIndex((currentIndex) => (currentIndex + 1) % activeGalleryImages.length);
  };

  return (
    <section className="social-events-section" aria-label="Galeria de eventos sociales">
      <div className="social-events-inner">
        <div className="social-events-frame">
          <div className="social-events-frame-copy">
            <span className="social-events-eyebrow">Eventos Sociales</span>
            <h1>Montajes con presencia</h1>
            <p>
              Una selección de eventos reales realizados en distintos spots del venue. Mesas,
              decoración, iluminación y ambiente muestran cómo cada espacio cobra vida para una
              celebración.
            </p>
          </div>

          <div className="social-events-frame-media">
            <div className="social-events-accordion" aria-label="Espacios para eventos sociales">
              {socialEventSpaces.map((space) => (
                <button
                  className="social-events-panel"
                  key={space.name}
                  type="button"
                  onClick={() => openSocialGallery(space.name)}
                  aria-label={space.name}
                  aria-haspopup="dialog"
                >
                  <img
                    src={assetUrl(space.src)}
                    alt={`${space.name} en Real del Pedregal`}
                    loading="eager"
                    decoding="sync"
                    fetchPriority="high"
                  />
                  <span className="social-events-panel-title">{space.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeGallery && (
        <div
          className="social-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="social-gallery-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeSocialGallery();
            }
          }}
        >
          <div className="social-gallery-modal-panel">
            <div className="social-gallery-modal-header">
              <div>
                <span>Galería</span>
                <h2 id="social-gallery-title">{activeGallery.name}</h2>
              </div>
              <button
                className="social-gallery-close"
                type="button"
                onClick={closeSocialGallery}
                aria-label="Cerrar galería"
              >
                Cerrar
              </button>
            </div>

            <figure className="social-gallery-stage">
              {activeGalleryImage && (
                <img
                  src={assetUrl(activeGalleryImage.src)}
                  alt={activeGalleryImage.alt}
                  loading="eager"
                  decoding="sync"
                />
              )}
              {!activeGallery.gallery?.length && (
                <figcaption>
                  Esta galería está lista para recibir las fotografías de {activeGallery.name}.
                </figcaption>
              )}
            </figure>

            <div className="social-gallery-controls">
              <button
                type="button"
                onClick={showPreviousGalleryImage}
                disabled={!hasMultipleGalleryImages}
                aria-label="Foto anterior"
              >
                Anterior
              </button>
              <span>
                {activeGalleryIndex + 1} / {activeGalleryImages.length}
              </span>
              <button
                type="button"
                onClick={showNextGalleryImage}
                disabled={!hasMultipleGalleryImages}
                aria-label="Foto siguiente"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      )}
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
          preload="auto"
          aria-label="Recorrido visual por Real del Pedregal"
        >
          <source src={`${assetUrl('assets/video/lienzo-charro-hero.mp4')}?v=20260528-architectural`} type="video/mp4" />
        </video>
      </section>

      <section className="institutional-section" aria-labelledby="institutional-title">
        <div className="section-heading">
          <h1 id="institutional-title">
            El espacio donde la celebracion
            <br />
            toma escala.
          </h1>
        </div>

        <div className="experience-gate" aria-label="Tipos de evento">
          <a
            className="experience-link social-experience"
            href={pageUrl('/eventos-sociales')}
            onClick={(event) => onNavigate(event, '/eventos-sociales')}
          >
            <span className="experience-preview">
              <img
                src={assetUrl('assets/optimized/eventos-sociales-real-del-pedregal.webp')}
                alt="Montaje de evento social en Real del Pedregal"
                title="Eventos sociales en Real del Pedregal"
                loading="lazy"
              />
              <span className="experience-copy">
                <span className="experience-title">Eventos Sociales</span>
              </span>
            </span>
          </a>

          <div className="center-mark" aria-hidden="true">
            <LogoMark
              src={assetUrl('assets/optimized/logo-real-del-pedregal-monograma.png')}
              alt=""
              className="center-logo"
            />
          </div>

          <a
            className="experience-link corporate-experience"
            href={pageUrl('/corporativos')}
            onClick={(event) => onNavigate(event, '/corporativos')}
          >
            <span className="experience-preview">
              <img
                src={assetUrl('assets/optimized/eventos-corporativos-real-del-pedregal.webp')}
                alt="Salon con arcos y montaje para evento corporativo en Real del Pedregal"
                title="Eventos corporativos en Real del Pedregal"
                loading="lazy"
              />
              <span className="experience-copy">
                <span className="experience-title">Corporativos</span>
              </span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [currentPath, setCurrentPath] = useState(normalizePath);
  const idleTimerRef = useRef(null);

  const navigateTo = (event, path) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', pageUrl(path));
    setCurrentPath(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath());
      setMobileMenuOpen(false);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    const supportsPointerReveal = window.matchMedia('(hover: hover) and (pointer: fine)');

    const revealHeader = () => {
      setHeaderVisible(true);
      window.clearTimeout(idleTimerRef.current);
      idleTimerRef.current = window.setTimeout(() => {
        setHeaderVisible(false);
      }, 2200);
    };

    if (supportsPointerReveal.matches) {
      window.addEventListener('pointermove', revealHeader, { passive: true });
    }

    window.addEventListener('scroll', revealHeader, { passive: true });
    window.addEventListener('touchstart', revealHeader, { passive: true });
    window.addEventListener('keydown', revealHeader);

    return () => {
      window.removeEventListener('pointermove', revealHeader);
      window.removeEventListener('scroll', revealHeader);
      window.removeEventListener('touchstart', revealHeader);
      window.removeEventListener('keydown', revealHeader);
      window.clearTimeout(idleTimerRef.current);
    };
  }, []);

  return (
    <div className="site-shell">
      <header
        className={`site-header ${headerVisible ? 'is-visible' : ''}`}
        aria-label="Navegacion principal"
        onFocus={() => setHeaderVisible(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setHeaderVisible(false);
          }
        }}
      >
        <div className="perimeter-nav">
          <a
            className="nav-logo perimeter-logo"
            href={pageUrl('/')}
            aria-label="Real del Pedregal, inicio"
            onClick={(event) => navigateTo(event, '/')}
          >
            <LogoMark alt="Real del Pedregal Eventos Sociales" />
          </a>

          <nav className="desktop-nav" aria-label="Paginas principales">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={pageUrl(item.href)}
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
        </div>

        <div className="mobile-bar">
          <a
            className="mobile-logo"
            href={pageUrl('/')}
            aria-label="Real del Pedregal, inicio"
            onClick={(event) => navigateTo(event, '/')}
          >
            <LogoMark alt="Real del Pedregal Eventos Sociales" />
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          >
            Menu
          </button>
        </div>

        <nav id="mobile-menu" className={`mobile-panel ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Menu movil">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={pageUrl(item.href)}
              onClick={internalPagePaths.includes(item.href) ? (event) => navigateTo(event, item.href) : () => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mobile-social">
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </nav>
      </header>

      <main>
        {currentPath === '/nosotros' && <AboutPage />}
        {currentPath === '/espacios' && <SpacesPage onNavigate={navigateTo} />}
        {currentPath === '/contacto' && <ContactPage />}
        {currentPath === '/eventos-sociales' && <SocialEventsPage />}
        {currentPath === '/corporativos' && <CorporateEventsPage />}
        {currentPath === '/' && <HomePage onNavigate={navigateTo} />}
      </main>
    </div>
  );
}

export default App;
