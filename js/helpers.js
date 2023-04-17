//agregar validacion del anio (anio actual + 1)

export function sumarioValiaciones (titulo,descripcion,imagen,duracion, genero){
    let resumen = '';

    if(!cantidadCaracteres(titulo,3,127)){
        resumen += 'Corregir el campo de titulo, debe contener ente 3 y 127 caracteres\n'
    }
    if(!cantidadCaracteres(descripcion,20,500)){
        resumen += 'Corregir la cantidad de caracteres de la descripcion, 20 a 500\n'
    }
    if(!validarDuracion(duracion)){
        resumen += 'Corregir la duracion, debe ser un numero de 3 digitos\n'
    }
    if(!validarUrlImagenes(imagen)){
        resumen += 'Corregir url de la imagen\n'
    }
    if(!validarGenero(genero)){
        resumen += 'Seleccione un genero en la lista de generos\n'
    }

    if(resumen.length !== 0){
        return resumen;
    }else{
        return '';
    }

}

function cantidadCaracteres(texto, min, max) {
    if (texto.length >= min && texto.length <= max) {
        console.log("cantidad caracteres correcto")
        return true;
    }else{
        console.log("cantidad caracteres incorrecto")
        return false;
    }
}

function validarDuracion(value){
    let patron = /^[0-9]{1,3}$/ 
    if(patron.test(value)){
        console.log('tiempo validado correctamente');
        return true;
    }else{
        console.log('No paso la exprecion regular');
        return false;
    }
}
function validarUrlImagenes(value){
    let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/ 
    if(patron.test(value)){
        console.log('URL Imagen validado correctamente');
        return true;
    }else{
        console.log('No paso la exprecion regular');
        return false;
    }
}

function validarGenero (texto){
    if(texto.length > 0 && (texto === 'Aventura' || texto === 'Accion' || texto === 'Drama' || texto === 'Terror')){
        console.log('Genero valido');
        return true;
    }else{
        console.log('Genero invalido');
        return false;
    }
}