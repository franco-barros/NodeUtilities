function hola(nombre, miCallback) {
  console.log("Hola", nombre);
  setTimeout(function () {
    console.log("Estoy siendo asincrona");
    miCallback();
  }, 2000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla..");
    callbackHablar();
  }, 2000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 2000);
}

//--

console.log("Iniciando proceso...");
hola("Franco", function () {
  hablar(function () {
    hablar(function () {
      adios("Franco", function () {
        console.log("Terminando proceso...");
      });
    });
  });
});
