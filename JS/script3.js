function bienvenida(){
    alert ("Bienvenidos a Aretes")
}
 
bienvenida()

//Metodo filter  y mao

function Producto(nombre, precio, stock){
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

let arete1 = new Producto("Arete1", 40, 15)
let arete2 = new Producto("Arete2", 45, 0)
let arete3 = new Producto("Arete3", 55, 13)
let arete4 = new Producto("Arete4", 48, 14)
let arete5 = new Producto("Arete5", 46, 0)
let arete6 = new Producto("Arete6", 56, 20)

let listaAretes = [arete1, arete2, arete3, arete4, arete5, arete6]

let listaAretesConStock = listaAretes.filter((prod) => prod.stock > 0)

let listaNombre = listaAretesConStock.map ((prod) => prod.nombre)

console.log(listaAretesConStock)

console.log (listaNombre)








/*let precioTotal = 0 


alert("Estos son nuestros aretes: \n - Arete1\n - Arete2\n - Arete3")
let opcion = prompt("Ingrese que es lo que desee comprar o ESC para salir")

while(opcion != "ESC"){

if(opcion == 'Arete1'){
   let cantidadProductoArete1 = prompt("Ingrese que cantidad de " + nombreArete1 + " desea comprar:")
   if(cantidadProductoArete1 <= stockArete1){
      precioTotal = precioTotal + (cantidadProductoArete1 * precioArete1)
   }
   else{
      alert("Actualmente tenemos " + stockArete1 + " unidades de este producto")
   }
}
else if(opcion == 'Arete2'){
   let cantidadProductoArete2 = prompt("Ingrese que cantidad de " + nombreArete2 + " desea comprar:")
   if(cantidadProductoArete2 <= stockArete2){
      precioTotal = precioTotal + (cantidadArete2 * precioArete2)
   }
   else{
      alert("Actualmente tenemos " + stockArete2 + " unidades de este producto")
   }

}
else if(opcion == 'Arete3'){
   let cantidadProductoArete3 = prompt("Ingrese que cantidad de " + nombreArete3 + " desea comprar:")
   if(cantidadProductoArete3 <= stockArete3){
      precioTotal = precioTotal +  (cantidadProductoArete3 * precioArete3)
   }
   else{
      alert("Actualmente tenemos " + stockArete3 + " unidades de este producto")
   }
} 
 opcion = prompt("Ingrese que producto quiere comprar: \n - Arete1\n - Arete2\n - Arete3\n - ESC")
}
if(precioTotal != 0){  
   alert ("El precio total es: " + precioTotal)
}*/