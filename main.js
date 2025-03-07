document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout'); 
    logoutButton.addEventListener('click', () => {
        const confirmacion = confirm('¿Estás seguro de que deseas cerrar sesión?');

        if (confirmacion) {
            window.location.href = 'login.html';
        } else {
            console.log('Logout cancelado');
        }
    });
});

document.querySelectorAll(".eliminar").forEach(button => {
    button.addEventListener("click", (e) => {
        const confirmacion = confirm("¿Estás seguro de que quieres eliminar este producto?");
        if (confirmacion) {
            const row = e.target.closest("tr");
            row.remove();
            verificarProductos();
        }
    });
});

document.querySelectorAll(".ocultar-producto").forEach(button => {
    button.addEventListener("click", (e) => {
        const row = e.target.closest("tr");
        const disponibilidadCell = row.querySelector("td:nth-child(3)");

        if (button.textContent === "Ocultar") {
            disponibilidadCell.textContent = "Oculto";
            button.textContent = "Mostrar";
        } else if (button.textContent === "Mostrar") {
            disponibilidadCell.textContent = "Disponible";
            button.textContent = "Ocultar";
        }
    });
});

function verificarProductos() {
    const filas = document.querySelectorAll('tr');
    const tabla = document.querySelector('table');

    const productosActivos = Array.from(filas).filter(row => row.querySelector('td'));

    if (productosActivos.length === 0) {
        const mensaje = document.createElement('p');
        mensaje.textContent = 'Ya no hay productos activos.';
        mensaje.id = 'mensaje-usuarios';
        mensaje.classList.add('mensaje-vacio');
        tabla.parentNode.appendChild(mensaje);
    }
}
function publicarProducto() {
    const nombreProducto = document.getElementById('nombre-producto').value.trim();
    const precioProducto = document.getElementById('precio-producto').value.trim();
    const categoriaProducto = document.getElementById('categoria-producto').value.trim();
    const imagenProducto = document.getElementById('img-producto').files.length > 0;

    if (nombreProducto && precioProducto && categoriaProducto && imagenProducto) {
        alert('Producto publicado.');
        window.location.href = "gestionar_productos_vendedor.html";
    } else {
        alert('Rellene todos los campos antes de publicar.');
    }
}

const productos = [
    {
        id: "licuadora-01",
        titulo: "Domestico 01",
        imagen: "sources/lista-productos/05.JPG",
        categoria: {
            nombre: "Domesticos",
            id: "domesticos"
        },
        precio: 55
    },
    {
        id: "aspiradora-02",
        titulo: "Domestico 02",
        imagen: "sources/lista-productos/06.JPG",
        categoria: {
            nombre: "Domesticos",
            id: "domesticos"
        }, 
        precio: 80
    },
    {
        id: "lavadora-03",
        titulo: "Domestico 03",
        imagen: "sources/lista-productos/07.JPG",
        categoria: {
            nombre: "Domesticos",
            id: "domesticos"
        },
        precio: 110
    },
    {
        id: "nevera-04",
        titulo: "Domestico 04",
        imagen: "sources/lista-productos/08.JPG",
        categoria: {
            nombre: "Domesticos",
            id: "domestico"
        },
        precio: 150
    },
    //dispositivos
    {
        id: "telefono-01",
        titulo: "Dispositivo 01",
        imagen: "sources/lista-productos/01.JPG",
        categoria: {
            nombre: "Dispositivos",
            id: "dispositivos"
        },
        precio: 170
    },
    {
        id: "telefono-02",
        titulo: "Dispositivo 02",
        imagen: "sources/lista-productos/02.JPG",
        categoria: {
            nombre: "Dispositivos",
            id: "dispositivos"
        },
        precio: 190
    },
    {
        id: "tablet-03",
        titulo: "Dispositivo 03",
        imagen: "sources/lista-productos/03.JPG",
        categoria: {
            nombre: "Dispositivos",
            id: "dispositivos"
        },
        precio: 210
    },
    {
        id: "audifonos-04",
        titulo: "Dispositvo 04",
        imagen: "sources/lista-productos/04.JPG",
        categoria: {
            nombre: "Dispositivos",
            id: "dispositivos"
        },
        precio: 58
    },

    {
        id: "bicicleta-01",
        titulo: "Vehiculos 01",
        imagen: "sources/lista-productos/09.JPG",
        categoria: {
            nombre: "Vehiculos",
            id: "vehiculos"
        },
        precio: 150
    },
    {
        id: "patineta-02",
        titulo: "Vehiculos 02",
        imagen: "sources/lista-productos/10.JPG",
        categoria: {
            nombre: "Vehiculos",
            id: "vehiculos"
        },
        precio: 120
    },
];

const contenedorProductos = document.querySelector ("#contenedor-productos");

function cargarProductos(){
    productos.forEach(producto => {
        const div=document.createElement("div");
        div.classList.add("producto");
        div.innerHTML=`
            <img class="producto-imagen" src="${producto.imagen}" alt="">
         <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.imagen}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <p class="producto-categoria">Dispositivos</p>
            <button class="producto-agregar">id="${producto.id}"</button>
         </div> `;
         contenedorProductos.append(div);
    } )
}
cargarProductos();
