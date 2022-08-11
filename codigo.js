
// DOM EN JS



const reservas = {
  "cabaña1":{
    "id": 1,
    "nombre": "Tierra Malbec",
    "personas": 6,
    "precio": 20000
  },

  "cabaña2":{
    "id": 2,
    "nombre": "Tierra sauvignon",
    "personas": 2,
    "precio": 15000
  },

  "cabaña3":{
    "id": 3,
    "nombre": "Tierra Cabernet",
    "personas": 4,
    "precio": 25000
  }
}

const contenedor = document.getElementById("vista")


const tarjetas = () => {
for (let cabaña in reservas){
  contenedor.innerHTML +=
  `
    <div class="cabañas">
    <div class="cabañas-titulo">Cabañas Para Relajarte</div>
    <div class="cabaña-nombre">${reservas[cabaña].nombre}</div>
    <div class="cabaña-nombre">${reservas[cabaña].personas}</div>
    <div class="cabaña-nombre">${reservas[cabaña].precio}</div>
  `
}
}
tarjetas()

miBoton.onclick = () => {
  console.log ("Agregaste la reserva");
}


