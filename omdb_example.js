var Omdb = require("./omdb");

var omdbSearch = new Omdb("Game of Thrones");

/*
  Cuando el JSON sea recibido por completo el evento "end" sera ejecutado
  y el JSON sera manejado por el callback, en eset caso el console.dir
*/
omdbSearch.on("end", console.dir);


/*
  Si algun error en la red ocurre o algun error de HTTP, un objeto de error
  sera pasado y sera manejado por el callback, en ese caso el console.error
*/
omdbSearch.on("error", console.error);
