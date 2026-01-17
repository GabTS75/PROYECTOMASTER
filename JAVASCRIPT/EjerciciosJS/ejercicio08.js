const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

const avengers = [
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M.",
];

// La función debe retornar la palabra más larga de un array de strings.

function findLongestWord(stringList) {

    let palabraMasLarga = "";

    for (const palabra of stringList) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }
    console.log(palabraMasLarga);
}

findLongestWord(avengers);
findLongestWord(aldeanos);

//EXTRA
// else if (palabra.length === palabraMasLarga.length) {
//     console.log(palabra + " es igual a " + palabraMasLarga);
// }

