

function Producto(nombre, precio, stock, img ){   
    this.nombre = nombre;
    this.precio = precio;
    this.img = img
    this.stock = stock || 0;  
    this.restarStock = function(cantidad){  
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){ 
        this.stock += cantidad 
    }
}

let productoA = new Producto("Reloj1", 100, 20, "../imagenes/pulsera1Hombre.jpg")
let productoB = new Producto("Reloj2", 150, 10, "../imagenes/pulsera1Hombre.jpg")
let productoC = new Producto("Reloj3", 120,10, "../imagenes/pulsera2Hombre.jpg")
let productoD = new Producto("Reloj4", 220, 5, "../imagenes/pulsera2Hombre.jpg")
let productoE = new Producto("Reloj5", 130, 20, "../imagenes/pulsera2Hombre.jpg")
let productoF = new Producto("Reloj6", 140, 10, "../imagenes/pulsera2Hombre.jpg")
let productoH = new Producto("Reloj7", 140, 10, "../imagenes/pulsera2Hombre.jpg")
let productoI = new Producto("Reloj8", 140, 10, "../imagenes/pulsera2Hombre.jpg")
let productoJ = new Producto("Reloj9", 140, 10, "../imagenes/pulsera2Hombre.jpg")


let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF, productoH, productoI, productoJ]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombre = listaProductosConStock.map((prod) => prod.nombre)

let precioTotal = 0

let catalogo = document.getElementById("catalogoRelojes")

for(const prod of listaProductosConStock){

let card = document.createElement("div")  // el createelement nos deja crear un elemento por el ej un div, en vez de crear en el html, lo creamos en el js

card.className = "card" 
card.innerHTML = `<img class="imagenReloj" src="${prod.img}"></img><h2>${prod.nombre}</h2><p>Precio: $${prod.precio}</p><p>Stock: $${prod.stock}</p><button id=botonCompra>Comprar</button>`   // ` se llama literales

catalogo.append(card) //append  te permite agregar en el catalogo que es el padre al elemento card que es el hijo osea dentro del catalogo
}
