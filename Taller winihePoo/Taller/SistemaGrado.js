class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Alumno extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificaciones = [];
    }
    agregarCalificacion(calificacion) {
        this.calificaciones.push(calificacion);
    }
    calcularPromedio() {
        if (this.calificaciones.length === 0) {
            return "No hay calificaciones.";
        }
        let suma = this.calificaciones.reduce((acc, curr) => acc + curr, 0);
        return suma / this.calificaciones.length;
    }
    listarCalificaciones() {
        return this.calificaciones;
    }
}
class Grado {
    constructor(tipoGrado) {
        this.tipoGrado = tipoGrado;
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumno.push(alumno);
    }

    calcularPromedioCurso() {
        if (this.alumnos.length === 0) {
            return "No hay alumnos en el grado.";
        }
        let suma = this.alumno.reduce((acc, alumno) => acc + alumno.calcularPromedio(), 0);
        return suma / this.alumno.length;
    }
}

class GradOnline extends Grado {
    constructor() {
        super("Grado Online");
    }
}

class GradoPresencial extends Grado {
    constructor() {
        super("Grado Presencial");
    }
}


let alumno;
let grado;

document.querySelector("#AgregarAlumno").addEventListener("click", function() {
    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector("#edad").value;


    alumno = new Alumno(nombre, edad);

    document.querySelector("#Resultado").textContent = `Alumno ${nombre}, Edad: ${edad} agregado.`;

    document.querySelector("#nombre").value = "";
    document.querySelector("#edad").value = "";
});

document.querySelector("#AgregarGrado").addEventListener("click", function() {
    let tipoGrado = document.querySelector("#tipoGrado").value;

    if (tipoGrado === "online") {
        grado = new GradOnline();
    } else {
        grado = new GradoPresencial();
    }

    document.querySelector("#Resultado").textContent = `${tipoGrado.charAt(0).toUpperCase() + tipoGrado.slice(1)} agregado.`;
});

document.querySelector("#AgregarAlumno").addEventListener("click", function() {
    if (grado && alumno) {
        grado.agregarAlumno(alumno);
        document.querySelector("#Resultado").textContent = `alumno ${alumno.nombre} agregado al grado ${grado.tipoGrado}.`;
    } else {
        document.querySelector("#Resultado").textContent = "Primero agregue un grado y un alumno.";
    }
});

document.querySelector("#AgregarCalificacion").addEventListener("click", 
    function() {
    let calificacion = parseFloat(document.querySelector("#calificacion").value);
    
    if (alumno) {
        alumno.agregarCalificacion(calificacion);
        document.querySelector("#Resultado").textContent = `Calificación ${calificacion} agregada.`;
    } else {
        document.querySelector("#Resultado").textContent = "Primero agregue un alumno.";
    }

    document.querySelector("#calificacion").value = "";
    actualizarListaCalificaciones();
});

document.querySelector("#MostrarPromedio").addEventListener("click", function() {
    if (alumno) {
        let promedio = alumno.calcularPromedio();
        document.querySelector("#Resultado").textContent = `Promedio del alumno: ${promedio}`;
    } else {
        document.querySelector("#Resultado").textContent = "Primero agregue un alumno.";
    }
});

function actualizarListaCalificaciones() {
    let lista = document.querySelector("#listaCalificaciones"); 
    lista.innerHTML = ""; 

    alumno.listarCalificaciones().forEach(function(calificacion) {
        let li = document.createElement("li");
        li.textContent = `Calificación: ${calificacion}`;
        lista.appendChild(li);
    });
}
