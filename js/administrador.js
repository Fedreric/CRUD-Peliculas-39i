import Pelicula from "./classPelicula.js";
const btnEditar = document.getElementById("btnEditar");
btnEditar.addEventListener("click", creaePeli);
//creae una nueva peli
let nuevaPeli = new Pelicula('Super mari','descripcion','url','aventura',2023,'2hs','EEUU','-');



function creaePeli(){
    console.log(nuevaPeli);
}