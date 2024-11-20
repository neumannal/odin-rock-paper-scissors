let humanScore = 0;
let computerScore = 0;

function getRandomInt(maxInt) {
    // returns a random integer between zero and maxInt
    return Math.floor(Math.random() * (maxInt + 1));
}

function getComputerChoice() {
    // randomly return "rock", "paper" or "scissors"
    let selection = getRandomInt(2);
    if (selection === 0) {
        return "rock";
    } else if (selection === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice;
    while ((choice != "rock") && (choice != "scissors") && (choice != "paper")) {
        choice = prompt("Enter your choice: 'rock', 'paper' or 'scissors'");
    }
    return choice
}

console.log(getHumanChoice());
