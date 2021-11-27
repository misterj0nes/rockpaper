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

function game() {
    for (let i = 0; i <= 4; ++i) {
        console.log(playRound(prompt("rock, paper, or scissors?"),computerPlay()));
    }
}

game();
