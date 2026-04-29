let xmlDoc;
let preguntas;
let actual = 0;
let puntos = 0;

const quiz = document.getElementById("quiz");

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    xmlDoc = this.responseXML;
    preguntas = xmlDoc.getElementsByTagName("question");
    mostrarPregunta();
};
xhttp.open("GET", "preguntas_futbol.xml");
xhttp.send();

function mostrarPregunta() {
    let q = preguntas[actual];

    let texto = "<h2>" + q.getElementsByTagName("wording")[0].textContent + "</h2>";

    let respuestas = q.getElementsByTagName("choice");

    for (let i = 0; i < respuestas.length; i++) {
        texto += `<button onclick="comprobar(this, ${i})">${respuestas[i].textContent}</button>`;
    }

    quiz.innerHTML = texto;
}

function comprobar(boton, i) {
    let respuestas = preguntas[actual].getElementsByTagName("choice");

    let botones = document.getElementsByTagName("button");

    for (let b of botones) {
        b.disabled = true;
    }

    if (respuestas[i].getAttribute("correct") === "yes") {
        boton.classList.add("correcto");
        document.getElementById("resultado").innerText = "✅ Correcto!";
        puntos++;
    } else {
        boton.classList.add("incorrecto");
        document.getElementById("resultado").innerText = "❌ Incorrecto";
    }

    document.getElementById("score").innerText = "Puntos: " + puntos;
}

function siguiente() {
    actual++;

    if (actual >= preguntas.length) {
        quiz.innerHTML = "<h2>Juego terminado</h2>";
        return;
    }

    document.getElementById("resultado").innerText = "";
    mostrarPregunta();
}
