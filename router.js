var Omdb = require("./omdb");

//Manejar las rutas HTTP para GET y POST
function home(request, response){
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

//Manejar la peticion HTTP GET para la ruta /:omdbSearch eje. /Batman
function result(request, response){
  //Si la url == "/..."
  var omdbSearch = request.url.replace("/", "");

  if (omdbSearch.length > 0){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");

    //Obtenemos el JSON del API de omdb
    var omdbResult = new omdb(omdbSearch);
    //al ejecutar el evento "end"
    omdbResult.on("end", function (resultJSON){
      //Mostramos result.html

      //Almacenamos el resultado en un Objeto Nuevo
      var values = {
        title: resultJSON.Title,
        rated: resultJSON.Rated,
        genre: resultJSON.Genre,
        awards: resultJSON.Awards,
        rating: resultJSON.imdbRating,
        plot: resultJSON.Plot,
        poster: resultJSON.Poster
      }

      response.write(values.title + ',' + values.plot + ".\n");
      response.end("Footer\n");
    });

    //al ejecutar el evento "error"
    omdbResult.on("error", function (error){
        //Mostramos error.html
        response.write(error.message + "\n");
        response.end('Footer\n');
    })

  }
}

module.exports.home = home;
module.exports.result = result;
