const gameBoard = document.querySelector('.gameboard');
const replayBtn = document.querySelector('.replay-btn');
const popup = document.querySelector('.popup');
const scoreDisplay = document.querySelector('.score');
const playBtn = document.getElementById('play-btn');
const scoreResult = document.querySelector('.score-result');

const up = document.querySelector('.up');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const down = document.querySelector('.down');


let boardWidth = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 0.8;
let intervalTime = 0;
let interval = 0;


playBtn.addEventListener('click', () => {
  startGame();
  document.addEventListener('keydown', (event) => {
    event.preventDefault();  
  });
})

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (event) => {
    control(event);  
  });
  createGrid();
})

function createGrid() {
   popup.style.display = "none";
  
  for (let i = 0; i < 100; i++) {
    let div = document.createElement('div');
    gameBoard.appendChild(div);
  }
}

function startGame() {
  let squares = document.querySelectorAll('.gameboard div');
  
  direction = 1;
  currentSnake = [2, 1, 0];
  currentSnake.forEach(index => squares[index].classList.add('snake'));
  randomApple(squares);
  
  score = 0;
  scoreDisplay.innerHTML = `score: ${score}`;
  currentIndex = 0;
  intervalTime = 1000;
  interval = setInterval(moveOutcome, intervalTime);
}


function randomApple(squares) {
  do {
    appleIndex = Math.floor(Math.random() * squares.length)
  } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple');
}

function moveOutcome() {
  let squares = document.querySelectorAll('.gameboard div');
  
  if (checkForHits(squares)) {
    popup.style.display = 'flex';
    scoreResult.innerHTML = score;
    return clearInterval(interval); 
  } else {
    moveSnake(squares);
  }  
}

function moveSnake(squares) {
  let tail = currentSnake.pop();
  squares[tail].classList.remove('snake');
  currentSnake.unshift(currentSnake[0] + direction);
  squares[currentSnake[0]].classList.add('snake');
  
  eatApple(squares, tail);
}

function checkForHits(squares) {
  if (
    (currentSnake[0] + boardWidth >= boardWidth * boardWidth && direction === boardWidth) ||       
    (currentSnake[0] % boardWidth === boardWidth - 1 && direction === 1) ||
    (currentSnake[0] % boardWidth === 0 && direction === -1) ||
    (currentSnake[0] - boardWidth <= 0 && direction === -boardWidth) ||
    squares[currentSnake[0] + direction].classList.contains("snake")
     ) {
       return true;
    } else {
      return false;
    }
}

function eatApple(squares, tail) {
  if (squares[currentSnake[0]].classList.contains('apple')) {
    squares[currentSnake[0]].classList.remove('apple');
    squares[currentSnake[0]].classList.add('snake');
    currentSnake.push(tail);
    randomApple(squares);
    score++;
    scoreDisplay.innerHTML = `score: ${score}`;
    
    clearInterval(interval);
    intervalTime *= speed;
    interval = setInterval(moveOutcome, intervalTime);
  }
}

function control(event) { 
  if (event.key === 'ArrowLeft') {
    direction = -1
  } else if (event.key === 'ArrowUp') {
    direction = -boardWidth;
  } else if (event.key === 'ArrowRight') {
    direction = 1;
  } else if (event.key === 'ArrowDown') {
    direction = boardWidth;
  }
}

up.addEventListener("click", () => (direction = -boardWidth));
down.addEventListener("click", () => (direction = +boardWidth));
left.addEventListener("click", () => (direction = -1));
right.addEventListener("click", () => (direction = 1));

replayBtn.addEventListener('click', replay);

function replay() {
  gameBoard.innerHTML = '';
  createGrid();
  startGame();
  popup.style.display = 'none';
}

function handleIntervalTIme() {
  if (intervalTime <= 0.209) {
    intervalTime = 0.209; 
  }
}