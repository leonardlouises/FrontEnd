var numero1;
var numero2;
var operador;
var pantalla = document.getElementById("calculo");
var pantalla_resultado = document.getElementById("resultado");

function escribir(num){
    pantalla.value = pantalla.value + num;
}

function operacion(op){
    if(op != "="){
        operador = op;
        numero1 = pantalla.value;
        pantalla.value = "";
    }
    else if(op == "="){
        if(numero1 != ""){
        numero2 = pantalla.value;
        pantalla.value = (numero1 + operador + numero2)
        pantalla_resultado.value = op + eval(numero1 + operador + numero2);
        }
    }
}

function limpiar(){
    numero1 = "";
    numero2 = "";
    pantalla.value = "";
    pantalla_resultado.value = "";
    operador = "";
}