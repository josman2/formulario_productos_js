/*let usuario = [ {
    "nombre" : "Pedro",
    "salario": 2000000,
    "correo" : "pedro@gmail.com",
    "telefono": 3103344340
},
{
    "nombre" : "Juan",
    "salario": 150000,
    "correo" : "juan@gmail.com",
    "telefono": 3103344340
},
{
    "nombre" : "Luisa",
    "salario": 400000,
    "correo" : "luisa@gmail.com",
    "telefono": 3103344340
}
];
//guardar dato
localStorage.setItem("usuario", JSON.stringify(usuario));
alert("Se guardo el dato con exito");
*/

//extraer un dato del navegador
/*
let datosDelNavegador = localStorage.getItem("usuario");
let datos = JSON.parse(datosDelNavegador);

datos.forEach((dato, i)=>{
    document.write(i +"<br>");
    document.write("nombre :"+ dato.nombre+"<br>");
    document.write("salario:"+ dato.salario+"<br>");
    document.write("correo:"+ dato.correo+"<br>");
    document.write("telefono :"+ dato.telefono+"<br>");
    document.write("<hr>");
});
*/

//eliminar un dato de localStorage
//localStorage.removeItem("usuario");

//variables globales
const d = document;
let nombrePro = d.querySelector(".nombre-pro");
let presentacionPro = d.querySelector(".presentacion-pro");
let imagenPro = d.querySelector(".imagen-pro");
let precioPro = d.querySelector(".precio-pro");
let btnCrear = d.querySelector(".boton-guardar");
let tabla = d.querySelector(".table tbody");

//evento del boton guardar
btnCrear.addEventListener("click", function() {
    obtenerDatos();
});

//funcion para tomar los datos del formulario
function obtenerDatos() {
    //validar datos del formulario
    if(nombrePro.value == "" || presentacionPro.value == ""
       || precioPro.value == "" || imagenPro.value == ""){
        alert("Debes escribir en el formulario");
        return;
    }
    //guardar Datos en un objeto
    let productos = {
        "nombre" : nombrePro.value,
        "presentacion" : presentacionPro.value,
        "imagen" : imagenPro.value,
        "precio" : precioPro.value
    };
    //limpiar el formulario
    nombrePro.value = "";
    presentacionPro.value = "";
    imagenPro.value = "";
    precioPro.value = "";
    //verificar datos en la consola
    //console.log(productos);
    guardarDatos( productos );

}
let referencia = "productos";
//funcion para guardar datos en localStorage
function guardarDatos( datos ) {
    let pro = [];
    //obtener datos antiguos guardados
    let datosDelNavegador = JSON.parse( localStorage.getItem(referencia) );
    //validar que no hayan datos nulos
    if( datosDelNavegador !== null ){
        pro = datosDelNavegador;
    }
    //agregar un nuevo dato al array
    pro.push(datos);
    console.log(pro);
    //guardar el dato nuevo y antiguos en el localStorage
    localStorage.setItem(referencia, JSON.stringify(pro) );
    alert("Producto guardado con exito");
}
//funcio para mostrar los datos en la tabla
function mostrarDatos() {
    let pro = [];
    //obtener datos antiguos guardados
    let datosDelNavegador = JSON.parse (localStorage.getItem(referencia));
    //validar datos que no hayan datos nulos
    if( datosDelNavegador !== null ){
        pro = datosDelNavegador;
    }

    //recorrer Los datos con un ciclo 
    //console.log("datos guardados: "+pro[0].nombre);
    pro.forEach( function(datos, i ) {
        //crear una etuiqueta para las filas 
        let fila = d.createElement("tr");
        //agregar columnas de la fila
        fila.innerHTML = `
           <td> ${i} </td>
           <td> ${ datos.nombre } </td>
           <td> ${ datos.presentacion } </td>
           <td> ${datos.precio} </td>
           <td> <img src="${datos.imagen}" width="10%"> </td>
           <td> <button> Editar </button> - <button onclick="eliminarPro( ${i} )"> Eliminar </button> </td>
        `;
        //pasar la fila con los datos a la tabla
        tabla.appendChild(fila);
        
    });

}
//ejecutar funcion
mostrarDatos();

//funcion para borrar datos
function eliminarPro( posicion ) {
    let pro = [];
    //obtener datos antiguos guardados
    let datosDelNavegador = JSON.parse (localStorage.getItem(referencia));
     //validar datos que no hayan datos nulos
     if( datosDelNavegador !== null ){
        pro = datosDelNavegador;
    }
    let productoEliminado = pro.splice(posicion, 1 );
    //mostrar el producto eliminado
    //console.log(productoEliminado)
    let confirmar = confirm("¿deseas borrar este producto?");
    if ( confirmar ) {
        localStorage.setItem(referencia, JSON.stringify(pro));
    }

    alert ("producto eliminado con exito");
    
    
}