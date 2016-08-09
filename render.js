var fs = require("fs");

function mergeValues(values, content){
  //Insertar los valores que vienen dentro del contenido
  for (var key in values){
    content = content.replace("{{"+ key +"}}", values[key]);
  }

  return content;
}

//Creacion de una funcion que permita el manejo de la lectura de archivos y mezclar los valores
function view(templateName, values, response){
  //Leer el contenido del templateName
  var fileContent = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});

  fileContent = mergeValues(values, fileContent);

  response.write(fileContent);
}

module.exports.view = view;
