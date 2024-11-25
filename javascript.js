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
        computerScore += 0.5;
        humanScore += 0.5;
    } else if (winner === "computer") {
        console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    } else {
        console.log(`you win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }
}

function playGame(humanChoice) {
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`current score is you: ${humanScore} --- computer: ${computerScore}`);
}

function buttonClick (event) {
    let target = event.target;
    switch(target.id) {
        case "rock":
            playGame("rock");
            break;
        case "paper":
            playGame("paper");
            break;
        case "scissors":
            playGame("scissors");
            break;
    }
}

const buttonContainer = document.querySelector("#button-container");
buttonContainer.addEventListener("click", buttonClick)