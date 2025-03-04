function actualizarContador() {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const contador = document.getElementById('contadorProductos');
    const totalProductos = productos.reduce((total, producto) => total + producto.cantidad, 0);
    contador.textContent = totalProductos;
}

function agregarProducto(producto) {
    producto.cantidad = 1;

    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    const productoExistente = productos.find(p => p.id === producto.id);
        if (productoExistente) {       
            productoExistente.cantidad += 1;
        } else {
            productos.push(producto);
        }

    localStorage.setItem('productos', JSON.stringify(productos));

    actualizarContador();

    alert(`Se agregó 1 unidad de "${producto.nombre}" a la lista.`);
}

function agregarVarios(producto) {
    const cantidad = parseInt(prompt(`¿Cuántas unidades de "${producto.nombre}" deseas agregar?`, 1));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad no válida. Debe ser un número mayor que 0.");
        return;
    }

    producto.cantidad = cantidad;

    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    const productoExistente = productos.find(p => p.id === producto.id);

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        productos.push(producto);
    }

    localStorage.setItem('productos', JSON.stringify(productos));

    actualizarContador();

    alert(`Se agregaron ${cantidad} unidades de "${producto.nombre}" a la lista.`);
}

actualizarContador();
