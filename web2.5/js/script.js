var correo = document.getElementById("correo");
var boton = document.getElementById("ingresar");

function validar_boton(){
    if(correo.value != ""){
        boton.disabled = false;
    }else{
        boton.disabled = true;
    }
}

function saludo(){
    alert("a");
}
