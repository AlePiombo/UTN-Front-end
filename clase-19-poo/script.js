// const p1 = {
//     nombre:'Ale',
//     nivel:'junior',
//     edad:'36'
// }

// const p2 = {
//     nombre:'Juli',
//     nivel:'sr',
//     edad:'32'
// }

// const p3 = {
//     nombre:'Ale',
//     nivel:'junior',
//     edad:'36'
// }

function crearPersona(nombre, nivel, edad){
    const nueva_persona = {
        nombre: nombre,
        nivel: nivel,
        edad: edad
    }

    return nueva_persona
}


const p1 = crearPersona('ale', 'junior', 36)
console.log(p1)


function CrearPersona2(nombre, nivel, edad){
    this.nombre = nombre,
    this.nivel = nivel,
    this.edad = edad
}

const p2 = new CrearPersona2 ('Ale','trainee', 26)

console.log('P2 es = a ' , p2)