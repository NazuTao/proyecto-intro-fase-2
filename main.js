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

function publicarProducto() {
    const nombreproducto = document.querySelector('input[placeholder="Nombre del producto"]').value.trim();
    const precioproducto = document.querySelector('input[placeholder="Precio"]').value.trim();
    const categoriaproducto = document.querySelector('input[placeholder="Categoria"]').value.trim();
}

