// function to generate random number between 0 - 2
function getRandom() {
    let num = Math.floor(Math.random() * 3) ;
    return num;

}
// map random number to rock, paper, or scissors
function computerPlay() {
let num = getRandom();
switch (num) {
    case 0:
    return "rock";
    break;
    case 1:
    return "paper";
    break;
    case 2:
        return "scissors";
}
}

function playRound(playerSelect, computerSelection) {
    //paper beats rock
    //rock beats scissors
    //scissors beats paper
    //same is draw
    let playerSelection = playerSelect.toLowerCase()
    let computerWon = "You lost this round!";
    let playerWon = "You won this round!";
    if (computerSelection == playerSelection) {
        return "It's a draw!";
    } else if (computerSelection == "rock" && playerSelection == "paper"){
        return `The computer played ${computerSelection}. ${playerWon}`;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return `The computer played ${computerSelection}. ${computerWon}`;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return `The computer played ${computerSelection}. ${computerWon}`;
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        return `The computer played ${computerSelection}. ${playerWon}`;
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return `The computer played ${computerSelection}. ${playerWon}`;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return `The computer played ${computerSelection}. ${computerWon}`;
    }
}
const body = document.querySelector('body');
let compScore = document.querySelector('.compscore'); 
let humanScore = document.querySelector('.humanscore');
let message = document.querySelector(".message");
function playRock() {
    let comp = computerPlay();
    if (comp === "rock") {
        message.textContent = "ROCKS DONT HURT ROCKS, IT'S A TIE!";
    } else if (comp === "paper") {
        message.textContent = "PAPER BEATS ROCK. YOU LOST TO SILICON!";
        compScore.textContent = parseInt(compScore.textContent) + 1;
    } else if (comp === "scissors") {
        message.textContent = "ROCK BEATS SCISSORS. THE HUMAN WINS (for now)!";
        humanScore.textContent = parseInt(humanScore.textContent) + 1;
    }

    if (parseInt(compScore.textContent) === 5) {
        message.textContent = "You really lost to a computer. Really, a function less than 10 lines.";
    } else if (parseInt(humanScore.textContent) === 5) {
        message.textContent = "You won. You're a winner.";
    }
}

function playPaper() {
    let comp = computerPlay();
    if (comp === "paper") {    
        message.textContent = "PAPER === PAPER, IT'S A TIE!";
    } else if (comp === "scissors") {
        message.textContent = "Scissors beat paper. YOU LOST TO SILICON!";
        compScore.textContent = parseInt(compScore.textContent) + 1;
    } else if (comp === "rock") {
        message.textContent = "PAPER BEATS ROCK. THE HUMAN WINS (for now)!";
        humanScore.textContent = parseInt(humanScore.textContent) + 1;
    }

    if (parseInt(compScore.textContent) === 5) {
        message.textContent = "You really lost to a computer. Really, a function less than 10 lines.";
    } else if (parseInt(humanScore.textContent) === 5) {
        message.textContent = "You won. You're a winner.";
    }
}
function playScissors() {
    let comp = computerPlay();
    if (comp === "scissors") {    
        message.textContent = "Scissors are scissors, IT'S A TIE!";
    } else if (comp === "rock") {
        message.textContent = "rock beats scissors. YOU LOST TO SILICON!";
        compScore.textContent = parseInt(compScore.textContent) + 1;
    } else if (comp === "paper") {
        message.textContent = "scissors beat paper. THE HUMAN WINS (for now)!";
        humanScore.textContent = parseInt(humanScore.textContent) + 1;
    }

    if (parseInt(compScore.textContent) === 5) {
        message.textContent = "You really lost to a computer. Really, a function less than 10 lines.";
    } else if (parseInt(humanScore.textContent) === 5) {
        message.textContent = "You won. You're a winner.";
    }
}

function playAgain() {
    compScore.textContent = 0;
    humanScore.textContent = 0;
    message.textContent = ""
}

const rockButton = document.querySelector('.buttondiv .rock img');
const paperbutton = document.querySelector('.buttondiv .paper img');
const scissorsButton = document.querySelector('.buttondiv .scissors img');
scissorsButton.addEventListener('click', playScissors);
paperbutton.addEventListener("click", playPaper);
rockButton.addEventListener("click", playRock);

