//Ejercicios JavaScript clase 14 


/*
1. Hacer una función que  reciba un parámetro y nos devuelva el tipo de valor que es. 
Ejemplo: 
Let valor =“hola” tipoDeDato(valor)  —-> devuelve string 
Let valor =4546.   tipoDeDato(valor)  —-> devuelve number    

2. Dado una edad , usar un condicional para indicar por consola si esa persona es mayor de 18 años o no. 
3. Confeccionar un programa que pida por medio de un prompt()  tres notas de un alumno, calcule el promedio e imprima alguno de estos mensajes: 
    • Si el promedio es >=7 mostrar "Promocionado". 
    • Si el promedio es >=4 y <7 mostrar "Regular". 
    • Si el promedio es <4 mostrar “Reprobado”. 
4. Dado un año ingresado por medio de un prompt() devolver por consola la edad que tiene o tendrá este año. Para este ejercicio no vamos a tener en cuenta el mes en que nació 
*/

// Punto 1.
/*
let input1 = null
input1 = prompt("Inserte lo que quiera insertar");
if (input1 === null) {
    console.log("El usuario canceló el prompt. por lo tanto es un valor null"); // Caso en que el usuario cancela el prompt
} else if (!isNaN(Number(input1))) {
    console.log("Lo introducido es un " + typeof Number(input1)); // Devuelve "number" si es un número válido
} else if (input1 === "true" || input1 === "false") {
    console.log("Lo introducido es un " + typeof Boolean(input1)); // Devuelve "boolean" si es "true" o "false"
} else {
    console.log("Lo introducido es un " + typeof input1); // Devuelve "string" para cualquier otro caso
}
    */

//Punto 2 -> Dado una edad , usar un condicional para indicar por consola si esa persona es mayor de 18 años o no.
/*
let edad = null

while(!edad ||  edad <= 0 || isNaN(edad) ){
    edad = Number(
        prompt("Ingresa su edad en un valor numérico")
    )
}


if(edad > 18){
    console.log("la persona es mayor de 18. Tiene " + edad + " años")
}
else{
    console.log("la persona es menor de 18. Tiene " + edad + " años")
}
*/

/*
3. Confeccionar un programa que pida por medio de un prompt()  tres notas de un alumno, calcule el promedio e imprima alguno de estos mensajes: 
    • Si el promedio es >=7 mostrar "Promocionado". 
    • Si el promedio es >=4 y <7 mostrar "Regular". 
    • Si el promedio es <4 mostrar “Reprobado”. */

/*

let nota1 = null
let nota2 = null
let nota3 = null

while(!nota1 ||  nota1 <= 0 || isNaN(nota1) ){
    nota1 = Number(
        prompt("Ingresa tu nota en un valor numérico.")
        )
}
while(!nota2 ||  nota2 <= 0 || isNaN(nota2) ){
    nota2 = Number(
        prompt("Ingresa tu nota en un valor numérico")
    )
}
while(!nota3 ||  nota3 <= 0 || isNaN(nota3) ){
    nota3 = Number(
        prompt("Ingresa tu nota en un valor numérico")
    )
}

promedio = (nota1 + nota2 + nota3)/3

if(promedio >= 7){
    alert("Usted a Promocionado. Su nota final es: " + promedio)
}

else if(promedio >= 4 && promedio < 7){
    alert("Usted a es regular Su nota final es: " + promedio)
}

else{
    alert("Usted a Reprobado Su nota final es: " + promedio)
}
*/

//4. Dado un año ingresado por medio de un prompt() devolver por consola la edad que tiene o tendrá este año. 
// Para este ejercicio no vamos a tener en cuenta el mes en que nació 

let año_actual = null
let año_nacimiento = null
let edad = -1

while (edad < 0){
    while(!año_actual ||  año_actual <= 0 || isNaN(año_actual) ){
        año_actual = Number(
            prompt("Ingresa el año ACTUAL en un valor numérico.")
            )
    }

    while(!año_nacimiento ||  año_nacimiento <= 0 || isNaN(año_nacimiento) ){
        año_nacimiento = Number(
            prompt("Ingresa el año de NACIMIENTO en un valor numérico.")
            )
    }

    edad = año_actual - año_nacimiento

    if (edad < 0) {
        alert("El año de nacimiento no puede ser mayor que el año actual. Por favor, ingresa los valores nuevamente.");
        // Reiniciar las variables para volver a pedir los datos
        año_actual = null;
        año_nacimiento = null;
    }
}

alert("Su edad es " + edad)