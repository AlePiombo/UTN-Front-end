//Esto es un diccionario

const ID_VALUES_COUNTER = {
    INCREMENT_BTN: 'increment-counter-btn',
    DECREMENT_BTN: 'decrement-counter-btn',
    COUNTER: 'counter-value'
}


const increment_btn_HTML = document.getElementById(ID_VALUES_COUNTER.INCREMENT_BTN)
const decrement_btn_HTML = document.getElementById(ID_VALUES_COUNTER.DECREMENT_BTN)
const counter_HTML= document.getElementById(ID_VALUES_COUNTER.COUNTER)

//Necesito la variable que guarde mi contador
let counter = 0

//deberiamos hacer una funcion que se reindereze el contador y muestre.

function renderCounter(){
    //Imprimir el valor de mi contador
        counter_HTML.innerText = counter
}

//mostramos el valor la primera vez
renderCounter()

//cuando le de al boton "+" incrementara y reinimprimir
    //Hacemos funcion que incremente el counter
        function incrementCounter(){
            counter = counter +1
            renderCounter()
        }

    increment_btn_HTML.addEventListener('click', incrementCounter)

//cuando le de al boton "-" decrementara y reimprimira
    //Hacemos funcion que decremente el counter
        function decrementCounter(){
            counter = counter - 1 
            renderCounter()
        }
    
    decrement_btn_HTML.addEventListener('click', decrementCounter)
    
