import Pelicula from "./classPelicula.js";
const btnEditar = document.getElementById("btnEditar");
const btnAgregar = document.getElementById("btnAgregar");
const formularioPelicula = document.getElementById("formAdminPelicula");
const modalPelicula = new bootstrap.Modal(document.getElementById("modalAgregar"));
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
    console.log('creando pelicula...');
    modalPelicula.hide();
}