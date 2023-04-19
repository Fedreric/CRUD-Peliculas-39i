import Pelicula from "./classPelicula.js";
import { sumarioValiaciones } from "./helpers.js";
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


btnEditar.addEventListener("click", creaePeli);
btnAgregar.addEventListener("click", mostrarModalPelicula);
formularioPelicula.addEventListener("submit", cargarPelicula);

//esto funciona solo si el objeto pelicula no necesita acceder a metodos
// let listaPeliculas = JSON.parse(localStorage.getItem('ListaPeliculas')) || [];
let listaPeliculas = localStorage.getItem('ListaPeliculas');

if (!listaPeliculas) {
    listaPeliculas = [];
} else {
    listaPeliculas = JSON.parse(listaPeliculas).map((pelicula) => { return new Pelicula(pelicula.titulo, pelicula.descripcion, pelicula.imagen, pelicula.genero, pelicula.anio, pelicula.duracion, pelicula.pais, pelicula.reparto) })
}
console.log(listaPeliculas);

function creaePeli() {
    console.log('Ingresa a editar');
}

function mostrarModalPelicula() {
    modalPelicula.show();
}

function cargarPelicula(e) {
    e.preventDefault();
    //validar los datos
    let sumario = sumarioValiaciones(titulo.value, descripcion.value, imagen.value, duracion.value, genero.value, anio.value, pais.value, reparto.value);
    //cerrar modal
    if (sumario.length === 0) {
        console.log('creando pelicula...');
        //crear las peliculas
        let pelicula = new Pelicula(titulo.value, descripcion.value, imagen.value, genero.value, anio.value, duracion.value, pais.value, reparto.value);
        listaPeliculas.push(pelicula);
        //almacenar las pelis en el localStorage
        guardarEnLocalStorage();
        //limpiar formulario
        limpiarFormularioPeliculas();
        modalPelicula.hide();
    } else {
        mensajeFormulario.className = 'alert alert-danger mt-3'
        mensajeFormulario.innerText = sumario;
    }
}

function guardarEnLocalStorage() {
    localStorage.setItem('ListaPeliculas', JSON.stringify(listaPeliculas));
}

function limpiarFormularioPeliculas() {
    formularioPelicula.reset();
}