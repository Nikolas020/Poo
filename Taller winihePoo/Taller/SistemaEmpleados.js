
class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, sueldo) {
        super(nombre, sueldo);
    }

    calcularSueldo(horasTrabajadas) {
        return this.sueldo * horasTrabajadas;
    }
}


class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre, sueldo) {
        super(nombre, sueldo);
    }

    calcularSueldo(horasTrabajadas) {
        return (this.sueldo * horasTrabajadas) /2; 
    }
}

let empleados = [];


function mostrarSueldos() {
    let lista = document.getElementById("listaEmpleados");
    lista.innerHTML = ''; 

    empleados.forEach(empleado => {
        let horasTrabajadas = empleado.horasTrabajadas;
        let sueldoTotal = empleado.calcularSueldo(horasTrabajadas);
        
        let li = document.createElement("li");
        li.textContent = `${empleado.nombre}, Sueldo Total: ${sueldoTotal} por ${horasTrabajadas} horas`;
        lista.appendChild(li);
    });
}


document.getElementById("agregar").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;
    let sueldo = parseFloat(document.getElementById("sueldo").value);
    let tipoEmpleado = document.getElementById("Tipo").value;
    let horasTrabajadas = parseFloat(document.getElementById("horas").value);

    let nuevoEmpleado;
    if (tipoEmpleado === "tiempoCompleto") {
        nuevoEmpleado = new EmpleadoTiempoCompleto(nombre, sueldo);
    } else {
        nuevoEmpleado = new EmpleadoMedioTiempo(nombre, sueldo);
    }

    nuevoEmpleado.horasTrabajadas = horasTrabajadas;
    empleados.push(nuevoEmpleado);
    mostrarSueldos();


});
