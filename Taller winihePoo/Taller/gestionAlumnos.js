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
        let suma = 0;
        if (this.calificaciones.length === 0) {
            return "No hay calificaciones.";
        }
        for (let i = 0; i < this.calificaciones.length; i++) {
            suma += this.calificaciones[i];
        }
        let promedio = suma / this.calificaciones.length;
        return promedio; 
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
    agregarAlumnos(alumnos) {
        this.alumnos.push(alumnos);
    }

    calcularPromedioGrado() {
        if (this.alumnos.length === 0) {
            return "No hay alumnos en el grado.";
        }
        let suma = 0;
        for (let i = 0; i < this.alumnos.length; i++) {
            suma += this.alumnos[i].calcularPromedio();
        }
        let promedio = suma / this.alumnos.length;
        return promedio;  
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
let alumnos;
let grado;
document.querySelector("#AgregarAlumnos").addEventListener("click", function() {
    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector("#edad").value;
    alumno = new Alumnos(nombre, edad);
    document.querySelector("#Resultado").textContent = `Alumno ${nombre}, Edad: ${edad} agregado.`;
    document.querySelector("#nombre").value = "";
    document.querySelector("#edad").value = "";
});
document.querySelector("#AgregarGrado").addEventListener("click", function() {
    let tipoGrado = document.querySelector("#tipoGrado").value;
    if (tipoGrado === "online") {
        grado = new GradoOnline();
    } else {
        grado = new GradoPresencial();
    }
});
document.querySelector("#AgregarAlumnoAlGrado").addEventListener("click", function() {
    if (grado && alumno) {
        grado.agregarAlumno(alumno);
        document.querySelector("#Resultado").textContent = `Alumno ${alumno.nombre} agregado al grado ${grado.tipogrado}.`;
    } else {
        document.querySelector("#Resultado").textContent = "Primero agregue un grado y un alumno.";
    }
});
document.querySelector("#AgregarCalificacion").addEventListener("click", function() {
    let calificacion = parseFloat(document.querySelector("#calificacion").value);
    calificacion.innerHTML = '';
    
    if (alumno) {
        alumno.agregarCalificacion(calificacion);
        document.querySelector("#Resultado").textContent = `Calificación ${calificacion} agregada.`;
    } else {
        document.querySelector("#Resultado").textContent = "Primero agregue un alumno.";
    }


 
    actualizarListaCalificaciones();
});

document.querySelector("#MostrarPromedio").addEventListener("click", function() {
    if (alumnos) {
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
