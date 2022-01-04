//decorador de clase
function DecoradorClase(target:Function) {
    target.prototype.Saludar = function(){
        console.log("hola");
    }
}
@DecoradorClase
//para agregar decoradores hay que descomentar "experimentalDecorators" en el Tsconfig

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

//main
let per1 = new Persona("luis","yo",1990);
per1.Saludar();