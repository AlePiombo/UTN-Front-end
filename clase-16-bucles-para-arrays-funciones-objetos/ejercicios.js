//**1**
//Crear una funcion que se llame calcularIva que reciba un precio (numero) y me devuelva el iva (21%) de ese precio

function calcularIva(numero){
    return numero*0.21
}

function pedirNumero(){
    precio = prompt("¿Cuál es el precio del producto?")
    while (isNaN(precio)) {
        precio = prompt("¿Cuál es el precio del producto?")
        
    }
    return precio
}

let iva = calcularIva(pedirNumero())

alert("El IVA del producto es: " + iva)
