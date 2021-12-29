class Persona {

    private nombre:string;
    private apellido:string;
    private anioNacimiento:number;

    constructor(nom:string,ape:string,anio:number){
        this.nombre=nom;
        this.apellido=ape;
        this.anioNacimiento=anio;
    }

    pasarNum(n:number) :number{
        return n;
    }

    
    public get Nombre() : string {
        return this.nombre;
    }

    
    public set Nombre(v : string) {
        this.nombre = v;
    }    
}