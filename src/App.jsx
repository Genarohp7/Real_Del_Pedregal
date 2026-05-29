import { useEffect, useState } from 'react';
import IntroScreen from './components/IntroScreen.jsx';
import LogoMark from './components/LogoMark.jsx';
import SocialIcon from './components/SocialIcon.jsx';
import './styles/app.css';

const WHATSAPP_URL = 'https://wa.me/525546037246';
const FACEBOOK_URL = 'https://www.facebook.com/EventosCharrosdelPedregal?locale=es_LA';
const INSTAGRAM_URL = 'https://www.instagram.com/realdelpedregalcdmx/';

function App() {
  const [introVisible, setIntroVisible] = useState(true);
  const [introPhase, setIntroPhase] = useState('hold');
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const logoOutTimer = window.setTimeout(() => setIntroPhase('logo-out'), 3000);
    const revealTimer = window.setTimeout(() => {
      setIntroPhase('reveal');
      setPageReady(true);
    }, 4300);
    const removeIntroTimer = window.setTimeout(() => setIntroVisible(false), 7900);

    return () => {
      window.clearTimeout(logoOutTimer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(removeIntroTimer);
    };
  }, []);

  return (
    <>
      {introVisible && <IntroScreen phase={introPhase} />}
      <main className={`landing-shell ${pageReady ? 'is-visible' : ''}`}>
        <div className="ambient ambient-one" aria-hidden="true" />
        <div className="ambient ambient-two" aria-hidden="true" />
        <section className="hero" aria-labelledby="hero-title">
          <div className="brand-mark" aria-label="Real del Pedregal Eventos Sociales">
            <span className="logo-aura" aria-hidden="true" />
            <LogoMark
              className="brand-logo"
              fallbackClassName="brand-logo-fallback"
              alt="Real del Pedregal Eventos Sociales"
            />
          </div>

          <div className="gold-rule" aria-hidden="true" />

          <h1 id="hero-title">Estamos trabajando en una nueva experiencia</h1>
          <p className="hero-copy">
            Muy pronto podr&aacute;s conocer m&aacute;s sobre Real del Pedregal, un espacio para eventos sociales creado para momentos memorables.
          </p>

          <div className="actions" aria-label="Canales de contacto">
            <div className="social-links">
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook de Real del Pedregal">
                <SocialIcon name="facebook" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram de Real del Pedregal">
                <SocialIcon name="instagram" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp de Real del Pedregal">
                <SocialIcon name="whatsapp" />
              </a>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <span>realdelpedregal.com.mx</span>
        </footer>
      </main>
    </>
  );
}

export default App;
