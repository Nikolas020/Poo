import Animal from "./animal.js";

class Tigre extends Animal {
    constructor(nombre) {
        super(nombre, "Tigre");
    }

    accion() {
        return `${this.nombre} está gruñendo: ¡Grrr!`;
    }
}

export  {Tigre};
