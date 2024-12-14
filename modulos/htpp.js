//Creacion de server usando http

const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva peticion!!");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      let saludo = hola();
      res.write(saludo);
      res.end();
      break;

    default:
      res.write("Error 404: No se que es lo que estas buscando");
      res.end();
  }

  //   res.writeHead(201, { "content-type": "text/plain" });
  //   //Escribir respuesta al usuario
  //   res.write("Hola ya se usar http en nodejs");

  //   res.end();
  // }

  function hola() {
    return "Hola que tal";
  }
  console.log("Escucahndo http en el punto 3000");
}

//Para ver como esta funcionando usamos chrome devtools en
// la seccion de inspect, esta nos dara una forma rapida de analizarla
