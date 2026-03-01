// EJERCICIO 13

/*
Buscador de nombres:
Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.
*/

const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function nameFinder(nameList, nameToSearch) {
    // Buscamos el índice del nombre en la lista
    const index = nameList.indexOf(nameToSearch);

    // Si el índice es diferente a -1, significa que existe
    if (index !== -1) {
        return { exists: true, position: index };
    } else {
        return { exists: false };
    }
}

// Ejemplo:
console.log(nameFinder(names, 'Bruce'));  // { exists: true, position: 7 }
console.log(nameFinder(names, 'Donovan')); // { exists: false }

/* -- Alternativa (ES6+)
const nameFinder = (list, target) => {
    const idx = list.indexOf(target);
    return idx !== -1 ? [true, idx] : false;
};
console.log(nameFinder(names, 'Clint'));  // [true, 4 ]
console.log(nameFinder(names, 'Marilyn')); // false
*/