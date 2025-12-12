const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPorDos = [];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
    numerosPorDos.push(numero * 2);
//   console.log(`Número actual: ${numero}`);
}
console.log(numerosPorDos);
// For: recorre un bloque de código un número determinado de veces
//////////////////////////////////////////

//For Of
const numerosPorDosForOf = [];
for (const numero of numeros) {
numerosPorDosForOf.push(numero * 2);
}
console.log(numerosPorDosForOf);
// For Of: recorre cada elemento de un array
//////////////////////////////////////////

//For Each
const numerosPorDosForEach = [];
numeros.forEach((numero) => {
   // puedes agregar la i para controlar el indice
   // numeros.forEach((numero), i) => {
  numerosPorDosForEach.push(numero * 2);
});
console.log(numerosPorDosForEach);
// For Each: recorre cada elemento de un array
//////////////////////////////////////////

//For In
const batman = {
  nombre: 'Bruce',
  apellido: 'Wayne',
  edad: 35,
  ciudad: 'Gotham'
};
for (const key in batman) {
  console.log('La clave: ' + key + ', tiene el valor de: ' + batman[key]); // Accediendo al valor mediante la clave
  // console.log(`Key: ${key}, Value: ${batman[key]}`);
}
// For In: recorre las claves de un objeto
//////////////////////////////////////////

let x = 5;

while (x < 3) {
  console.log('El valor de x es: ' + x);
  x++;
}
// While: haz mientras se cumpla la condición
//////////////////////////////////////////

let z = 5;

do {
  console.log('El valor de z es: ' + z);
  z++;
} while (z < 3);
// Do While: haz al menos una vez y luego repite mientras se cumpla la condición
//////////////////////////////////////////

