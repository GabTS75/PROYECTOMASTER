for (let i = 0; i < 3; i++) {
    // console.log("Iteración número " + i); // Imprime la iteración actual
    console.log('Hola', i); // Esto se repite 3 veces
}
console.log('Adios');
// i = 0 -> True -> me llevo una -> Hola 0
// i = 1 -> True -> me llevo una -> Hola 1
// i = 2 -> True -> me llevo una -> Hola 2
// i = 3 -> False -> Salgo del bucle -> Adios (fin del bucle)

const animales = [
    'Perro', // índice 0
    'Elefante', // índice 1
    'Gato', // índice 2
    'Tortuga', // índice 3
    'Rinoceronte', // índice 4
    'Aguila', // índice 5
    'Leon']; // índice 6

// Recorremos el array de animales
for (let i = 0; i < animales.length; i++) {
    const animal = animales[i];
    console.log(animal, i); // Imprimimos el nombre del animal y su índice
    // console.log('Animal:', i , animales[i]); // Accedemos a cada animal por su índice
}
