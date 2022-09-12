// PRIMER FORMULARIO

// PRIMER FORMULARIO

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", validarFormulario)

function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const opinion = document.querySelector("#opinion").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent=`
        Hola ${nombre} Gracias por dejarnos tu comentario ${opinion}`;
}




// SEGUNDO FORMULARIO

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_ory47em';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      Swal.fire(
        'Tu Mensaje Fue Enviado con éxito',
        'Te contetaremos en Breve',
        'success'
      );
  }, (err) => {
      btn.value = 'Send EmailEnviar Mensaje';
      alert(JSON.stringify(err));
    });
});