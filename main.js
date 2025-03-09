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

