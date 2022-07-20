let turno = prompt("Ingresa tu nombre y te dire el numero de consultorio \nLuciana\nPaula\nClarisa\nJeronimo (ESC-para sali)");
while(turno!="ESC"){
    switch(turno){
        case "Luciana":
            console.log("El consultorio es el 4");
            break;
            case "Paula":
                console.log("El consultorio es el 6");
                break;
                case "Clarisa":
                    console.log("El consultorio es el 7");
                    break;
                    case "Jeronimo":
                        console.log("El consultorio es el 3");
                        break;
                        default:
                            console.log("No tenemos mas turnos");
    }

    turno=prompt("Ingresa tu nombre y te dire el numero de consultorio (ESC-para salir)")
}
