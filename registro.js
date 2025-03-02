const formularioregistro = document.querySelector('#form-reg');
formularioregistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;

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