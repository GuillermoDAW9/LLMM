// Título del primer libro
document.getElementsByTagName("title")[0].childNodes[0].nodeValue;

// Año del primer libro
document.getElementsByTagName("year")[0].childNodes[0].nodeValue;

// Precio del segundo libro
document.getElementsByTagName("price")[1].childNodes[0].nodeValue;

// Autor del primer libro
document.getElementsByTagName("author")[0].childNodes[0].nodeValue;
// otra posibilidad es...
document.getElementsByTagName("book")[0].getElementsByTagName("author")[0].childNodes[0].nodeValue;

// Primer autor del tercer libro
document.getElementsByTagName("book")[2].getElementsByTagName("author")[0].childNodes[0].nodeValue;

// Segundo autor del tercer libro
document.getElementsByTagName("book")[2].getElementsByTagName("author")[1].childNodes[0].nodeValue;

// Nombre del primer atributo del primer libro
document.getElementsByTagName("book")[0].attributes[0].name;
