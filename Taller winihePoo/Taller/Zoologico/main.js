import {Leon} from "./leon.js";
import {Elefante} from "./elefante.js";
import {Tigre} from "./tigre.js";


let animales = [
    new Leon("Simba"),
    new Elefante("Dumbo"),
    new Tigre("Shere Khan")
];


function actualizarListaAnimales() {
    let lista = document.querySelector("#listaAnimales");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    animales.forEach(function(animal) {
        let li = document.createElement("li");
        li.textContent = `${animal.especie} llamado ${animal.nombre}`;
        lista.appendChild(li);
    });
}

// Mostrar la lista de animales al cargar la página
window.onload = function() {
    actualizarListaAnimales();
}

// Ejecutar la acción de cada animal usando polimorfismo
document.querySelector("#accionAnimal").addEventListener("click", function() {
    let resultado = "";
    animales.forEach(function(animal)  {
        // Polimorfismo: Se llama al método accion() de cada animal
        resultado += `${animal.accion()}<br>`;
    });
    document.querySelector("#Resultado").innerHTML = resultado;
});
