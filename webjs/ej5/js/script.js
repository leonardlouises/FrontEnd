var imagenes =  new Array('images/imagen1.jpg', 'images/imagen2.jpg', 'images/imagen3.jpg');
var fondo = document.body;
var inp = document.getElementById("texto");
var num = 0;

function cambio_fondo(){
    if(num > 2){
        num = 0;
    }
    fondo.style.backgroundImage = "url("+imagenes[num]+")";
    num++;
}