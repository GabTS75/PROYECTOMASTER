// 1er CASO: Función declarada con la palabra reservada 'function'
// saludar();
// si llamamos a la función antes de definirla, funciona igual gracias al hoisting
// function saludar() {
// la función sufre hoisting
//    console.log("Hola");
// };
// Output: Hola

// 2do CASO: Función asignada a una variable (arrow function)
// saludar(); // Si llamamos a la función ANTES de definirla, dará error porque las arrow functions NO sufren hoisting
const saludar = () => {
    console.log("Hola");
}; 

saludar(); // Output: Hola

// Por lo tanto, las funciones declaradas con la palabra reservada 'function' pueden ser llamadas antes de su definición en el código (1er CASO), mientras que las funciones asignadas a variables (2do CASO, como las arrow functions) no pueden ser llamadas antes de su definición.

// Diferentes formas de definir una variable vacía
// const x = ""; // Se usan las comillas para un string vacío
// const x = (); // Se usa los paréntesis para definir una función vacía
// const x = []; // Se usa los corchetes para definir un array vacío
// const x = {}; // Se usan las llaves para definir un objeto vacío
// const x = () => {}; // Se usa la flecha para definir una arrow function vacía, esto representa una función moderna sin contenido
// const x = function() {}; // esto es una función tradicional vacía, representa una función clásica sin contenido
// const x = null; // Se usa null para indicar que la variable no tiene ningún valor asignado
