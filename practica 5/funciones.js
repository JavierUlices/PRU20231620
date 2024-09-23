console.log("Menu opciones");
console.log("1. Función para el calculo de salario");
console.log("2. Función para el calculo de descuento");
console.log("3. Función para la area de un rectangulo");

let opcion =3;

switch (opcion) {
    case 1:
     console.log("Ha ingresado a la opcion 1");
     let argumento = 45;
     let argumentoPrecioHoras = 15;
     console.log("El salario total es : $"+ calculoSalario(argumento, argumentoPrecioHoras));
     
     break;
     case 2:
        console.log("Ha ingresado a la opcion 2");
        let argumentoCantidad = 50;
        let argumentoDescuento = 15;
        console.log("El descuento aplicado es " +argumentoDescuento+ "%"+" y la cantidad final es :  $"+ calculoDescuento(argumentoCantidad, argumentoDescuento));
    break;
     case 3:
        console.log("Ha ingresado a la opcion 3");
        let Base = 20;
        let Altura = 10;
        console.log("El area del rectangulo es : " + areaRectangulo(Base, Altura));

     break;

     default:
     console.log("Elija una opción correcta entre 1 - 3 ");
     break;
}

//Apartado para ralizar funciones

function calculoSalario(horasTrabajadas,precioHora) {
    let salarioTotal = horasTrabajadas*precioHora;
    return salarioTotal;

}//Fin función

function calculoDescuento (cantidad, descuento) {

    let prdescuento=descuento / 100;

    let descuentoTotal=cantidad * prdescuento
    let cantidadFinal = -descuentoTotal;
    return cantidadFinal;






}//Fin función

function areaRectangulo(Base, Altura) {
    let area = Base * Altura;
    return area;
    
}



 
