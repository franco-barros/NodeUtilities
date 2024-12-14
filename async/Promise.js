function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola", nombre);
      resolve(nombre);
    }, 2000);
  });
}

function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Bla bla bla bla..");
      resolve(nombre);
      reject("Hay un error");
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adiós", nombre);
      resolve();
    }, 2000);
  });
}

//--

console.log("Iniciando el proceso");
hola("Franco")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Terminando el proceso");
  })
  .catch((error) => {
    console.error("Ha ocurrido un error:");
    console.error(error);
  });
