function bienvenida(){
    alert ("Bienvenidos a Aretes")
}
 
bienvenida()

let nombreArete1 = 'Arete1'
let precioArete1 = 35
let stockArete1 = 15

let nombreArete2 = 'Arete2'
let precioArete2 = 40
let stockArete2 = 10

let nombreArete3 = 'Arete3'
let precioArete3 = 25
let stockArete3 = 20

let precioTotal = 0 


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
}