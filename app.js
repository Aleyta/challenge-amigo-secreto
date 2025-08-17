// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let ListaDeNombres = [];

//AGREGAR AMIGOS
function añadir()
{
    let inputAmigo = document.getElementById('amigo'); //selecciona del documento html la informacion y se guarda en la variable inputAmigo
    let nombreAmigo = inputAmigo.value; //agregamos el valor que se agrege a la caja de input a la variable nombreAmigo
    
    if (nombreAmigo === "") {  // Valida campo vacio
        alert('Campo vacio, inserta un nombre válido');
    } else{
        if (ListaDeNombres.includes(nombreAmigo)) {  // si el nombre esta incluido en la lista
            alert('El nombre ya esta incluido en la lista, favor de agregar uno diferente')
        } else {
            ListaDeNombres.push(nombreAmigo);//añade a la lista el nombre del amigos
            mostrarListaAmigos(); 
            inputAmigo.value = '';  //limpia campo de texto
        }
    }
}



//MOSTRAR LISTA
function mostrarListaAmigos() 
{
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    for (let i = 0; i < ListaDeNombres.length; i++) {
        let item = document.createElement('li'); 
        item.textContent = ListaDeNombres[i]; 
        lista.appendChild(item); //inserta la informacion agregada en la lista en item (li)
    }
}


//SORTEAR NOMBRES
function sortearAmigo() 
{
    let amigoAleatorio = Math.floor(Math.random() * ListaDeNombres.length);
    let amigoSecreto = ListaDeNombres[amigoAleatorio]; 
  
    if (ListaDeNombres.length === 0) 
    {  
        alert('Por favor agrega al menos un nombre para iniciar el sorteo'); 
    }else
    {
       mostrarAmigoSecreto(amigoSecreto);
       limpiar();
       deshabilitar();
    } 
}

function deshabilitar(){
 document.querySelector("#sortear").setAttribute("disabled", "true"); //deshabilitar el boton de nuevo juego
//  
}

//MOSTRAR AMIGO SECRETO
function mostrarAmigoSecreto(amigoSecreto) 
{
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
     document.querySelector("#agregar").setAttribute("disabled", "true"); //deshabilitar el boton de nuevo juego
    
}


function limpiar() {
    document.getElementById("listaAmigos").innerHTML = "";
}


function reiniciar() {
    ListaDeNombres = [];
    mostrarListaAmigos();
    limpiarResultado();
    document.getElementById("sortear").removeAttribute("disabled");
    document.getElementById("agregar").removeAttribute("disabled");


}

function limpiarResultado() {
    document.getElementById("resultado").innerHTML = "";
}

sortearAmigo();

