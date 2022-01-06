"use strict";
//===================================
class Turbina {
    constructor(n) {
        this.numTurbinas = 0;
        this.numTurbinas = n;
    }
    ToString() {
        return this.numTurbinas + " Turbinas/s";
    }
}
class Cubierta {
    constructor(pCabinaTripulacion, pCabinaVuelo, pSistemaEmergencia, pTanquesCombustible, pPuertasSalida) {
        this.cabinaTripulacion = false;
        this.cabinaVuelo = false;
        this.sistemaEmergencia = false;
        this.numTanquesCombustible = 0;
        this.numPuertasSalidas = 0;
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuertasSalidas = pPuertasSalida;
    }
    ToString() {
        let mensaje = "cubierta compuesta de: ";
        if (this.cabinaVuelo) {
            mensaje += " Cubierta de Vuelo";
        }
        if (this.cabinaTripulacion) {
            mensaje += " Cubierta de Tripulacion";
        }
        if (this.sistemaEmergencia) {
            mensaje += " Sistema de Emergencia";
        }
        mensaje += this.numTanquesCombustible + "Tanques de Combustible, ";
        mensaje += this.numPuertasSalidas + " Puertas de Salida.";
        return mensaje;
    }
}
const persona = {
    nombre: 'Mario',
    edad: 30,
    direccion: {
        calle: 'San Martin',
        pais: 'Argentina',
        ciudad: 'Córdoba'
    },
    mostrarDireccion() {
        return this.nombre + ',' + this.direccion.ciudad + ',' + this.direccion.pais;
    }
};
console.log(persona.mostrarDireccion());
