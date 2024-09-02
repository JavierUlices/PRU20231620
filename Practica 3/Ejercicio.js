console.log("Menú opciones");
console.log("1. Mediante un for encontrar el mayor de una lista");
console.log("2. Mediante un while imprimir los impares del 1-20");
console.log("3. Mediante un do-while detener el programa cuando lleguemos a un número random x");

let opcion = 3;

switch (opcion) {
    case 1:
        console.log("Has ingresado a la opción 1");
        let numeros = [61, 42, 23, 14, 12, 45];
        let maximo = numeros[0];
        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] > maximo) {
                maximo = numeros[i];
            }
        }
        console.log("El mayor de la lista es: ", maximo);
        break;
    
    case 2:
        console.log("Has ingresado a la opción 2");
        let i = 1;
        while (i <= 20) {
            if (i % 2 != 0) {
                console.log(i);
            }
            i++;
        }
        break;
    
    case 3:
        console.log("Has ingresado a la opción 3");
        let numeroRandom;
        do {
            numeroRandom = Math.floor(Math.random() * 15);
            console.log("Número generado: ", numeroRandom);
        } while (numeroRandom != 7);
        break;

    default:
        console.log("Opción no válida");
        break;
}
