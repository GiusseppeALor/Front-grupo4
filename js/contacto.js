document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita que se recargue la página

    // Obtener los datos del formulario
    const nombres = document.querySelector('input[name="nombres"]').value.trim();
    const apellidos = document.querySelector('input[name="apellidos"]').value.trim();
    const correo = document.querySelector('input[name="correo"]').value.trim();
    const telefono = document.querySelector('input[name="telefono"]').value.trim();
    const mensaje = document.querySelector('textarea[name="mensaje"]').value.trim();

    // Validación básica
    if (!nombres || !apellidos || !correo || !mensaje) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Enviar al backend
    try {
      const response = await fetch('http://localhost:3000/api/consultas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombres, apellidos, correo, telefono, mensaje })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Tu consulta ha sido enviada correctamente.');
        form.reset(); // Limpiar el formulario
      } else {
        alert('Error al enviar la consulta: ' + data.error);
      }

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Error al conectar con el servidor.');
    }
  });
});
