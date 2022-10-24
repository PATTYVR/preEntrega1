const listaDeProductos = [
   {
      id: 1,
      nombre: 'Pulsera1',
      imagen: '../imagenes/6.jfif',
      precio: 150,
      stock: 10
  },
  {
      id: 2,
      nombre: "Pulsera2",
      imagen: '../imagenes/3.gif',
      precio: 120,
      stock: 10
  },
  {
      id: 3,
      nombre: "Pulsera3",
      imagen: '../imagenes/4.jpg',
      precio: 200,
      stock: 10
  },
  {
      id: 4,
      nombre: "Pulsera4",
      imagen: '../imagenes/5.jfif',
      precio: 230,
      stock: 1
  },
  {
      id: 5,
      nombre: "Pulsera5",
      imagen: '../imagenes/7.jpg',
      precio: 250,
      stock: 12
  },

  {
   id: 6,
   nombre: "Pulsera6",
   imagen: '../imagenes/8.gif',
   precio: 50,
   stock: 12
},

{
    id: 7,
    nombre: "Pulsera7",
    imagen: '../imagenes/9.jfif',
    precio: 50,
    stock: 12
 }
];

let catalog = document.getElementById('items')
let cartList = document.getElementById('carrito')
let buttonEmpty = document.getElementById('boton-vaciar')
let totalValue = document.getElementById('total')


let cart = []  

buttonEmpty.addEventListener('click', emptyButtonHandler)


loadCartFromStorage()
renderCart()

listaDeProductos.forEach((prod) =>{

    let container = document.createElement('div')
    container.classList.add('card', 'col-sm-3')

    //Body

    let cardBody = document.createElement("div")
    cardBody.classList.add('card-body')

    //Title(titulo)

    let cardTitle = document.createElement("h5")
    cardTitle.classList.add('card-title')
    cardTitle.innerText = prod.nombre   

    //Imagen

   let imagen = document.createElement('img');
    imagen.classList.add('img-fluid');
    imagen.setAttribute('src', prod.imagen);
 

   


    //Precio

    let cardPrice = document.createElement("p")
    cardPrice.classList.add('card-text')
    cardPrice.innerText = `$${prod.precio}`

    //Stock

    let cardStock = document.createElement("p")
    cardStock.classList.add('card-text')
    cardStock.innerText = `Stock: ${prod.stock}`

    //Button

    let cardButton = document.createElement("button")
    cardButton.classList.add('btn', 'btn-primary')
    cardButton.innerText = `Comprar`
    cardButton.setAttribute('mark', prod.id)  
    cardButton.addEventListener('click', addProdToCart)

    


    cardBody.append(imagen)
    cardBody.append(cardTitle)
    cardBody.append(cardPrice)
    cardBody.append(cardStock)
    cardBody.append(cardButton)
    container.append(cardBody)
    catalog.append(container)
})

function addProdToCart(event){
    cart.push(event.target.getAttribute('mark'))  
    renderCart()
}

function renderCart(){

    saveCartToStorage()

    cartList.innerHTML = ' ' 
                               

    let carWithoutRepeatedElements = [...new Set(cart)] 

    carWithoutRepeatedElements.forEach((itemId) => { 
        let item = listaDeProductos.filter((producto) => {  
            return producto.id === parseInt(itemId)
        })
        let quantity = cart.reduce((total, id) => {
            return id === itemId ? total += 1 : total   
        }, 0)


    let linea = document.createElement('li')
    linea.classList.add('list-group-item', 'text-right', 'mx-2')
    linea.innerHTML = `${quantity} x ${item[0].nombre} $${item[0].precio}  <img class="imagenCompra"src="${item[0].imagen}"></img>`
    

    let buttonDelete = document.createElement('button')
    buttonDelete.classList.add('btn', 'btn-danger', 'mx-5')
    buttonDelete.innerText ='Eliminar'  // para borrar los producto
    buttonDelete.dataset.item = itemId
    buttonDelete.addEventListener('click', deleteProduct)

    
    linea.append(buttonDelete)
    cartList.append(linea)

    }) 

    totalValue.innerText = calculateTotalPrice()

}    

function deleteProduct(event){   // es para eliminar producto por producto
    let id = event.target.dataset.item
    cart = cart.filter((cartId) => {
        return cartId != id 
    })
    renderCart()
    

}

function emptyButtonHandler(){  // es para eliminar todos los productos elegidos
    cart = []
//renderCart()   // puede ser  renderCart()  o  cartList.innerHTML = ' '

cartList.innerHTML = ' '
totalValue.innerText = 0  // es cuando vaciamos el carrito eso hace que el total tb quede en cero
}

function calculateTotalPrice(){  // es para sumar el total de precios de los prodcutos
    return cart.reduce((total, itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })

        return total + item[0].precio
    }, 0)

    
}

function saveCartToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))

}

function loadCartFromStorage(){
    if(localStorage.getItem('cart') !== null){
    cart = JSON.parse(localStorage.getItem('cart'))
    }
}










