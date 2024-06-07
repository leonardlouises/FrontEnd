var imagenes = new Array('images/imagen1.jpg', 'images/imagen2.jpg', 'images/imagen3.jpg', 'images/imagen4.jpg', 'images/imagen5.jpg');
var descripcion = new Array('lago con bosque', 'bosque y montañas', 'valle', 'lago y montañas', 'montañas');
var fondo = document.querySelector("#fondo");
var texto = document.querySelector("#texto");
var num = 0;

document.querySelector("#atras").addEventListener("click",atras);
document.querySelector("#delante").addEventListener("click", delante);
document.addEventListener("keydown", function(event){
    if(event.key == "ArrowLeft"){
        atras();
    }
    else if(event.key == "ArrowRight"){
        delante();
    }
})

function atras(){
    num--;
    if(num < 0){
        num = imagenes.length-1;
    }
    fondo.src = imagenes[num];
    document.body.style.backgroundImage = "url("+imagenes[num]+")";
    texto.textContent = "paisaje "+(num+1)+": "+descripcion[num];
}

function delante(){
    num++;
    if(num >= imagenes.length){
        num = 0;
    }
    fondo.src = imagenes[num];
    document.body.style.backgroundImage = "url("+imagenes[num]+")";
    texto.textContent = "paisaje "+(num+1)+": "+descripcion[num];
}