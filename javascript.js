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
        computerScore += 0.5;
        humanScore += 0.5;
        return `draw! both selected ${humanChoice}`;
    } else if (winner === "computer") {
        computerScore += 1;
        return `you lose! ${computerChoice} beats ${humanChoice}`;
    } else {
        humanScore += 1;
        return `you win! ${humanChoice} beats ${computerChoice}`;
    }
}

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultText = playRound(humanChoice, computerChoice);
    
    const scoreText = `current score is you: ${humanScore} --- computer: ${computerScore}`;
    const resultContainer = document.querySelector("#result-container");
    resultParagraph = document.createElement("p");
    scoreParagraph = document.createElement("p");
    resultParagraph.textContent = resultText;
    scoreParagraph.textContent = scoreText;
    resultContainer.insertBefore(scoreParagraph, resultContainer.firstChild)
    resultContainer.insertBefore(resultParagraph, resultContainer.firstChild);
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