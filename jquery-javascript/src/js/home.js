console.log('hola mundo!');
const noCambia = "Leonidas";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response){
    console.log(response)
    return response.json()
  })
  .then(function (user){
    console.log('user', user[0].name)
  })