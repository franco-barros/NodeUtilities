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
async function main() {
  let nombre = await hola("Franco");
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Terminamos el proceso");
}
console.log("Empezamos el proceso");
main();
console.log("Segunda instruccion");
