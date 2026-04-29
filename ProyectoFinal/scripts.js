let preguntas = [];
let actual = 0;
let puntos = 0;

const quiz = document.getElementById("quiz");
const startBtn = document.getElementById("startBtn");

// 📥 CARGA SEGURA DEL XML
async function cargarXML() {
    const response = await fetch("preguntas_futbol.xml");
    const text = await response.text();

    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "text/xml");

    preguntas = xml.getElementsByTagName("question");

    console.log("✔ Preguntas cargadas:", preguntas.length);
}

cargarXML();


// 🎮 INICIAR
function empezar() {

    if (preguntas.length < 1) {
        alert("Aún no se han cargado las preguntas. Espera 1 segundo.");
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
            <h2>🏁 Fin del juego</h2>
            <p>Puntuación: ${puntos} / ${preguntas.length}</p>
        `;
        return;
    }

    let q = preguntas[actual];

    let html = `
        <h2>Pregunta ${actual + 1} / ${preguntas.length}</h2>
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


// ✔ COMPROBAR
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
    }, 800);
}
