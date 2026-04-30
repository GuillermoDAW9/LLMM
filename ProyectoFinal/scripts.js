// 1. LAS 20 PREGUNTAS
const preguntas = [
    { q: "¿Qué selección ha ganado más Mundiales?", opt: ["Brasil", "Alemania", "Italia", "Argentina"], ans: 0 },
    { q: "¿Quién tiene más Balones de Oro?", opt: ["Cristiano", "Messi", "Zidane", "Ronaldinho"], ans: 1 },
    { q: "¿En qué país se jugó el primer Mundial (1930)?", opt: ["Brasil", "Francia", "Uruguay", "Italia"], ans: 2 },
    { q: "¿Qué equipo tiene más Champions League?", opt: ["AC Milan", "Real Madrid", "Liverpool", "Bayern"], ans: 1 },
    { q: "¿Quién ganó el Mundial 2022?", opt: ["Francia", "Argentina", "Croacia", "Marruecos"], ans: 1 },
    { q: "¿Cómo le dicen a la selección de Chile?", opt: ["La Roja", "La Tri", "La Albiceleste", "Los Cafeteros"], ans: 0 },
    { q: "¿En qué club se retiró Zidane?", opt: ["Juve", "PSG", "Real Madrid", "Bordeaux"], ans: 2 },
    { q: "¿Qué selección ganó la Euro 2024?", opt: ["Inglaterra", "Francia", "España", "Portugal"], ans: 2 },
    { q: "¿Quién es 'O Rei'?", opt: ["Maradona", "Pelé", "Cruyff", "Eusebio"], ans: 1 },
    { q: "¿Dónde juega el Barça en 2024?", opt: ["Camp Nou", "Montjuïc", "Cornellà", "Metropolitano"], ans: 1 },
    { q: "¿Quién marcó el gol de España en la final 2010?", opt: ["Xavi", "Villa", "Iniesta", "Torres"], ans: 2 },
    { q: "¿A qué selección llaman 'La Oranje'?", opt: ["Bélgica", "Países Bajos", "Alemania", "Italia"], ans: 1 },
    { q: "¿Quién tiene el récord de partidos en Mundiales?", opt: ["Matthäus", "Messi", "Klose", "Maradona"], ans: 1 },
    { q: "¿Dónde está el estadio Anfield?", opt: ["Manchester", "Londres", "Liverpool", "Leeds"], ans: 2 },
    { q: "¿Club con más títulos de Premier League?", opt: ["Arsenal", "Chelsea", "Man. City", "Man. United"], ans: 3 },
    { q: "¿Entrenador del sextete del Barça?", opt: ["Luis Enrique", "Guardiola", "Vilanova", "Rijkaard"], ans: 1 },
    { q: "¿Quién es la 'Araña Negra'?", opt: ["Casillas", "Buffon", "Lev Yashin", "Neuer"], ans: 2 },
    { q: "¿Cuántos Balones de Oro tiene CR7?", opt: ["3", "4", "5", "6"], ans: 2 },
    { q: "¿Año del primer Mundial de Argentina?", opt: ["1978", "1986", "1930", "1994"], ans: 0 },
    { q: "¿Sede Mundial 2026 junto a México y Canadá?", opt: ["Brasil", "USA", "Panamá", "Colombia"], ans: 1 }
];

let indice = 0;
let puntos = 0;

// 2. LA FUNCIÓN QUE SE ACTIVA AL PULSAR EL BOTÓN
function jugar() {
    console.log("Botón pulsado correctamente");
    
    // Forzamos el cambio de pantalla
    document.getElementById('pantalla-inicio').style.setProperty('display', 'none', 'important');
    document.getElementById('pantalla-juego').style.setProperty('display', 'block', 'important');
    
    indice = 0;
    puntos = 0;
    mostrarPregunta();
}

function mostrarPregunta() {
    if (indice < preguntas.length) {
        const p = preguntas[indice];
        document.getElementById('pregunta-texto').innerText = p.q;
        document.getElementById('contador').innerText = `Pregunta ${indice + 1} de 20`;
        
        const contenedor = document.getElementById('opciones-contenedor');
        contenedor.innerHTML = ""; 

        p.opt.forEach((opcion, i) => {
            const boton = document.createElement('button');
            boton.innerText = opcion;
            boton.style.margin = "5px";
            boton.style.padding = "10px";
            boton.onclick = () => {
                if (i === p.ans) puntos++;
                indice++;
                mostrarPregunta();
            };
            contenedor.appendChild(boton);
        });
    } else {
        document.getElementById('pantalla-juego').style.display = 'none';
        document.getElementById('pantalla-final').style.display = 'block';
        document.getElementById('resultado-texto').innerText = `Final: ${puntos} de 20`;
    }
}
