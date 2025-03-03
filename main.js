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
        const confirmacion = confirm("¿Estas seguro de que quieres eliminar este producto?");
        if (confirmacion) {
            const row = e.target.closest("tr");
            row.remove();
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

function publicarProducto() {
    const nombreproducto = document.querySelector('input[placeholder="Nombre del producto"]').value.trim();
    const precioproducto = document.querySelector('input[placeholder="Precio"]').value.trim();
    const categoriaproducto = document.querySelector('input[placeholder="Categoria"]').value.trim();
}



