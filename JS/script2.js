function bienvenida(){
    alert ("Bienvenidos a Pulseras")
}
 
bienvenida()


//Ciclo con for

let nombrePulseraMujer1 ="Pulsera1"
let precioPulseraMujer1 = 150
let stockPulseraMujer1 = 10

let nombrePulseraMujer2 ="Pulsera2"
let precioPulseraMujer2 = 200
let stockPulseraMujer2 = 20

let nombrePulseraHombre1 ="Pulsera3"
let precioPulseraHombre1 = 250
let stockPulseraHombre1 = 15

let nombrePulseraHombre2 ="Pulsera4"
let precioPulseraHombre2 = 300
let stockPulseraHombre2 = 15

let precioTotal = 0

alert("Estos son nuestras pulseras: \n - Pulsera1\n - Pulsera2\n - Pulsera3\n - Pulsera4")

let cantidadCompra = prompt("Que cantidad de pulseras quiere comprar:")

for(let i = 0; i < cantidadCompra; i = i + 1){

let productoCompra = prompt("Ingrese que pulseras quiere comprar: \n - Pulsera1\n - Pulsera2\n - Pulsera3\n - Pulsera4")


if(productoCompra.toLowerCase() == 'pulsera1'){
   let cantidadProductoPulsera1 = prompt("Ingrese que cantidad de " + nombrePulseraMujer1 + " desea comprar:")
   if(cantidadProductoPulsera1 <=stockPulseraMujer1){
      precioTotal = precioTotal + (cantidadProductoPulsera1 * precioPulseraMujer1)
   }
   else{
      alert("Actualmente tenemos " + stockPulseraMujer1 + " unidades de este producto")
   }
}
else if(productoCompra.toLowerCase() == 'pulsera2'){
   let cantidadProductoPulsera2 = prompt("Ingrese que cantidad de " + nombrePulseraMujer2 + " desea comprar:")
   if(cantidadProductoPulsera2 <=stockPulseraMujer2){
      precioTotal = precioTotal + (cantidadProductoPulsera2 * precioPulseraMujer2)
   }
   else{
      alert("Actualmente tenemos " + stockPulseraMujer2 + " unidades de este producto")
   }

}
else if(productoCompra.toLowerCase() == 'pulsera3'){
   let cantidadProductoPulsera3 = prompt("Ingrese que cantidad de " + nombrePulseraHombre1 + " desea comprar:")
   if(cantidadProductoPulsera3 <=stockPulseraHombre1){
      precioTotal = precioTotal +  (cantidadProductoPulsera3 * precioPulseraHombre1)
   }
   else{
      alert("Actualmente tenemos " + stockPulseraHombre1 + " unidades de este producto")
   }

} 
else if(productoCompra.toLowerCase() == 'pulsera4'){
    let cantidadProductoPulsera4 = prompt("Ingrese que cantidad de " + nombrePulseraHombre2 + " desea comprar:")
    if(cantidadProductoPulsera4 <=stockPulseraHombre2){
       precioTotal = precioTotal +  (cantidadProductoPulsera4 * precioPulseraHombre2)
    }
    else{
       alert("Actualmente tenemos " + stockPulseraHombre2 + " unidades de este producto")
    }
 } 
}
if(precioTotal != 0){  
   alert ("El precio total es: " + precioTotal)
}
