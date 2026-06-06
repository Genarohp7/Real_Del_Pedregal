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
const internalPagePaths = ['/nosotros', '/contacto', '/eventos-sociales'];
const navItems = [
  { label: 'Nosotros', href: '/nosotros' },
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

const socialEventSpaces = [
  {
    name: 'Terraza Alzán',
    src: 'assets/optimized/eventos-sociales-terraza-alzan.jpg',
  },
  {
    name: 'Jardín Parián',
    src: 'assets/optimized/eventos-sociales-jardin-parian.jpg',
  },
  {
    name: 'Bosque',
    src: 'assets/optimized/eventos-sociales-bosque.jpg',
  },
  {
    name: 'Pirul',
    src: 'assets/optimized/eventos-sociales-pirul.jpg',
  },
  {
    name: 'Capilla',
    src: 'assets/optimized/eventos-sociales-capilla.jpg',
  },
  {
    name: 'Hacienda',
    src: 'assets/optimized/eventos-sociales-hacienda.jpg',
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
                <figure
                  className="social-events-panel"
                  key={space.name}
                  tabIndex={0}
                  aria-label={space.name}
                >
                  <img
                    src={assetUrl(space.src)}
                    alt={`${space.name} en Real del Pedregal`}
                    loading="eager"
                    decoding="sync"
                    fetchPriority="high"
                  />
                  <figcaption>{space.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
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

          <a className="experience-link corporate-experience" href={pageUrl('/corporativos')}>
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

    if (!supportsPointerReveal.matches) {
      return undefined;
    }

    const revealHeader = () => {
      setHeaderVisible(true);
      window.clearTimeout(idleTimerRef.current);
      idleTimerRef.current = window.setTimeout(() => {
        setHeaderVisible(false);
      }, 1500);
    };

    window.addEventListener('pointermove', revealHeader, { passive: true });
    window.addEventListener('keydown', revealHeader);

    return () => {
      window.removeEventListener('pointermove', revealHeader);
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
        {currentPath === '/contacto' && <ContactPage />}
        {currentPath === '/eventos-sociales' && <SocialEventsPage />}
        {currentPath === '/' && <HomePage onNavigate={navigateTo} />}
      </main>
    </div>
  );
}

export default App;
