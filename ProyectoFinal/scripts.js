const preguntas = [
    { q: "¿Qué selección ha ganado más Mundiales?", opt: ["Brasil", "Alemania", "Italia", "Argentina"], ans: 0 },
    { q: "¿Quién tiene más Balones de Oro?", opt: ["Cristiano", "Messi", "Zidane", "Pele"], ans: 1 },
    { q: "¿País donde se jugó el primer Mundial (1930)?", opt: ["Brasil", "Francia", "Uruguay", "Italia"], ans: 2 },
    { q: "¿Qué equipo tiene más Champions League?", opt: ["AC Milan", "Real Madrid", "Liverpool", "Bayern"], ans: 1 },
    { q: "¿Quién ganó el Mundial 2022?", opt: ["Francia", "Argentina", "España", "Marruecos"], ans: 1 },
    { q: "¿Cómo le dicen a la selección de Chile?", opt: ["La Roja", "La Tri", "La Albiceleste", "Los Cafeteros"], ans: 0 },
    { q: "¿En qué club se retiró Zidane?", opt: ["Juve", "PSG", "Real Madrid", "Bordeaux"], ans: 2 },
    { q: "¿Qué selección ganó la Eurocopa 2024?", opt: ["Inglaterra", "Francia", "España", "Portugal"], ans: 2 },
    { q: "¿Quién es apodado 'O Rei'?", opt: ["Maradona", "Pelé", "Cruyff", "Eusebio"], ans: 1 },
    { q: "¿Dónde juega el Barça de local en 2024?", opt: ["Camp Nou", "Montjuïc", "Cornellà", "Metropolitano"], ans: 1 },
    { q: "¿Quién marcó el gol de España en la final de 2010?", opt: ["Xavi", "Villa", "Iniesta", "Torres"], ans: 2 },
    { q: "¿A qué selección llaman 'La Oranje'?", opt: ["Bélgica", "Países Bajos", "Alemania", "Italia"], ans: 1 },
    { q: "¿Jugador con más partidos en Mundiales?", opt: ["Matthäus", "Messi", "Klose", "Maradona"], ans: 1 },
    { q: "¿En qué ciudad está el estadio Anfield?", opt: ["Manchester", "Londres", "Liverpool", "Leeds"], ans: 2 },
    { q: "¿Club con más títulos de Premier League?", opt: ["Arsenal", "Chelsea", "Man City", "Man United"], ans: 3 },
    { q: "¿Entrenador del sextete del Barça?", opt: ["Luis Enrique", "Guardiola", "Vilanova", "Rijkaard"], ans: 1 },
    { q: "¿Quién es la 'Araña Negra'?", opt: ["Casillas", "Buffon", "Lev Yashin", "Neuer"], ans: 2 },
    { q: "¿Cuántos Balones de Oro tiene CR7?", opt: ["3", "4", "5", "6"], ans: 2 },
    { q: "¿Año del primer Mundial de Argentina?", opt: ["1978", "1986", "1930", "1994"], ans: 0 },
    { q: "¿Sede Mundial 2026 junto a México y Canadá?", opt: ["Brasil", "USA", "Panamá", "Colombia"], ans: 1 }
];

let preguntaActual = 0;
let puntos = 0;

function comenzarJuego() {
    // 1. Ocultamos inicio, mostramos juego
    document.getElementById('pantalla-inicio').style.display = 'none';
    document.getElementById('pantalla-juego').style.display = 'block';
    
    preguntaActual = 0;
    puntos = 0;
    
    mostrarPregunta();
}

function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        const datos = preguntas[preguntaActual];
        
        // Actualizamos texto y contador
        document.getElementById('pregunta-texto').innerText = datos.q;
        document.getElementById('contador').innerText = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
        
        // Generamos botones
        const contenedor = document.getElementById('opciones-contenedor');
        contenedor.innerHTML = ""; 

        datos.opt.forEach((opcion, i) => {
            const boton = document.createElement('button');
            boton.innerText = opcion;
            boton.className = 'btn-respuesta';
            boton.onclick = () => validar(i);
            contenedor.appendChild(boton);
        });
    } else {
        finalizar();
    }
}

function validar(indiceSeleccionado) {
    if (indiceSeleccionado === preguntas[preguntaActual].ans) {
        puntos++;
    }
    preguntaActual++;
    mostrarPregunta();
}

function finalizar() {
    document.getElementById('pantalla-juego').style.display = 'none';
    document.getElementById('pantalla-final').style.display = 'block';
    document.getElementById('resultado-texto').innerText = `Has acertado ${puntos} de 20 preguntas.`;
}
