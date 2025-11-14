console.log("Hola, bienvenido a JavaScript!"); // Este es un comentario en línea
/* 
  Este es un comentario de bloque
  que puede abarcar múltiples líneas.
*/
// Declaración de variables
var mensaje = "¡Aprendiendo JavaScript es divertido!";
console.log(mensaje);

var dogName = "Buddy";
var dogAge = 3;
var isDogHappy = "Claro que si!";
console.log("El nombre del perro es: " + dogName);
console.log("La edad del perro es: " + dogAge);
console.log("¿El perro está feliz?: " + isDogHappy);

// const y let --> constantes y variables
const dogNameConst = "Max"; // Declarar y asignar una constante
let movie = "Batman"; // Declarar una variable con let
console.log("Mi película favorita es: " + movie);

movie = "Superman"; // Reasignar la variable
console.log("Pero ahora mi película favorita es: " + movie);

//Ambito de bloque -> Scope

//Ambito global
const x = 10;

if (true){

    //Ambito local
    const y = 20;
    // puedo leer la x porque está a nivel global
    console.log("Valor de x dentro del bloque: " + x);
    // puedo leer la y porque está a nivel local, es decir, dentro del bloque
    console.log("Valor de y dentro del bloque: " + y);

}

// No puedo leer la y porque está fuera del bloque
console.log("Valor de x fuera del bloque: " + x);

//console.log("Valor de y fuera del bloque: " + y); // Esto causará un error
console.log("Valor de y fuera del bloque: " + y)

// const y let arreglaron el problema del ambito de bloque que existia con var
// se puede de fuera hacia dentro pero no de dentro hacia fuera
