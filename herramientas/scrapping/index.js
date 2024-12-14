//Sirve para ver navegadores para ejecutar un script

const puppeteer = require("puppeteer")(async () => {
  console.log("Lanzamos el navegador");
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto("https://es.wikipedia.org/wiki/Wikipedia:Portada");

  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });

  console.log(titulo1);

  console.log("Cerrando navegador");
  // browser.close();
  console.log("Navegador cerrado");
})();
