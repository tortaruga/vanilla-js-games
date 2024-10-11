const board = document.getElementById('board');
const tiles = [...Array(15).keys()].map(n => n + 1).concat(null);
let emptyIndex = 15;

const shuffleBtn = document.getElementById('shuffle-btn');

shuffleBtn.addEventListener('click', () => {
    reset(); 
    shuffleTiles();
    startTimer();
});

let moveCount = 0;
const moves = document.getElementById('moves');

function renderBoard() {
    board.innerHTML = '';
    tiles.forEach((tile, index) => {
        const tileElement = document.createElement('div');
        tileElement.className = 'tile'; 

        if (tile == null) {
            tileElement.classList.add('empty');
        } else {
            tileElement.textContent = tile;
            tileElement.addEventListener('click', () => moveTile(index));
        }
        board.appendChild(tileElement);
    }) 
} 

function moveTile(index, checkWinFlag = true) {
    const validMoves = [emptyIndex + 1, emptyIndex - 1, emptyIndex + 4, emptyIndex - 4].filter(move => move >= 0 && move < 16 && (
        (move % 4 !== 0 || emptyIndex % 4 !== 3) && 
        (move % 4 !== 3 || emptyIndex % 4 !== 0) 
    ));
    if (validMoves.includes(index)) {
        [tiles[emptyIndex], tiles[index]] = [tiles[index], tiles[emptyIndex]];
        emptyIndex = index;
        renderBoard();
        moveCount++;
        moves.innerHTML = moveCount;
    }

    if (checkWin() && checkWinFlag) {
        stopTimer(); 
        setTimeout(() => {
           handleWinMessage(); 
        }, 500)
     }
} 
 
function shuffleTiles() {
    for (let i = 0; i < 1000; i++) {
        const randomTile = Math.floor(Math.random() * tiles.length); 
        moveTile(randomTile, false);      
    }
   moveCount = 0;
   moves.innerHTML = moveCount; 
} 

renderBoard();
// shuffleTiles(); 

function checkWin() {
    for (let i = 0; i < tiles.length - 1; i++) {
        if (tiles[i] !== i + 1) {
            return false;
        }
    }
    return true;
}
 

const time = document.getElementById('time');

let intervalId;
let seconds = 0;
let minutes = 0;
let hours = 0;

const startTimer = () => {
    intervalId = setInterval(() => {
        seconds++;
        
        if (seconds >= 60) {
            seconds = 0;
            minutes++;

            if (minutes >= 60) {
                hours++;
                minutes = 0; // Reset minutes when hours increase
            }
        }

        time.innerHTML = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

const stopTimer = () => {
    clearInterval(intervalId);
}

function reset() {
    stopTimer();
    moveCount = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    time.innerHTML = `${hours}:${minutes}:${seconds}`;
    moves.innerHTML = 0;
}

const winModal = document.querySelector('.win-modal');
const modalMoves = document.querySelector('.modal-moves');
const modalTime = document.querySelector('.modal-time');

function handleWinMessage() {
    stopTimer(); 
    winModal.classList.toggle('hide');
    winModal.classList.toggle('animation');
    modalMoves.innerHTML = moveCount;
    modalTime.innerHTML = `${hours}:${minutes}:${seconds}s`;  
} 

const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', () => {
    winModal.classList.toggle('hide');
    winModal.classList.toggle('animation');
    reset(); 
})
