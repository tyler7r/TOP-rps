const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log("Round: " + i);
        playRound();
        console.log ("---------------------");
    }
    console.log(declareWinner());
}

function playRound () {
    const computerPlay = computerChoice();
    let playerPlay = "";
    while (playerPlay !== "rock" && playerPlay !== "paper" && playerPlay !== "scissors") {
        let input = prompt ("Make your choice: rock, paper or scissors.");
        isValid(input);
        if (isValid(input)) {
            playerPlay = input.toLowerCase();
        }
    }
    const winner = checkWinner(computerPlay, playerPlay);
    console.log(winner);
    winners.push(winner);
    updateScore();
}

function computerChoice() {
    return choices[Math.floor(Math.random()*3)]; 
}

function checkWinner(computerPlay, playerPlay) {
    if (playerPlay === computerPlay) {
        return ("Tie");
    } else if (
    (playerPlay === choices[0] && computerPlay === choices[2]) ||
    (playerPlay === choices[1] && computerPlay === choices[0]) || 
    (playerPlay === choices [2] && computerPlay === choices[1])) {
        return ("Player");
    } else if (
        (computerPlay === choices[0] && playerPlay === choices[2]) ||
        (computerPlay === choices[1] && playerPlay === choices[0]) || 
        (computerPlay === choices [2] && playerPlay === choices[1])) {
        return ("Computer");
    } else {
        return ("Not a valid choice");
    }
}

function updateScore() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Player: " + playerWins + " Computer: " + computerWins + " Ties: " + ties)
}

function declareWinner (playerWins, computerWins, ties) {
    if (playerWins > computerWins && playerWins > ties) {
        return "Player Wins the Match, way to not suck";
    } else if (computerWins > playerWins && computerWins > ties) {
        return "Computer Wins, do better next time";
    } else {
        return "It's a Tie"
    }
}

function isValid (promptInput) {
    if (promptInput === null) {
        return false;
    } else {
        return true;
    }
}

game();