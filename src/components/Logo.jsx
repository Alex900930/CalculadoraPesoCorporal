import React from 'react';
import logo1 from "../assets/logo.jpeg";

const Logo = () => {
  /* const isProduction = import.meta.env.NODE_ENV === 'production';
  console.log("ESte es el valor de isProduction", isProduction);
  const logoSrc = isProduction
    ? 'https://calpesocorporal.vercel.app/logo.jpeg'
    : '/src/assets/logo.jpeg'; */

  return <img src={logo1} alt="Logo" className="h-16" />;
};

export default Logo;