class Rectangulo{

    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularPerimetro(){
        return 2*(this.ancho + this.alto);
    }

    calcularArea(){
        return this.ancho * this.alto;
    }
}

class Cuadrado extends Rectangulo{

    constructor(lado){
        super(lado, lado);
    }
}

var rectangulo1 = new Rectangulo(4, 6);
var cuadrado1 = new Cuadrado(5);

document.write("el perímetro del rectángulo es: "+rectangulo1.calcularPerimetro()+" y el área es de: "+rectangulo1.calcularArea()+"<br>");
document.write("el perímetro del cuadrado es: "+cuadrado1.calcularPerimetro()+" y el área es de: "+cuadrado1.calcularArea());