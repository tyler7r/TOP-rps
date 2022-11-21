const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log("Round: " + i);
        playRound();
        console.log ("---------------------");
    }
}

function playRound () {
    const computerPlay = computerChoice();
    let playerPlay = prompt ("Make your choice: rock, paper or scissors.").toLowerCase();
    const winner = checkWinner(computerPlay, playerPlay);
    //const scoreBoard = getScoreBoard (winner);//
    console.log(winner);
    winners.push(winner);
    updateScore();
    //console.log(scoreBoard);//
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
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Player: " + playerWins + " Computer: " + computerWins + " Ties: " + ties)
}
function getScoreBoard (winner) {
    winners;
    let x = 0; y = 0; z = 0;
    if (winner === 'Tie') {
        (++z);
        return ("Player: " + x + "   Computer: " + y + "   Ties: " + z);
    } else if (winner === 'Computer') {
        (++y);
        return ("Player: " + x + "   Computer: " + y + "   Ties: " + z);
    } else if (winner === 'Player') {
        (++x);
        return ("Player: " + x + "   Computer: " + y + "   Ties: " + z);
    } else {
        return ("Player: " + x + "   Computer: " + y + "   Ties: " + z);
}
}

//function scoreBoard(); {//
    //let playerWins = x;
    //let computerWins = y;
    //let ties = z;
    //if (scoreTally = T) {

    //} 
game();