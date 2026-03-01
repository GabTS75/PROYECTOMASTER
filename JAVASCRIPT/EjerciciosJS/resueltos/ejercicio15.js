// EJERCICIO 15

/*
Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

Usa la función .includes de javascript.
*/

const products = [
    "Camiseta de Metallica",
    "Pantalón vaquero",
    "Gorra de beisbol",
    "Camiseta de Basket",
    "Cinturón de Orión",
    "AC/DC Camiseta",
];

function verCamisetas(list) {
    for (let i = 0; i < list.length; i++) {
        // Comprobamos si el elemento actual incluye la palabra "Camiseta"
        if (list[i].includes("Camiseta")) {
            console.log(list[i]);
        }
    }
}

verCamisetas(products);