var imagen = document.querySelectorAll("img")
var boton = document.querySelectorAll("button")
var map ={};

for(var i=0 ; i < imagen.length; i++){
    imagen[i].classList.add("oculto")
}

for(var i=0 ; i < boton.length ; i++){
   map[boton[i].id] = imagen[i];
   var b = boton[i];
   b.addEventListener("click" ,function (){
        map[this.id].classList.remove("oculto")
    })
}

for(var i = 0 ; i < imagen.length; i++)    {
    imagen[i].addEventListener("click" , function(){
        this.classList.toggle("oculto")
    })
}

