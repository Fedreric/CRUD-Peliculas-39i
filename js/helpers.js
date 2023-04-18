//agregar validacion del anio (anio actual + 1)

export function sumarioValiaciones (titulo,descripcion,imagen,duracion, genero,anio,pais,reparto){
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
    if(!validarAnio(anio)){
        resumen += 'Año invalido, debe ser entre 1895 y 2025\n'
    }
    if(!validarPais(pais)){
        resumen += 'Pais invalido, selecciona uno de la lista\n'
    }
    if(!cantidadCaracteres(reparto,0,500)){
        resumen += 'Corregir el campo de Reparto, debe contener menos de 500 caracteres, re cuerda separar los nombres por comas\n'
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

function validarAnio (anio){
    if(anio >= 1895 && anio <= 2025){
        console.log('El año es valido');
        return true;
    }else{
        console.log('El año es invalido');
        return false;
    }
}

function validarPais (texto){
    if(texto.length > 0 && (texto === 'Argentina' || texto === 'Belice' || texto === 'Bolivia' || texto === 'Brasil' || texto === 'Chile' || texto === 'Colombia' || texto === 'Costa Rica' || texto === 'Cuba' || texto === 'Dominica' || texto === 'Ecuador' || texto === 'El Salvador' || texto === 'Guatemala' || texto === 'Guyana' || texto === 'Haití' || texto === 'Honduras' || texto === 'Jamaica' || texto === 'México' || texto === 'Nicaragua' || texto === 'Panamá' || texto === 'Paraguay' || texto === 'Perú' || texto === 'Puerto Rico' || texto === 'República Dominicana' || texto === 'Surinam' || texto === 'Trinidad y Tobago' || texto === 'Uruguay' || texto === 'Venezuela')
    ){
        console.log('Pais valido');
        return true;
    }else{
        console.log('Pais invalido');
        return false;
    }
}