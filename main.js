const choices = ["rock", "paper", "scissors"];
const winners = [];

function startGame () {
        let wins = checkWins();
        let playAgainButton = document.querySelector('#playAgain');
        if (wins < 5){
            playAgainButton.style = 'display: none';
        }
        let playerChoice = document.querySelectorAll('.playerChoice');
        playerChoice.forEach((button) =>
        button.addEventListener('click', () => {
            if (button.id) {
                playRound(button.id);
            }
        }))
    }

function computerChoice() {
    return choices[Math.floor(Math.random()*3)]; 
}

function playRound (playerPlay) {
    let wins = checkWins();
    if (wins >= 5) {
        declareWinner();
        playAgain();
        return
    }
    // if (winners.filter((item) => item == "Player").length >= 5) {
    //     document.querySelector("#gameWinner").textContent = 'Player Wins';
    //     return
    // else if (winners.filter ((item) => item == "Computer").length >= 5) {
    //     document.querySelector("#gameWinner").textContent = 'Computer Wins'
    //     return
    // } 

    const computerPlay = computerChoice();
    const winner = checkWinner(computerPlay, playerPlay);
    winners.push(winner);
    scoreboard();
}

function scoreboard() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    document.querySelector('#pWins').textContent = 'Player Wins: ' + playerWins;
    document.querySelector('#cWins').textContent = 'Computer Wins: ' + computerWins;
    document.querySelector('#ties').textContent = 'Ties: ' + ties;
}

function checkWinner(computerPlay, playerPlay) {
    if (playerPlay === computerPlay) {
        document.querySelector('#roundWinner').textContent = "Round Winner: Tie"
        return "Tie";
    } else if (
    (playerPlay === choices[0] && computerPlay === choices[2]) ||
    (playerPlay === choices[1] && computerPlay === choices[0]) || 
    (playerPlay === choices [2] && computerPlay === choices[1])) {
        document.querySelector('#roundWinner').textContent = "Round Winner: Player, " + playerPlay + ' beats ' + computerPlay;
        return "Player";
    } else if (
        (computerPlay === choices[0] && playerPlay === choices[2]) ||
        (computerPlay === choices[1] && playerPlay === choices[0]) || 
        (computerPlay === choices [2] && playerPlay === choices[1])) {
        document.querySelector('#roundWinner').textContent = "Round Winner: Computer, " + computerPlay + ' beats ' + playerPlay;
        return "Computer";
    }
}

function checkWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins, computerWins);
}

function declareWinner() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    if (playerWins > computerWins) {
        document.querySelector('#gameWinner').textContent = 'Congrats, you won!';
    } else if (computerWins > playerWins) {
        document.querySelector('#gameWinner').textContent = 'You lost!';
    }
}

function playAgain() {
    let playAgainButton = document.querySelector('#playAgain');
    playAgainButton.style = 'display: block';
    playAgainButton.addEventListener('click', () => { 
        winners.length = 0;
        document.querySelector('#roundWinner').textContent = '';
        document.querySelector('#pWins').textContent = 'Player Wins: 0';
        document.querySelector('#cWins').textContent = 'Computer Wins: 0';
        document.querySelector('#ties').textContent = 'Ties: 0';
        document.querySelector('#gameWinner').textContent = '';
    })
}

startGame();

// function updateScore() {
//     let playerWins = winners.filter((item) => item == "Player").length;
//     let computerWins = winners.filter((item) => item == "Computer").length;
//     let ties = winners.filter((item) => item == "Tie").length;
//     console.log("Player: " + playerWins + " Computer: " + computerWins + " Ties: " + ties)
// }

// function isValid (promptInput) {
//     if (promptInput === null) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function countWinners (computer) {
//     return (winners.filter((item) => item == computer).length);
// }

// function game() {
//     console.log ("First to 3 wins, wins the match");
//     let i = 1;
//     while ((winners.filter((item) => item == "Player").length < 3) && (winners.filter((item) => item == "Computer").length < 3)) {
//         console.log ("Game #" + i);
//         playRound ();
//         i++;
//         console.log ("---------------");
//     }
//     // for (let i = 1; i <= 5; i++) {
//     //     console.log("Round: " + i);
//     //     playRound();
//     //     console.log ("---------------------");
//     // }
//     console.log(declareWinner());
// }

 // let playerPlay = "";
    // while (playerPlay !== "rock" && playerPlay !== "paper" && playerPlay !== "scissors") {
    //     let input = prompt ("Make your choice: rock, paper or scissors.");
    //     isValid(input);
    //     if (isValid(input)) {
    //         playerPlay = input.toLowerCase();
    //     }
    // }