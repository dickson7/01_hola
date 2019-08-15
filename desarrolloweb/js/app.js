console.log('Hola');
console.log(document.querySelector('.menu'));

//media querys en js
const ipad = window.matchMedia('screen and (max-width: 767px)');
// se definen la variables
const menu = document.querySelector('.menu');
console.log(menu);
const burgerButton = document.querySelector('#burger-button');
console.log(burgerButton);




// se llama a una funcion para validar los cambios
ipad.addListener(validacion)

function validacion(evento){
    if (evento.matches){
        // se escucha el click y se llama la funcion hideShow
        burgerButton.addEventListener('click', hideShow)
    } else{
        burgerButton.removeEventListener('click', hideShow)
    }
}
validacion(ipad);
function hideShow(){
    //se valida que el elemento menu contenga la clase
    if (menu.classList.contains('is-active')){
        //se elimina clase
        menu.classList.remove('is-active');
    }else{
        //se agrega clase
        menu.classList.add('is-active');
    }
    
}
