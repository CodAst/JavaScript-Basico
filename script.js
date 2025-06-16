//Función para mostrar un cuadro de dialogo emergente

function mostrarMensaje()
{
    alert("Hola Mundo");
}

//Variable
function imprimirVariable()
{
    let nombre = "Astrid";
    let edad = "20"

    //Forma tradicional de concatenar cadenas
    console.log("nombre: ", nombre);
    console.log("edad: ", edad);
    
    //Forma moderna de concatener cadenas
    console.log[`nombre: ${nombre}`, `edad: ${edad}`];
    //Otros tipos de impresiones
    console.error("Error: bla bla bla");
    console.warn("Advertencia: x x x");
}

function arreglos()
{
    let frutas = ['manzana', 'pera', 'banana'];
    
    //Bucle
    for(let f of frutas)
    {
       console.log(f)
    }

    //Condicional
    if ((frutas[1]) === 'pera')
    {
        console.log("La segunda fruta es una pera");
    }
    else
    {
        console.log("No es pera")
    }
}

// Agregar evente a un elemento HTML
document.getElementById("btnSaludar").addEventListener(
    "click", function () {
        console.log("Hola!");
    }
);

// Modificar el HTML a través del DOM
document.getElementById("btnAgregar").addEventListener(
    "click", () => {
        // Obtener el elemnto "lista" (ul) del documento HTML
        let lista = document.getElementById("lista");
        // Creando un nuevo elemento HTML, li = list item
        let nuevoItem = document.createElement("li");
        // Obteniendo el total de ítems de la lista
        let totalItems = lista.childElementCount;
        // Agregando un contenido (texto) al item
        nuevoItem.textContent = `Item ${totalItems + 1}`;
        // Agregar item a la lista
        lista.appendChild(nuevoItem);
    }
)

