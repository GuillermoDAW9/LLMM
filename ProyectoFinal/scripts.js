let xmlDoc;
let preguntas;
let actual = 0;
let puntos = 0;
let juegoIniciado = false;

const quiz = document.getElementById("quiz");

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    xmlDoc = this.responseXML;
    preguntas = xmlDoc.getElementsByTagName("question");
};
xhttp.open("GET", "preguntas_futbol.xml");
xhttp.send();

function empezar() {
    document.getElementById("startBtn").style.display = "none";
    quiz.style.display = "block";
    actual = 0;
    puntos = 0;
    mostrarPregunta();
}

function mostrarPregunta() {
    if (actual >= preguntas.length) {
        quiz.innerHTML = `<h2>🏁 Juego terminado</h2>
                          <p>Puntuación final: ${puntos}</p>`;
        return;
    }

    let q = preguntas[actual];

    let texto = `<h2>Pregunta ${actual + 1}/20</h2>`;
    texto += `<p>${q.getElementsByTagName("wording")[0].textContent}</p>`;

    let respuestas = q.getElementsByTagName("choice");

    for (let i = 0; i < respuestas.length; i++) {
        texto += `<button onclick="comprobar(${i})">
                    ${respuestas[i].textContent}
                  </button>`;
    }

    quiz.innerHTML = texto;
}

function comprobar(i) {
    let respuestas = preguntas[actual].getElementsByTagName("choice");
    let botones = quiz.getElementsByTagName("button");

    for (let b of botones) {
        b.disabled = true;
    }

    if (respuestas[i].getAttribute("correct") === "yes") {
        botones[i].classList.add("correcto");
        document.getElementById("resultado").innerText = "✅ Correcto";
        puntos++;
    } else {
        botones[i].classList.add("incorrecto");
        document.getElementById("resultado").innerText = "❌ Incorrecto";
    }

    document.getElementById("score").innerText = "Puntos: " + puntos;

    // 🔥 PASA AUTOMÁTICAMENTE A LA SIGUIENTE
    setTimeout(() => {
        actual++;
        document.getElementById("resultado").innerText = "";
        mostrarPregunta();
    }, 1000);
}
