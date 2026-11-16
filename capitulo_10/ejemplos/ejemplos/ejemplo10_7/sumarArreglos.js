// Fig. 10.8: SumaArreglo.js
// Suma de los elementos de un arreglo con for y for...of
function iniciar()
{
    var elArreglo = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    var total1 = 0, total2 = 0;

    // iterar a traves de los elementos del arreglo en orden y suma
    // el valor de cada elemento a total1
    var longitud = elArreglo.length; // obtener la longitud del arreglo una vez antes del ciclo

    for ( var i = 0; i < elArreglo.length; ++i ) 
    {
        total1 += elArreglo[ i ];
    } // fin del for

    var resultados = "<p>Total usando &iacute;ndice: " + total1 + "</p>";

    // iterar a traves de los elementos del arreglo usando una instruccion
    // for...in para sumar el valor de cada elemento a total2
    for ( var elemento in elArreglo )
    {
        total2 += elArreglo[ elemento ];
    } // fin del for...in

    resultados += "<p>Total usando for...in: " + total2 + "</p>";
    document.getElementById( "Salida" ).innerHTML = resultados;
} // fin de la funcion iniciar

window.addEventListener( "load", iniciar, false );
