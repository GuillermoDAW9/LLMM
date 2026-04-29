let xmlDoc;
let questions;
let current = 0;
let score = 0;
let time = 0;
let timer;

const quizDiv = document.getElementById("quiz");

document.getElementById("language").addEventListener("change", loadXML);

function loadXML() {
    const file = document.getElementById("language").value;

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        xmlDoc = this.responseXML;
        questions = xmlDoc.getElementsByTagName("question");
        current = 0;
        score = 0;
        time = 0;

        clearInterval(timer);
        timer = setInterval(updateTimer, 1000);

        showQuestion();
    };
    xhttp.open("GET", file);
    xhttp.send();
}

function updateTimer() {
    time++;
    document.getElementById("timer").innerText = "Tiempo: " + time + "s";
}

function showQuestion() {
    let q = questions[current];

    let text = "<h2>" + q.getElementsByTagName("wording")[0].textContent + "</h2>";

    let choices = q.getElementsByTagName("choice");

    for (let i = 0; i < choices.length; i++) {
        text += `<button onclick="checkAnswer(${i})">${choices[i].textContent}</button><br>`;
    }

    quizDiv.innerHTML = text;
}

function checkAnswer(i) {
    let choices = questions[current].getElementsByTagName("choice");

    if (choices[i].getAttribute("correct") === "yes") {
        score++;
    }

    document.getElementById("score").innerText = "Puntuación: " + score;
}

function nextQuestion() {
    current++;

    if (current >= questions.length) {
        quizDiv.innerHTML = "<h2>Test finalizado</h2>";
        clearInterval(timer);
        return;
    }

    showQuestion();
}

// Carga inicial
loadXML();
