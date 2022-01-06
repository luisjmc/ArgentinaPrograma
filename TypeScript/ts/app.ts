interface IPersona{
    nombre:string;
    edad:number;
    direccion:IDireccion,
    mostrarDireccion():string;
}

interface IDireccion{
    calle:string;
    pais:string;
    ciudad:string;
}
//===================================
class Turbina {
    private numTurbinas:number=0;
    constructor(n:number) {
        this.numTurbinas=n;
    }

    public ToString(){
        return this.numTurbinas+" Turbinas/s";
    }
}

class Cubierta {
    private cabinaTripulacion:boolean=false;
    private cabinaVuelo:boolean=false;
    private sistemaEmergencia:boolean=false;
    private numTanquesCombustible:number=0;
    private numPuertasSalidas:number=0;

    constructor(pCabinaTripulacion:boolean, pCabinaVuelo:boolean, pSistemaEmergencia:boolean, pTanquesCombustible:number, pPuertasSalida:number) {
        this.cabinaTripulacion=pCabinaTripulacion;
        this.cabinaVuelo=pCabinaVuelo;
        this.sistemaEmergencia=pSistemaEmergencia;
        this.numTanquesCombustible=pTanquesCombustible;
        this.numPuertasSalidas=pPuertasSalida;
    }

    public ToString(){
        let mensaje="cubierta compuesta de: ";
        if (this.cabinaVuelo) {
            mensaje+= " Cubierta de Vuelo";
        }
        if (this.cabinaTripulacion) {
            mensaje+= " Cubierta de Tripulacion";
        }
        if (this.sistemaEmergencia) {
            mensaje+= " Sistema de Emergencia";
        }
        mensaje+=this.numTanquesCombustible+ "Tanques de Combustible, ";
        mensaje+=this.numPuertasSalidas+" Puertas de Salida.";
        return mensaje;
    }
}

const persona:IPersona={
    nombre: 'Mario',
    edad:30,
    direccion:{
        calle: 'San Martin',
        pais:'Argentina',
        ciudad:'Córdoba'
    },
    mostrarDireccion(){
        return this.nombre+','+this.direccion.ciudad+','+this.direccion.pais;
    }
}

console.log(persona.mostrarDireccion());