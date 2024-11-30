class Transporte{
    constructor(capacidad,tipoCombustible){
        this.capacidad=capacidad;
        this.tipoCombustible=tipoCombustible;
    }
    mostrarInformacion(){
        return `capacidad: ${this.capacidad}-tipo de combustible: ${this.tipoCombustible}`
    }
}
class Autobus extends Transporte{
    constructor(capacidad,tipoCombustible){
        super(capacidad,tipoCombustible);
    }
    arrancar(){
        return "El autobus sed fueeeee:)"
    }
}
class Bicicleta extends Transporte{
    constructor(capacidad){
        super(capacidad);
    }

    manejar(){
        return "La bicicleta esta sin cadena:)"
    }
}
class Otro extends Transporte{
    constructor(tipo,capacidad,tipoCombustible){
        super(capacidad,tipoCombustible);
        this.tipo=tipo;
    }
    mostrarInformacion(){
        return `${tipo} capacidad: ${this.capacidad} tipo de Combustible: ${this.tipoCombustible}`
    }
}
let transportes = [];
function mostrarAcciones() {
    let lista = document.querySelector("#result");
    lista.innerHTML='';
    transportes.forEach(function(transporte) {
        let li = document.createElement('li');
        if (transporte instanceof Autobus) {
            li.textContent= `Autobús: ${transporte.mostrarInformacion()} - ${transporte.arrancar()}<br>`;
        } else if (transporte instanceof Bicicleta) {
             li. textContent = `Bicicleta: ${transporte.mostrarInformacion()} - ${transporte.manejar()}<br>`;
        } else if (transporte instanceof Otro) {
            li.textContent = `${transporte.mostrarInfo()} - ${transporte.realizarAccion()}<br>`;
        }
        lista.appendChild(li)
    });
}
document.querySelector('#agregarTransporte').addEventListener('click', function() { 
    let tipo = document.querySelector('#tipo').value;
    let capacidad = parseInt(document.querySelector('#capacidad').value);
    let combustible = document.querySelector('#combustible').value;
    let otroTipo = document.querySelector('#otroTipo').value;
    if (tipo === 'autobus') {
        let nuevoAutobus = new Autobus(capacidad, combustible);
        transportes.push(nuevoAutobus);
    } else if (tipo === 'bicicleta') {
        let nuevaBicicleta = new Bicicleta(capacidad);
        transportes.push(nuevaBicicleta);
    } else if (tipo === 'otro') {
        let nuevoTransporte = new Otro(otroTipo, capacidad, combustible);
        transportes.push(nuevoTransporte);
    }
    mostrarAcciones();
});