const preguntas = [
    { q: "¿Qué selección ha ganado más Mundiales?", opt: ["Brasil", "Alemania", "Italia", "Argentina"], ans: 0 },
    { q: "¿Quién es el máximo goleador histórico de la Champions?", opt: ["Messi", "Lewandowski", "Cristiano Ronaldo", "Benzema"], ans: 2 },
    { q: "¿En qué país se jugó el primer Mundial (1930)?", opt: ["Brasil", "Francia", "Uruguay", "Italia"], ans: 2 },
    { q: "¿Qué equipo tiene más Champions League?", opt: ["AC Milan", "Real Madrid", "Liverpool", "Bayern Múnich"], ans: 1 },
    { q: "¿Quién ganó el Balón de Oro 2023?", opt: ["Haaland", "Mbappé", "Messi", "Rodri"], ans: 2 },
    { q: "¿Cómo le dicen a la selección de Chile?", opt: ["La Albiceleste", "La Roja", "La Tri", "Los Cafeteros"], ans: 1 },
    { q: "¿En qué club se retiró Zinedine Zidane?", opt: ["Juventus", "PSG", "Real Madrid", "Bordeaux"], ans: 2 },
    { q: "¿Qué selección ganó la Eurocopa 2024?", opt: ["Inglaterra", "Francia", "España", "Portugal"], ans: 2 },
    { q: "¿Quién es 'O Rei' del fútbol?", opt: ["Maradona", "Pelé", "Cruyff", "Eusebio"], ans: 1 },
    { q: "¿En qué estadio juega el FC Barcelona en 2024?", opt: ["Camp Nou", "Montjuïc", "Cornellà", "Metropolitano"], ans: 1 },
    { q: "¿Quién marcó el gol de España en la final de 2010?", opt: ["Xavi", "Villa", "Iniesta", "Torres"], ans: 2 },
    { q: "¿A qué selección llaman 'La Oranje'?", opt: ["Bélgica", "Países Bajos", "Alemania", "Sudáfrica"], ans: 1 },
    { q: "¿Qué jugador tiene el récord de más partidos en Mundiales?", opt: ["Matthäus", "Messi", "Klose", "Maradona"], ans: 1 },
    { q: "¿En qué ciudad se encuentra el estadio Anfield?", opt: ["Manchester", "Londres", "Liverpool", "Leeds"], ans: 2 },
    { q: "¿Cuál es el club con más títulos de la Premier League?", opt: ["Arsenal", "Chelsea", "Man. City", "Man. United"], ans: 3 },
    { q: "¿Quién era el entrenador del sextete del Barça?", opt: ["Luis Enrique", "Guardiola", "Vilanova", "Rijkaard"], ans: 1 },
    { q: "¿Qué portero es conocido como 'La Araña Negra'?", opt: ["Casillas", "Buffon", "Lev Yashin", "Neuer"], ans: 2 },
    { q: "¿Cuántos Balones de Oro tiene Cristiano Ronaldo?", opt: ["3", "4", "5", "6"], ans: 2 },
    { q: "¿En qué año ganó Argentina su primer Mundial?", opt: ["1978", "1986", "1930", "1994"], ans: 0 },
    { q: "¿Qué país organizará el Mundial 2026 con México y Canadá?", opt: ["Brasil", "Estados Unidos", "Panamá", "Colombia"], ans: 1 }
];

let indicePreguntaActual = 0;
let puntos = 0;

function jugar() {
    document.getElementById('pantalla-inicio').style.display = 'none';
    document.getElementById('pantalla-final').style.display = 'none';
    document.getElementById('pantalla-juego').style.display = 'block';
    indicePreguntaActual = 0;
    puntos = 0;
    mostrarPregunta();
}

function mostrarPregunta() {
    if (indicePreguntaActual < preguntas.length) {
        const p = preguntas[indicePreguntaActual];
        document.getElementById('pregunta-texto').innerText = p.q;
        document.getElementById('contador').innerText = `Pregunta ${indicePreguntaActual + 1} de ${preguntas.length}`;
        document.getElementById('puntos-actuales').innerText = `Puntos: ${puntos}`;
        
        const contenedor = document.getElementById('opciones-contenedor');
        contenedor.innerHTML = ""; 

        p.opt.forEach((opcion, i) => {
            const boton = document.createElement('button');
            boton.innerText = opcion;
            boton.classList.add('btn-respuesta');
            boton.onclick = () => comprobarRespuesta(i);
            contenedor.appendChild(boton);
        });
    } else {
        finalizarJuego();
    }
}

function comprobarRespuesta(i) {
    if (i === preguntas[indicePreguntaActual].ans) {
        puntos++;
    }
    indicePreguntaActual++;
    mostrarPregunta();
}

function finalizarJuego() {
    document.getElementById('pantalla-juego').style.display = 'none';
    document.getElementById('pantalla-final').style.display = 'block';
    document.getElementById('resultado-texto').innerText = `Has conseguido ${puntos} puntos de ${preguntas.length} posibles.`;
}
