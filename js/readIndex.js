import Pelicula from "./classPelicula.js";

let listaPeliculas = localStorage.getItem('ListaPeliculas');

if (!listaPeliculas) {
    listaPeliculas = [];
} else {
    listaPeliculas = JSON.parse(listaPeliculas).map((pelicula) => { return new Pelicula(undefined,pelicula.titulo, pelicula.descripcion, pelicula.imagen, pelicula.genero, pelicula.anio, pelicula.duracion, pelicula.pais, pelicula.reparto) })
}

console.log(listaPeliculas);

cargaInicial();
function cargaInicial() {
    if (listaPeliculas.length > 0) {
        //dibuja la tabla
        listaPeliculas.map((pelicula, indice) => crearFila(pelicula))
    } else {
        let contenederPeliculas = document.getElementById('contenederPeliculas');
        contenederPeliculas.innerHTML += `
        <p class="display-1 text-center fst-italic my-5">No se encontraron peliculas disponibles</p>
    `
    }
}

function crearFila(pelicula) {
    //aqui dibujo el TR
    let contenederPeliculas = document.getElementById('contenederPeliculas');
    contenederPeliculas.innerHTML += `
    <article class=" col-md-6 col-lg-3 mb-3">
    <div class="card h-100">
        <img src="${pelicula.imagen}" class="card-img-top" alt="imagen de: ${pelicula.titulo}">
        <div class="card-body">
          <h5 class="card-title">${pelicula.titulo}</h5>
        </div>
        <div class="card-footer">
            <a href="pages/detalles.html" class="btn btn-primary">Ver mas</a>
        </div>
      </div>
    </article>
    `
}