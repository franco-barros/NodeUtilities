console.log("Cualquier cosa");

//Sirve para cosas que quiero ver con mas informacion
console.info("Informacion");

//Sirve para ver los errores de forma mas visual
console.error("Errores");

//Sirve para ver los potenciales errores
console.warn("Precaucion");

//Sirve para dibujar una tabla en la terminal viendolo de mejor forma

var table = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "Otra cosa",
  },
];
console.table(table);

//Sirve ver las conversaciones de grupo de una manera mas limpia
//Tambien es muy util para ver que esta pasando dentro de funciones
console.group("Conversacion");
console.log("Hola");
console.log("Bla bla bla ");
console.log("Adios");
console.groupEnd("Conversacion");
console.log("Otra funcion");

//Ejmplo util en funciones

function function1() {
  console.group("Esto es la funcion 1");
  console.log("Esto tambien");
  console.log("Esto tambien");
  function2();
  console.groupEnd("Esto es la funcion 1");
}
function function2() {
  console.group("Funcion 2");
  console.log("Ahora estamos en la funcion 2");
  console.groupEnd("Funcion 2");
}

console.log("Empezamos");
function1();
console.log("Volvemos a la funcion 1");

//Sirve para usar de contador
console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces"); //Vuelve a poner el contador en 1
console.count("veces");
