import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ({ title, links }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (path) => {
    navigate(path);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img src="img/gaminghub_logo.png" alt="Gaming Hub Logo" className="navbar-brand" id="logo" />
        <div className="navbar-brand">
          <h1>{title || 'GamingHub - Comunidad de Juegos'}</h1>
          <p>Debates, noticias y comunidad de juegos populares</p>
        </div>
        <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-expanded={menuOpen}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className={`navbar-collapse ${menuOpen ? 'show' : 'collapse'}`} id="tabs">
          {links && links.map(link => (
            <button
              key={link.path}
              className={`nav-link btn ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => handleTabClick(link.path)}
            >
              <i className={link.icon}></i> {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
