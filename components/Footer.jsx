import React from 'react';

const Footer = ({ year, author }) => {
  return (
    <footer className="footer bg-dark text-light p-3 text-center">
      <div className="container-fluid">
        <p>© {year || 2025} GamingHub. Todos los derechos reservados.</p>
        {author && <p>Desarrollado por {author}</p>}
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://www.instagram.com/gaminghub_oficial" target="_blank" className="text-light">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.facebook.com/T4MS8282" target="_blank" className="text-light">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
