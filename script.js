
function checkPassword() {
    const input = document.getElementById("password").value;
    if (input === "cdgdecar2025") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Contraseña incorrecta.";
    }
}
