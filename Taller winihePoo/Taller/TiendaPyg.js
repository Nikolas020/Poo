
class Masacota {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    mostrarInformacion() {
       return `Nombre: ${this.nombre}, Tipo: ${this.tipo}`;
    }
    hacerAccion() {
       return `${this.nombre} está haciendo algo.`;
    }
}
class Perro extends Masacota {
    constructor(nombre) {
        super(nombre, 'Perro');  
    }
    ladrar() {
       return `${this.nombre} está ladrando: ¡Guau guau!`;
    }
    hacerAccion() {
        return this.ladrar();  
    }
}
class Gato extends Masacota {
    constructor(nombre) {
        super(nombre, 'Gato');  
    }
    maullar() {
       return `${this.nombre} está maullando:¡Miau miau!`;
    }
    hacerAccion() {
        return this.maullar();  
    }
}
let Masacotas = [];
document.querySelector('#Agregar').addEventListener('click', function() {
    let nombre = document.querySelector('#nombre').value;
    let tipoP = document.querySelector('#tipo').value;  
    let Masacota;
    if (tipoP === 'Perro') {
       Masacota = new Perro(nombre);
    } else if (tipoP === 'Gato') {
      Masacota = new Gato(nombre);
    }
    if (Masacota) {
        Masacotas.push(Masacota);
        actualizarLista();
    }
})
function actualizarLista(){
    let lista = document.querySelector("#listaM");
    Masacotas.forEach(function(Masacota){
        let li = document.createElement('li');
        li.textContent= `${Masacota.nombre}, ${Masacota.tipo} - ${Masacota.hacerAccion()}`;
        lista.appendChild(li);  
    });
}
