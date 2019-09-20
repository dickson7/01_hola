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
    //console.log('Acción', actionList, 'Terror', dramaList, 'Animación', animationList);

    function videoItemTemplate(movie){
      return(
        `<div class="primaryPlaylistItem">
            <div class="primaryPlaylistItem-image">
              <img src="${movie.medium_cover_image}">
            </div>
            <h4 class="primaryPlaylistItem-title">
              ${movie.title}
            </h4>
        </div>`
      )
    }

    function createTemplate(HTMLString){
      const html = document.implementation.createHTMLDocument();
      html.body.innerHTML = HTMLString;
      return html.body.children[0];
    }

    function renderMovieList(list, $container){
      $container.children[0].remove();
      list.forEach((movie) =>{
        const HTMLString = videoItemTemplate(movie);
        const movieElement = createTemplate(HTMLString); 
        $container.append(movieElement);
      })
    }
   
    const $actionContainer = document.querySelector('#action');
    renderMovieList(actionList.data.movies, $actionContainer);

    const $dramaContainer = document.getElementById('drama');
    renderMovieList(dramaList.data.movies, $dramaContainer);

    const $animationContainer = document.getElementById('animation');
    renderMovieList(animationList.data.movies, $animationContainer);

    
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

