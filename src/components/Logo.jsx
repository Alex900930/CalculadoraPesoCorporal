
import React from 'react';

const Logo = () => {
  const isProduction = import.meta.env.NODE_ENV === 'production';
  const logoSrc = isProduction
    ? 'https://calpesocorporal.vercel.app/logo.jpeg'
    : '/src/assets/logo.jpeg';

  return <img src={logoSrc} alt="Logo" className="h-8" />;
};

export default Logo;