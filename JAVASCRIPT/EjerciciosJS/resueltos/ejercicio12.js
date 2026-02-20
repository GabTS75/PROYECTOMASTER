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

    for (const element of list) {
        if (!listaUnicos.includes(element)) {
            listaUnicos.push(element);
        }
    }
    console.log(listaUnicos);
}
removeDuplicates(duplicates);
