const datos = [
    { q: "¿Qué selección tiene más Mundiales?", a: ["Brasil", "Alemania", "Italia", "Argentina"], c: 0 },
    { q: "¿Máximo goleador de la Champions?", a: ["Messi", "Cristiano Ronaldo", "Lewandowski", "Raúl"], c: 1 },
    { q: "¿País del primer Mundial (1930)?", a: ["Brasil", "Uruguay", "Francia", "Italia"], c: 1 },
    { q: "¿Quién ganó el Balón de Oro 2023?", a: ["Haaland", "Messi", "Mbappé", "Rodri"], c: 1 },
    { q: "¿Qué equipo tiene más Champions?", a: ["Milan", "Liverpool", "Real Madrid", "Bayern"], c: 2 },
    { q: "¿Apodo de la selección de Chile?", a: ["La Roja", "La Tri", "La Albiceleste", "La Sele"], c: 0 },
    { q: "¿Dónde se retiró Zidane?", a: ["Juventus", "Bordeaux", "Real Madrid", "Cannes"], c: 2 },
    { q: "¿Quién ganó la Eurocopa 2024?", a: ["Inglaterra", "Francia", "España", "Portugal"], c: 2 },
    { q: "¿Quién es 'O Rei'?", a: ["Puskas", "Maradona", "Pelé", "Eusebio"], c: 2 },
    { q: "¿En qué año ganó España el Mundial?", a: ["2006", "2010", "2014", "2002"], c: 1 },
    { q: "¿Estadio del Liverpool?", a: ["Old Trafford", "Etihad", "Anfield", "Goodison Park"], c: 2 },
    { q: "¿A qué selección llaman 'La Oranje'?", a: ["Bélgica", "Países Bajos", "Alemania", "Austria"], c: 1 },
    { q: "¿Quién marcó en la final de la 10ª del Madrid?", a: ["Bale", "Ramos", "Cristiano", "Modric"], c: 1 },
    { q: "¿Cuántos Balones de Oro tiene CR7?", a: ["3", "4", "5", "6"], c: 2 },
    { q: "¿Quién entrenaba al Barça del sextete?", a: ["Luis Enrique", "Guardiola", "Vilanova", "Cruyff"], c: 1 },
    { q: "¿Quién es la 'Araña Negra'?", a: ["Yashin", "Buffon", "Casillas", "Zoff"], c: 0 },
    { q: "¿Club con más Premier League?", a: ["Arsenal", "Chelsea", "Man. United", "Man. City"], c: 2 },
    { q: "¿País de Samuel Eto'o?", a: ["Camerún", "Costa de Marfil", "Ghana", "Nigeria"], c: 0 },
    { q: "¿Quién ganó el Mundial 1986?", a: ["Alemania", "Argentina", "Brasil", "Francia"], c: 1 },
    { q: "¿Sede final Mundial 2026?", a: ["México", "Canadá", "EE.UU.", "Brasil"], c: 2 }
];

let iActual = 0;
let score = 0;

function comenzarJuego() {
    document.getElementById('pantalla-inicio').classList.add('oculto');
    document.getElementById('pantalla-juego').classList.remove('oculto');
    mostrarPregunta();
}

function mostrarPregunta() {
    if (iActual < datos.length) {
        const item = datos[iActual];
        document.getElementById('texto-pregunta').innerText = item.q;
        document.getElementById('num-pregunta').innerText = `Pregunta ${iActual + 1} de 20`;
        
        const caja = document.getElementById('contenedor-opciones');
        caja.innerHTML = '';

        item.a.forEach((opc, index) => {
            const b = document.createElement('button');
            b.innerText = opc;
            b.classList.add('btn-opcion');
            b.onclick = () => {
                if(index === item.c) score++;
                document.getElementById('puntos').innerText = `Puntos: ${score}`;
                iActual++;
                mostrarPregunta();
            };
            caja.appendChild(b);
        });
    } else {
        document.getElementById('pantalla-juego').classList.add('oculto');
        document.getElementById('pantalla-final').classList.remove('oculto');
        document.getElementById('txt-final').innerText = `Has acertado ${score} de 20`;
    }
}
