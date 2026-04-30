// 1. Array de preguntas (Asegúrate de que este bloque esté arriba)
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

// FUNCIÓN PRINCIPAL PARA ARRANCAR
function jugar() {
    console.log("El juego ha comenzado"); // Esto es para que veas en la consola (F12) que funciona
    
    // Mostramos y ocultamos secciones
    const inicio = document.getElementById('pantalla-inicio');
    const juego = document.getElementById('pantalla-juego');
    const final = document.getElementById('pantalla-final');

    if(inicio) inicio.style.display = 'none';
    if(final) final.style.display = 'none';
    if(juego) juego.style.display = 'block';

    indicePreguntaActual = 0;
    puntos = 0;
    mostrarPregunta();
}

function mostrarPregunta() {
    const contenedorTexto = document.getElementById('pregunta-texto');
    const contenedorOpciones = document.getElementById('opciones-contenedor');
    const contador = document.getElementById('contador');

    if (indicePreguntaActual < preguntas.length) {
        const p = preguntas[indicePreguntaActual];
        
        if(contenedorTexto) contenedorTexto.innerText = p.q;
        if(contador) contador.innerText = `Pregunta ${indicePreguntaActual + 1} de ${preguntas.length}`;
        
        if(contenedorOpciones) {
            contenedorOpciones.innerHTML = ""; 
            p.opt.forEach((opcion, i) => {
                const boton = document.createElement('button');
                boton.innerText = opcion;
                boton.className = 'btn-respuesta'; // Asegúrate de tener esta clase en CSS
                boton.onclick = () => comprobarRespuesta(i);
                contenedorOpciones.appendChild(boton);
            });
        }
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
    const pantallaJuego = document.getElementById('pantalla-juego');
    const pantallaFinal = document.getElementById('pantalla-final');
    const resultadoTexto = document.getElementById('resultado-texto');

    if(pantallaJuego) pantallaJuego.style.display = 'none';
    if(pantallaFinal) pantallaFinal.style.display = 'block';
    if(resultadoTexto) resultadoTexto.innerText = `Resultado final: ${puntos} de ${preguntas.length}`;
}
