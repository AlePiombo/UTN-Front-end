//Bucles para arrays

//let dias_de_clase = ['lunes', 'martes','miercoles', 'jueves', 'viernes']

//en un array los elementos tienen posición, estan indexados
//elemento = es cualqueir dato que este dentro del array. 

//muestro el elemento en la posición 1.
// console.log(dias_de_clase[1])


//muestro todos los elementos del array, de manera "antigua"
// console.log('lunes')
// console.log('martes')
// console.log('miercoles')

//muestro todos los elementos del array, de manera "antigua"
// console.log(dias_de_clase[0])
// console.log(dias_de_clase[1])
// console.log(dias_de_clase[2])

//PROBLEMA!!! - el problema es que si agrego nuevos días NO se van a mostrar por consola.
//NO ES ESCALABLE

//La solucion es insertar un Bucle.
//A esto se le dice recorrer el array

// console.log("------Ahora con un bucle FOR-------")
// for (
//     let i = 0; 
//     i < dias_de_clase.length; //aca con el ".length" ponemos el limite al bucle
//      i++ //sumamos 1
//     ) {
//     console.log(dias_de_clase[i]);
// }


//FOR OF: es un bucle especializado en recorrer variables
// console.log("------Ahora con un bucle FOR OF-------")
// for(let dia of dias_de_clase){
//     console.log(dia)
// }


//EJEMPLO: Le quiero pedir al usuario diga que dia de clase quiere agregar.

// let dia_clase = prompt("Decime que día quisieras agregar a la lista de dias de clase")

// while(dias_de_clase.includes(dia_clase)){ //chequeo que dia de clase este incluido en el array dias_de_clase
//     alert('Día ya existente')
//     dia_clase = prompt("Decime que día quisieras agregar a la lista de dias de clase")
// }

// dias_de_clase.push(dia_clase)

// for(let dia of dias_de_clase){
//     console.log("El día " + dia + " hay clases")
// }

//EJEMPLO: Si el nombre del dia contiene una letra "l" mostrar por consola "Ojo con ese día".
//Sino mostrar por consola "X día es normal"

//Pasos:
    //1. recorrer el Array con un FOR o un FOR OF
    //2. Evaluar si el dia incluye el string "l"
    //3. comprobar si la condicion es true o false, mostrar por consola lo correcpondiente
let dias_de_clase = ['lunes', 'martes','miercoles', 'jueves', 'viernes']
let letra = ""

while (!letra || letra.length !== 1 || letra === null) {
    letra = prompt("Pon una sola letra a la que le tengas miedo");
}

for ( let dia of dias_de_clase){
        if (dia.includes(letra)) {
        console.log("ojo con el día " + dia )
        } else {
            console.log ("el día " + dia + " es un dia normal")
        }
    }