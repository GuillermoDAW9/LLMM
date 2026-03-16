// Título del primer libro
document.getElementsByTagName("title")[0].childNodes[0].nodeValue;

// Todos los títulos
for (let i = 0; i < document.getElementsByTagName("title").length; i++) {
    console.log(document.getElementsByTagName("title")[i].childNodes[0].nodeValue);
}

// Número de atributos del cuarto libro
document.getElementsByTagName("book")[3].attributes.length;

// Valor de los atributos del cuarto libro
for (let i = 0; i < document.getElementsByTagName("book")[3].attributes.length; i++) {
    console.log(document.getElementsByTagName("book")[3].attributes[i].value);
}

// Número de autores del tercer libro
document.getElementsByTagName("book")[2].getElementsByTagName("author").length;

// Autores del tercer libro
for (let i = 0; i < document.getElementsByTagName("book")[2].getElementsByTagName("author").length; i++) {
    console.log(document.getElementsByTagName("book")[2].getElementsByTagName("author")[i].childNodes[0].nodeValue);
}
