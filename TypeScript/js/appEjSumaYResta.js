"use strict";
//en tsconfig descomente el "outDir"
class Operacion {
    constructor() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }
    set ValorA(v) {
        this.valorA = v;
    }
    set ValorB(v) {
        this.valorB = v;
    }
    get Resultado() {
        return this.resultado;
    }
}
class suma extends Operacion {
    Sumar() {
        this.resultado = this.valorA + this.valorB;
    }
}
class restar extends Operacion {
    Restar() {
        this.resultado = this.valorA - this.valorB;
    }
}
let operacionS = new suma();
operacionS.ValorA = 45;
operacionS.ValorB = 10;
operacionS.Sumar();
console.log("el resultado de la suma es " + operacionS.Resultado);
let operacionR = new restar();
operacionR.ValorA = 45;
operacionR.ValorB = 10;
operacionR.Restar();
console.log("el resultado de la resta es " + operacionR.Resultado);
