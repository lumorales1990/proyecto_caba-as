// // SALUDO

// function bienvenidos(){
//     alert("Bienvenidos a nuestro complejo Villa Vistalba");
//   }
  
//   bienvenidos();
  
//   class Turista {
//     constructor(nombre, apellido, estacion, fecha) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.estacion = estacion;
//         this.fecha = fecha;
//     }
//   }
  
//   const fecha =[
//     { nombre: "diciembre", precio: 20000 },
//     { nombre: "junio", precio: 10000 },
//     { nombre: "septiembre", precio: 15000 },
//   ];
  
  
//   const turistas = [];
//   turistas.push(new Turista("LUCIANA", "MORALES" , "verano", 16));
//   turistas.push(new Turista("JERONIMO", "LOPEZ" , "invierno", 18));
//   turistas.push(new Turista("MARTINA", "NEUMANN" , "primavera", 12));
//   turistas.push(new Turista("AGUSTINA", "PEREZ" , "verano", 15));
//   turistas.push(new Turista("PAULA", "GOMEZ" , "verano", 27));
//   console.table(turistas);
  
  
//   let seleccion = prompt("Desea pedir una fecha en nuestras instalaciones")
  
  
//   while(seleccion != "si" && seleccion != "no"){
//     alert("por favor ingresa si o no")
//     seleccion = prompt("hola desea un fecha si o no")
//   }
  
//   if(seleccion = "si"){
//     alert("te mostramos nuestras fechas de cada estacion")
//     let todaslasfechas = fecha.map((fecha) => fecha.nombre + " " + fecha.precio + "$")
//     alert(todaslasfechas.join(" - "))
//   }else if (seleccion = "no"){
//     alert("Gracias por elegirnos, Hasta Pronto")
//   }
  
  
//   function buscarTurista(fecha, turistas){
//     const turistaEncontrado = fecha.find((fech)=>fech.nombre == turistas);
//       return turistaEncontrado;
//   }
  
//   for (let i=1;i<=3;i++){
//     let turistaBuscado=prompt("Ingresa el nombre del turista").toUpperCase();
//     const encontrado=buscarTurista(turistas, turistaBuscado);
//     if(encontrado != undefined){
//         console.log(encontrado);
//     }else{
//         console.log("turista no encontrado");
//     }
    
//   }
  
//   function filtroTuristas(estacion, fecha){
//     const listaTuristas = estacion.filter((turista)=>turista.fecha == fecha);
//     return listaTuristas;
//   }
  
  
//   for(let i=1;i<=5;i++){
//     let fechaBuscada=parseInt(prompt("Ingresa la fecha que deseas venir"));
//     const turistasTurno=filtroTuristas(turistas,fechaBuscada);
//     if(turistasTurno.length!=0){
//         console.table(turistasTurno);
//     }else{
//         console.log("No tenemos esa fecha disponible");
//     }
    
//   }
  
//   const turistasYfecha=turistas.map((turista)=>{
//     return {
//         nombre: turista.nombre.toLowerCase(),
//         lesionado: turista.fecha
//     }
//   })
  
//   console.table(turistasYfecha);
  