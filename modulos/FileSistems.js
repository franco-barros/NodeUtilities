//Funciones mas importantes

const fs = require("fs");

//No es recomendable que sea asincrona ya que bloquea las peticiones

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err.message);
      cb(null); // En caso de error, devolvemos null o algún indicador
    } else {
      cb(data.toString());
    }
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error("No he podido escribirlo", err);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

leer(__dirname + "/archivo.txt", (contenido) => {
  if (contenido) {
    console.log("Contenido del archivo:", contenido);
  } else {
    console.log("No se pudo leer el archivo.");
  }
});

escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log);

borrar(__dirname + "/archivo1.txt", console.log);
