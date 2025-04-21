function buscarUsuario() {
    const email = document.getElementById('emailUser').value;
  
    // Simula la búsqueda del usuario
    if (email === '') {
      document.getElementById('resultadoUsuario').innerHTML =
        '<p class="text-danger">Por favor, ingresa un correo electrónico.</p>';
      return;
    }
  
    // Aquí puedes realizar una llamada a tu backend para buscar el usuario
    // Simulación de un usuario encontrado
    const usuarioEncontrado = {
      nombre: 'Juan Pérez',
      email: email,
    };
  
    // Muestra el resultado del usuario con un botón para eliminarlo
    document.getElementById('resultadoUsuario').innerHTML = `
      <p>Usuario encontrado: <strong>${usuarioEncontrado.nombre}</strong> (${usuarioEncontrado.email})</p>
      <button id="eliminarUsuarioBtn" class="btn btn-danger">Eliminar Usuario</button>
    `;
  
    // Agrega el evento para eliminar el usuario
    document
      .getElementById('eliminarUsuarioBtn')
      .addEventListener('click', function () {
        // Aquí puedes realizar una llamada a tu backend para eliminar el usuario
        alert('Usuario eliminado: ' + usuarioEncontrado.nombre);
        document.getElementById('resultadoUsuario').innerHTML = '';
      });
  }