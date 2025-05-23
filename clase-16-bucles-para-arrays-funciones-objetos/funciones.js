//Funciones
//Para que sirven las funciones??

//Declaro la funcion "presentarme"
// function presentarme(){ //guardo entre llame el bloque de código
//     let nombre = 'Ale'
//     console.log("Hola a todos, soy " + nombre + " !")
// }

// //invocación
// presentarme()
// presentarme()
// presentarme()
// presentarme()
// presentarme()
// presentarme()

// function solicitarTexto (){
    // let texto = prompt("Dame un texto)")
    // while(!texto){
    //     alert("Error, texto no válido")
    //     texto = prompt("dame un texto")
    // }
    // return texto //la salida de la funcion es el valor de "texto"
// }
//hay que almacenar de inmediato ese valor
// let nombre = solicitarTexto() //llamo la funcion para que la salida se guarde en la variable nombre
// let descripcion = solicitarTexto() //llamo de vuelta l afuncion para grabarla en la variable 
// console.log('El nombre es: ' + nombre)
// console.log('La descripción es: ' + descripcion)

//esta funcion e sproblemática porque no es agnostica
//un funcion tiene que ser Agnostica, es decir tiene que ser independiente del contexto específico
//Agnostica
// Características de una función agnóstica:
    // Generalidad:
        // La función no está atada a un caso de uso específico. Por ejemplo, no utiliza variables globales ni depende de datos externos que no se le pasen como parámetros.
    // Reutilizable:
        // Puede ser utilizada en diferentes partes del programa o incluso en otros proyectos, siempre que se le proporcionen los argumentos necesarios.
    // Independencia:
        // No depende de un contexto particular para funcionar correctamente. Todo lo que necesita para operar se le pasa como parámetros.

//ejemplo de una funcion que sume 1 +1

// function sumar1Mas1(){
//     return 1 + 1
// }
// let unoMasUno = sumar1Mas1()

//hay que usar parametros
//Los parametros son la forma de comunicarnos con los parametros

// function sumar (a, b){
//     console.log(a)
//     console.log(b)
//     let result = a + b
//     return result
// }


// console.log(sumar(Number(prompt("ingrese el primer valor a sumar")), Number(prompt("ingrese el segundo valor a sumar")) ))


function calcularIva(numero){
    let iva = numero * 0.21
    return iva
}

function pedirNumero(){
    precio = prompt("¿Cuál es el precio del producto?")
    while (isNaN(precio)) {
        precio = prompt("¿Cuál es el precio del producto?")
        
    }
    return precio
}

let iva = calcularIva(pedirNumero())

console.log("El IVA del producto es: " + iva)
