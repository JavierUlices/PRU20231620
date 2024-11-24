// Función para actualizar el texto de un elemento por su ID
function actualizarTexto(idElemento, nuevoTexto) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = nuevoTexto;
}

// Función para cambiar el estilo de un elemento por su ID
function cambiarEstilo(idElemento, estilos) {
    const elemento = document.getElementById(idElemento);
    Object.assign(elemento.style, estilos);
}

// Función para agregar un nuevo elemento al contenedor
function agregarElemento(idContenedor, tag, texto) {
    const contenedor = document.getElementById(idContenedor);
    const nuevoElemento = document.createElement(tag);
    nuevoElemento.textContent = texto;
    contenedor.appendChild(nuevoElemento);
}

// 1. Acceso y modificación de contenido
document.getElementById("modificarContenido").addEventListener("click", () => {
    actualizarTexto("texto", "El texto ha sido modificado.");
});

// 2. Modificación de estilos
document.getElementById("cambiarEstilo").addEventListener("click", () => {
    cambiarEstilo("parrafoEstilo", { color: "blue", fontWeight: "bold" });
});

// 3. Creación de nuevos elementos
document.getElementById("agregarElemento").addEventListener("click", () => {
    agregarElemento("contenedorElementos", "p", "Este es un nuevo párrafo agregado dinámicamente.");
});

// 4. Manejo de eventos
document.getElementById("botonEvento").addEventListener("click", () => {
    actualizarTexto("resultadoEvento", "¡Has hecho clic en el botón!");
});
