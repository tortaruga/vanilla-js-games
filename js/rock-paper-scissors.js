const userChoice = document.getElementById('user');
const computerChoice = document.getElementById('computer');
const result = document.getElementById('result');
let verdict;
let computer;
let user;


const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    user = e.target.innerHTML;
    userChoice.innerHTML = user;
    
    getComputerChoice();
    
    getResult();
  })
})

function getComputerChoice() {
  const randomNumber = Math.ceil(Math.random() * buttons.length);
  switch (randomNumber) {
    case 1:
      computer = 'rock';
      break;
    case 2:
      computer = 'paper';
      break;
    case 3: 
      computer = 'scissors';
      break;
  }
  // console.log(randomNumber)
  computerChoice.innerHTML = computer;
  
  getResult();
  
};

function getResult() {
  
  if (computer === user) {
    verdict = 'Draw';
    userChoice.style.color = 'cyan';
    computerChoice.style.color = 'cyan';
  }
  
  if (computer === 'paper') {
    if (user === 'scissors') {
      verdict = 'You win!'
    userChoice.style.color = 'chartreuse';
    computerChoice.style.color = 'magenta';
      
    } else if (user === 'rock'){
      verdict = 'You lose.'
    computerChoice.style.color = 'chartreuse';
    userChoice.style.color = 'magenta';
    }
  }
  
  if (computer === 'rock') {
    if (user === 'paper') {
      verdict = 'You win!';
    userChoice.style.color = 'chartreuse';
    computerChoice.style.color = 'magenta';
      
    } else if (user === 'scissors') {
      verdict = 'You lose.';
    userChoice.style.color = 'magenta';
    computerChoice.style.color = 'chartreuse';
      
    }
    
  }
  
  if (computer === 'scissors') {
    if (user === 'paper') {
      verdict = 'You lose.';
    userChoice.style.color = 'magenta';
    computerChoice.style.color = 'chartreuse';
      
    } else if (user === 'rock') {
      verdict = "You win!";
    userChoice.style.color = 'chartreuse';
    computerChoice.style.color = 'magenta';
      
    }
  }
  result.innerHTML = verdict;
  result.style.color = 'yellow' 
}
