var numero = 1;
var suma = 0;

while(numero != 0){
    numero = parseInt(prompt("Introduce un número"));
    suma += numero;
}

document.write("La suma es: "+suma);