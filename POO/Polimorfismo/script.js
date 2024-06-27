class Personaje{
     constructor(nombre, ta){
        this.nombre = nombre;
        this.tipoAtaque = ta;
     }

     atacar(){
        return "Estoy atacando sin nada";
     }
}
class Mago extends Personaje{
    constructor(nombre, ta){
        super(nombre, ta);
    }

    atacar(){
        return this.nombre+" está atacando con "+this.tipoAtaque;
    }
}

class Guerrero extends Personaje{
    constructor(nombre, ta){
        super(nombre, ta);
    }

    atacar(){
        return this.nombre+" está atacando con "+this.tipoAtaque;
    }
}

var personajes = new Array(
    new Personaje("Alex", "físico"),
    new Mago("Merlín", "magia"),
    new Guerrero("Julius", "espada")
);

for(let i = 0; i < personajes.length; i++){
    document.write(personajes[i].atacar()+"<hr>");
}