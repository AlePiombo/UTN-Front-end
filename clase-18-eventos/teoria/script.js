

//creo una funcion alertar.
function alertar(){
    alert('No debiste hacer eso!!!!!')
}

//Obtener el boton del DOM

const boton = document.getElementById('btn-click')

// #2 - Asignar l afunción a el método onclick del elemento
boton.onclick = alertar //REFERENCIAMOS a la funcion alertar

// #3 - la manera mas estandar de hacerla hoy, es asigar el elemento a una constante y luego usar addEventListener 
const boton_2 = document.getElementById('btn-click-2') //asigno el boton 2 a la const"boton_2"

boton_2.addEventListener('click', alertar) //el método addEventListener tiene el primer parámetro que pide el "tipo de elemento" y segundo la "callback" es decir la funcion a ejecutar.

