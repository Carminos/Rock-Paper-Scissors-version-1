//Initialize scores to zero
let userScore = 0;
let computerScore = 0;
let roundNum = 0;

//Global Variables
const userRock = document.querySelector(".user-rock");
const userPaper = document.querySelector(".user-paper");
const userScissors = document.querySelector(".user-scissors");
const computerRock = document.querySelector(".computer-rock");
const computerPaper = document.querySelector(".computer-paper");
const computerScissors = document.querySelector(".computer-scissors");
const userScore_div = document.querySelector(".user-score");
const computerScore_div = document.querySelector(".computer-score");
const userSelection_div = document.querySelector(".user-selection");
const computerSelection_div = document.querySelector(".computer-selection");

// 1. Adding event listener to User icons

// PROBLEM SOLVED! Define userInput. Pass userInput as an argument in playRound() which
// we already wrapped in the playGame() when user clicks button

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const ranNum = choices[Math.floor(Math.random() * 3)];
    return ranNum;
}

function playRound(userInput) {
    const computerInput = getComputerChoice();
    
    if(userInput === 'rock' && computerInput === 'paper') {
        computerScore++; 
        computerScore_div.innerHTML = computerScore;
        userSelection_div.innerHTML = "You chose " + userInput;
        computerSelection_div.innerHTML = "Computer chose " + computerInput;
    } if (userInput === 'rock' && computerInput === 'rock') {
        userSelection_div.innerHTML = "You chose " + userInput;
        computerSelection_div.innerHTML = "Computer chose " + computerInput; 
    } if (userInput === 'rock' && computerInput === 'scissors') {
        userScore++;    
        userScore_div.innerHTML = userScore;
        userSelection_div.innerHTML = "You chose " + userInput;
        computerSelection_div.innerHTML = "Computer chose " + computerInput;
    // User Chooses Paper
    } else if(userInput === "paper" && computerInput === 'rock') {
        userScore++;     
        userScore_div.innerHTML = userScore;
        userSelection_div.innerHTML = "You chose " + userInput;
        computerSelection_div.innerHTML = "Computer chose " + computerInput;
    } else if (userInput === 'paper' && computerInput === 'paper') {
        console.log ('You chose paper and computer chose paper. It"s a tie!');     
    } else if (userInput === 'paper' && computerInput === 'scissors') {
        computerScore++;   
        computerScore_div.innerHTML = computerScore;
        userSelection_div.innerHTML = "You chose " + userInput;
        computerSelection_div.innerHTML = "Computer chose " + computerInput;
    // User Chooses Scissors
    } else if(userInput === "scissors" && computerInput === 'rock') {
        computerScore++;
        computerScore_div.innerHTML = computerScore;
        userSelection_div.innerHTML = "You chose " + userInput;
        computerSelection_div.innerHTML = "Computer chose " + computerInput;
    } else if (userInput === 'scissors' && computerInput === 'paper') {
        userScore++;     
        userScore_div.innerHTML = userScore;
        userSelection_div.innerHTML = "You chose " + userInput;
        computerSelection_div.innerHTML = "Computer chose " + computerInput;
    } else {
        userSelection_div.innerHTML = "You chose " + userInput;
        computerSelection_div.innerHTML = "Computer chose " + computerInput;
    }  

}

function playGame() {
    userRock.addEventListener("click", function () {
        playRound("rock");
    })
    userPaper.addEventListener("click", function () {
        playRound("paper");
    })
    userScissors.addEventListener("click", function () {
        playRound("scissors");
    })
}

playGame();
