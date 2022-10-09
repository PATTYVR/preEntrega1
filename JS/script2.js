function bienvenida(){
    alert ("Bienvenidos a Pulseras")
}
 
bienvenida()


//Objetos

function Producto(nombre, precio, stock){
   this.nombre = nombre;
   this.precio = precio;
   this.stock = stock || 0;
   this.restarStock = function(cantidad){
      this.stock -= cantidad
   }
}

let pulseraMujer1  = new Producto("Pulsera1", 150, 10)
let pulseraMujer2  = new Producto("Pulsera2", 200, 15)
let pulseraMujer3  = new Producto("Pulsera3", 230, 14)
let pulseraHombre1 = new Producto("Pulsera4", 250, 15)
let pulseraHombre2 = new Producto("Pulsera5", 300, 0)
let pulseraHombre3 = new Producto("Pulsera6", 320, 16)

let precioTotal = 0

alert("Estos son nuestras pulseras: \n - Pulsera1\n - Pulsera2\n - Pulsera3\n - Pulsera4\n - Pulsera5\n - Pulsera6")

function calculoPrecio(cantidad, precio){
precioTotal += (cantidad * precio) 
}
function calculoStock(cantidad, stock, precio){
if(cantidad <= stock){
   calculoPrecio(cantidad, precio)
}
else{
   alert("Actualmente tenemos " + stock + "unidades de este producto")
}
}

let cantidadCompra = parseInt(prompt("Que cantidad de pulseras distintas desea comprar:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

   let productoCompra = prompt("Ingrese que pulsera quiere comprar: \n - Pulsera1\n - Pulsera2\n - Pulsera3\n - Pulsera4\n - Pulsera5\n - Pulsera6" )

   if (productoCompra.toLowerCase() == 'pulsera1'){
      let cantidadProductopulseraMujer1 = prompt("Ingrese que cantidad de " + pulseraMujer1.nombre + " desea comprar:")
      calculoStock(cantidadProductopulseraMujer1, pulseraMujer1.stock, pulseraMujer1.precio)
      pulseraMujer2.restarStock(cantidadProductopulseraMujer1)
   }

   else if (productoCompra.toLowerCase() == 'pulsera2') {
      let cantidadProductopulseraMujer2 = prompt("Ingrese que cantidad de " + pulseraMujer2.nombre + " desea comprar:")
      calculoStock(cantidadProductopulseraMujer2, pulseraMujer2.stock, pulseraMujer2.precio)
      pulseraMujer2.restarStock(cantidadProductopulseraMujer2)
   }

   else if (productoCompra.toLowerCase() == 'pulsera3') {
      let cantidadProductopulseraMujer3 = prompt("Ingrese que cantidad de " + pulseraMujer3.nombre + " desea comprar:")
      calculoStock(cantidadProductopulseraMujer3, pulseraMujer3.stock, pulseraMujer3.precio)
      pulseraMujer3.restarStock(cantidadProductopulseraMujer3)
   }
   else if (productoCompra.toLowerCase() == 'pulsera4') {
      let cantidadProductopulseraHombre1 = prompt("Ingrese que cantidad de " + pulseraHombre1.nombre + " desea comprar:")
      calculoStock(cantidadProductopulseraHombre1, pulseraHombre1.stock, pulseraHombre1.precio)
      pulseraHombre1.restarStock(cantidadProductopulseraHombre1)
   }

   else if (productoCompra.toLowerCase() == 'pulsera5') {
      let cantidadProductopulseraHombre2 = prompt("Ingrese que cantidad de " + pulseraHombre2.nombre + " desea comprar:")
      calculoStock(cantidadProductopulseraHombre2, pulseraHombre2.stock, pulseraHombre2.precio)
      pulseraHombre2.restarStock(cantidadProductopulseraHombre2)
   }

   else if (productoCompra.toLowerCase() == 'pulsera6') {
      let cantidadProductopulseraHombre3 = prompt("Ingrese que cantidad de " + pulseraHombre3.nombre + " desea comprar:")
      calculoStock(cantidadProductopulseraHombre3, pulseraHombre3.stock, pulseraHombre3.precio)
      pulseraHombre3.restarStock(cantidadProductopulseraHombre3)
   }

   else{
      alert("No tenemos esa joya a la venta")
      }
   }

   if(precioTotal !=0){
      alert("El precio total es: " + precioTotal)
   }
   else{
      alert("Gracias por su visita")
   }












