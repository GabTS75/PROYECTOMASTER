const hacerDeberes = false;
const hacerLaCama = true;
// variables booleanas
if (hacerDeberes && hacerLaCama) {
    console.log("Te dejo salir a jugar");
} else {
    console.log("Pues haber hecho lo que t dije!");
}
// operadores logicos AND (&&), OR (||) y NOT (!)
const edad = 19;

if (edad >= 1 && edad < 18) {
    console.log("Eres menor de edad");
} else if (edad >= 18 && edad <= 32) {
    console.log("Eres joven");
} else if (edad > 32 && edad < 70) {
    console.log("Eres adulto");
} else {
    console.log("Eres anciano");
}
// if, else if, else

//Switch

const cursoi = "ASIR";

switch (cursoi) {
    case "DAM":
        console.log("Estudias Desarrollo de Aplicaciones Multiplataforma");
        break;
    case "DAW":
        console.log("Estudias Desarrollo de Aplicaciones Web");
        break;
    case "ASIR":
        console.log("Estudias Administración de Sistemas Informáticos en Red");
        break;
    case "SMR":
        console.log("Estudias Sistemas Microinformáticos y Redes");
        break;
    default:
        console.log("No existe el curso");
        break;

}
// switch case default break

//Versión con condicionales if else if else (tradicional)
if (cursoi === "DAM") {
    console.log("Estudias Desarrollo de Aplicaciones Multiplataforma");
}   else if (cursoi === "DAW") {
    console.log("Estudias Desarrollo de Aplicaciones Web");
} else if (cursoi === "ASIR") {
    console.log("Estudias Administración de Sistemas Informáticos en Red");
} else if (cursoi === "SMR") {
    console.log("Estudias Sistemas Microinformáticos y Redes");
} else {
    console.log("No existe el curso");
}

//Ternario
/*
 const hacerDeberes = false;
 const hacerLaCama = true;
 // variables booleanas
 if (hacerDeberes && hacerLaCama) {
     console.log("Te dejo salir a jugar");
 } else {
     console.log("Pues haber hecho lo que t dije!");
 }
*/
hacerDeberes && hacerLaCama
    ? console.log("Te dejo salir a jugar")
    : console.log("Pues haber hecho lo que t dije!");