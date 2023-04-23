import Pelicula from "./classPelicula.js";

let listaPeliculas = localStorage.getItem('ListaPeliculas');

if (!listaPeliculas) {
    listaPeliculas = [];
} else {
    listaPeliculas = JSON.parse(listaPeliculas).map((pelicula) => { return new Pelicula(pelicula.titulo, pelicula.descripcion, pelicula.imagen, pelicula.genero, pelicula.anio, pelicula.duracion, pelicula.pais, pelicula.reparto) })
}

console.log(listaPeliculas);