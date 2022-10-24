





























// push y join 

/*function Producto(nombre, precio, stock){   
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;  
    this.restarStock = function(cantidad){  
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){ 
        this.stock += cantidad 
    }
}

let cadenaA = new Producto("Cadena1", 200, 20)
let cadenaB = new Producto("Cadena2", 180, 10)
let cadenaC = new Producto("Cadena3", 220)
let cadenaD = new Producto("Cadena4", 242, 5)
let cadenaE = new Producto("Cadena5", 225, 0)


let listaCadenas = [cadenaA, cadenaB, cadenaC, cadenaD, cadenaE]

let listaNombres = [] 

for(const prod of listaCadenas){  
    if(prod.stock > 0){
    listaNombres.push(prod.nombre)
    }
}

alert("Estos son nuestros productos: \n - " + listaNombres.join("\n - ")) */