class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    informacion() {
        return `${this.titulo} - Autor: ${this.autor}`;
    }
}
class LibroDigital extends Libro {
    constructor(titulo, autor, plataforma) {
        super(titulo, autor);
        this.plataforma = plataforma;
    }
    informacion() {
        return `${this.titulo} (Digital) - Plataforma: ${this.plataforma} - Autor: ${this.autor}`;
    }
}
class LibroFisico extends Libro {
    constructor(titulo, autor, fechaPublicacion) {
        super(titulo, autor);
        this.fechaPublicacion = fechaPublicacion;
    }
    informacion() {
        return `${this.titulo} (Físico) - Publicado en: ${this.fechaPublicacion} - Autor: ${this.autor}`;
    }
}
let biblioteca = [];
document.querySelector("#registrar").addEventListener("click", function() {
    let titulo = document.querySelector("#titulo").value;
    let autor = document.querySelector("#autor").value;
    let tipoLibro = document.querySelector("#tipo").value;
    if (tipoLibro === "digital") {
        let plataforma = document.querySelector("#plataforma").value;
        let libroDigital = new LibroDigital(titulo, autor, plataforma);
        biblioteca.push(libroDigital);
    } else if (tipoLibro === "fisico") {
        let fechaPublicacion = document.querySelector("#fechaPublicacion").value;
        let libroFisico = new LibroFisico(titulo, autor, fechaPublicacion);
        biblioteca.push(libroFisico);
    }
 mostrarLibros();
});
function mostrarLibros() {
    let lista = document.querySelector("#List");
    lista.innerHTML = '';

    biblioteca.forEach(function(libro) {
        let li = document.createElement('li');
        li.textContent = libro.informacion();
        lista.appendChild(li);
    });
}

function buscarLibrosAutor(autorBuscado) {
    let listA = document.querySelector("#Autores");
    listA.innerHTML = ''; 
    let librosEncontrados = biblioteca.filter(libro => libro.autor.toLowerCase() === autorBuscado.toLowerCase());
    if (librosEncontrados.length > 0) {
        librosEncontrados.forEach(function(libro) {
            let li = document.createElement('li');
            li.textContent = libro.informacion();
            listA.appendChild(li);
        });
    } else {
        let li = document.createElement('li');
        li.textContent = 'No hay libros con este autor: ' + autorBuscado;
        listA.appendChild(li);
    }
}

document.querySelector("#buscarA").addEventListener('click', function() {
    let autorBuscado = document.querySelector("#buscarAutor").value;
    buscarLibrosAutor(autorBuscado);
});
