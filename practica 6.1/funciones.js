console.log("Menu opciones");
console.log("1. Mostrar el número mayor de un arreglo o de lista");
console.log("2. Imprimir el total de vocales y mostrar cuales son una ruta de una cadena");

let opcion = 2;

switch (opcion) {
    case 1:
        console.log("Ha ingresado a la opción 1");

        let number = [5, 10, 25, 26, 85];
        numeroMayorArray(number);
        break;
    
    case 2:
        console.log("Ha ingresado a la opción 2");
        
        let texto = "Ulises";
        let resultado = contarVocales(texto);
        
        console.log("Total de vocales en la palabra " + texto + " es: " + resultado.Cantidadvocales);
        console.log("Vocales encontradas sin repetir en " + texto + " son: " + resultado.vocales);
        break;
    
    default:
        console.log("Elija una opción correcta entre 1 - 2");
        break;
}

// Apartado para realizar funciones

function numeroMayorArray(numeros) {
    let maximo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    console.log(`El número máximo del arreglo es: ${maximo}`);
}

function contarVocales(cadena) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    let vocalesEncontradas = [];

    for (let letra of cadena.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
            vocalesEncontradas.push(letra);
        }
    }

    let vocalesUnicas = [...new Set(vocalesEncontradas)];
    return {
        Cantidadvocales: contador,
        vocales: vocalesUnicas
    };
}
