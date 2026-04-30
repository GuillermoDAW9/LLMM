const bancoPreguntas = [
    { p: "¿Qué selección tiene más Mundiales?", r: ["Brasil", "Alemania", "Italia", "Argentina"], c: 0 },
    { p: "¿Quién es el máximo goleador de la Champions?", r: ["Messi", "Cristiano Ronaldo", "Lewandowski", "Raúl"], c: 1 },
    { p: "¿En qué país fue el primer Mundial (1930)?", r: ["Brasil", "Uruguay", "Francia", "Italia"], c: 1 },
    { p: "¿Quién ganó el Balón de Oro 2023?", r: ["Haaland", "Messi", "Mbappé", "Rodri"], c: 1 },
    { p: "¿Qué equipo tiene más Champions?", r: ["Milan", "Liverpool", "Real Madrid", "Bayern"], c: 2 },
    { p: "¿Cómo apodan a la selección de Chile?", r: ["La Roja", "La Tri", "La Albiceleste", "La Sele"], c: 0 },
    { p: "¿En qué club se retiró Zidane?", r: ["Juventus", "Bordeaux", "Real Madrid", "Cannes"], c: 2 },
    { p: "¿Quién ganó la Eurocopa 2024?", r: ["Inglaterra", "Francia", "España", "Portugal"], c: 2 },
    { p: "¿Quién es 'O Rei'?", r: ["Puskas", "Maradona", "Pelé", "Eusebio"], c: 2 },
    { p: "¿En qué año ganó España el Mundial?", r: ["2006", "2010", "2014", "2002"], c: 1 },
    { p: "¿Estadio del Liverpool?", r: ["Old Trafford", "Etihad", "Anfield", "Goodison Park"], c: 2 },
    { p: "¿A qué selección llaman 'La Oranje'?", r: ["Bélgica", "Países Bajos", "Alemania", "Austria"], c: 1 },
    { p: "¿Quién marcó el gol de la 10ª del Madrid?", r: ["Bale", "Ramos", "Cristiano", "Modric"], c: 1 },
    { p: "¿Cuántos Balones de Oro tiene CR7?", r: ["3", "4", "5", "6"], c: 2 },
    { p: "¿Quién entrenaba al Barça del sextete?", r: ["Luis Enrique", "Guardiola", "Vilanova", "Cruyff"], c: 1 },
    { p: "¿Quién es la 'Araña Negra'?", r: ["Yashin", "Buffon", "Casillas", "Zoff"], c: 0 },
    { p: "¿Club con más Premier League?", r: ["Arsenal", "Chelsea", "Man. United", "Man. City"], c: 2 },
    { p: "¿En qué país nació Samuel Eto'o?", r: ["Camerún", "Costa de Marfil", "Ghana", "Nigeria"], c: 0 },
    { p: "¿Quién ganó el Mundial 1986?", r: ["Alemania", "Argentina", "Brasil", "Francia"], c: 1 },
    { p: "¿En qué país se jugará la final del Mundial 2026?", r: ["México", "Canadá", "EE.UU.", "Brasil"], c: 2 }
];

let indiceActual = 0;
let puntos = 0;

function comenzar() {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('juego').classList.remove('oculto');
    mostrarPregunta();
}

function mostrarPregunta() {
    if (indiceActual < bancoPreguntas.length) {
        const item = bancoPreguntas[indiceActual];
        document.getElementById('pregunta').innerText = item.p;
        document.getElementById('numero-pregunta').innerText = `Pregunta: ${indiceActual + 1} / ${bancoPreguntas.length}`;
        
        const contenedorOpciones = document.getElementById('opciones');
        contenedorOpciones.innerHTML = ''; // Limpiamos botones viejos

        item.r.forEach((opc, i) => {
            const btn = document.createElement('button');
            btn.innerText = opc;
            btn.classList.add('btn-respuesta');
            btn.onclick = () => verificar(i);
            contenedorOpciones.appendChild(btn);
        });
    } else {
        terminar();
    }
}

function verificar(seleccionado) {
    if (seleccionado === bancoPreguntas[indiceActual].c) {
        puntos++;
        document.getElementById('marcador').innerText = `Puntos: ${puntos}`;
    }
    indiceActual++;
    mostrarPregunta();
}

function terminar() {
    document.getElementById('juego').classList.add('oculto');
    document.getElementById('final').classList.remove('oculto');
    document.getElementById('puntuacion-final').innerText = `Has acertado ${puntos} de ${bancoPreguntas.length}`;
}
