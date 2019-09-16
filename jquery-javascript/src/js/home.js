console.log('hola mundo!');
const noCambia = "Leonidas";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}


// promesas (consumuir api con promesas)
fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response){
    console.log(response)
    return response.json()
  })
  .then(function (user){
    console.log('user', user[0].name)
  })
  .catch(function(){
    console.log('Algo salio mal')
  });

  //asincronas (consumuir api con funtion async)
  (async function load() {
    //Funcion que realiza el get y resive la url y entrega el json
    async function getData(url){
      const response = await fetch(url);
      const data = await response.json()
      return data;
    }
    //se hace el llamado a la funcion y se almacena la data en cada variable
    const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action')
    const dramaList = await getData('https://yts.lt/api/v2/list_movies.json?genre=drama')
    const animationList = await getData('https://yts.lt/api/v2/list_movies.json?genre=animation')
    console.log('Acción', actionList, 'Terror', dramaList, 'Animación', animationList);

    const $actionContainer = document.querySelector('#action');
    const $dramaContainer = document.getElementById('drama');
    const $animationContainer = document.getElementById('animation');

    const $featuringContainer = document.getElementById('#featuring');
    const $form = document.getElementById('#form');
    const $home = document.getElementById('#home');

    const $modal = document.querySelector('#modal');
    const $overlay = document.getElementById('overlay');
    const $hideModal = document.getElementById('hide-modal');

    const $modalTitle = $modal.querySelector('h1');
    const $modalDescription = $modal.querySelector('p');
    const $modalImage = $modal.querySelector('img');



  })()

