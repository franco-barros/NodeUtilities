const os = require("os");
//sistemas operativos
//Arquitectura de los archivos
console.log(os.arch());
//Tipo de sistema operativo macos, linux, windows
console.log(os.platform());
//Informacion de la cpu de nuestro sistema para ver cuantos procesos podemos levantar
console.log(os.cpus().length);
//Errores del sistema
console.log(os.constants);
//La memoria libre que tenemos
const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}
function mb(megabytes) {
  return megabytes / SIZE;
}
function gb(gigabytes) {
  return gigabytes / SIZE;
}
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

//Directorio raiz del usuario

console.log(os.homedir());
console.log(os.tmpdir());

//Sirve para ver el hostname, por ejemplo si trabajamos con microservicios

console.log(os.hostname());

//Sirve para ver la interfaz de redes

console.log(os.networkInterfaces());
