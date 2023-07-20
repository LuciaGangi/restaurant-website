import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto flex items-center justify-center">
        <img
          className="h-10"
          src="/ruta/del/logo.png" // Reemplaza esta ruta con la ubicación de tu logo
          alt="Logo"
        />
      </div>
      <div className="text-center mt-4 text-gray-400">
        <h2 className="text-xl font-bold">Título H2</h2>
        <h3 className="text-lg font-bold">Título H3</h3>
        <h4 className="text-md font-bold">Título H4</h4>
        <h5 className="text-sm font-bold">Título H5</h5>
      </div>
      <div className="text-center mt-4 text-gray-400">
        <p className="text-xs">
          Copyright © {new Date().getFullYear()} Polygon Theme. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
