// EJERCICIO 12

/*
 Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

 Pista: puedes generar un nuevo array y devolverlo.
*/

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

// La función debe retornar un nuevo array en el que NO haya elementos duplicados.

function removeDuplicates(list) {
    const listaUnicos = [];
    // Creamos un nuevo array vacío para almacenar los elementos únicos

    for (const element of list) {

        if (!listaUnicos.includes(element)) {
            // Verificamos si el elemento no está ya en el array de elementos únicos

            listaUnicos.push(element);
            // Si el elemento no está, lo agregamos al array de elementos únicos
        }
    }
    return listaUnicos; // Retornamos el array con los elementos únicos
}

removeDuplicates(duplicates);
// Llamamos a la función con el array de elementos duplicados
console.log("Array sin duplicados:", removeDuplicates(duplicates));
// Imprimimos el resultado para verificar que los elementos duplicados han sido eliminados
