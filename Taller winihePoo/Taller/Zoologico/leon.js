import Animal from "./animal.js";

class Leon extends Animal {
    constructor(nombre) {
        super(nombre, "León");
    }

    accion() {
        return `${this.nombre} está rugiendo: ¡Roar!`;
    }
}

export  {Leon};