function formularioEvento() {                           
    fetch("./components/formularioEvento.html") // La ruta
      .then((response) => response.text()) // Obtener el contenido como texto
      .then((data) => {
        document.getElementById("FormEventos-container").innerHTML = data; // Inserta el header en el contenedor
      })
      .catch((error) => console.error("Error al cargar el formulario para crear evento:", error)); // Manejo de errores
  }
  
  function crearJugador() {
    fetch("./components/formularioJugador.html") // La ruta
      .then((response) => response.text()) // Obtener el contenido como texto
      .then((data) => {
        document.getElementById("FormJugador-container").innerHTML = data; // Inserta el header en el contenedor
      })
      .catch((error) => console.error("Error al cargar el formulario para crear jugador:", error)); // Manejo de errores
  }
  
  
  
  function formularioUsuario() {
    fetch("./components/formularioUsuario.html") // La ruta
      .then((response) => response.text()) // Obtener el contenido como texto
      .then((data) => {
        document.getElementById("FormUsuario-container").innerHTML = data; // 
      })
      .catch((error) => console.error("Error al cargar el formulario para modificar Usuario:", error)); // Manejo de errores
  }
  
  