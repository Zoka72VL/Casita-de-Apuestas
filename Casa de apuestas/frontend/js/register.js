document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerForm").addEventListener("submit", async function (event) {
      event.preventDefault(); // Evitar el envío tradicional del formulario
  
      // Obtener los valores de los campos
      const nombre = document.getElementById("full-name").value;
      const email = document.getElementById("emailReg").value;
      const password = document.getElementById("password").value;
  
      // Enviar los datos al backend
      try {
        const response = await fetch("http://127.0.0.1:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nombre, email, password }),
        });
  
        const data = await response.json();
  
        // Mostrar mensaje de éxito o error
        const messageElement = document.getElementById("registerMessage");
        if (data.success) {
          messageElement.style.color = "green";
          messageElement.textContent = "Registro exitoso. Ahora puedes iniciar sesión.";
        } else {
          messageElement.style.color = "red";
          messageElement.textContent = data.message;
        }
      } catch (error) {
        console.error("Error en el registro:", error);
        document.getElementById("registerMessage").textContent = "Error al conectar con el servidor.";
      }
    });
  });
  