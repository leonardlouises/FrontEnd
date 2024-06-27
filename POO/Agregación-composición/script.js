class Libro{

    constructor(titulo, autor, genero, paginas){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.paginas = paginas;
    }

    getTitulo(){
        return this.titulo;
    }

    getAutor(){
        return this.autor;
    }

    getGenero(){
        return this.genero;
    }

    getPaginas(){
        return this.paginas;
    }
}

class Biblioteca{

    constructor(nombre){
        this.nombre = nombre;
        this.libros = new Array();
    }

    agregarLibro(libro){
        this.libros.push(libro);
    }

    longitud(){
        return this.libros.length;
    }

    mostrar(pos){
        return this.libros[pos];
    }
}

var biblioteca1 = new Biblioteca("mi biblioteca");

document.querySelector("#agregar").addEventListener("click", function(){
    let titulo = document.querySelector("#titulo").value;
    let autor = document.querySelector("#autor").value;
    let genero = document.querySelector("#genero").value;
    let paginas = document.querySelector("#paginas").value;
    if(titulo==""||autor==""||genero==""||paginas==""){
        alert("Es obligatorio llenar todos los campos");
    }
    else{
        biblioteca1.agregarLibro(new Libro(titulo, autor, genero, paginas));
        document.querySelector("#titulo").value = "";
        document.querySelector("#autor").value = "";
        document.querySelector("#genero").value = "";
        document.querySelector("#paginas").value = "";
        info();
    }
});

function info(){
    
    var pri = true;
    var datos = "";

    for(let i = 0; i < biblioteca1.longitud(); i++){
        if(pri){
            datos += "<tr><th>Título</th><th>Autor</th><th>Género</th><th>Cantidad de páginas</th></tr>";
            pri = false;
        }
        datos += "<tr><td>"+biblioteca1.mostrar(i).getTitulo()+"</td>"+
        "<td>"+biblioteca1.mostrar(i).getAutor()+"</td>"+
        "<td>"+biblioteca1.mostrar(i).getGenero()+"</td>"+
        "<td>"+biblioteca1.mostrar(i).getPaginas()+"</td></tr>"
    }

    document.querySelector("#t_info").style.display = "block";
    document.querySelector("#info").innerHTML = datos;
}
