let carro = JSON.parse(localStorage.getItem("carro"))||[];
let carrito=[];
let productosJSON=[];

let lista=document.getElementById("milista");


renderizarReserva();

function renderizarReserva(){
  console.log(productosJSON)  
  for(const res of productosJSON){ 
    lista.innerHTML +=`<li class="col-sm-3 list-group-item">
          <h3> ID: ${res.id} </h3>
          <img src=${res.foto} height="250" width="250">
          <h5> Nombre: ${res.nombre}</h5>
          <p><strong> $ ${res.precio}</strong></p>
          <button class="btn btn-danger" id="btn${res.id}">RESERVAR</button>

      </li>`;
    }  

      // ACCION DE LOS BOTONES
    productosJSON.forEach(res =>{
      document.getElementById(`btn${res.id}`).addEventListener("click", function(){
      agregarReserva(res)
    });

   });
}

// PASOS PARA ELIMANR DEL CARRO

function agregarReserva(reservaNueva){
  let encontrado = carrito.find(r => r.id == reservaNueva);
    console.log(encontrado);
    if (encontrado == undefined){
      let reserva = {
        ...reservaNueva,
        cantidad:1
      };
        carrito.push(reserva);
        console.log(carrito);
        Swal.fire(
          'Agregaste la Reserva al Carrito',
          'Desea Reservar?',
          'success'
        );

        document.getElementById("tablabody").innerHTML+=(`
              <tr id='fila${reserva.id}'>
              <td> ${reserva.id} </td>
              <td> ${reserva.nombre}</td>
              <td id='${reserva.id}'> ${reserva.precio}</td>
              <td> ${reserva.cantidad}</td>
              <td><button id="eliminar${reserva.id}" class="fa-solid fa-trash-can">🗑️</i></button></td`);

              const eliminarReserva = document.getElementById(`eliminar${reserva.id}`);
              eliminarReserva.addEventListener("click", function(){
              
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: reserva.nombre+" "+'eliminado!',
                  showConfirmButton: false,
                  timer: 2500,
                  toast : true
                })
                  
              })
    }else{
      let posicion = carrito.findIndex(r => r.id == reservaNueva.id);
      console.log(posicion);
      carrito[posicion].cantidad +=1;
      document.getElementById(reservaNueva.id).innerHTML=carrito[posicion].cantidad;
    }

    document.getElementById("gastoTotal").innerText=(`Total: $ ${calcularTotal()}`);
    localStorage.setItem("carrito", JSON.stringify(carrito));

}

// PASOS PARA SOLICITAR EL TOTAL


function calcularTotal(){
  let suma = 0;
  for (const elemento of carrito){
    suma = suma + (elemento.precio * elemento.cantidad);
  }

  return suma;
}



// fetch para solicitar.JSON

async function obtenerproductosJSON(){
  const URLJSON="Productos.json";
  const resp=await fetch(URLJSON)
  const data=await resp.json()
  productosJSON= data;
  renderizarReserva()
}

obtenerproductosJSON()


// BOTON PARA FINALIZAR LA COMPRA

const finalizarCompra=document.getElementById("finish");
finalizarCompra.addEventListener("click", (e) =>{
    e.preventDefault( ) ;
    if(carrito.length === 0){
        swal('Elegí un producto!');
    }else{
        swal({
            position: 'center',
            icon: "success",
            text: 'Puedes retirar tu pedido luego de 5 dias hábiles',
            title: 'Gracias por tu compra',
            button: true,
            
       })
    
    carrito =[]
    items.innerHTML= "";
    localStorage.removeItem("carrito",JSON.stringify(carrito));
    agregarReserva();
}
})