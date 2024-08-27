console.log("Menu de opciones");
console.log("1. Propiedades basicas de arrays");
console.log("2. Metodos avanzados de arrays");
console.log("3. combinación de arrays");

let opcion = 2;

switch (opcion) {
    case 1:
        console.log("Has ingresado a la opción 1\n");
        let numero = [10, 20, 30, 40, 50, 60];
        console.log("Longitud del arreglo ", numero.length, "\n");
        numero.push(70);
        console.log("El arreglo despues de push ", numero, "\n");
        let ultimoElemento = numero.pop();
        console.log("Arreglo despues de pop ", numero, "\n");
        break;

    case 2:
        console.log("Has ingresado a la opción 2\n");
        let numeros = [1, 2, 3, 4, 5];
        let multiplicacionArrays = numeros.map(num => num * 3);
        console.log("Multiplicación * 3 del arreglo ", multiplicacionArrays, "\n");
        let numerosFiltrados = numeros.filter(num => num > 2);
        console.log("Numeros mayores a 2 : ", numerosFiltrados, "\n");
        break;

    case 3:
        console.log("Has ingresado a la opción 3\n");
        let letras = ["c", "a", "b", "e", "d"];
        let numerosiniciales = [3, 1, 2, 5, 4];
        letras.sort();
        numerosiniciales.sort((a, b) => a - b);
        console.log("Arreglo de letras ordenado ", letras, "\n");
        console.log("Arreglo de numeros ordenado ", numerosiniciales, "\n");

        let combinados = letras.concat(numerosiniciales);
        console.log("Arrays combinados ", combinados, "\n");

        combinados.reverse();
        console.log("Arrays combinados inverso: ", combinados, "\n");
        break;

    default:
        console.log("Debe ingresar una opcion correcta 1 - 3");
        break;
}
