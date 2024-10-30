 // Obtener tipo de conversión
function convertir() {
    let tipoConversion = document.getElementById('tipo-conversion').value;
    // Obtener y convertir la temperatura ingresada a número
    let temperaturaIngresada = parseFloat(document.getElementById('temperatura-ingresada').value);

    // Validar que la temperatura sea correcta
    if (isNaN(temperaturaIngresada)) {
        document.getElementById('resultado').innerHTML = "Por favor, ingrese un número válido.";
        return;
    }

    let resultado;
    // Verificar el tipo de conversión a realizar
    if (tipoConversion === "Celsius a Fahrenheit") {
        // Celsius a Fahrenheit
        resultado = (temperaturaIngresada * 9 / 5) + 32;
        document.getElementById('resultado').innerHTML = `Resultado: ${temperaturaIngresada}°C = ${resultado.toFixed(2)}°F`;
    } else if (tipoConversion === "Fahrenheit a Celsius") {
        // Fahrenheit a Celsius
        resultado = (temperaturaIngresada - 32) * 5 / 9;
        document.getElementById('resultado').innerHTML = `Resultado: ${temperaturaIngresada}°F = ${resultado.toFixed(2)}°C`;
    }
}

