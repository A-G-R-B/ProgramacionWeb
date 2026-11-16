// Fig. 10.12: ImagenAleatoria2.js
// Seleccion de imagenes al azar usando arreglos
var imgIcono;
var imagenes = ["ECP", "TPE", "BPP", "GUI", "REND", "PORT", "OIS"];
var descripciones =[ "Error com&uacute;n de programaci&oacute;n",
    "Observaci&oacute;n de apariencia visual", "Tip de rendimiento", "Tip de portabilidad",
    "Observaci&oacute;n de ingenier&iacute;a de software"
];

// elegir un imagen al azar y su descripcion correspondiente, despues modificar
// el elemento img en el cuerpo del documento
function elegirImagen()
{
    var indice = Math.floor( Math.random() * 7);
    imgIcono.setAttribute( "src", imagenes[indice] + "png");
} // fin de la funcion elegirImagen

// registra el manejador de eventos de clic de imgIcono
function iniciar()
{
    imgIcono = document.getElementById( "imagen" );
    imgIcono.addEventListener( "click", elegirImagen, false);
} // fin de la funcion iniciar

window.addEventListener( "load", iniciar, false);
