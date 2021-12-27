let mensaje:string=", digo yo";
let message:string= `Hello World ${mensaje}`;
console.log(message);
//en tsconfig descomente la entrada outfile para que los js compilados vayan a una carpeta
//y comente la entrada 'module'


//let desc:any[]=[1,true,"verde"];
function mensaje2():void{
    console.log(message);    
}

//**Crear la enumeración */
enum Color {
    Blanco,
    Rojo,
    Verde
}
 
//**Declarar la variable y asignar un valor de la enumeración */
let colorAuto: Color= Color.Blanco; 
console.log(colorAuto);

let list:string[]=['pimiento','papas','tomate'];

//generico respetendo el tipo de dato del arg y del tipo que devuelve
function identity<T>(arg:T):T{
    return arg;
}
let persona:object = {nombre:"Ana",edad:45};

console.log("=======Desestructuracion=======");
var obj={a:1,b:2,c:3}
console.log(obj.c);

//Desestructuracion con estructuracion, con este estilo solo toma los que irian despues del Y, en el orden inicial creo
var bnu=[1,2,3,4,5];
var [x,y, ...rest]=bnu;
console.log(rest);
//pruebaEstructural()

function pruebaEstructural(a, b, ...manyMoreArgs){
    console.log(manyMoreArgs);
}
pruebaEstructural('1','2','3','4','5');