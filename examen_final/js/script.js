
document.getElementById("boton").addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    if(nombre != '' && apellido != ''){
        alert("Accediendo");
    }
    else{
        alert("Es necesario rellenar todos los campos");
    }
});

function fecha(){
    let ver = document.getElementById("fecha").textContent;
    if(ver == "Mostrar fecha"){
        let hoy = new Date();
        document.getElementById("fecha").textContent = "La fecha es: "+hoy;
    }
    else{
        document.getElementById("fecha").textContent = "Mostrar fecha";
    }
}