function otraFuncion() {
  return serompe();
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error("Errore en mi funcion asincrona");
      cb(err);
    }
  }, 3000);
}

function serompe() {
  return 3 + z;
}
try {
  serompe();
} catch (err) {
  console.error("Hay un error");
  console.error(err.message);
  console.log("Tenemos el error");
}

serompe();
