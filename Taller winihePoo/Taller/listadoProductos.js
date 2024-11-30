class Producto {
    constructor(nombre, precio, cantidadEnStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }
}

class Electrodomestico extends Producto {
    constructor(nombre, precio, cantidadEnStock, marca) {
        super(nombre, precio, cantidadEnStock);
        this.marca = marca;
    }
}

let productos = [];


document.querySelector("#agregarProducto").addEventListener("click", function() {
    let nombre = document.querySelector("#nombre").value;
    let precio = parseFloat(document.querySelector("#precio").value);
    let cantidadEnStock = parseInt(document.querySelector("#cantidad").value);
    let marca = document.querySelector("#marca").value;

    let producto;


    if (marca) {
        producto = new Electrodomestico(nombre, precio, cantidadEnStock, marca);
    } else {
        producto = new Producto(nombre, precio, cantidadEnStock);
    }

    productos.push(producto);


    document.querySelector("#nombre").value = "";
    document.querySelector("#precio").value = "";
    document.querySelector("#cantidad").value = "";
    document.querySelector("#marca").value = "";


    actualizarListaProductos();
});


document.querySelector("#listarBajoStock").addEventListener("click", function() {
    let listaBajoStock = document.querySelector("#listaBajoStock");
    listaBajoStock.innerHTML = ""; 

    productos.forEach( function(producto) {
        if (producto.cantidadEnStock < 10) {
            let li = document.createElement("li");
            if (producto instanceof Electrodomestico) {
                li.textContent = `${producto.nombre} - Precio: $${producto.precio}, Stock: ${producto.cantidadEnStock}, Marca: ${producto.marca}`;
            }
            listaBajoStock.appendChild(li);
        }
    });

});


function actualizarListaProductos() {
    let listaProductos = document.querySelector("#listaProductos");
    listaProductos.innerHTML = "";

    productos.forEach(function(producto) {
        let li = document.createElement("li");
        if (producto instanceof Electrodomestico) {
            li.textContent = `${producto.nombre} - Precio: $${producto.precio}, Stock: ${producto.cantidadEnStock}, Marca: ${producto.marca}`;
        } else {
            li.textContent = `${producto.nombre} - Precio: $${producto.precio}, Stock: ${producto.cantidadEnStock}`;
        }
        listaProductos.appendChild(li);
    });
}
