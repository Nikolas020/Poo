class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    accion() {
        return `${this.nombre} está haciendo algo.`;
    }
}
export  default Animal;