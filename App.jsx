import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsCard from './components/NewsCard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import NewsPage from './pages/NewsPage';
import DebatesPage from './pages/DebatesPage';
import GamesPage from './pages/GamesPage';
import FavoritesPage from './pages/FavoritesPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage on app load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const navigationLinks = [
    { path: '/profile', label: 'Perfil', icon: 'fas fa-user' },
    { path: '/news', label: 'Noticias', icon: 'fas fa-newspaper' },
    { path: '/debates', label: 'Debates', icon: 'fas fa-comments' },
    { path: '/games', label: 'Juegos', icon: 'fas fa-gamepad' },
    { path: '/about', label: 'Acerca de', icon: 'fas fa-info-circle' }
  ];

  return (
    <Router>
      <div className="App">
        <Header title="GamingHub - Comunidad de Juegos" links={navigationLinks} />
        <main className="container-fluid">
          <Routes>
            <Route path="/" element={user ? <Navigate to="/profile" /> : <LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={user ? <ProfilePage user={user} /> : <Navigate to="/" />} />
            <Route path="/news" element={user ? <NewsPage user={user} /> : <Navigate to="/" />} />
            <Route path="/debates" element={user ? <DebatesPage user={user} /> : <Navigate to="/" />} />
            <Route path="/games" element={user ? <GamesPage user={user} /> : <Navigate to="/" />} />
            <Route path="/favorites" element={user ? <FavoritesPage user={user} /> : <Navigate to="/" />} />
            <Route path="/about" element={<AboutPage user={user} />} />
          </Routes>
          {/* Demo NewsCard components */}
          <div className="row mt-4">
            <NewsCard
              title="Nueva Actualización de Fortnite"
              image="img/Fornite.png"
              summary="Epic Games ha lanzado una nueva temporada con mapas renovados y nuevos desafíos para todos los jugadores."
            />
            <NewsCard
              title="Minecraft Bedrock Edition"
              image="img/Minecraft.png"
              summary="La versión Bedrock recibe nuevas características incluyendo biomas únicos y mobs legendarios."
            />
            <NewsCard
              title="Brawl Stars Temporada 2025"
              image="img/BrawlStars.png"
              summary="Supercell presenta nuevos brawlers con habilidades únicas y eventos especiales para la comunidad."
            />
          </div>
        </main>
        <Footer year={2025} author="Equipo GamingHub" />
      </div>
    </Router>
  );
};

export default App;
