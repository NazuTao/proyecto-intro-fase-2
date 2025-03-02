function loguear() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "root" && pass === "dochouse") {
        window.location.href = "admin.html";
        return;
    }
    if (user === "seller456" && pass === "Intro123") {
        window.location.href = "comprador.html";
        return;
    }
    if (user === "dancabello" && pass === "J5*asdRD.s") {
        window.location.href = "admin.html";
        return;
    } else {
        alert("Datos incorrectos");
    }
}