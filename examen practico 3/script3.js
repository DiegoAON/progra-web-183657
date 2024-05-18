/**
 * Función que verifica si una cadena es un palíndromo
 * @param {string} cadena - Cadena a evaluar
 * @returns {string} Resultado de la evaluación
 */
function palindromo() {
    var cadenaOriginal = document.getElementById("frase").value;
    var resultado = "La frase \"" + cadenaOriginal + "\" \n";

    // Eliminar espacios en blanco de la cadena
    var cadenaSinEspacios = cadenaOriginal.replace(/\s+/g, '');

    // Convertir la cadena a minúsculas
    cadenaSinEspacios = cadenaSinEspacios.toLowerCase();

    // Revertir la cadena
    var cadenaReves = cadenaSinEspacios.split("").reverse().join("");

    // Verificar si la cadena es un palíndromo
    if (cadenaSinEspacios === cadenaReves) {
        resultado += " es un palíndromo";
    } else {
        resultado += " no es un palíndromo";
    }

    // Mostrar el resultado en el párrafo
    document.getElementById('respuesta').innerHTML = resultado;
}