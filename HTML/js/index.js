console.log("soy un index");

saludar();
function saludar(){
    console.log("Hola");
}

//D.O.M.

function MostrarTexto(){                
    const elemento = document.getElementById("intro"); //guardo todo el elemento del id Intro
    const texto = document.getElementById("txt");
    console.log(elemento.value);//solo muestro el valor

    elemento.innerHTML= "Paragraph changed!";
    console.log(elemento);                
    console.log(texto.innerHTML);

    var tag = document.createElement("p");
    var text = document.createTextNode("Tutorix is the best e-learning platform");
    tag.appendChild(text); //el nodo se agrego al contenido de la etiqueta tag creada
    var element = document.getElementById("new"); //traigo el elemento por id
    console.log(element);
    element.appendChild(tag);// agrego el nodo al elemento traido
}