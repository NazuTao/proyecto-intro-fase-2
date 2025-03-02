document.addEventListener('DOMContentLoaded', () => {
    const tablaUsuarios = document.querySelector('.tabla-usuarios tbody');

    const usuariosLocalStorage = JSON.parse(localStorage.getItem('users')) || [];

    usuariosLocalStorage.forEach((usuario) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${usuario.username}</td>
            <td>${usuario.email}</td>
            <td>${usuario.role}</td>
            <td>
                <button class="eliminar">Eliminar</button>
            </td>
        `;
        tablaUsuarios.appendChild(fila);
    });

    tablaUsuarios.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar')) {
            const fila = e.target.closest('tr');
            const nombreUsuario = fila.querySelector('td').textContent;

            const usuariosActualizados = usuariosLocalStorage.filter((usuario) => usuario.username !== nombreUsuario);
            localStorage.setItem('users', JSON.stringify(usuariosActualizados));

            fila.remove();

            if (tablaUsuarios.querySelectorAll('tr').length === 0) {
                const mensaje = document.createElement('p');
                mensaje.textContent = 'No hay usuarios existentes.';
                mensaje.id = 'mensaje-usuarios';
                mensaje.classList.add('mensaje-vacio')
                tablaUsuarios.parentNode.appendChild(mensaje);
            }
        }
    });
});