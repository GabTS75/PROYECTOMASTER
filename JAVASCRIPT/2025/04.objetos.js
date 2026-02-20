const batman = {
    nombreReal: 'Bruce Wayne',
    ciudad: 'Gotham',
    amigos: ['Robin', 'Alfred', 'Batgirl'],
    poder: 'Dinero',
    padres: false,
}
// Leer y acceder a las propiedades de un objeto
console.log(batman.nombreReal); // Bruce Wayne
console.log(batman['ciudad']); // Gotham
console.log(batman.amigos[0]); // Robin

// Modificar propiedades de un objeto
batman.poder = 'Inteligencia';
console.log(batman.poder); // Inteligencia
batman['ciudad'] = 'Ciudad Gótica';
console.log(batman.ciudad); // Ciudad Gótica

// Agregar nuevas propiedades a un objeto
batman.edad = 35;
console.log(batman.edad); // 35
batman['vehiculo'] = 'Batimóvil';
console.log(batman.vehiculo); // Batimóvil

// Eliminar propiedades de un objeto
delete batman.padres;
console.log(batman.padres); // undefined
delete batman['vehiculo'];
console.log(batman.vehiculo); // undefined
console.log(batman);
// Objeto final después de todas las operaciones
/*{
  nombreReal: 'Bruce Wayne',
  ciudad: 'Ciudad Gótica',
  amigos: [ 'Robin', 'Alfred', 'Batgirl' ],
  poder: 'Inteligencia',
  edad: 35
}*/