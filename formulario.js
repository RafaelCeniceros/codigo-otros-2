console.log("estoy conectado al html"); //verificamos que el js este conectado al html correctamente


var formulario = document.querySelector("#formulario-asistentes"); // usamos el id para el formulario "formulario-asistentes"

formulario.onsubmit = function (event) { //se le cambio el nombre al argumento que recibe la funcion para mayor claridad

  event.preventDefault();//se ajustó el nombre y se uso la funcion correcta para evitar que se actualice la pag al hacer click en el boton
  console.log(formulario.elements); //imprimiendo para verificar el contenido de elements.

  /* 
   Se modifico el nombre de las variables para que sean mas facil de identficar
  */

   var nombreInput = formulario.elements[0];
   var edadInput = formulario.elements[1];
   var nacionalidadSelect = formulario.elements[2];
 
   var nombre = nombreInput.value;
   var edad = parseInt(edadInput.value); // Convertir a número
   var nacionalidad = nacionalidadSelect.options[nacionalidadSelect.selectedIndex].value;
 
   console.log(nombre, edad);
   console.log(nacionalidad);
 
   // Se agregó las siguientes dos lineas para limpiar clases de error antes de cada validación
   nombreInput.classList.remove("error");
   edadInput.classList.remove("error");
 
   // Validar nombre
   if (nombre.length === 0) {
     nombreInput.classList.add("error"); // Se agregará la clase de error si el nombre está vacío
   }
   // validar edad
   if ( edad < 18 || edad > 120) {
     edadInput.classList.add("error"); // Se agregará la clase de error si la edad está fuera del rango
   }
 
   // Verificar todas las condiciones antes de agregar el invitado
   if ((nombre.length > 0) && (edad >= 18) && (edad <= 120) ){
     agregarInvitado(nombre, edad, nacionalidad); // Llamar a la función agregarInvitado si todas las condiciones son verdaderas
   }
 };

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados")

  var elementoLista = document.createElement("div")
  elementoLista.classList.added("elemento-lista")
  lista.appendChild(elementoLista)

  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}