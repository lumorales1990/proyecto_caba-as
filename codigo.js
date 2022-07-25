// let turno = prompt("Ingresa tu nombre y te dire el numero de consultorio \nLuciana\nPaula\nClarisa\nJeronimo (ESC-para sali)");
// while(turno!="ESC"){
//     switch(turno){
//         case "Luciana":
//             console.log("El consultorio es el 4");
//             break;
//             case "Paula":
//                 console.log("El consultorio es el 6");
//                 break;
//                 case "Clarisa":
//                     console.log("El consultorio es el 7");
//                     break;
//                     case "Jeronimo":
//                         console.log("El consultorio es el 3");
//                         break;
//                         default:
//                             console.log("No tenemos mas turnos");
//     }

//     turno=prompt("Ingresa tu nombre y te dire el numero de consultorio (ESC-para salir)")
// }

let Promedio = () => {
    let nota1=prompt("7");
    let nota2=prompt("8");
    let nota3=prompt("10")
    let notaFinal=nota1+ " "+nota2+" "+nota3;
    return notaFinal
}

var nota1= parseInt(prompt("digite la nota 1"));
var nota2= parseInt(prompt("digite la nota 2"));
var nota3= parseInt(prompt("digite la nota 3"));

suma = nota1 + nota2 + nota3;
promedio = suma/3;

alert("El Promedio Final del Alumno es " + promedio);