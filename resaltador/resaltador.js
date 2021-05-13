var parrafos = document.querySelectorAll("p")

for(var i =0; i < parrafos.length ; i++){
    parrafos[i].addEventListener("click", function(callback){
        
        this.classList.toggle("resaltado")
    })
}
