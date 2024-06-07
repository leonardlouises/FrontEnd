var numero = parseInt(prompt("introduce un número"));
var i;

for(i = 2; i <= numero; i++){
    if(i % 2 == 0){
        document.write(i+"\t");
    }
}