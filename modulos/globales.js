let i = 0;
let intervalo = setInterval(function () {
  console.log("Hola");
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);
// Esta funcion se utiliza mucho cada vez que quieres
// hacer una funcion que se repita muchas veces
// por ejemplo en la base de datos, estilo que intente
// acceder cada cierto tiempo

setImmediate(function () {
  console.log("Hola");
});

//Con esto nos da toda la informacion del proceso
console.log(process);

//Con esto podemos ver el nombre del directorio donde estamos
console.log(__dirname);

//Con esto podemos ver el nombre del fichero de globales
console.log(__filename);

//Siempre es mejor crear modulos en vez de variables globales

//En el caso de que sea necesaria escribir una variable global
global.miVariable = "Valor de la misma";
console.log(miVariable);
