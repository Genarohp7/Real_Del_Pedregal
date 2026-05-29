import { useState } from 'react';
import LogoMark from './components/LogoMark.jsx';
import SocialIcon from './components/SocialIcon.jsx';
import './styles/app.css';

const FACEBOOK_URL = 'https://www.facebook.com/EventosCharrosdelPedregal?locale=es_LA';
const INSTAGRAM_URL = 'https://www.instagram.com/realdelpedregalcdmx/';
const navItems = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Creaciones', href: '/creaciones' },
  { label: 'Expertos', href: '/expertos' },
  { label: 'Contacto', href: '/contacto' },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroEnded, setHeroEnded] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Navegacion principal">
        <button className="header-trigger" type="button" aria-label="Mostrar navegacion">
          <span aria-hidden="true" />
        </button>

        <div className="nav-curtain">
          <a className="nav-logo" href="/" aria-label="Real del Pedregal, inicio">
            <LogoMark alt="Real del Pedregal Eventos Sociales" />
          </a>

          <nav className="desktop-nav" aria-label="Paginas principales">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
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
          <a className="mobile-logo" href="/" aria-label="Real del Pedregal, inicio">
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
            <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
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
        <section className={`hero-film ${heroEnded ? 'has-ended' : ''}`} aria-label="Video de Real del Pedregal">
          <video
            className="hero-video"
            poster="/assets/optimized/hero-poster-real-del-pedregal.webp"
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-label="Recorrido visual por Real del Pedregal"
            onPlay={() => setHeroEnded(false)}
            onEnded={() => setHeroEnded(true)}
          >
            <source src="/assets/video/lienzo-charro-hero.mp4?v=20260528-architectural" type="video/mp4" />
          </video>
          <div className="hero-end-frame" aria-hidden="true" />
        </section>

        <section className="institutional-section" aria-labelledby="institutional-title">
          <div className="section-heading">
            <p>Real del Pedregal</p>
            <h1 id="institutional-title">El espacio donde la celebracion toma escala.</h1>
          </div>

          <div className="experience-gate" aria-label="Tipos de evento">
            <a className="experience-link social-experience" href="/eventos-sociales">
              <span>Eventos Sociales</span>
              <img
                src="/assets/optimized/eventos-sociales-real-del-pedregal.webp"
                alt="Montaje de evento social en Real del Pedregal"
                title="Eventos sociales en Real del Pedregal"
                loading="lazy"
              />
            </a>

            <div className="center-mark" aria-hidden="true">
              <LogoMark
                src="/assets/optimized/logo-real-del-pedregal-monograma.png"
                alt=""
                className="center-logo"
              />
            </div>

            <a className="experience-link corporate-experience" href="/corporativos">
              <span>Corporativos</span>
              <img
                src="/assets/optimized/eventos-corporativos-real-del-pedregal.webp"
                alt="Salon con arcos y montaje para evento corporativo en Real del Pedregal"
                title="Eventos corporativos en Real del Pedregal"
                loading="lazy"
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
