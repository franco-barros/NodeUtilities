//Formas de escuchar procesos

process.on(beforeExit, () => {
  console.log("El proceso va a terminar");
});

process.on(exit, () => {
  console.log("El proceso acabo");
});

// Sirve para ver un error que no esta controlado

process.on("uncaughException", (err, origen) => {
  console.error("Se nos olvido capturar un error");
  console.error("Quiero saber cual es el error");
});

funcionQueNoExiste();

console.log("Esto si el error no se encuentra");
