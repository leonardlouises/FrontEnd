var moneda1 = document.querySelector("#inicial");
var moneda2 = document.querySelector("#final")
var cantidad = document.querySelector("#cantidad");
var resultado = document.querySelector("#resultado");
var calculo;

function calcular(){
    if(moneda1.value != 1){
        calculo = moneda1.value * cantidad.value;
    }
    else if(moneda1.value == moneda2.value){
        calculo = cantidad.value;
    }
    else{
        calculo = cantidad.value / moneda2.value;
    }
    
    resultado.textContent = cantidad.value + " = " + calculo + ".00";
}
