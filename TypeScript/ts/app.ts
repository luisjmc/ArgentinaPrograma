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