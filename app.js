//Problema: Necesitamos una manera visual de mostrar el resultado obtenido de la consulta hacia la OMDBD API
//Solucion: Utilizar Node.js to mostrar el resultado obtenido de la busqueda en un template via HTTP

//1. Crear un Servidor Web


//2. Manejar las rutas HTTP para GET y POST
  //Si la url == "/" && el verbo es GET
    //Mostramos search.html
  //Si la url == "/" && el verbo es POST
    //Redireccionamos hacia /:omdbSearch


//3. Manejar la peticion HTTP GET para la ruta /:omdbSearch eje. /Batman
  //Si la url == "/..."
    //Obtenemos el JSON del API de omdb
      //al ejecutar el evento "end"
        //Mostramos result.html
      //al ejecutar el evento "error"
        //Mostramos error.html

//4. Creacion de una funcion que permita el manejo de la lectura de archivos y mezclar los valores
  // que se leen y obtener un string
  // sobreescribir los valores de los placeholders en un string
