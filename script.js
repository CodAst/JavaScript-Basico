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
    for(let f of frutas)
    {
       console.log(f)
    }
}