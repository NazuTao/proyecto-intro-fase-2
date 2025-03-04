const registerButton = document.querySelector('#register-button');

registerButton.addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();
    const role = document.getElementById("role").value.trim();

    if (!username || !password || !email || !role) {
        return alert('Por favor, rellena todos los campos obligatorios.');
    }

    if (role !== "Vendedor" && role !== "Comprador") {
        return alert('El rol debe ser "Vendedor" o "Comprador".');
    }

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const userRegistered = Users.find(user => user.email === email) || Users.find(user => user.username === username);

    if (userRegistered) {
        return alert('Correo o nombre de usuario en uso');
    }

    Users.push({ username: username, email: email, password: password, role: role });
    localStorage.setItem('users', JSON.stringify(Users));
    alert('Registro Exitoso');
    window.location.href = 'login.html';
});