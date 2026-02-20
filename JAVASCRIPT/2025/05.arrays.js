const animales = ['perro', 'gato', 'elefante', 'tigre', 'león']; // puedes usar comillas simples o dobles
const numeros = [10, 20, 30, 40, 50]; // array de números

//Calculamos la longitud del array y la almacenamos en una variable -> HUMANA
const longitud = animales.length; // 5 // length: GO THE HELL

// console.log('Longitud del array animales:', longitud); // usas una variable para almacenar la longitud
console.log(animales.length); // 5

console.log(animales[0]); // 'perro' // 1. Acceder al primer elemento del array
console.log(animales[animales.length - 1]); // 'león' // 2. Acceder al último elemento del array

// animales.push('jirafa'); // 1. Agregar un nuevo animal al final del array
// console.log(animales); // ['perro', 'gato', 'elefante', 'tigre', 'león', 'jirafa']

// MÉTODOS DE ARRAYS

const peliculas = ['Inception', 'Titanic', 'Avatar'];
console.log(peliculas); // lista inicial de películas

peliculas.push('Interstellar'); // Agrega 'Interstellar' al final del array
console.log(peliculas); // ['Inception', 'Titanic', 'Avatar', 'Interstellar']

peliculas.pop(); // Elimina el último elemento del array
console.log(peliculas); // ['Inception', 'Titanic', 'Avatar']

peliculas.unshift('The Matrix'); // Agrega 'The Matrix' al inicio del array
console.log(peliculas); // ['The Matrix', 'Inception', 'Titanic', 'Avatar']

peliculas.shift(); // Elimina el primer elemento del array
console.log(peliculas); // ['Inception', 'Titanic', 'Avatar']

peliculas.reverse(); // Invierte el orden de los elementos en el array
console.log(peliculas); // ['Avatar', 'Titanic', 'Inception']

peliculas.sort(); // Ordena los elementos del array alfabéticamente
console.log(peliculas); // ['Avatar', 'Inception', 'Titanic']

const numerosMalos = [3, 1, 30, 35, 4, 2,, 10, 11, 20, 5, 25];
numerosMalos.sort(); // Ordena los números como si fueran cadenas de texto
console.log(numerosMalos); // [1, 10, 11, 2, 20, 25, 3, 30, 35, 4, 5]

const numerosDesordenados = [40, 10, 30, 20, 50];

numerosDesordenados.sort((a, b) => a - b); // Ordena los números de menor a mayor
console.log(numerosDesordenados); // [10, 20, 30, 40, 50]

numerosDesordenados.sort((a, b) => b - a); // Ordena los números de mayor a menor
console.log(numerosDesordenados); // [50, 40, 30, 20, 10]

const indice = peliculas.indexOf('Titanic'); // Busca el índice de 'Titanic' en el array
console.log(indice); // 2 // puesdes usar una variable para almacenar el índice o usarlo directamente dentro de otro método, peliculas.indexOf('Titanic')
console.log(peliculas)

console.log(peliculas.slice(1, 3)); // Crea un nuevo array con los elementos desde el índice 1 hasta el 3 (sin incluir el 3) ['Inception', 'Titanic']
console.log(peliculas); // El array original permanece sin cambios ['Avatar', 'Inception', 'Titanic']

peliculas.splice(1, 1); // Elimina 1 elemento en el índice 1
console.log(peliculas); // ['Avatar', 'Titanic']
peliculas.splice(1, 1), 'Dracula'; // Elimina 1 elemento en el índice 1 y agrega 'Drácula'

