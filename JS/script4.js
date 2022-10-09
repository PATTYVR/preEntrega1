
function bienvenida(){
    alert ("Bienvenidos a Accesorios")
}
 
bienvenida()


//push

let listaAccesorios = ["seguros de pulsera", "seguros de aretes", "argollas"]

let nombre = prompt("Ingrese el nombre del accesorio: ")
listaAccesorios.push(nombre)

for( let i = 0; i <listaAccesorios.length; i++){
    console.log(listaAccesorios[i])
}
