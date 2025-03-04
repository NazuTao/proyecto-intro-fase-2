const loginButton = document.querySelector('#login-button');

loginButton.addEventListener('click', () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsers = [
        { user: "root", pass: "dochouse", redirect: "admin.html" },
        { user: "seller456", pass: "Intro123", redirect: "comprador.html" },
        { user: "dancabello", pass: "J5*asdRD.s", redirect: "vendedor.html" }
    ];

    const foundUser = validUsers.find(u => u.user === username && u.pass === password);

    if (foundUser) {
        window.location.href = foundUser.redirect;
    } else {
        alert("Datos incorrectos");
    }
});