import Pelicula from "./classPelicula.js";
import {sumarioValiaciones} from "./helpers.js";
const btnEditar = document.getElementById("btnEditar");
const btnAgregar = document.getElementById("btnAgregar");
const formularioPelicula = document.getElementById("formAdminPelicula");
const modalPelicula = new bootstrap.Modal(document.getElementById("modalAgregar"));

//Datos del formularioModal
const codigo = document.getElementById("codigo");
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const imagen = document.getElementById("imagen");
const genero = document.getElementById("genero");
const anio = document.getElementById("anio");
const duracion = document.getElementById("duracion");
const pais = document.getElementById("pais");
const reparto = document.getElementById("reparto");
const mensajeFormulario = document.getElementById("mensajeFormulario");


let listPeliculas = []
btnEditar.addEventListener("click", creaePeli);
btnAgregar.addEventListener("click", mostrarModalPelicula);
formularioPelicula.addEventListener("submit",cargarPelicula);
//creae una nueva peli
let nuevaPeli = new Pelicula('Super mari','descripcion','url','aventura',2023,'2hs','EEUU','-');



function creaePeli(){
    console.log(nuevaPeli);
}

function mostrarModalPelicula(){
    modalPelicula.show();
}

function cargarPelicula(e){
    e.preventDefault();
    //validar los datos
    let sumario = sumarioValiaciones(titulo.value, descripcion.value,imagen.value,duracion.value);
    if(sumario.length === 0){
        console.log('creando pelicula...');
        modalPelicula.hide();
    }else{
        mensajeFormulario.className = 'alert alert-danger mt-3'
        mensajeFormulario.innerText = sumario;
    }
    //crear las peliculas
    //almacenar las pelis en el localStorage
    //cerrar modal
}