// Declarando constante
const prompt = require('prompt-sync')();

// Iniciar variable opcion fuera del ciclo
var opcion;

// Utilizando un DO-WHILE
do {
    console.log("Menu opciones");
    console.log("1. Programa que realiza el calculo del salario");
    console.log("2. Programa que realiza la busqueda de un libro");
    console.log("3. Salir");

    opcion = prompt("Ingrese una opcion: ");
    opcion = parseInt(opcion);

    switch (opcion) {
        case 1:
            console.log("Programa que realiza el calculo del salario final");
            let Salario = parseFloat(prompt("Ingrese el salario base: "));
            let HorasExtras = parseFloat(prompt("Ingrese el pago por horas extras: "));
            let Isss = parseFloat(prompt("Ingrese el monto de ISSS: "));
            let Afp = parseFloat(prompt("Ingrese el monto de AFP: "));

            
            let SalarioPago = (Salario + HorasExtras) - (Isss + Afp);
            console.log("Total a pagar es: $" + SalarioPago.toFixed(2));

            if (SalarioPago > 365.00 && SalarioPago < 500) {
                console.log("El salario neto es mayor al salario minimo");
            } else if (SalarioPago >= 500) {
                console.log("Eres agente de retención de renta");
            } else {
                console.log("Tu salario es menor al minimo y no se retiene ISR");
            }
            break;

        case 2:
            console.log("Programa que selecciona el libro buscado\n");

            let Biblioteca = [
                { libro: "Risitos de Oro", genero: "Cuentos" },
                { libro: "Harry Potter y la piedra filosofal", genero: "Magico" },
                { libro: "Comer, amar, rezar", genero: "Romance" },
                { libro: "Cura Mortal", genero: "Ficcion" }
            ];

            console.log("Busqueda de libro por genero\n");

            let generoBuscado = prompt("Ingrese el género del libro a buscar: ");
            const libroEncontrado = Biblioteca.find(libro => libro.genero.toLowerCase() === generoBuscado.toLowerCase());

            if (libroEncontrado) {
                console.log("El libro encontrado es: " + libroEncontrado.libro);
            } else {
                console.log("Género no encontrado, ingrese uno válido.");
            }
            break;

        case 3:
            console.log("Saliendo del programa...");
            break;

        default:
            console.log("Ingrese una opcion correcta.");
            break;
    }

} while (opcion !== 3);




