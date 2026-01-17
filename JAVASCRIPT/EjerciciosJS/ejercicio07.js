function greaterNumber(numberOne, numberTwo) {
  // La función debe retornar el número mayor de los dos números que recibe por parámetro.
  // Si son iguales, debe retornar cualquiera de los dos.
  if (numberOne < numberTwo) {
    console.log(numberTwo);
  } else {
    console.log(numberOne);
  }
}

greaterNumber(5, 8); // Retorna 8
greaterNumber(2.56, 1.45); // Retorna 2.56
greaterNumber(2, 2); // Retorna 2

// greaterNumber("Paco", "Manuel")

greaterNumber(10, 5); // Debería retornar 10
greaterNumber(3, 8); // Debería retornar 8
greaterNumber(7, 7); // Debería retornar 7
