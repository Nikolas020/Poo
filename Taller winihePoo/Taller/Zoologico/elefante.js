import Animal from "./animal.js";

class Elefante extends Animal {
    constructor(nombre) {
        super(nombre, "Elefante");
    }

    accion() {
        return `${this.nombre} está trompeteando: ¡Toot!`;
    }
}

export {Elefante};
