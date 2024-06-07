var texto;

function resaltar_texto(sub, text){
    texto = document.getElementById(text);
    if(sub.style.color != "yellow"){
        sub.style.color = "yellow";
        texto.style.fontWeight = "bold";
        texto.style.fontSize = "18px";
    }
    else{
        sub.style.color = "white";
        texto.style.fontWeight = "normal";
        texto.style.fontSize = "14px";
    }
}
