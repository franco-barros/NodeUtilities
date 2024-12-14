function hola(nombre, miCallback) {
  console.log("Hola", nombre);
  setTimeout(function () {
    console.log("Estoy siendo asincrona");
    miCallback();
  }, 2000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 2000);
}

console.log("Iniciando proceso...");
hola("Franco", function () {
  adios("Franco", function () {
    console.log("Terminando proceso...");
  });
});
