class Vehiculo{
    constructor(marca,modelo,año){
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
    }
    mostrarInformacion(){
        return`${this.marca} ${this.modelo} ${this.año}`
    }
}
class Auto extends Vehiculo{
    constructor(marca,modelo,año){
        super(marca,modelo,año)
    }
    conducir(){
        return `condiciendo el auto ${this.mostrarInformacion()}`
    }
}
class Moto extends Vehiculo{
    constructor(marca,modelo,año){
        super(marca,modelo,año)
    }
    conducir(){
        return `condiciendo la motico ${this.mostrarInformacion()}`
    }
}
let vehiculos = [];
document.querySelector("#vehiculo button").addEventListener("click", function() {
    let marca = document.querySelector("#marca").value;
    let modelo = document.querySelector("#modelo").value;
    let año = document.querySelector("#año").value;
    let tipo = document.querySelector("#tipo").value;
    let nuevoVehiculo;
    if (tipo === 'auto') {
        nuevoVehiculo = new Auto(marca, modelo, año);
    } else if (tipo === 'moto') {
        nuevoVehiculo = new Moto(marca, modelo, año);
    }
    vehiculos.push(nuevoVehiculo);
});
function listarVehiculos(tipo) {
    let listaD = document.querySelector("#lista");
    listaD.innerHTML = '';  
    let vehiculosFiltrados = [];
    if (tipo === 'auto') {
        vehiculosFiltrados = vehiculos.filter(vehiculo => vehiculo instanceof Auto);
    } else if (tipo === 'moto') {
        vehiculosFiltrados = vehiculos.filter(vehiculo => vehiculo instanceof Moto);
    }
    if (vehiculosFiltrados.length > 0) {
        vehiculosFiltrados.forEach(function(vehiculo) {
            let li = document.createElement('li');
            li.textContent = vehiculo.mostrarInformacion();
            li.textContent = vehiculo.conducir();
            listaD.appendChild(li);
        });
    } else {
        listaD.textContent = `No hay vehículos de las especificaciones ${tipo}`;
    }
}