function saludar() {
    console.log("Hola");
}
//ejecutar la función
saludar(); // Output: Hola

// parámetro
function saludarConNombre(nombre) {
    console.log("Hola, " + nombre + "!");
}
//ejecutar la función con un 'argumento'
saludarConNombre("Juan"); // Output: Hola, Juan!
saludarConNombre("Miriam"); // Output: Hola, Miriam!
saludarConNombre("Sara"); // Output: Hola, Sara!
saludarConNombre(); // Output: Hola, undefined!
saludarConNombre("Manuel"); // Output: Hola, Mamuel!

function calcularEdad(nombre, añoActual, añoNacimiento) {
    // Podemos calular la edad con un valor fijo para el año actual al final
    // function calcularEdad(nombre, añoNacimiento, añoActual = 2025) {
    const edad = añoActual - añoNacimiento;
    console.log(nombre + " tienes " + edad + " años.");
}
calcularEdad("Juan", 2025, 1990); // Output: Juan tienes 35 años.
calcularEdad("Miriam", 2025, 1985); // Output: Miriam tienes 40 años.
calcularEdad("Sara", 2025, 2000); // Output: Sara tienes 25 años.
calcularEdad("Manuel", 2025, 1975); // Output: Manuel tienes 50 años.

function mostrarDatosUsuario(ciudad) {

    console.log("Vives en " + ciudad);
}
mostrarDatosUsuario("Madrid"); // Output: Vives en Madrid
mostrarDatosUsuario("Barcelona"); // Output: Vives en Barcelona
mostrarDatosUsuario("Valencia"); // Output: Vives en Valencia

function suma(numA, numB) {
    const resultado = numA + numB;
    return resultado;
    // La función devuelve el valor de 'resultado' y sirve para usarlo fuera de la función
    //    console.log("La suma es: " + resultado);
}
// suma(5, 10); // Output: La suma es: 15
// suma(20, 30);; // Output: La suma es: 50
// suma(-5, 15); // Output: La suma es: 10

const suma1 = suma(5, 10);
console.log("La suma es: " + suma1); // Output: La suma es: 15
const suma2 = suma(20, 30);
console.log("La suma es: " + suma2); // Output: La suma es: 50
const suma3 = suma(-5, 15);
console.log("La suma es: " + suma3); // Output: La suma es: 10

// Arrow function: una forma más corta de definir funciones
const sumar = (numA, numB) => {
    const total = numA + numB;
    return total;
};
const resultado1 = sumar(10, 15);
console.log("El resultado de la suma es: " + resultado1);
// Output: El resultado de la suma es: 25
