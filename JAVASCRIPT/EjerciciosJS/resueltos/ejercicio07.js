// EJERCICIO 07

// Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne, numberTwo) {
  // Si la función devuelve que son iguales, retornará cualquiera de los dos.
  if (numberTwo > numberOne) {
    console.log(numberTwo);
  } else {
    console.log(numberOne);
  }
}

greaterNumber(5, 8); // Retorna 8
greaterNumber(2.56, 1.45); // Retorna 2.56
greaterNumber(2, 2); // Retorna 2

greaterNumber(10, 5); // 10
greaterNumber(3, 8); // 8
greaterNumber(7, 7); // 7
