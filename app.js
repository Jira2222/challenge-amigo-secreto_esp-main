// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.

'use strict'

/* DECLARACION VARIABLES */


/* Variables usadas dentro del programa para recoleccion de informacion */
let amigos = [];
let aleatorio;
let resultado;

/* Variables para tomar las etiquetas que se van a usar para mostrar los resultados */
let nombre = document.querySelector('#amigo');
let nombreLista = document.querySelector('#listaAmigos');
let lista = document.querySelector('#resultado');

/* EJECUCION DEL PROGRAMA */

/* Funcion boton "Añadir" (Añadir y mostrar nombre en lista) */
function agregarAmigo(){
    nombreLista.classList.remove('name-list');
    nombreLista.innerHTML = "";

    if(nombre.value.trim() == null || nombre.value.trim().length == 0){
        alert("Por favor inserte un nombre...");
    }else{
        amigos.push(nombre.value);
        var titulo = document.createElement('h3');
        titulo.innerHTML = "Lista de Nombres:";
        nombreLista.appendChild(titulo); 
    };

    for(var i = 0; i < amigos.length; i++){
        var elemento = document.createElement('li');
        elemento.innerHTML = amigos[i]; 
        nombreLista.appendChild(elemento);
    }; 
    
    lista.innerHTML = "";   
};

/* Funcion boton "Sortear amigo" (Muestra el nombre aleatorio, dependiendo los nombres de la lista.)*/
function sortearAmigo(){
    if(Array.isArray(amigos) && amigos.length === 0){
        alert("Por favor escriba una lista de amigos...");
    }else{
        lista.innerHTML = "";
        aleatorio = Math.round(Math.random() * (amigos.length - 1));
        resultado = amigos[aleatorio];
        lista.innerHTML = '<h3>Su Amigo Secreto es:</h3>' + '<li>' + resultado + '</li>';
        nombreLista.classList.add('name-list');
    };

};

