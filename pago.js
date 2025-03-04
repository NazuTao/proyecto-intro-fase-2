const formulario = document.getElementById('form-reg');

formulario.addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    const numeroTarjeta = document.getElementById('numeroTarjeta').value.trim();
    const titularTarjeta = document.getElementById('titularTarjeta').value.trim();
    const cvvTarjeta = document.getElementById('cvvTarjeta').value.trim();
    const fechaVencimiento = document.getElementById('fechaVencimiento').value.trim();

    if (!numeroTarjeta || !titularTarjeta || !cvvTarjeta || !fechaVencimiento) {
        alert("Rellena todos los campos para continuar.");
        return; 
    }

    alert("Compra exitosa.");
    formulario.reset(); 
    window.location.href = 'comprador.html';
});