import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'UsuarioBasico',
    moderatorReason: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    if (formData.role === 'Moderador' && formData.moderatorReason === '') {
      setError('Por favor describe por qué quieres ser moderador.');
    } else {
      setError('');
      console.log('Registration data:', formData);
      // Simulate success or error
    }
  };

  return (
    <main>
      <section id="register">
        <h2>Crear Cuenta en GamingHub</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Ingresa tu nombre de usuario"
            required
          />

          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu correo electrónico"
            required
          />

          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
            required
          />

          <label htmlFor="role">Rol:</label>
          <select id="role" name="role" value={formData.role} onChange={handleChange}>
            <option value="UsuarioBasico">Usuario Básico</option>
            <option value="Influencer">Influencer</option>
            <option value="Moderador">Moderador</option>
          </select>

          {formData.role === 'Moderador' && (
            <div id="moderator-request">
              <h4>Reglas para Moderadores:</h4>
              <ul>
                <li>No abusar de eliminar comentarios o publicaciones.</li>
                <li>Usar advertencias de manera justa y proporcional.</li>
                <li>Promover un ambiente positivo en la comunidad.</li>
              </ul>
              <label htmlFor="moderator-reason">Describe por qué quieres ser moderador:</label>
              <textarea
                id="moderator-reason"
                name="moderatorReason"
                value={formData.moderatorReason}
                onChange={handleChange}
                placeholder="Escribe tu motivo aquí..."
                required
              ></textarea>
            </div>
          )}

          <button type="submit">Crear Cuenta</button>
          {error && <p id="register-error" style={{ color: 'red' }}>{error}</p>}
        </form>
          <p><a href="#" id="show-login" onClick={() => navigate('/login')}>¿Ya tienes cuenta? Inicia Sesión</a></p>
      </section>
    </main>
  );
};

export default RegisterPage;
