// EJERCICIO 09

// Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i]; // sum = sum + numberList[i];
  }
  // console.log("La sumatoria es: " + sum); También se puede mostrar el resultado con un console.log dentro de la función, pero es mejor práctica retornar el resultado para que la función sea más flexible y reutilizable.
  return sum;
  // Devuelve la suma de los números del array al llamar a la función sumNumbers(numbers);
}

console.log("La suma total es: " + sumNumbers(numbers));
// Muestra el resultado de la función.. La suma total es: 151
