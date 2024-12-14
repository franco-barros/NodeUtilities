//Dar la data de los errores y
//gestionar el error en una parte especifica

function asincrona() {
  setTimeout(function () {
    try {
      let a = 3 + z;
      cancelIdleCallback(null, a);
    } catch (e) {
      cancelIdleCallback(e);
    }
  }, 1000);
}

asincrona(function (err, dato) {
  if (err) {
    console.error("Tenemos un error");
    console.error(err);
    return false;
    // throw err // NO FUNCIONA EN LA FUNCION ASINCRONA;
  }
  console.log("Todo ha ido muy bien, data es ", data);
});
