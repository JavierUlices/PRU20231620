console.log("Menu de opciones");
console.log("1. Convertir un string o un array string en mayúscula");
console.log("2. Convertir un string o un array string en minúscula");

let opcione = 2;

switch (opcione) {
    case 1:
        console.log("El usuario seleccionó la opción 1");

        let cadenaNombre = "Ingrid Roxana Argueta";
        let arregloNombres = ["Roberto", "Julia", "Karen", "Alexander"];

        // Invocamos la función de mayúscula
        console.log("Imprimiendo cadena de texto en mayúscula");
        console.log(ConvertirMayuscula(cadenaNombre));

        console.log("\nImprimiendo array de texto en mayúscula");
        console.log(ConvertirMayuscula(arregloNombres));
        break;

    case 2:
        console.log("El usuario seleccionó la opción 2");

        let textoVehiculos = "Mazda";
        let arregloVehiculos = ["TOYOTA", "NISSAN", "FORD", "HYUNDAI"];

        // Invocamos la función de minúscula
        console.log("Imprimiendo cadena de texto en minúscula");
        console.log(convertirMinuscula(textoVehiculos));

        console.log("\nImprimiendo array de texto en minúscula");
        console.log(convertirMinuscula(arregloVehiculos));
        break;

    default:
        console.log("Opción no válida");
        break;
}

// Función para convertir a mayúscula
function ConvertirMayuscula(cadena) {
    if (Array.isArray(cadena)) {
        return cadena.map(item => item.toUpperCase());
    } else if (typeof cadena === 'string') {
        return cadena.toUpperCase();
    } else {
        return "El dato ingresado debe ser un string o un array de tipo string";
    }
}

// Función para convertir a minúscula
function convertirMinuscula(cadena) {
    if (Array.isArray(cadena)) {
        return cadena.map(item => item.toLowerCase());
    } else if (typeof cadena === 'string') {
        return cadena.toLowerCase();
    } else {
        return "El dato ingresado debe ser un string o un array de tipo string";
    }
}
