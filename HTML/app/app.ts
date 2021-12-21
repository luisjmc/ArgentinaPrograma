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