var EventEmitter = require("events").EventEmitter;
var http = require("http");
var util = require("util");

/**
  EventEmitter sera utilizado para crear el evento de obtener la serie o pelicula que estemos buscando
  nuestro @parametro: searchOmdb
  @Constructor
*/

function Omdb(searchOmdb){
  EventEmitter.call(this);

  omdbEmitter = this;

  //Conexion hacia el API de OMDB http://www.omdbapi.com/?t=searchOmdb
  var request = http.get("http://www.omdbapi.com/?t=" + searchOmdb, function (response){
    var body = "";

    if(response.statusCode !== 200){
      request.abort();
      omdbEmitter.emit("error", new Error("Existe un error obteniendo la data para: " + searchOmdb + ". (" + http.STATUS_CODES[response.statusCode] + ")"));
    }

    response.on('data', function (chunk){
      body += chunk;
      omdbEmitter.emit("data", chunk);
    });

    response.on('end', function(){
      if(response.statusCode === 200){
        try{
          var omdbResponse = JSON.parse(body);
          omdbEmitter.emit("end", omdbResponse);
        }catch(error){
          omdbEmitter.emit("error", error);
        }
      }
    }).on("error", function (error){
      omdbEmitter.emit("error", error);
    });
  });
}

util.inherits(Omdb, EventEmitter);

module.exports = Omdb;
