//Objetos

//al definir variable pero con llaves creo un objeto

let auto1 = {
    'color': 'negro',
    'modelo': 'civic',
    'marca': 'honda',
    'dueños': ['Ale', 'Ariel', 'Kiko'],
    'anio': 1995

}

let auto2 = {
    'color': 'rojo',
    'modelo': 'Maradona',
    'marca': 'Ferrari',
    'dueños': ['Diego', 'Copolla'],
    'anio': 1986

}
//Accede a la propiedad de un objeto con notación de []
console.log(auto1['color'])
console.log(auto1['anio'])

//Accede a la propiedad de un objeto con notación de puntos
console.log(auto1.marca)


//Quiero cambiar el anio a 1994
auto1.anio = 1994
console.log(auto1.anio)


//los objetos se pueden agrupar en arrays

let autos =  [auto1, auto2]

console.log(autos)