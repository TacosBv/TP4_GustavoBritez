// Solicitar la edad del usuario antes de cargar la página
const userAge = prompt("Por favor, ingresa tu edad:");

// Validar la entrada y determinar el mensaje
let ageMessage = "";
if (userAge && !isNaN(userAge)) {
    ageMessage =
        parseInt(userAge, 10) > 20
            ? "Eres mayor de 20 años."
            : "No eres mayor de 20 años.";
} else {
    ageMessage = "Edad no válida ingresada.";
}

// Mostrar el mensaje en la página
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("age-message").textContent = ageMessage;
});
