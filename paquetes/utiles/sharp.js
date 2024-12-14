//Sirve para imagenes que tengamos que redimensionar o cambiar de formato

const sharp = require("sharp");

sharp("original.png").resize(80).toFile("resized.png").grayscale();
