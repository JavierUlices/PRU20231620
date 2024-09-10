console.log("Menu opciones");
console.log("1.Programa que realiza el calculo del salario");
console.log("2.Programa que realiza la busqueda de un libro\n");


let opcion =2;



switch (opcion) {
    case 1:

        console.log("Programa que realiza el calculo del salario final");

        let Ingresos=[ {Salario:600},{HorasExtras:25},{Isss:13.50},{Afp:29}];

        let SalarioPago = (Ingresos[0].Salario+Ingresos[1].HorasExtras)-(Ingresos[2].Isss+Ingresos[3].Afp);

        console.log("Total a pagar es : " +SalarioPago);

        if (SalarioPago > 365.00 && SalarioPago < 500) {
            console.log("El salario neto es mayor al salario minimo");
        }

        else if (SalarioPago >= 500) {
            console.log("Eres agente de retención de renta ");
        }

        else{
            console.log("Tu salario es menor al minimo y no se retiene ISR");
        }

        
        break;

    case 2:

        console.log("Programa que selecciona el libro buscado\n");

        let Biblioteca =[{libro:"Risitos de Oro", genero:"Cuentos"},
        {libro:"Harry Potter y la piedra filosofal",genero:"Magico"},
        {libro:"Comer, amar, rezar", genero: "Romance"},
        {libro:"Cura Mortal",genero:"Ficcion"}];

        console.log("Busqueda de libro por genero\n");

        let generoBuscado ="Ficcion";

        const libroEncontrado = Biblioteca.find(libro => libro.genero.toLowerCase() === generoBuscado.toLowerCase());

        if (libroEncontrado){
            console.log("El libro encontrado es : " +libroEncontrado.libro);
            }else{
                console.log("Género no encontrado ingresar uno valido");
                }
    

        



















        /*if(Biblioteca[0].genero == generoBuscado) {
            console.log("El libro buscado es: " + Biblioteca[0].libro);
        }
        else if (Biblioteca[1].genero == generoBuscado){
            console.log("El libro buscado es: " + Biblioteca[1].libro);
        }
        else if (Biblioteca[2].genero == generoBuscado){
            console.log("El libro buscado es: " + Biblioteca[2].libro);
        }
        else if (Biblioteca[3].genero == generoBuscado){
                console.log("El libro buscado es: " + Biblioteca[3].libro);
        }
        else{
                        console.log("Ingrese un género correcto !");
        }*/


        





        
    break;

    default:
        console.log("Ingrese una opcion correcta ");
        break;
}



