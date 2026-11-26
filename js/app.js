//=============================== EJERCICIO 1 ==========================================


const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const mensaje = document.getElementById("mensaje");

saludar.addEventListener("click", () => {
  const nombreLimpio = nombre.value.trim();

  if (nombreLimpio === "") {
    mensaje.textContent = "Por favor, escribe tu nombre primero para poder saludarte.";
    nombre.focus();
    return;
  }

  mensaje.textContent = `¡Hola, ${nombreLimpio}! Bienvenida.`;
});

//=============================== EJERCICIO 2 ==========================================

const boton = document.getElementById("contador");
const reiniciar = document.getElementById("reiniciarcontador");
const contadorMensaje = document.getElementById("contador-mensaje");
let contador = 0;

boton.addEventListener("click", () => {
  contador++;
  contadorMensaje.textContent = `Has hecho clic ${contador} veces`;
   contadorMensaje.style.color = "black";

  if (contador >= 10) {
    contadorMensaje.style.color = "green";
  }
});

reiniciar.addEventListener("click", () => {

    contadorMensaje.textContent = `Has hecho clic ${contador=0} veces`

})

//=============================== EJERCICIO 3 ==========================================

const textomismo = document.getElementById("textomismo");
const textomismoMensaje = document.getElementById("textomismo-mensaje");

textomismo.addEventListener("input", () => {
  const textoIngresado = textomismo.value.trim();

  if (textoIngresado === "") {
    textomismoMensaje.textContent = "Por favor, escribe algo en el área de texto.";
    return;
  }

  textomismoMensaje.textContent = `Texto ingresado: ${textoIngresado}`;
});

