// Solicitar el nombre del usuario antes de cargar la página
const userName = prompt("Por favor, ingresa tu nombre:");

// Si el usuario no ingresa un nombre, se usa un nombre predeterminado
const nameToDisplay = userName && userName.trim() !== "" ? userName : "Visitante";

// Agregar el nombre ingresado al elemento en la página
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("user-name").textContent = nameToDisplay;
});
