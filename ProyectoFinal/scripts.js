let xmlDoc;
let preguntas = [];
let actual = 0;
let puntos = 0;
let cargado = false;

const quiz = document.getElementById("quiz");
const startBtn = document.getElementById("startBtn");

// 📥 CARGA XML (OBLIGATORIO esperar a que termine)
const xhttp = new XMLHttpRequest();

xhttp.onload = function () {
    xmlDoc = this.responseXML;
    preguntas = xmlDoc.getElementsByTagName("question");

    cargado = true;

    console.log("XML cargado correctamente:", preguntas.length, "preguntas");
};

xhttp.open("GET", "preguntas_futbol.xml");
xhttp.send();


// 🎮 INICIAR JUEGO
function empezar() {

    if (!cargado) {
        alert("Cargando preguntas, espera un segundo...");
        return;
    }

    startBtn.style.display = "none";
    quiz.style.display = "block";

    actual = 0;
    puntos = 0;

    mostrarPregunta();
}


// ❓ MOSTRAR PREGUNTA
function mostrarPregunta() {

    if (actual >= preguntas.length) {
        quiz.innerHTML = `
            <h2>🏁 Juego terminado</h2>
            <p>Puntuación final: ${puntos} / ${preguntas.length}</p>
        `;
        return;
    }

    let q = preguntas[actual];

    let html = `
        <h2>Pregunta ${actual + 1} de ${preguntas.length}</h2>
        <p>${q.getElementsByTagName("wording")[0].textContent}</p>
    `;

    let respuestas = q.getElementsByTagName("choice");

    for (let i = 0; i < respuestas.length; i++) {
        html += `
            <button onclick="comprobar(${i})">
                ${respuestas[i].textContent}
            </button>
        `;
    }

    quiz.innerHTML = html;
}


// ✔ COMPROBAR RESPUESTA
function comprobar(i) {

    let respuestas = preguntas[actual].getElementsByTagName("choice");
    let botones = quiz.getElementsByTagName("button");

    for (let b of botones) {
        b.disabled = true;
    }

    if (respuestas[i].getAttribute("correct") === "yes") {
        botones[i].style.background = "green";
        puntos++;
    } else {
        botones[i].style.background = "red";
    }

    setTimeout(() => {
        actual++;
        mostrarPregunta();
    }, 900);
}
