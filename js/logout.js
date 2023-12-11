
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el enlace de logout por su id
    var logoutLink = document.getElementById("logoutLink");

    // Agregar un manejador de eventos al clic en el enlace
    logoutLink.addEventListener("click", function() {
        // Limpiar la sessionStorage
        sessionStorage.clear();

        // Redirigir a la página de login u otra página después del logout
        window.location.href = "login.html";
    });
});

