const choices = ["rock", "paper", "scissors"];

function game() {
    playRound();
}

function playRound () {
    const computerPlay = computerChoice();
    const playerPlay = playerChoice();
    const winner = checkWinner(computerPlay, playerPlay);
    console.log(winner);
}

function computerChoice() {
    return choices[Math.floor(Math.random()*3)]; 
}

function playerChoice () {
    let input = prompt ("Make your choice: rock, paper or scissors.")
    input = input.toLowerCase();
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return ("It's a Tie, you both chose" + choiceP);
    } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") || 
    (choiceP === "scissors" && choiceC === "paper")) {
        return ("Player Wins, you chose" + choiceP + "and the computer chose" + choiceC);
    } else {
        return ("Computer Wins, you chose" + choiceP + "and the computer chose" + choiceC);
    }
}

game();
