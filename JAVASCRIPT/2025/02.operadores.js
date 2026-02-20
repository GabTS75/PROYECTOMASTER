//Tipos de datos
const string = 'Hola, Mundo!, esto es un "string"'; // Cadena de texto
const numeros = 425156.1354; // Número
const booleano = true; // Booleano (true o false)

const objeto = { // Objeto
    nombre: "Juan", // propiedad: valor
    edad: 30 // propiedad: valor
};

const arreglo = [1, 2, 3, 4, 5]; // Arreglo (array)
const array = ["manzana", "banana", "cereza", 2, true]; // Arreglo de strings

const nulo = null; // Valor nulo
const noDefinido = undefined; // Valor indefinido
let indefinido; // Valor indefinido

const explicacionNullUndefined = "www.aprendejavascript.dev/images/null-undefined.jpg";
// "null representa la ausencia intencional de cualquier valor, mientras que undefined indica que una variable ha sido declarada pero no se le ha asignado ningún valor.";

// Operadores Aritméticos

let x = 10;

x += 5; // x = x + 5
console.log("Valor de x después de += 5: " + x);

x -= 1; // x = x - 1
console.log("Valor de x después de -= 1: " + x);

x *= 2; // x = x * 2
console.log("Valor de x después de *= 2: " + x);

x /= 3; // x = x / 3
console.log("Valor de x después de /= 3: " + x);

x %= 4; // x = x % 4
console.log("Valor de x después de %= 4: " + x);

// Cuidado con los strings
const z = "2" + "2"; // Concatenación de strings
console.log('Resultado de "2" + "2": ' + z); // "22"

// Operadores lógicos -> Operadores booleanos
// && (AND) -> Conjunción
console.log("Operador AND (&&): ");
console.log("true && true: " + (true && true));
console.log("true && false: " + (true && false));
console.log("false && true: " + (false && true));
console.log("false && false: " + (false && false));
// || (OR) -> Disyunción
console.log("Operador OR (||): ");
console.log("true || true: " + (true || true));
console.log("true || false: " + (true || false));
console.log("false || true: " + (false || true));
console.log("false || false: " + (false || false));
// ! (NOT) -> Negación
console.log("Operador NOT (!): ");
console.log("!true: " + (!true));
console.log("!false: " + (!false));
// Igual que (==) y estrictamente igual que (===)
console.log("Operador Igual que (==) y Estrictamente igual que (===): ");
console.log('5 == "5": ' + (5 == "5")); // true porque convierte el string a número
console.log('5 === "5": ' + (5 === "5")); // false porque no convierte tipos
// Diferente que (!=) y estrictamente diferente que (!==)
console.log("Operador Diferente que (!=) y Estrictamente diferente que (!==): ");
console.log('5 != "5": ' + (5 != "5")); // false porque convierte el string a número
console.log('5 !== "5": ' + (5 !== "5")); // true porque no convierte tipos
// Mayor que (>) y menor que (<)
console.log("Operador Mayor que (>) y Menor que (<): ");
console.log("10 > 5: " + (10 > 5));
console.log("5 < 10: " + (5 < 10));
// Mayor o igual que (>=) y menor o igual que (<=)
console.log("Operador Mayor o igual que (>=) y Menor o igual que (<=): ");
console.log("10 >= 10: " + (10 >= 10));
console.log("5 <= 10: " + (5 <= 10));

const a = true;
const b = false;