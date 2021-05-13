
var boton = document.querySelector("button")
var body = document.querySelector("body")
var seEjecutaEnEvento = function(callback) { 
    body.insertAdjacentHTML("beforeend", "<p>SOY UN PARRAFO NUEVO</p>")
    body.classList.toggle("color") }

boton.addEventListener("click",seEjecutaEnEvento)
 

  

