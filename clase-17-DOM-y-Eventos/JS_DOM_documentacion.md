
# JavaScript DOM y Document

## ¿Qué es el DOM?
El DOM (Document Object Model) es una representación estructurada del documento HTML. Permite a JavaScript acceder y manipular el contenido, estructura y estilo de una página web.

## Acceso al DOM
```javascript
document.getElementById("miElemento");
document.querySelector(".miClase");
document.querySelectorAll("div");
```

## Manipulación del DOM
```javascript
// Cambiar texto
document.getElementById("titulo").innerText = "Nuevo título";

// Cambiar HTML
document.getElementById("contenido").innerHTML = "<p>Nuevo contenido</p>";

// Cambiar estilo
document.getElementById("caja").style.backgroundColor = "blue";
```

## Crear y Agregar Elementos
```javascript
let nuevoElemento = document.createElement("p");
nuevoElemento.innerText = "Hola mundo";
document.body.appendChild(nuevoElemento);
```

## Eliminar Elementos
```javascript
let elemento = document.getElementById("aEliminar");
elemento.remove();
```

## Eventos en el DOM
```javascript
document.getElementById("boton").addEventListener("click", function() {
    alert("Botón clickeado!");
});
```

## Buenas prácticas
- Usar `addEventListener` en lugar de atributos HTML como `onclick`.
- Manipular el DOM lo menos posible para mejorar el rendimiento.
- Separar lógica JavaScript del HTML.

## Ejercicios para practicar
1. Crear un botón que al hacer clic cambie el color de fondo de la página.
2. Crear una lista dinámica a partir de un array.
3. Hacer un formulario que al enviarse muestre los datos en pantalla sin recargar la página.
