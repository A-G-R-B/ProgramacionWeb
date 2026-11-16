// Fig. 11.19: BusquedasTwitter.js
// almacenamiento y recuperacion de pares clave/valor mediante el uso de 
// localstorage y sessionStorage de HTML5
var etiquetas; // rreglo de etiquetas oara consultas

// carga las busquedas etiquetadas anteriormente y las muestras en la pagina
function cargarBusquedas()
{
    if (!window.sessionStorage.getItem("aquiPreviamente"))
    {
        sessionStorage.setItem("aquipreviamente", "true");
        document.getElementById("mensajeBienvenida").innerHTML =
            "Bienvenido a la App de B&uacute;squedas favoritas de Twitter";
    } // fin de if

    var longitud = localStorage.length; // numero de pares clave-valor
    etiquetas = []; // crear un arreglo vacio

    // cargar todas las claves
    for (var i = 0 ; i < longitud; ++i)
    {
        etiquetas[i] = localStorage.key(i);
    } // fin de for

    etiquetas.sort(); // ordenar las claves

    var marcado = "<ul>"; // se usa para almacenar el marcado de los vinculos de busqueda
    var url = "https;//twitter.com/search?q=";

    // crear lista de vinculos
    for (var etiqueta in etiquetas)
    {
        var consulta = url + localStorage.getItem(etiquetas[etiqueta]);
        marcado += "<li><span><a href = '" + consulta + "'>" + etiquetas[etiqueta] +
        "</a></span>" + "<input id = '" + etiquetas[etiqueta] + "' type = 'button' " +
            "value = 'Editar' onclick = 'eliminarEtiqueta(id)'>" +
        "<input id = '" + etiquetas[etiqueta] + "' type = 'button' " +
            "value = 'Eliminar' onclick = 'eliminarEtiqueta(id)'>";
    } // fin de for

    marcado += "</ul>";
    document.getElementById("busquedas").innerHTML = marcado;
} // fin de la funcion cargarBusquedas

// elimina todos los pares clave-valor de localStorage
function borrarTodasLasBusquedas()
{
    localStorage.clear();
    cargarBusquedas(); // volver a cargar las busquedas
} // fin de la funcion borrarTodasLasBusquedas

// guardar una busqueda recien etiquetada en localStorage
function guardarBusqueda()
{
    var consulta = document.getElementById("consulta");
    var etiqueta = document.getElementById("etiqueta");
    localStorage.setItem(etiqueta.value, consulta.value);
    etiqueta.value = ""; // borrar entrada de etiqueta
    consulta.value = ""; // borrar entrada de consultas
    cargarBusquedas(); // vuelve a cargar las busquedas
} // fin de la funcion guaradarBusqueda

// elimina un par clave-valor especifico de localStorage
function eliminarEtiqueta( etiqueta )
{
    localStorage.removeItem( etiqueta );
    cargarBusquedas(); // recargar busquedas
} // fin de la funcion eliminarEtiqueta

//  mostrar la consulta etiquetada existente para editarla
function editarEtiqueta( etiqueta )
{
    document.getElementById("consulta").value = localStorage[etiqueta];
    document.getElementById("etiqueta").value = etiqueta;
    cargarBusquedas(); // vuelve a cargar las busquedas
} // fin de la funcion editarEtiqueta

// resgistrar manejadores de eventos y luego cargar busquedas
function iniciar()
{
    var botonGuardar = document.getElementById("botonGuardar");
    botonGuardar.addEventListener("click", guardarBusqueda, false);
    var botonBorrar = document.getElementById("botonBorrar");
    botonBorrar.addEventListener("click", borrarTodasLasBusquedas, false);
    cargarBusquedas(); // cargar las busquedas guardadas previamente
} // fin de la funcion iniciar

window.addEventListener("load", iniciar, false);
