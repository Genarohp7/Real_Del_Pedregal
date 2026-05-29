import { useState } from 'react';

function LogoMark({
  className = '',
  fallbackClassName = '',
  alt = 'Real del Pedregal',
  src = '/assets/optimized/logo-real-del-pedregal-completo.png',
}) {
  const [hasLogoError, setHasLogoError] = useState(false);

  if (hasLogoError) {
    return (
      <span className={`logo-fallback ${fallbackClassName}`} aria-label={alt} role="img">
        RP
      </span>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setHasLogoError(true)}
    />
  );
}

export default LogoMark;
