const choices = ["rock", "paper", "scissors"];
const winners = [];
const scoreTally = checkWinner().charAt(0);

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();
        updateScore();
    }
}

function playRound () {
    const computerPlay = computerChoice();
    let playerPlay = prompt ("Make your choice: rock, paper or scissors.").toLowerCase();
    const winner = checkWinner(computerPlay, playerPlay);
    console.log(winner);
    winners.push(winner);
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
    } else {
        return ("Computer");
    }
}

function updateScore() {
    console.log (winners);
    let x = 0, y = 0, z = 0;
    let playerWins = x;
    let computerWins = y;
    let ties = z;
    if (scoreTally === "T") {
        ++z
        return ("Player: " + x + "   Computer: " + computerWins + "   Ties: " + ties);
    } else if (scoreTally === "C") {
        ++y
        return ("Player: " + x + "   Computer: " + computerWins + "   Ties: " + ties);
    } else {
        ++x
        return ("Player: " + x + "   Computer: " + computerWins + "   Ties: " + ties);
    }
}

//function scoreBoard(); {//
    //let playerWins = x;
    //let computerWins = y;
    //let ties = z;
    //if (scoreTally = T) {

    //} 

game();
