var Omdb = require("./omdb");
var render = require("./render");

//Manejar las rutas HTTP para GET y POST
function home(request, response){
  //Si la url == "/" && el verbo es GET
  if(request.url === "/"){
    //Mostramos search.html
    response.writeHead(200, {'Content-Type': 'text/plain'});
    render.view("header",{}, response);
    render.view("search", {}, response);
    render.view("footer", {}, response);
    response.end();
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
    render.view("header", {}, response);

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

      render.view("result", values, response);
      render.view("footer", {}, response);
      response.end();
    });

    //al ejecutar el evento "error"
    omdbResult.on("error", function (error){
        //Mostramos error.html
        render.view("error", {errorMessage: error.message}, response);
        render.view("search", {}, response);
        render.view("footer", {}, response);
        response.end();
    })

  }
}

module.exports.home = home;
module.exports.result = result;
