"use strict";
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
//paso la cantidad de parametros que quiera sacando los 2 primeros en este caso
function pruebaEstructural(a, b, ...manyMoreArgs) {
    console.log(manyMoreArgs);
}
pruebaEstructural('1', '2', '3', '4', '5');

//Casteo en javascript
var nombre = "Luis";
(nombre as String).toUpperCase();
//(<string>nombre).toUpperCase();