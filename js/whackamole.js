const squares = document.querySelectorAll('.square');
// const mole = document.querySelector('.mole');
const result = document.getElementById('score');
const timer = document.getElementById('timer');
const start = document.getElementById('start');
const message = document.getElementById('message');


let randomId;
let score = 0;
let currentTime = 30; 
let moveId;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove('mole');
  })
  
  randomId = Math.floor(Math.random() * squares.length);
  squares[randomId].classList.add('mole');
}

function move() {
 moveId = setInterval(randomSquare, 500);
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == randomId) {
      score++;
      result.textContent = score;
    }
  })
})

squares.forEach(square => {
  square.addEventListener('touchstart', () => {
    if (square.id == randomId) {
      score++;
      result.textContent = score;
    }
  })
})


function countdown() {
  timer.textContent = currentTime;
  currentTime--;
  
  if (currentTime < 0) {
    clearInterval(countdownTimer);
    clearInterval(moveId);   
  message.style.display = 'flex';
    message.innerHTML = `<span class="accent">Game Over.</span> Your Score is <span class="accent">${score}</span>`;
    currentTime = 30; 
  start.style.display = 'inline-block';  
  }

}
 let countdownTimer;

start.addEventListener('click', () => {
move()
 countdownTimer  = setInterval(countdown, 1000);
  message.style.display = 'none';
  start.style.display = 'none';
})