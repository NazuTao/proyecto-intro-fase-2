 let productos = JSON.parse(localStorage.getItem('productos')) || [];

 const listaProductos = document.getElementById('listaProductos');
 const precioTotalElement = document.getElementById('precioTotal');

 function mostrarProductos() {
     listaProductos.innerHTML = ''; 
     let precioTotal = 0;

     if (productos.length === 0) {
         listaProductos.innerHTML = '<p class="condicional">No hay productos seleccionados.</p>';
     } else {
         productos.forEach((producto, index) => {
             const subtotal = producto.precio * producto.cantidad;
             precioTotal += subtotal;

             listaProductos.innerHTML += `
                 <div class="producto-lista">
                     <img src="${producto.imagen}" alt="${producto.nombre}">
                     <div>
                         <p>${producto.nombre} - $${producto.precio} x ${producto.cantidad} = $${subtotal}</p>
                         <button class="eliminar" onclick="eliminarProducto(${index})">Eliminar</button>
                     </div>
                 </div>
             `;
         });
     }

     precioTotalElement.textContent = precioTotal;
 }

 function eliminarProducto(index) {
     productos.splice(index, 1); 
     localStorage.setItem('productos', JSON.stringify(productos)); 
     mostrarProductos(); 
 }

 function confirmarCompra() {
     if (productos.length === 0) {
         alert("No hay productos en la lista para confirmar la compra.");
         return;
     } else{
        window.location.href = 'formulario-compra.html';
    }

     localStorage.removeItem('productos');
     productos = []; 
     mostrarProductos(); 
 }

 mostrarProductos();