//se ejecutan l principio de la pagina
let temaConfigurado = JSON.parse(localStorage.getItem('tema')) || 'dark';
cambiarTema(temaConfigurado);

document.getElementById('btnDark').addEventListener('click', ()=> cambiarTema('dark'));
document.getElementById('btnLight').addEventListener('click', ()=> cambiarTema('light'));

 function cambiarTema(color){
    let body = document.querySelector('body');
    body.setAttribute('data-bs-theme',color);

    (color === 'dark')? document.getElementById('iconTheme').className = 'bi bi-moon-stars-fill' 
    : document.getElementById('iconTheme').className = 'bi bi-brightness-high-fill'

    //guarda el tema en el local storage
    localStorage.setItem('tema',JSON.stringify(color));
 }