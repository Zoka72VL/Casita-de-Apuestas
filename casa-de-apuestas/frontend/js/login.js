document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    let email = document.getElementById("emailUser").value;
    let password = document.getElementById("password").value;

    fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Inicio de sesión exitoso");
            window.location.href = "dashboard.html"; // Redirigir después del login
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => console.error("Error:", error));
});