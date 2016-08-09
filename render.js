var fs = require("fs");

//Creacion de una funcion que permita el manejo de la lectura de archivos y mezclar los valores
function view(templateName, values, response){
  //Leer el contenido del templateName
  var fileContent = fs.readFile('./views' + templateName + '.html');

  response.write(fileContent);
}

module.exports.view = view;
