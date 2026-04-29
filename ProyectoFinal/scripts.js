let xmlDoc, questions;
let current = 0;
let score = 0;
let time = 0;
let timer;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");

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
        timer = setInterval(() => {
            time++;
            document.getElementById("timer").innerText = "⏱ " + time + "s";
        }, 1000);

        showQuestion();
    };

    xhttp.open("GET", file);
    xhttp.send();
}

function showQuestion() {
    let q = questions[current];
    questionEl.textContent = q.getElementsByTagName("wording")[0].textContent;

    answersEl.innerHTML = "";

    let choices = q.getElementsByTagName("choice");

    for (let i = 0; i < choices.length; i++) {
        let btn = document.createElement("button");
        btn.textContent = choices[i].textContent;

        btn.onclick = () => checkAnswer(btn, choices[i]);

        answersEl.appendChild(btn);
    }
}

function checkAnswer(button, choice) {
    let allButtons = answersEl.getElementsByTagName("button");

    for (let btn of allButtons) {
        btn.disabled = true;
    }

    if (choice.getAttribute("correct") === "yes") {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    document.getElementById("score").innerText = "⭐ " + score;
}

function nextQuestion() {
    current++;

    if (current >= questions.length) {
        document.getElementById("card").innerHTML =
            `<h2>Test finalizado</h2>
             <p>Puntuación: ${score}</p>
             <p>Tiempo: ${time}s</p>`;

        clearInterval(timer);
        return;
    }

    showQuestion();
}

// carga inicial
loadXML();
