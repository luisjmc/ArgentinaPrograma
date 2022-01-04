"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decorador de clase
function DecoradorClase(target) {
    target.prototype.Saludar = function () {
        console.log("hola");
    };
}
let Persona = 
//para agregar decoradores hay que descomentar "experimentalDecorators" en el Tsconfig
class Persona {
    constructor(nom, ape, anio) {
        this.nombre = nom;
        this.apellido = ape;
        this.anioNacimiento = anio;
    }
    pasarNum(n) {
        return n;
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(v) {
        this.nombre = v;
    }
};
Persona = __decorate([
    DecoradorClase
    //para agregar decoradores hay que descomentar "experimentalDecorators" en el Tsconfig
], Persona);
let per1 = new Persona("luis", "yo", 1990);
per1.Saludar();
let mensaje = ", digo yo";
let message = `Hello World ${mensaje}`;
console.log(message);
//en tsconfig descomente la entrada outfile para que los js compilados vayan a una carpeta
//y comente la entrada 'module'
//let desc:any[]=[1,true,"verde"];
function mensaje2() {
    console.log(message);
}
//**Crear la enumeración */
var Color;
(function (Color) {
    Color[Color["Blanco"] = 0] = "Blanco";
    Color[Color["Rojo"] = 1] = "Rojo";
    Color[Color["Verde"] = 2] = "Verde";
})(Color || (Color = {}));
//**Declarar la variable y asignar un valor de la enumeración */
let colorAuto = Color.Blanco;
console.log(colorAuto);
let list = ['pimiento', 'papas', 'tomate'];
//generico respetendo el tipo de dato del arg y del tipo que devuelve
function identity(arg) {
    return arg;
}
let persona = { nombre: "Ana", edad: 45 };
console.log("=======Desestructuracion=======");
var obj = { a: 1, b: 2, c: 3 };
console.log(obj.c);
//Desestructuracion con estructuracion, con este estilo solo toma los que irian despues del Y, en el orden inicial creo
var bnu = [1, 2, 3, 4, 5];
var [x, y, ...rest] = bnu;
console.log(rest);
//pruebaEstructural()
function pruebaEstructural(a, b, ...manyMoreArgs) {
    console.log(manyMoreArgs);
}
pruebaEstructural('1', '2', '3', '4', '5');
