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

function checkWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "draw";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        return "human";
    } else {
        return "computer";
    }
}

function playRound(humanChoice, computerChoice) {
    let winner = checkWinner(humanChoice, computerChoice);

    if (winner === "draw") {
        console.log(`draw! both selected ${humanChoice}`);
    } else if (winner === "computer") {
        console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    } else {
        console.log(`you win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }
}

let choice1 = getHumanChoice();
let choice2 = getComputerChoice();
console.log(choice1, choice2);
playRound(choice1, choice2);
console.log(humanScore, computerScore);