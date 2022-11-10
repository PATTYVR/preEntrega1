

   const agregarCarrito = () => {
    modalContainer.innerHTML="";
    modalContainer.style.display = "flex";

    
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML =  `
    <h1><iconify-icon icon="el:shopping-cart" style="color: #f72585;" width="50" height="50"></h1>`;

    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () =>{
        modalContainer.style.display = "none";
    });
    modalHeader.append(modalButton);

    

    carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = ` 
    <img class="imagen-carrito" src =${product.imagen}>
    <h3>${product.nombre}</h3>
    <p>${product.precio} </p>
    <p>Cantidad: ${product.cantidad}</p>
    <span class="restar"> - </span>  
    <span class="sumar"> + </span> 
    <p>Total: ${product.cantidad* product.precio}</p>
    <span class="eliminar-product"> Eliminar </span>
    
    `;

    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click", () => {
      if(product.cantidad !==1){
      product.cantidad--;
      }
      saveLocal();
      agregarCarrito();
    });
    
    let sumar = carritoContent.querySelector(".sumar");

    sumar.addEventListener("click", () => {
      product.cantidad++;
  
      agregarCarrito();
      saveLocal();
    });

    let eliminar = carritoContent.querySelector(".eliminar-product");
    eliminar.addEventListener("click", () => {
      eliminarProducto(product.id);

      
    });

 
   });
 
   



   const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

   const totalBuying = document.createElement("div")
   totalBuying.className = "total-content"
   totalBuying.innerHTML = `Total a pagar: ${total} `;
   modalContainer.append(totalBuying);

   const vaciarCarrito = document.createElement("button")
   vaciarCarrito.className ="vaciar-carrito"
   vaciarCarrito.innerHTML =`Vaciar `,
   modalContainer.append(vaciarCarrito);

   vaciarCarrito.addEventListener("click", () =>{
    carrito.length = 0
    carritoCounter();
    saveLocal();
    agregarCarrito();

    Toast.fire({
      icon: 'info',
      title: 'El carrito se vació correctamente'
      });

   });


   
};



  verCarrito.addEventListener("click", agregarCarrito);


  const eliminarProducto = (id) => {
   
    const foundId = carrito.find((element) =>element.id === id);
    carrito = carrito.filter((carritoId) => {
  
        return carritoId !== foundId;
    });
  
    carritoCounter();
    saveLocal();
    agregarCarrito();

    Toast.fire({
      icon: 'warning',
      title: 'Eliminastes este producto'
    })


    

  };

  const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  

