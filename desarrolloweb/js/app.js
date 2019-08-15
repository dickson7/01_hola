console.log('Hola');
console.log(document.querySelector('.menu'));


const menu = document.querySelector('.menu');
console.log(menu);
const burgerButton = document.querySelector('#burger-button');
console.log(burgerButton);

// se escucha el click y se llama la funcion hideShow
burgerButton.addEventListener('click', hideShow)

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
