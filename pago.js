const formulario = document.getElementById('form-reg');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    alert("¡Compra exitosa!");
    formulario.reset();
    window.location.href = 'comprador.html';
});