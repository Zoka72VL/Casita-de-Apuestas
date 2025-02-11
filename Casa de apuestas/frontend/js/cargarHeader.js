// Función que carga el header dinámicamente
function cargarHeader() {
  fetch("./components/component-header.html") // La ruta
    .then((response) => response.text()) // Obtener el contenido como texto
    .then((data) => {
      document.getElementById("header-container").innerHTML = data; // Inserta el header en el contenedor
    })
    .catch((error) => console.error("Error al cargar el header:", error)); // Manejo de errores
}
cargarHeader();

// Función que carga la barra dinamicamente
function cargarBarra() {
  fetch("./components/barra.html") // La ruta
    .then((response) => response.text()) // Obtener el contenido como texto
    .then((data) => {
      document.getElementById("barra-container").innerHTML = data; // Inserta el header en el contenedor
    })
    .catch((error) => console.error("Error al cargar el header:", error)); // Manejo de errores
}
cargarBarra();



