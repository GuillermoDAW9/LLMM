const size = 5;              // tamaño de la rejilla
let board = [];              // matriz de estados

const gameBoard = document.getElementById("gameBoard");


function createBoard() {
    gameBoard.innerHTML = "";
    board = [];

    for (let row = 0; row < size; row++) {
        board[row] = [];
        for (let col = 0; col < size; col++) {
            board[row][col] = Math.random() < 0.5 ? 1 : 0;

            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = row + "-" + col;
            cell.onclick = () => toggleLights(row, col);

            gameBoard.appendChild(cell);
        }
    }
    renderBoard();
}


function toggleLights(row, col) {
    flip(row, col);           // celda clicada
    flip(row - 1, col);       // arriba
    flip(row + 1, col);       // abajo
    flip(row, col - 1);       // izquierda
    flip(row, col + 1);       // derecha

    renderBoard();
    checkWin();
}


function flip(r, c) {
    if (r >= 0 && r < size && c >= 0 && c < size) {
        board[r][c] = board[r][c] === 1 ? 0 : 1;
    }
}


function renderBoard() {
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const cell = document.getElementById(row + "-" + col);
            if (board[row][col] === 1) {
                cell.classList.remove("off");
            } else {
                cell.classList.add("off");
            }
        }
    }
}


function checkWin() {
    const allOff = board.every(row => row.every(val => val === 0));
    if (allOff) {
        setTimeout(() => alert("¡Felicidades! ¡Ganaste! 🎉"), 10);
    }
}

function resetGame() {
    createBoard();
}

// Inicializar al cargar
createBoard();
