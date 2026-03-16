// Título del primer libro
console.log("Título del primer libro:");
console.log(document.getElementsByTagName("title")[0].childNodes[0].nodeValue);

// Año del primer libro
console.log("Año del primer libro:");
console.log(document.getElementsByTagName("year")[0].childNodes[0].nodeValue);

// Precio del segundo libro
console.log("Precio del segundo libro:");
console.log(document.getElementsByTagName("price")[1].childNodes[0].nodeValue);

// Autor del primer libro
console.log("Autor del primer libro:");
console.log(document.getElementsByTagName("author")[0].childNodes[0].nodeValue);

// Otra forma de sacar el autor del primer libro
console.log("Autor del primer libro (otra forma):");
console.log(document.getElementsByTagName("book")[0].getElementsByTagName("author")[0].childNodes[0].nodeValue);

// Primer autor del tercer libro
console.log("Primer autor del tercer libro:");
console.log(document.getElementsByTagName("book")[2].getElementsByTagName("author")[0].childNodes[0].nodeValue);

// Segundo autor del tercer libro
console.log("Segundo autor del tercer libro:");
console.log(document.getElementsByTagName("book")[2].getElementsByTagName("author")[1].childNodes[0].nodeValue);

// Nombre del primer atributo del primer libro
console.log("Nombre del primer atributo del primer libro:");
console.log(document.getElementsByTagName("book")[0].attributes[0].name);
