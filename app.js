var router = require("./router");
//Problema: Necesitamos una manera visual de mostrar el resultado obtenido de la consulta hacia la OMDBD API
//Solucion: Utilizar Node.js to mostrar el resultado obtenido de la busqueda en un template via HTTP

//Crear un Servidor Web
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (request, response){
  router.home(request, response);
  router.result(request, response);
})

server.listen(port, hostname, function () {
  console.log('Servidor corriendo en http://' + hostname + ':'+ port);
})
