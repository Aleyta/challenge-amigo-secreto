// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let ListaDeNombres = [];

//AGREGAR AMIGOS:

function añadir()
{
    let inputAmigo = document.getElementById('amigo'); 
    let nombreAmigo = inputAmigo.value; 
    
    if (nombreAmigo === "") {  
        alert('Campo vacio, inserta un nombre válido');
    } else{
        if (ListaDeNombres.includes(nombreAmigo)) {  
            alert('El nombre ya esta incluido en la lista, favor de agregar uno diferente')
        } else {
            ListaDeNombres.push(nombreAmigo);
            mostrarListaAmigos(); 
            inputAmigo.value = ''; 
        }
    }
}



//MOSTRAR LISTA:

function mostrarListaAmigos() 
{
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    for (let i = 0; i < ListaDeNombres.length; i++) {
        let item = document.createElement('li'); 
        item.textContent = ListaDeNombres[i]; 
        lista.appendChild(item); 
    }
}



//SORTEAR NOMBRES:

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
       document.querySelector("#sortear").setAttribute("disabled", "true");
    //    deshabilitar();
    } 
}


//MOSTRAR AMIGO SECRETO:
function mostrarAmigoSecreto(amigoSecreto) 
{
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
    document.querySelector("#agregar").setAttribute("disabled", "true"); //deshabilitar el boton de nuevo juego
}


//LIMPIA LISTA DE AMIGOS:
function limpiar() {
    document.getElementById("listaAmigos").innerHTML = "";
}


//REINICIA EL SORTEO:
function reiniciar() {
    ListaDeNombres = [];
    mostrarListaAmigos();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("sortear").removeAttribute("disabled");
    document.getElementById("agregar").removeAttribute("disabled");
}

sortearAmigo();

