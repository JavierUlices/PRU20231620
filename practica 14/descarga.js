function descargandoArchivo(nombreArchivo) {
    return new Promise((resolve, reject) => {
    console.log(`iniciando la descarga de ${nombreArchivo}...`);
    const tiempoDescarga = Math.floor(Math.random() * 3000) + 1000; // Entre 1 / 4 segundos
    setTimeout(() => {
        if (Math.random() >0.30) {
            resolve(`❎descarga completa: ${nombreArchivo}`);
            } else {
                reject(`❌error descargando ${nombreArchivo}`);
                }
                }, tiempoDescarga);
                });
                }
// Función asincronica para gestionar  la descarga de múltiples archivos
async function gestionarDescargas(nombreArchivos) {
    try{
        console.log("Comenzando la descarga de archivos...");
        for (const nombreArchivo of nombreArchivos) {
            const resultado = await descargandoArchivo(nombreArchivo); // Espera a que cada archivos se derscargue
            console.log(resultado);

    }
    console.log("Todas las descragas completadas.");
    } catch (error) {
        console.error("Error descargando archivos:", error);
        }
        
}
// Lista des archivos de descargas
const listaDeArchivos = ["foto1.jpg", "documento.pdf", "video.mp4", "presentación.pptx"];

// Inicializar el proceso de descargas
gestionarDescargas(listaDeArchivos);

