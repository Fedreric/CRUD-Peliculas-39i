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
const contadorCaracteresDesc = document.getElementById('contadorCaracteresDesc');


// btnEditar.addEventListener("click", creaePeli);
btnAgregar.addEventListener("click", mostrarModalPelicula);
formularioPelicula.addEventListener("submit", cargarPelicula);

//esto funciona solo si el objeto pelicula no necesita acceder a metodos
// let listaPeliculas = JSON.parse(localStorage.getItem('ListaPeliculas')) || [];
let listaPeliculas = localStorage.getItem('ListaPeliculas');

if (!listaPeliculas) {
    listaPeliculas = [];
} else {
    listaPeliculas = JSON.parse(listaPeliculas).map((pelicula) => { return new Pelicula(pelicula.codigo, pelicula.titulo, pelicula.descripcion, pelicula.imagen, pelicula.genero, pelicula.anio, pelicula.duracion, pelicula.pais, pelicula.reparto) })
}
console.log(listaPeliculas);
cargaInicial();
function cargaInicial() {
    if (listaPeliculas.length > 0) {
        //dibuja la tabla
        listaPeliculas.map((pelicula, indice) => crearFila(pelicula, indice))
    } else {
        // dejar la tabla vacia
    }
}

function crearFila(pelicula, indice) {
    //aqui dibujo el TR
    let datosTabla = document.querySelector('tbody');
    datosTabla.innerHTML += `
    <tr>
        <th scope="row">${indice + 1}</th>
        <td class="text-truncate">${pelicula.titulo}</td>
        <td class="text-truncate">${pelicula.descripcion}</td>
        <td class="text-truncate">
        ${pelicula.imagen}
        </td>
        <td>${pelicula.genero}</td>
        <td>
        <button type="button" class="btn btn-warning" onclick = "borrarPelicula('${pelicula.codigo}')";>
            <i class="bi bi-pencil-square" id="btnEditar" ></i>
        </button>
        <button type="button" class="btn btn-danger" onclick = "borrarPelicula('${pelicula.codigo}')";>
            <i class="bi bi-x-square"></i>
        </button>
        </td>
    </tr>`
}

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
        let pelicula = new Pelicula(undefined, titulo.value, descripcion.value, imagen.value, genero.value, anio.value, duracion.value, pais.value, reparto.value);
        listaPeliculas.push(pelicula);
        //almacenar las pelis en el localStorage
        guardarEnLocalStorage();
        //limpiar formulario
        limpiarFormularioPeliculas();
        modalPelicula.hide();
        //dibujar la fila
        let indicePeli = listaPeliculas.length - 1;
        crearFila(pelicula, indicePeli);
        //mostar un cartel al usuario que creo la peli correctamente
        Swal.fire(
            'Pelicula creada!',
            'La pelicula: ' + pelicula.titulo + ' fue guardada con exito.',
            'success'
        )
        mensajeFormulario.className = 'alert alert-danger mt-3 d-none';
    } else {
        mensajeFormulario.className = 'alert alert-danger mt-3'
        mensajeFormulario.innerText = sumario;
        setTimeout(() => {
            mensajeFormulario.className = 'alert alert-danger mt-3 d-none';
        }, 4000);
    }
}

function guardarEnLocalStorage() {
    localStorage.setItem('ListaPeliculas', JSON.stringify(listaPeliculas));
}

function limpiarFormularioPeliculas() {
    formularioPelicula.reset();
}

window.contadorCaracteresDesc = () => {
    let contador = 500;
    let texto = descripcion.value;
    contadorCaracteresDesc.innerHTML = `${contador - texto.length}`
};
// function borrarPelicula(){
//     console.log('se ingresa a borrar pelicula');
// }

window.borrarPelicula = (codigo) => {
    Swal.fire({
        title: 'Estas seguro de eliminar la pelicula?',
        text: "No podras revertir este cambio",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            //Aqui hago todo lo necesario para borrar
            console.log(codigo, typeof (codigo));
            //busco en el array de pelicula, la peli que quiero borrar con el codigo
            let posicionPeli = listaPeliculas.findIndex(pelicula => pelicula.codigo === codigo);
            console.log(posicionPeli);
            //borrar del array la peli
            listaPeliculas.splice(posicionPeli, 1);
            //igualar los datos del local storage
            guardarEnLocalStorage();
            //quitar la fila de la tabla
            let datosTabla = document.querySelector('tbody');
            // console.log(datosTabla.children[posicionPeli]);
            datosTabla.removeChild(datosTabla.children[posicionPeli]);
            //Actualizar tabla
            Swal.fire(
                'Listo!',
                'La pelicula fue eliminada',
                'success'
            )
        }
    })
};

window.borrarPelicula = (codigoPeli) => {
    const pelicula = listaPeliculas.find(pelicula => pelicula.codigo === codigoPeli)
    modalPelicula.show();
    //completar los datos en el modal
    codigo.value = pelicula.codigo;
    titulo.value = pelicula.titulo;
    descripcion.value = pelicula.descripcion;
    imagen.value = pelicula.imagen;
    genero.value = pelicula.genero;
    anio.value = pelicula.anio;
    duracion.value = pelicula.duracion;
    pais.value = pelicula.pais;
    reparto.value = pelicula.reparto;
}