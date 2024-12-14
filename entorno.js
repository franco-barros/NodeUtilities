let nombre = process.env.NOMBRE || "Sin nombre";
let web = process.env.MI_WEB || "No tengo web";

console.log("Hola" + nombre);
console.log("Mi web es" + web);

//Lo importante de nodemon es que ejecuta los cambios
//en el momento no importa si son muy grandes o pequeños
