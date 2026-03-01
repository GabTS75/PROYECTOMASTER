// EJERCICIO 14

/*
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.
*/

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];
function repeatCounter(list) {

    const counter = {}; // Creamos un objeto vacío para guardar los resultados

    for (const word of list) {
        // Si la palabra ya existe en el objeto, le sumamos 1
        if (counter[word]) {
            counter[word]++;
        } else {
            // Si no existe, la inicializamos en 1
            counter[word] = 1;
        }
    }

    return counter;
}

const result = repeatCounter(words);
console.log(result);
