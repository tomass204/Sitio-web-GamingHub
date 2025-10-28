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
    <header className="bg-dark text-light p-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="img/gaminghub_logo.png" alt="Gaming Hub Logo" id="logo" className="img-fluid" style={{ maxHeight: '50px' }} />
            <div className="d-inline-block ms-3">
              <h1 className="h4 mb-0">{title || 'GamingHub - Comunidad de Juegos'}</h1>
              <p className="mb-0">Debates, noticias y comunidad de juegos populares</p>
            </div>
          </div>
          <div className="col-md-6 text-end">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
              <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
                <ul className="navbar-nav ms-auto">
                  {(links || []).map((link, index) => (
                    <li key={index} className="nav-item">
                      <button
                        className={`nav-link btn btn-link ${location.pathname === link.path ? 'active' : ''}`}
                        onClick={() => handleTabClick(link.path)}
                      >
                        <i className={link.icon}></i> {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
