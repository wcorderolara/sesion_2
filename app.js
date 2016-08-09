//Problema: Necesitamos una manera visual de mostrar el resultado obtenido de la consulta hacia la OMDBD API
//Solucion: Utilizar Node.js to mostrar el resultado obtenido de la busqueda en un template via HTTP

//1. Crear un Servidor Web
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Primer Texto desde un Servidor Web con Node.js');
})

server.listen(port, hostname, function () {
  console.log('Servidor corriendo en http://' + hostname + ':'+ port);
})

//2. Manejar las rutas HTTP para GET y POST
function homeRoute(request, response){
  //Si la url == "/" && el verbo es GET
  if(request.url === "/"){
    //Mostramos search.html
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  }
  //Si la url == "/" && el verbo es POST
    //Redireccionamos hacia /:omdbSearch
}

//3. Manejar la peticion HTTP GET para la ruta /:omdbSearch eje. /Batman
function resultRoute(request, response){
  //Si la url == "/..."
  var omdbSearch = request.url.replace("/", "");

  if (omdbSearch.length > 0){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write(omdbSearch + "\n");
    response.end("Footer\n");

    //Obtenemos el JSON del API de omdb
      //al ejecutar el evento "end"
        //Mostramos result.html
      //al ejecutar el evento "error"
        //Mostramos error.html
  }
}

//4. Creacion de una funcion que permita el manejo de la lectura de archivos y mezclar los valores
  // que se leen y obtener un string
  // sobreescribir los valores de los placeholders en un string
