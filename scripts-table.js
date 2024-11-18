// Función que se activa al presionar el botón de calcular
function calculate(operation) {
    let result;
    let message = "";
    let num1, num2;

    // Solicitar los valores según la operación seleccionada
    if (operation === 'multiplication') {
        num1 = parseFloat(prompt("Ingresa el primer número:"));
        num2 = parseFloat(prompt("Ingresa el segundo número:"));
        result = num1 * num2;
        message = `El resultado de la multiplicación es: ${result}`;
    } else if (operation === 'exponentiation') {
        num1 = parseFloat(prompt("Ingresa el número para elevar al cuadrado:"));
        result = num1 * num1;
        message = `El resultado de elevar al cuadrado es: ${result}`;
    } else if (operation === 'subtraction') {
        num1 = parseFloat(prompt("Ingresa el primer número:"));
        num2 = parseFloat(prompt("Ingresa el segundo número:"));
        result = num1 - num2;
        message = `El resultado de la resta es: ${result}`;
    }

    // Mostrar el resultado de la operación
    alert(message);
}
