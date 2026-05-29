import LogoMark from './LogoMark.jsx';

function IntroScreen({ phase }) {
  return (
    <div className={`intro-screen intro-${phase}`} aria-hidden={phase === 'reveal'}>
      <div className="intro-orbit" aria-hidden="true" />
      <LogoMark className="intro-logo" fallbackClassName="intro-logo-fallback" alt="Real del Pedregal" />
    </div>
  );
}

export default IntroScreen;
