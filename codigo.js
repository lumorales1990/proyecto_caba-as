
class Cabaña {
    constructor(id, nombre, precio, foto) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}

class ElementoReserva {
    constructor(cabañas, cantidad) {
        this.cabañas = cabañas;
        this.cantidad = cantidad;
    }
}


// ARRAYS


const cabañas = [];
const elementosReserva = [];


const contenedorReservas =document.getElementById("contenedor-reservas");
const contenedorReservasListas =document.querySelector("#items");
const contenerdorFooterReservas =document.querySelector("#footer");

// FUNCIONES

cargarReservas();
realizarCatalogoReservas();


function cargarReservas(){
  cabañas.push(new Cabaña(1, "Cabaña para 6 personas", 20000, "./imagenes/imagencabaña1.jpg"));
  cabañas.push(new Cabaña(2, "Cabaña para 5 personas", 25000, "./imagenes/imagencabaña2.jpg"));
  cabañas.push(new Cabaña(3, "Cabaña para 4 personas", 15000, "./imagenes/imagencabaña3.jpg"));
  cabañas.push(new Cabaña(4, "Cabaña para 3 personas", 10000, "./imagenes/imagennieve.jpg"));
}

const datosCabañas = (numero, precio) => localStorage.setItem(numero, precio);
  for (const cabaña of cabañas){
    datosCabañas (cabaña.id, JSON.stringify (cabaña));
  }


function realizarCatalogoReservas(){
  contenedorReservas.innerHTML ="";

  cabañas.forEach(
    (cabaña) =>{
      let carta = crearCard(cabaña);
      contenedorReservas.append(carta);
    }
  );
}

function crearCard(cabañas){

  let botonAgregar =document.createElement("button");
  botonAgregar.className = "btn btn-success";
  botonAgregar.innerText = "Reservar";
  localStorage.setItem("Reserva", JSON.stringify((cabañas)));

  let cuerpoCarta =document.createElement("div");
  cuerpoCarta.className = "card-body";
  cuerpoCarta.innerHTML =`
         <h5>${cabañas.nombre}</h5>
         <p>${cabañas.precio}</p>
  `;
  cuerpoCarta.append(botonAgregar);

  // IMAGEN

    let imagen =document.createElement("img");
    imagen.src = cabañas.foto;
    imagen.className = "card-img-top";
    imagen.alt = cabañas.nombre;

    let carta =document.createElement("div");
    carta.className = "card m-3 p-3";
    carta.style = "widht: 18rem";
    carta.append(imagen);
    carta.append(cuerpoCarta);


    // EVENTOS

    botonAgregar.onclick = (e) =>{

       let  elementoReserva = new ElementoReserva(cabañas, 1);
      elementosReserva.push(elementoReserva);

      dibujarReserva()

      swal("Reserva Agregada", {
        buttons: ["Verifica en el Carrito!", true],
      })

    }

    return carta;

}

function dibujarReserva(){

    contenedorReservasListas.innerHTML = "";

    let totalReserva = 0;


    elementosReserva.forEach(
        (elemento) => {
          let renglonReserva =document.createElement("tr");

          renglonReserva.innerHTML = `
              <td>${elemento.cabañas.id}</td>
              <td>${elemento.cabañas.nombre}</td>
              <td><input id="cantidad-producto-${elemento.cabañas.id}" type= "number" value="${elemento.cantidad}" min="1" max="1000" step="1"/></td>
              <td>${elemento.cabañas.precio}</td>
              <td>${elemento.cabañas.precio*elemento.cantidad}</td>
          `;

          totalReserva+=elemento.cabañas.precio*elemento.cantidad;

          contenedorReservasListas.append(renglonReserva);

          let inputCantidadReservas = document.getElementById(`cantidad-producto-${elemento.cabañas.id}`);

          inputCantidadReservas.addEventListener("change", (e) =>{
            let nuevaCantidad = e.target.value;
            elemento.cantidad = nuevaCantidad;
            dibujarReserva();
          });
      }
   );
   
   if(elementosReserva.length == 0){
    contenerdorFooterReservas.innerHTML = `<th scope="row" colspan="5">Reservas Vacias - Comenza a Reservar!</th>`;
   }
}

localStorage.setItem("Cancelacion Permitida", true); 