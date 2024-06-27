class Persona{

    constructor(nombre, edad, telefono){

        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }       

    mostrarDatos(){

        return "Nombre: "+this.nombre+", edad: "+this.edad+", teléfono: "+this.telefono;
    }
}

class Alumno extends Persona{

    constructor(nombre, edad, telefono, numeroMatricula, fechaMatricula){

        super(nombre, edad, telefono);
        this.numeroMatricula = numeroMatricula;
        this.fechaMatricula = fechaMatricula;
    }

    mostrarDatos(){
    
        return super.mostrarDatos()+", número de matrícula: "+this.numeroMatricula+", fecha de matrícula: "+this.fechaMatricula;
    }
}

var personas = new Array(
    new Persona("Juan", 34, 54456679),
    new Persona("Jordan", 40, 52456224),
    new Alumno("Ana", 21, 56366354, 1102, "25/4/2022"),
    new Alumno("José", 19, 59673812, 1304, "20/2/2023")
    );

for(let i = 0; i < personas.length; i++){

    document.write(personas[i].mostrarDatos()+"<hr>");
}