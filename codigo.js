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

// let Promedio = () => {
//     let nota1=prompt("7");
//     let nota2=prompt("8");
//     let nota3=prompt("10")
//     let notaFinal=nota1+ " "+nota2+" "+nota3;
//     return notaFinal
// }

// var nota1= parseInt(prompt("digite la nota 1"));
// var nota2= parseInt(prompt("digite la nota 2"));
// var nota3= parseInt(prompt("digite la nota 3"));

// suma = nota1 + nota2 + nota3;
// promedio = suma/3;

// alert("El Promedio Final del Alumno es " + promedio);



let entrada=prompt("Ingrsa las especialidades a las que quieres sacar turno y te diremos el monto de la cita. \n ginecología \n odontología \n medicina general \n (fin para ver el total).");
let precio=0;

function calcular(){

  while (entrada !="fin"){
    switch (entrada){
        case "Ginecologia":
        case "ginecologia":
          console.log("El turno para ginecologia cuesta $1000") 
          precio= precio+1000;
          break;         

        case "Odontologia":
        case "odontologia":
          console.log("El turno para el odontologo cuesta $1500")
          precio= precio+1500 
          break;

      case "Medicina General":
      case "medicina general":
        console.log("El turno para hacer chequeo General cuesta $2000")
        precio= precio+2000 
        break;
      
      default:
        console.log("No hay Turnos para esa especialidad");
        break;  
    }
    entrada=prompt("Ingrsa las especialidades a las que quieres sacar turno y te diremos el monto de la cita (fin para ver el total).");
  }

  console.log("Total a pagar $" +precio);
}

calcular()
        