// EMPEZAR CARRITO DE RESERVAS

const estandarDolaresAmericanos = Intl.NumberFormat("en-US");
// LLAMADO A RENDERIZAR

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
          <button id="finalizar" class="btn btn-black" class"fas fa-alt" onclick="Eliminar ${res.id}">🗑️</button>
      </li>`;
    }  
  // ACCION DE LOS BOTONES
    productosJSON.forEach(res =>{
      document.getElementById(`btn${res.id}`).addEventListener("click", function(){
      agregarReserva(res)
    });

   })
}

function agregarReserva(reserva){
    carrito.push(reserva);
    Swal.fire(
      'Agregaste la Reserva al Carrito',
      'Desea Reservar?',
      'success'
    );
    document.getElementById("tablabody").innerHTML+=`
      <tr>
        <td>${reserva.id}</td>
        <td>${reserva.nombre}</td>
        <td>${reserva.precio}</td>
      </tr>
    
    `;
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

