document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('form');
  if (!loginForm) return;

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    try {
      const response = await fetch('http://localhost:8081/api/GamingHub/v1/Usuario/iniciar-session?email=' + encodeURIComponent(email) + '&contrasena=' + encodeURIComponent(password), {
        method: 'POST'
      });

      if (!response.ok) {
        alert('Error en inicio de sesión');
        return;
      }

      const data = await response.json();
      // Use the 'nombre' field from the Usuario object in the response to fill the username display
      const usuario = data.content || data; // Adjust if response wraps the user object
      const nombreUsuario = usuario.nombre || 'Usuario';
      alert('Inicio de sesión exitoso para usuario: ' + nombreUsuario);
      // Aquí puedes redirigir o hacer otras acciones tras login exitoso
    } catch (error) {
      alert('Error al conectar con el servidor');
      console.error(error);
    }
  });
});
