import { useEffect, useRef, useState } from 'react';
import LogoMark from './components/LogoMark.jsx';
import SocialIcon from './components/SocialIcon.jsx';
import './styles/app.css';

const FACEBOOK_URL = 'https://www.facebook.com/EventosCharrosdelPedregal?locale=es_LA';
const INSTAGRAM_URL = 'https://www.instagram.com/realdelpedregalcdmx/';
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;
const pageUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
const navItems = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Creaciones', href: '/creaciones' },
  { label: 'Expertos', href: '/expertos' },
  { label: 'Contacto', href: '/contacto' },
];

const normalizePath = () => {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  if (pathname.endsWith('/nosotros')) {
    return '/nosotros';
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

const ABOUT_SHOWCASE_REVEAL_DURATION = 4500;
const ABOUT_SHOWCASE_HOLD_DURATION = 6000;
const ABOUT_SHOWCASE_ROTATION_DURATION = ABOUT_SHOWCASE_REVEAL_DURATION + ABOUT_SHOWCASE_HOLD_DURATION;

function AboutPhotoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [revealRadius, setRevealRadius] = useState(64);

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

function HomePage() {
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
          <a className="experience-link social-experience" href={pageUrl('/eventos-sociales')}>
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
                onClick={item.href === '/nosotros' ? (event) => navigateTo(event, item.href) : undefined}
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
              onClick={item.href === '/nosotros' ? (event) => navigateTo(event, item.href) : () => setMobileMenuOpen(false)}
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

      <main>{currentPath === '/nosotros' ? <AboutPage /> : <HomePage />}</main>
    </div>
  );
}

export default App;
