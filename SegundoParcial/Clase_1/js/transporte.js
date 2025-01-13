class Conductor {
    #nombre;
    #apellido;
    #licencia;
    #rutas;

    constructor(nombre, apellido, edad, licencia) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.edad = edad;
        this.#licencia = licencia;
        this.#rutas = [];
    }

    registrarRuta(ruta) {
        this.#rutas.push(ruta);
        console.log(`Ruta ${ruta.nombre} registrada para ${this.obtenerNombre()}`);
    }

    obtenerNombre() {
        return `${this.#nombre} ${this.#apellido}`;
    }
}

// Clase ConductorVIP que hereda de Conductor
class ConductorVIP extends Conductor {
    #vehiculoPreferido;

    asignarVehiculoPreferido(vehiculo) {
        this.#vehiculoPreferido = vehiculo;
        console.log(`Vehículo preferido ${vehiculo.modelo} asignado a ${this.obtenerNombre()}`);
    }
}

// Clase Vehiculo
class Vehiculo {
    #modelo;
    #placa;
    #conductorAsignado;

    constructor(modelo, placa) {
        this.#modelo = modelo;
        this.#placa = placa;
        this.#conductorAsignado = null;
    }

    asignarConductor(conductor) {
        if (this.#conductorAsignado === null) {
            this.#conductorAsignado = conductor;
            console.log(`Conductor ${conductor.obtenerNombre()} asignado al vehículo ${this.#modelo}`);
        } else {
            console.log(`El vehículo ${this.#modelo} ya tiene un conductor asignado.`);
        }
    }

    obtenerInfoVehiculo() {
        return `Modelo: ${this.#modelo}, Placa: ${this.#placa}`;
    }
}

// Clase Ruta
class Ruta {
    nombre;
    origen;
    destino;
    duracion;

    constructor(nombre, origen, destino, duracion) {
        this.nombre = nombre;
        this.origen = origen;
        this.destino = destino;
        this.duracion = duracion;
    }
}

// Ejemplo de uso:
const conductor1 = new Conductor('Juan', 'Pérez', 35, 'ABC123');
const conductorVIP = new ConductorVIP('María', 'Gómez', 40, 'XYZ789');
const vehiculo1 = new Vehiculo('Toyota Prius', 'XYZ-123');
const ruta1 = new Ruta('Recreo Sur', 'Estación Norte', 'Estación Sur', '30 minutos');

vehiculo1.asignarConductor(conductor1);
conductor1.registrarRuta(ruta1);
conductorVIP.asignarVehiculoPreferido(vehiculo1);