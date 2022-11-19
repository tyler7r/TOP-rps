const choices = ["rock", "paper", "scissors"];

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }
}

function playRound () {
    const computerPlay = computerChoice();
    let playerPlay = prompt ("Make your choice: rock, paper or scissors.").toLowerCase();
    const winner = checkWinner(computerPlay, playerPlay);
    console.log(winner);
}

function computerChoice() {
    return choices[Math.floor(Math.random()*3)]; 
}

function checkWinner(computerPlay, playerPlay) {
    if (playerPlay === computerPlay) {
        return ("It's a Tie, you both chose " + playerPlay);
    } else if (
    (playerPlay === choices[0] && computerPlay === choices[2]) ||
    (playerPlay === choices[1] && computerPlay === choices[0]) || 
    (playerPlay === choices [2] && computerPlay === choices[1])) {
        return ("Player Wins, you chose " + playerPlay + " and the computer chose " + computerPlay);
    } else {
        return ("Computer Wins, you chose " + playerPlay + " and the computer chose " + computerPlay);
    }
}

game();
