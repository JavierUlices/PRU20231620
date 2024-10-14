console.log("Función para conversion de formato de fecha");

conversorFecha('2024-10-12');








function conversorFecha(fecha) {

    // Convertir el parametro a tipo date
    let fechaFormato = new Date(fecha);
    // validar si la fecha es valida
    if (isNaN(fechaFormato)) {
        console.log("Fecha no es valida");
        return;
    }

    // imprimir los diversos formatos
    console.log("Fecha sin modificar: " + fecha); // fecha original
    console.log("Fecha en formato Tostring " + fechaFormato.toString()); // formato estandar

    console.log("Fecha en formato local: " + fechaFormato.toLocaleString()); // formato fecha local
    console.log("Fecha solo con datos: " + fechaFormato.toDateString()); // formato solo de fecha

    console.log("Solamente de hora: " + fechaFormato.toTimeString()); // formato de la hora
}
