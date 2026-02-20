// EJERCICIO 10

// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función (average), usando los siguientes arrays.

const numbers = [12, 21, 38, 5, 45, 37, 6];
const edades = [23, 15, 18, 20, 10, 30, 50];

function average(numberList) {
    let contador = 0; // Inicializamos a cero
    for (const number of numberList) { // Recorremos el array con un for...of
        contador += number; // Sumamos cada número al contador
    }
    return contador / numberList.length; // Dividimos la sumatoria total por la cantidad de números para obtener el promedio
}

console.log("La sumatoria de numbers es: " + average(numbers) * numbers.length); // Multiplicamos el resultado de average por la longitud del array para obtener la sumatoria total de los números

console.log("El promedio de numbers es: " + average(numbers)); // Llamamos a la función average con el array numbers y mostramos el resultado en la consola

console.log("La sumatoria de edades es: " + average(edades) * edades.length); // Hacemos lo mismo con el array edades

console.log("El promedio de edades es: " + average(edades)); // Promedio del array edades
