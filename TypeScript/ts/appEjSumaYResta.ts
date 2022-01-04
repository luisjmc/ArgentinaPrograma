//en tsconfig descomente el "outDir"

class Operacion {

    protected valorA:number;
    protected valorB:number;
    protected resultado:number;
    
    constructor() {
        this.valorA=0;
        this.valorB=0;
        this.resultado=0;        
    }
    
    public set ValorA(v : number) {
        this.valorA = v;
    }
    
    public set ValorB(v : number) {
        this.valorB = v;
    }
    
    public get Resultado() : number {
        return this.resultado;
    }
}

class suma extends Operacion{
    Sumar() {
        this.resultado=this.valorA+this.valorB;
    }
}

class restar extends Operacion{
    Restar(){
        this.resultado=this.valorA-this.valorB;
    }
}

let operacionS= new suma();
operacionS.ValorA=45;
operacionS.ValorB=10;
operacionS.Sumar();
console.log("el resultado de la suma es "+ operacionS.Resultado);

let operacionR= new restar();
operacionR.ValorA=45;
operacionR.ValorB=10;
operacionR.Restar();
console.log("el resultado de la resta es "+ operacionR.Resultado);