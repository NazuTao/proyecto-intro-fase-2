function publicarProducto() {
    const nombreproducto = document.querySelector('input[placeholder="Nombre del producto"]').value.trim();
    const precioproducto = document.querySelector('input[placeholder="Precio"]').value.trim();
    const categoriaproducto = document.querySelector('input[placeholder="Categoria"]').value.trim();
}

const productos = [
    // domesticos
    {
        id: "licuadora-01",
        titulo: "Domestico 01",
        imagen: "./img/domesticos/01.jpg",
        categoria: {
            nombre: "Domesticos",
            id: "domesticos"
        },
        precio: 55
    },
    {
        id: "aspiradora-02",
        titulo: "Domestico 02",
        imagen: "./img/domesticos/02.jpg",
        categoria: {
            nombre: "Domesticos",
            id: "domesticos"
        }, 
        precio: 80
    },
    {
        id: "lavadora-03",
        titulo: "Domestico 03",
        imagen: "./img/domesticos/03.jpg",
        categoria: {
            nombre: "Domesticos",
            id: "domesticos"
        },
        precio: 110
    },
    {
        id: "nevera-04",
        titulo: "Domestico 04",
        imagen: "./img/domesticos/04.jpg",
        categoria: {
            nombre: "Domesticos",
            id: "domestico"
        },
        precio: 150
    },
    //dispositivos
    {
        id: "telefono-01",
        titulo: "Dispositivo 01",
        imagen: "./catalogo de productos/dispositvos/01.JPG",
        categoria: {
            nombre: "Dispositos",
            id: "dispositivos"
        },
        precio: 170
    },
    {
        id: "telefono-02",
        titulo: "Dispositivo 02",
        imagen: "./catalogo de productos/dispositvos/02.JPG",
        categoria: {
            nombre: "Dispositos",
            id: "dispositivos"
        },
        precio: 190
    },
    {
        id: "tablet-03",
        titulo: "Dispositivo 03",
        imagen: "./catalogo de productos/dispositvos/03.jpg",
        categoria: {
            nombre: "Dispositos",
            id: "dispositivos"
        },
        precio: 210
    },
    {
        id: "audifonos-04",
        titulo: "Dispositvo 04",
        imagen: "./catalogo de productos/dispositvos/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 58
    },
        //vehiculos

    {
        id: "bicicleta-01",
        titulo: "Vehiculos 01",
        imagen: "./catalogo de productos/vehiculos/01.jpg",
        categoria: {
            nombre: "Vehiculos",
            id: "vehiculos"
        },
        precio: 150
    },
    {
        id: "patineta-02",
        titulo: "Vehiculos 02",
        imagen: "./catalogo de productos/vehiculos/02.jpg",
        categoria: {
            nombre: "Vehiculos",
            id: "vehiculos"
        },
        precio: 120
    },
    {
        id: "motocicleta-03",
        titulo: "Vehiculos 03",
        imagen: "./catalogo de productos/vehiculos/03.jpg",
        categoria: {
            nombre: "Vehiculos",
            id: "vehiculos"
        },
        precio: 1300
    },
    {
        id: "carro-04",
        titulo: "Vehiculos 04",
        imagen: "./catalogo de productos/vehiculos/04.jpg",
        categoria: {
            nombre: "Vehiculos",
            id: "vehiculos"
        },
        precio: 3500
    },
];

const contenedorProductos = document.querySelector ("#contenedor-productos");

function cargarProductos(){
    productos.forEach(producto => {
        const div=document.createElement("div");
        div.classList.add("producto");
        div.innerHTML=`
            <img class="producto-imagen" src="${producto.imagen}" alt="">
         <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.imagen}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <p class="producto-categoria">Dispositivos</p>
            <button class="producto-agregar">id="${producto.id}"</button>
         </div> `;
         contenedorProductos.append(div);
    } )
}
cargarProductos();